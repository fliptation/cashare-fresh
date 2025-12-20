import type { Locale } from "../../lib/i18n/index.ts";

interface PrivatkreditProps {
  locale: Locale;
}

const content = {
  de: {
    hero: {
      title: "Privatkredit",
      subtitle: "Ein persönlicher Kredit, so individuell wie Sie",
      text: "In wenigen Schritten zur Finanzierung. Realisieren Sie Ihre Pläne schnell und unkompliziert mit Cashare.",
      cta: "Kredit beantragen",
    },
    creditTypes: {
      title: "Unsere Produkte",
      subtitle: "Flexible und sichere Privatkredite für Ihre individuellen Bedürfnisse",
      description: "Schnell, transparent und fair – Finanzielle Lösungen für jede Lebenslage",
      items: [
        {
          icon: "refinance",
          title: "Refinanzierung Kredit",
          description:
            "Konsolidieren Sie bestehende Schulden zu besseren Konditionen.",
        },
        {
          icon: "education",
          title: "Ausbildungskredit",
          description:
            "Bildungsfinanzierung ohne finanzielle Barrieren.",
        },
        {
          icon: "renovation",
          title: "Kredit für Renovierung",
          description:
            "Kredite für Heimwerker- und Renovierungsprojekte.",
        },
        {
          icon: "car",
          title: "Autokredit",
          description:
            "Flexible Fahrzeugfinanzierung zu günstigen Konditionen.",
        },
        {
          icon: "celebration",
          title: "Konsumkredit",
          description:
            "Kredite für persönliche Ausgaben wie Hochzeiten und Flitterwochen.",
        },
        {
          icon: "health",
          title: "Gesundheitskredit",
          description:
            "Finanzierung von medizinischen und zahnärztlichen Eingriffen.",
        },
      ],
    },
    howItWorks: {
      title: "So funktioniert's",
      steps: [
        {
          title: "Kreditantrag ausfüllen",
          description:
            "Den Kreditantrag ausfüllen und online die benötigten Dokumente einreichen. Einfacher geht's nicht.",
        },
        {
          title: "Schnelle Überprüfung",
          description:
            "Wir prüfen Ihren Antrag schnell und sicher. Nach Aufschaltung Ihres Kredites auf unserer Plattform haben Cashare Anleger die Möglichkeit, Ihr Darlehen zu finanzieren.",
        },
        {
          title: "Kreditauszahlung",
          description:
            "Nach Unterschrift aller Verträge wird der Darlehensbetrag auf Ihr Konto ausbezahlt.",
        },
      ],
    },
    requirements: {
      title: "Welche Voraussetzungen müssen Sie für einen Kreditantrag erfüllen?",
      items: [
        "Volljährig (mindestens 18 Jahre alt)",
        "CH/LI-Staatsbürger oder gültige Aufenthaltsbewilligung",
        "Schweizer Bankkonto",
        "Feste Anstellung oder regelmässiges, nachweisbares Einkommen",
        "Keine offenen Betreibungsverfahren und/oder Verlustscheine",
      ],
    },
    trust: {
      title: "Warum Cashare?",
      subtitle: "Cashare wurde 2008 als erste Crowdlending-Plattform der Schweiz gegründet. Mit über 60'000 Kunden und CHF 2,5 Milliarden geprüfter Kreditanträge haben wir uns das Vertrauen tausender Kunden erarbeitet.",
      stats: [
        { value: "2008", label: "Gegründet" },
        { value: "60'000+", label: "Kunden" },
        { value: "CHF 2.5 Mrd.", label: "Geprüfte Kreditanträge" },
      ],
      features: [
        {
          title: "Transparenz",
          description:
            "Klare, faire Prozesse ohne versteckte Gebühren oder Überraschungen.",
        },
        {
          title: "Effizienz",
          description:
            "Alternative Banklösung mit attraktiven Zinsen und schneller Abwicklung.",
        },
        {
          title: "Attraktive Renditen",
          description:
            "Investoren profitieren von attraktiven Renditen.",
        },
        {
          title: "Risikomanagement",
          description: "Robustes Risikomanagement für alle Beteiligten.",
        },
      ],
    },
    cta: {
      title: "Bereit für Ihren persönlichen Kredit?",
      subtitle: "Starten Sie jetzt Ihren Antrag - schnell, einfach und transparent.",
      button: "Jetzt Kredit beantragen",
    },
  },
  en: {
    hero: {
      title: "Personal Loan",
      subtitle: "A Personal Loan as Individual as You",
      text: "Get financing in just a few steps. Realize your plans quickly and easily with Cashare.",
      cta: "Apply for Loan",
    },
    creditTypes: {
      title: "Our Products",
      subtitle: "Flexible and secure personal loans for your individual needs",
      description: "Fast, transparent and fair – Financial solutions for every situation",
      items: [
        {
          icon: "refinance",
          title: "Refinancing",
          description:
            "Consolidate high-interest debts from crédit cards and consumer loans at better rates.",
        },
        {
          icon: "education",
          title: "Education Loan",
          description:
            "Finance your further education and invest in your career.",
        },
        {
          icon: "renovation",
          title: "Renovation",
          description:
            "Finance kitchens, living spaces, and home renovations.",
        },
        {
          icon: "car",
          title: "Car Loan",
          description:
            "Flexible terms for purchasing a new or used vehicle.",
        },
        {
          icon: "celebration",
          title: "Consumer Loan",
          description:
            "Finance special occasions like weddings and honeymoons.",
        },
        {
          icon: "health",
          title: "Health Loan",
          description:
            "Finance dental treatments and medical procedures.",
        },
      ],
    },
    howItWorks: {
      title: "How It Works",
      steps: [
        {
          title: "Complete Application",
          description:
            "Fill out the application online and upload the required documents.",
        },
        {
          title: "Quick Review",
          description:
            "Once approved, your loan is posted to the platform for investor funding.",
        },
        {
          title: "Loan Disbursement",
          description:
            "Funds are transferred directly to your account after contract signing.",
        },
      ],
    },
    requirements: {
      title: "Requirements",
      items: [
        "Minimum age: 18 years",
        "Residence in Switzerland or Liechtenstein",
        "Valid Swiss bank account",
        "Permanent employment or regular income",
        "No active enforcement proceedings or loss certificates",
      ],
    },
    trust: {
      title: "Why Cashare?",
      subtitle: "Cashare was founded in 2008 as Switzerland's first crowdlending platform. With over 60,000 customers and CHF 2.5 billion in reviewed loan applications, we have earned the trust of thousands of customers.",
      stats: [
        { value: "2008", label: "Founded" },
        { value: "60,000+", label: "Customers" },
        { value: "CHF 2.5B", label: "Verified Loan Applications" },
      ],
      features: [
        {
          title: "Transparency",
          description:
            "Clear, fair processes without hidden fees or surprises.",
        },
        {
          title: "Efficiency",
          description:
            "Alternative banking solution with attractive rates and quick processing.",
        },
        {
          title: "Attractive Returns",
          description:
            "Investors benefit from attractive returns.",
        },
        {
          title: "Risk Management",
          description: "Robust risk management for all parties involved.",
        },
      ],
    },
    cta: {
      title: "Ready for Your Personal Loan?",
      subtitle: "Start your application now - fast, simple, and transparent.",
      button: "Apply for Loan Now",
    },
  },
  fr: {
    hero: {
      title: "Crédit privé",
      subtitle: "Un crédit personnel aussi unique que vous",
      text: "Obtenez un financement en quelques étapes. Réalisez vos projets rapidement et simplement avec Cashare.",
      cta: "Demander un crédit",
    },
    creditTypes: {
      title: "Nos produits",
      subtitle: "Des crédits privés flexibles et sécurisés pour vos besoins individuels",
      description: "Rapide, transparent et équitable – Des solutions financières pour chaque situation",
      items: [
        {
          icon: "refinance",
          title: "Refinancement",
          description:
            "Consolidez vos dettes a taux eleve de cartes de crédit et prets a la consommation a de meilleures conditions.",
        },
        {
          icon: "education",
          title: "Crédit formation",
          description:
            "Financez votre formation continue et investissez dans votre carriere.",
        },
        {
          icon: "renovation",
          title: "Renovation",
          description:
            "Financez cuisines, espaces de vie et renovations de votre maison.",
        },
        {
          icon: "car",
          title: "Crédit auto",
          description:
            "Conditions flexibles pour l'achat d'un vehicule neuf ou d'occasion.",
        },
        {
          icon: "celebration",
          title: "Crédit consommation",
          description:
            "Financez des occasions speciales comme mariages et lunes de miel.",
        },
        {
          icon: "health",
          title: "Crédit sante",
          description:
            "Financez soins dentaires et interventions medicales.",
        },
      ],
    },
    howItWorks: {
      title: "Comment ca marche",
      steps: [
        {
          title: "Remplir la demande",
          description:
            "Remplissez la demande en ligne et téléchargez les documents requis.",
        },
        {
          title: "Verification rapide",
          description:
            "Une fois approuve, votre crédit est publie sur la plateforme pour les investisseurs.",
        },
        {
          title: "Versement du credit",
          description:
            "Les fonds sont transferes directement sur votre compte apres signature du contrat.",
        },
      ],
    },
    requirements: {
      title: "Conditions requises",
      items: [
        "Age minimum: 18 ans",
        "Residence en Suisse ou au Liechtenstein",
        "Compte bancaire suisse valide",
        "Emploi fixe ou revenu regulier",
        "Pas de poursuites en cours ou d'actes de defaut de biens",
      ],
    },
    trust: {
      title: "Pourquoi Cashare?",
      subtitle: "Cashare a été fondée en 2008 en tant que première plateforme de crowdlending de Suisse. Avec plus de 60'000 clients et CHF 2,5 milliards de demandes de crédit examinées, nous avons gagné la confiance de milliers de clients.",
      stats: [
        { value: "2008", label: "Fondée" },
        { value: "60'000+", label: "Clients" },
        { value: "CHF 2.5 Mrd", label: "Demandes de crédit vérifiées" },
      ],
      features: [
        {
          title: "Transparence",
          description:
            "Processus clairs et équitables, sans frais cachés ni surprises.",
        },
        {
          title: "Efficacité",
          description:
            "Solution bancaire alternative avec taux attractifs et traitement rapide.",
        },
        {
          title: "Rendements attractifs",
          description:
            "Les investisseurs bénéficient de rendements attractifs.",
        },
        {
          title: "Gestion des risques",
          description: "Gestion robuste des risques pour toutes les parties concernées.",
        },
      ],
    },
    cta: {
      title: "Pret pour votre crédit personnel?",
      subtitle: "Commencez votre demande maintenant - rapide, simple et transparent.",
      button: "Demander un crédit maintenant",
    },
  },
};

