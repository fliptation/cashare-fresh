import { Head } from "$fresh/runtime.ts";

// Migration status types
type Status = "done" | "in-progress" | "todo" | "not-needed";

interface MigrationItem {
  name: string;
  oldUrl?: string;
  newUrl?: string;
  status: Status;
  notes?: string;
}

interface MigrationSection {
  title: string;
  items: MigrationItem[];
}

const migrationData: MigrationSection[] = [
  {
    title: "Hauptseiten",
    items: [
      { name: "Homepage", oldUrl: "/", newUrl: "/", status: "done" },
      { name: "Kredit beantragen", oldUrl: "/kredit-beantragen/", newUrl: "/kredit-beantragen", status: "done" },
      { name: "Privatkredit", oldUrl: "/kredit-beantragen/privatkredit/", newUrl: "/kredit-beantragen/privatkredit", status: "done" },
      { name: "KMU Kredit", oldUrl: "/kredit-beantragen/kmu-kredit/", newUrl: "/kredit-beantragen/kmu-kredit", status: "done" },
      { name: "Hypothek", oldUrl: "/hypothek/", newUrl: "/kredit-beantragen/hypotheken", status: "done" },
      { name: "Investieren", oldUrl: "/investieren/", newUrl: "/investieren", status: "done" },
      { name: "Privatinvestoren", oldUrl: "/investieren/privatinvestoren/", newUrl: "/investieren/privatinvestoren", status: "done" },
      { name: "Institutionelle", oldUrl: "/investieren/institutionelle/", newUrl: "/investieren/institutionelle", status: "done" },
    ],
  },
  {
    title: "Über uns",
    items: [
      { name: "Über uns", oldUrl: "/ueber-uns/", newUrl: "/ueber-uns", status: "done" },
      { name: "Crowdlending", oldUrl: "/ueber-uns/crowdlending/", newUrl: "/ueber-uns/crowdlending", status: "done" },
      { name: "Statistik", oldUrl: "/ueber-uns/statistik/", newUrl: "/ueber-uns/statistik", status: "done" },
      { name: "Jobs", oldUrl: "/ueber-uns/jobs/", newUrl: "/ueber-uns/jobs", status: "done" },
      { name: "Partner", oldUrl: "/ueber-uns/partner/", newUrl: "/ueber-uns/partner", status: "done" },
      { name: "Presse", oldUrl: "/ueber-uns/presse/", newUrl: "/ueber-uns/presse", status: "done" },
      { name: "Blog", oldUrl: "/category/blog/", newUrl: "/ueber-uns/blog", status: "done" },
    ],
  },
  {
    title: "Rechtliches",
    items: [
      { name: "AGB", oldUrl: "/agb/", newUrl: "/agb", status: "done" },
      { name: "Datenschutz", oldUrl: "/datenschutzerklaerung/", newUrl: "/datenschutzerklaerung", status: "done" },
      { name: "Impressum", oldUrl: "/impressum/", newUrl: "/impressum", status: "done" },
      { name: "Cookies", oldUrl: "/cookies/", newUrl: "/cookies", status: "todo" },
    ],
  },
  {
    title: "Englisch (/en)",
    items: [
      { name: "Homepage EN", oldUrl: "/en/", newUrl: "/en", status: "done" },
      { name: "Apply for Credit", oldUrl: "/en/apply-for-credit/", newUrl: "/en/apply-for-credit", status: "done" },
      { name: "Invest", oldUrl: "/en/invest/", newUrl: "/en/invest", status: "done" },
      { name: "About", oldUrl: "/en/about/", newUrl: "/en/about", status: "done" },
    ],
  },
  {
    title: "Französisch (/fr)",
    items: [
      { name: "Homepage FR", oldUrl: "/fr/", newUrl: "/fr", status: "done" },
      { name: "Demander un crédit", oldUrl: "/fr/demander-un-credit/", newUrl: "/fr/demander-un-credit", status: "done" },
      { name: "Investir", oldUrl: "/fr/investir/", newUrl: "/fr/investir", status: "done" },
      { name: "À propos", oldUrl: "/fr/a-propos/", newUrl: "/fr/a-propos", status: "done" },
    ],
  },
  {
    title: "Funktionen",
    items: [
      { name: "Kreditrechner", status: "done", notes: "Island component" },
      { name: "Newsletter Formular", status: "done", notes: "In Footer" },
      { name: "Kontaktformular", status: "not-needed", notes: "Extern: support.cashare.ch" },
      { name: "Login", status: "not-needed", notes: "Extern: app.cashare.ch" },
    ],
  },
];

