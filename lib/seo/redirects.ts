/**
 * SEO Redirect Map
 * Maps old WordPress URLs to new Fresh URLs for 301 redirects
 * Generated from migration.tsx data
 */

// Page redirects (WordPress trailing slashes → Fresh clean URLs)
export const pageRedirects: Record<string, string> = {
  // Main pages (trailing slash normalization)
  "/kredit-beantragen/": "/kredit-beantragen",
  "/kredit-beantragen/privatkredit/": "/kredit-beantragen/privatkredit",
  "/kredit-beantragen/kmu-kredit/": "/kredit-beantragen/kmu-kredit",
  "/investieren/": "/investieren",
  "/investieren/privatinvestoren/": "/investieren/privatinvestoren",
  "/investieren/institutionelle/": "/investieren/institutionelle",
  "/ueber-uns/": "/ueber-uns",
  "/ueber-uns/crowdlending/": "/ueber-uns/crowdlending",
  "/ueber-uns/statistik/": "/ueber-uns/statistik",
  "/ueber-uns/rating/": "/ueber-uns/rating",
  "/ueber-uns/jobs/": "/ueber-uns/jobs",
  "/ueber-uns/partner/": "/ueber-uns/partner",
  "/ueber-uns/presse/": "/ueber-uns/presse",
  "/sicherheit/": "/sicherheit",
  "/agb/": "/agb",
  "/datenschutzerklaerung/": "/datenschutzerklaerung",
  "/impressum/": "/impressum",
  "/cookies/": "/cookies",

  // Structure changes
  "/hypothek/": "/kredit-beantragen/hypotheken",

  // Blog category
  "/category/blog/": "/ueber-uns/blog",

  // Legacy "How it Works" pages (redirect to German equivalents)
  "/how-it-works/": "/kredit-beantragen",
  "/how-it-works/private-loans/": "/kredit-beantragen/privatkredit",
  "/how-it-works/sme/": "/kredit-beantragen/kmu-kredit",
  "/how-it-works/hypo/": "/kredit-beantragen/hypotheken",
  "/who-we-are/": "/ueber-uns",
  "/home/private-calculator/": "/",
  "/home/sme-calculator/": "/",

  // English pages (trailing slash normalization)
  "/en/": "/en",
  "/en/apply-for-credit/": "/en/apply-for-credit",
  "/en/invest/": "/en/invest",
  "/en/about/": "/en/about",

  // French pages (trailing slash normalization)
  "/fr/": "/fr",
  "/fr/demander-un-credit/": "/fr/demander-un-credit",
  "/fr/investir/": "/fr/investir",
  "/fr/a-propos/": "/fr/a-propos",
};

