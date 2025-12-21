import { useSignal, useComputed } from "@preact/signals";
import { useEffect, useRef } from "preact/hooks";
import {
  Calculator,
  ProductType,
  InsuranceType,
} from "../../lib/calculator/mod.ts";
import { formatMoney, parseSwissNumber } from "../../lib/utils/format.ts";
import { t, type Locale } from "../../lib/i18n/index.ts";

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
  const tc = (key: "privateTab" | "smeTab" | "loanAmount" | "duration" | "interest" | "Fees" | "withInsurance" | "monthlyRate" | "insuranceIncluded" | "from" | "applyLoan" | "applyNote" | "disclaimer" | "amountError" | "monthsError") => t(lang, "calculator", key);
  const tm = (key: "CHF" | "month" | "months") => t(lang, "common", key);

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
      amountError.value = tc("amountError");
    } else {
      amountError.value = "";
    }
    updateSliderBackground(amountSliderRef.current);
  }

  function validateLifetime() {
    if (lifetime.value < 1 || lifetime.value > 60) {
      lifetimeError.value = tc("monthsError");
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
    // Parse Swiss-formatted number (strip apostrophes)
    amount.value = parseSwissNumber(target.value) || 0;
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
            {tc("privateTab")}
          </button>
          <button
            type="button"
            class={`loan-calculator__tab ${activeTab.value === "sme" ? "loan-calculator__tab--active" : ""}`}
            onClick={() => switchTab("sme")}
          >
            {tc("smeTab")}
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
              <span class="loan-calculator__field-label">{tc("loanAmount")}</span>
              <div class="input-group">
                <span class="input-group__prefix">{tm("CHF")}</span>
                <input
                  type="text"
                  inputMode="numeric"
                  class="input-group__input"
                  value={formatMoney(amount.value)}
                  onInput={handleAmountInput}
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
                style={`--slider-fill: ${((amount.value - 1000) / (1000000 - 1000)) * 100}%`}
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
              <span class="loan-calculator__field-label">{tc("duration")}</span>
              <div class="input-group">
                <input
                  type="number"
                  class="input-group__input"
                  value={lifetime.value}
                  onInput={handleLifetimeInput}
                  min={1}
                  max={60}
                />
                <span class="input-group__suffix">{tm("months")}</span>
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
                style={`--slider-fill: ${((lifetime.value - 1) / (60 - 1)) * 100}%`}
              />
              <div class="calculator__slider-labels">
                <span>1 {tm("month")}</span>
                <span>60 {tm("months")}</span>
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
            {tc("applyNote")}
          </div>

          {/* Results Header */}
          <div class="loan-calculator__results-header">
            <div class="loan-calculator__results-col">{tc("interest")}:</div>
            <div class="loan-calculator__results-col">{tc("Fees")}:</div>
            <div class="loan-calculator__results-col">
              {activeTab.value === "private" && (
                <label class="form-group__checkbox">
                  <input
                    type="checkbox"
                    checked={hasInsurance.value}
                    onChange={() => (hasInsurance.value = !hasInsurance.value)}
                  />
                  <span>{tc("withInsurance")}</span>
                </label>
              )}
            </div>
            <div class="loan-calculator__results-col loan-calculator__results-col--right">
              {tc("monthlyRate")}:
            </div>
          </div>

          {/* Min Interest Row */}
          <div class="loan-calculator__results-row calculator__results-row--stagger-1">
            <div class="loan-calculator__results-col">
              {tc("from")} <strong>{interestRates.value.min}%</strong>
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
                {tm("CHF")} {resultsMin.value ? formatMoney(parseFloat(resultsMin.value.instalment)) : "-"}
              </div>
              {activeTab.value === "private" && (
                <div class="loan-calculator__results-subtext">
                  {tc("insuranceIncluded")}: {hasInsurance.value ? resultsMin.value?.insuranceUnemployedProRata ?? "0.00" : "0.00"}
                </div>
              )}
            </div>
          </div>

          {/* Max Interest Row */}
          <div class="loan-calculator__results-row calculator__results-row--stagger-2">
            <div class="loan-calculator__results-col">
              {tc("from")} <strong>{interestRates.value.max}%</strong>
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
                {tm("CHF")} {resultsMax.value ? formatMoney(parseFloat(resultsMax.value.instalment)) : "-"}
              </div>
              {activeTab.value === "private" && (
                <div class="loan-calculator__results-subtext">
                  {tc("insuranceIncluded")}: {hasInsurance.value ? resultsMax.value?.insuranceUnemployedProRata ?? "0.00" : "0.00"}
                </div>
              )}
            </div>
          </div>

          {/* Disclaimer */}
          <div class="loan-calculator__disclaimer">
            {tc("disclaimer")}
          </div>

          {/* Apply Button */}
          <div class="loan-calculator__action">
            <a
              href={applicationUrl.value}
              class={`btn btn--primary hover-lift shadow-primary ${amountError.value || lifetimeError.value ? "btn--disabled" : ""}`}
            >
              {tc("applyLoan")}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
