/**
 * JSON-LD Schema Generators for SEO
 *
 * These functions generate structured data for Google rich snippets.
 * See: https://developers.google.com/search/docs/advanced/structured-data
 */

const SITE_URL = "https://www.cashare.ch";

/**
 * Organization schema for Cashare
 * Used on all pages to establish entity information
 */
export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    "@id": `${SITE_URL}/#organization`,
    "name": "Cashare AG",
    "url": SITE_URL,
    "logo": `${SITE_URL}/images/cashare-logo.svg`,
    "image": `${SITE_URL}/images/og-image.png`,
    "description":
      "Schweizer Crowdlending Plattform - Privatkredite, KMU-Kredite und Hypotheken",
    "foundingDate": "2008",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Bösch 73",
      "addressLocality": "Hünenberg",
      "postalCode": "6331",
      "addressCountry": "CH",
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+41 41 558 48 88",
      "contactType": "customer service",
      "email": "support@cashare.ch",
      "availableLanguage": ["German", "English", "French"],
    },
    "sameAs": [
      "https://www.facebook.com/cashare.ch",
      "https://www.linkedin.com/company/cashare",
      "https://twitter.com/cashare_ch",
      "https://www.instagram.com/cashare_ch",
      "https://www.youtube.com/@cashare",
    ],
  };
}

/**
 * WebSite schema with search action
 */
export function generateWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    "name": "Cashare",
    "url": SITE_URL,
    "publisher": {
      "@id": `${SITE_URL}/#organization`,
    },
  };
}

/**
 * FAQPage schema for FAQ sections
 * Enables FAQ rich snippets in Google SERPs
 */
export function generateFAQSchema(
  faqs: Array<{ question: string; answer: string }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };
}

/**
 * BreadcrumbList schema for navigation breadcrumbs
 */
export interface BreadcrumbItem {
  name: string;
  url?: string;
}

export function generateBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      ...(item.url ? { "item": item.url } : {}),
    })),
  };
}

/**
 * Article schema for blog posts
 */
export interface ArticleSchemaProps {
  headline: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified?: string;
  author?: string;
  url: string;
}

export function generateArticleSchema({
  headline,
  description,
  image,
  datePublished,
  dateModified,
  author = "Cashare",
  url,
}: ArticleSchemaProps) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": headline,
    "description": description,
    "image": image.startsWith("http") ? image : `${SITE_URL}${image}`,
    "datePublished": datePublished,
    "dateModified": dateModified || datePublished,
    "author": {
      "@type": "Organization",
      "name": author,
      "@id": `${SITE_URL}/#organization`,
    },
    "publisher": {
      "@type": "Organization",
      "name": "Cashare",
      "logo": {
        "@type": "ImageObject",
        "url": `${SITE_URL}/images/cashare-logo.svg`,
      },
      "@id": `${SITE_URL}/#organization`,
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url.startsWith("http") ? url : `${SITE_URL}${url}`,
    },
  };
}
