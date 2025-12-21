/**
 * Cashare API Client
 * Handles all communication with the Cashare backend at my.cashare.ch
 */

import type {
  LoanApplicationPayload,
  LoginPayload,
  InvestorPayload,
  PasswordResetPayload,
  ApiResponse,
  LoanProduct,
  LiableEntity,
} from "./types.ts";
import type { Locale } from "../i18n/index.ts";

// API base URL - WordPress used: window.location.origin.replace('www.', 'my.')
const API_BASE = "https://my.cashare.ch";

/**
 * Make an API request to the Cashare backend
 */
async function apiRequest<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<ApiResponse<T>> {
  const url = `${API_BASE}${endpoint}`;

  const defaultHeaders: HeadersInit = {
    "Content-Type": "application/json",
    "Accept": "application/json",
  };

  const response = await fetch(url, {
    ...options,
    headers: {
      ...defaultHeaders,
      ...options.headers,
    },
    credentials: "include", // Include cookies for CORS
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || `API error: ${response.status}`);
  }

  return response.json();
}

/**
 * Create a loan application (register + apply)
 * Used by: LoanApplyForm, SmeApplyForm, SmeBulletApplyForm
 */
export async function createLoanApplication(
  payload: LoanApplicationPayload
): Promise<ApiResponse> {
  return apiRequest("/api/account/createLoanAndPrivateLoanee", {
    method: "POST",
    body: JSON.stringify(payload),
  });
}

/**
 * Helper to build loan application payload
 */
export function buildLoanPayload(params: {
  amount: number;
  interest: number;
  lifetime: number;
  product: LoanProduct;
  liableEntity: LiableEntity;
  email: string;
  password: string;
  language: Locale;
  authCode?: string;
}): LoanApplicationPayload {
  return {
    loan: {
      amount: params.amount,
      interest: params.interest,
      liableEntity: params.liableEntity,
      lifetime: params.lifetime,
      product: params.product,
      newLoanApplication: true,
    },
    user: {
      eA: params.email,
      language: params.language,
      password: params.password,
      authCode: params.authCode || "",
    },
  };
}

/**
 * Login to Cashare
 * Used by: LoginForm
 */
export async function login(payload: LoginPayload): Promise<ApiResponse> {
  return apiRequest("/api/mycashare/login", {
    method: "POST",
    body: JSON.stringify({
      email: payload.email,
      password: payload.password,
      authCode: payload.authCode || "",
      language: payload.language,
    }),
  });
}

/**
 * Register as an investor
 * Used by: InvestorRegistration (if needed)
 */
export async function createInvestor(
  payload: InvestorPayload
): Promise<ApiResponse> {
  return apiRequest(`/api/${payload.language}/account/createLoanerWithEa`, {
    method: "POST",
    body: JSON.stringify({
      eA: payload.email,
      password: payload.password,
      group: payload.group,
    }),
  });
}

/**
 * Resend email validation
 * Used by: EmailValidationModal
 */
export async function resendEmailValidation(
  email: string
): Promise<ApiResponse> {
  return apiRequest("/api/loan/application/completeRegistration/resend", {
    method: "POST",
    body: JSON.stringify({ email }),
  });
}

/**
 * Request password reset
 * Used by: PasswordResetForm
 */
export async function resetPassword(
  payload: PasswordResetPayload
): Promise<ApiResponse> {
  return apiRequest("/api/account/resetPassword/sendToken", {
    method: "POST",
    body: JSON.stringify(payload),
  });
}

/**
 * Get the dashboard URL for redirect after login
 */
export function getDashboardUrl(locale: Locale): string {
  return `${API_BASE}/${locale}/dashboard`;
}

/**
 * Get the borrower dashboard URL
 */
export function getBorrowerDashboardUrl(locale: Locale): string {
  return `${API_BASE}/${locale}/borrower/dashboard`;
}

/**
 * Get the investor dashboard URL
 */
export function getInvestorDashboardUrl(locale: Locale): string {
  return `${API_BASE}/${locale}/investor/dashboard`;
}
