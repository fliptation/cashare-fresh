import type { Locale } from "../../lib/i18n/index.ts";

interface HowItWorksSmeProps {
  locale: Locale;
}

const content = {
  de: {
    title: "KMU-Kredit",
    subtitle: "So funktioniert Ihre Unternehmensfinanzierung",
    heroText: "Massgeschneiderte P2P-Geschaftskredite für Unternehmer und KMU - Entscheidung in 48 Stunden.",
    advantages: [
      { title: "Schnell", description: "Schnelle Antragsprufung mit raschem Geldtransfer nach Finanzierung" },
      { title: "Tiefe Zinsen", description: "Ab 3.9% - wettbewerbsfahige Crowdlending-Konditionen ohne Bank" },
      { title: "Transparent", description: "Volle Offenlegung aller Gebuhren - keine versteckten Kosten" },
    ],
    loanTypes: {
      title: "Unsere KMU-Kreditarten",
      items: [
        { title: "Blanko KMU-Kredit", description: "Unbesicherte Unternehmensfinanzierung" },
        { title: "Gesicherter Kredit", description: "Kredite mit hinterlegten Sicherheiten" },
        { title: "Kurzfristiger Kredit", description: "Finanzierung bis zu 12 Monaten" },
      ],
    },
    process: {
      title: "Der Ablauf in 3 Schritten",
      steps: [
        { step: "1", title: "Antrag & Prufung", description: "Reichen Sie Ihren Kreditantrag zur Bewertung ein." },
        { step: "2", title: "Finanzierung & Genehmigung", description: "Die Anleger-Crowd pruft und finanziert genehmigte Antrage." },
        { step: "3", title: "Auszahlung", description: "Das Geld wird elektronisch auf Ihr Geschftskonto uberwiesen." },
      ],
      timeline: "Ca. 10 Tage von der Genehmigung bis zum Geldeingang",
    },
    requirements: {
      title: "Voraussetzungen",
      items: [
        "Schweizer oder Liechtensteiner Firmenregistrierung",
        "Mindestens 2 Jahre Geschaftstatigkeit",
        "Mindestumsatz CHF 100'000 jahrlich",
        "Positiver Cashflow nachweisbar",
      ],
    },
    stats: "Uber 60'000 Privatpersonen und Unternehmen unterstützt",
    cta: {
      title: "Jetzt KMU-Kredit beantragen",
      button: { label: "Kredit beantragen", href: "/kredit-beantragen/kmu-kredit" },
    },
  },
  en: {
    title: "SME Loan",
    subtitle: "How your business financing works",
    heroText: "Tailored P2P business loans for entrepreneurs and SMEs - decision within 48 hours.",
    advantages: [
      { title: "Fast", description: "Quick application review with rapid fund transfer after financing" },
      { title: "Low Interest", description: "From 3.9% - competitive crowdlending rates without traditional banking" },
      { title: "Transparent", description: "Full disclosure of fees upfront - no hidden costs" },
    ],
    loanTypes: {
      title: "Our SME Loan Types",
      items: [
        { title: "Blank SME Loan", description: "Unsecured business financing" },
        { title: "Secured Credit", description: "Loans backed by deposited collateral" },
        { title: "Short-Term Credit", description: "Financing up to 12 months" },
      ],
    },
    process: {
      title: "The Process in 3 Steps",
      steps: [
        { step: "1", title: "Application & Review", description: "Submit your loan request for assessment." },
        { step: "2", title: "Funding & Approval", description: "Investor crowd reviews and finances approved applications." },
        { step: "3", title: "Disbursement", description: "Money transfers electronically to your business account." },
      ],
      timeline: "Approx. 10 days from approval to fund receipt",
    },
    requirements: {
      title: "Requirements",
      items: [
        "Swiss or Liechtenstein company registration",
        "Minimum 2-year operating history",
        "Minimum CHF 100,000 annual turnover",
        "Positive cash flow demonstration",
      ],
    },
    stats: "Over 60,000 individuals and businesses supported",
    cta: {
      title: "Apply for an SME loan now",
      button: { label: "Apply for loan", href: "/en/apply-for-credit/sme-loan" },
    },
  },
  fr: {
    title: "Crédit PME",
    subtitle: "Comment fonctionne votre financement d'entreprise",
    heroText: "Credits P2P sur mesure pour entrepreneurs et PME - decision en 48 heures.",
    advantages: [
      { title: "Rapide", description: "Examen rapide de la demande avec transfert de fonds rapide apres financement" },
      { title: "Taux bas", description: "A partir de 3.9% - taux crowdlending competitifs sans banque traditionnelle" },
      { title: "Transparent", description: "Divulgation complete des frais - pas de couts caches" },
    ],
    loanTypes: {
      title: "Nos types de crédit PME",
      items: [
        { title: "Crédit PME en blanc", description: "Financement d'entreprise non garanti" },
        { title: "Crédit garanti", description: "Prets adosses a des garanties deposees" },
        { title: "Crédit a court terme", description: "Financement jusqu'a 12 mois" },
      ],
    },
    process: {
      title: "Le processus en 3 etapes",
      steps: [
        { step: "1", title: "Demande & Examen", description: "Soumettez votre demande de crédit pour evaluation." },
        { step: "2", title: "Financement & Approbation", description: "La communaute d'investisseurs examine et finance les demandes approuvees." },
        { step: "3", title: "Versement", description: "L'argent est transfere electroniquement sur votre compte professionnel." },
      ],
      timeline: "Env. 10 jours de l'approbation a la reception des fonds",
    },
    requirements: {
      title: "Conditions",
      items: [
        "Enregistrement d'entreprise suisse ou liechtensteinois",
        "Minimum 2 ans d'activite",
        "Chiffre d'affaires minimum CHF 100'000 par an",
        "Flux de tresorerie positif demontrable",
      ],
    },
    stats: "Plus de 60'000 particuliers et entreprises soutenus",
    cta: {
      title: "Demandez un crédit PME maintenant",
      button: { label: "Demander un credit", href: "/fr/demander-un-credit/credit-pme" },
    },
  },
};

