import type { Locale } from "../../lib/i18n/index.ts";

interface PressItem {
  media: string;
  title: string;
  description: string;
  image: string | null;
}

interface PressProps {
  locale: Locale;
}

const content = {
  de: {
    tagline: "Presse Mitteilungen",
    title: "Was die Presse sagt",
    description: "Crowdlending und Fintech sind Themen von nationalem und internationalem Interesse. Schauen Sie rein und lassen Sie sich inspirieren.",
    cta: "Kontaktieren Sie uns",
    ctaEmail: "presse@cashare.ch",
    readMore: "Mehr erfahren",
  },
  en: {
    tagline: "Press Releases",
    title: "What the Press Says",
    description: "Crowdlending and fintech are topics of national and international interest. Take a look and get inspired.",
    cta: "Contact Us",
    ctaEmail: "presse@cashare.ch",
    readMore: "Learn more",
  },
  fr: {
    tagline: "Communiqués de presse",
    title: "Ce que dit la presse",
    description: "Le crowdlending et la fintech sont des sujets d'intérêt national et international. Jetez un coup d'œil et laissez-vous inspirer.",
    cta: "Contactez-nous",
    ctaEmail: "presse@cashare.ch",
    readMore: "En savoir plus",
  },
};

// Press items from crawled data
const pressItems: PressItem[] = [
  { media: "Neue Zürcher Zeitung", title: "Leihe deinem Nächsten", description: "Privatpersonen investieren in Privatpersonen. Investoren stellen Geld für Privatkredite zur Verfügung.", image: "https://www.cashare.ch/wp-content/uploads/2022/05/portfolio-nzz-3.jpg" },
  { media: "Aargauer Zeitung", title: "Free Banking: Hat die klassische Bank bald ausgedient?", description: "Datenlecks sind die Begleiterscheinung einer grossen digitalen Umwälzung im Bankgeschäft. Die Neuerungen bringen aber auch Vorteile. Dienstleistungen werden transparenter, günstiger und besser.", image: "https://www.cashare.ch/wp-content/uploads/2022/05/Aargauer_Zeitung-1.jpg" },
  { media: "Finance 2.0", title: "Peer-to-Peer-Kredite", description: "Privatpersonen investieren in Privatpersonen. Investoren stellen Geld für Privatkredite zur Verfügung.", image: "https://www.cashare.ch/wp-content/uploads/2022/05/portfolio-finance20.jpg" },
  { media: "Tages Anzeiger", title: "Der Investorenschwarm formiert sich", description: "Der Schweizer Markt steckt noch in den Kinderschuhen. Anbieter und Experten rechnen mit hohem Wachstum.", image: "https://www.cashare.ch/wp-content/uploads/2022/05/portfolio-tagesanzeiger-2.jpg" },
  { media: "Hochschule Luzern", title: "Erste Studie zum Schweizer Crowdfunding Markt", description: "Crowdfunding Monitoring 2014 – erste Studie zum Schweizer Crowdfunding Markt.", image: "https://www.cashare.ch/wp-content/uploads/2022/05/portfolio-financeblog-3.jpg" },
  { media: "Handelszeitung", title: "Von der Nische zur Masse", description: "Der Schweizer Markt steckt noch in den Kinderschuhen. Anbieter und Experten rechnen mit hohem Wachstum.", image: "https://www.cashare.ch/wp-content/uploads/2022/05/portfolio-handelszeitung-1-1.jpg" },
  { media: "Neue Zürcher Zeitung", title: "Neue Konkurrenz für Banken", description: "Hypothekenvermittler sowie Finanz- und Crowdfunding-Plattformen kämpfen zunehmend mit Banken um Marktanteile.", image: "https://www.cashare.ch/wp-content/uploads/2022/05/portfolio-nzz-2.jpg" },
  { media: "Hochschule Luzern", title: 'Rückblick auf die Konferenz "Innovative Angebote im Retail Banking"', description: 'Die Konferenz "Innovative Angebote im Retail Banking" fand am Donnerstag, 26 Juni 2014 am Institut für Finanzdienstleistungen Zug statt.', image: "https://www.cashare.ch/wp-content/uploads/2022/05/portfolio-financeblog-4.jpg" },
  { media: "RSI", title: "Fenomeno crowdlending", description: "Privatkredite sind in Großbritannien Realität, in der Schweiz stehen wir am Anfang.", image: "https://www.cashare.ch/wp-content/uploads/2022/05/portfolio-rsi.jpg" },
  { media: "KGeld", title: "Bank spielen und Geld verdienen", description: "Nicht nur Banken vergeben Kredite. Auch Privatleute können anderen Konsumenten ein Darlehen geben und damit Geld verdienen.", image: "https://www.cashare.ch/wp-content/uploads/2022/05/portfolio-kgeld-1.jpg" },
  { media: "Aargauer Zeitung", title: "CD aufnehmen, Buch drucken, Konzert veranstalten: Kreative flirten mit Schwarm-Geld", description: "Das Finanzieren von Projekten oder Firmen durch eine Vielzahl von Menschen ist im Trend, besonders in der Kreativbranche.", image: "https://www.cashare.ch/wp-content/uploads/2022/05/Aargauer_Zeitung.jpg" },
  { media: "Neue Zürcher Zeitung", title: "Anleger entdecken das Social Lending", description: "Private Anleger entdecken die Kreditvergabe über Internet-Plattformen. Die Auswahl für hiesige Investoren ist noch begrenzt.", image: "https://www.cashare.ch/wp-content/uploads/2022/05/portfolio-nzz-4.jpg" },
  { media: "SRF", title: "Wozu brauchen wir noch Banken?", description: "Zinsen gibts keine mehr, dafür Gebühren. Kredite erhalten wir auch von der Crowd – nicht mehr nur von der Bank.", image: "https://www.cashare.ch/wp-content/uploads/2022/05/portfolio-srf-1.jpg" },
  { media: "SRF 10 vor 10", title: "Fintech auf dem Vormarsch", description: "Die UBS hat heute das beste Quartalsergebnis seit fast fünf Jahren vorgelegt. UBS-Konzernchef Sergio Ermotti warnt vor der Fintech-Konkurrenz.", image: "https://www.cashare.ch/wp-content/uploads/2022/05/portfolio-srf10vor10.jpg" },
  { media: "Hochschule Luzern", title: "Crowdfunding Monitoring 2015 – Studie zum Schweizer Crowdfunding Markt", description: "2014 wurden in der Schweiz 15.8 Millionen Franken durch Crowdfunding vermittelt – im Vorjahr waren es noch 11.6 Millionen.", image: "https://www.cashare.ch/wp-content/uploads/2022/05/portfolio-financeblog-2.jpg" },
  { media: "Hochschule Luzern", title: "Wer möchte eigentlich einen Kredit über Crowdfunding?", description: "Crowdlending (auch P2P-Lending) war in der Schweiz bisher nur für private Kreditnehmer möglich.", image: "https://www.cashare.ch/wp-content/uploads/2022/05/portfolio-financeblog-5.jpg" },
  { media: "Tagesanzeiger", title: "Private Banking ohne Bankberater", description: "Fintech ist das neue Schlagwort in der Finanzbranche. Wer die Newcomer sind, was es konkret für Kunden bedeutet.", image: "https://www.cashare.ch/wp-content/uploads/2022/05/portfolio-tagesanzeiger-1.jpg" },
  { media: "le temps", title: "Le nombre de plateformes va diminuer", description: "Au sein du financement participatif, le «crowdlending», l'octroi de crédits entre particuliers, est en pleine croissance.", image: "https://www.cashare.ch/wp-content/uploads/2022/05/portfolio-letemps.jpg" },
  { media: "Bilan", title: "So investieren Sie in Crowdfunding", description: "Die Crowdfunding-Welt ist weitgehend unreguliert. Daher ist es wichtig, die Geschäftsbedingungen der Plattformen zu kennen.", image: "https://www.cashare.ch/wp-content/uploads/2022/05/portfolio-bilan.jpg" },
  { media: "cash", title: "Crowdsourcing ist Alternative geworden", description: "Crowdfunding und Crowdsourcing – ein Problem für traditionelle Unternehmen?", image: "https://www.cashare.ch/wp-content/uploads/2022/05/portfolio-cash-1-1.jpg" },
  { media: "Hochschule Luzern", title: "KMU-Kredite über Crowdfunding – der Schweizer Markt bewegt sich", description: "Crowdlending wurde in der Schweiz lange Zeit nur für private Kreditnehmer angeboten.", image: "https://www.cashare.ch/wp-content/uploads/2022/05/portfolio-financeblog-1-1.jpg" },
  { media: "Neue Zürcher Zeitung", title: "Klick, Klick, Kredit", description: "Die Zahl der neuen Anbieter von Krediten mit effizienten technologischen Plattformen steigt rasch an.", image: "https://www.cashare.ch/wp-content/uploads/2022/05/portfolio-nzz-1-1.jpg" },
  { media: "finews.ch", title: "Das Schweizer Fintech-Unternehmen Cashare ist in das Deutsche Börse Venture Network aufgenommen worden", description: "Cashare erhält damit Zugang zu einem internationalen Netzwerk von Partnern und Investoren.", image: "https://www.cashare.ch/wp-content/uploads/2022/05/portfolio-finews-1-1.jpg" },
  { media: "inside-it.ch", title: "Zuger Fintech Cashare schafft es an die Quelle", description: "Das Deutsche Börse Venture Network nimmt Cashare ab sofort in sein innovatives Programm aus führenden Wachstumsunternehmen auf.", image: "https://www.cashare.ch/wp-content/uploads/2022/05/portfolio-inside-it-1-1.jpg" },
  { media: "startupticker.ch", title: "Cashare wird Teil des Deutsche Börse Venture Network", description: "Das Deutsche Börse Venture Network nimmt den Schweizer Crowdlending-Pionier Cashare ab sofort in sein Programm auf.", image: "https://www.cashare.ch/wp-content/uploads/2022/05/portfolio-startupticker-2.jpg" },
  { media: "P2P Kredite.com", title: "Schweizer P2P Kreditmarktplatz Cashare wird Teil des Deutsche Börse Venture Networks", description: "Die Gruppe Deutsche Börse hilft mit dem Venture Netzwerk die Finanzierungssituation von jungen und wachstumsstarken Unternehmen zu verbessern.", image: "https://www.cashare.ch/wp-content/uploads/2022/05/portfolio-p2p-kredite.jpg" },
  { media: "Swissquote", title: "Peer-to-Peer- Geschäfte abseits der Banken", description: "In ein Start-up investieren, einen Kredit aufnehmen, Geld transferieren oder Vermögen verwalten: Solche Finanzgeschäfte können heute ohne Bank abgewickelt werden.", image: "https://www.cashare.ch/wp-content/uploads/2022/05/portfolio-swissquotemagazin.jpg" },
  { media: "cash", title: '"Die Finanzkrise hat uns mehr Glaubwürdigkeit verliehen"', description: "Crowdlending-Plattformen wollen etablierten Konsumkredit-Banken den Markt abgraben.", image: "https://www.cashare.ch/wp-content/uploads/2022/05/portfolio-cash-1.jpg" },
  { media: "KGeld", title: "Woher soll ich einen Kredit nehmen?", description: "Ich werde im Mai 65 – und zum ersten Mal in meinem Leben brauche ich einen Kredit von 15000 Franken.", image: "https://www.cashare.ch/wp-content/uploads/2022/05/portfolio-kgeld.jpg" },
  { media: "startupticker", title: "Cashare vermittelt Kredite von über einer Million Franken pro Monat", description: "Die Crowdlending-Plattform Cashare hat im ersten Quartal 2016 eine Schallmauer durchbrochen.", image: "https://www.cashare.ch/wp-content/uploads/2022/05/portfolio-startupticker-1-1.jpg" },
  { media: "Hochschule Luzern", title: "Crowdfunding in der Schweiz mit hohem Wachstum", description: "Crowdfunding in der Schweiz mit hohem Wachstum.", image: "https://www.cashare.ch/wp-content/uploads/2022/05/portfolio-financeblog-1.jpg" },
  { media: "Finanz und Wirtschaft", title: "Der Anleger wird zur Bank", description: "Im Konsumkreditmarkt werden die Spielregeln geändert. Dank Internetplattformen können alle zum Geldgeber werden.", image: "https://www.cashare.ch/wp-content/uploads/2022/05/portfolio-fuw-1.jpg" },
  { media: "Tagesanzeiger", title: "Lieber ins Netz statt zur Bank", description: "Längst werden nicht mehr nur Musik-CDs oder Theaterstücke per Crowdfunding finanziert. Auch Kleinfirmen nutzen diese Finanzierungsform.", image: "https://www.cashare.ch/wp-content/uploads/2022/05/portfolio-tagesanzeiger.jpg" },
  { media: "money cab", title: "Immer mehr Crowdfunding-Plattformen drängen auf den Markt", description: "Immer mehr Crowdfunding-Plattformen drängen auf den Markt.", image: "https://www.cashare.ch/wp-content/uploads/2022/05/portfolio-moneycab-1.jpg" },
  { media: "the business times", title: "Schweizer Wirtschaftsverband will stärkere Rolle spielen", description: "Da sowohl Singapur als auch die Schweiz großen Wert auf Humankapital und lokale Talente legen, bieten sich viele Kooperationsmöglichkeiten.", image: "https://www.cashare.ch/wp-content/uploads/2022/05/portfolio-the-business-times-1.jpg" },
  { media: "YouTube", title: '"FinTech Made in Switzerland" Interview Michael Borter, Cashare', description: "Der Film bildet das FinTech Ökosystem in der Schweiz ab in Konversationen mit Startup-Gründern und Vordenkern.", image: "https://www.cashare.ch/wp-content/uploads/2022/05/portfolio-youtube.jpg" },
  { media: "Neue Zürcher Zeitung", title: "Welche Crowdlending-Anbieter prägen den Schweizer Markt?", description: "2015 wurden in der Schweiz knapp 8 Mio. Fr. über Kreditplattformen vermittelt. Die Crowdlending-Branche wächst rasant.", image: "https://www.cashare.ch/wp-content/uploads/2022/05/portfolio-nzz-1.jpg" },
  { media: "startupticker", title: "Das Zeitalter des Crowdlending eröffnet neue Märkte für Startups", description: "Crowdlending befindet sich in der Schweiz noch in der Anfangsphase, dennoch wurden bereits deutliche Fortschritte erzielt.", image: "https://www.cashare.ch/wp-content/uploads/2022/05/portfolio-startupticker-1.jpg" },
  { media: "NZZ am Sonntag", title: "Sieben Fragen an Michael Borter", description: '"Banker sind nachdenklicher geworden"', image: "https://www.cashare.ch/wp-content/uploads/2022/05/nzzas-1.jpg" },
  { media: "Zentralplus", title: "Den Kredit aus dem Internet statt von der Bank", description: "Durch Crowdlending-Plattformen kommt manch einer einfacher oder günstiger zu einem Kredit als bei einer Bank.", image: "https://www.cashare.ch/wp-content/uploads/2022/05/zentralplus-1.jpg" },
  { media: "ERFOLG", title: "Crowdlending finanziert Kinderfahrrad Projekt", description: "UrbanRider produziert Fahrräder seit 2012, welche die Kunden online oder im Shop selber gestalten können.", image: "https://www.cashare.ch/wp-content/uploads/2022/05/erfolg.jpg" },
  { media: "Asset Manager 2016", title: "Aus dem Tagebuch eines Schweizer Fintech-Pioniers (S. 12-13)", description: "Von der Idee zum FinTech – Die Geschichte von Cashare beginnt bereits einige Zeit vor der Gründung.", image: "https://www.cashare.ch/wp-content/uploads/2022/05/AssetManager.jpg" },
  { media: "RSI", title: "Quando la tecnologia sostituisce il banchiere", description: "La digitalizzazione arriva anche nella finanza, è il cosiddetto fintech, o tecnofinanza.", image: "https://www.cashare.ch/wp-content/uploads/2022/05/rsila1.jpg" },
  { media: "Bilanz", title: "Kredite für Rendite", description: "Bank, adieu! Auf Online-Plattformen vergeben private Anleger direkt Kredite. Das Risiko ist geringer als gedacht.", image: "https://www.cashare.ch/wp-content/uploads/2022/05/bilanz-1.jpg" },
  { media: "Beobachter", title: "Für den Kredit nicht mehr zur Bank", description: '"Disruptiv" ist ein Lieblingswort von Michael Borter. Innovationen sind dann "disruptiv", wenn sie das Bestehende grundlegend verändern.', image: "https://www.cashare.ch/wp-content/uploads/2022/05/beaobachter-1.jpg" },
  { media: "Finanz und Wirtschaft", title: "Fintech – (R)evolution der Schweizer Finanzindustrie", description: "Alle reden über Fintech. Doch woher kommt das Wort, was steckt dahinter, und welche Geschichte nahm ihren Anfang?", image: "https://www.cashare.ch/wp-content/uploads/2022/05/portfolio-fuw.jpg" },
  { media: "finews.ch", title: "News ganz kurz – November 2016", description: "Die Crowdlending-Plattform Cashare ist mit dem Anbieter von erneuerbaren Energien Fairpower eine Kooperation eingegangen.", image: "https://www.cashare.ch/wp-content/uploads/2022/05/portfolio-finews.jpg" },
  { media: "inside-it.ch", title: "Fintech im Einsatz für erneuerbare Energien", description: "Das Fintech-Unternehmen Cashare und der Energieanbieter Fairpower wollen mit einer neuen Partnerschaft die Energiewende vorantreiben.", image: "https://www.cashare.ch/wp-content/uploads/2022/05/portfolio-inside-it-1.jpg" },
  { media: "moneycab", title: "Cleantech trifft Fintech – Megatrends ohne Atomstrom", description: "Die Abstimmung über die Atomausstiegsinitiative steht unmittelbar bevor und wirft unter anderem die Frage auf, wie die Energiewende finanziert werden kann.", image: "https://www.cashare.ch/wp-content/uploads/2022/05/portfolio-moneycab.jpg" },
  { media: "20 minuten", title: "Kredit-Plattform macht Private zu Mini-Banken", description: "Kredite statt Taxifahrten: Schweizer Plattformen verknüpfen private Geldgeber mit Kreditsuchenden.", image: "https://www.cashare.ch/wp-content/uploads/2022/05/20min.jpg" },
  { media: "Tagesanzeiger", title: "Firmen holen sich Finanz-Spritze im Internet", description: "KMU kommen kaum noch an Bankkredite. Geld liefern nun Privatanleger. Diese Online-Plattformen wachsen rasant.", image: "https://www.cashare.ch/wp-content/uploads/2022/04/tagesanzeiger.png" },
  { media: "Basler Zeitung", title: "Firmen holen sich Finanz-Spritze im Internet", description: "KMU kommen kaum noch an Bankkredite. Geld liefern nun Privatanleger. Diese Online-Plattformen wachsen rasant.", image: "https://www.cashare.ch/wp-content/uploads/2022/05/basler_zeitung.png" },
  { media: "startupticker", title: "Crowdlending Pionier schliesst Finanzierungsrunde ab", description: "Der Zuger Crowdlending Pionier Cashare hat die dritte Finanzierungsrunde abgeschlossen.", image: "https://www.cashare.ch/wp-content/uploads/2022/05/portfolio-startupticker.jpg" },
  { media: "Swiss IT Reseller", title: "Cashare erweitert Advisory Board", description: "Der Zuger Crowdlending-Spezialist Cashare erweitert sein Advisory Board mit Dominik Witz und Harald Nedwed.", image: "https://www.cashare.ch/wp-content/uploads/2022/05/itreseller.png" },
  { media: "finews.ch", title: "Frischer Wind im Kreditgeschäft: Peer-to-Peer Lending in der Schweiz", description: "In der Schweiz haben sich aufstrebende Anbieter aus der Fintech-Szene etabliert, die das traditionelle Kreditgeschäft aufmischen.", image: "https://www.cashare.ch/wp-content/uploads/2022/05/portfolio-finews-1.jpg" },
  { media: "Neue Zürcher Zeitung", title: "Schweizer setzen vermehrt auf Crowdfunding", description: "Von Zahlen wie in China können Schweizer Crowdfunding-Firmen derzeit nur träumen. Die Vermittlung von Krediten wächst aber stark.", image: "https://www.cashare.ch/wp-content/uploads/2022/04/portfolio-nzz.jpg" },
  { media: "Fintech Switzerland", title: "Verfrühter Jubel über die neue Fintech-Regulierung / 20er Regel nur für KMU Darlehen", description: "Über die Aufhebung der 20er Regel bei KMU-Darlehen bis zu CHF 1 Mio. hat Cashare erst im Juli berichtet.", image: null },
  { media: "startupticker", title: "Halbherzige neue Fintech-Regeln", description: "Die am 1. August in Kraft getretenen Änderungen der Bankenverordnung sollen auch das Crowdfunding vereinfachen.", image: null },
  { media: "Beobachter", title: "Das Geld kommt aus dem Netz", description: "Immer mehr Firmen wenden sich für eine Finanzspritze an Crowdlending-Plattformen. Dort finanzieren mehrere Anleger gemeinsam einen Kredit.", image: null },
  { media: "finews.ch", title: "Cashare: Sensationelle Rendite mit Grundpfand als Sicherheit", description: "Cashare, der Pionier im Crowdlending-Bereich, präsentiert ein in seiner Art neues Projekt. Es handelt sich um ein Immobilienprojekt.", image: null },
];

