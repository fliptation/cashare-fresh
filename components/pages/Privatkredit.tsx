import type { Locale } from "../../lib/i18n/index.ts";
import type { JSX } from "preact";

interface PrivatkreditProps {
  locale: Locale;
}

const content = {
  de: {
    hero: {
      title: "Privatkredit",
      subtitle: "Ein persönlicher Kredit, so individuell wie Sie",
      text:
        "In wenigen Schritten zur Finanzierung. Realisieren Sie Ihre Pläne schnell und unkompliziert mit Cashare.",
      cta: "Kredit beantragen",
    },
    creditTypes: {
      title: "Unsere Produkte",
      subtitle:
        "Flexible und sichere Privatkredite für Ihre individuellen Bedürfnisse",
      description:
        "Schnell, transparent und fair – Finanzielle Lösungen für jede Lebenslage",
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
          description: "Bildungsfinanzierung ohne finanzielle Barrieren.",
        },
        {
          icon: "renovation",
          title: "Kredit für Renovierung",
          description: "Kredite für Heimwerker- und Renovierungsprojekte.",
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
      title:
        "Welche Voraussetzungen müssen Sie für einen Kreditantrag erfüllen?",
      items: [
        { icon: "age", text: "Sie sind mindestens 18 Jahre" },
        {
          icon: "residence",
          text:
            "Sie sind CH/LI-Bürger oder besitzen eine gültige Aufenthaltsbewilligung für die Schweiz (CH) oder Liechtenstein (LI)",
        },
        { icon: "bank", text: "Sie haben ein Schweizer Bankkonto" },
        {
          icon: "income",
          text:
            "Sie haben eine unbefristete Anstellung oder ein regelmässiges Einkommen",
        },
        {
          icon: "debt",
          text: "Sie haben keine offenen Betreibungen und/oder Verlustscheine",
        },
      ],
    },
    trust: {
      title: "Warum Cashare?",
      subtitle:
        "Cashare wurde 2008 als erste Crowdlending-Plattform der Schweiz gegründet. Mit über 60'000 Kunden und CHF 2,5 Milliarden geprüfter Kreditanträge haben wir uns das Vertrauen tausender Kunden erarbeitet.",
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
          description: "Investoren profitieren von attraktiven Renditen.",
        },
        {
          title: "Risikomanagement",
          description: "Robustes Risikomanagement für alle Beteiligten.",
        },
      ],
    },
    cta: {
      title: "Bereit für Ihren persönlichen Kredit?",
      subtitle:
        "Starten Sie jetzt Ihren Antrag - schnell, einfach und transparent.",
      button: "Jetzt Kredit beantragen",
    },
  },
  en: {
    hero: {
      title: "Personal Loan",
      subtitle: "A Personal Loan as Individual as You",
      text:
        "Get financing in just a few steps. Realize your plans quickly and easily with Cashare.",
      cta: "Apply for Loan",
    },
    creditTypes: {
      title: "Our Products",
      subtitle: "Flexible and secure personal loans for your individual needs",
      description:
        "Fast, transparent and fair – Financial solutions for every situation",
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
          description: "Finance kitchens, living spaces, and home renovations.",
        },
        {
          icon: "car",
          title: "Car Loan",
          description: "Flexible terms for purchasing a new or used vehicle.",
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
          description: "Finance dental treatments and medical procedures.",
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
      title: "What requirements do you need to meet for a loan application?",
      items: [
        { icon: "age", text: "You are at least 18 years old" },
        {
          icon: "residence",
          text:
            "You are a CH/LI citizen or have a valid residence permit for Switzerland (CH) or Liechtenstein (LI)",
        },
        { icon: "bank", text: "You have a Swiss bank account" },
        {
          icon: "income",
          text: "You have a permanent position or regular income",
        },
        {
          icon: "debt",
          text:
            "You have no outstanding debt collection proceedings and/or loss certificates",
        },
      ],
    },
    trust: {
      title: "Why Cashare?",
      subtitle:
        "Cashare was founded in 2008 as Switzerland's first crowdlending platform. With over 60,000 customers and CHF 2.5 billion in reviewed loan applications, we have earned the trust of thousands of customers.",
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
          description: "Investors benefit from attractive returns.",
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
      text:
        "Obtenez un financement en quelques étapes. Réalisez vos projets rapidement et simplement avec Cashare.",
      cta: "Demander un crédit",
    },
    creditTypes: {
      title: "Nos produits",
      subtitle:
        "Des crédits privés flexibles et sécurisés pour vos besoins individuels",
      description:
        "Rapide, transparent et équitable – Des solutions financières pour chaque situation",
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
          description: "Financez soins dentaires et interventions medicales.",
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
      title:
        "Quelles conditions devez-vous remplir pour une demande de crédit?",
      items: [
        { icon: "age", text: "Vous avez au moins 18 ans" },
        {
          icon: "residence",
          text:
            "Vous êtes citoyen CH/LI ou possédez un permis de séjour valide pour la Suisse (CH) ou le Liechtenstein (LI)",
        },
        { icon: "bank", text: "Vous avez un compte bancaire suisse" },
        {
          icon: "income",
          text: "Vous avez un emploi permanent ou un revenu régulier",
        },
        {
          icon: "debt",
          text:
            "Vous n'avez pas de poursuites en cours et/ou d'actes de défaut de biens",
        },
      ],
    },
    trust: {
      title: "Pourquoi Cashare?",
      subtitle:
        "Cashare a été fondée en 2008 en tant que première plateforme de crowdlending de Suisse. Avec plus de 60'000 clients et CHF 2,5 milliards de demandes de crédit examinées, nous avons gagné la confiance de milliers de clients.",
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
          description:
            "Gestion robuste des risques pour toutes les parties concernées.",
        },
      ],
    },
    cta: {
      title: "Pret pour votre crédit personnel?",
      subtitle:
        "Commencez votre demande maintenant - rapide, simple et transparent.",
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
    car:
      "M8 17a2 2 0 100-4 2 2 0 000 4zm8 0a2 2 0 100-4 2 2 0 000 4zM5 11l1.5-4.5a2 2 0 011.9-1.5h7.2a2 2 0 011.9 1.5L19 11M5 11h14M5 11v6h14v-6",
    celebration:
      "M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18z",
    health:
      "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
  };
  return icons[type] || icons.refinance;
}

