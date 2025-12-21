import { useSignal, useComputed } from "@preact/signals";
import { Calculator, InsuranceType } from "../lib/calculator/mod.ts";
import { formatMoney } from "../lib/utils/format.ts";
import { createLoanApplication, buildLoanPayload, getBorrowerDashboardUrl } from "../lib/api/cashare.ts";
import { storeTokens, storeUserDetails } from "../lib/auth/storage.ts";
import {
  LOAN_PRODUCTS,
  type LoanProductKey,
} from "../lib/config/loanProducts.ts";
import {
  validateLoanApplicationForm,
  isFormValid,
  parseNumericInput,
  type FieldErrors,
} from "../lib/utils/validation.ts";
import EmailValidationModal from "./modals/EmailValidationModal.tsx";
import TwoFactorModal from "./modals/TwoFactorModal.tsx";
import ErrorModal from "./modals/ErrorModal.tsx";
import type { Locale } from "../lib/i18n/index.ts";

/**
 * Localized content for loan application forms
 */
interface FormContent {
  badge: string;
  title: string;
  subtitle?: string;
  form: {
    amountLabel: string;
    amountPlaceholder: string;
    durationLabel: string;
    durationPlaceholder: string;
    durationHint: string;
    emailLabel: string;
    emailPlaceholder: string;
    passwordLabel: string;
    passwordPlaceholder: string;
    submit: string;
    submitting: string;
  };
  rates: {
    interestRate: string;
    monthlyPayment?: string;
    totalRepayment?: string;
    interestCosts: string;
    platformFee: string;
    from: string;
    to: string;
    minRate: string;
    maxRate: string;
    disclaimer: string;
  };
  footer: {
    hasAccount: string;
    login: string;
    loginLink: string;
    terms: string;
    termsLink: string;
    termsLinkHref: string;
    termsEnd: string;
  };
  validation: {
    emailRequired: string;
    emailInvalid: string;
    passwordRequired: string;
    amountInvalid: string;
    durationInvalid: string;
  };
}

/**
 * Props for the unified loan application form
 */
interface LoanApplicationFormProps {
  /** Loan product type */
  productType: LoanProductKey;
  /** Current locale */
  locale: Locale;
  /** Localized content */
  content: FormContent;
  /** Initial amount (optional, defaults to product default) */
  initialAmount?: number;
  /** Initial duration (optional, defaults to product default) */
  initialDuration?: number;
}

/**
 * Unified Loan Application Form
 *
 * A single configurable form component that handles all loan types:
 * - Private loans (P2P)
 * - SME loans (P2S)
 * - SME bullet loans (single repayment)
 */
