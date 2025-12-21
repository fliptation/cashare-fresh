/**
 * Validation Utilities
 *
 * Form validation helpers integrated with loan product configuration.
 */

import { LOAN_PRODUCTS, type LoanProductKey } from "../config/loanProducts.ts";

/**
 * Email validation regex (RFC 5322 compliant)
 */
export const EMAIL_REGEX =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

/**
 * Simple email validation regex (used in forms)
 */
export const SIMPLE_EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Validate an email address
 *
 * @param email - The email to validate
 * @returns True if valid
 */
export function isValidEmail(email: string): boolean {
  if (!email || typeof email !== "string") return false;
  return SIMPLE_EMAIL_REGEX.test(email.trim());
}

/**
 * Validate email with strict RFC 5322 pattern
 */
export function isValidEmailStrict(email: string): boolean {
  if (!email || typeof email !== "string") return false;
  return EMAIL_REGEX.test(email.toLowerCase());
}

/**
 * Validate a loan amount for a specific product
 *
 * @param product - The loan product key
 * @param amount - The amount to validate
 * @returns True if valid
 */
export function isValidAmount(product: LoanProductKey, amount: number): boolean {
  const config = LOAN_PRODUCTS[product];
  if (!config) return false;
  return !isNaN(amount) && amount >= config.amount.min && amount <= config.amount.max;
}

/**
 * Validate a loan amount with explicit min/max (legacy support)
 */
export function isValidAmountRange(
  amount: number,
  min = 1000,
  max = 1000000
): boolean {
  return !isNaN(amount) && amount >= min && amount <= max;
}

/**
 * Validate a loan duration for a specific product
 *
 * @param product - The loan product key
 * @param duration - Duration in months
 * @returns True if valid
 */
export function isValidDuration(product: LoanProductKey, duration: number): boolean {
  const config = LOAN_PRODUCTS[product];
  if (!config) return false;
  return (
    !isNaN(duration) &&
    Number.isInteger(duration) &&
    duration >= config.duration.min &&
    duration <= config.duration.max
  );
}

/**
 * Validate a loan lifetime with explicit min/max (legacy support)
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
 * @param minLength - Minimum length (default 1 for basic presence check)
 * @returns True if valid
 */
export function isValidPassword(password: string, minLength = 1): boolean {
  return typeof password === "string" && password.length >= minLength;
}

/**
 * Form field errors type
 */
export type FieldErrors = Record<string, string>;

/**
 * Validation error messages by locale
 */
export interface ValidationMessages {
  emailRequired: string;
  emailInvalid: string;
  passwordRequired: string;
  amountInvalid: string;
  durationInvalid: string;
}

/**
 * Validation result type
 */
export interface ValidationResult {
  valid: boolean;
  errors: string[];
}

/**
 * Validate a loan application form with product-specific constraints
 *
 * @param product - The loan product key
 * @param data - Form data to validate
 * @param messages - Localized error messages
 * @returns Object with field-specific errors (empty if all valid)
 */
export function validateLoanApplicationForm(
  product: LoanProductKey,
  data: {
    amount: number;
    duration: number;
    email: string;
    password: string;
  },
  messages: ValidationMessages
): FieldErrors {
  const errors: FieldErrors = {};

  // Validate amount
  if (!isValidAmount(product, data.amount)) {
    errors.amount = messages.amountInvalid;
  }

  // Validate duration
  if (!isValidDuration(product, data.duration)) {
    errors.duration = messages.durationInvalid;
  }

  // Validate email
  if (!data.email) {
    errors.email = messages.emailRequired;
  } else if (!isValidEmail(data.email)) {
    errors.email = messages.emailInvalid;
  }

  // Validate password
  if (!isValidPassword(data.password)) {
    errors.password = messages.passwordRequired;
  }

  return errors;
}

/**
 * Validate a loan form (legacy - without product type)
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

  if (!isValidAmountRange(data.amount)) {
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

/**
 * Check if form has any validation errors
 *
 * @param errors - Field errors object
 * @returns true if there are no errors
 */
export function isFormValid(errors: FieldErrors): boolean {
  return Object.keys(errors).length === 0;
}

/**
 * Parse numeric input, stripping non-digit characters
 *
 * @param value - Input string to parse
 * @returns Parsed number, or 0 if invalid
 */
export function parseNumericInput(value: string): number {
  const cleaned = value.replace(/[^0-9]/g, "");
  return parseInt(cleaned, 10) || 0;
}

/**
 * Clamp a value between min and max
 *
 * @param value - Value to clamp
 * @param min - Minimum value
 * @param max - Maximum value
 * @returns Clamped value
 */
export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}
