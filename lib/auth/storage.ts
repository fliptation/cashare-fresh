/**
 * Authentication Storage Utilities
 * Manages JWT tokens and user session in localStorage
 */

import type { AuthTokens, UserDetails } from "../api/types.ts";

const STORAGE_KEYS = {
  TOKEN: "token",
  REFRESH_TOKEN: "refresh_token",
  JWT: "jwt",
  USER_DETAILS: "userDetails",
  IS_LOGGED_IN: "isLoggedIn",
} as const;

/**
 * Check if we're in a browser environment
 */
function isBrowser(): boolean {
  return typeof window !== "undefined" && typeof localStorage !== "undefined";
}

/**
 * Store authentication tokens after successful login
 */
export function storeTokens(tokens: AuthTokens): void {
  if (!isBrowser()) return;

  localStorage.setItem(STORAGE_KEYS.TOKEN, tokens.token);
  localStorage.setItem(STORAGE_KEYS.REFRESH_TOKEN, tokens.refresh_token);
  if (tokens.jwt) {
    localStorage.setItem(STORAGE_KEYS.JWT, tokens.jwt);
  }
  localStorage.setItem(STORAGE_KEYS.IS_LOGGED_IN, "true");
}

/**
 * Store user details after successful login
 */
export function storeUserDetails(user: UserDetails): void {
  if (!isBrowser()) return;

  localStorage.setItem(STORAGE_KEYS.USER_DETAILS, JSON.stringify(user));
}

/**
 * Get the current JWT token
 */
export function getToken(): string | null {
  if (!isBrowser()) return null;
  return localStorage.getItem(STORAGE_KEYS.TOKEN);
}

/**
 * Get the refresh token
 */
export function getRefreshToken(): string | null {
  if (!isBrowser()) return null;
  return localStorage.getItem(STORAGE_KEYS.REFRESH_TOKEN);
}

/**
 * Get stored user details
 */
export function getUserDetails(): UserDetails | null {
  if (!isBrowser()) return null;

  const stored = localStorage.getItem(STORAGE_KEYS.USER_DETAILS);
  if (!stored) return null;

  try {
    return JSON.parse(stored) as UserDetails;
  } catch {
    return null;
  }
}

/**
 * Check if user is logged in
 */
export function isLoggedIn(): boolean {
  if (!isBrowser()) return false;
  return localStorage.getItem(STORAGE_KEYS.IS_LOGGED_IN) === "true";
}

/**
 * Clear all authentication data (logout)
 */
export function clearTokens(): void {
  if (!isBrowser()) return;

  localStorage.removeItem(STORAGE_KEYS.TOKEN);
  localStorage.removeItem(STORAGE_KEYS.REFRESH_TOKEN);
  localStorage.removeItem(STORAGE_KEYS.JWT);
  localStorage.removeItem(STORAGE_KEYS.USER_DETAILS);
  localStorage.removeItem(STORAGE_KEYS.IS_LOGGED_IN);
}

/**
 * Get authorization header for API requests
 */
export function getAuthHeader(): Record<string, string> {
  const token = getToken();
  if (!token) return {};
  return { Authorization: `Bearer ${token}` };
}
