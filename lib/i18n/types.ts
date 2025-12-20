/**
 * i18n Type Definitions
 *
 * AUTO-GENERATED - DO NOT EDIT
 * Run `deno task i18n:types` to regenerate
 */

export type Locale = "de" | "en" | "fr";

export type TranslationNamespace =
  | "auth"
  | "calculator"
  | "common"
  | "validation";

export interface AuthTranslations {
  "Apply for a loan": string;
  "Check TFA": string;
  "Choose your role": string;
  "Email exists": string;
  "Email validation": string;
  "Enter auth code": string;
  "Error logging in": string;
  "How would you like to use Cashare": string;
  "Lost your device": string;
  "Not received": string;
  "Please enter your email address": string;
  "Please enter your password": string;
  "Receive email": string;
  Resend: string;
  Resent: string;
  "Send validation email": string;
  Sent: string;
  "Should Receive": string;
  "The email was": string;
  "Two-Factor Authentication": string;
  "Verify that": string;
  "We have": string;
  "is a valid email address": string;
  request: string;
}

export interface CalculatorTranslations {
  Apply: string;
  Duration: string;
  Fees: string;
  Invest: string;
  Loan: string;
  "Monthly instalment": string;
  "With insurance": string;
  amountError: string;
  duration: string;
  from: string;
  interest: string;
  monthError1: string;
  monthError2: string;
  monthError3: string;
  "of which insurance": string;
}

export interface CommonTranslations {
  CHF: string;
  Continue: string;
  Register: string;
  month: string;
  months: string;
  or: string;
}

export interface ValidationTranslations {
  "Please enter a runtime greater than or equal to 1": string;
  "Please enter a runtime less than or equal to": string;
  "Please enter a term": string;
  "Please enter an amount": string;
  "Please enter an amount greater than or equal to 1'000": string;
  "Please enter an amount less than or equal to": string;
  ein: string;
  "not more than 1": string;
}

export interface Translations {
  auth: AuthTranslations;
  calculator: CalculatorTranslations;
  common: CommonTranslations;
  validation: ValidationTranslations;
}

export type TranslationKey<N extends TranslationNamespace> =
  N extends "auth"
    ? keyof AuthTranslations
  : N extends "calculator"
    ? keyof CalculatorTranslations
  : N extends "common"
    ? keyof CommonTranslations
  : N extends "validation"
    ? keyof ValidationTranslations
    : never;
