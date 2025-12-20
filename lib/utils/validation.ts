/**
 * Validation Utilities
 *
 * Form validation helpers.
 */

/**
 * Email validation regex (RFC 5322 compliant)
 */
const EMAIL_REGEX =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

/**
 * Validate an email address
 *
 * @param email - The email to validate
 * @returns True if valid
 */
export function isValidEmail(email: string): boolean {
  return EMAIL_REGEX.test(email.toLowerCase());
}

/**
 * Validate a loan amount
 *
 * @param amount - The amount to validate
 * @param min - Minimum allowed (default 1000)
 * @param max - Maximum allowed (default 1000000)
 * @returns True if valid
 */
export function isValidAmount(
  amount: number,
  min = 1000,
  max = 1000000
): boolean {
  return !isNaN(amount) && amount >= min && amount <= max;
}

/**
 * Validate a loan lifetime (duration in months)
 *
 * @param lifetime - Duration in months
 * @param min - Minimum months (default 1)
 * @param max - Maximum months (default 60)
 * @returns True if valid
 */
export function isValidLifetime(
  lifetime: number,
  min = 1,
  max = 60
): boolean {
  return !isNaN(lifetime) && lifetime >= min && lifetime <= max;
}

/**
 * Validate an interest rate
 *
 * @param rate - Interest rate percentage
 * @param min - Minimum rate (default 0)
 * @param max - Maximum rate (default 15)
 * @returns True if valid
 */
export function isValidInterestRate(
  rate: number,
  min = 0,
  max = 15
): boolean {
  return !isNaN(rate) && rate >= min && rate <= max;
}

/**
 * Validate a password
 *
 * @param password - The password to validate
 * @param minLength - Minimum length (default 8)
 * @returns True if valid
 */
export function isValidPassword(password: string, minLength = 8): boolean {
  return password.length >= minLength;
}

/**
 * Validation result type
 */
export interface ValidationResult {
  valid: boolean;
  errors: string[];
}

/**
 * Validate a loan application form
 *
 * @param data - Form data
 * @returns Validation result
 */
export function validateLoanForm(data: {
  amount: number;
  lifetime: number;
  email?: string;
}): ValidationResult {
  const errors: string[] = [];

  if (!isValidAmount(data.amount)) {
    errors.push("amount");
  }

  if (!isValidLifetime(data.lifetime)) {
    errors.push("lifetime");
  }

  if (data.email && !isValidEmail(data.email)) {
    errors.push("email");
  }

  return {
    valid: errors.length === 0,
    errors,
  };
}
