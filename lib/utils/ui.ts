/// <reference lib="dom" />
/**
 * Shared UI Utilities
 *
 * Common UI helper functions used across calculator and form components.
 */

/**
 * Update slider input background gradient based on current value.
 * Creates a filled track effect showing progress from min to current value.
 *
 * @param slider - The range input element to style
 * @param fillColor - CSS color for the filled portion (defaults to primary color)
 * @param bgColor - CSS color for the unfilled portion (defaults to light background)
 */
export function updateSliderBackground(
  slider: HTMLInputElement | null,
  fillColor = "var(--color-primary)",
  bgColor = "var(--color-bg-light)"
): void {
  if (!slider) return;

  const min = parseFloat(slider.min) || 0;
  const max = parseFloat(slider.max) || 100;
  const val = parseFloat(slider.value) || 0;
  const percentage = ((val - min) / (max - min)) * 100;

  slider.style.background = `linear-gradient(to right, ${fillColor} 0%, ${fillColor} ${percentage}%, ${bgColor} ${percentage}%, ${bgColor} 100%)`;
}

/**
 * Add a brief pulse animation to an element.
 * Used to provide visual feedback on slider interactions.
 *
 * @param target - The element to animate
 * @param className - CSS class that triggers the animation
 * @param duration - Animation duration in milliseconds
 */
export function pulseElement(
  target: Element | null,
  className = "slider--pulse",
  duration = 150
): void {
  if (!target) return;

  target.classList.add(className);
  setTimeout(() => {
    target.classList.remove(className);
  }, duration);
}

/**
 * Add updating animation class to value display elements.
 * Used to animate calculated values when inputs change.
 *
 * @param elements - Array of elements to animate
 * @param className - CSS class that triggers the animation
 * @param duration - Animation duration in milliseconds
 */
export function triggerValueAnimation(
  elements: (Element | null)[],
  className = "loan-calculator__results-value--updating",
  duration = 500
): void {
  elements.forEach((el) => {
    if (!el) return;
    el.classList.add(className);
  });

  setTimeout(() => {
    elements.forEach((el) => {
      if (!el) return;
      el.classList.remove(className);
    });
  }, duration);
}

/**
 * Calculate slider fill percentage for CSS custom property.
 * Used with sliders that use CSS --slider-fill variable.
 *
 * @param value - Current slider value
 * @param min - Minimum slider value
 * @param max - Maximum slider value
 * @returns Percentage string (e.g., "45%")
 */
export function getSliderFillPercentage(
  value: number,
  min: number,
  max: number
): string {
  const percentage = ((value - min) / (max - min)) * 100;
  return `${percentage}%`;
}

/**
 * Debounce a function call.
 * Useful for expensive operations triggered by rapid input changes.
 *
 * @param fn - Function to debounce
 * @param delay - Delay in milliseconds
 * @returns Debounced function
 */
export function debounce<T extends (...args: unknown[]) => unknown>(
  fn: T,
  delay: number
): (...args: Parameters<T>) => void {
  let timeoutId: ReturnType<typeof setTimeout>;
  return (...args: Parameters<T>) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn(...args), delay);
  };
}

/**
 * Throttle a function call.
 * Useful for scroll or resize handlers.
 *
 * @param fn - Function to throttle
 * @param delay - Minimum time between calls in milliseconds
 * @returns Throttled function
 */
export function throttle<T extends (...args: unknown[]) => unknown>(
  fn: T,
  delay: number
): (...args: Parameters<T>) => void {
  let lastCall = 0;
  return (...args: Parameters<T>) => {
    const now = Date.now();
    if (now - lastCall >= delay) {
      lastCall = now;
      fn(...args);
    }
  };
}
