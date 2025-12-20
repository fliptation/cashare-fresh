import { useSignal, useComputed } from "@preact/signals";
import { useEffect, useRef } from "preact/hooks";
import {
  Calculator,
  ProductType,
  InsuranceType,
} from "../../lib/calculator/mod.ts";
import { formatMoney } from "../../lib/utils/format.ts";
import type { Locale } from "../../lib/i18n/index.ts";

// Translations for loan calculator
const translations = {
  de: {
    privateTab: "Privatkredit",
    smeTab: "KMU-Darlehen",
    loanAmount: "Darlehenssumme",
    duration: "Laufzeit",
    months: "Monate",
    month: "Monat",
    interest: "Zins",
    fees: "Gebühren",
    withInsurance: "Mit Versicherung?",
    monthlyRate: "Mtl. Rate",
    insuranceIncluded: "davon Versicherung",
    from: "von",
    applyLoan: "Darlehen beantragen",
    applyNote: "BEANTRAGEN SIE IHREN PERSÖNLICHEN KREDIT IN WENIGEN MINUTEN",
    disclaimer: "Die effektiven Werte hängen von Ihrem Betrag, der Laufzeit und dem Zinssatz Ihres Darlehens ab. Sobald Sie den Antrag eingereicht haben, können wir Ihnen ein individuelles Angebot unterbreiten.",
    CHF: "CHF",
    amountError: "Bitte geben Sie einen Betrag zwischen 1'000 und 1'000'000 ein.",
    monthsError: "Bitte geben Sie eine Laufzeit zwischen 1 und 60 Monate ein.",
  },
  en: {
    privateTab: "Private Loan",
    smeTab: "SME Loan",
    loanAmount: "Loan amount",
    duration: "Duration",
    months: "months",
    month: "month",
    interest: "Interest",
    fees: "Fees",
    withInsurance: "With insurance?",
    monthlyRate: "Monthly rate",
    insuranceIncluded: "of which insurance",
    from: "from",
    applyLoan: "Apply for loan",
    applyNote: "APPLY FOR YOUR PERSONAL LOAN IN A FEW MINUTES",
    disclaimer: "The actual values depend on your amount, the term and the interest rate of your loan. Once you have submitted your application, we can make you an individual offer.",
    CHF: "CHF",
    amountError: "Please enter an amount between 1,000 and 1,000,000.",
    monthsError: "Please enter a duration between 1 and 60 months.",
  },
  fr: {
    privateTab: "Prêt privé",
    smeTab: "Prêt PME",
    loanAmount: "Montant du prêt",
    duration: "Durée",
    months: "mois",
    month: "mois",
    interest: "Intérêt",
    fees: "Frais",
    withInsurance: "Avec assurance?",
    monthlyRate: "Mensualité",
    insuranceIncluded: "dont assurance",
    from: "dès",
    applyLoan: "Demander un prêt",
    applyNote: "DEMANDEZ VOTRE PRÊT PERSONNEL EN QUELQUES MINUTES",
    disclaimer: "Les valeurs effectives dépendent de votre montant, de la durée et du taux d'intérêt de votre prêt. Une fois votre demande soumise, nous pourrons vous faire une offre individuelle.",
    CHF: "CHF",
    amountError: "Veuillez saisir un montant entre 1'000 et 1'000'000.",
    monthsError: "Veuillez saisir une durée entre 1 et 60 mois.",
  },
} as const;

type LoanType = "private" | "sme";

interface LoanCalculatorProps {
  lang?: Locale;
  initialTab?: LoanType;
  initialAmount?: number;
  initialLifetime?: number;
  showTabs?: boolean;
}

