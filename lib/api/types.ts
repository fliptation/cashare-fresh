/**
 * Cashare API Types
 * Based on the WordPress Vue.js implementation
 */

import type { Locale } from "../i18n/index.ts";

// Product types matching calculator
export enum LoanProduct {
  P2P = 0,      // Private loan
  P2E = 1,      // Private express
  P2S = 2,      // SME loan
  P2SO = 3,     // SME express
  BULLET = 5,   // Bullet/short-term loan
}

// Liable entity types
export enum LiableEntity {
  PRIVATE = 2,
  SME = 6,
}

// API Response action types
export type ApiAction =
  | "redirect"
  | "ok"
  | "message"
  | "modalNLNL"
  | "modalER"
  | "requestPossessionFactorAuthenticationToken";

/**
 * Loan application request payload
 */
export interface LoanApplicationPayload {
  loan: {
    amount: number;
    interest: number;
    liableEntity: LiableEntity;
    lifetime: number;
    product: LoanProduct;
    newLoanApplication: boolean;
  };
  user: {
    eA: string;        // Email address
    language: Locale;
    password: string;
    authCode: string;  // 2FA code, empty if not used
  };
}

/**
 * Login request payload
 */
export interface LoginPayload {
  email: string;
  password: string;
  authCode?: string;
  language: Locale;
}

/**
 * Investor registration payload
 */
export interface InvestorPayload {
  email: string;
  password: string;
  group: "individual" | "sme";
  language: Locale;
}

/**
 * Password reset payload
 */
export interface PasswordResetPayload {
  email: string;
}

/**
 * API Response structure
 */
export interface ApiResponse<T = unknown> {
  action: ApiAction;
  data?: T;
  message?: string;
  redirect?: string;
  token?: string;
  refresh_token?: string;
  userDetails?: UserDetails;
  userMenu?: UserMenuItem[];
}

/**
 * User details returned after login
 */
export interface UserDetails {
  id: number;
  email: string;
  firstName?: string;
  lastName?: string;
  language: Locale;
  role: "borrower" | "investor" | "admin" | "agent";
}

/**
 * User menu item
 */
export interface UserMenuItem {
  label: string;
  href: string;
  icon?: string;
}

/**
 * Authentication tokens stored in localStorage
 */
export interface AuthTokens {
  token: string;
  refresh_token: string;
  jwt?: string;
}

/**
 * Form submission state
 */
export interface FormState {
  isLoading: boolean;
  error: string | null;
  showEmailValidation: boolean;
  showTwoFactor: boolean;
  showRoleSelection: boolean;
}
