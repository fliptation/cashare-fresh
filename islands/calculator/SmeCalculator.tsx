import { useSignal, useComputed } from "@preact/signals";
import { useEffect, useRef } from "preact/hooks";
import {
  Calculator,
  ProductType,
  InsuranceType,
} from "../../lib/calculator/mod.ts";
import { formatMoney } from "../../lib/utils/format.ts";
import { t, type Locale } from "../../lib/i18n/index.ts";

interface SmeCalculatorProps {
  lang?: Locale;
  minAmount?: number;
  maxAmount?: number;
  minLifetime?: number;
  maxLifetime?: number;
}

export default function SmeCalculator({
  lang = "de",
  minAmount = 10000,
  maxAmount = 1000000,
  minLifetime = 3,
  maxLifetime = 60,
}: SmeCalculatorProps) {
  const tc = (key: "smeTitle" | "loanAmount" | "duration" | "interest" | "Fees" | "monthlyRate" | "totalInterest" | "totalAmount" | "from" | "to" | "smeApplyLoan" | "smeAmountError" | "smeMonthsError" | "smeDisclaimer") => t(lang, "calculator", key);
  const tm = (key: "CHF" | "month" | "months") => t(lang, "common", key);

  // Calculator instance
  const calc = new Calculator();
  calc.setProduct(ProductType.P2S);
  calc.setInsuranceType(InsuranceType.NONE);

  // SME interest rate range
  const interestMin = 5.9;
  const interestMax = 14.9;

  // State
  const amount = useSignal(50000);
  const lifetime = useSignal(24);
  const amountError = useSignal("");
  const lifetimeError = useSignal("");

  // Refs
  const amountSliderRef = useRef<HTMLInputElement>(null);
  const lifetimeSliderRef = useRef<HTMLInputElement>(null);

  // Computed results for min interest
  const resultsMin = useComputed(() => {
    if (amountError.value || lifetimeError.value) return null;
    return calc.calculate(amount.value, interestMin, lifetime.value);
  });

  // Computed results for max interest
  const resultsMax = useComputed(() => {
    if (amountError.value || lifetimeError.value) return null;
    return calc.calculate(amount.value, interestMax, lifetime.value);
  });

  // Dynamic application URL
  const applicationUrl = useComputed(() => {
    if (amountError.value || lifetimeError.value) return "#";
    const basePath = "/kmu-darlehen-beantragen/";
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

  // Validation
  function validateAmount() {
    if (amount.value < minAmount || amount.value > maxAmount) {
      amountError.value = tc("smeAmountError");
    } else {
      amountError.value = "";
    }
    updateSliderBackground(amountSliderRef.current);
  }

  function validateLifetime() {
    if (lifetime.value < minLifetime || lifetime.value > maxLifetime) {
      lifetimeError.value = tc("smeMonthsError");
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
    // Add pulse effect
    target.classList.add('slider--pulse');
    setTimeout(() => target.classList.remove('slider--pulse'), 150);
  }

  function handleAmountInput(e: Event) {
    const target = e.target as HTMLInputElement;
    amount.value = parseInt(target.value) || 0;
    validateAmount();
  }

  function handleLifetimeSliderChange(e: Event) {
    const target = e.target as HTMLInputElement;
    lifetime.value = parseInt(target.value);
    validateLifetime();
    // Add pulse effect
    target.classList.add('slider--pulse');
    setTimeout(() => target.classList.remove('slider--pulse'), 150);
  }

  function handleLifetimeInput(e: Event) {
    const target = e.target as HTMLInputElement;
    lifetime.value = parseInt(target.value) || 0;
    validateLifetime();
  }

  // Initialize sliders
  useEffect(() => {
    updateSliderBackground(amountSliderRef.current);
    updateSliderBackground(lifetimeSliderRef.current);
  }, []);

  return (
    <div class="sme-calculator calculator">
      <div class="calculator__title">{tc("smeTitle")}</div>

      {/* Amount Input */}
      <div class="calculator__input-wrapper">
        <div class="calculator__header">
          <div class="calculator__title">{tc("loanAmount")}</div>
          <div class="input-group">
            <span class="input-group__prefix">{tm("CHF")}</span>
            <input
              type="number"
              class="input-group__input"
              value={amount.value}
              onInput={handleAmountInput}
              min={minAmount}
              max={maxAmount}
            />
          </div>
        </div>
        {amountError.value && (
          <div class="calculator__error">{amountError.value}</div>
        )}
      </div>

      {/* Amount Slider */}
      <div class="calculator__slider-wrapper">
        <input
          ref={amountSliderRef}
          type="range"
          class="slider"
          value={amount.value}
          onInput={handleAmountSliderChange}
          min={minAmount}
          max={maxAmount}
          step={1000}
          style={`--slider-fill: ${((amount.value - minAmount) / (maxAmount - minAmount)) * 100}%`}
        />
        <div class="calculator__slider-labels">
          <span>{tm("CHF")} {formatMoney(minAmount)}</span>
          <span>{tm("CHF")} {formatMoney(maxAmount)}</span>
        </div>
      </div>

      {/* Lifetime Input */}
      <div class="calculator__input-wrapper">
        <div class="calculator__input-row">
          <div class="calculator__title">{tc("duration")}</div>
          <div class="input-group">
            <input
              type="number"
              class="input-group__input"
              value={lifetime.value}
              onInput={handleLifetimeInput}
              min={minLifetime}
              max={maxLifetime}
            />
            <span class="input-group__suffix">{tm("months")}</span>
          </div>
        </div>
        {lifetimeError.value && (
          <div class="calculator__error">{lifetimeError.value}</div>
        )}
      </div>

      {/* Lifetime Slider */}
      <div class="calculator__slider-wrapper">
        <input
          ref={lifetimeSliderRef}
          type="range"
          class="slider"
          value={lifetime.value}
          onInput={handleLifetimeSliderChange}
          min={minLifetime}
          max={maxLifetime}
          step={1}
          style={`--slider-fill: ${((lifetime.value - minLifetime) / (maxLifetime - minLifetime)) * 100}%`}
        />
        <div class="calculator__slider-labels">
          <span>{minLifetime} {tm("months")}</span>
          <span>{maxLifetime} {tm("months")}</span>
        </div>
      </div>

      {/* Results Table */}
      <div class="calculator__results">
        {/* Header */}
        <div class="calculator__results-header">
          <div class="u-w--1/4">{tc("interest")}:</div>
          <div class="u-w--1/4">{tc("Fees")}:</div>
          <div class="u-w--1/4">{tc("totalInterest")}:</div>
          <div class="u-w--1/4 u-text--right">{tc("monthlyRate")}:</div>
        </div>

        {/* Min Interest Row */}
        <div class="calculator__results-row calculator__results-row--stagger-1">
          <div class="u-w--1/4">
            {tc("from")}: <strong>{interestMin}%</strong>
          </div>
          <div class="u-w--1/4">{resultsMin.value?.fee ?? "-"}</div>
          <div class="u-w--1/4">{resultsMin.value?.interestCosts ?? "-"}</div>
          <div class="u-w--1/4 calculator__results-cell--right">
            <span class="calculator__results-value calculator__results-value--animated">
              {tm("CHF")} {resultsMin.value ? formatMoney(parseFloat(resultsMin.value.instalment)) : "-"}
            </span>
          </div>
        </div>

        {/* Max Interest Row */}
        <div class="calculator__results-row calculator__results-row--stagger-2">
          <div class="u-w--1/4">
            {tc("from")}: <strong>{interestMax}%</strong>
          </div>
          <div class="u-w--1/4">{resultsMax.value?.fee ?? "-"}</div>
          <div class="u-w--1/4">{resultsMax.value?.interestCosts ?? "-"}</div>
          <div class="u-w--1/4 calculator__results-cell--right">
            <span class="calculator__results-value calculator__results-value--animated">
              {tm("CHF")} {resultsMax.value ? formatMoney(parseFloat(resultsMax.value.instalment)) : "-"}
            </span>
          </div>
        </div>

        {/* Disclaimer */}
        <div class="sme-calculator__disclaimer">
          {tc("smeDisclaimer")}
        </div>
      </div>

      {/* Apply Button */}
      <div class="calculator__action">
        <a
          href={applicationUrl.value}
          class={`btn btn--primary hover-lift shadow-primary ${amountError.value || lifetimeError.value ? "btn--disabled" : ""}`}
        >
          {tc("smeApplyLoan")}
        </a>
      </div>
    </div>
  );
}