// Blog article redirects (WordPress slug → Fresh slug)
// WordPress format: /{wpSlug}/
// Fresh format: /ueber-uns/blog/{slug}
export const blogRedirects: Record<string, string> = {
  "/restschuld-ratenversicherung-dein-schutz-vor-der-schuldenfalle-in-der-schweiz/": "/ueber-uns/blog/restschuldversicherung-schweiz",
  "/flexiblere-zinszahlungen-fuer-endfaellige-darlehen/": "/ueber-uns/blog/flexiblere-zinszahlungen-endfaellige-darlehen",
  "/crowdfunding-wachstum-schweiz/": "/ueber-uns/blog/crowdfunding-wachstum-schweiz",
  "/zinsentwicklung-2024-zins-quo-vadis-2/": "/ueber-uns/blog/zinsentwicklung-2024",
  "/crowdfunding-monitor-2024/": "/ueber-uns/blog/crowdfunding-monitor-2024",
  "/digitalisierung-der-finanzmaerkte-ihre-chancen-und-risiken/": "/ueber-uns/blog/digitalisierung-finanzmaerkte",
  "/abrakadabra-so-wirst-du-zu-deiner-eigenen-bank/": "/ueber-uns/blog/abrakadabra-eigene-bank",
  "/unrecht-banken-scheffeln-millionen-aber-kunden-muessen-draufzahlen/": "/ueber-uns/blog/banken-millionen-kunden-draufzahlen",
  "/crowdfunding-rueckgang-hohem-niveau/": "/ueber-uns/blog/crowdfunding-rueckgang-hohem-niveau",
  "/mehr-effizienz-und-nutzererlebnis-bei-kreditverlaengerungen/": "/ueber-uns/blog/effizienz-kreditverlaengerungen",
  "/chatbot-cashy-online/": "/ueber-uns/blog/chatbot-cashy-online",
  "/vorsorgeauftrag-patientenverfuegung-und-vollmachten/": "/ueber-uns/blog/vorsorgeauftrag-patientenverfuegung",
  "/neue-partnerschaft-mit-american-institute-of-applied-sciences/": "/ueber-uns/blog/partnerschaft-american-institute",
  "/jahresrueckblick-2022/": "/ueber-uns/blog/jahresrueckblick-2022",
  "/neues-feature-fuer-anleger/": "/ueber-uns/blog/neues-feature-anleger-csv",
  "/lastschriftverfahren/": "/ueber-uns/blog/lastschriftverfahren-lsv",
  "/inflation-in-der-schweiz/": "/ueber-uns/blog/inflation-schweiz",
  "/crowdfunding-die-erfolgsgeschichte-geht-weiter/": "/ueber-uns/blog/crowdfunding-erfolgsgeschichte-2022",
  "/interview-mit-sophie-hundertmark-zu-chatbots/": "/ueber-uns/blog/interview-sophie-hundertmark-chatbots",
  "/5067-2/": "/ueber-uns/blog/nachhaltigkeit-successstory",
  "/erweiterung-unseres-advisory-boards/": "/ueber-uns/blog/erweiterung-advisory-board-tina-stoermer",
  "/loan/": "/ueber-uns/blog/crowdlending-anleihe-erfolg",
  "/sophie-hundertmark-erweitert-unser-advisory-board/": "/ueber-uns/blog/sophie-hundertmark-advisory-board",
  "/cashare-jahresrueckblick-2021/": "/ueber-uns/blog/jahresrueckblick-2021",
  "/crowdinvesting-gemeinsam-sind-wir-stark/": "/ueber-uns/blog/crowdinvesting-gemeinsam-stark",
  "/wandeldarlehen-bei-cashare/": "/ueber-uns/blog/wandeldarlehen-cashare",
  "/crowdlending-bietet-eine-gute-alternative-zum-herkoemmlichen-bankkredit/": "/ueber-uns/blog/crowdlending-alternative-bankkredit",
  "/wer-ist-die-crowd/": "/ueber-uns/blog/wer-ist-die-crowd",
  "/von-pain-zu-gain-erfolgreich-aus-der-coronakrise/": "/ueber-uns/blog/pain-gain-coronakrise",
  "/eine-buergschaft-als-sicherheit/": "/ueber-uns/blog/buergschaft-als-sicherheit",
  "/privatkredit-vs-autoleasing-2/": "/ueber-uns/blog/privatkredit-vs-autoleasing",
  "/5-tipps-fuer-die-kreditaufnahme/": "/ueber-uns/blog/5-tipps-kreditaufnahme",
  "/anleihen-als-anlage/": "/ueber-uns/blog/anleihen-als-anlage",
  "/kredit-ja-oder-nein/": "/ueber-uns/blog/kredit-ja-oder-nein",
  "/crowdlending-survey-2020/": "/ueber-uns/blog/crowdlending-survey-2020",
  "/so-profitiert-herr-friedli-durch-ein-darlehen-von-cashare/": "/ueber-uns/blog/herr-friedli-darlehen-cashare",
  "/die-top-5-cashare-blogs/": "/ueber-uns/blog/top-5-cashare-blogs-2020",
  "/michelin-stern-dank-der-crowd/": "/ueber-uns/blog/michelin-stern-crowd",
  "/als-privatperson-in-mehrfamilienhaeuser-investieren/": "/ueber-uns/blog/mehrfamilienhaeuser-investieren",
  "/rueckblick-2020/": "/ueber-uns/blog/rueckblick-2020",
  "/club-deals-was-ist-das/": "/ueber-uns/blog/club-deals",
  "/wie-mika-stappen-seine-vision-mit-cashare-umsetzen-konnte/": "/ueber-uns/blog/mika-stappen-vision-cashare",
  "/unsere-4-cashare-anleihe-feiert-geburtstag/": "/ueber-uns/blog/cashare-anleihe-geburtstag",
  "/die-qual-der-wahl/": "/ueber-uns/blog/qual-der-wahl",
  "/crazy-country-usa-und-was-unser-beirat-alfred-mettler-damit-zu-schaffen-hat/": "/ueber-uns/blog/crazy-country-usa-alfred-mettler",
  "/so-profitiert-harry-schnabel-durch-eine-investition-ueber-cashare/": "/ueber-uns/blog/harry-schnabel-investition-cashare",
  "/das-kleine-anleger-1x1/": "/ueber-uns/blog/anleger-1x1",
  "/crowdlending-als-kontoersatz/": "/ueber-uns/blog/crowdlending-kontoersatz",
  "/investitionen-in-grundpfandbesicherte-kredite/": "/ueber-uns/blog/grundpfandbesicherte-kredite",
  "/der-cashare-sekundaermarkt-als-lebendiger-marktplatz/": "/ueber-uns/blog/sekundaermarkt-marktplatz",
  "/neu-digitalisierung-der-persoenlichen-identifiktation/": "/ueber-uns/blog/digitalisierung-identifikation",
  "/unterstuetzung-durch-den-bund-bedeutet/": "/ueber-uns/blog/unterstuetzung-bund-corona",
  "/ein-herz-fuer-kmu/": "/ueber-uns/blog/herz-fuer-kmu",
  "/rechtsstillstand-fuer-betreibungen-was-bedeutet-das/": "/ueber-uns/blog/rechtsstillstand-betreibungen",
  "/cashare-stellt-auf-homeoffice-um/": "/ueber-uns/blog/homeoffice-corona",
  "/cashare-und-benedict-gehen-in-die-naechste-runde/": "/ueber-uns/blog/cashare-benedict-naechste-runde",
  "/cashare-feiert-seinen-12ten-geburtstag-als-crowdlending-plattform/": "/ueber-uns/blog/cashare-12-geburtstag",
  "/wie-cashare-eine-flotte-erweitert/": "/ueber-uns/blog/wie-cashare-flotte-erweitert",
  "/jahresrueckblick-cashare-2019/": "/ueber-uns/blog/jahresrueckblick-2019",
  "/kredite-verkaufen-sie-ab-jetzt-neu-auf-unserem-cashare-sekundaermarkt/": "/ueber-uns/blog/cashare-sekundaermarkt-launch",
  "/rueckblick-auf-das-3-quartal-2019/": "/ueber-uns/blog/rueckblick-q3-2019",
  "/mci-real-estate-ag-eine-erfolgsgeschichte/": "/ueber-uns/blog/mci-real-estate-erfolgsgeschichte",
  "/rueckblick-auf-den-4-fintech-roundtable-des-efd-aus-sicht-cashare/": "/ueber-uns/blog/fintech-roundtable-efd",
  "/zuger-messe-2019-ein-rueckblick/": "/ueber-uns/blog/zuger-messe-2019",
  "/starke-partner-cashare-und-benedict/": "/ueber-uns/blog/starke-partner-cashare-benedict",
  "/die-gefahren-von-phishing-scams/": "/ueber-uns/blog/gefahren-phishing",
  "/zinsen-in-geiselhaft/": "/ueber-uns/blog/zinsen-in-geiselhaft",
  "/immobilien-und-crowdlending-sind-ein-gutes-team/": "/ueber-uns/blog/immobilien-crowdlending-team",
  "/anlegen-mit-erfolg/": "/ueber-uns/blog/anlegen-mit-erfolg",
  "/der-weg-zur-persoenlichen-anlagestrategie/": "/ueber-uns/blog/persoenliche-anlagestrategie",
  "/updates-bei-cashare/": "/ueber-uns/blog/meine-vertraege-update",
  "/systemupdate/": "/ueber-uns/blog/systemupdate-2011",
  "/iff-award-2011/": "/ueber-uns/blog/iff-award-2011",
  "/jahresabrechnung-2010/": "/ueber-uns/blog/jahresabrechnung-2010",
  "/chf-500-00-fuer-jeder-rappen-zaehlt/": "/ueber-uns/blog/jeder-rappen-zaehlt",
  "/ausweitung-der-bonitaetspruefung/": "/ueber-uns/blog/ausweitung-bonitaetspruefung",
  "/bericht-im-eco-auf-sf1/": "/ueber-uns/blog/bericht-eco-sf1",
  "/cashare-im-neuen-look/": "/ueber-uns/blog/cashare-neuer-look",
  // Additional legacy blog posts
  "/verbesserte-zahlungshistory/": "/ueber-uns/blog/verbesserte-zahlungshistory",
  "/neues-zahlungssystem-mit-esr/": "/ueber-uns/blog/neues-zahlungssystem-esr",
  "/teilnahme-am-banking-it-innovation-awards-2013/": "/ueber-uns/blog/banking-it-innovation-awards-2013",
  "/dokumente-fuer-steuern-2013/": "/ueber-uns/blog/dokumente-steuern-2013",
  "/wettbewerb-cashare-bezahlt-ihre-rechnung/": "/ueber-uns/blog/wettbewerb-rechnung",
  "/weiterer-datenlieferant-2/": "/ueber-uns/blog/weiterer-datenlieferant",
  "/rollout-termin-fuer-neues-system-steht-2/": "/ueber-uns/blog/rollout-neues-system",
  "/neuer-auftritt-von-cashare/": "/ueber-uns/blog/neuer-auftritt-cashare",
  "/highlights-1-halbjahr-2015/": "/ueber-uns/blog/highlights-h1-2015",
  "/neue-produkte-und-neues-kleid/": "/ueber-uns/blog/neue-produkte-neues-kleid",
  "/cashare-erweitert-rating-system/": "/ueber-uns/blog/cashare-rating-system",
  "/cashare-wird-teil-des-deutsche-boerse-venture-network/": "/ueber-uns/blog/deutsche-boerse-venture-network",
  "/cashare-durchbricht-schallmauer-im-crowdlending/": "/ueber-uns/blog/schallmauer-crowdlending",
  "/noch-mehr-sicherheiten-und-besserer-ueberblick/": "/ueber-uns/blog/mehr-sicherheiten-ueberblick",
  "/mehr-kredit-fuer-ausbildung/": "/ueber-uns/blog/mehr-kredit-ausbildung",
  "/schweizer-rekord-mit-ueber-chf-200-mio-verarbeiteter-kreditantraege/": "/ueber-uns/blog/schweizer-rekord-200-mio",
  "/cashare-im-dokumentarfilm-fintech-made-in-switzerland/": "/ueber-uns/blog/dokumentarfilm-fintech-switzerland",
  "/ausbildungsdarlehen/": "/ueber-uns/blog/ausbildungsdarlehen",
  "/bericht-im-10vor10-ueber-crowdlending/": "/ueber-uns/blog/10vor10-crowdlending",
  "/cleantech-meets-fintech-finanzierung-von-nachhaltiger-energie/": "/ueber-uns/blog/cleantech-fintech-energie",
  "/cashare-wuenscht-ein-frohes-neues-jahr/": "/ueber-uns/blog/frohes-neues-jahr-2017",
  "/crowdlending-pionier-erweitert-advisory-board-und-schliesst-kapitalrunde-ab/": "/ueber-uns/blog/advisory-board-kapitalrunde-2017",
  "/ueber-1500-kredite-finanziert-und-ein-neues-kleid/": "/ueber-uns/blog/1500-kredite-neues-kleid",
  "/alles-neu-macht-der-mai/": "/ueber-uns/blog/alles-neu-mai",
  "/das-neue-cashare-dashboard/": "/ueber-uns/blog/neues-dashboard",
  "/das-kaffeehaus-in-st-gallen-auf-expansionskurs/": "/ueber-uns/blog/kaffeehaus-st-gallen",
  "/eine-weitere-huerde-ist-gefallen/": "/ueber-uns/blog/weitere-huerde-gefallen",
  "/neuer-rekord-bei-schweizer-crowdlending-pionier-cashare/": "/ueber-uns/blog/neuer-rekord-2017",
  "/siam-thai-entscheidet-sich-fuer-den-cleveren-kredit/": "/ueber-uns/blog/siam-thai-kredit",
};

// Combined redirect map
export const allRedirects: Record<string, string> = {
  ...pageRedirects,
  ...blogRedirects,
};

/**
 * Get redirect target for a given path
 * @param path - The incoming URL path
 * @returns The target URL or null if no redirect needed
 */
export function getRedirectTarget(path: string): string | null {
  // Normalize path for comparison (remove trailing slash except for root)
  const normalizedPath = path === "/" ? "/" : path.replace(/\/$/, "");

  // Check exact match first
  if (allRedirects[path]) {
    const target = allRedirects[path];
    // Avoid redirect loops - don't redirect if target is same as current path
    if (target === normalizedPath) {
      return null;
    }
    return target;
  }

  // Check with trailing slash added (for WordPress-style URLs)
  const pathWithSlash = path.endsWith("/") ? path : `${path}/`;
  if (allRedirects[pathWithSlash]) {
    const target = allRedirects[pathWithSlash];
    // Avoid redirect loops - don't redirect if target is same as current path
    if (target === normalizedPath) {
      return null;
    }
    return target;
  }

  return null;
}
