import { useSignal, useComputed } from "@preact/signals";
import { Calculator, ProductType, InsuranceType } from "../lib/calculator/mod.ts";
import { formatMoney } from "../lib/utils/format.ts";
import { createLoanApplication, buildLoanPayload, getBorrowerDashboardUrl } from "../lib/api/cashare.ts";
import { LoanProduct, LiableEntity } from "../lib/api/types.ts";
import { storeTokens, storeUserDetails } from "../lib/auth/storage.ts";
import EmailValidationModal from "./modals/EmailValidationModal.tsx";
import TwoFactorModal from "./modals/TwoFactorModal.tsx";
import ErrorModal from "./modals/ErrorModal.tsx";
import type { Locale } from "../lib/i18n/index.ts";

const content = {
  de: {
    badge: "KMU Kreditantrag",
    title: "In wenigen Minuten zum KMU-Kredit",
    form: {
      amountLabel: "Darlehensbetrag (10'000-1'000'000)",
      amountPlaceholder: "z.B. 50000",
      durationLabel: "Laufzeit (3-60 Monate)",
      durationPlaceholder: "z.B. 24",
      durationHint:
        "Sie können jederzeit den Betrag und die Laufzeit ändern, bevor Sie Ihren Antrag einreichen.",
      emailLabel: "Ihre E-Mail-Adresse",
      emailPlaceholder: "Ihre E-Mail-Adresse",
      passwordLabel: "Ihr Passwort",
      passwordPlaceholder: "Ihr Passwort",
      submit: "Jetzt beantragen",
      submitting: "Wird verarbeitet...",
    },
    rates: {
      interestRate: "Zinssatz",
      monthlyPayment: "Monatsrate*",
      interestCosts: "Zinskosten*",
      platformFee: "Plattformgebühr*",
      from: "von",
      to: "bis",
      minRate: "5.9 %",
      maxRate: "14.9 %",
      disclaimer:
        "*Die effektiven Werte hängen von Ihrem Betrag, der Laufzeit und dem Zinssatz Ihres Darlehens ab. Sobald Sie den Antrag eingereicht haben, können wir Ihnen ein individuelles Angebot unterbreiten. Die Beträge verstehen sich in CHF.",
    },
    footer: {
      hasAccount: "Sie haben schon ein Konto?",
      login: "Einloggen",
      loginLink: "/login",
      terms: "Mit der Registrierung stimmen Sie unseren",
      termsLink: "Nutzungsbedingungen",
      termsLinkHref: "/agb",
      termsEnd: "zu.",
    },
    validation: {
      emailRequired: "Bitte geben Sie Ihre E-Mail-Adresse ein.",
      emailInvalid: "Bitte geben Sie eine gültige E-Mail-Adresse ein.",
      passwordRequired: "Bitte geben Sie ein Passwort ein.",
      amountInvalid: "Bitte geben Sie einen Betrag zwischen 10'000 und 1'000'000 ein.",
      durationInvalid: "Bitte geben Sie eine Laufzeit zwischen 3 und 60 Monaten ein.",
    },
  },
  en: {
    badge: "SME Loan Application",
    title: "Get Your SME Loan in Minutes",
    form: {
      amountLabel: "Loan Amount (10,000-1,000,000)",
      amountPlaceholder: "e.g. 50000",
      durationLabel: "Duration (3-60 Months)",
      durationPlaceholder: "e.g. 24",
      durationHint:
        "You can change the amount and duration at any time before submitting your application.",
      emailLabel: "Your Email Address",
      emailPlaceholder: "Your Email Address",
      passwordLabel: "Your Password",
      passwordPlaceholder: "Your Password",
      submit: "Apply Now",
      submitting: "Processing...",
    },
    rates: {
      interestRate: "Interest Rate",
      monthlyPayment: "Monthly Payment*",
      interestCosts: "Interest Costs*",
      platformFee: "Platform Fee*",
      from: "from",
      to: "to",
      minRate: "5.9%",
      maxRate: "14.9%",
      disclaimer:
        "*The actual values depend on your amount, duration, and interest rate of your loan. Once you submit the application, we can provide you with a personalized offer. Amounts are in CHF.",
    },
    footer: {
      hasAccount: "Already have an account?",
      login: "Log in",
      loginLink: "/en/login",
      terms: "By registering, you agree to our",
      termsLink: "Terms of Use",
      termsLinkHref: "/en/terms",
      termsEnd: ".",
    },
    validation: {
      emailRequired: "Please enter your email address.",
      emailInvalid: "Please enter a valid email address.",
      passwordRequired: "Please enter a password.",
      amountInvalid: "Please enter an amount between 10,000 and 1,000,000.",
      durationInvalid: "Please enter a duration between 3 and 60 months.",
    },
  },
  fr: {
    badge: "Demande de crédit PME",
    title: "Obtenez votre crédit PME en quelques minutes",
    form: {
      amountLabel: "Montant du prêt (10'000-1'000'000)",
      amountPlaceholder: "p.ex. 50000",
      durationLabel: "Durée (3-60 mois)",
      durationPlaceholder: "p.ex. 24",
      durationHint:
        "Vous pouvez modifier le montant et la durée à tout moment avant de soumettre votre demande.",
      emailLabel: "Votre adresse e-mail",
      emailPlaceholder: "Votre adresse e-mail",
      passwordLabel: "Votre mot de passe",
      passwordPlaceholder: "Votre mot de passe",
      submit: "Demander maintenant",
      submitting: "Traitement en cours...",
    },
    rates: {
      interestRate: "Taux d'intérêt",
      monthlyPayment: "Mensualité*",
      interestCosts: "Coûts d'intérêt*",
      platformFee: "Frais de plateforme*",
      from: "de",
      to: "à",
      minRate: "5.9%",
      maxRate: "14.9%",
      disclaimer:
        "*Les valeurs effectives dépendent de votre montant, de la durée et du taux d'intérêt de votre prêt. Une fois la demande soumise, nous pourrons vous faire une offre personnalisée. Les montants sont en CHF.",
    },
    footer: {
      hasAccount: "Vous avez déjà un compte?",
      login: "Se connecter",
      loginLink: "/fr/login",
      terms: "En vous inscrivant, vous acceptez nos",
      termsLink: "Conditions d'utilisation",
      termsLinkHref: "/fr/cgv",
      termsEnd: ".",
    },
    validation: {
      emailRequired: "Veuillez saisir votre adresse e-mail.",
      emailInvalid: "Veuillez saisir une adresse e-mail valide.",
      passwordRequired: "Veuillez saisir un mot de passe.",
      amountInvalid: "Veuillez saisir un montant entre 10'000 et 1'000'000.",
      durationInvalid: "Veuillez saisir une durée entre 3 et 60 mois.",
    },
  },
};