function getIcon(type: string) {
  const icons: Record<string, string> = {
    refinance:
      "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
    education:
      "M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222",
    renovation:
      "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
    car: "M8 17a2 2 0 100-4 2 2 0 000 4zm8 0a2 2 0 100-4 2 2 0 000 4zM5 11l1.5-4.5a2 2 0 011.9-1.5h7.2a2 2 0 011.9 1.5L19 11M5 11h14M5 11v6h14v-6",
    celebration:
      "M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18z",
    health:
      "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
  };
  return icons[type] || icons.refinance;
}

export function Privatkredit({ locale }: PrivatkreditProps) {
  const t = content[locale];

  return (
    <>
      {/* Hero Section */}
      <section class="product-hero">
        <div class="container">
          <div class="product-hero__content">
            <h1 class="product-hero__title">{t.hero.title}</h1>
            <p class="product-hero__subtitle">{t.hero.subtitle}</p>
            <p class="product-hero__text">{t.hero.text}</p>
            <a href="/loslegen" class="btn btn--primary btn--lg">
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

      {/* Credit Types */}
      <section class="section section--light">
        <div class="container">
          <div class="section__header">
            <h2 class="section__title">{t.creditTypes.title}</h2>
            <p class="section__subtitle">{t.creditTypes.subtitle}</p>
            <p class="section__description">{t.creditTypes.description}</p>
          </div>
          <div class="grid grid--3 product-grid">
            {t.creditTypes.items.map((item, index) => (
              <div key={index} class="product-card">
                <div class="product-card__icon">
                  <svg
                    class="product-card__icon-svg"
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
                <h3 class="product-card__title">{item.title}</h3>
                <p class="product-card__description">{item.description}</p>
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
          <div class="requirements-list">
            {t.requirements.items.map((item, index) => (
              <div key={index} class="requirements-list__item">
                <svg
                  class="requirements-list__icon"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section class="section section--gray">
        <div class="container">
          <div class="section__header">
            <h2 class="section__title">{t.trust.title}</h2>
            <p class="section__subtitle">{t.trust.subtitle}</p>
          </div>

          {/* Stats */}
          <div class="trust-stats">
            {t.trust.stats.map((stat, index) => (
              <div key={index} class="trust-stat">
                <div class="trust-stat__value">{stat.value}</div>
                <div class="trust-stat__label">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Features */}
          <div class="grid grid--4 trust-features">
            {t.trust.features.map((feature, index) => (
              <div key={index} class="trust-feature">
                <h3 class="trust-feature__title">{feature.title}</h3>
                <p class="trust-feature__description">{feature.description}</p>
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
