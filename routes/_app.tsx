import { type PageProps } from "$fresh/server.ts";

/**
 * Root App Component
 *
 * Contains only essential global elements:
 * - Charset and viewport
 * - Font preconnects and stylesheets
 * - Global CSS
 *
 * Per-page SEO (title, description, OG tags, hreflang) is handled by
 * the SeoHead component in each route.
 *
 * Note: lang="de" is the default. Pages can override with <Head> if needed.
 */
export default function App({ Component }: PageProps) {
  return (
    <html lang="de">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Fallback title - each page should use SeoHead to set their own */}
        <title>Cashare - Schweizer Crowdlending Plattform</title>

        {/* Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet" />

        {/* Global Styles */}
        <link rel="stylesheet" href="/styles/global.css" />
      </head>
      <body>
        <Component />
      </body>
    </html>
  );
}