// Blog articles data - wpSlug is the actual WordPress URL slug
const blogArticles = [
  { slug: "restschuldversicherung-schweiz", wpSlug: "restschuld-ratenversicherung-dein-schutz-vor-der-schuldenfalle-in-der-schweiz", title: "Restschuld-/Ratenversicherung: Dein Schutz vor der Schuldenfalle", image: "/images/blog/Restschuld-_Ratenversicherung-Dein-Schutzschild-vor-der-Schuldenfalle.png", date: "2025-10-17", category: "News", status: "done" as Status },
  { slug: "flexiblere-zinszahlungen-endfaellige-darlehen", wpSlug: "flexiblere-zinszahlungen-fuer-endfaellige-darlehen", title: "Flexiblere Zinszahlungen für endfällige Darlehen", image: "/images/blog/imgonline-com-ua-TextureSeamless-siEsPd2uBQEE-towfiqu-barbhuiya-joqWSI9u_XM-unsplash-2-scaled-1.jpg", date: "2024-12-06", category: "News", status: "done" as Status },
  { slug: "crowdfunding-wachstum-schweiz", wpSlug: "crowdfunding-wachstum-schweiz", title: "Begrenztes Wachstum des traditionellen Kredits fördert Crowdfunding", image: "/images/blog/blog-crowdfunding.png", date: "2024-09-04", category: "News", status: "done" as Status },
  { slug: "zinsentwicklung-2024", wpSlug: "zinsentwicklung-2024-zins-quo-vadis-2", title: "Zinsentwicklung 2024 – Zins quo vadis?", image: "/images/blog/2.png", date: "2024-08-12", category: "Blog", status: "done" as Status },
  { slug: "crowdfunding-monitor-2024", wpSlug: "crowdfunding-monitor-2024", title: "Der Crowdfunding Monitor 2024", image: "/images/blog/Titelbild-Crowdfunding-Monitor-Artikel-Blog.png", date: "2024-05-17", category: "News", status: "done" as Status },
  { slug: "digitalisierung-finanzmaerkte", wpSlug: "digitalisierung-der-finanzmaerkte-ihre-chancen-und-risiken", title: "Digitalisierung der Finanzmärkte", image: "/images/blog/Digitalisierung_Blog.png", date: "2024-04-24", category: "Blog", status: "done" as Status },
  { slug: "abrakadabra-eigene-bank", wpSlug: "abrakadabra-so-wirst-du-zu-deiner-eigenen-bank", title: "Abrakadabra, so wirst du zu deiner eigenen Bank!", image: "/images/blog/abrakadabra-bank.jpg", date: "2023-09-26", category: "Blog", status: "done" as Status },
  { slug: "banken-millionen-kunden-draufzahlen", wpSlug: "unrecht-banken-scheffeln-millionen-aber-kunden-muessen-draufzahlen", title: "Banken scheffeln Millionen, Kunden zahlen drauf!", image: "/images/blog/banken-millionen.jpg", date: "2023-09-18", category: "Blog", status: "done" as Status },
  { slug: "crowdfunding-rueckgang-hohem-niveau", wpSlug: "crowdfunding-rueckgang-hohem-niveau", title: "Crowdfunding: Ein Rückgang auf hohem Niveau", image: "/images/blog/crowdfunding-monitor-2023.jpg", date: "2023-06-02", category: "News", status: "done" as Status },
  { slug: "effizienz-kreditverlaengerungen", wpSlug: "mehr-effizienz-und-nutzererlebnis-bei-kreditverlaengerungen", title: "Mehr Effizienz bei Kreditverlängerungen", image: "/images/blog/kreditverlaengerungen.jpg", date: "2023-08-22", category: "News", status: "done" as Status },
  { slug: "chatbot-cashy-online", wpSlug: "chatbot-cashy-online", title: "Unser Chatbot Cashy ist online", image: "/images/blog/chatbot-cashy.jpg", date: "2023-06-20", category: "News", status: "done" as Status },
  { slug: "vorsorgeauftrag-patientenverfuegung", wpSlug: "vorsorgeauftrag-patientenverfuegung-und-vollmachten", title: "Vorsorgeauftrag – Patientenverfügung und Vollmachten", image: "/images/blog/vorsorgeauftrag.jpg", date: "2023-08-03", category: "Blog", status: "done" as Status },
  { slug: "partnerschaft-american-institute", wpSlug: "neue-partnerschaft-mit-american-institute-of-applied-sciences", title: "Neue Partnerschaft mit American Institute", image: "/images/blog/american-institute.jpg", date: "2023-03-08", category: "News", status: "done" as Status },
  { slug: "jahresrueckblick-2022", wpSlug: "jahresrueckblick-2022", title: "Jahresrückblick 2022", image: "/images/blog/jahresrueckblick-2022.jpg", date: "2023-01-04", category: "News", status: "done" as Status },
  { slug: "neues-feature-anleger-csv", wpSlug: "neues-feature-fuer-anleger", title: "Neues Feature für Anleger", image: "/images/blog/csv-export.jpg", date: "2023-01-24", category: "News", status: "done" as Status },
  { slug: "lastschriftverfahren-lsv", wpSlug: "lastschriftverfahren", title: "Wir machen es Ihnen noch leichter mit LSV", image: "/images/blog/lsv.jpg", date: "2022-11-03", category: "News", status: "done" as Status },
  { slug: "inflation-schweiz", wpSlug: "inflation-in-der-schweiz", title: "Inflation in der Schweiz", image: "/images/blog/inflation.jpg", date: "2022-06-14", category: "Blog", status: "done" as Status },
  { slug: "crowdfunding-erfolgsgeschichte-2022", wpSlug: "crowdfunding-die-erfolgsgeschichte-geht-weiter", title: "Crowdfunding: die Erfolgsgeschichte geht weiter", image: "/images/blog/crowdfunding-monitor-2022.jpg", date: "2022-06-09", category: "News", status: "done" as Status },
  { slug: "interview-sophie-hundertmark-chatbots", wpSlug: "interview-mit-sophie-hundertmark-zu-chatbots", title: "Interview mit Sophie Hundertmark zu Chatbots", image: "/images/blog/sophie-chatbots.jpg", date: "2022-01-27", category: "Blog", status: "done" as Status },
  { slug: "nachhaltigkeit-successstory", wpSlug: "5067-2", title: "So geht Nachhaltigkeit: Eine Successstory!", image: "/images/blog/Mika_Stappen_Besuch_Blog.jpg", date: "2023-01-12", category: "Blog", status: "done" as Status },
  { slug: "erweiterung-advisory-board-tina-stoermer", wpSlug: "erweiterung-unseres-advisory-boards", title: "Erweiterung unseres Advisory Boards!", image: "/images/blog/Tina-Stormer-Kopie.jpg", date: "2022-10-11", category: "News", status: "done" as Status },
  { slug: "crowdlending-anleihe-erfolg", wpSlug: "loan", title: "Crowdlending: Eine Cashare Anleihe, ein Erfolg!", image: "/images/blog/Blog_Success_Anleihe.jpg", date: "2022-12-13", category: "News", status: "done" as Status },
  { slug: "sophie-hundertmark-advisory-board", wpSlug: "sophie-hundertmark-erweitert-unser-advisory-board", title: "Sophie Hundertmark erweitert unser Advisory Board", image: "/images/blog/Sophie_Blog_Titel_Advisory.png", date: "2022-01-20", category: "News", status: "done" as Status },
  { slug: "jahresrueckblick-2021", wpSlug: "cashare-jahresrueckblick-2021", title: "Cashare Jahresrückblick 2021", image: "/images/blog/Rückblick-2021.jpg", date: "2021-12-29", category: "Blog", status: "done" as Status },
  { slug: "crowdinvesting-gemeinsam-stark", wpSlug: "crowdinvesting-gemeinsam-sind-wir-stark", title: "Crowdinvesting - Gemeinsam sind wir stark!", image: "/images/blog/Blog_Crowdinvesting.jpg", date: "2021-11-15", category: "News", status: "done" as Status },
  { slug: "wandeldarlehen-cashare", wpSlug: "wandeldarlehen-bei-cashare", title: "Wandeldarlehen bei Cashare", image: "/images/blog/Titel-Kinatsic.png", date: "2021-07-17", category: "News", status: "done" as Status },
  { slug: "crowdlending-alternative-bankkredit", wpSlug: "crowdlending-bietet-eine-gute-alternative-zum-herkoemmlichen-bankkredit", title: "Crowdlending bietet eine gute Alternative zum Bankkredit!", image: "/images/blog/Blog_Crowdlending-Alternative_Titel.png", date: "2021-06-25", category: "Blog", status: "done" as Status },
  { slug: "wer-ist-die-crowd", wpSlug: "wer-ist-die-crowd", title: "Wer ist die Crowd?", image: "/images/blog/Titel_Anlegerblog.jpg", date: "2021-06-04", category: "Blog", status: "done" as Status },
  { slug: "pain-gain-coronakrise", wpSlug: "von-pain-zu-gain-erfolgreich-aus-der-coronakrise", title: "Von Pain zu Gain - Erfolgreich aus der Coronakrise", image: "/images/blog/Blog_Postcorona.jpg", date: "2021-05-19", category: "Blog", status: "done" as Status },
  { slug: "buergschaft-als-sicherheit", wpSlug: "eine-buergschaft-als-sicherheit", title: "Eine Bürgschaft als Sicherheit", image: "/images/blog/Titel_Burgschaft.jpg", date: "2021-04-30", category: "Blog", status: "done" as Status },
  { slug: "privatkredit-vs-autoleasing", wpSlug: "privatkredit-vs-autoleasing-2", title: "Privatkredit vs. Autoleasing", image: "/images/blog/Leasing_Titel_Blog.jpg", date: "2021-04-07", category: "Blog", status: "done" as Status },
  { slug: "5-tipps-kreditaufnahme", wpSlug: "5-tipps-fuer-die-kreditaufnahme", title: "5 Tipps für die Kreditaufnahme", image: "/images/blog/5-Tipps_Titel_Blog-1.jpg", date: "2021-03-30", category: "Blog", status: "done" as Status },
  { slug: "anleihen-als-anlage", wpSlug: "anleihen-als-anlage", title: "Anleihen als Anlage?", image: "/images/blog/Anleihe_Blog.jpg", date: "2021-03-10", category: "Blog", status: "done" as Status },
  { slug: "kredit-ja-oder-nein", wpSlug: "kredit-ja-oder-nein", title: "Kredit ja oder nein?", image: "/images/blog/Kredit-janein_Blog_Titel.jpg", date: "2021-03-02", category: "Blog", status: "done" as Status },
  { slug: "crowdlending-survey-2020", wpSlug: "crowdlending-survey-2020", title: "Crowdlending Survey 2020", image: "/images/blog/2021-02-23_Blog_Crowdlending-Survey_2020.jpg", date: "2021-02-25", category: "News", status: "done" as Status },
  { slug: "herr-friedli-darlehen-cashare", wpSlug: "so-profitiert-herr-friedli-durch-ein-darlehen-von-cashare", title: "So profitiert Herr Friedli durch ein Darlehen von Cashare", image: "/images/blog/Fridli_Titelbild.jpg", date: "2021-02-17", category: "Blog", status: "done" as Status },
  { slug: "top-5-cashare-blogs-2020", wpSlug: "die-top-5-cashare-blogs", title: "Die Top 5 Cashare Blogs", image: "/images/blog/Titel_Blog_Top-5.jpg", date: "2021-02-01", category: "Blog", status: "done" as Status },
  { slug: "michelin-stern-crowd", wpSlug: "michelin-stern-dank-der-crowd", title: "Michelin Stern dank der Crowd", image: "/images/blog/Vegan_Blog_1.jpg", date: "2021-01-25", category: "Blog", status: "done" as Status },
  { slug: "mehrfamilienhaeuser-investieren", wpSlug: "als-privatperson-in-mehrfamilienhaeuser-investieren", title: "Als Privatperson in Mehrfamilienhäuser investieren?", image: "/images/blog/Mehrfamilienhaus_Blog.jpg", date: "2021-01-13", category: "Blog", status: "done" as Status },
  { slug: "rueckblick-2020", wpSlug: "rueckblick-2020", title: "Rückblick 2020", image: "/images/blog/2020_Blog.jpg", date: "2020-12-31", category: "Blog", status: "done" as Status },
  { slug: "club-deals", wpSlug: "club-deals-was-ist-das", title: "Club Deals! Was ist das?", image: "/images/blog/Clubdeal.jpg", date: "2020-12-15", category: "Blog", status: "done" as Status },
  { slug: "mika-stappen-vision-cashare", wpSlug: "wie-mika-stappen-seine-vision-mit-cashare-umsetzen-konnte", title: "Wie Mika Stappen seine Vision mit Cashare umsetzen konnte", image: "/images/blog/Mika_Blog_Titel-1.jpg", date: "2020-12-01", category: "Blog", status: "done" as Status },
  { slug: "cashare-anleihe-geburtstag", wpSlug: "unsere-4-cashare-anleihe-feiert-geburtstag", title: "Unsere 4% Cashare Anleihe feiert Geburtstag", image: "/images/blog/Anleihe_Stand.jpg", date: "2020-11-25", category: "Blog", status: "done" as Status },
  { slug: "qual-der-wahl", wpSlug: "die-qual-der-wahl", title: "Die Qual der Wahl", image: "/images/blog/Qual-der-Wahl.jpg", date: "2020-11-13", category: "Blog", status: "done" as Status },
  { slug: "crazy-country-usa-alfred-mettler", wpSlug: "crazy-country-usa-und-was-unser-beirat-alfred-mettler-damit-zu-schaffen-hat", title: "Crazy Country USA und unser Beirat Alfred Mettler", image: "/images/blog/mettler-buch_blog.jpg", date: "2020-10-23", category: "Blog", status: "done" as Status },
  { slug: "harry-schnabel-investition-cashare", wpSlug: "so-profitiert-harry-schnabel-durch-eine-investition-ueber-cashare", title: "So profitiert Harry Schnabel durch eine Investition über Cashare", image: "/images/blog/Titel_Harry-Schnabel_Kampagne.jpg", date: "2020-10-14", category: "Blog", status: "done" as Status },
  { slug: "anleger-1x1", wpSlug: "das-kleine-anleger-1x1", title: "Das kleine Anleger 1x1", image: "/images/blog/Titel_1x1_Blog.jpg", date: "2020-10-05", category: "Blog", status: "done" as Status },
  { slug: "crowdlending-kontoersatz", wpSlug: "crowdlending-als-kontoersatz", title: "Crowdlending als Kontoersatz?", image: "/images/blog/Crowdlending_kontoersatz.jpg", date: "2020-08-03", category: "Blog", status: "done" as Status },
  { slug: "grundpfandbesicherte-kredite", wpSlug: "investitionen-in-grundpfandbesicherte-kredite", title: "Investitionen in grundpfandbesicherte Kredite", image: "/images/blog/408443-blank-754.png", date: "2020-07-23", category: "Blog", status: "done" as Status },
  { slug: "sekundaermarkt-marktplatz", wpSlug: "der-cashare-sekundaermarkt-als-lebendiger-marktplatz", title: "Der Cashare-Sekundärmarkt als lebendiger Marktplatz", image: "/images/blog/Titel_Blog_Sekundarmarkt.png", date: "2020-04-23", category: "Blog", status: "done" as Status },
  { slug: "digitalisierung-identifikation", wpSlug: "neu-digitalisierung-der-persoenlichen-identifiktation", title: "Neu: Digitalisierung der persönlichen Identifikation", image: "/images/blog/Onboarding_Titel.jpg", date: "2020-04-15", category: "News", status: "done" as Status },
  { slug: "unterstuetzung-bund-corona", wpSlug: "unterstuetzung-durch-den-bund-bedeutet", title: "Unterstützung durch den Bund bedeutet...", image: "/images/blog/Titel_Blog_Bundmassnahmen.jpg", date: "2020-04-06", category: "Blog", status: "done" as Status },
  { slug: "herz-fuer-kmu", wpSlug: "ein-herz-fuer-kmu", title: "Ein Herz für KMU!", image: "/images/blog/Blog_Ein-Herz-fur-KMU.jpg", date: "2020-03-30", category: "News", status: "done" as Status },
  { slug: "rechtsstillstand-betreibungen", wpSlug: "rechtsstillstand-fuer-betreibungen-was-bedeutet-das", title: "Rechtsstillstand für Betreibungen! Was bedeutet das?", image: "/images/blog/Titel_Betreibungen.jpg", date: "2020-03-25", category: "Blog", status: "done" as Status },
  { slug: "homeoffice-corona", wpSlug: "cashare-stellt-auf-homeoffice-um", title: "Cashare stellt auf Homeoffice um", image: "/images/blog/Titel_Home-office_Corona.jpg", date: "2020-03-16", category: "News", status: "done" as Status },
  { slug: "cashare-benedict-naechste-runde", wpSlug: "cashare-und-benedict-gehen-in-die-naechste-runde", title: "Cashare und Benedict gehen in die nächste Runde!", image: "/images/blog/Benedict_next-round.jpg", date: "2020-02-05", category: "News", status: "done" as Status },
  { slug: "cashare-12-geburtstag", wpSlug: "cashare-feiert-seinen-12ten-geburtstag-als-crowdlending-plattform", title: "Cashare feiert 12ten Geburtstag und sagt Danke!", image: "/images/blog/Blog_Titel_12_Geburtstag.jpg", date: "2020-01-23", category: "Blog", status: "done" as Status },
  { slug: "wie-cashare-flotte-erweitert", wpSlug: "wie-cashare-eine-flotte-erweitert", title: "Wie Cashare eine Flotte erweitert", image: "/images/blog/Blog_DS-Logistik_Titel.jpg", date: "2020-01-16", category: "Blog", status: "done" as Status },
  { slug: "jahresrueckblick-2019", wpSlug: "jahresrueckblick-cashare-2019", title: "Jahresrückblick Cashare 2019", image: "/images/blog/Feuerwerk_600x600@2x.jpg", date: "2019-12-31", category: "Blog", status: "done" as Status },
  { slug: "cashare-sekundaermarkt-launch", wpSlug: "kredite-verkaufen-sie-ab-jetzt-neu-auf-unserem-cashare-sekundaermarkt", title: "Kredite verkaufen auf unserem Cashare-Sekundärmarkt!", image: "/images/blog/Sekundarmarkt.-Titel.png", date: "2019-12-28", category: "News", status: "done" as Status },
  { slug: "rueckblick-q3-2019", wpSlug: "rueckblick-auf-das-3-quartal-2019", title: "Rückblick auf das 3. Quartal 2019", image: "/images/blog/Q3_Blog_Titel.jpg", date: "2019-12-04", category: "Blog", status: "done" as Status },
  { slug: "mci-real-estate-erfolgsgeschichte", wpSlug: "mci-real-estate-ag-eine-erfolgsgeschichte", title: "MCI Real Estate AG - Eine Erfolgsgeschichte", image: "/images/blog/Aussenansicht-mit-Balkon_Blog.jpg", date: "2019-11-25", category: "Blog", status: "done" as Status },
  { slug: "fintech-roundtable-efd", wpSlug: "rueckblick-auf-den-4-fintech-roundtable-des-efd-aus-sicht-cashare", title: "Rückblick auf den 4. Fintech-Roundtable des EFD", image: "/images/blog/Bundeshaus_Blog.jpg", date: "2019-11-14", category: "News", status: "done" as Status },
  { slug: "zuger-messe-2019", wpSlug: "zuger-messe-2019-ein-rueckblick", title: "Zuger Messe 2019 - Ein Rückblick!", image: "/images/blog/Blog_Messe.jpg", date: "2019-10-30", category: "Blog", status: "done" as Status },
  { slug: "starke-partner-cashare-benedict", wpSlug: "starke-partner-cashare-und-benedict", title: "Starke Partner: Cashare und Benedict", image: "/images/blog/Partnerschaft_Benedict_Blog-5.jpg", date: "2019-10-17", category: "Blog", status: "done" as Status },
  { slug: "gefahren-phishing", wpSlug: "die-gefahren-von-phishing-scams", title: "Die Gefahren von Phishing Scams", image: "/images/blog/Phishing_Blog.jpg", date: "2019-09-03", category: "Blog", status: "done" as Status },
  { slug: "zinsen-in-geiselhaft", wpSlug: "zinsen-in-geiselhaft", title: "Zinsen in Geiselhaft - Crowdlending bringt Ihnen noch gute Zinsen", image: "/images/blog/Blog_Geiselhaft.jpg", date: "2019-08-26", category: "Blog", status: "done" as Status },
  { slug: "immobilien-crowdlending-team", wpSlug: "immobilien-und-crowdlending-sind-ein-gutes-team", title: "Immobilien und Crowdlending sind ein gutes Team!", image: "/images/blog/1Fb.jpg", date: "2019-08-14", category: "Blog", status: "done" as Status },
  { slug: "anlegen-mit-erfolg", wpSlug: "anlegen-mit-erfolg", title: "Anlegen mit Erfolg", image: "/images/blog/Anlegen_Erfolg_Blog_Titelbild.jpg", date: "2019-08-05", category: "Blog", status: "done" as Status },
  { slug: "persoenliche-anlagestrategie", wpSlug: "der-weg-zur-persoenlichen-anlagestrategie", title: "Der Weg zur persönlichen Anlagestrategie", image: "/images/blog/Anlegen_Erfolg_Blog_Titelbild.jpg", date: "2019-06-19", category: "Blog", status: "done" as Status },
  { slug: "meine-vertraege-update", wpSlug: "updates-bei-cashare", title: "Laufende Verträge neu: Meine Verträge", image: "/images/blog/Blog_Titel_12_Geburtstag.jpg", date: "2011-07-07", category: "Blog", status: "done" as Status },
  { slug: "systemupdate-2011", wpSlug: "systemupdate", title: "Systemupdate", image: "/images/blog/Blog_Titel_12_Geburtstag.jpg", date: "2011-06-14", category: "Blog", status: "done" as Status },
  { slug: "iff-award-2011", wpSlug: "iff-award-2011", title: "IFF-Award 2011", image: "/images/blog/Blog_Titel_12_Geburtstag.jpg", date: "2011-05-13", category: "News", status: "done" as Status },
  { slug: "jahresabrechnung-2010", wpSlug: "jahresabrechnung-2010", title: "Jahresabrechnung 2010", image: "/images/blog/Blog_Titel_12_Geburtstag.jpg", date: "2011-02-07", category: "Blog", status: "done" as Status },
  { slug: "jeder-rappen-zaehlt", wpSlug: "chf-500-00-fuer-jeder-rappen-zaehlt", title: "CHF 500.00 für Jeder Rappen zählt!", image: "/images/blog/Blog_Titel_12_Geburtstag.jpg", date: "2010-12-15", category: "News", status: "done" as Status },
  { slug: "ausweitung-bonitaetspruefung", wpSlug: "ausweitung-der-bonitaetspruefung", title: "Ausweitung der Bonitätsprüfung", image: "/images/blog/Blog_Titel_12_Geburtstag.jpg", date: "2010-07-23", category: "Blog", status: "done" as Status },
  { slug: "bericht-eco-sf1", wpSlug: "bericht-im-eco-auf-sf1", title: "Bericht im ECO auf SF1", image: "/images/blog/Blog_Titel_12_Geburtstag.jpg", date: "2010-07-01", category: "News", status: "done" as Status },
  { slug: "cashare-neuer-look", wpSlug: "cashare-im-neuen-look", title: "Cashare im neuen Look", image: "/images/blog/Blog_Titel_12_Geburtstag.jpg", date: "2010-03-13", category: "Blog", status: "done" as Status },
];

