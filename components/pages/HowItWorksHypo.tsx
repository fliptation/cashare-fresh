import type { Locale } from "../../lib/i18n/index.ts";

interface HowItWorksHypoProps {
  locale: Locale;
}

const content = {
  de: {
    title: "Hypothek",
    subtitle: "So funktioniert Ihre Immobilienfinanzierung",
    heroText: "Optimale Hypothekenlösungen für Ihren Immobilienkauf - über Crowdlending statt traditioneller Bank.",
    advantages: [
      { title: "Kosteneffizient", description: "Als Vermittler reduzieren wir Bankkosten und geben Einsparungen weiter" },
      { title: "Attraktive Zinsen", description: "Ab 2.1% dank unserer modernen Plattform" },
      { title: "Einfacher Prozess", description: "Online-Dokumentenverwaltung ohne Papierkram" },
    ],
    products: {
      title: "Unsere Hypothekenprodukte",
      items: [
        { title: "Private Hypothek", description: "Hypotheken für Privatpersonen" },
        { title: "Immobilienkredit", description: "Darlehen mit Grundpfand als Sicherheit" },
        { title: "Mezzanine-Finanzierung", description: "Erganzende Finanzierungslösungen" },
      ],
    },
    process: {
      title: "Der Ablauf in 3 Schritten",
      steps: [
        { step: "1", title: "Online-Antrag", description: "Reichen Sie Ihren Hypothekenantrag über unsere Plattform ein." },
        { step: "2", title: "Partner-Prufung", description: "Cashare bewertet Ihren Antrag und sichert optimale Konditionen." },
        { step: "3", title: "Schnelle Auszahlung", description: "Die Mittel werden elektronisch auf Ihr Bankkonto uberwiesen." },
      ],
      timeline: "Genehmigung und Finanzierung in ca. 10 Werktagen",
    },
    requirements: {
      title: "Voraussetzungen",
      items: [
        { label: "Belehnungsgrad", value: "Maximal 80% des Immobilienwertes" },
        { label: "Tragbarkeit", value: "Schuldenlast max. 40% des Bruttoeinkommens" },
        { label: "Mindestbetrag", value: "CHF 250'000" },
      ],
    },
    cta: {
      title: "Jetzt Hypothek beantragen",
      button: { label: "Hypothek anfragen", href: "/kredit-beantragen/hypotheken" },
    },
  },
  en: {
    title: "Mortgage",
    subtitle: "How your real estate financing works",
    heroText: "Optimal mortgage solutions for your property purchase - through crowdlending instead of traditional banking.",
    advantages: [
      { title: "Cost Efficient", description: "As intermediary, we reduce bank costs and pass savings to you" },
      { title: "Competitive Rates", description: "From 2.1% thanks to our modern platform" },
      { title: "Simple Process", description: "Online document management without paperwork" },
    ],
    products: {
      title: "Our Mortgage Products",
      items: [
        { title: "Private Mortgage", description: "Mortgages for private individuals" },
        { title: "Real Estate Loan", description: "Loans with mortgage collateral" },
        { title: "Mezzanine Financing", description: "Supplementary financing solutions" },
      ],
    },
    process: {
      title: "The Process in 3 Steps",
      steps: [
        { step: "1", title: "Online Application", description: "Submit your mortgage request through our platform." },
        { step: "2", title: "Partner Review", description: "Cashare evaluates your application and secures optimal terms." },
        { step: "3", title: "Fast Disbursement", description: "Funds transfer electronically to your bank account." },
      ],
      timeline: "Approval and funding typically within 10 business days",
    },
    requirements: {
      title: "Requirements",
      items: [
        { label: "Loan-to-Value", value: "Maximum 80% of property market value" },
        { label: "Affordability", value: "Debt burden max. 40% of gross income" },
        { label: "Minimum Amount", value: "CHF 250,000" },
      ],
    },
    cta: {
      title: "Apply for mortgage now",
      button: { label: "Request mortgage", href: "/en/apply-for-credit/mortgage" },
    },
  },
  fr: {
    title: "Hypotheque",
    subtitle: "Comment fonctionne votre financement immobilier",
    heroText: "Solutions hypothecaires optimales pour votre achat immobilier - via crowdlending au lieu de la banque traditionnelle.",
    advantages: [
      { title: "Rentable", description: "En tant qu'intermediaire, nous reduisons les couts bancaires et vous faisons beneficier des economies" },
      { title: "Taux competitifs", description: "A partir de 2.1% grace a notre plateforme moderne" },
      { title: "Processus simple", description: "Gestion documentaire en ligne sans paperasse" },
    ],
    products: {
      title: "Nos produits hypothecaires",
      items: [
        { title: "Hypotheque privée", description: "Hypotheques pour particuliers" },
        { title: "Crédit immobilier", description: "Prets avec garantie hypothecaire" },
        { title: "Financement mezzanine", description: "Solutions de financement complementaires" },
      ],
    },
    process: {
      title: "Le processus en 3 etapes",
      steps: [
        { step: "1", title: "Demande en ligne", description: "Soumettez votre demande d'hypotheque via notre plateforme." },
        { step: "2", title: "Examen partenaire", description: "Cashare evalue votre demande et obtient les meilleures conditions." },
        { step: "3", title: "Versement rapide", description: "Les fonds sont transferes electroniquement sur votre compte bancaire." },
      ],
      timeline: "Approbation et financement en env. 10 jours ouvrables",
    },
    requirements: {
      title: "Conditions",
      items: [
        { label: "Ratio pret/valeur", value: "Maximum 80% de la valeur du bien" },
        { label: "Capacite financiere", value: "Charge de la dette max. 40% du revenu brut" },
        { label: "Montant minimum", value: "CHF 250'000" },
      ],
    },
    cta: {
      title: "Demandez une hypotheque maintenant",
      button: { label: "Demander une hypotheque", href: "/fr/demander-un-credit/hypotheque" },
    },
  },
};

export function HowItWorksHypo({ locale }: HowItWorksHypoProps) {
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

      {/* Products */}
      <section class="subpage-section subpage-section--gray">
        <div class="subpage-section__container subpage-section__container--wide">
          <div class="subpage-section__header">
            <h2 class="subpage-section__title">{t.products.title}</h2>
          </div>
          <div class="solution-grid">
            {t.products.items.map((item, index) => (
              <div key={index} class="solution-card">
                <div class="solution-card__icon">
                  <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
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
      <section class="subpage-section subpage-section--primary">
        <div class="subpage-section__container">
          <div class="subpage-section__header">
            <h2 class="subpage-section__title">{t.requirements.title}</h2>
          </div>
          <div class="two-col">
            {t.requirements.items.map((item, index) => (
              <div key={index} class="regulation-item">
                <span class="regulation-item__label">{item.label}</span>
                <span class="regulation-item__value">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section class="subpage-cta">
        <div class="subpage-cta__container">
          <h2 class="subpage-cta__title">{t.cta.title}</h2>
          <a href={t.cta.button.href} class="subpage-cta__button">
            {t.cta.button.label}
          </a>
        </div>
      </section>
    </>
  );
}
