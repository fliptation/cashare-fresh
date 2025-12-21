/**
 * SEO Utility Functions
 */

import type { Locale } from "../i18n/types.ts";
import { getAlternateUrls } from "../i18n/routes.ts";

const SITE_URL = "https://www.cashare.ch";

/**
 * Generate full canonical URL
 */
export function generateCanonicalUrl(path: string): string {
  return `${SITE_URL}${path}`;
}

/**
 * Generate hreflang links for a given path
 */
export function generateHreflangLinks(
  path: string,
  currentLocale: Locale,
): { hreflang: string; href: string }[] {
  const alternates = getAlternateUrls(path, currentLocale);

  return [
    { hreflang: "de", href: `${SITE_URL}${alternates.de}` },
    { hreflang: "en", href: `${SITE_URL}${alternates.en}` },
    { hreflang: "fr", href: `${SITE_URL}${alternates.fr}` },
    { hreflang: "x-default", href: `${SITE_URL}${alternates.de}` }, // German as default
  ];
}

/**
 * Truncate description to a maximum length while preserving whole words
 */
export function truncateDescription(text: string, maxLength = 160): string {
  if (text.length <= maxLength) {
    return text;
  }

  // Find the last space before maxLength
  const truncated = text.substring(0, maxLength);
  const lastSpace = truncated.lastIndexOf(" ");

  if (lastSpace > maxLength * 0.7) {
    // Only truncate at word boundary if it doesn't cut too much
    return truncated.substring(0, lastSpace) + "...";
  }

  return truncated + "...";
}

/**
 * Generate full OG image URL
 */
export function generateOgImageUrl(imagePath: string): string {
  if (imagePath.startsWith("http")) {
    return imagePath;
  }
  return `${SITE_URL}${imagePath}`;
}

/**
 * Generate breadcrumb items from path
 */
export function generateBreadcrumbs(
  path: string,
  locale: Locale,
): { name: string; url: string }[] {
  const segments = path.split("/").filter(Boolean);
  const breadcrumbs: { name: string; url: string }[] = [];

  // Add home
  const homePath = locale === "de" ? "/" : `/${locale}`;
  breadcrumbs.push({
    name: locale === "de" ? "Startseite" : locale === "en" ? "Home" : "Accueil",
    url: `${SITE_URL}${homePath}`,
  });

  // Build up the path
  let currentPath = locale === "de" ? "" : `/${locale}`;

  for (const segment of segments) {
    // Skip locale prefix
    if (segment === locale) continue;

    currentPath += `/${segment}`;

    // Convert segment to readable name (basic implementation)
    const name = segment
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

    breadcrumbs.push({
      name,
      url: `${SITE_URL}${currentPath}`,
    });
  }

  return breadcrumbs;
}

/**
 * Detect locale from URL path
 */
export function getLocaleFromPath(path: string): Locale {
  if (path.startsWith("/en")) return "en";
  if (path.startsWith("/fr")) return "fr";
  return "de";
}
