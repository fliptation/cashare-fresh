/**
 * Swiss Rounding Utility
 *
 * Swiss financial regulations require rounding to the nearest 0.05 CHF.
 * This is the standard rounding method for all Swiss currency calculations.
 */

/**
 * Rounds a value to the nearest 0.05 CHF (Swiss rounding)
 * @param value - The value to round
 * @returns The value rounded to nearest 0.05
 * @example
 * roundForSwitzerland(10.03) // returns 10.05
 * roundForSwitzerland(10.02) // returns 10.00
 * roundForSwitzerland(10.075) // returns 10.10
 */
export function roundForSwitzerland(value: number): number {
  return Math.round(value * 20) / 20;
}
