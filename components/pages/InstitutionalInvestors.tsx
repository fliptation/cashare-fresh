import type { Locale } from "../../lib/i18n/index.ts";
import { Projects } from "../Projects.tsx";
import { ButtonArrow } from "../ButtonArrow.tsx";

interface InstitutionalInvestorsProps {
  locale: Locale;
}

const content = {
  de: {
    backLink: { label: "Zurück zur Übersicht", href: "/investieren" },
    badge: "Institutionelle Anleger",
    title: "Erfolgreich und professionell in Kredite investieren!",
    subtitle:
      "Investitionen in Kredite als ideale Ergänzung zum Anlageportfolio.",
    cta: { label: "Jetzt investieren", href: "/werde-anleger/" },
    intro: {
      title: "Ihr Partner für Private Debt",
      text:
        "Cashare bietet institutionellen Investoren Zugang zu einem diversifizierten Portfolio von Schweizer Privat- und KMU-Krediten. Mit über 15 Jahren Erfahrung und einem verwalteten Volumen von über CHF 2.5 Mrd. sind wir Ihr verlasslicher Partner für alternative Anlagen.",
    },
    solutions: {
      title: "Unsere Lösungen",
      items: [
        {
          title: "Direktinvestition",
          desc:
            "Investieren Sie direkt in einzelne Kreditprojekte mit voller Kontrolle über Ihre Allokation.",
          features: [
            "Individuelle Projektauswahl",
            "Transparente Konditionen",
            "Detaillierte Reporting",
          ],
        },
        {
          title: "Managed Account",
          desc:
            "Uberlassen Sie die Selektion unseren Experten nach Ihren Vorgaben.",
          features: [
            "Professionelles Management",
            "Massgeschneiderte Strategie",
            "Regelmasslge Reviews",
          ],
        },
        {
          title: "White-Label-Losung",
          desc:
            "Bieten Sie Ihren Kunden Private Debt unter Ihrer eigenen Marke an.",
          features: [
            "Vollstandiges Branding",
            "API-Integration",
            "Dedizierter Support",
          ],
        },
      ],
    },
    benefits: {
      title: "Vorteile für institutionelle Anleger",
      items: [
        {
          title: "Attraktive Renditen",
          desc:
            "Uberdurchschnittliche risikoadjustierte Returns im Vergleich zu traditionellen Fixed-Income-Anlagen.",
        },
        {
          title: "Niedrige Korrelation",
          desc:
            "Geringe Korrelation zu offentlichen Markten für echte Portfoliodiversifikation.",
        },
        {
          title: "Stabile Cashflows",
          desc:
            "Regelmasslge, planbare Zahlungsstrome durch amortisierende Kredite.",
        },
        {
          title: "ESG-Integration",
          desc:
            "Nachhaltigkeitskriterien in der Kreditvergabe und im Reporting.",
        },
      ],
    },
    process: {
      title: "Unser Prozess",
      steps: [
        {
          title: "Beratungsgesprach",
          desc: "Wir analysieren Ihre Anforderungen und Anlageziele.",
        },
        {
          title: "Massgeschneiderte Strategie",
          desc: "Entwicklung einer individuellen Investmentstrategie.",
        },
        {
          title: "Implementierung",
          desc: "Effiziente Umsetzung mit modernem Onboarding.",
        },
        {
          title: "Laufendes Reporting",
          desc: "Transparente Berichterstattung und regelmasslge Reviews.",
        },
      ],
    },
    compliance: {
      title: "Regulierung & Compliance",
      subtitle: "Höchste Sicherheitsstandards für Ihre Investitionen",
      items: [
        {
          title: "FINMA-reguliert",
          desc:
            "Als lizenzierter Finanzintermediär unterliegen wir der Aufsicht der Eidgenössischen Finanzmarktaufsicht.",
        },
        {
          title: "Datenschutz",
          desc:
            "Ihre Daten werden nach Schweizer Standards geschützt und in der Schweiz gehostet.",
        },
        {
          title: "Jährliche Audits",
          desc:
            "Unabhängige Prüfung durch PricewaterhouseCoopers garantiert Transparenz.",
        },
        {
          title: "AML/KYC-konform",
          desc:
            "Strenge Identitätsprüfung und Geldwäschereibekämpfung nach GwG.",
        },
      ],
    },
    contact: {
      title: "Kontaktieren Sie uns",
      text:
        "Unser Institutional Sales Team steht Ihnen für ein personliches Gesprach zur Verfugung.",
      email: "institutional@cashare.ch",
      phone: "+41 41 544 61 70",
    },
    ctaSection: {
      title: "Bereit zu investieren?",
      buttonLabel: "Jetzt Anleger werden",
      href: "/werde-anleger/",
    },
  },
  en: {
    backLink: { label: "Back to overview", href: "/en/invest" },
    badge: "Institutional Investors",
    title: "Invest successfully and professionally in loans!",
    subtitle:
      "Professional Private Debt solutions for banks, pension funds, and asset managers.",
    cta: { label: "Contact us", href: "mailto:institutional@cashare.ch" },
    intro: {
      title: "Your Partner for Private Debt",
      text:
        "Cashare offers institutional investors access to a diversified portfolio of Swiss private and SME loans. With over 15 years of experience and assets under management exceeding CHF 2.5 billion, we are your reliable partner for alternative investments.",
    },
    solutions: {
      title: "Our Solutions",
      items: [
        {
          title: "Direct Investment",
          desc:
            "Invest directly in individual loan projects with full control over your allocation.",
          features: [
            "Individual project selection",
            "Transparent terms",
            "Detailed reporting",
          ],
        },
        {
          title: "Managed Account",
          desc:
            "Let our experts handle selection according to your specifications.",
          features: [
            "Professional management",
            "Customized strategy",
            "Regular reviews",
          ],
        },
        {
          title: "White-Label Solution",
          desc: "Offer Private Debt to your clients under your own brand.",
          features: [
            "Complete branding",
            "API integration",
            "Dedicated support",
          ],
        },
      ],
    },
    benefits: {
      title: "Benefits for Institutional Investors",
      items: [
        {
          title: "Attractive Returns",
          desc:
            "Above-average risk-adjusted returns compared to traditional fixed-income investments.",
        },
        {
          title: "Low Correlation",
          desc:
            "Low correlation to public markets for genuine portfolio diversification.",
        },
        {
          title: "Stable Cash Flows",
          desc: "Regular, predictable payment streams from amortizing loans.",
        },
        {
          title: "ESG Integration",
          desc: "Sustainability criteria in lending and reporting.",
        },
      ],
    },
    process: {
      title: "Our Process",
      steps: [
        {
          title: "Consultation",
          desc: "We analyze your requirements and investment objectives.",
        },
        {
          title: "Customized Strategy",
          desc: "Development of an individual investment strategy.",
        },
        {
          title: "Implementation",
          desc: "Efficient execution with modern onboarding.",
        },
        {
          title: "Ongoing Reporting",
          desc: "Transparent reporting and regular reviews.",
        },
      ],
    },
    compliance: {
      title: "Regulation & Compliance",
      subtitle: "Highest security standards for your investments",
      items: [
        {
          title: "FINMA-regulated",
          desc:
            "As a licensed financial intermediary, we are supervised by the Swiss Financial Market Supervisory Authority.",
        },
        {
          title: "Data Protection",
          desc:
            "Your data is protected according to Swiss standards and hosted in Switzerland.",
        },
        {
          title: "Annual Audits",
          desc:
            "Independent audits by PricewaterhouseCoopers guarantee transparency.",
        },
        {
          title: "AML/KYC Compliant",
          desc:
            "Strict identity verification and anti-money laundering according to AMLA.",
        },
      ],
    },
    contact: {
      title: "Contact Us",
      text:
        "Our Institutional Sales Team is available for a personal consultation.",
      email: "institutional@cashare.ch",
      phone: "+41 41 544 61 70",
    },
    ctaSection: {
      title: "Ready to invest?",
      buttonLabel: "Become an investor",
      href: "/en/become-investor/",
    },
  },
  fr: {
    backLink: { label: "Retour a l'apercu", href: "/fr/investir" },
    badge: "Investisseurs Institutionnels",
    title: "Investissez avec succès et professionnellement dans les crédits!",
    subtitle:
      "Solutions professionnelles de Private Debt pour les banques, caisses de pension et gestionnaires de fortune.",
    cta: { label: "Nous contacter", href: "mailto:institutional@cashare.ch" },
    intro: {
      title: "Votre partenaire pour le Private Debt",
      text:
        "Cashare offre aux investisseurs institutionnels l'acces a un portefeuille diversifie de credits privés et PME suisses. Avec plus de 15 ans d'experience et un volume gere de plus de CHF 2,5 milliards, nous sommes votre partenaire fiable pour les investissements alternatifs.",
    },
    solutions: {
      title: "Nos solutions",
      items: [
        {
          title: "Investissement direct",
          desc:
            "Investissez directement dans des projets de crédit individuels avec un controle total sur votre allocation.",
          features: [
            "Selection de projets individuelle",
            "Conditions transparentes",
            "Reporting detaille",
          ],
        },
        {
          title: "Compte gere",
          desc:
            "Laissez nos experts gerer la selection selon vos specifications.",
          features: [
            "Gestion professionnelle",
            "Strategie sur mesure",
            "Revues regulieres",
          ],
        },
        {
          title: "Solution en marque blanche",
          desc:
            "Offrez le Private Debt a vos clients sous votre propre marque.",
          features: ["Branding complet", "Integration API", "Support dedie"],
        },
      ],
    },
    benefits: {
      title: "Avantages pour les investisseurs institutionnels",
      items: [
        {
          title: "Rendements attractifs",
          desc:
            "Rendements ajustes au risque superieurs a la moyenne par rapport aux investissements a revenu fixe traditionnels.",
        },
        {
          title: "Faible correlation",
          desc:
            "Faible correlation avec les marches publics pour une veritable diversification de portefeuille.",
        },
        {
          title: "Flux de tresorerie stables",
          desc:
            "Flux de paiement reguliers et previsibles grace aux credits amortissables.",
        },
        {
          title: "Integration ESG",
          desc:
            "Criteres de durabilite dans l'octroi de credits et le reporting.",
        },
      ],
    },
    process: {
      title: "Notre processus",
      steps: [
        {
          title: "Consultation",
          desc: "Nous analysons vos besoins et objectifs d'investissement.",
        },
        {
          title: "Strategie sur mesure",
          desc: "Developpement d'une strategie d'investissement individuelle.",
        },
        {
          title: "Mise en oeuvre",
          desc: "Execution efficace avec un onboarding moderne.",
        },
        {
          title: "Reporting continu",
          desc: "Rapports transparents et revues regulieres.",
        },
      ],
    },
    compliance: {
      title: "Régulation & Conformité",
      subtitle: "Les plus hauts standards de sécurité pour vos investissements",
      items: [
        {
          title: "Régulé FINMA",
          desc:
            "En tant qu'intermédiaire financier agréé, nous sommes supervisés par l'Autorité fédérale de surveillance des marchés financiers.",
        },
        {
          title: "Protection des données",
          desc:
            "Vos données sont protégées selon les standards suisses et hébergées en Suisse.",
        },
        {
          title: "Audits annuels",
          desc:
            "Des audits indépendants par PricewaterhouseCoopers garantissent la transparence.",
        },
        {
          title: "Conforme AML/KYC",
          desc:
            "Vérification d'identité stricte et lutte contre le blanchiment selon la LBA.",
        },
      ],
    },
    contact: {
      title: "Contactez-nous",
      text:
        "Notre equipe de ventes institutionnelles est disponible pour une consultation personnelle.",
      email: "institutional@cashare.ch",
      phone: "+41 41 544 61 70",
    },
    ctaSection: {
      title: "Prêt à investir?",
      buttonLabel: "Devenir investisseur",
      href: "/fr/devenir-investisseur/",
    },
  },
};