interface SmeApplyFormProps {
  locale: Locale;
}

export default function SmeApplyForm({ locale }: SmeApplyFormProps) {
  const t = content[locale];

  // Calculator instance - SME uses P2S product type
  const calc = new Calculator();
  calc.setProduct(ProductType.P2S);
  calc.setInsuranceType(InsuranceType.NONE);

  // Form state
  const amount = useSignal(50000);
  const duration = useSignal(24);
  const email = useSignal("");
  const password = useSignal("");

  // UI state
  const isLoading = useSignal(false);
  const formError = useSignal("");
  const fieldErrors = useSignal<Record<string, string>>({});

  // Modal state
  const showEmailValidation = useSignal(false);
  const showTwoFactor = useSignal(false);
  const showError = useSignal(false);
  const errorMessage = useSignal("");
  const pendingAuthCode = useSignal("");

  // SME interest rates
  const minRate = 5.9;
  const maxRate = 14.9;

  // Computed results for min interest
  const resultsMin = useComputed(() => {
    if (amount.value < 10000 || amount.value > 1000000) return null;
    if (duration.value < 3 || duration.value > 60) return null;
    return calc.calculate(amount.value, minRate, duration.value);
  });

  // Computed results for max interest
  const resultsMax = useComputed(() => {
    if (amount.value < 10000 || amount.value > 1000000) return null;
    if (duration.value < 3 || duration.value > 60) return null;
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
    const errors: Record<string, string> = {};

    if (amount.value < 10000 || amount.value > 1000000) {
      errors.amount = t.validation.amountInvalid;
    }

    if (duration.value < 3 || duration.value > 60) {
      errors.duration = t.validation.durationInvalid;
    }

    if (!email.value) {
      errors.email = t.validation.emailRequired;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
      errors.email = t.validation.emailInvalid;
    }

    if (!password.value) {
      errors.password = t.validation.passwordRequired;
    }

    fieldErrors.value = errors;
    return Object.keys(errors).length === 0;
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
        product: LoanProduct.P2S,
        liableEntity: LiableEntity.SME,
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
    pendingAuthCode.value = code;
    // Resubmit with auth code
    const fakeEvent = { preventDefault: () => {} } as Event;
    await handleSubmit(fakeEvent, code);
  };

  // Handle amount input
  const handleAmountChange = (e: Event) => {
    const target = e.target as HTMLInputElement;
    const value = target.value.replace(/[^0-9]/g, "");
    amount.value = parseInt(value) || 0;
    if (fieldErrors.value.amount) {
      const { amount: _, ...rest } = fieldErrors.value;
      fieldErrors.value = rest;
    }
  };

  // Handle duration input
  const handleDurationChange = (e: Event) => {
    const target = e.target as HTMLInputElement;
    const value = target.value.replace(/[^0-9]/g, "");
    duration.value = parseInt(value) || 0;
    if (fieldErrors.value.duration) {
      const { duration: _, ...rest } = fieldErrors.value;
      fieldErrors.value = rest;
    }
  };

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
                      onInput={(e) => {
                        email.value = (e.target as HTMLInputElement).value;
                        if (fieldErrors.value.email) {
                          const { email: _, ...rest } = fieldErrors.value;
                          fieldErrors.value = rest;
                        }
                      }}
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
                      onInput={(e) => {
                        password.value = (e.target as HTMLInputElement).value;
                        if (fieldErrors.value.password) {
                          const { password: _, ...rest } = fieldErrors.value;
                          fieldErrors.value = rest;
                        }
                      }}
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
                        {t.rates.monthlyPayment}
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
