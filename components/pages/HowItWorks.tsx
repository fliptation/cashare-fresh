import type { Locale } from "../../lib/i18n/index.ts";

interface HowItWorksProps {
  locale: Locale;
}

const content = {
  de: {
    title: "So funktioniert's",
    subtitle: "Ein Kredit so individuell wie Sie",
    heroText: "Cashare ermoglicht es Ihnen, Ihre Traume durch Crowdlending zu verwirklichen - Kredite bis CHF 1 Million ohne traditionelle Bank.",
    advantages: [
      { title: "FinTech-Pionier", description: "Die innovative Schweizer Crowdlending-Plattform seit 2008" },
      { title: "Attraktive Zinsen", description: "Zinsen ab 3.9% dank direktem Peer-to-Peer-Modell" },
      { title: "Schnelle Abwicklung", description: "Automatisierte Prozesse ermoglichen schnelle Auszahlung" },
    ],
    products: {
      title: "Unsere Finanzierungslösungen",
      items: [
        { title: "Privatkredit", description: "Personliche Kredite für Privatpersonen bis CHF 250'000", href: "/kredit-beantragen/privatkredit", icon: "user" },
        { title: "KMU-Kredit", description: "Geschaftskredite für kleine und mittlere Unternehmen", href: "/kredit-beantragen/kmu-kredit", icon: "building" },
        { title: "Hypothek", description: "Immobilienfinanzierung zu attraktiven Konditionen", href: "/kredit-beantragen/hypotheken", icon: "home" },
      ],
    },
    process: {
      title: "Der Ablauf in 3 Schritten",
      steps: [
        { step: "1", title: "Antrag & Prufung", description: "Stellen Sie online Ihren Kreditantrag. Wir prufen automatisiert Ihre Angaben." },
        { step: "2", title: "Finanzierung", description: "Nach Genehmigung wird Ihr Projekt den Anlegern prasentiert und finanziert." },
        { step: "3", title: "Auszahlung", description: "Die Kreditsumme wird elektronisch auf Ihr Bankkonto uberwiesen." },
      ],
    },
    stats: {
      title: "Uber 60'000 Menschen und Unternehmen vertrauen uns",
      timeline: "Ca. 10 Tage vom Antrag bis zur Auszahlung",
    },
    requirements: {
      title: "Voraussetzungen",
      items: [
        "Mindestalter 18 Jahre",
        "Wohnsitz in der Schweiz oder Liechtenstein",
        "Schweizer Bankkonto",
        "Feste Anstellung oder regelmassiges Einkommen",
        "Keine offenen Betreibungen oder Verlustscheine",
      ],
    },
    cta: {
      title: "Bereit loszulegen?",
      button: { label: "Kredit beantragen", href: "/kredit-beantragen" },
    },
    learnMore: "Mehr erfahren",
  },
  en: {
    title: "How It Works",
    subtitle: "A loan as individual as you",
    heroText: "Cashare enables you to realize your dreams through crowdlending - loans up to CHF 1 million without traditional banking.",
    advantages: [
      { title: "FinTech Pioneer", description: "Switzerland's innovative crowdlending platform since 2008" },
      { title: "Competitive Rates", description: "Interest from 3.9% thanks to direct peer-to-peer model" },
      { title: "Fast Processing", description: "Automated processes enable quick disbursement" },
    ],
    products: {
      title: "Our Financing Solutions",
      items: [
        { title: "Private Loan", description: "Personal loans for individuals up to CHF 250,000", href: "/en/how-it-works/private-loans", icon: "user" },
        { title: "SME Loan", description: "Business loans for small and medium enterprises", href: "/en/how-it-works/sme", icon: "building" },
        { title: "Mortgage", description: "Real estate financing at attractive terms", href: "/en/how-it-works/mortgage", icon: "home" },
      ],
    },
    process: {
      title: "The Process in 3 Steps",
      steps: [
        { step: "1", title: "Application & Review", description: "Submit your loan application online. We automatically verify your information." },
        { step: "2", title: "Funding", description: "Once approved, your project is presented to investors and funded." },
        { step: "3", title: "Disbursement", description: "The loan amount is electronically transferred to your bank account." },
      ],
    },
    stats: {
      title: "Over 60,000 individuals and businesses trust us",
      timeline: "Approx. 10 days from application to disbursement",
    },
    requirements: {
      title: "Requirements",
      items: [
        "Minimum age 18 years",
        "Residence in Switzerland or Liechtenstein",
        "Swiss bank account",
        "Permanent employment or regular income",
        "No open debt enforcement or loss certificates",
      ],
    },
    cta: {
      title: "Ready to get started?",
      button: { label: "Apply for loan", href: "/en/apply-for-credit" },
    },
    learnMore: "Learn more",
  },
  fr: {
    title: "Comment ca marche",
    subtitle: "Un crédit aussi individuel que vous",
    heroText: "Cashare vous permet de realiser vos reves grace au crowdlending - des credits jusqu'a CHF 1 million sans banque traditionnelle.",
    advantages: [
      { title: "Pionnier FinTech", description: "La plateforme suisse innovante de crowdlending depuis 2008" },
      { title: "Taux attractifs", description: "Interets a partir de 3.9% grace au modele peer-to-peer direct" },
      { title: "Traitement rapide", description: "Des processus automatises permettent un versement rapide" },
    ],
    products: {
      title: "Nos solutions de financement",
      items: [
        { title: "Crédit privé", description: "Prets personnels pour particuliers jusqu'a CHF 250'000", href: "/fr/comment-ca-marche/credit-privé", icon: "user" },
        { title: "Crédit PME", description: "Credits commerciaux pour petites et moyennes entreprises", href: "/fr/comment-ca-marche/pme", icon: "building" },
        { title: "Hypotheque", description: "Financement immobilier a des conditions attractives", href: "/fr/comment-ca-marche/hypotheque", icon: "home" },
      ],
    },
    process: {
      title: "Le processus en 3 etapes",
      steps: [
        { step: "1", title: "Demande & Verification", description: "Soumettez votre demande de crédit en ligne. Nous verifions automatiquement vos informations." },
        { step: "2", title: "Financement", description: "Une fois approuve, votre projet est presente aux investisseurs et finance." },
        { step: "3", title: "Versement", description: "Le montant du crédit est transfere electroniquement sur votre compte bancaire." },
      ],
    },
    stats: {
      title: "Plus de 60'000 particuliers et entreprises nous font confiance",
      timeline: "Env. 10 jours de la demande au versement",
    },
    requirements: {
      title: "Conditions",
      items: [
        "Age minimum 18 ans",
        "Residence en Suisse ou au Liechtenstein",
        "Compte bancaire suisse",
        "Emploi permanent ou revenu regulier",
        "Pas de poursuites ou actes de defaut de biens",
      ],
    },
    cta: {
      title: "Pret a commencer?",
      button: { label: "Demander un credit", href: "/fr/demander-un-credit" },
    },
    learnMore: "En savoir plus",
  },
};

export function HowItWorks({ locale }: HowItWorksProps) {
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
                <div class="benefits-grid__icon">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
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
            {t.products.items.map((product, index) => (
              <a key={index} href={product.href} class="solution-card">
                <div class="solution-card__icon">
                  {product.icon === "user" && (
                    <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                    </svg>
                  )}
                  {product.icon === "building" && (
                    <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                    </svg>
                  )}
                  {product.icon === "home" && (
                    <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
                    </svg>
                  )}
                </div>
                <h3 class="solution-card__title">{product.title}</h3>
                <p class="solution-card__desc">{product.description}</p>
                <span class="solution-card__link">
                  {t.learnMore}
                  <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24" style="margin-left: 4px;">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </a>
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
          <p class="hiw-timeline">{t.stats.timeline}</p>
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
          <p class="subpage-cta__text">{t.stats.title}</p>
          <h2 class="subpage-cta__title">{t.cta.title}</h2>
          <a href={t.cta.button.href} class="subpage-cta__button">
            {t.cta.button.label}
          </a>
        </div>
      </section>
    </>
  );
}
