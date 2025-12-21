import type { Locale } from "../../lib/i18n/index.ts";

interface KmuKreditProps {
  locale: Locale;
}

const content = {
  de: {
    hero: {
      badge: "KMU-Kredit",
      title: "Flexible Finanzierungslösungen für Ihr Unternehmen",
      subtitle: "Finden Sie bei uns den richtigen KMU-Kredit für Wachstum, Investitionen und Liquidität.",
      cta: "Kredit beantragen",
    },
    loanTypes: {
      title: "Unsere Kreditarten",
      items: [
        {
          title: "Ratenkredit",
          description:
            "Monatliche Rückzahlungsstruktur, bei der der Gesamtbetrag über die gesamte Kreditlaufzeit verteilt wird.",
          cta: "Ratenkredit beantragen",
          href: "/kmu-kredit-beantragen/",
        },
        {
          title: "Endfälliger Kredit",
          description:
            "Kredite mit 1-36 Monaten Laufzeit, bei denen Kapital plus Zinsen als Einmalzahlung bei Fälligkeit zurückgezahlt werden.",
          cta: "Endfälligen Kredit beantragen",
          href: "/kmu-kurzkredit-beantragen/",
        },
      ],
    },
    useCases: {
      title: "Wofür können Sie den Kredit nutzen?",
      items: [
        {
          icon: "equipment",
          title: "Anlagegüter",
          description:
            "Investieren Sie in Maschinen und Ausrüstung ohne hohe Vorabkosten.",
        },
        {
          icon: "growth",
          title: "Wachstum",
          description:
            "Flexible Finanzierung für Marktexpansion und Grossprojekte.",
        },
        {
          icon: "refinance",
          title: "Refinanzierung",
          description: "Kreditkonsolidierung und Schuldenoptimierung.",
        },
        {
          icon: "liquidity",
          title: "Liquidität",
          description:
            "Kurzfristige Cashflow-Lösungen für operative Bedürfnisse.",
        },
        {
          icon: "inventory",
          title: "Warenbestand",
          description:
            "Finanzieren Sie Lagerbestände und saisonale Einkäufe.",
        },
      ],
    },
    howItWorks: {
      title: "So funktioniert's",
      steps: [
        {
          title: "Kreditantrag ausfüllen",
          description:
            "Füllen Sie das Online-Formular aus und reichen Sie die erforderlichen Dokumente ein.",
        },
        {
          title: "Schnelle Überprüfung",
          description:
            "Wir prüfen Ihren Antrag und Investoren genehmigen die Finanzierung.",
        },
        {
          title: "Kreditauszahlung",
          description:
            "Die Mittel werden nach Dokumentation ausgezahlt.",
        },
      ],
    },
    requirements: {
      title: "Voraussetzungen",
      items: [
        "Eingetragenes Unternehmen in der Schweiz oder Liechtenstein",
        "Mindestjahresumsatz: CHF 100'000",
        "Positiver Cashflow (aktuell oder prognostiziert)",
        "Mindestens 2 Jahre Geschäftstätigkeit",
        "Aktuelle Jahresabschlüsse verfügbar",
      ],
    },
    advantages: {
      title: "Ihre Vorteile",
      items: [
        {
          title: "Schnelle Entscheidung",
          description: "Kreditentscheid innerhalb von 48 Stunden.",
        },
        {
          title: "Flexible Laufzeiten",
          description: "Wählen Sie zwischen 1 und 60 Monaten.",
        },
        {
          title: "Keine versteckten Gebühren",
          description: "Transparente Konditionen von Anfang an.",
        },
        {
          title: "Digitaler Prozess",
          description: "Komplett online, ohne Papierkram.",
        },
      ],
    },
    trust: {
      stats: [
        { value: "60'000+", label: "Kunden" },
        { value: "CHF 2.5 Mrd.", label: "Geprüfte Kreditanträge" },
        { value: "2008", label: "Gegründet" },
      ],
    },
    cta: {
      title: "Bereit für Ihren KMU-Kredit?",
      subtitle:
        "Starten Sie jetzt Ihren Antrag und erhalten Sie schnell die Finanzierung, die Ihr Unternehmen braucht.",
      button: "Jetzt KMU-Kredit beantragen",
    },
  },
  en: {
    hero: {
      badge: "SME Loan",
      title: "Flexible Financing Solutions for Your Business",
      subtitle: "Find the right SME loan with us for growth, investments and liquidity.",
      cta: "Apply for Loan",
    },
    loanTypes: {
      title: "Our Loan Types",
      items: [
        {
          title: "Installment Loan",
          description:
            "Monthly repayment structure where the total amount is divided across the entire loan term.",
          cta: "Apply for Installment Loan",
          href: "/en/sme-loan-application/",
        },
        {
          title: "Bullet Loan",
          description:
            "Loans with 1-36 month terms where principal plus interest are repaid as a lump sum at maturity.",
          cta: "Apply for Bullet Loan",
          href: "/en/sme-short-loan-application/",
        },
      ],
    },
    useCases: {
      title: "What Can You Use the Loan For?",
      items: [
        {
          icon: "equipment",
          title: "Capital Assets",
          description:
            "Invest in machinery and equipment without high upfront costs.",
        },
        {
          icon: "growth",
          title: "Growth",
          description:
            "Flexible financing for market expansion and major projects.",
        },
        {
          icon: "refinance",
          title: "Refinancing",
          description: "Crédit consolidation and debt optimization.",
        },
        {
          icon: "liquidity",
          title: "Liquidity",
          description:
            "Short-term cash flow solutions for operational needs.",
        },
        {
          icon: "inventory",
          title: "Inventory",
          description:
            "Finance stock and seasonal purchases.",
        },
      ],
    },
    howItWorks: {
      title: "How It Works",
      steps: [
        {
          title: "Complete Application",
          description:
            "Fill out the online form and submit the required documents.",
        },
        {
          title: "Quick Review",
          description:
            "We review your application and investors approve the funding.",
        },
        {
          title: "Loan Disbursement",
          description:
            "Funds are disbursed after documentation is complete.",
        },
      ],
    },
    requirements: {
      title: "Requirements",
      items: [
        "Registered business in Switzerland or Liechtenstein",
        "Minimum annual revenue: CHF 100,000",
        "Positive cash flow (current or projected)",
        "At least 2 years of business operations",
        "Current financial statements available",
      ],
    },
    advantages: {
      title: "Your Advantages",
      items: [
        {
          title: "Fast Decision",
          description: "Crédit decision within 48 hours.",
        },
        {
          title: "Flexible Terms",
          description: "Choose between 1 and 60 months.",
        },
        {
          title: "No Hidden Fees",
          description: "Transparent conditions from the start.",
        },
        {
          title: "Digital Process",
          description: "Completely online, no paperwork.",
        },
      ],
    },
    trust: {
      stats: [
        { value: "60,000+", label: "Customers" },
        { value: "CHF 2.5B", label: "Verified Loan Applications" },
        { value: "2008", label: "Founded" },
      ],
    },
    cta: {
      title: "Ready for Your SME Loan?",
      subtitle:
        "Start your application now and quickly get the financing your business needs.",
      button: "Apply for SME Loan Now",
    },
  },
  fr: {
    hero: {
      badge: "Crédit PME",
      title: "Solutions de financement flexibles pour votre entreprise",
      subtitle: "Trouvez le bon crédit PME chez nous pour la croissance, les investissements et la liquidité.",
      cta: "Demander un credit",
    },
    loanTypes: {
      title: "Nos types de credit",
      items: [
        {
          title: "Crédit amortissable",
          description:
            "Structure de remboursement mensuel ou le montant total est reparti sur toute la duree du pret.",
          cta: "Demander un crédit amortissable",
          href: "/fr/demande-credit-pme/",
        },
        {
          title: "Crédit in fine",
          description:
            "Credits de 1 a 36 mois ou le capital plus les interets sont rembourses en une seule fois a echeance.",
          cta: "Demander un crédit in fine",
          href: "/fr/demande-credit-pme-court/",
        },
      ],
    },
    useCases: {
      title: "A quoi pouvez-vous utiliser le credit?",
      items: [
        {
          icon: "equipment",
          title: "Biens d'equipement",
          description:
            "Investissez dans des machines et equipements sans couts initiaux eleves.",
        },
        {
          icon: "growth",
          title: "Croissance",
          description:
            "Financement flexible pour l'expansion du marche et les grands projets.",
        },
        {
          icon: "refinance",
          title: "Refinancement",
          description: "Consolidation de credits et optimisation de la dette.",
        },
        {
          icon: "liquidity",
          title: "Liquidite",
          description:
            "Solutions de tresorerie a court terme pour les besoins operationnels.",
        },
        {
          icon: "inventory",
          title: "Stock",
          description:
            "Financez les stocks et les achats saisonniers.",
        },
      ],
    },
    howItWorks: {
      title: "Comment ca marche",
      steps: [
        {
          title: "Remplir la demande",
          description:
            "Remplissez le formulaire en ligne et soumettez les documents requis.",
        },
        {
          title: "Verification rapide",
          description:
            "Nous examinons votre demande et les investisseurs approuvent le financement.",
        },
        {
          title: "Versement du credit",
          description:
            "Les fonds sont verses apres completion de la documentation.",
        },
      ],
    },
    requirements: {
      title: "Conditions requises",
      items: [
        "Entreprise enregistree en Suisse ou au Liechtenstein",
        "Chiffre d'affaires annuel minimum: CHF 100'000",
        "Flux de tresorerie positif (actuel ou projete)",
        "Au moins 2 ans d'activite commerciale",
        "Etats financiers actuels disponibles",
      ],
    },
    advantages: {
      title: "Vos avantages",
      items: [
        {
          title: "Decision rapide",
          description: "Decision de crédit sous 48 heures.",
        },
        {
          title: "Durees flexibles",
          description: "Choisissez entre 1 et 60 mois.",
        },
        {
          title: "Pas de frais caches",
          description: "Conditions transparentes des le depart.",
        },
        {
          title: "Processus digital",
          description: "Entierement en ligne, sans paperasse.",
        },
      ],
    },
    trust: {
      stats: [
        { value: "60'000+", label: "Clients" },
        { value: "CHF 2.5 Mrd", label: "Demandes de crédit verifiees" },
        { value: "2008", label: "Fondee" },
      ],
    },
    cta: {
      title: "Pret pour votre crédit PME?",
      subtitle:
        "Commencez votre demande maintenant et obtenez rapidement le financement dont votre entreprise a besoin.",
      button: "Demander un crédit PME maintenant",
    },
  },
};