const statusConfig: Record<Status, { label: string; class: string }> = {
  done: { label: "Fertig", class: "migration__status--done" },
  "in-progress": { label: "In Arbeit", class: "migration__status--progress" },
  todo: { label: "Offen", class: "migration__status--todo" },
  "not-needed": { label: "Nicht nötig", class: "migration__status--skip" },
};

export default function MigrationPage() {
  // Calculate stats
  const allItems = migrationData.flatMap((s) => s.items);
  const stats = {
    total: allItems.length,
    done: allItems.filter((i) => i.status === "done").length,
    inProgress: allItems.filter((i) => i.status === "in-progress").length,
    todo: allItems.filter((i) => i.status === "todo").length,
    notNeeded: allItems.filter((i) => i.status === "not-needed").length,
  };
  const progress = Math.round((stats.done / (stats.total - stats.notNeeded)) * 100);

  return (
    <>
      <Head>
        <title>Migration Status | Cashare</title>
        <link rel="stylesheet" href="/styles/pages/migration.css" />
      </Head>

      <div class="migration">
        <div class="migration__container">
          <header class="migration__header">
            <h1 class="migration__title">Migration Status</h1>
            <p class="migration__subtitle">
              WordPress zu Deno Fresh Migration
            </p>
          </header>

          {/* Progress Overview */}
          <div class="migration__overview">
            <div class="migration__progress-bar">
              <div
                class="migration__progress-fill"
                style={`width: ${progress}%`}
              />
            </div>
            <div class="migration__stats">
              <div class="migration__stat">
                <span class="migration__stat-value">{progress}%</span>
                <span class="migration__stat-label">Fortschritt</span>
              </div>
              <div class="migration__stat migration__stat--done">
                <span class="migration__stat-value">{stats.done}</span>
                <span class="migration__stat-label">Fertig</span>
              </div>
              <div class="migration__stat migration__stat--progress">
                <span class="migration__stat-value">{stats.inProgress}</span>
                <span class="migration__stat-label">In Arbeit</span>
              </div>
              <div class="migration__stat migration__stat--todo">
                <span class="migration__stat-value">{stats.todo}</span>
                <span class="migration__stat-label">Offen</span>
              </div>
              <div class="migration__stat migration__stat--skip">
                <span class="migration__stat-value">{stats.notNeeded}</span>
                <span class="migration__stat-label">Nicht nötig</span>
              </div>
            </div>
          </div>

          {/* Migration Sections */}
          {migrationData.map((section) => (
            <section key={section.title} class="migration__section">
              <h2 class="migration__section-title">{section.title}</h2>
              <div class="migration__table">
                <div class="migration__table-header">
                  <span>Seite</span>
                  <span>Alt (WordPress)</span>
                  <span>Neu (Fresh)</span>
                  <span>Status</span>
                </div>
                {section.items.map((item) => (
                  <div key={item.name} class="migration__table-row">
                    <span class="migration__item-name">
                      {item.name}
                      {item.notes && (
                        <span class="migration__item-notes">{item.notes}</span>
                      )}
                    </span>
                    <span class="migration__item-url">
                      {item.oldUrl ? (
                        <a
                          href={`https://www.cashare.ch${item.oldUrl}`}
                          target="_blank"
                          rel="noopener"
                        >
                          {item.oldUrl}
                        </a>
                      ) : (
                        "-"
                      )}
                    </span>
                    <span class="migration__item-url">
                      {item.newUrl ? (
                        <a href={item.newUrl}>{item.newUrl}</a>
                      ) : (
                        "-"
                      )}
                    </span>
                    <span
                      class={`migration__status ${statusConfig[item.status].class}`}
                    >
                      {statusConfig[item.status].label}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          ))}

          {/* Blog Articles Section */}
          <section class="migration__section">
            <h2 class="migration__section-title">
              Blog Artikel ({blogArticles.length} Artikel)
            </h2>
            <div class="migration__blog-grid">
              {blogArticles.map((article) => (
                <div key={article.slug} class="migration__blog-item">
                  <div class="migration__blog-image">
                    <img
                      src={article.image}
                      alt={article.title}
                      loading="lazy"
                      onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                    />
                  </div>
                  <div class="migration__blog-content">
                    <h3 class="migration__blog-title">{article.title}</h3>
                    <div class="migration__blog-meta">
                      <span class="migration__blog-date">{article.date}</span>
                      <span class={`migration__blog-category migration__blog-category--${article.category.toLowerCase()}`}>
                        {article.category}
                      </span>
                    </div>
                    <div class="migration__blog-links">
                      <a
                        href={`https://www.cashare.ch/${article.wpSlug}/`}
                        target="_blank"
                        rel="noopener"
                        class="migration__blog-link"
                      >
                        WordPress
                      </a>
                      <a
                        href={`/ueber-uns/blog/${article.slug}`}
                        class="migration__blog-link"
                      >
                        Fresh
                      </a>
                      <span class={`migration__status ${statusConfig[article.status].class}`}>
                        {statusConfig[article.status].label}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Links */}
          <footer class="migration__footer">
            <a href="/styleguide" class="migration__link">
              Styleguide
            </a>
            <a href="/" class="migration__link">
              Homepage
            </a>
          </footer>
        </div>
      </div>
    </>
  );
}
