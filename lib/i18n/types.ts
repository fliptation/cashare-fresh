/**
 * i18n Type Definitions
 */

export type Locale = "de" | "en" | "fr";

export type TranslationNamespace =
  | "common"
  | "calculator"
  | "auth"
  | "validation";

export interface CommonTranslations {
  CHF: string;
  months: string;
  month: string;
  Continue: string;
  Register: string;
  or: string;
}

export interface CalculatorTranslations {
  Loan: string;
  Duration: string;
  interest: string;
  from: string;
  Fees: string;
  "With insurance": string;
  "Monthly instalment": string;
  "of which insurance": string;
  Apply: string;
  Invest: string;
  amountError: string;
  monthError1: string;
  monthError2: string;
  monthError3: string;
  duration: string;
}

export interface AuthTranslations {
  "Choose your role": string;
  "How would you like to use Cashare": string;
  "Apply for a loan": string;
  "Please enter your email address": string;
  "Please enter your password": string;
  "Error logging in": string;
  "Email exists": string;
  "Verify that": string;
  "is a valid email address": string;
  "Email validation": string;
  "Receive email": string;
  "We have": string;
  Sent: string;
  "Not received": string;
  Resend: string;
  "Send validation email": string;
  "The email was": string;
  Resent: string;
  "Should Receive": string;
  "Two-Factor Authentication": string;
  "Enter auth code": string;
  "Lost your device": string;
  "Check TFA": string;
  request: string;
}

export interface ValidationTranslations {
  "Please enter an amount": string;
  "Please enter an amount greater than or equal to 1'000": string;
  "Please enter an amount less than or equal to": string;
  ein: string;
  "Please enter a runtime greater than or equal to 1": string;
  "Please enter a runtime less than or equal to": string;
  "Please enter a term": string;
  "not more than 1": string;
}

export interface Translations {
  common: CommonTranslations;
  calculator: CalculatorTranslations;
  auth: AuthTranslations;
  validation: ValidationTranslations;
}

export type TranslationKey<N extends TranslationNamespace> =
  N extends "common"
    ? keyof CommonTranslations
    : N extends "calculator"
    ? keyof CalculatorTranslations
    : N extends "auth"
    ? keyof AuthTranslations
    : N extends "validation"
    ? keyof ValidationTranslations
    : never;
