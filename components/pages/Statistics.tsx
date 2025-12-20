import type { Locale } from "../../lib/i18n/index.ts";

interface StatisticsProps {
  locale: Locale;
}

const content = {
  de: {
    backLink: { label: "Zurück zu Über uns", href: "/ueber-uns" },
    title: "Statistik",
    subtitle: "Unser Leistungsausweis - Transparenz ist einer unserer Kernwerte.",
    updated: "Stand: Dezember 2024",
    stats: [
      { value: "67'665", label: "Registrierte Mitglieder" },
      { value: "4'764", label: "Finanzierte Projekte" },
      { value: "CHF 2.5 Mrd.", label: "Angefragtes Kreditvolumen" },
      { value: "CHF 1 Mio.", label: "Grosster Kredit" },
    ],
    sections: {
      performance: {
        title: "Plattform-Performance",
        items: [
          { label: "Uber 60'000 Kunden bedient", desc: "Privatpersonen und Unternehmen" },
          { label: "Erste Crowdlending-Plattform der Schweiz", desc: "Gegundet 2008" },
          { label: "Tausende aktive Investoren", desc: "Privat und institutionell" },
        ],
      },
      distribution: {
        title: "Kreditverteilung",
        items: [
          { type: "Privatdarlehen", desc: "Kredite für Privatpersonen" },
          { type: "KMU-Kredite", desc: "Finanzierung für Unternehmen" },
        ],
      },
      ratings: {
        title: "Rating-Kategorien",
        desc: "Nur Kredite mit Rating A bis C werden zur Finanzierung zugelassen.",
        items: [
          { rating: "A", range: "3.9-5.4%", return: "4.65%", status: "Zugelassen" },
          { rating: "B+", range: "4.0-5.9%", return: "4.95%", status: "Zugelassen" },
          { rating: "B", range: "4.6-7.3%", return: "5.95%", status: "Zugelassen" },
          { rating: "C+", range: "5.6-9.7%", return: "7.65%", status: "Zugelassen" },
          { rating: "C", range: "7.0-11.4%", return: "9.20%", status: "Zugelassen" },
          { rating: "D-F", range: "-", return: "-", status: "Abgelehnt" },
        ],
      },
    },
    disclaimer: "Vergangene Renditen sind keine Garantie für zukünftige Ergebnisse. Investitionen in Kredite sind mit Risiken verbunden.",
  },
  en: {
    backLink: { label: "Back to About Us", href: "/en/about" },
    title: "Statistics",
    subtitle: "Our track record - Transparency is one of our core values.",
    updated: "As of: December 2024",
    stats: [
      { value: "67,665", label: "Registered Members" },
      { value: "4,764", label: "Funded Projects" },
      { value: "CHF 2.5B", label: "Requested Crédit Volume" },
      { value: "CHF 1M", label: "Largest Loan" },
    ],
    sections: {
      performance: {
        title: "Platform Performance",
        items: [
          { label: "Over 60,000 customers served", desc: "Individuals and businesses" },
          { label: "Switzerland's first crowdlending platform", desc: "Founded 2008" },
          { label: "Thousands of active investors", desc: "Private and institutional" },
        ],
      },
      distribution: {
        title: "Loan Distribution",
        items: [
          { type: "Private Loans", desc: "Loans for individuals" },
          { type: "SME Loans", desc: "Financing for businesses" },
        ],
      },
      ratings: {
        title: "Rating Categories",
        desc: "Only loans rated A to C are approved for funding.",
        items: [
          { rating: "A", range: "3.9-5.4%", return: "4.65%", status: "Approved" },
          { rating: "B+", range: "4.0-5.9%", return: "4.95%", status: "Approved" },
          { rating: "B", range: "4.6-7.3%", return: "5.95%", status: "Approved" },
          { rating: "C+", range: "5.6-9.7%", return: "7.65%", status: "Approved" },
          { rating: "C", range: "7.0-11.4%", return: "9.20%", status: "Approved" },
          { rating: "D-F", range: "-", return: "-", status: "Rejected" },
        ],
      },
    },
    disclaimer: "Past returns are not a guarantee of future results. Investments in loans carry risks.",
  },
  fr: {
    backLink: { label: "Retour à À propos", href: "/fr/a-propos" },
    title: "Statistiques",
    subtitle: "Notre bilan - La transparence est l'une de nos valeurs fondamentales.",
    updated: "Mise a jour: Decembre 2024",
    stats: [
      { value: "67'665", label: "Membres inscrits" },
      { value: "4'764", label: "Projets finances" },
      { value: "CHF 2.5 Mrd", label: "Volume de crédit demande" },
      { value: "CHF 1 Mio", label: "Plus gros pret" },
    ],
    sections: {
      performance: {
        title: "Performance de la plateforme",
        items: [
          { label: "Plus de 60'000 clients servis", desc: "Particuliers et entreprises" },
          { label: "Premiere plateforme de crowdlending en Suisse", desc: "Fondee en 2008" },
          { label: "Des milliers d'investisseurs actifs", desc: "Privés et institutionnels" },
        ],
      },
      distribution: {
        title: "Distribution des prets",
        items: [
          { type: "Prets privés", desc: "Prets aux particuliers" },
          { type: "Prets PME", desc: "Financement pour entreprises" },
        ],
      },
      ratings: {
        title: "Categories de notation",
        desc: "Seuls les prets notes A a C sont approuves pour le financement.",
        items: [
          { rating: "A", range: "3.9-5.4%", return: "4.65%", status: "Approuve" },
          { rating: "B+", range: "4.0-5.9%", return: "4.95%", status: "Approuve" },
          { rating: "B", range: "4.6-7.3%", return: "5.95%", status: "Approuve" },
          { rating: "C+", range: "5.6-9.7%", return: "7.65%", status: "Approuve" },
          { rating: "C", range: "7.0-11.4%", return: "9.20%", status: "Approuve" },
          { rating: "D-F", range: "-", return: "-", status: "Rejete" },
        ],
      },
    },
    disclaimer: "Les rendements passes ne garantissent pas les resultats futurs. Les investissements comportent des risques.",
  },
};

