import type { Locale } from "../../lib/i18n/index.ts";

interface InstitutionalInvestorsProps {
  locale: Locale;
}

const content = {
  de: {
    backLink: { label: "Zurück zur Übersicht", href: "/investieren" },
    title: "Institutionelle Investoren",
    subtitle: "Professionelle Private Debt Lösungen für Banken, Pensionskassen und Vermogensverwalter.",
    cta: { label: "Kontakt aufnehmen", href: "mailto:institutional@cashare.ch" },
    intro: {
      title: "Ihr Partner für Private Debt",
      text: "Cashare bietet institutionellen Investoren Zugang zu einem diversifizierten Portfolio von Schweizer Privat- und KMU-Krediten. Mit über 15 Jahren Erfahrung und einem verwalteten Volumen von über CHF 2.5 Mrd. sind wir Ihr verlasslicher Partner für alternative Anlagen.",
    },
    solutions: {
      title: "Unsere Lösungen",
      items: [
        {
          title: "Direktinvestition",
          desc: "Investieren Sie direkt in einzelne Kreditprojekte mit voller Kontrolle über Ihre Allokation.",
          features: ["Individuelle Projektauswahl", "Transparente Konditionen", "Detaillierte Reporting"],
        },
        {
          title: "Managed Account",
          desc: "Uberlassen Sie die Selektion unseren Experten nach Ihren Vorgaben.",
          features: ["Professionelles Management", "Massgeschneiderte Strategie", "Regelmasslge Reviews"],
        },
        {
          title: "White-Label-Losung",
          desc: "Bieten Sie Ihren Kunden Private Debt unter Ihrer eigenen Marke an.",
          features: ["Vollstandiges Branding", "API-Integration", "Dedizierter Support"],
        },
      ],
    },
    benefits: {
      title: "Vorteile für institutionelle Anleger",
      items: [
        { title: "Attraktive Renditen", desc: "Uberdurchschnittliche risikoadjustierte Returns im Vergleich zu traditionellen Fixed-Income-Anlagen." },
        { title: "Niedrige Korrelation", desc: "Geringe Korrelation zu offentlichen Markten für echte Portfoliodiversifikation." },
        { title: "Stabile Cashflows", desc: "Regelmasslge, planbare Zahlungsstrome durch amortisierende Kredite." },
        { title: "ESG-Integration", desc: "Nachhaltigkeitskriterien in der Kreditvergabe und im Reporting." },
      ],
    },
    process: {
      title: "Unser Prozess",
      steps: [
        { title: "Beratungsgesprach", desc: "Wir analysieren Ihre Anforderungen und Anlageziele." },
        { title: "Massgeschneiderte Strategie", desc: "Entwicklung einer individuellen Investmentstrategie." },
        { title: "Implementierung", desc: "Effiziente Umsetzung mit modernem Onboarding." },
        { title: "Laufendes Reporting", desc: "Transparente Berichterstattung und regelmasslge Reviews." },
      ],
    },
    compliance: {
      title: "Regulierung & Compliance",
      items: ["FINMA-regulierte Plattform", "Schweizer Datenschutzstandards", "Jahrliche Audits", "AML/KYC-konform"],
    },
    contact: {
      title: "Kontaktieren Sie uns",
      text: "Unser Institutional Sales Team steht Ihnen für ein personliches Gesprach zur Verfugung.",
      email: "institutional@cashare.ch",
      phone: "+41 41 544 61 70",
    },
  },
  en: {
    backLink: { label: "Back to overview", href: "/en/invest" },
    title: "Institutional Investors",
    subtitle: "Professional Private Debt solutions for banks, pension funds, and asset managers.",
    cta: { label: "Contact us", href: "mailto:institutional@cashare.ch" },
    intro: {
      title: "Your Partner for Private Debt",
      text: "Cashare offers institutional investors access to a diversified portfolio of Swiss private and SME loans. With over 15 years of experience and assets under management exceeding CHF 2.5 billion, we are your reliable partner for alternative investments.",
    },
    solutions: {
      title: "Our Solutions",
      items: [
        {
          title: "Direct Investment",
          desc: "Invest directly in individual loan projects with full control over your allocation.",
          features: ["Individual project selection", "Transparent terms", "Detailed reporting"],
        },
        {
          title: "Managed Account",
          desc: "Let our experts handle selection according to your specifications.",
          features: ["Professional management", "Customized strategy", "Regular reviews"],
        },
        {
          title: "White-Label Solution",
          desc: "Offer Private Debt to your clients under your own brand.",
          features: ["Complete branding", "API integration", "Dedicated support"],
        },
      ],
    },
    benefits: {
      title: "Benefits for Institutional Investors",
      items: [
        { title: "Attractive Returns", desc: "Above-average risk-adjusted returns compared to traditional fixed-income investments." },
        { title: "Low Correlation", desc: "Low correlation to public markets for genuine portfolio diversification." },
        { title: "Stable Cash Flows", desc: "Regular, predictable payment streams from amortizing loans." },
        { title: "ESG Integration", desc: "Sustainability criteria in lending and reporting." },
      ],
    },
    process: {
      title: "Our Process",
      steps: [
        { title: "Consultation", desc: "We analyze your requirements and investment objectives." },
        { title: "Customized Strategy", desc: "Development of an individual investment strategy." },
        { title: "Implementation", desc: "Efficient execution with modern onboarding." },
        { title: "Ongoing Reporting", desc: "Transparent reporting and regular reviews." },
      ],
    },
    compliance: {
      title: "Régulation & Compliance",
      items: ["FINMA-regulated platform", "Swiss data protection standards", "Annual audits", "AML/KYC compliant"],
    },
    contact: {
      title: "Contact Us",
      text: "Our Institutional Sales Team is available for a personal consultation.",
      email: "institutional@cashare.ch",
      phone: "+41 41 544 61 70",
    },
  },
  fr: {
    backLink: { label: "Retour a l'apercu", href: "/fr/investir" },
    title: "Investisseurs Institutionnels",
    subtitle: "Solutions professionnelles de Private Debt pour les banques, caisses de pension et gestionnaires de fortune.",
    cta: { label: "Nous contacter", href: "mailto:institutional@cashare.ch" },
    intro: {
      title: "Votre partenaire pour le Private Debt",
      text: "Cashare offre aux investisseurs institutionnels l'acces a un portefeuille diversifie de credits privés et PME suisses. Avec plus de 15 ans d'experience et un volume gere de plus de CHF 2,5 milliards, nous sommes votre partenaire fiable pour les investissements alternatifs.",
    },
    solutions: {
      title: "Nos solutions",
      items: [
        {
          title: "Investissement direct",
          desc: "Investissez directement dans des projets de crédit individuels avec un controle total sur votre allocation.",
          features: ["Selection de projets individuelle", "Conditions transparentes", "Reporting detaille"],
        },
        {
          title: "Compte gere",
          desc: "Laissez nos experts gerer la selection selon vos specifications.",
          features: ["Gestion professionnelle", "Strategie sur mesure", "Revues regulieres"],
        },
        {
          title: "Solution en marque blanche",
          desc: "Offrez le Private Debt a vos clients sous votre propre marque.",
          features: ["Branding complet", "Integration API", "Support dedie"],
        },
      ],
    },
    benefits: {
      title: "Avantages pour les investisseurs institutionnels",
      items: [
        { title: "Rendements attractifs", desc: "Rendements ajustes au risque superieurs a la moyenne par rapport aux investissements a revenu fixe traditionnels." },
        { title: "Faible correlation", desc: "Faible correlation avec les marches publics pour une veritable diversification de portefeuille." },
        { title: "Flux de tresorerie stables", desc: "Flux de paiement reguliers et previsibles grace aux credits amortissables." },
        { title: "Integration ESG", desc: "Criteres de durabilite dans l'octroi de credits et le reporting." },
      ],
    },
    process: {
      title: "Notre processus",
      steps: [
        { title: "Consultation", desc: "Nous analysons vos besoins et objectifs d'investissement." },
        { title: "Strategie sur mesure", desc: "Developpement d'une strategie d'investissement individuelle." },
        { title: "Mise en oeuvre", desc: "Execution efficace avec un onboarding moderne." },
        { title: "Reporting continu", desc: "Rapports transparents et revues regulieres." },
      ],
    },
    compliance: {
      title: "Régulation & Conformite",
      items: ["Plateforme regulee par la FINMA", "Standards suisses de protection des donnees", "Audits annuels", "Conforme AML/KYC"],
    },
    contact: {
      title: "Contactez-nous",
      text: "Notre equipe de ventes institutionnelles est disponible pour une consultation personnelle.",
      email: "institutional@cashare.ch",
      phone: "+41 41 544 61 70",
    },
  },
};

