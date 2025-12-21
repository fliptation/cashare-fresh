import { Handlers } from "$fresh/server.ts";

const SITE_URL = "https://www.cashare.ch";

const robotsTxt = `# Cashare Robots.txt
# https://www.cashare.ch

User-agent: *
Allow: /

# XML Sitemap
Sitemap: ${SITE_URL}/sitemap.xml

# Block internal/dev paths
Disallow: /api/
Disallow: /_frsh/
Disallow: /migration

# Block query string pages
Disallow: /*?*

# Allow search engines to access CSS and JS for rendering
Allow: /*.css$
Allow: /*.js$
`;

export const handler: Handlers = {
  GET(_req) {
    return new Response(robotsTxt, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "public, max-age=86400", // Cache for 24 hours
      },
    });
  },
};