const requirementIcons: Record<string, JSX.Element> = {
  age: (
    <svg viewBox="0 0 40 40" fill="none" class="requirements__icon">
      <defs>
        <linearGradient id="age-head" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#fef08a" />
          <stop offset="100%" stop-color="#fde047" />
        </linearGradient>
        <linearGradient id="age-body" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#67e8f9" />
          <stop offset="100%" stop-color="#22d3ee" />
        </linearGradient>
      </defs>
      <circle cx="20" cy="13" r="7" fill="url(#age-head)" />
      <path
        d="M9 34c0-6.075 4.925-11 11-11s11 4.925 11 11"
        fill="url(#age-body)"
      />
      <circle cx="17" cy="11" r="1.5" fill="#fbbf24" opacity="0.4" />
    </svg>
  ),
  residence: (
    <svg viewBox="0 0 40 40" fill="none" class="requirements__icon">
      <defs>
        <linearGradient id="res-bg-pk" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#67e8f9" />
          <stop offset="100%" stop-color="#22d3ee" />
        </linearGradient>
      </defs>
      <rect x="8" y="12" width="24" height="20" rx="3" fill="url(#res-bg-pk)" />
      <rect x="11" y="16" width="9" height="8" rx="1" fill="#fde047" />
      <rect x="23" y="16" width="6" height="2" rx="1" fill="#cffafe" />
      <rect x="23" y="20" width="6" height="2" rx="1" fill="#cffafe" />
      <rect x="23" y="24" width="4" height="2" rx="1" fill="#cffafe" />
    </svg>
  ),
  bank: (
    <svg viewBox="0 0 40 40" fill="none" class="requirements__icon">
      <defs>
        <linearGradient id="bank-main-pk" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#67e8f9" />
          <stop offset="100%" stop-color="#22d3ee" />
        </linearGradient>
        <linearGradient id="bank-top-pk" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#22d3ee" />
          <stop offset="100%" stop-color="#0891b2" />
        </linearGradient>
      </defs>
      <path d="M20 6L4 16h32L20 6z" fill="url(#bank-top-pk)" />
      <rect
        x="6"
        y="16"
        width="28"
        height="18"
        rx="1"
        fill="url(#bank-main-pk)"
      />
      <rect x="10" y="20" width="3" height="10" rx="1" fill="#cffafe" />
      <rect x="18.5" y="20" width="3" height="10" rx="1" fill="#cffafe" />
      <rect x="27" y="20" width="3" height="10" rx="1" fill="#cffafe" />
      <rect x="6" y="32" width="28" height="2" fill="url(#bank-top-pk)" />
    </svg>
  ),
  income: (
    <svg viewBox="0 0 40 40" fill="none" class="requirements__icon">
      <defs>
        <linearGradient id="income-bg-pk" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#c4b5fd" />
          <stop offset="100%" stop-color="#a78bfa" />
        </linearGradient>
      </defs>
      <rect
        x="8"
        y="8"
        width="24"
        height="24"
        rx="5"
        fill="url(#income-bg-pk)"
      />
      <path
        d="M14 20h12"
        stroke="#fff"
        stroke-width="2.5"
        stroke-linecap="round"
      />
      <path
        d="M20 14v12"
        stroke="#fff"
        stroke-width="2.5"
        stroke-linecap="round"
      />
    </svg>
  ),
  debt: (
    <svg viewBox="0 0 40 40" fill="none" class="requirements__icon">
      <defs>
        <linearGradient id="debt-bg-pk" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#fef08a" />
          <stop offset="100%" stop-color="#fde047" />
        </linearGradient>
      </defs>
      <rect x="8" y="8" width="24" height="24" rx="3" fill="url(#debt-bg-pk)" />
      <rect x="13" y="14" width="14" height="2.5" rx="1" fill="#fbbf24" />
      <rect x="13" y="20" width="10" height="2.5" rx="1" fill="#fbbf24" />
      <rect x="13" y="26" width="6" height="2.5" rx="1" fill="#fbbf24" />
    </svg>
  ),
};

export function Privatkredit({ locale }: PrivatkreditProps) {
  const t = content[locale];

  return (
    <>
      {/* Hero Section */}
      <section class="product-hero">
        <div class="container">
          <div class="product-hero__content">
            <span class="product-hero__badge">{t.hero.title}</span>
            <h1 class="product-hero__title">{t.hero.subtitle}</h1>
            <p class="product-hero__text">{t.hero.text}</p>
            <a href="/privatdarlehen-beantragen" class="btn btn--white">
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
      <section class="requirements">
        <div class="requirements__container">
          <h2 class="requirements__title">{t.requirements.title}</h2>
          <div class="requirements__timeline">
            {t.requirements.items.map((item, index) => (
              <div
                class={`requirements__item ${
                  index % 2 === 1 ? "requirements__item--right" : ""
                }`}
                key={index}
              >
                <div class="requirements__item-content">
                  {requirementIcons[item.icon]}
                  <span class="requirements__item-text">{item.text}</span>
                </div>
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
            <a href="/privatdarlehen-beantragen" class="btn btn--dark btn--lg">
              {t.cta.button}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
