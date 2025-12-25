/**
 * Route mapping between locales
 *
 * Maps paths between German, English, and French versions of the site.
 */

import type { Locale } from "./types.ts";

/**
 * Route mappings: German path -> translations
 */
const routeMap: Record<string, Record<Locale, string>> = {
  "/": {
    de: "/",
    en: "/en",
    fr: "/fr",
  },
  "/ueber-uns": {
    de: "/ueber-uns",
    en: "/en/about",
    fr: "/fr/a-propos",
  },
  "/investieren": {
    de: "/investieren",
    en: "/en/invest",
    fr: "/fr/investir",
  },
  "/kredit-beantragen": {
    de: "/kredit-beantragen",
    en: "/en/apply-for-credit",
    fr: "/fr/demander-un-credit",
  },
  "/kredit-beantragen/privatkredit": {
    de: "/kredit-beantragen/privatkredit",
    en: "/en/apply-for-credit/personal-loan",
    fr: "/fr/demander-un-credit/credit-prive",
  },
  "/kredit-beantragen/kmu-kredit": {
    de: "/kredit-beantragen/kmu-kredit",
    en: "/en/apply-for-credit/sme-loan",
    fr: "/fr/demander-un-credit/credit-pme",
  },
  "/kredit-beantragen/hypotheken": {
    de: "/kredit-beantragen/hypotheken",
    en: "/en/apply-for-credit/mortgage",
    fr: "/fr/demander-un-credit/hypotheque",
  },
  "/investieren/privatinvestoren": {
    de: "/investieren/privatinvestoren",
    en: "/en/invest/private-investors",
    fr: "/fr/investir/investisseurs-prives",
  },
  "/investieren/institutionelle": {
    de: "/investieren/institutionelle",
    en: "/en/invest/institutional",
    fr: "/fr/investir/institutionnels",
  },
  "/ueber-uns/wer-sind-wir": {
    de: "/ueber-uns/wer-sind-wir",
    en: "/en/about/who-we-are",
    fr: "/fr/a-propos/qui-sommes-nous",
  },
  "/ueber-uns/partner": {
    de: "/ueber-uns/partner",
    en: "/en/about/partners",
    fr: "/fr/a-propos/partenaires",
  },
  "/ueber-uns/crowdlending": {
    de: "/ueber-uns/crowdlending",
    en: "/en/about/crowdlending",
    fr: "/fr/a-propos/crowdlending",
  },
  "/ueber-uns/presse": {
    de: "/ueber-uns/presse",
    en: "/en/about/press",
    fr: "/fr/a-propos/presse",
  },
  "/ueber-uns/statistik": {
    de: "/ueber-uns/statistik",
    en: "/en/about/statistics",
    fr: "/fr/a-propos/statistiques",
  },
  "/ueber-uns/blog": {
    de: "/ueber-uns/blog",
    en: "/en/about/blog",
    fr: "/fr/a-propos/blog",
  },
  "/ueber-uns/jobs": {
    de: "/ueber-uns/jobs",
    en: "/en/about/jobs",
    fr: "/fr/a-propos/emplois",
  },
  "/login": {
    de: "/login",
    en: "/en/login",
    fr: "/fr/login",
  },
  "/sicherheit": {
    de: "/sicherheit",
    en: "/en/security",
    fr: "/fr/securite",
  },
  "/ueber-uns/rating": {
    de: "/ueber-uns/rating",
    en: "/en/about/rating",
    fr: "/fr/a-propos/rating",
  },
};

/**
 * Build reverse lookup maps for each locale
 */
const reverseMaps: Record<Locale, Map<string, string>> = {
  de: new Map(),
  en: new Map(),
  fr: new Map(),
};

// Populate reverse maps
for (const [dePath, translations] of Object.entries(routeMap)) {
  for (const [locale, localePath] of Object.entries(translations)) {
    reverseMaps[locale as Locale].set(localePath, dePath);
  }
}

/**
 * Get the German (canonical) path from any locale path
 */
export function getCanonicalPath(path: string, currentLocale: Locale): string {
  // Remove trailing slash for consistency
  const normalizedPath = path === "/" ? "/" : path.replace(/\/$/, "");

  // Look up in reverse map
  const canonical = reverseMaps[currentLocale].get(normalizedPath);

  if (canonical) {
    return canonical;
  }

  // If not found, try to extract the path without locale prefix
  if (currentLocale === "en" && normalizedPath.startsWith("/en")) {
    return normalizedPath.replace(/^\/en/, "") || "/";
  }
  if (currentLocale === "fr" && normalizedPath.startsWith("/fr")) {
    return normalizedPath.replace(/^\/fr/, "") || "/";
  }

  return normalizedPath;
}

/**
 * Translate a path to a specific locale
 */
export function translatePath(path: string, fromLocale: Locale, toLocale: Locale): string {
  // If same locale, return as-is
  if (fromLocale === toLocale) {
    return path;
  }

  // Get canonical (German) path first
  const canonicalPath = getCanonicalPath(path, fromLocale);

  // Look up translation
  const translations = routeMap[canonicalPath];

  if (translations && translations[toLocale]) {
    return translations[toLocale];
  }

  // Fallback: prefix/unprefix based on locale
  if (toLocale === "de") {
    // Remove locale prefix for German
    return canonicalPath;
  } else {
    // Add locale prefix for EN/FR
    return `/${toLocale}${canonicalPath === "/" ? "" : canonicalPath}`;
  }
}

/**
 * Get all locale versions of a path
 */
export function getAlternateUrls(path: string, currentLocale: Locale): Record<Locale, string> {
  return {
    de: translatePath(path, currentLocale, "de"),
    en: translatePath(path, currentLocale, "en"),
    fr: translatePath(path, currentLocale, "fr"),
  };
}
