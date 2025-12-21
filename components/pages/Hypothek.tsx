import type { Locale } from "../../lib/i18n/index.ts";

interface HypothekProps {
  locale: Locale;
}

const content = {
  de: {
    hero: {
      badge: "Hypothek",
      title: "Immobilienkredite für Ihre Bedürfnisse",
      subtitle:
        "Wir unterstützen Sie bei der Finanzierung von Wohneigentum und Renditeobjekten.",
      cta: "Jetzt beantragen",
    },
    products: {
      title: "Unsere Hypothekarprodukte",
      items: [
        {
          icon: "home",
          title: "Standard Hypothek",
          description:
            "Klassische Hypothekarfinanzierung bis 80% des Immobilienwerts mit attraktiven Zinsen und flexiblen Laufzeiten.",
          features: ["Bis 80% Belehnung", "Attraktive Zinsen", "Flexible Laufzeiten"],
        },
        {
          icon: "layers",
          title: "Mezzanine-Finanzierung",
          description:
            "Für professionelle Investoren und Entwickler; nachrangige Darlehensstrukturen zur Ergänzung von Eigenkapital für grössere Immobilienprojekte.",
          features: ["Für Profis", "Erhöhte Eigenkapitalrendite", "Grossprojekte"],
        },
        {
          icon: "renovation",
          title: "Renovationskredit",
          description:
            "Spezialkredit für Immobilienrenovierungen und Umbauten; flexibel und schnell verfügbar zur Wertsteigerung Ihrer Liegenschaft.",
          features: ["Schnell verfügbar", "Flexibel", "Wertsteigerung"],
        },
        {
          icon: "building",
          title: "Hypothek für KMU",
          description:
            "Massgeschneiderte Lösungen für KMU beim Erwerb oder Umbau von Gewerbeimmobilien; erfordert angemessene Eigenkapitalquote.",
          features: ["Für Unternehmen", "Gewerbeimmobilien", "Massgeschneidert"],
        },
      ],
    },
    howItWorks: {
      title: "So funktioniert's",
      steps: [
        {
          title: "Kreditantrag ausfüllen",
          description:
            "Füllen Sie den Online-Antrag schnell aus und erhalten Sie die detaillierten Unterlagen automatisch per E-Mail.",
        },
        {
          title: "Schnelle Überprüfung",
          description:
            "Schnelle und sichere Prüfung Ihres Antrags durch unser Expertenteam.",
        },
        {
          title: "Kontaktaufnahme",
          description:
            "Direkter Kontakt nach erfolgreicher Prüfung zur Besprechung Ihrer individuellen Lösung.",
        },
      ],
    },
    requirements: {
      title: "Voraussetzungen",
      items: [
        {
          label: "Maximale Belehnung",
          value: "80% des Immobilienmarktwerts",
        },
        {
          label: "Finanzielle Belastung",
          value: "Maximal 40% des Bruttoeinkommens",
        },
        {
          label: "Mindesthypothek",
          value: "CHF 250'000",
        },
      ],
    },
    advantages: {
      title: "Ihre Vorteile",
      items: [
        {
          title: "Kompetitive Zinsen",
          description: "Attraktive Konditionen dank direkter Vermittlung zwischen Kreditnehmern und Investoren.",
        },
        {
          title: "Individuelle Beratung",
          description: "Persönliche Betreuung durch erfahrene Immobilienfinanzierungs-Experten.",
        },
        {
          title: "Schnelle Abwicklung",
          description: "Effiziente digitale Prozesse für kurze Bearbeitungszeiten.",
        },
        {
          title: "Vielfältige Lösungen",
          description: "Massgeschneiderte Finanzierungen für verschiedene Immobilientypen und Bedürfnisse.",
        },
      ],
    },
    targetAudience: {
      title: "Für wen sind unsere Hypotheken geeignet?",
      items: [
        {
          icon: "user",
          title: "Privatpersonen",
          description: "Für den Kauf oder die Renovation Ihres Eigenheims.",
        },
        {
          icon: "investor",
          title: "Immobilieninvestoren",
          description: "Für den Erwerb und die Entwicklung von Renditeobjekten.",
        },
        {
          icon: "business",
          title: "Unternehmen",
          description: "Für den Kauf oder Umbau von Gewerbeimmobilien.",
        },
      ],
    },
    trust: {
      stats: [
        { value: "2008", label: "Gegründet" },
        { value: "60'000+", label: "Kunden" },
        { value: "CHF 2.5 Mrd.", label: "Geprüfte Kreditanträge" },
      ],
    },
    cta: {
      title: "Bereit für Ihre Immobilienfinanzierung?",
      subtitle:
        "Kontaktieren Sie uns für eine unverbindliche Beratung zu Ihrer Hypothek.",
      button: "Jetzt Hypothek beantragen",
    },
  },
  en: {
    hero: {
      badge: "Mortgage",
      title: "Real Estate Loans for Your Needs",
      subtitle:
        "We support you in financing residential property and investment properties.",
      cta: "Apply Now",
    },
    products: {
      title: "Our Mortgage Products",
      items: [
        {
          icon: "home",
          title: "Standard Mortgage",
          description:
            "Classic mortgage financing up to 80% of property value with attractive interest rates and flexible terms.",
          features: ["Up to 80% LTV", "Attractive rates", "Flexible terms"],
        },
        {
          icon: "layers",
          title: "Mezzanine Financing",
          description:
            "For professional investors and developers; subordinated loan structures complementing equity for larger real estate projects.",
          features: ["For professionals", "Enhanced ROE", "Large projects"],
        },
        {
          icon: "renovation",
          title: "Renovation Loan",
          description:
            "Special crédit for property renovations and remodeling; flexible and quickly available to increase property value.",
          features: ["Quickly available", "Flexible", "Value increase"],
        },
        {
          icon: "building",
          title: "SME Mortgage",
          description:
            "Tailored solutions for SMEs acquiring or renovating commercial properties; requires adequate equity ratio.",
          features: ["For businesses", "Commercial properties", "Tailored"],
        },
      ],
    },
    howItWorks: {
      title: "How It Works",
      steps: [
        {
          title: "Complete Application",
          description:
            "Fill out the online application quickly and receive detailed documents automatically via email.",
        },
        {
          title: "Quick Review",
          description:
            "Fast and secure review of your application by our expert team.",
        },
        {
          title: "Contact",
          description:
            "Direct contact after successful review to discuss your individual solution.",
        },
      ],
    },
    requirements: {
      title: "Requirements",
      items: [
        {
          label: "Maximum LTV",
          value: "80% of property market value",
        },
        {
          label: "Financial burden",
          value: "Maximum 40% of gross income",
        },
        {
          label: "Minimum mortgage",
          value: "CHF 250,000",
        },
      ],
    },
    advantages: {
      title: "Your Advantages",
      items: [
        {
          title: "Competitive Rates",
          description: "Attractive conditions through direct matching between borrowers and investors.",
        },
        {
          title: "Individual Advice",
          description: "Personal support from experienced real estate financing experts.",
        },
        {
          title: "Fast Processing",
          description: "Efficient digital processes for short processing times.",
        },
        {
          title: "Diverse Solutions",
          description: "Tailored financing for various property types and needs.",
        },
      ],
    },
    targetAudience: {
      title: "Who Are Our Mortgages For?",
      items: [
        {
          icon: "user",
          title: "Individuals",
          description: "For purchasing or renovating your own home.",
        },
        {
          icon: "investor",
          title: "Real Estate Investors",
          description: "For acquiring and developing investment properties.",
        },
        {
          icon: "business",
          title: "Businesses",
          description: "For purchasing or renovating commercial properties.",
        },
      ],
    },
    trust: {
      stats: [
        { value: "2008", label: "Founded" },
        { value: "60,000+", label: "Customers" },
        { value: "CHF 2.5B", label: "Verified Loan Applications" },
      ],
    },
    cta: {
      title: "Ready for Your Real Estate Financing?",
      subtitle:
        "Contact us for a non-binding consultation about your mortgage.",
      button: "Apply for Mortgage Now",
    },
  },
  fr: {
    hero: {
      badge: "Hypothèque",
      title: "Credits immobiliers pour vos besoins",
      subtitle:
        "Nous vous accompagnons dans le financement de votre bien immobilier et de vos investissements.",
      cta: "Faire une demande",
    },
    products: {
      title: "Nos produits hypothecaires",
      items: [
        {
          icon: "home",
          title: "Hypotheque standard",
          description:
            "Financement hypothecaire classique jusqu'a 80% de la valeur du bien avec taux attractifs et durees flexibles.",
          features: ["Jusqu'a 80% LTV", "Taux attractifs", "Durees flexibles"],
        },
        {
          icon: "layers",
          title: "Financement mezzanine",
          description:
            "Pour investisseurs et promoteurs professionnels; structures de prets subordonnees completant les fonds propres pour les grands projets.",
          features: ["Pour professionnels", "ROE ameliore", "Grands projets"],
        },
        {
          icon: "renovation",
          title: "Crédit renovation",
          description:
            "Crédit special pour renovations et transformations; flexible et rapidement disponible pour augmenter la valeur du bien.",
          features: ["Rapidement disponible", "Flexible", "Plus-value"],
        },
        {
          icon: "building",
          title: "Hypotheque PME",
          description:
            "Solutions sur mesure pour PME acquerant ou renovant des biens commerciaux; necessite un ratio de fonds propres adequat.",
          features: ["Pour entreprises", "Biens commerciaux", "Sur mesure"],
        },
      ],
    },
    howItWorks: {
      title: "Comment ca marche",
      steps: [
        {
          title: "Remplir la demande",
          description:
            "Remplissez rapidement la demande en ligne et recevez les documents detailles automatiquement par e-mail.",
        },
        {
          title: "Verification rapide",
          description:
            "Examen rapide et securise de votre demande par notre equipe d'experts.",
        },
        {
          title: "Prise de contact",
          description:
            "Contact direct apres verification reussie pour discuter de votre solution personnalisee.",
        },
      ],
    },
    requirements: {
      title: "Conditions requises",
      items: [
        {
          label: "LTV maximum",
          value: "80% de la valeur marchande du bien",
        },
        {
          label: "Charge financiere",
          value: "Maximum 40% du revenu brut",
        },
        {
          label: "Hypotheque minimum",
          value: "CHF 250'000",
        },
      ],
    },
    advantages: {
      title: "Vos avantages",
      items: [
        {
          title: "Taux competitifs",
          description: "Conditions attractives grace a la mise en relation directe entre emprunteurs et investisseurs.",
        },
        {
          title: "Conseil individuel",
          description: "Accompagnement personnel par des experts en financement immobilier.",
        },
        {
          title: "Traitement rapide",
          description: "Processus digitaux efficaces pour des delais courts.",
        },
        {
          title: "Solutions variees",
          description: "Financements sur mesure pour differents types de biens et besoins.",
        },
      ],
    },
    targetAudience: {
      title: "A qui s'adressent nos hypotheques?",
      items: [
        {
          icon: "user",
          title: "Particuliers",
          description: "Pour l'achat ou la renovation de votre logement.",
        },
        {
          icon: "investor",
          title: "Investisseurs immobiliers",
          description: "Pour l'acquisition et le developpement d'immeubles de rapport.",
        },
        {
          icon: "business",
          title: "Entreprises",
          description: "Pour l'achat ou la renovation de biens commerciaux.",
        },
      ],
    },
    trust: {
      stats: [
        { value: "2008", label: "Fondee" },
        { value: "60'000+", label: "Clients" },
        { value: "CHF 2.5 Mrd", label: "Demandes de crédit verifiees" },
      ],
    },
    cta: {
      title: "Pret pour votre financement immobilier?",
      subtitle:
        "Contactez-nous pour une consultation sans engagement sur votre hypotheque.",
      button: "Demander une hypotheque maintenant",
    },
  },
};

