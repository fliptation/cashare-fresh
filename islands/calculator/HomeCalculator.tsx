import { useSignal, useComputed } from "@preact/signals";
import { useEffect, useRef } from "preact/hooks";
import {
  Calculator,
  ProductType,
  InsuranceType,
} from "../../lib/calculator/mod.ts";
import { formatMoney } from "../../lib/utils/format.ts";
import { t, type Locale } from "../../lib/i18n/index.ts";

interface HomeCalculatorProps {
  lang?: Locale;
  minAmount?: number;
  maxAmount?: number;
  minLifetime?: number;
  maxLifetime?: number;
}

// Slider value to amount conversion (custom scale)
function sliderToAmount(slider: number): number {
  if (slider <= 100) return slider * 1000;
  if (slider === 190) return 1000000;
  return 100000 + (slider - 100) * 10000;
}

// Amount to slider value conversion
function amountToSlider(amount: number): number {
  if (amount <= 100000) return Math.floor(amount / 1000);
  if (amount >= 1000000) return 190;
  return Math.floor((amount - 100000) / 10000) + 100;
}

export default function HomeCalculator({
  lang = "de",
  minAmount = 1000,
  maxAmount = 1000000,
  minLifetime = 1,
  maxLifetime = 60,
}: HomeCalculatorProps) {
  const tc = (key: "Loan" | "Duration" | "interest" | "from" | "Fees" | "With insurance" | "Monthly instalment" | "of which insurance" | "Apply" | "amountError" | "monthError1" | "monthError2" | "monthError3") => t(lang, "calculator", key);
  const tm = (key: "CHF" | "month" | "months") => t(lang, "common", key);

  // Create calculator instance
  const calc = new Calculator();
  calc.setProduct(ProductType.P2P);

  // Reactive state
  const sliderValue = useSignal(23);
  const amount = useSignal(23000);
  const lifetime = useSignal(24);
  const withInsurance = useSignal(false);
  const amountError = useSignal(false);
  const lifetimeError = useSignal(false);

  // Refs for sliders
  const amountSliderRef = useRef<HTMLInputElement>(null);
  const lifetimeSliderRef = useRef<HTMLInputElement>(null);

  // Computed: insurance type
  const insuranceType = useComputed(() =>
    withInsurance.value
      ? InsuranceType.DEATHCASE_ACCIDENT_SICKNESS_UNEMPLOYMENT
      : InsuranceType.NONE
  );

  // Computed: calculations
  const resultsMin = useComputed(() => {
    if (amountError.value || lifetimeError.value) return null;
    calc.setInsuranceType(insuranceType.value);
    return calc.calculate(amount.value, 4.4, lifetime.value);
  });

  const resultsMax = useComputed(() => {
    if (amountError.value || lifetimeError.value) return null;
    calc.setInsuranceType(insuranceType.value);
    return calc.calculate(amount.value, 10.9, lifetime.value);
  });

  // Computed: dynamic URL
  const dynamicUrl = useComputed(() => {
    if (amountError.value || lifetimeError.value) return "#";
    const basePath = "/privatdarlehen-beantragen/";
    const params = `?amount=${amount.value}&lifetime=${lifetime.value}`;
    return lang === "de" ? `${basePath}${params}` : `/${lang}${basePath}${params}`;
  });

  // Update slider background (progress fill)
  function updateSliderBackground(slider: HTMLInputElement | null) {
    if (!slider) return;
    const min = parseFloat(slider.min) || 0;
    const max = parseFloat(slider.max) || 100;
    const val = parseFloat(slider.value) || 0;
    const percentage = ((val - min) / (max - min)) * 100;
    slider.style.background = `linear-gradient(to right, #00B9D0 0%, #00B9D0 ${percentage}%, #DFF6F9 ${percentage}%, #DFF6F9 100%)`;
  }

  // Event handlers
  function handleAmountSliderChange(e: Event) {
    const target = e.target as HTMLInputElement;
    sliderValue.value = parseInt(target.value);
    amount.value = sliderToAmount(sliderValue.value);
    amountError.value = amount.value < minAmount || amount.value > maxAmount;
    updateSliderBackground(target);
    // Add pulse class for visual feedback
    target.classList.add('slider--pulse');
    setTimeout(() => target.classList.remove('slider--pulse'), 150);
  }

  function handleAmountInput(e: Event) {
    const target = e.target as HTMLInputElement;
    const value = parseInt(target.value) || 0;
    amount.value = value;
    sliderValue.value = amountToSlider(value);
    amountError.value = value < minAmount || value > maxAmount;
    updateSliderBackground(amountSliderRef.current);
  }

  function handleLifetimeSliderChange(e: Event) {
    const target = e.target as HTMLInputElement;
    lifetime.value = parseInt(target.value);
    lifetimeError.value = lifetime.value < minLifetime || lifetime.value > maxLifetime;
    updateSliderBackground(target);
    // Add pulse class for visual feedback
    target.classList.add('slider--pulse');
    setTimeout(() => target.classList.remove('slider--pulse'), 150);
  }

  function handleLifetimeInput(e: Event) {
    const target = e.target as HTMLInputElement;
    const value = parseInt(target.value) || 0;
    lifetime.value = value;
    lifetimeError.value = value < minLifetime || value > maxLifetime;
    updateSliderBackground(lifetimeSliderRef.current);
  }

  // Initialize sliders on mount
  useEffect(() => {
    updateSliderBackground(amountSliderRef.current);
    updateSliderBackground(lifetimeSliderRef.current);
  }, []);

  return (
    <div class="calculator">
      {/* Amount Section */}
      <div class="calculator__input-wrapper">
        <div class="calculator__header">
          <div class="calculator__title">{tc("Loan")}</div>
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
          <div class="calculator__error">{tc("amountError")}</div>
        )}
      </div>

      {/* Amount Slider */}
      <div class="calculator__slider-wrapper">
        <input
          ref={amountSliderRef}
          type="range"
          class="slider"
          value={sliderValue.value}
          onInput={handleAmountSliderChange}
          min="1"
          max="190"
          step="1"
          style={`--slider-fill: ${((sliderValue.value - 1) / (190 - 1)) * 100}%`}
        />
        <div class="calculator__slider-labels">
          <span>{tm("CHF")} {formatMoney(minAmount)}</span>
          <span>{tm("CHF")} {formatMoney(maxAmount)}</span>
        </div>
      </div>

      {/* Lifetime Section */}
      <div class="calculator__input-wrapper">
        <div class="calculator__input-row">
          <div class="calculator__title">{tc("Duration")}</div>
          <div class="input-group">
            <span class="input-group__prefix">{tm("months")}</span>
            <input
              type="number"
              class="input-group__input"
              value={lifetime.value}
              onInput={handleLifetimeInput}
              min={minLifetime}
              max={maxLifetime}
            />
          </div>
        </div>
        {lifetimeError.value && (
          <div class="calculator__error">
            {tc("monthError1")}{minLifetime}{tc("monthError2")}{maxLifetime}{tc("monthError3")}
          </div>
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
          style={`--slider-fill: ${((lifetime.value - minLifetime) / (maxLifetime - minLifetime)) * 100}%`}
        />
        <div class="calculator__slider-labels">
          <span>{minLifetime} {tm("month")}</span>
          <span>{maxLifetime} {tm("months")}</span>
        </div>
      </div>

      {/* Results Table */}
      <div class="calculator__results">
        {/* Header */}
        <div class="calculator__results-header">
          <div class="u-w--1/5">{tc("interest")}:</div>
          <div class="u-w--1/5">{tc("Fees")}:</div>
          <div class="u-w--2/5 u-text--center">
            <label class="form-group__checkbox">
              <input
                type="checkbox"
                checked={withInsurance.value}
                onChange={() => (withInsurance.value = !withInsurance.value)}
              />
              <span>{tc("With insurance")}</span>
            </label>
          </div>
          <div class="u-w--1/5 u-text--right">{tc("Monthly instalment")}:</div>
        </div>

        {/* Min Interest Row */}
        <div class="calculator__results-row calculator__results-row--stagger-1">
          <div class="u-w--1/5">
            {tc("from")}: <strong>4.4%</strong>
          </div>
          <div class="u-w--1/5">{resultsMin.value?.fee ?? "-"}</div>
          <div class="u-w--2/5 u-text--center">
            {withInsurance.value ? resultsMin.value?.insuranceUnemployedAddedUp : ""}
          </div>
          <div class="u-w--1/5 calculator__results-cell--right">
            <span class="calculator__results-value calculator__results-value--animated">
              {tm("CHF")} {resultsMin.value ? formatMoney(parseFloat(resultsMin.value.instalment)) : "-"}
            </span>
            <span class="calculator__results-subtext">{tc("of which insurance")}:</span>
            <span class="calculator__results-subtext">
              {withInsurance.value ? resultsMin.value?.insuranceUnemployedProRata : "0.00"}
            </span>
          </div>
        </div>

        {/* Max Interest Row */}
        <div class="calculator__results-row calculator__results-row--stagger-2">
          <div class="u-w--1/5">
            {tc("from")}: <strong>10.9%</strong>
          </div>
          <div class="u-w--1/5">{resultsMax.value?.fee ?? "-"}</div>
          <div class="u-w--2/5 u-text--center">
            {withInsurance.value ? resultsMax.value?.insuranceUnemployedAddedUp : ""}
          </div>
          <div class="u-w--1/5 calculator__results-cell--right">
            <span class="calculator__results-value calculator__results-value--animated">
              {tm("CHF")} {resultsMax.value ? formatMoney(parseFloat(resultsMax.value.instalment)) : "-"}
            </span>
            <span class="calculator__results-subtext">{tc("of which insurance")}:</span>
            <span class="calculator__results-subtext">
              {withInsurance.value ? resultsMax.value?.insuranceUnemployedProRata : "0.00"}
            </span>
          </div>
        </div>
      </div>

      {/* Apply Button */}
      <div class="calculator__action">
        <a
          href={dynamicUrl.value}
          class={`btn btn--primary hover-lift shadow-primary ${amountError.value || lifetimeError.value ? "btn--disabled" : ""}`}
        >
          {tc("Apply")}
        </a>
      </div>
    </div>
  );
}
