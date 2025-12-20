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

// Blog articles data
const blogArticles = [
  { slug: "restschuldversicherung-schweiz", title: "Restschuld-/Ratenversicherung: Dein Schutz vor der Schuldenfalle", image: "/images/blog/Restschuld-_Ratenversicherung-Dein-Schutzschild-vor-der-Schuldenfalle.png", status: "done" as Status },
  { slug: "flexiblere-zinszahlungen-endfaellige-darlehen", title: "Flexiblere Zinszahlungen für endfällige Darlehen", image: "/images/blog/imgonline-com-ua-TextureSeamless-siEsPd2uBQEE-towfiqu-barbhuiya-joqWSI9u_XM-unsplash-2-scaled-1.jpg", status: "done" as Status },
  { slug: "crowdfunding-wachstum-schweiz", title: "Begrenztes Wachstum des traditionellen Kredits fördert Crowdfunding", image: "/images/blog/blog-crowdfunding.png", status: "done" as Status },
  { slug: "zinsentwicklung-2024", title: "Zinsentwicklung 2024 – Zins quo vadis?", image: "/images/blog/2.png", status: "done" as Status },
  { slug: "crowdfunding-monitor-2024", title: "Der Crowdfunding Monitor 2024", image: "/images/blog/Titelbild-Crowdfunding-Monitor-Artikel-Blog.png", status: "done" as Status },
  { slug: "digitalisierung-finanzmaerkte", title: "Digitalisierung der Finanzmärkte", image: "/images/blog/Digitalisierung_Blog.png", status: "done" as Status },
  { slug: "abrakadabra-eigene-bank", title: "Abrakadabra, so wirst du zu deiner eigenen Bank!", image: "/images/blog/abrakadabra-bank.jpg", status: "done" as Status },
  { slug: "banken-millionen-kunden-draufzahlen", title: "Banken scheffeln Millionen, Kunden zahlen drauf!", image: "/images/blog/banken-millionen.jpg", status: "done" as Status },
  { slug: "crowdfunding-rueckgang-hohem-niveau", title: "Crowdfunding: Ein Rückgang auf hohem Niveau", image: "/images/blog/crowdfunding-monitor-2023.jpg", status: "done" as Status },
  { slug: "effizienz-kreditverlaengerungen", title: "Mehr Effizienz bei Kreditverlängerungen", image: "/images/blog/kreditverlaengerungen.jpg", status: "done" as Status },
  { slug: "chatbot-cashy-online", title: "Unser Chatbot Cashy ist online", image: "/images/blog/chatbot-cashy.jpg", status: "done" as Status },
  { slug: "vorsorgeauftrag-patientenverfuegung", title: "Vorsorgeauftrag – Patientenverfügung und Vollmachten", image: "/images/blog/vorsorgeauftrag.jpg", status: "done" as Status },
  { slug: "partnerschaft-american-institute", title: "Neue Partnerschaft mit American Institute", image: "/images/blog/american-institute.jpg", status: "done" as Status },
  { slug: "jahresrueckblick-2022", title: "Jahresrückblick 2022", image: "/images/blog/jahresrueckblick-2022.jpg", status: "done" as Status },
  { slug: "neues-feature-anleger-csv", title: "Neues Feature für Anleger", image: "/images/blog/csv-export.jpg", status: "done" as Status },
  { slug: "lastschriftverfahren-lsv", title: "Wir machen es Ihnen noch leichter mit LSV", image: "/images/blog/lsv.jpg", status: "done" as Status },
  { slug: "inflation-schweiz", title: "Inflation in der Schweiz", image: "/images/blog/inflation.jpg", status: "done" as Status },
  { slug: "crowdfunding-erfolgsgeschichte-2022", title: "Crowdfunding: die Erfolgsgeschichte geht weiter", image: "/images/blog/crowdfunding-monitor-2022.jpg", status: "done" as Status },
  { slug: "interview-sophie-hundertmark-chatbots", title: "Interview mit Sophie Hundertmark zu Chatbots", image: "/images/blog/sophie-chatbots.jpg", status: "done" as Status },
  { slug: "nachhaltigkeit-successstory", title: "So geht Nachhaltigkeit: Eine Successstory!", image: "/images/blog/Mika_Stappen_Besuch_Blog.jpg", status: "done" as Status },
  { slug: "erweiterung-advisory-board-tina-stoermer", title: "Erweiterung unseres Advisory Boards!", image: "/images/blog/Tina-Stormer-Kopie.jpg", status: "done" as Status },
  { slug: "crowdlending-anleihe-erfolg", title: "Crowdlending: Eine Cashare Anleihe, ein Erfolg!", image: "/images/blog/Blog_Success_Anleihe.jpg", status: "done" as Status },
  { slug: "sophie-hundertmark-advisory-board", title: "Sophie Hundertmark erweitert unser Advisory Board", image: "/images/blog/Sophie_Blog_Titel_Advisory.png", status: "done" as Status },
  { slug: "jahresrueckblick-2021", title: "Cashare Jahresrückblick 2021", image: "/images/blog/Rückblick-2021.jpg", status: "done" as Status },
  { slug: "crowdinvesting-gemeinsam-stark", title: "Crowdinvesting - Gemeinsam sind wir stark!", image: "/images/blog/Blog_Crowdinvesting.jpg", status: "done" as Status },
  { slug: "wandeldarlehen-cashare", title: "Wandeldarlehen bei Cashare", image: "/images/blog/Titel-Kinatsic.png", status: "done" as Status },
  { slug: "crowdlending-alternative-bankkredit", title: "Crowdlending bietet eine gute Alternative zum Bankkredit!", image: "/images/blog/Blog_Crowdlending-Alternative_Titel.png", status: "done" as Status },
  { slug: "wer-ist-die-crowd", title: "Wer ist die Crowd?", image: "/images/blog/Titel_Anlegerblog.jpg", status: "done" as Status },
  { slug: "pain-gain-coronakrise", title: "Von Pain zu Gain - Erfolgreich aus der Coronakrise", image: "/images/blog/Blog_Postcorona.jpg", status: "done" as Status },
  { slug: "buergschaft-als-sicherheit", title: "Eine Bürgschaft als Sicherheit", image: "/images/blog/Titel_Burgschaft.jpg", status: "done" as Status },
  { slug: "privatkredit-vs-autoleasing", title: "Privatkredit vs. Autoleasing", image: "/images/blog/Leasing_Titel_Blog.jpg", status: "done" as Status },
  { slug: "5-tipps-kreditaufnahme", title: "5 Tipps für die Kreditaufnahme", image: "/images/blog/5-Tipps_Titel_Blog-1.jpg", status: "done" as Status },
  { slug: "anleihen-als-anlage", title: "Anleihen als Anlage?", image: "/images/blog/Anleihe_Blog.jpg", status: "done" as Status },
  { slug: "kredit-ja-oder-nein", title: "Kredit ja oder nein?", image: "/images/blog/Kredit-janein_Blog_Titel.jpg", status: "done" as Status },
  { slug: "crowdlending-survey-2020", title: "Crowdlending Survey 2020", image: "/images/blog/2021-02-23_Blog_Crowdlending-Survey_2020.jpg", status: "done" as Status },
  { slug: "herr-friedli-darlehen-cashare", title: "So profitiert Herr Friedli durch ein Darlehen von Cashare", image: "/images/blog/Fridli_Titelbild.jpg", status: "done" as Status },
  { slug: "top-5-cashare-blogs-2020", title: "Die Top 5 Cashare Blogs", image: "/images/blog/Titel_Blog_Top-5.jpg", status: "done" as Status },
  { slug: "michelin-stern-crowd", title: "Michelin Stern dank der Crowd", image: "/images/blog/Vegan_Blog_1.jpg", status: "done" as Status },
  { slug: "mehrfamilienhaeuser-investieren", title: "Als Privatperson in Mehrfamilienhäuser investieren?", image: "/images/blog/Mehrfamilienhaus_Blog.jpg", status: "done" as Status },
  { slug: "rueckblick-2020", title: "Rückblick 2020", image: "/images/blog/2020_Blog.jpg", status: "done" as Status },
  { slug: "club-deals", title: "Club Deals! Was ist das?", image: "/images/blog/Clubdeal.jpg", status: "done" as Status },
  { slug: "mika-stappen-vision-cashare", title: "Wie Mika Stappen seine Vision mit Cashare umsetzen konnte", image: "/images/blog/Mika_Blog_Titel-1.jpg", status: "done" as Status },
  { slug: "cashare-anleihe-geburtstag", title: "Unsere 4% Cashare Anleihe feiert Geburtstag", image: "/images/blog/Anleihe_Stand.jpg", status: "done" as Status },
  { slug: "qual-der-wahl", title: "Die Qual der Wahl", image: "/images/blog/Qual-der-Wahl.jpg", status: "done" as Status },
  { slug: "crazy-country-usa-alfred-mettler", title: "Crazy Country USA und unser Beirat Alfred Mettler", image: "/images/blog/mettler-buch_blog.jpg", status: "done" as Status },
  { slug: "harry-schnabel-investition-cashare", title: "So profitiert Harry Schnabel durch eine Investition über Cashare", image: "/images/blog/Titel_Harry-Schnabel_Kampagne.jpg", status: "done" as Status },
  { slug: "anleger-1x1", title: "Das kleine Anleger 1x1", image: "/images/blog/Titel_1x1_Blog.jpg", status: "done" as Status },
  { slug: "crowdlending-kontoersatz", title: "Crowdlending als Kontoersatz?", image: "/images/blog/Crowdlending_kontoersatz.jpg", status: "done" as Status },
  { slug: "grundpfandbesicherte-kredite", title: "Investitionen in grundpfandbesicherte Kredite", image: "/images/blog/408443-blank-754.png", status: "done" as Status },
  { slug: "sekundaermarkt-marktplatz", title: "Der Cashare-Sekundärmarkt als lebendiger Marktplatz", image: "/images/blog/Titel_Blog_Sekundarmarkt.png", status: "done" as Status },
  { slug: "digitalisierung-identifikation", title: "Neu: Digitalisierung der persönlichen Identifikation", image: "/images/blog/Onboarding_Titel.jpg", status: "done" as Status },
  { slug: "unterstuetzung-bund-corona", title: "Unterstützung durch den Bund bedeutet...", image: "/images/blog/Titel_Blog_Bundmassnahmen.jpg", status: "done" as Status },
  { slug: "herz-fuer-kmu", title: "Ein Herz für KMU!", image: "/images/blog/Blog_Ein-Herz-fur-KMU.jpg", status: "done" as Status },
  { slug: "rechtsstillstand-betreibungen", title: "Rechtsstillstand für Betreibungen! Was bedeutet das?", image: "/images/blog/Titel_Betreibungen.jpg", status: "done" as Status },
  { slug: "homeoffice-corona", title: "Cashare stellt auf Homeoffice um", image: "/images/blog/Titel_Home-office_Corona.jpg", status: "done" as Status },
  { slug: "cashare-benedict-naechste-runde", title: "Cashare und Benedict gehen in die nächste Runde!", image: "/images/blog/Benedict_next-round.jpg", status: "done" as Status },
  { slug: "cashare-12-geburtstag", title: "Cashare feiert 12ten Geburtstag und sagt Danke!", image: "/images/blog/Blog_Titel_12_Geburtstag.jpg", status: "done" as Status },
  { slug: "wie-cashare-flotte-erweitert", title: "Wie Cashare eine Flotte erweitert", image: "/images/blog/Blog_DS-Logistik_Titel.jpg", status: "done" as Status },
  { slug: "jahresrueckblick-2019", title: "Jahresrückblick Cashare 2019", image: "/images/blog/Feuerwerk_600x600@2x.jpg", status: "done" as Status },
  { slug: "cashare-sekundaermarkt-launch", title: "Kredite verkaufen auf unserem Cashare-Sekundärmarkt!", image: "/images/blog/Sekundarmarkt.-Titel.png", status: "done" as Status },
  { slug: "rueckblick-q3-2019", title: "Rückblick auf das 3. Quartal 2019", image: "/images/blog/Q3_Blog_Titel.jpg", status: "done" as Status },
  { slug: "mci-real-estate-erfolgsgeschichte", title: "MCI Real Estate AG - Eine Erfolgsgeschichte", image: "/images/blog/Aussenansicht-mit-Balkon_Blog.jpg", status: "done" as Status },
  { slug: "fintech-roundtable-efd", title: "Rückblick auf den 4. Fintech-Roundtable des EFD", image: "/images/blog/Bundeshaus_Blog.jpg", status: "done" as Status },
  { slug: "zuger-messe-2019", title: "Zuger Messe 2019 - Ein Rückblick!", image: "/images/blog/Blog_Messe.jpg", status: "done" as Status },
  { slug: "starke-partner-cashare-benedict", title: "Starke Partner: Cashare und Benedict", image: "/images/blog/Partnerschaft_Benedict_Blog-5.jpg", status: "done" as Status },
  { slug: "gefahren-phishing", title: "Die Gefahren von Phishing Scams", image: "/images/blog/Phishing_Blog.jpg", status: "done" as Status },
  { slug: "zinsen-in-geiselhaft", title: "Zinsen in Geiselhaft - Crowdlending bringt Ihnen noch gute Zinsen", image: "/images/blog/Blog_Geiselhaft.jpg", status: "done" as Status },
  { slug: "immobilien-crowdlending-team", title: "Immobilien und Crowdlending sind ein gutes Team!", image: "/images/blog/1Fb.jpg", status: "done" as Status },
  { slug: "anlegen-mit-erfolg", title: "Anlegen mit Erfolg", image: "/images/blog/Anlegen_Erfolg_Blog_Titelbild.jpg", status: "done" as Status },
  { slug: "persoenliche-anlagestrategie", title: "Der Weg zur persönlichen Anlagestrategie", image: "/images/blog/Anlegen_Erfolg_Blog_Titelbild.jpg", status: "done" as Status },
  { slug: "meine-vertraege-update", title: "Laufende Verträge neu: Meine Verträge", image: "/images/blog/Blog_Titel_12_Geburtstag.jpg", status: "done" as Status },
  { slug: "systemupdate-2011", title: "Systemupdate", image: "/images/blog/Blog_Titel_12_Geburtstag.jpg", status: "done" as Status },
  { slug: "iff-award-2011", title: "IFF-Award 2011", image: "/images/blog/Blog_Titel_12_Geburtstag.jpg", status: "done" as Status },
  { slug: "jahresabrechnung-2010", title: "Jahresabrechnung 2010", image: "/images/blog/Blog_Titel_12_Geburtstag.jpg", status: "done" as Status },
  { slug: "jeder-rappen-zaehlt", title: "CHF 500.00 für Jeder Rappen zählt!", image: "/images/blog/Blog_Titel_12_Geburtstag.jpg", status: "done" as Status },
  { slug: "ausweitung-bonitaetspruefung", title: "Ausweitung der Bonitätsprüfung", image: "/images/blog/Blog_Titel_12_Geburtstag.jpg", status: "done" as Status },
  { slug: "bericht-eco-sf1", title: "Bericht im ECO auf SF1", image: "/images/blog/Blog_Titel_12_Geburtstag.jpg", status: "done" as Status },
  { slug: "cashare-neuer-look", title: "Cashare im neuen Look", image: "/images/blog/Blog_Titel_12_Geburtstag.jpg", status: "done" as Status },
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
                    <img src={article.image} alt={article.title} loading="lazy" />
                  </div>
                  <div class="migration__blog-content">
                    <h3 class="migration__blog-title">{article.title}</h3>
                    <div class="migration__blog-links">
                      <a
                        href={`https://www.cashare.ch/${article.slug}/`}
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
                    </div>
                    <span class={`migration__status ${statusConfig[article.status].class}`}>
                      {statusConfig[article.status].label}
                    </span>
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
