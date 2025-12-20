import { type PageProps } from "$fresh/server.ts";

export default function App({ Component }: PageProps) {
  const siteUrl = "https://cashare.ch";
  const ogImage = `${siteUrl}/images/og-image.png`;

  return (
    <html lang="de">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Cashare - Schweizer Crowdlending Plattform</title>
        <meta name="description" content="Cashare ist die erste Crowdlending-Plattform der Schweiz. Privatkredite, KMU-Kredite und Hypotheken zu fairen Konditionen." />

        {/* Open Graph / Facebook / WhatsApp */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:title" content="Cashare - Schweizer Crowdlending Plattform" />
        <meta property="og:description" content="Cashare ist die erste Crowdlending-Plattform der Schweiz. Privatkredite, KMU-Kredite und Hypotheken zu fairen Konditionen." />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="de_CH" />
        <meta property="og:site_name" content="Cashare" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Cashare - Schweizer Crowdlending Plattform" />
        <meta name="twitter:description" content="Cashare ist die erste Crowdlending-Plattform der Schweiz. Privatkredite, KMU-Kredite und Hypotheken zu fairen Konditionen." />
        <meta name="twitter:image" content={ogImage} />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="/styles/global.css" />
      </head>
      <body>
        <Component />
      </body>
    </html>
  );
}
