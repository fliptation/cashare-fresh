import { useSignal, useComputed } from "@preact/signals";
import { useEffect, useRef } from "preact/hooks";
import {
  Calculator,
  ProductType,
  InsuranceType,
} from "../../lib/calculator/mod.ts";
import { formatMoney } from "../../lib/utils/format.ts";
import { t, type Locale } from "../../lib/i18n/index.ts";

interface YieldCalculatorProps {
  lang?: Locale;
}

export default function YieldCalculator({ lang = "de" }: YieldCalculatorProps) {
  const ty = (key: "title" | "subtitle" | "amount" | "duration" | "interestRate" | "calculation" | "yield" | "platformFee" | "netYield" | "amountError" | "monthsError" | "interestError") => t(lang, "yieldCalculator", key);
  const tm = (key: "CHF" | "month" | "months") => t(lang, "common", key);

  // Create calculator instance
  const calc = new Calculator();
  calc.setProduct(ProductType.P2P);
  calc.setInsuranceType(InsuranceType.NONE);

  // Reactive state
  const amount = useSignal(13000);
  const months = useSignal(24);
  const interestRate = useSignal(8.5);
  const amountError = useSignal("");
  const monthsError = useSignal("");
  const interestError = useSignal("");

  // Slider refs
  const amountSliderRef = useRef<HTMLInputElement>(null);
  const monthsSliderRef = useRef<HTMLInputElement>(null);
  const interestSliderRef = useRef<HTMLInputElement>(null);

  // Computed: calculation results
  const results = useComputed(() => {
    if (amountError.value || monthsError.value || interestError.value) {
      return null;
    }
    return calc.calculate(amount.value, interestRate.value, months.value);
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

  // Validation handlers
  function validateAmount() {
    if (amount.value < 100 || amount.value > 1000000) {
      amountError.value = ty("amountError");
    } else {
      amountError.value = "";
    }
    updateSliderBackground(amountSliderRef.current);
  }

  function validateMonths() {
    if (months.value < 1 || months.value > 60) {
      monthsError.value = ty("monthsError");
    } else {
      monthsError.value = "";
    }
    updateSliderBackground(monthsSliderRef.current);
  }

  function validateInterest() {
    if (interestRate.value < 1 || interestRate.value > 15) {
      interestError.value = ty("interestError");
    } else {
      interestError.value = "";
    }
    updateSliderBackground(interestSliderRef.current);
  }

  // Event handlers
  function handleAmountChange(e: Event) {
    const target = e.target as HTMLInputElement;
    amount.value = parseFloat(target.value) || 0;
    validateAmount();
    if (target.type === 'range') {
      target.classList.add('slider--pulse');
      setTimeout(() => target.classList.remove('slider--pulse'), 150);
    }
  }

  function handleMonthsChange(e: Event) {
    const target = e.target as HTMLInputElement;
    months.value = parseInt(target.value) || 0;
    validateMonths();
    if (target.type === 'range') {
      target.classList.add('slider--pulse');
      setTimeout(() => target.classList.remove('slider--pulse'), 150);
    }
  }

  function handleInterestChange(e: Event) {
    const target = e.target as HTMLInputElement;
    interestRate.value = parseFloat(target.value) || 0;
    validateInterest();
    if (target.type === 'range') {
      target.classList.add('slider--pulse');
      setTimeout(() => target.classList.remove('slider--pulse'), 150);
    }
  }

  // Initialize sliders on mount
  useEffect(() => {
    updateSliderBackground(amountSliderRef.current);
    updateSliderBackground(monthsSliderRef.current);
    updateSliderBackground(interestSliderRef.current);
  }, []);

  return (
    <div class="yield-calculator">
      {/* Left Panel - Inputs */}
      <div class="yield-calculator__panel yield-calculator__panel--inputs">
        <div class="yield-calculator__header">
          <h3 class="yield-calculator__title">{ty("title")}</h3>
          <p class="yield-calculator__subtitle">{ty("subtitle")}</p>
        </div>

        {/* Amount Input */}
        <div class="yield-calculator__field">
          <div class="yield-calculator__field-header">
            <span class="yield-calculator__field-label">{ty("amount")}</span>
            <div class="yield-calculator__input-group">
              <input
                type="number"
                value={amount.value}
                onInput={handleAmountChange}
                step="500"
                min="100"
                max="1000000"
                class="yield-calculator__input"
              />
              <span class="yield-calculator__input-suffix">{tm("CHF")}</span>
            </div>
          </div>
          <div class="yield-calculator__slider-wrapper">
            <input
              ref={amountSliderRef}
              type="range"
              class="slider"
              value={amount.value}
              onInput={handleAmountChange}
              step="500"
              min="100"
              max="1000000"
              style={`--slider-fill: ${((amount.value - 100) / (1000000 - 100)) * 100}%`}
            />
            <div class="yield-calculator__slider-labels">
              <span>{tm("CHF")} 100</span>
              <span>{tm("CHF")} 1'000'000</span>
            </div>
          </div>
          {amountError.value && (
            <p class="calculator__error">{amountError.value}</p>
          )}
        </div>

        {/* Duration Input */}
        <div class="yield-calculator__field">
          <div class="yield-calculator__field-header">
            <span class="yield-calculator__field-label">{ty("duration")}</span>
            <div class="yield-calculator__input-group">
              <input
                type="number"
                value={months.value}
                onInput={handleMonthsChange}
                step="1"
                min="1"
                max="60"
                class="yield-calculator__input"
              />
              <span class="yield-calculator__input-suffix">{tm("months")}</span>
            </div>
          </div>
          <div class="yield-calculator__slider-wrapper">
            <input
              ref={monthsSliderRef}
              type="range"
              class="slider"
              value={months.value}
              onInput={handleMonthsChange}
              step="1"
              min="1"
              max="60"
              style={`--slider-fill: ${((months.value - 1) / (60 - 1)) * 100}%`}
            />
            <div class="yield-calculator__slider-labels">
              <span>1 {tm("month")}</span>
              <span>60 {tm("months")}</span>
            </div>
          </div>
          {monthsError.value && (
            <p class="calculator__error">{monthsError.value}</p>
          )}
        </div>

        {/* Interest Rate Input */}
        <div class="yield-calculator__field">
          <div class="yield-calculator__field-header">
            <span class="yield-calculator__field-label">{ty("interestRate")}</span>
            <div class="yield-calculator__input-group">
              <input
                type="number"
                value={interestRate.value}
                onInput={handleInterestChange}
                step="0.1"
                min="1"
                max="15"
                class="yield-calculator__input"
              />
              <span class="yield-calculator__input-suffix">%</span>
            </div>
          </div>
          <div class="yield-calculator__slider-wrapper">
            <input
              ref={interestSliderRef}
              type="range"
              class="slider"
              value={interestRate.value}
              onInput={handleInterestChange}
              step="0.1"
              min="1"
              max="15"
              style={`--slider-fill: ${((interestRate.value - 1) / (15 - 1)) * 100}%`}
            />
            <div class="yield-calculator__slider-labels">
              <span>1%</span>
              <span>15%</span>
            </div>
          </div>
          {interestError.value && (
            <p class="calculator__error">{interestError.value}</p>
          )}
        </div>
      </div>

      {/* Right Panel - Results */}
      <div class="yield-calculator__panel yield-calculator__panel--results">
        <h4 class="yield-calculator__results-title">{ty("calculation")}</h4>

        {/* Main Yield Result */}
        <div class="yield-calculator__result-card">
          <div class="yield-calculator__result-label">{ty("yield")}</div>
          <div class="yield-calculator__result-row">
            <div class="yield-calculator__result-value">
              <span class="yield-calculator__result-amount calculator__results-value--animated">
                {results.value?.yield ?? "0.00"}
              </span>
              <span class="yield-calculator__result-currency">{tm("CHF")}</span>
            </div>
            <div class="yield-calculator__result-meta">
              <span class="yield-calculator__result-rate-label">{ty("interestRate")}</span>
              <span class="yield-calculator__result-rate">{interestRate.value}%</span>
            </div>
          </div>
        </div>

        {/* Summary: Fee and Net Yield */}
        <div class="yield-calculator__summary">
          <div class="yield-calculator__summary-item">
            <div class="yield-calculator__summary-label">{ty("platformFee")}</div>
            <div class="yield-calculator__summary-value calculator__results-value--animated">
              {tm("CHF")} {results.value?.fee_forLoaner ?? "0.00"}
            </div>
          </div>
          <div class="yield-calculator__summary-item">
            <div class="yield-calculator__summary-label">{ty("netYield")}</div>
            <div class="yield-calculator__summary-value calculator__results-value--animated">
              {tm("CHF")} {results.value?.netYield ?? "0.00"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