export function Statistics({ locale }: StatisticsProps) {
  const t = content[locale];
  const headers = locale === "de" ? ["Rating", "Zinsspanne", "Erw. Rendite", "Status"]
    : locale === "fr" ? ["Notation", "Fourchette", "Rend. attendu", "Statut"]
    : ["Rating", "Interest Range", "Est. Return", "Status"];

  return (
    <>
      <section class="subpage-hero">
        <div class="subpage-hero__container">
          <a href={t.backLink.href} class="subpage-hero__back">
            <svg class="subpage-hero__back-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
            {t.backLink.label}
          </a>
          <h1 class="subpage-hero__title">{t.title}</h1>
          <p class="subpage-hero__subtitle">{t.subtitle}</p>
        </div>
      </section>

      <section class="subpage-section subpage-section--gray">
        <div class="subpage-section__container subpage-section__container--wide">
          <div class="stats-grid">
            {t.stats.map((stat, i) => (
              <div key={i} class="stats-grid__item">
                <div class="stats-grid__value">{stat.value}</div>
                <div class="stats-grid__label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section class="subpage-section subpage-section--white">
        <div class="subpage-section__container">
          <div class="content-block">
            <h2 class="content-block__title">{t.sections.performance.title}</h2>
            <div class="check-list">
              {t.sections.performance.items.map((item, i) => (
                <div key={i} class="check-list__item">
                  <svg class="check-list__icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span class="check-list__text"><strong>{item.label}</strong> - {item.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section class="subpage-section subpage-section--gray">
        <div class="subpage-section__container">
          <div class="subpage-section__header">
            <h2 class="subpage-section__title">{t.sections.ratings.title}</h2>
            <p class="subpage-section__subtitle">{t.sections.ratings.desc}</p>
          </div>
          <table class="rating-table">
            <thead>
              <tr>
                {headers.map((h, i) => <th key={i}>{h}</th>)}
              </tr>
            </thead>
            <tbody>
              {t.sections.ratings.items.map((item, i) => (
                <tr key={i}>
                  <td>
                    <span class={`rating-badge ${item.rating.includes("D") ? "rating-badge--c" : item.rating === "A" ? "rating-badge--a" : "rating-badge--b"}`}>
                      {item.rating}
                    </span>
                  </td>
                  <td>{item.range}</td>
                  <td>{item.return}</td>
                  <td>{item.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section class="subpage-section subpage-section--white">
        <div class="subpage-section__container">
          <div class="info-box">
            <svg class="info-box__icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div class="info-box__content">
              <p class="info-box__text">{t.disclaimer}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
