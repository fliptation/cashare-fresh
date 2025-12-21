import type { Locale } from "../../lib/i18n/index.ts";

interface RatingProps {
  locale: Locale;
}

const content = {
  de: {
    backLink: { label: "Zurück zu Über uns", href: "/ueber-uns" },
    title: "Rating",
    subtitle: "Cashare verwendet Big Data, kunstliche Intelligenz und Machine Learning, um die Kreditwurdigkeit zu bewerten.",
    intro: {
      title: "Das Cashare Rating-System",
      text: "Jeder Kreditantrag wird anhand von Hunderten von Datenpunkten aus unserer historischen Datenbank und externen Quellen über API-Verbindungen zu Zahlungs- und Behordendatenbanken bewertet.",
    },
    scale: {
      title: "Rating-Skala",
      desc: "Kredite erhalten Ratings von A bis F",
      items: [
        { rating: "A", range: "3.9% - 5.4%", risk: "Tiefstes Risiko" },
        { rating: "B+", range: "4.0% - 5.9%", risk: "Sehr tiefes Risiko" },
        { rating: "B", range: "4.6% - 7.3%", risk: "Tiefes Risiko" },
        { rating: "C+", range: "5.6% - 9.7%", risk: "Moderates Risiko" },
        { rating: "C", range: "7.0% - 11.4%", risk: "Mittleres Risiko" },
      ],
      note: "Ratings D-F werden abgelehnt und nicht auf der Plattform gelistet.",
    },
    returns: {
      title: "Erwartete Rendite",
      value: "6.48%",
      label: "Geschatzte Gesamtrendite",
    },
    collateral: {
      title: "Sicherheiten",
      text: "Kredite können mit folgenden Sicherheiten abgesichert werden:",
      items: ["Hypotheken (Grundpfand)", "Personliche Burgschaften"],
      note: "Sicherheiten werden bei der Endbewertung berucksichtigt.",
    },
    safeguards: {
      title: "Zusatzliche Sicherheitsmassnahmen",
      items: [
        "Mindestzinssatz verhindert Unterpreisbildung",
        "Nur Ratings C und besser qualifizieren für Investitionen",
        "Sorgfaltige Bonitatsprufung aller Antrage",
        "Kontinuierliche Uberwachung der Kreditperformance",
      ],
    },
    cta: {
      investor: { title: "Als Anleger investieren", label: "Jetzt investieren", href: "/investieren" },
      borrower: { title: "Als Kreditnehmer beantragen", label: "Kredit beantragen", href: "/kredit-beantragen" },
    },
  },
  en: {
    backLink: { label: "Back to About Us", href: "/en/about" },
    title: "Rating",
    subtitle: "Cashare employs big data, artificial intelligence, and machine learning algorithms to assess creditworthiness.",
    intro: {
      title: "The Cashare Rating System",
      text: "Each loan application is evaluated against hundreds of data points from Cashare's historical database and external sources via API connections to payment and government databases.",
    },
    scale: {
      title: "Rating Scale",
      desc: "Loans receive ratings from A to F",
      items: [
        { rating: "A", range: "3.9% - 5.4%", risk: "Lowest Risk" },
        { rating: "B+", range: "4.0% - 5.9%", risk: "Very Low Risk" },
        { rating: "B", range: "4.6% - 7.3%", risk: "Low Risk" },
        { rating: "C+", range: "5.6% - 9.7%", risk: "Moderate Risk" },
        { rating: "C", range: "7.0% - 11.4%", risk: "Medium Risk" },
      ],
      note: "Ratings D-F are rejected and not listed on the platform.",
    },
    returns: {
      title: "Expected Returns",
      value: "6.48%",
      label: "Estimated overall return",
    },
    collateral: {
      title: "Collateral Options",
      text: "Loans may be secured with:",
      items: ["Mortgages (ground liens)", "Personal guarantees"],
      note: "Collateral is considered in final ratings.",
    },
    safeguards: {
      title: "Additional Safeguards",
      items: [
        "Minimum interest rate floor prevents underpricing",
        "Only ratings C and above qualify for investment",
        "Careful creditworthiness check of all applications",
        "Continuous monitoring of loan performance",
      ],
    },
    cta: {
      investor: { title: "Invest as an investor", label: "Start investing", href: "/en/invest" },
      borrower: { title: "Apply as a borrower", label: "Apply for loan", href: "/en/apply-for-credit" },
    },
  },
  fr: {
    backLink: { label: "Retour à À propos", href: "/fr/a-propos" },
    title: "Rating",
    subtitle: "Cashare utilise le big data, l'intelligence artificielle et les algorithmes de machine learning pour evaluer la solvabilite.",
    intro: {
      title: "Le systeme de notation Cashare",
      text: "Chaque demande de crédit est evaluee selon des centaines de points de donnees provenant de notre base historique et de sources externes via des connexions API aux bases de donnees de paiement et gouvernementales.",
    },
    scale: {
      title: "Echelle de notation",
      desc: "Les credits recoivent des notes de A a F",
      items: [
        { rating: "A", range: "3.9% - 5.4%", risk: "Risque le plus faible" },
        { rating: "B+", range: "4.0% - 5.9%", risk: "Risque tres faible" },
        { rating: "B", range: "4.6% - 7.3%", risk: "Risque faible" },
        { rating: "C+", range: "5.6% - 9.7%", risk: "Risque modere" },
        { rating: "C", range: "7.0% - 11.4%", risk: "Risque moyen" },
      ],
      note: "Les notes D-F sont rejetees et non listees sur la plateforme.",
    },
    returns: {
      title: "Rendements attendus",
      value: "6.48%",
      label: "Rendement global estime",
    },
    collateral: {
      title: "Options de garantie",
      text: "Les credits peuvent etre garantis par:",
      items: ["Hypotheques (cedules hypothecaires)", "Garanties personnelles"],
      note: "Les garanties sont prises en compte dans la notation finale.",
    },
    safeguards: {
      title: "Mesures de sécurité supplementaires",
      items: [
        "Un taux d'interet plancher empeche la sous-tarification",
        "Seules les notes C et superieures sont eligibles a l'investissement",
        "Verification soigneuse de la solvabilite de toutes les demandes",
        "Surveillance continue de la performance des credits",
      ],
    },
    cta: {
      investor: { title: "Investir en tant qu'investisseur", label: "Commencer a investir", href: "/fr/investir" },
      borrower: { title: "Demander en tant qu'emprunteur", label: "Demander un credit", href: "/fr/demander-un-credit" },
    },
  },
};

