import { Head } from "$fresh/runtime.ts";
import type { Locale } from "../lib/i18n/types.ts";
import { getAlternateUrls } from "../lib/i18n/routes.ts";

const SITE_URL = "https://www.cashare.ch";
const SITE_NAME = "Cashare";
const DEFAULT_OG_IMAGE = "/images/og-image.png";

interface SeoHeadProps {
  /** Page title (will be appended with " | Cashare") */
  title: string;
  /** Meta description (max 160 characters recommended) */
  description: string;
  /** The canonical path for this page (e.g., "/kredit-beantragen") */
  canonicalPath: string;
  /** Current locale */
  locale: Locale;
  /** Custom OG image path (optional) */
  ogImage?: string;
  /** OG type - "website" for pages, "article" for blog posts */
  ogType?: "website" | "article";
  /** Article metadata for blog posts */
  article?: {
    publishedTime: string;
    modifiedTime?: string;
    author?: string;
    section?: string;
  };
  /** Set to true to add noindex tag */
  noindex?: boolean;
}

/**
 * SEO Head Component
 *
 * Provides per-page SEO meta tags including:
 * - Title and description
 * - Canonical URL
 * - Hreflang tags for all locales
 * - Open Graph tags
 * - Twitter Card tags
 *
 * Usage:
 * ```tsx
 * <SeoHead
 *   title="Privatkredit beantragen"
 *   description="Beantragen Sie Ihren Privatkredit..."
 *   canonicalPath="/kredit-beantragen/privatkredit"
 *   locale="de"
 * />
 * ```
 */
export function SeoHead({
  title,
  description,
  canonicalPath,
  locale,
  ogImage = DEFAULT_OG_IMAGE,
  ogType = "website",
  article,
  noindex = false,
}: SeoHeadProps) {
  // Get full URLs
  const canonicalUrl = `${SITE_URL}${canonicalPath}`;
  const ogImageUrl = ogImage.startsWith("http") ? ogImage : `${SITE_URL}${ogImage}`;

  // Get alternate URLs for all locales
  const alternates = getAlternateUrls(canonicalPath, locale);

  // Full title with site name
  const fullTitle = `${title} | ${SITE_NAME}`;

  // Locale to og:locale format
  const ogLocale: Record<Locale, string> = {
    de: "de_CH",
    en: "en_US",
    fr: "fr_CH",
  };

  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Hreflang Tags */}
      <link rel="alternate" hreflang="de" href={`${SITE_URL}${alternates.de}`} />
      <link rel="alternate" hreflang="en" href={`${SITE_URL}${alternates.en}`} />
      <link rel="alternate" hreflang="fr" href={`${SITE_URL}${alternates.fr}`} />
      <link rel="alternate" hreflang="x-default" href={`${SITE_URL}${alternates.de}`} />

      {/* Open Graph Tags */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content={ogLocale[locale]} />
      <meta property="og:site_name" content={SITE_NAME} />

      {/* Article-specific OG tags */}
      {article && (
        <>
          <meta property="article:published_time" content={article.publishedTime} />
          {article.modifiedTime && (
            <meta property="article:modified_time" content={article.modifiedTime} />
          )}
          {article.author && <meta property="article:author" content={article.author} />}
          {article.section && <meta property="article:section" content={article.section} />}
        </>
      )}

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImageUrl} />
    </Head>
  );
}
