import { type PageProps } from "$fresh/server.ts";

export default function App({ Component }: PageProps) {
  return (
    <html lang="de">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Cashare - Schweizer Crowdlending Plattform</title>
        <meta name="description" content="Cashare ist die erste Crowdlending-Plattform der Schweiz. Privatkredite, KMU-Kredite und Hypotheken zu fairen Konditionen." />
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
