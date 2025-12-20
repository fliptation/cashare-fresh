/**
 * Internationalization (i18n) System
 *
 * Provides type-safe translations for German, English, and French.
 */

import type {
  Locale,
  TranslationNamespace,
  TranslationKey,
  Translations,
} from "./types.ts";

import deTranslations from "./locales/de.json" with { type: "json" };
import enTranslations from "./locales/en.json" with { type: "json" };
import frTranslations from "./locales/fr.json" with { type: "json" };

const translations: Record<Locale, Translations> = {
  de: deTranslations as Translations,
  en: enTranslations as Translations,
  fr: frTranslations as Translations,
};

/** Default locale */
export const DEFAULT_LOCALE: Locale = "de";

/** Supported locales */
export const SUPPORTED_LOCALES: Locale[] = ["de", "en", "fr"];

/**
 * Check if a string is a valid locale
 */
export function isValidLocale(value: string): value is Locale {
  return SUPPORTED_LOCALES.includes(value as Locale);
}

/**
 * Get translation for a specific key
 *
 * @param locale - The locale to use
 * @param namespace - The translation namespace
 * @param key - The translation key
 * @returns The translated string
 *
 * @example
 * ```ts
 * const text = t("de", "calculator", "Apply");
 * // Returns: "Beantragen"
 * ```
 */
export function t<N extends TranslationNamespace>(
  locale: Locale,
  namespace: N,
  key: TranslationKey<N>
): string {
  const localeTranslations = translations[locale] ?? translations[DEFAULT_LOCALE];
  const namespaceTranslations = localeTranslations[namespace];

  // @ts-ignore - TypeScript can't fully infer the key type
  const value = namespaceTranslations?.[key];

  if (value === undefined) {
    console.warn(`Missing translation: ${locale}.${namespace}.${key}`);
    // Fallback to German
    // @ts-ignore
    return translations[DEFAULT_LOCALE][namespace]?.[key] ?? String(key);
  }

  return value;
}

/**
 * Create a translation function bound to a specific locale
 *
 * @param locale - The locale to use
 * @returns A translation function
 *
 * @example
 * ```ts
 * const translate = useI18n("de");
 * const text = translate("calculator", "Apply");
 * // Returns: "Beantragen"
 * ```
 */
export function useI18n(locale: Locale) {
  return <N extends TranslationNamespace>(
    namespace: N,
    key: TranslationKey<N>
  ): string => t(locale, namespace, key);
}

/**
 * Create a translation function bound to a specific locale and namespace
 *
 * @param locale - The locale to use
 * @param namespace - The translation namespace
 * @returns A translation function
 *
 * @example
 * ```ts
 * const t = useNamespacedI18n("de", "calculator");
 * const text = t("Apply");
 * // Returns: "Beantragen"
 * ```
 */
export function useNamespacedI18n<N extends TranslationNamespace>(
  locale: Locale,
  namespace: N
) {
  return (key: TranslationKey<N>): string => t(locale, namespace, key);
}

/**
 * Detect locale from request
 *
 * Checks URL path first, then Accept-Language header, defaults to German.
 *
 * @param request - The incoming request
 * @returns The detected locale
 */
export function detectLocale(request: Request): Locale {
  const url = new URL(request.url);
  const pathSegments = url.pathname.split("/").filter(Boolean);
  const pathLang = pathSegments[0];

  // Check URL path
  if (isValidLocale(pathLang)) {
    return pathLang;
  }

  // Check Accept-Language header
  const acceptLanguage = request.headers.get("Accept-Language") || "";

  if (acceptLanguage.includes("en")) {
    return "en";
  }
  if (acceptLanguage.includes("fr")) {
    return "fr";
  }

  // Default to German
  return DEFAULT_LOCALE;
}

/**
 * Get all translations for a locale
 *
 * Useful for passing to client-side components.
 */
export function getAllTranslations(locale: Locale): Translations {
  return translations[locale] ?? translations[DEFAULT_LOCALE];
}

// Re-export types
export type { Locale, TranslationNamespace, TranslationKey, Translations };