export function HowItWorksSme({ locale }: HowItWorksSmeProps) {
  const t = content[locale];

  return (
    <>
      {/* Hero Section */}
      <section class="subpage-hero">
        <div class="subpage-hero__container">
          <h1 class="subpage-hero__title">{t.title}</h1>
          <p class="subpage-hero__subtitle">{t.subtitle}</p>
          <p class="subpage-hero__subtitle">{t.heroText}</p>
        </div>
      </section>

      {/* Advantages */}
      <section class="subpage-section subpage-section--white">
        <div class="subpage-section__container subpage-section__container--wide">
          <div class="benefits-grid benefits-grid--3">
            {t.advantages.map((item, index) => (
              <div key={index} class="benefits-grid__item">
                <h3 class="benefits-grid__title">{item.title}</h3>
                <p class="benefits-grid__desc">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Loan Types */}
      <section class="subpage-section subpage-section--gray">
        <div class="subpage-section__container subpage-section__container--wide">
          <div class="subpage-section__header">
            <h2 class="subpage-section__title">{t.loanTypes.title}</h2>
          </div>
          <div class="solution-grid">
            {t.loanTypes.items.map((item, index) => (
              <div key={index} class="solution-card">
                <h3 class="solution-card__title">{item.title}</h3>
                <p class="solution-card__desc">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section class="subpage-section subpage-section--white">
        <div class="subpage-section__container">
          <div class="subpage-section__header">
            <h2 class="subpage-section__title">{t.process.title}</h2>
          </div>
          <div class="steps-list">
            {t.process.steps.map((step, index) => (
              <div key={index} class="steps-list__item">
                <div class="steps-list__number">{step.step}</div>
                <div class="steps-list__content">
                  <div class="steps-list__title">{step.title}</div>
                  <div class="steps-list__desc">{step.description}</div>
                </div>
              </div>
            ))}
          </div>
          <p class="hiw-timeline">{t.process.timeline}</p>
        </div>
      </section>

      {/* Requirements */}
      <section class="subpage-section subpage-section--gray">
        <div class="subpage-section__container">
          <div class="subpage-section__header">
            <h2 class="subpage-section__title">{t.requirements.title}</h2>
          </div>
          <div class="two-col__item">
            <ul class="check-list">
              {t.requirements.items.map((item, index) => (
                <li key={index} class="check-list__item">
                  <svg class="check-list__icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span class="check-list__text">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section class="subpage-cta">
        <div class="subpage-cta__container">
          <p class="subpage-cta__text">{t.stats}</p>
          <h2 class="subpage-cta__title">{t.cta.title}</h2>
          <a href={t.cta.button.href} class="subpage-cta__button">
            {t.cta.button.label}
          </a>
        </div>
      </section>
    </>
  );
}