const solutionIcons = [
  `<svg fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" /></svg>`,
  `<svg fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>`,
  `<svg fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" /></svg>`,
];

const benefitIcons = [
  `<svg fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>`,
  `<svg fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>`,
  `<svg fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>`,
  `<svg fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>`,
];

const complianceIcons = [
  // FINMA - Shield with checkmark
  `<svg fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg>`,
  // Data Protection - Lock
  `<svg fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" /></svg>`,
  // Audits - Clipboard check
  `<svg fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>`,
  // AML/KYC - User verification
  `<svg fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" /></svg>`,
];

export function InstitutionalInvestors(
  { locale }: InstitutionalInvestorsProps,
) {
  const t = content[locale];

  return (
    <>
      {/* Hero */}
      <section class="invest-hero">
        <div class="invest-hero__container">
          <div class="invest-hero__content">
            <span class="invest-hero__label">{t.badge}</span>
            <h1 class="invest-hero__title">{t.title}</h1>
            <p class="invest-hero__subtitle">{t.subtitle}</p>
            <div class="invest-hero__actions">
              <a href={t.cta.href} class="btn btn--dark btn--with-arrow">
                {t.cta.label}
                <ButtonArrow />
              </a>
            </div>
          </div>
          <div class="invest-hero__visual">
            <div class="invest-hero__stats-card">
              <div class="invest-hero__stats-title">{t.intro.title}</div>
              <p style="color: var(--color-gray); line-height: 1.7; font-size: 0.9375rem;">
                {t.intro.text}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section class="invest-types">
        <div class="invest-types__container">
          <div class="invest-benefits__header" style="margin-bottom: 48px;">
            <h2 class="invest-benefits__title">{t.solutions.title}</h2>
          </div>
          <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px;">
            {t.solutions.items.map((solution, i) => (
              <div key={i} class="invest-type-card" style="padding: 36px;">
                <div
                  class="invest-type-card__icon invest-type-card__icon--private"
                  style="width: 56px; height: 56px; margin-bottom: 20px;"
                  dangerouslySetInnerHTML={{ __html: solutionIcons[i] }}
                />
                <h3
                  class="invest-type-card__title"
                  style="font-size: 1.25rem; margin-bottom: 12px;"
                >
                  {solution.title}
                </h3>
                <p class="invest-type-card__desc" style="margin-bottom: 20px;">
                  {solution.desc}
                </p>
                <div style="display: flex; flex-direction: column; gap: 8px;">
                  {solution.features.map((feature, j) => (
                    <div
                      key={j}
                      style="display: flex; align-items: center; gap: 8px; font-size: 0.875rem; color: var(--color-gray);"
                    >
                      <svg
                        width="16"
                        height="16"
                        fill="none"
                        stroke="#22c55e"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section class="invest-benefits">
        <div class="invest-benefits__container">
          <div class="invest-benefits__header">
            <h2 class="invest-benefits__title">{t.benefits.title}</h2>
          </div>
          <div class="invest-benefits__grid">
            {t.benefits.items.map((benefit, i) => (
              <div key={i} class="invest-benefit">
                <div
                  class="invest-benefit__icon"
                  dangerouslySetInnerHTML={{ __html: benefitIcons[i] }}
                />
                <h3 class="invest-benefit__title">{benefit.title}</h3>
                <p class="invest-benefit__desc">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Projects */}
      <Projects locale={locale} />

      {/* Process Steps */}
      <section class="invest-steps">
        <div class="invest-steps__container">
          <div class="invest-steps__header">
            <h2 class="invest-steps__title">{t.process.title}</h2>
          </div>
          <div class="invest-steps__grid">
            {t.process.steps.map((step, i) => (
              <div key={i} class="invest-step">
                <div class="invest-step__number">{i + 1}</div>
                <h3 class="invest-step__title">{step.title}</h3>
                <p class="invest-step__desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance */}
      <section class="inst-compliance">
        <div class="inst-compliance__container">
          <div class="inst-compliance__header">
            <h2 class="inst-compliance__title">{t.compliance.title}</h2>
            <p class="inst-compliance__subtitle">{t.compliance.subtitle}</p>
          </div>
          <div class="inst-compliance__grid">
            {t.compliance.items.map((item, i) => (
              <div key={i} class="inst-compliance__card">
                <div
                  class="inst-compliance__icon"
                  dangerouslySetInnerHTML={{ __html: complianceIcons[i] }}
                />
                <h3 class="inst-compliance__card-title">{item.title}</h3>
                <p class="inst-compliance__card-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section class="invest-cta">
        <div class="invest-cta__container">
          <h2 class="invest-cta__title">{t.ctaSection.title}</h2>
          <a
            href={t.ctaSection.href}
            class="btn btn--dark btn--with-arrow"
          >
            {t.ctaSection.buttonLabel}
            <ButtonArrow />
          </a>
        </div>
      </section>
    </>
  );
}