export function InstitutionalInvestors({ locale }: InstitutionalInvestorsProps) {
  const t = content[locale];

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
          <a href={t.cta.href} class="subpage-cta__button" style="margin-top: 32px;">
            {t.cta.label}
          </a>
        </div>
      </section>

      <section class="subpage-section subpage-section--white">
        <div class="subpage-section__container">
          <div class="content-block" style="text-align: center;">
            <h2 class="content-block__title" style="font-size: 2rem;">{t.intro.title}</h2>
            <p class="content-block__text" style="max-width: 800px; margin: 0 auto;">{t.intro.text}</p>
          </div>
        </div>
      </section>

      <section class="subpage-section subpage-section--gray">
        <div class="subpage-section__container subpage-section__container--wide">
          <div class="subpage-section__header">
            <h2 class="subpage-section__title">{t.solutions.title}</h2>
          </div>
          <div class="solution-grid">
            {t.solutions.items.map((solution, i) => (
              <div key={i} class="solution-card">
                <h3 class="solution-card__title">{solution.title}</h3>
                <p class="solution-card__desc">{solution.desc}</p>
                <div class="check-list">
                  {solution.features.map((feature, j) => (
                    <div key={j} class="check-list__item">
                      <svg class="check-list__icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span class="check-list__text">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section class="subpage-section subpage-section--white">
        <div class="subpage-section__container subpage-section__container--wide">
          <div class="subpage-section__header">
            <h2 class="subpage-section__title">{t.benefits.title}</h2>
          </div>
          <div class="benefit-row">
            {t.benefits.items.map((benefit, i) => (
              <div key={i} class="benefit-row__item">
                <div class="benefit-row__icon">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div class="benefit-row__content">
                  <h3 class="benefit-row__title">{benefit.title}</h3>
                  <p class="benefit-row__desc">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section class="subpage-section subpage-section--dark">
        <div class="subpage-section__container subpage-section__container--wide">
          <div class="subpage-section__header">
            <h2 class="subpage-section__title">{t.process.title}</h2>
          </div>
          <div class="benefits-grid">
            {t.process.steps.map((step, i) => (
              <div key={i} class="benefits-grid__item">
                <div class="benefits-grid__icon">
                  <span style="font-size: 1.5rem; font-weight: 700;">{i + 1}</span>
                </div>
                <h3 class="benefits-grid__title" style="color: white;">{step.title}</h3>
                <p class="benefits-grid__desc" style="color: rgba(255,255,255,0.8);">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section class="subpage-section subpage-section--gray">
        <div class="subpage-section__container">
          <div class="subpage-section__header">
            <h2 class="subpage-section__title">{t.compliance.title}</h2>
          </div>
          <div class="compliance-list">
            {t.compliance.items.map((item, i) => (
              <div key={i} class="compliance-list__item">
                <svg class="compliance-list__icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section class="subpage-section subpage-section--white">
        <div class="subpage-section__container">
          <div class="contact-section">
            <h2 class="contact-section__title">{t.contact.title}</h2>
            <p class="contact-section__text">{t.contact.text}</p>
            <div class="contact-section__buttons">
              <a href={`mailto:${t.contact.email}`} class="contact-section__btn contact-section__btn--primary">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                {t.contact.email}
              </a>
              <a href={`tel:${t.contact.phone}`} class="contact-section__btn contact-section__btn--secondary">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {t.contact.phone}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