export default function LoanCalculator({
  lang = "de",
  initialTab = "private",
  initialAmount = 20000,
  initialLifetime = 24,
  showTabs = true,
}: LoanCalculatorProps) {
  const t = (key: keyof typeof translations.de) => translations[lang][key];

  // Calculator instance
  const calc = new Calculator();

  // State
  const activeTab = useSignal<LoanType>(initialTab);
  const amount = useSignal(initialAmount);
  const lifetime = useSignal(initialLifetime);
  const hasInsurance = useSignal(false);
  const amountError = useSignal("");
  const lifetimeError = useSignal("");

  // Refs
  const amountSliderRef = useRef<HTMLInputElement>(null);
  const lifetimeSliderRef = useRef<HTMLInputElement>(null);
  const valueMinRef = useRef<HTMLDivElement>(null);
  const valueMaxRef = useRef<HTMLDivElement>(null);

  // Track if values are updating for animation
  const isUpdating = useSignal(false);

  // Interest rates depend on loan type
  const interestRates = useComputed(() => {
    if (activeTab.value === "private") {
      return { min: 4.4, max: 10.9 };
    }
    // SME loans have different rates
    return { min: 5.9, max: 14.9 };
  });

  // Product type based on tab
  const productType = useComputed(() =>
    activeTab.value === "private" ? ProductType.P2P : ProductType.P2S
  );

  // Insurance type based on checkbox (only for private loans)
  const insuranceType = useComputed(() => {
    if (activeTab.value === "sme") return InsuranceType.NONE;
    return hasInsurance.value
      ? InsuranceType.DEATHCASE_ACCIDENT_SICKNESS_UNEMPLOYMENT
      : InsuranceType.NONE;
  });

  // Computed results for min interest
  const resultsMin = useComputed(() => {
    if (amountError.value || lifetimeError.value) return null;
    calc.setProduct(productType.value);
    calc.setInsuranceType(insuranceType.value);
    return calc.calculate(amount.value, interestRates.value.min, lifetime.value);
  });

  // Computed results for max interest
  const resultsMax = useComputed(() => {
    if (amountError.value || lifetimeError.value) return null;
    calc.setProduct(productType.value);
    calc.setInsuranceType(insuranceType.value);
    return calc.calculate(amount.value, interestRates.value.max, lifetime.value);
  });

  // Dynamic application URL
  const applicationUrl = useComputed(() => {
    if (amountError.value || lifetimeError.value) return "#";
    const basePath = activeTab.value === "private"
      ? "/privatdarlehen-beantragen/"
      : "/kmu-darlehen-beantragen/";
    const params = `?amount=${amount.value}&lifetime=${lifetime.value}`;
    return lang === "de" ? `${basePath}${params}` : `/${lang}${basePath}${params}`;
  });

  // Update slider background
  function updateSliderBackground(slider: HTMLInputElement | null) {
    if (!slider) return;
    const min = parseFloat(slider.min) || 0;
    const max = parseFloat(slider.max) || 100;
    const val = parseFloat(slider.value) || 0;
    const percentage = ((val - min) / (max - min)) * 100;
    slider.style.background = `linear-gradient(to right, var(--color-primary) 0%, var(--color-primary) ${percentage}%, var(--color-bg-light) ${percentage}%, var(--color-bg-light) 100%)`;
  }

  // Trigger value update animation
  function triggerValueAnimation() {
    // Add updating class to trigger CSS animation
    valueMinRef.current?.classList.add("loan-calculator__results-value--updating");
    valueMaxRef.current?.classList.add("loan-calculator__results-value--updating");

    // Remove class after animation completes
    setTimeout(() => {
      valueMinRef.current?.classList.remove("loan-calculator__results-value--updating");
      valueMaxRef.current?.classList.remove("loan-calculator__results-value--updating");
    }, 500);
  }

  // Validation
  function validateAmount() {
    if (amount.value < 1000 || amount.value > 1000000) {
      amountError.value = t("amountError");
    } else {
      amountError.value = "";
    }
    updateSliderBackground(amountSliderRef.current);
  }

  function validateLifetime() {
    if (lifetime.value < 1 || lifetime.value > 60) {
      lifetimeError.value = t("monthsError");
    } else {
      lifetimeError.value = "";
    }
    updateSliderBackground(lifetimeSliderRef.current);
  }

  // Event handlers
  function handleAmountSliderChange(e: Event) {
    const target = e.target as HTMLInputElement;
    amount.value = parseInt(target.value);
    validateAmount();
    triggerValueAnimation();
    // Add pulse effect
    target.classList.add('slider--pulse');
    setTimeout(() => target.classList.remove('slider--pulse'), 150);
  }

  function handleAmountInput(e: Event) {
    const target = e.target as HTMLInputElement;
    amount.value = parseInt(target.value) || 0;
    validateAmount();
    triggerValueAnimation();
  }

  function handleLifetimeSliderChange(e: Event) {
    const target = e.target as HTMLInputElement;
    lifetime.value = parseInt(target.value);
    validateLifetime();
    triggerValueAnimation();
    // Add pulse effect
    target.classList.add('slider--pulse');
    setTimeout(() => target.classList.remove('slider--pulse'), 150);
  }

  function handleLifetimeInput(e: Event) {
    const target = e.target as HTMLInputElement;
    lifetime.value = parseInt(target.value) || 0;
    validateLifetime();
    triggerValueAnimation();
  }

  function switchTab(tab: LoanType) {
    if (activeTab.value === tab) return;
    activeTab.value = tab;
    // Reset insurance when switching to SME
    if (tab === "sme") {
      hasInsurance.value = false;
    }
  }

  // Initialize sliders
  useEffect(() => {
    updateSliderBackground(amountSliderRef.current);
    updateSliderBackground(lifetimeSliderRef.current);
  }, []);

  return (
    <div class="loan-calculator">
      {/* Tabs */}
      {showTabs && (
        <div class="loan-calculator__tabs">
          <button
            type="button"
            class={`loan-calculator__tab ${activeTab.value === "private" ? "loan-calculator__tab--active" : ""}`}
            onClick={() => switchTab("private")}
          >
            {t("privateTab")}
          </button>
          <button
            type="button"
            class={`loan-calculator__tab ${activeTab.value === "sme" ? "loan-calculator__tab--active" : ""}`}
            onClick={() => switchTab("sme")}
          >
            {t("smeTab")}
          </button>
          <div
            class="loan-calculator__tab-indicator"
            style={`transform: translateX(${activeTab.value === "private" ? "0%" : "100%"})`}
          />
        </div>
      )}

      <div class="loan-calculator__content">
        {/* Input Section */}
        <div class="loan-calculator__inputs">
          {/* Amount Input */}
          <div class="loan-calculator__field">
            <div class="loan-calculator__field-header">
              <span class="loan-calculator__field-label">{t("loanAmount")}</span>
              <div class="input-group">
                <span class="input-group__prefix">{t("CHF")}</span>
                <input
                  type="number"
                  class="input-group__input"
                  value={amount.value}
                  onInput={handleAmountInput}
                  min={1000}
                  max={1000000}
                />
              </div>
            </div>
            <div class="loan-calculator__slider-wrapper">
              <input
                ref={amountSliderRef}
                type="range"
                class="slider"
                value={amount.value}
                onInput={handleAmountSliderChange}
                min={1000}
                max={1000000}
                step={500}
              />
              <div class="calculator__slider-labels">
                <span>1'000</span>
                <span>1'000'000</span>
              </div>
            </div>
            {amountError.value && (
              <div class="calculator__error">{amountError.value}</div>
            )}
          </div>

          {/* Lifetime Input */}
          <div class="loan-calculator__field">
            <div class="loan-calculator__field-header">
              <span class="loan-calculator__field-label">{t("duration")}</span>
              <div class="input-group">
                <input
                  type="number"
                  class="input-group__input"
                  value={lifetime.value}
                  onInput={handleLifetimeInput}
                  min={1}
                  max={60}
                />
                <span class="input-group__suffix">{t("months")}</span>
              </div>
            </div>
            <div class="loan-calculator__slider-wrapper">
              <input
                ref={lifetimeSliderRef}
                type="range"
                class="slider"
                value={lifetime.value}
                onInput={handleLifetimeSliderChange}
                min={1}
                max={60}
                step={1}
              />
              <div class="calculator__slider-labels">
                <span>1 {t("month")}</span>
                <span>60 {t("months")}</span>
              </div>
            </div>
            {lifetimeError.value && (
              <div class="calculator__error">{lifetimeError.value}</div>
            )}
          </div>
        </div>

        {/* Results Section */}
        <div class="loan-calculator__results">
          <div class="loan-calculator__promo">
            {t("applyNote")}
          </div>

          {/* Results Header */}
          <div class="loan-calculator__results-header">
            <div class="loan-calculator__results-col">{t("interest")}:</div>
            <div class="loan-calculator__results-col">{t("fees")}:</div>
            <div class="loan-calculator__results-col">
              {activeTab.value === "private" && (
                <label class="form-group__checkbox">
                  <input
                    type="checkbox"
                    checked={hasInsurance.value}
                    onChange={() => (hasInsurance.value = !hasInsurance.value)}
                  />
                  <span>{t("withInsurance")}</span>
                </label>
              )}
            </div>
            <div class="loan-calculator__results-col loan-calculator__results-col--right">
              {t("monthlyRate")}:
            </div>
          </div>

          {/* Min Interest Row */}
          <div class="loan-calculator__results-row calculator__results-row--stagger-1">
            <div class="loan-calculator__results-col">
              {t("from")} <strong>{interestRates.value.min}%</strong>
            </div>
            <div class="loan-calculator__results-col">
              {resultsMin.value?.fee ?? "-"}
            </div>
            <div class="loan-calculator__results-col">
              {activeTab.value === "private" && hasInsurance.value
                ? resultsMin.value?.insuranceUnemployedAddedUp ?? "-"
                : ""}
            </div>
            <div class="loan-calculator__results-col loan-calculator__results-col--right">
              <div
                ref={valueMinRef}
                class="loan-calculator__results-value"
              >
                {t("CHF")} {resultsMin.value ? formatMoney(parseFloat(resultsMin.value.instalment)) : "-"}
              </div>
              {activeTab.value === "private" && (
                <div class="loan-calculator__results-subtext">
                  {t("insuranceIncluded")}: {hasInsurance.value ? resultsMin.value?.insuranceUnemployedProRata ?? "0.00" : "0.00"}
                </div>
              )}
            </div>
          </div>

          {/* Max Interest Row */}
          <div class="loan-calculator__results-row calculator__results-row--stagger-2">
            <div class="loan-calculator__results-col">
              {t("from")} <strong>{interestRates.value.max}%</strong>
            </div>
            <div class="loan-calculator__results-col">
              {resultsMax.value?.fee ?? "-"}
            </div>
            <div class="loan-calculator__results-col">
              {activeTab.value === "private" && hasInsurance.value
                ? resultsMax.value?.insuranceUnemployedAddedUp ?? "-"
                : ""}
            </div>
            <div class="loan-calculator__results-col loan-calculator__results-col--right">
              <div
                ref={valueMaxRef}
                class="loan-calculator__results-value"
              >
                {t("CHF")} {resultsMax.value ? formatMoney(parseFloat(resultsMax.value.instalment)) : "-"}
              </div>
              {activeTab.value === "private" && (
                <div class="loan-calculator__results-subtext">
                  {t("insuranceIncluded")}: {hasInsurance.value ? resultsMax.value?.insuranceUnemployedProRata ?? "0.00" : "0.00"}
                </div>
              )}
            </div>
          </div>

          {/* Disclaimer */}
          <div class="loan-calculator__disclaimer">
            {t("disclaimer")}
          </div>

          {/* Apply Button */}
          <div class="loan-calculator__action">
            <a
              href={applicationUrl.value}
              class={`btn btn--primary hover-lift shadow-primary ${amountError.value || lifetimeError.value ? "btn--disabled" : ""}`}
            >
              {t("applyLoan")}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