function getIcon(type: string) {
  const icons: Record<string, string> = {
    equipment:
      "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z",
    growth:
      "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
    refinance:
      "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
    liquidity:
      "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
    inventory:
      "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4",
  };
  return icons[type] || icons.equipment;
}

export function KmuKredit({ locale }: KmuKreditProps) {
  const t = content[locale];

  return (
    <>
      {/* Hero Section */}
      <section class="product-hero product-hero--business">
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

      {/* Loan Types */}
      <section class="section section--light">
        <div class="container">
          <div class="section__header">
            <h2 class="section__title">{t.loanTypes.title}</h2>
          </div>
          <div class="loan-types">
            {t.loanTypes.items.map((item, index) => (
              <div key={index} class="loan-type-card">
                <h3 class="loan-type-card__title">{item.title}</h3>
                <p class="loan-type-card__description">{item.description}</p>
                <a href={item.href} class="btn btn--outline">
                  {item.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section class="section section--gradient">
        <div class="container">
          <div class="section__header">
            <h2 class="section__title">{t.useCases.title}</h2>
          </div>
          <div class="grid grid--auto use-cases">
            {t.useCases.items.map((item, index) => (
              <div key={index} class="use-case-card">
                <div class="use-case-card__icon">
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
                <h3 class="use-case-card__title">{item.title}</h3>
                <p class="use-case-card__description">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section class="section section--light">
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

      {/* Requirements & Advantages */}
      <section class="section section--gray">
        <div class="container">
          <div class="two-column">
            {/* Requirements */}
            <div class="two-column__left">
              <h2 class="section__title">{t.requirements.title}</h2>
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

            {/* Advantages */}
            <div class="two-column__right">
              <h2 class="section__title">{t.advantages.title}</h2>
              <div class="advantages-grid">
                {t.advantages.items.map((item, index) => (
                  <div key={index} class="advantage-card">
                    <h3 class="advantage-card__title">{item.title}</h3>
                    <p class="advantage-card__description">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Stats */}
      <section class="section section--light">
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
            <a href="/kredit-beantragen/kmu-kredit/" class="btn btn--white btn--lg">
              {t.cta.button}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