function getRatingBadgeClass(rating: string): string {
  if (rating === "A") return "scale-list__badge--a";
  if (rating.startsWith("B")) return "scale-list__badge--b";
  return "scale-list__badge--c";
}

export function Rating({ locale }: RatingProps) {
  const t = content[locale];
  const interestLabel = locale === "de" ? "Zinsen" : locale === "fr" ? "Interet" : "Interest";

  return (
    <>
      <section class="subpage-hero">
        <div class="subpage-hero__container">
          <h1 class="subpage-hero__title">{t.title}</h1>
          <p class="subpage-hero__subtitle">{t.subtitle}</p>
        </div>
      </section>

      <section class="subpage-section subpage-section--white">
        <div class="subpage-section__container">
          <div class="content-block">
            <h2 class="content-block__title">{t.intro.title}</h2>
            <p class="content-block__text">{t.intro.text}</p>
          </div>
        </div>
      </section>

      <section class="subpage-section subpage-section--gray">
        <div class="subpage-section__container">
          <div class="subpage-section__header">
            <h2 class="subpage-section__title">{t.scale.title}</h2>
            <p class="subpage-section__subtitle">{t.scale.desc}</p>
          </div>
          <div class="scale-list">
            {t.scale.items.map((item, i) => (
              <div key={i} class="scale-list__item">
                <div class={`scale-list__badge ${getRatingBadgeClass(item.rating)}`}>
                  {item.rating}
                </div>
                <div class="scale-list__content">
                  <div class="scale-list__risk">{item.risk}</div>
                  <div class="scale-list__range">{interestLabel}: {item.range}</div>
                </div>
              </div>
            ))}
          </div>
          <p class="subpage-section__subtitle" style="margin-top: 32px; text-align: center;">
            {t.scale.note}
          </p>
        </div>
      </section>

      <section class="subpage-section subpage-section--primary">
        <div class="subpage-section__container">
          <div class="featured-stat">
            <p class="featured-stat__label">{t.returns.title}</p>
            <div class="featured-stat__value">{t.returns.value}</div>
            <p class="featured-stat__desc">{t.returns.label}</p>
          </div>
        </div>
      </section>

      <section class="subpage-section subpage-section--white">
        <div class="subpage-section__container subpage-section__container--wide">
          <div class="two-col">
            <div class="two-col__item">
              <h2 class="two-col__title">{t.collateral.title}</h2>
              <p class="content-block__text">{t.collateral.text}</p>
              <div class="check-list" style="margin-top: 16px;">
                {t.collateral.items.map((item, i) => (
                  <div key={i} class="check-list__item">
                    <svg class="check-list__icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span class="check-list__text">{item}</span>
                  </div>
                ))}
              </div>
              <p class="content-block__text" style="margin-top: 16px; font-size: 0.875rem; color: #6b7280;">
                {t.collateral.note}
              </p>
            </div>
            <div class="two-col__item">
              <h2 class="two-col__title">{t.safeguards.title}</h2>
              <div class="check-list">
                {t.safeguards.items.map((item, i) => (
                  <div key={i} class="check-list__item">
                    <svg class="check-list__icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <span class="check-list__text">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="subpage-cta">
        <div class="subpage-cta__container" style="max-width: 1000px;">
          <div class="cta-grid">
            <div class="cta-grid__item">
              <h3 class="cta-grid__title">{t.cta.investor.title}</h3>
              <a href={t.cta.investor.href} class="cta-grid__btn cta-grid__btn--primary">
                {t.cta.investor.label}
              </a>
            </div>
            <div class="cta-grid__item">
              <h3 class="cta-grid__title">{t.cta.borrower.title}</h3>
              <a href={t.cta.borrower.href} class="cta-grid__btn cta-grid__btn--outline">
                {t.cta.borrower.label}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
