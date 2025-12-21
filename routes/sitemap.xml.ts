import { Handlers } from "$fresh/server.ts";
import { blogPosts } from "../lib/blog/posts.ts";

const SITE_URL = "https://www.cashare.ch";

// Static pages with their language alternates
// Format: [dePath, enPath, frPath, priority, changefreq]
type SitemapEntry = [string, string, string, string, string];

const staticPages: SitemapEntry[] = [
  // Homepage
  ["/", "/en", "/fr", "1.0", "weekly"],

  // Main sections
  ["/kredit-beantragen", "/en/apply-for-credit", "/fr/demander-un-credit", "0.9", "weekly"],
  ["/investieren", "/en/invest", "/fr/investir", "0.9", "weekly"],
  ["/ueber-uns", "/en/about", "/fr/a-propos", "0.8", "weekly"],

  // Credit products
  ["/kredit-beantragen/privatkredit", "/en/apply-for-credit/personal-loan", "/fr/demander-un-credit/credit-prive", "0.8", "weekly"],
  ["/kredit-beantragen/kmu-kredit", "/en/apply-for-credit/sme-loan", "/fr/demander-un-credit/credit-pme", "0.8", "weekly"],
  ["/kredit-beantragen/hypotheken", "/en/apply-for-credit/mortgage", "/fr/demander-un-credit/hypotheque", "0.8", "weekly"],

  // Invest sections
  ["/investieren/privatinvestoren", "/en/invest/private-investors", "/fr/investir/investisseurs-prives", "0.8", "weekly"],
  ["/investieren/institutionelle", "/en/invest/institutional", "/fr/investir/institutionnels", "0.8", "weekly"],

  // About sections
  ["/ueber-uns/wer-sind-wir", "/en/about/who-we-are", "/fr/a-propos/qui-sommes-nous", "0.7", "monthly"],
  ["/ueber-uns/crowdlending", "/en/about/crowdlending", "/fr/a-propos/crowdlending", "0.7", "monthly"],
  ["/ueber-uns/statistik", "/en/about/statistics", "/fr/a-propos/statistiques", "0.7", "weekly"],
  ["/ueber-uns/partner", "/en/about/partners", "/fr/a-propos/partenaires", "0.6", "monthly"],
  ["/ueber-uns/presse", "/en/about/press", "/fr/a-propos/presse", "0.6", "monthly"],
  ["/ueber-uns/jobs", "/en/about/jobs", "/fr/a-propos/emplois", "0.6", "monthly"],
  ["/ueber-uns/rating", "/en/about/rating", "/fr/a-propos/rating", "0.7", "monthly"],
  ["/ueber-uns/blog", "/en/about/blog", "/fr/a-propos/blog", "0.8", "daily"],

  // How it works
  ["/so-funktionierts", "/en/how-it-works", "/fr/comment-ca-marche", "0.7", "monthly"],
  ["/so-funktionierts/privatkredit", "/en/how-it-works/private-loans", "/fr/comment-ca-marche/credit-prive", "0.7", "monthly"],
  ["/so-funktionierts/kmu", "/en/how-it-works/sme", "/fr/comment-ca-marche/pme", "0.7", "monthly"],
  ["/so-funktionierts/hypothek", "/en/how-it-works/mortgage", "/fr/comment-ca-marche/hypotheque", "0.7", "monthly"],

  // Security
  ["/sicherheit", "/en/security", "/fr/securite", "0.6", "monthly"],

  // Legal pages
  ["/agb", "/en/terms", "/fr/cgv", "0.4", "yearly"],
  ["/datenschutzerklaerung", "/en/privacy", "/fr/confidentialite", "0.4", "yearly"],
  ["/impressum", "/en/imprint", "/fr/mentions-legales", "0.4", "yearly"],
  ["/cookies", "/en/cookies", "/fr/cookies", "0.4", "yearly"],

  // Application forms
  ["/privatdarlehen-beantragen", "/en/apply-for-personal-loan", "/fr/demander-credit-prive", "0.8", "weekly"],
  ["/kmu-kredit-beantragen", "/kmu-kredit-beantragen", "/kmu-kredit-beantragen", "0.8", "weekly"],
  ["/kmu-kurzkredit-beantragen", "/kmu-kurzkredit-beantragen", "/kmu-kurzkredit-beantragen", "0.8", "weekly"],

  // Auth pages
  ["/login", "/en/login", "/fr/login", "0.5", "monthly"],
  ["/passwort-zuruecksetzen", "/en/reset-password", "/fr/reinitialiser-mot-de-passe", "0.3", "yearly"],
];

function generateUrlEntry(
  dePath: string,
  enPath: string,
  frPath: string,
  priority: string,
  changefreq: string,
  lastmod?: string,
): string {
  const today = lastmod || new Date().toISOString().split("T")[0];

  // Generate all 3 language versions
  const urls: string[] = [];

  // German version (default)
  urls.push(`
  <url>
    <loc>${SITE_URL}${dePath}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
    <xhtml:link rel="alternate" hreflang="de" href="${SITE_URL}${dePath}" />
    <xhtml:link rel="alternate" hreflang="en" href="${SITE_URL}${enPath}" />
    <xhtml:link rel="alternate" hreflang="fr" href="${SITE_URL}${frPath}" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE_URL}${dePath}" />
  </url>`);

  // English version
  urls.push(`
  <url>
    <loc>${SITE_URL}${enPath}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
    <xhtml:link rel="alternate" hreflang="de" href="${SITE_URL}${dePath}" />
    <xhtml:link rel="alternate" hreflang="en" href="${SITE_URL}${enPath}" />
    <xhtml:link rel="alternate" hreflang="fr" href="${SITE_URL}${frPath}" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE_URL}${dePath}" />
  </url>`);

  // French version
  urls.push(`
  <url>
    <loc>${SITE_URL}${frPath}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
    <xhtml:link rel="alternate" hreflang="de" href="${SITE_URL}${dePath}" />
    <xhtml:link rel="alternate" hreflang="en" href="${SITE_URL}${enPath}" />
    <xhtml:link rel="alternate" hreflang="fr" href="${SITE_URL}${frPath}" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE_URL}${dePath}" />
  </url>`);

  return urls.join("");
}

function generateBlogUrls(): string {
  return blogPosts
    .map((post) => {
      const dePath = `/ueber-uns/blog/${post.slug}`;
      const enPath = `/en/about/blog/${post.slug}`;
      const frPath = `/fr/a-propos/blog/${post.slug}`;
      return generateUrlEntry(dePath, enPath, frPath, "0.6", "monthly", post.date);
    })
    .join("");
}

function generateSitemap(): string {
  const staticUrls = staticPages
    .map(([de, en, fr, priority, changefreq]) =>
      generateUrlEntry(de, en, fr, priority, changefreq)
    )
    .join("");

  const blogUrls = generateBlogUrls();

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${staticUrls}
${blogUrls}
</urlset>`;
}

export const handler: Handlers = {
  GET(_req) {
    const sitemap = generateSitemap();

    return new Response(sitemap, {
      headers: {
        "Content-Type": "application/xml; charset=utf-8",
        "Cache-Control": "public, max-age=3600", // Cache for 1 hour
      },
    });
  },
};
