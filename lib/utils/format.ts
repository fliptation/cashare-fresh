/**
 * Formatting Utilities
 *
 * Swiss-specific number and currency formatting.
 */

/**
 * Format a number with Swiss thousand separators (apostrophe)
 *
 * @param value - The number to format
 * @returns Formatted string with apostrophe separators
 *
 * @example
 * formatMoney(1000000) // "1'000'000"
 * formatMoney(1234.56) // "1'234.56"
 */
export function formatMoney(value: number): string {
  // Handle decimal numbers
  const [intPart, decPart] = value.toString().split(".");

  // Add thousand separators to integer part
  const formattedInt = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, "'");

  // Reconstruct with decimal part if present
  return decPart ? `${formattedInt}.${decPart}` : formattedInt;
}

/**
 * Format a number as Swiss currency (CHF)
 *
 * @param value - The amount in CHF
 * @param decimals - Number of decimal places (default 2)
 * @returns Formatted currency string
 *
 * @example
 * formatCHF(1234.5) // "CHF 1'234.50"
 */
export function formatCHF(value: number, decimals = 2): string {
  const fixed = value.toFixed(decimals);
  return `CHF ${formatMoney(parseFloat(fixed))}`;
}

/**
 * Format a percentage value
 *
 * @param value - The percentage (e.g., 6.5 for 6.5%)
 * @param decimals - Number of decimal places (default 1)
 * @returns Formatted percentage string
 *
 * @example
 * formatPercent(6.5) // "6.5%"
 */
export function formatPercent(value: number, decimals = 1): string {
  return `${value.toFixed(decimals)}%`;
}

/**
 * Parse a Swiss-formatted number string back to number
 *
 * @param value - The formatted string (e.g., "1'000'000")
 * @returns The numeric value
 *
 * @example
 * parseSwissNumber("1'234'567") // 1234567
 */
export function parseSwissNumber(value: string): number {
  return parseFloat(value.replace(/'/g, ""));
}