export function Press({ locale }: PressProps) {
  const t = content[locale];

  return (
    <>
      {/* Hero Section */}
      <section class="press-hero">
        <div class="press-hero__bg" />
        <div class="press-hero__container">
          <span class="press-hero__tagline">{t.tagline}</span>
          <h1 class="press-hero__title">{t.title}</h1>
          <p class="press-hero__description">{t.description}</p>
          <a href={`mailto:${t.ctaEmail}`} class="press-hero__cta">
            {t.cta}
          </a>
        </div>
      </section>

      {/* Press Grid */}
      <section class="press-grid">
        <div class="press-grid__container">
          <div class="press-grid__items">
            {pressItems.map((item, index) => (
              <article key={index} class="press-card">
                <div class="press-card__image">
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.media}
                      loading="lazy"
                    />
                  ) : (
                    <div class="press-card__placeholder">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                      </svg>
                    </div>
                  )}
                </div>
                <div class="press-card__content">
                  <span class="press-card__media">{item.media}</span>
                  <h3 class="press-card__title">{item.title}</h3>
                  <p class="press-card__description">{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section class="press-contact">
        <div class="press-contact__container">
          <div class="press-contact__content">
            <h2 class="press-contact__title">{t.cta}</h2>
            <p class="press-contact__text">
              {locale === "de" && "Für Presseanfragen kontaktieren Sie uns unter:"}
              {locale === "en" && "For press inquiries, contact us at:"}
              {locale === "fr" && "Pour les demandes de presse, contactez-nous à:"}
            </p>
            <a href={`mailto:${t.ctaEmail}`} class="press-contact__email">
              {t.ctaEmail}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