export default function LoanApplicationForm({
  productType,
  locale,
  content: t,
  initialAmount,
  initialDuration,
}: LoanApplicationFormProps) {
  // Get product configuration
  const config = LOAN_PRODUCTS[productType];

  // Calculator instance
  const calc = new Calculator();
  calc.setProduct(config.calculatorType);
  calc.setInsuranceType(InsuranceType.NONE);

  // Form state
  const amount = useSignal(initialAmount ?? config.amount.default);
  const duration = useSignal(initialDuration ?? config.duration.default);
  const email = useSignal("");
  const password = useSignal("");

  // UI state
  const isLoading = useSignal(false);
  const formError = useSignal("");
  const fieldErrors = useSignal<FieldErrors>({});

  // Modal state
  const showEmailValidation = useSignal(false);
  const showTwoFactor = useSignal(false);
  const showError = useSignal(false);
  const errorMessage = useSignal("");

  // Get rates from config
  const { min: minRate, max: maxRate } = config.rates;

  // Computed results for min interest
  const resultsMin = useComputed(() => {
    if (
      amount.value < config.amount.min ||
      amount.value > config.amount.max ||
      duration.value < config.duration.min ||
      duration.value > config.duration.max
    ) {
      return null;
    }
    return calc.calculate(amount.value, minRate, duration.value);
  });

  // Computed results for max interest
  const resultsMax = useComputed(() => {
    if (
      amount.value < config.amount.min ||
      amount.value > config.amount.max ||
      duration.value < config.duration.min ||
      duration.value > config.duration.max
    ) {
      return null;
    }
    return calc.calculate(amount.value, maxRate, duration.value);
  });

  // Format number with Swiss formatting
  const formatSwiss = (num: number | string | undefined): string => {
    if (num === undefined || num === null) return "-";
    const n = typeof num === "string" ? parseFloat(num) : num;
    if (isNaN(n)) return "-";
    return formatMoney(n);
  };

  // Validation
  const validateForm = (): boolean => {
    const errors = validateLoanApplicationForm(
      productType,
      {
        amount: amount.value,
        duration: duration.value,
        email: email.value,
        password: password.value,
      },
      t.validation
    );
    fieldErrors.value = errors;
    return isFormValid(errors);
  };

  // Handle form submission
  const handleSubmit = async (e: Event, authCode = "") => {
    e.preventDefault();
    formError.value = "";

    if (!validateForm()) return;

    isLoading.value = true;

    try {
      const payload = buildLoanPayload({
        amount: amount.value,
        interest: minRate,
        lifetime: duration.value,
        product: config.apiProduct,
        liableEntity: config.liableEntity,
        email: email.value,
        password: password.value,
        language: locale,
        authCode,
      });

      const response = await createLoanApplication(payload);

      // Handle response based on action
      switch (response.action) {
        case "redirect":
          // Success! Store tokens and redirect
          if (response.token && response.refresh_token) {
            storeTokens({
              token: response.token,
              refresh_token: response.refresh_token,
            });
          }
          if (response.userDetails) {
            storeUserDetails(response.userDetails);
          }
          // Redirect to dashboard
          window.location.href = response.redirect || getBorrowerDashboardUrl(locale);
          break;

        case "ok":
          // Email validation needed
          showEmailValidation.value = true;
          break;

        case "requestPossessionFactorAuthenticationToken":
          // 2FA required
          showTwoFactor.value = true;
          break;

        case "message":
        case "modalNLNL":
          // Error message
          errorMessage.value = response.message || "An error occurred";
          showError.value = true;
          break;

        default:
          errorMessage.value = response.message || "Unexpected response";
          showError.value = true;
      }
    } catch (err) {
      errorMessage.value = err instanceof Error ? err.message : "An error occurred";
      showError.value = true;
    } finally {
      isLoading.value = false;
    }
  };

  // Handle 2FA submission
  const handleTwoFactorSubmit = async (code: string) => {
    showTwoFactor.value = false;
    // Resubmit with auth code
    const fakeEvent = { preventDefault: () => {} } as Event;
    await handleSubmit(fakeEvent, code);
  };

  // Handle amount input
  const handleAmountChange = (e: Event) => {
    const target = e.target as HTMLInputElement;
    amount.value = parseNumericInput(target.value);
    if (fieldErrors.value.amount) {
      const { amount: _, ...rest } = fieldErrors.value;
      fieldErrors.value = rest;
    }
  };

  // Handle duration input
  const handleDurationChange = (e: Event) => {
    const target = e.target as HTMLInputElement;
    duration.value = parseNumericInput(target.value);
    if (fieldErrors.value.duration) {
      const { duration: _, ...rest } = fieldErrors.value;
      fieldErrors.value = rest;
    }
  };

  // Clear field error on input
  const clearFieldError = (field: string) => (e: Event) => {
    const target = e.target as HTMLInputElement;
    if (field === "email") email.value = target.value;
    if (field === "password") password.value = target.value;
    if (fieldErrors.value[field]) {
      const { [field]: _, ...rest } = fieldErrors.value;
      fieldErrors.value = rest;
    }
  };

  // Get the payment label based on product type
  const paymentLabel = config.isBullet
    ? t.rates.totalRepayment
    : t.rates.monthlyPayment;

  return (
    <>
      <section class="loan-apply gradient-hero">
        {/* Animated background orbs */}
        <div class="hero__orb hero__orb--1" aria-hidden="true"></div>
        <div class="hero__orb hero__orb--2" aria-hidden="true"></div>
        <div class="hero__orb hero__orb--3" aria-hidden="true"></div>
        <div class="hero__orb hero__orb--4" aria-hidden="true"></div>

        {/* Grid lines effect */}
        <div class="hero__grid-lines" aria-hidden="true"></div>
        <div class="hero__shine" aria-hidden="true"></div>
        <div class="hero__shine hero__shine--2" aria-hidden="true"></div>

        <div class="loan-apply__container">
          <div class="loan-apply__form-card">
            {/* Badge */}
            <span class="loan-apply__badge">{t.badge}</span>

            {/* Title */}
            <h1 class="loan-apply__title">{t.title}</h1>

            {/* Subtitle (for bullet loans) */}
            {t.subtitle && <p class="loan-apply__subtitle">{t.subtitle}</p>}

            {/* Form - Two Column Layout */}
            <form class="loan-apply__form" onSubmit={handleSubmit}>
              <div class="loan-apply__columns">
                {/* Left Column - Input Fields */}
                <div class="loan-apply__column loan-apply__column--left">
                  {/* Amount Field */}
                  <div class="loan-apply__field">
                    <label class="loan-apply__label">
                      {t.form.amountLabel}{" "}
                      <span class="loan-apply__required">*</span>
                    </label>
                    <input
                      type="text"
                      class={`loan-apply__input ${fieldErrors.value.amount ? "loan-apply__input--error" : ""}`}
                      placeholder={t.form.amountPlaceholder}
                      value={amount.value || ""}
                      onInput={handleAmountChange}
                      required
                    />
                    {fieldErrors.value.amount && (
                      <span class="loan-apply__field-error">{fieldErrors.value.amount}</span>
                    )}
                  </div>

                  {/* Duration Field */}
                  <div class="loan-apply__field">
                    <label class="loan-apply__label">
                      {t.form.durationLabel}{" "}
                      <span class="loan-apply__required">*</span>
                    </label>
                    <input
                      type="text"
                      class={`loan-apply__input ${fieldErrors.value.duration ? "loan-apply__input--error" : ""}`}
                      placeholder={t.form.durationPlaceholder}
                      value={duration.value || ""}
                      onInput={handleDurationChange}
                      required
                    />
                    {fieldErrors.value.duration && (
                      <span class="loan-apply__field-error">{fieldErrors.value.duration}</span>
                    )}
                  </div>

                  <p class="loan-apply__hint">{t.form.durationHint}</p>

                  {/* Email Field */}
                  <div class="loan-apply__field">
                    <label class="loan-apply__label">
                      {t.form.emailLabel}{" "}
                      <span class="loan-apply__required">*</span>
                    </label>
                    <input
                      type="email"
                      class={`loan-apply__input ${fieldErrors.value.email ? "loan-apply__input--error" : ""}`}
                      placeholder={t.form.emailPlaceholder}
                      value={email.value}
                      onInput={clearFieldError("email")}
                      required
                    />
                    {fieldErrors.value.email && (
                      <span class="loan-apply__field-error">{fieldErrors.value.email}</span>
                    )}
                  </div>

                  {/* Password Field */}
                  <div class="loan-apply__field">
                    <label class="loan-apply__label">
                      {t.form.passwordLabel}{" "}
                      <span class="loan-apply__required">*</span>
                    </label>
                    <input
                      type="password"
                      class={`loan-apply__input ${fieldErrors.value.password ? "loan-apply__input--error" : ""}`}
                      placeholder={t.form.passwordPlaceholder}
                      value={password.value}
                      onInput={clearFieldError("password")}
                      required
                    />
                    {fieldErrors.value.password && (
                      <span class="loan-apply__field-error">{fieldErrors.value.password}</span>
                    )}
                  </div>
                </div>

                {/* Right Column - Rates & Submit */}
                <div class="loan-apply__column loan-apply__column--right">
                  {/* Rate Display Table */}
                  <div class="loan-apply__rates">
                    <div class="loan-apply__rates-header">
                      <span></span>
                      <span class="loan-apply__rates-col loan-apply__rates-col--from">
                        {t.rates.from}
                      </span>
                      <span class="loan-apply__rates-col loan-apply__rates-col--to">
                        {t.rates.to}
                      </span>
                    </div>
                    <div class="loan-apply__rates-row">
                      <span class="loan-apply__rates-label">
                        {t.rates.interestRate}
                      </span>
                      <span class="loan-apply__rates-value loan-apply__rates-value--from">
                        {t.rates.minRate}
                      </span>
                      <span class="loan-apply__rates-value loan-apply__rates-value--to">
                        {t.rates.maxRate}
                      </span>
                    </div>
                    <div class="loan-apply__rates-row">
                      <span class="loan-apply__rates-label">
                        {paymentLabel}
                      </span>
                      <span class="loan-apply__rates-value loan-apply__rates-value--from">
                        {resultsMin.value ? formatSwiss(resultsMin.value.instalmentWithoutPremium) : "-"}
                      </span>
                      <span class="loan-apply__rates-value loan-apply__rates-value--to">
                        {resultsMax.value ? formatSwiss(resultsMax.value.instalmentWithoutPremium) : "-"}
                      </span>
                    </div>
                    <div class="loan-apply__rates-row">
                      <span class="loan-apply__rates-label">
                        {t.rates.interestCosts}
                      </span>
                      <span class="loan-apply__rates-value loan-apply__rates-value--from">
                        {resultsMin.value ? formatSwiss(resultsMin.value.interestCosts) : "-"}
                      </span>
                      <span class="loan-apply__rates-value loan-apply__rates-value--to">
                        {resultsMax.value ? formatSwiss(resultsMax.value.interestCosts) : "-"}
                      </span>
                    </div>
                    <div class="loan-apply__rates-row">
                      <span class="loan-apply__rates-label">
                        {t.rates.platformFee}
                      </span>
                      <span class="loan-apply__rates-value loan-apply__rates-value--from">
                        {resultsMin.value?.fee ? formatSwiss(resultsMin.value.fee) : "-"}
                      </span>
                      <span class="loan-apply__rates-value loan-apply__rates-value--to">
                        {resultsMax.value?.fee ? formatSwiss(resultsMax.value.fee) : "-"}
                      </span>
                    </div>
                  </div>

                  <p class="loan-apply__disclaimer">{t.rates.disclaimer}</p>

                  {/* Form Error */}
                  {formError.value && (
                    <p class="loan-apply__form-error">{formError.value}</p>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    class="btn btn--primary"
                    disabled={isLoading.value}
                  >
                    {isLoading.value ? t.form.submitting : t.form.submit}
                  </button>

                  {/* Footer Links */}
                  <div class="loan-apply__footer">
                    <p class="loan-apply__footer-text">
                      {t.footer.hasAccount}{" "}
                      <a
                        href={t.footer.loginLink}
                        class="loan-apply__footer-link"
                      >
                        {t.footer.login}
                      </a>.
                    </p>
                    <p class="loan-apply__footer-text">
                      {t.footer.terms}{" "}
                      <a
                        href={t.footer.termsLinkHref}
                        class="loan-apply__footer-link"
                      >
                        {t.footer.termsLink}
                      </a>{" "}
                      {t.footer.termsEnd}
                    </p>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Modals */}
      <EmailValidationModal
        isOpen={showEmailValidation.value}
        onClose={() => showEmailValidation.value = false}
        email={email.value}
        locale={locale}
      />

      <TwoFactorModal
        isOpen={showTwoFactor.value}
        onClose={() => showTwoFactor.value = false}
        onSubmit={handleTwoFactorSubmit}
        locale={locale}
      />

      <ErrorModal
        isOpen={showError.value}
        onClose={() => showError.value = false}
        message={errorMessage.value}
        locale={locale}
      />
    </>
  );
}
