import type { Locale } from "../../lib/i18n/index.ts";

interface HowItWorksPrivateProps {
  locale: Locale;
}

const content = {
  de: {
    title: "Privatkredit",
    subtitle: "So funktioniert Ihr personlicher Kredit",
    heroText: "Personliche Kredite bis CHF 250'000 - direkt von Anlegern finanziert, ohne Bank.",
    advantages: [
      { title: "Tiefe Zinsen", description: "Ab 3.9% dank direktem Peer-to-Peer-Lending ohne Bankmarge" },
      { title: "Pionier-Status", description: "Erste innovative Crowdlending-Plattform der Schweiz" },
      { title: "Schnelle Abwicklung", description: "Vollautomatisierte Prozesse für schnelle Auszahlung" },
    ],
    loanTypes: {
      title: "Unsere Kreditarten",
      items: [
        { title: "Blankokredit", description: "Personlicher Kredit ohne Sicherheiten" },
        { title: "Kredit mit Hypothek", description: "Kredit mit Immobilie als Sicherheit" },
        { title: "Kredit mit Burgschaft", description: "Kredit mit personlicher Garantie" },
      ],
    },
    process: {
      title: "Der Ablauf in 3 Schritten",
      steps: [
        { step: "1", title: "Antrag & Prufung", description: "Stellen Sie online Ihren Kreditantrag. Die Plattform fuhrt automatisierte Prufungen durch." },
        { step: "2", title: "Investoren-Review & Finanzierung", description: "Genehmigte Antrage werden der Anleger-Community zur Finanzierung prasentiert." },
        { step: "3", title: "Kreditauszahlung", description: "Die Kreditsumme wird elektronisch auf Ihr Bankkonto uberwiesen." },
      ],
      timeline: "Ca. 10 Tage vom Antrag bis zur Auszahlung",
    },
    requirements: {
      title: "Voraussetzungen",
      items: [
        "Mindestalter 18 Jahre",
        "Gultige CH- oder LI-Aufenthaltsbewilligung",
        "Schweizer Bankkonto erforderlich",
        "Feste Anstellung oder regelmassiges Einkommen",
        "Keine offenen Betreibungen oder Verlustscheine",
      ],
    },
    fees: {
      title: "Gebuhren & Konditionen",
      items: [
        "Plattformgebuhr wird direkt vom Kreditbetrag abgezogen",
        "Zinsen laufen ab dem Auszahlungsdatum",
        "Erste Zahlung nach Erhalt der Kreditsumme fallig",
      ],
    },
    stats: "Uber 60'000 Privatpersonen und Unternehmen bedient",
    cta: {
      title: "Jetzt Privatkredit beantragen",
      button: { label: "Kredit beantragen", href: "/kredit-beantragen/privatkredit" },
    },
  },
  en: {
    title: "Private Loans",
    subtitle: "How your personal loan works",
    heroText: "Personal loans up to CHF 250,000 - financed directly by investors, without a bank.",
    advantages: [
      { title: "Low Interest", description: "From 3.9% thanks to direct peer-to-peer lending without bank margins" },
      { title: "Pioneer Status", description: "Switzerland's first innovative crowdlending platform" },
      { title: "Fast Processing", description: "Fully automated processes for quick disbursement" },
    ],
    loanTypes: {
      title: "Our Loan Types",
      items: [
        { title: "Blank Loan", description: "Personal loan without collateral" },
        { title: "Mortgage-backed Loan", description: "Loan with real estate as security" },
        { title: "Guaranteed Loan", description: "Loan with personal guarantee" },
      ],
    },
    process: {
      title: "The Process in 3 Steps",
      steps: [
        { step: "1", title: "Application & Review", description: "Submit your loan application online. The platform conducts automated verification checks." },
        { step: "2", title: "Investor Review & Funding", description: "Approved applications are presented to the investor community for funding." },
        { step: "3", title: "Loan Disbursement", description: "The loan amount is electronically transferred to your bank account." },
      ],
      timeline: "Approx. 10 days from application to funding",
    },
    requirements: {
      title: "Requirements",
      items: [
        "Minimum age 18 years",
        "Valid CH or LI residence permit required",
        "Swiss bank account necessary",
        "Permanent employment or regular income",
        "No open debt enforcement or loss certificates",
      ],
    },
    fees: {
      title: "Fees & Terms",
      items: [
        "Platform fee deducted directly from loan amount",
        "Interest accrues from disbursement date",
        "First payment due after receiving funds",
      ],
    },
    stats: "Over 60,000 individuals and businesses served",
    cta: {
      title: "Apply for a private loan now",
      button: { label: "Apply for loan", href: "/en/apply-for-credit/personal-loan" },
    },
  },
  fr: {
    title: "Crédit privé",
    subtitle: "Comment fonctionne votre crédit personnel",
    heroText: "Credits personnels jusqu'a CHF 250'000 - finances directement par des investisseurs, sans banque.",
    advantages: [
      { title: "Taux bas", description: "A partir de 3.9% grace au pret peer-to-peer direct sans marge bancaire" },
      { title: "Statut de pionnier", description: "Premiere plateforme suisse innovante de crowdlending" },
      { title: "Traitement rapide", description: "Processus entierement automatises pour un versement rapide" },
    ],
    loanTypes: {
      title: "Nos types de credit",
      items: [
        { title: "Crédit en blanc", description: "Crédit personnel sans garantie" },
        { title: "Crédit hypothecaire", description: "Crédit avec bien immobilier en garantie" },
        { title: "Crédit avec caution", description: "Crédit avec garantie personnelle" },
      ],
    },
    process: {
      title: "Le processus en 3 etapes",
      steps: [
        { step: "1", title: "Demande & Verification", description: "Soumettez votre demande de crédit en ligne. La plateforme effectue des verifications automatisees." },
        { step: "2", title: "Examen des investisseurs & Financement", description: "Les demandes approuvees sont presentees a la communaute d'investisseurs pour financement." },
        { step: "3", title: "Versement du credit", description: "Le montant du crédit est transfere electroniquement sur votre compte bancaire." },
      ],
      timeline: "Env. 10 jours de la demande au versement",
    },
    requirements: {
      title: "Conditions",
      items: [
        "Age minimum 18 ans",
        "Permis de sejour CH ou LI valide requis",
        "Compte bancaire suisse necessaire",
        "Emploi permanent ou revenu regulier",
        "Pas de poursuites ou actes de defaut de biens",
      ],
    },
    fees: {
      title: "Frais & Conditions",
      items: [
        "Frais de plateforme deduits directement du montant du credit",
        "Les interets courent a partir de la date de versement",
        "Premier paiement du apres reception des fonds",
      ],
    },
    stats: "Plus de 60'000 particuliers et entreprises servis",
    cta: {
      title: "Demandez un crédit privé maintenant",
      button: { label: "Demander un credit", href: "/fr/demander-un-credit/credit-privé" },
    },
  },
};

export function HowItWorksPrivate({ locale }: HowItWorksPrivateProps) {
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

      {/* Requirements & Fees */}
      <section class="subpage-section subpage-section--gray">
        <div class="subpage-section__container subpage-section__container--wide">
          <div class="two-col">
            <div class="two-col__item">
              <h2 class="two-col__title">{t.requirements.title}</h2>
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
            <div class="two-col__item">
              <h2 class="two-col__title">{t.fees.title}</h2>
              <ul class="check-list">
                {t.fees.items.map((item, index) => (
                  <li key={index} class="check-list__item">
                    <svg class="check-list__icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span class="check-list__text">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
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