function getIcon(type: string) {
  const icons: Record<string, string> = {
    home: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
    layers:
      "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10",
    renovation:
      "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z",
    building:
      "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
    user: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
    investor:
      "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
    business:
      "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
  };
  return icons[type] || icons.home;
}

export function Hypothek({ locale }: HypothekProps) {
  const t = content[locale];

  return (
    <>
      {/* Hero Section */}
      <section class="product-hero product-hero--property">
        <div class="container">
          <div class="product-hero__content">
            <span class="product-hero__badge">{t.hero.badge}</span>
            <h1 class="product-hero__title">{t.hero.title}</h1>
            <p class="product-hero__text">{t.hero.subtitle}</p>
            <a href="/kredit-beantragen" class="btn btn--outline">
              {t.hero.cta}
            </a>
          </div>
        </div>
        <div class="product-hero__orbs">
          <div class="product-hero__orb product-hero__orb--1"></div>
          <div class="product-hero__orb product-hero__orb--2"></div>
          <div class="product-hero__orb product-hero__orb--3"></div>
        </div>
      </section>

      {/* Products */}
      <section class="section section--light">
        <div class="container">
          <div class="section__header">
            <h2 class="section__title">{t.products.title}</h2>
          </div>
          <div class="grid grid--2 mortgage-products">
            {t.products.items.map((item, index) => (
              <div key={index} class="mortgage-card">
                <div class="mortgage-card__header">
                  <div class="mortgage-card__icon">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d={getIcon(item.icon)}
                      />
                    </svg>
                  </div>
                  <h3 class="mortgage-card__title">{item.title}</h3>
                </div>
                <p class="mortgage-card__description">{item.description}</p>
                <div class="mortgage-card__features">
                  {item.features.map((feature, fIndex) => (
                    <span key={fIndex} class="mortgage-card__feature">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section class="section section--gradient">
        <div class="container">
          <div class="section__header">
            <h2 class="section__title">{t.howItWorks.title}</h2>
          </div>
          <div class="steps">
            {t.howItWorks.steps.map((step, index) => (
              <div key={index} class="step">
                <div class="step__number">{index + 1}</div>
                <div class="step__content">
                  <h3 class="step__title">{step.title}</h3>
                  <p class="step__description">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section class="section section--light">
        <div class="container container--sm">
          <div class="section__header">
            <h2 class="section__title">{t.requirements.title}</h2>
          </div>
          <div class="requirement-cards">
            {t.requirements.items.map((item, index) => (
              <div key={index} class="requirement-card">
                <div class="requirement-card__label">{item.label}</div>
                <div class="requirement-card__value">{item.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section class="section section--gray">
        <div class="container">
          <div class="section__header">
            <h2 class="section__title">{t.advantages.title}</h2>
          </div>
          <div class="grid grid--4 advantages-grid">
            {t.advantages.items.map((item, index) => (
              <div key={index} class="advantage-card">
                <h3 class="advantage-card__title">{item.title}</h3>
                <p class="advantage-card__description">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section class="section section--light">
        <div class="container">
          <div class="section__header">
            <h2 class="section__title">{t.targetAudience.title}</h2>
          </div>
          <div class="grid grid--3 audience-grid">
            {t.targetAudience.items.map((item, index) => (
              <div key={index} class="audience-card">
                <div class="audience-card__icon">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d={getIcon(item.icon)}
                    />
                  </svg>
                </div>
                <h3 class="audience-card__title">{item.title}</h3>
                <p class="audience-card__description">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Stats */}
      <section class="section section--gray">
        <div class="container">
          <div class="trust-stats trust-stats--centered">
            {t.trust.stats.map((stat, index) => (
              <div key={index} class="trust-stat">
                <div class="trust-stat__value">{stat.value}</div>
                <div class="trust-stat__label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section class="section section--primary">
        <div class="container">
          <div class="cta-block">
            <h2 class="cta-block__title">{t.cta.title}</h2>
            <p class="cta-block__subtitle">{t.cta.subtitle}</p>
            <a href="/kredit-beantragen" class="btn btn--white btn--lg">
              {t.cta.button}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
