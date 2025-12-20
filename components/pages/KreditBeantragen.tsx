import type { Locale } from "../../lib/i18n/index.ts";

interface KreditBeanttragenProps {
  locale: Locale;
}

const content = {
  de: {
    title: "Kredit beantragen",
    subtitle: "Flexible und sichere Kredite, die auf Sie zugeschnitten sind",
    heroText: "Vertrauen Sie auf den FinTech-Pionier. Flexible und sichere Darlehen, abgestimmt auf Ihre Bedürfnisse.",
    privatkredit: {
      title: "Privatkredit",
      description: "Für private Anschaffungen, Umschuldungen oder unerwartete Ausgaben.",
      href: "/kredit-beantragen/privatkredit",
      cta: "Mehr erfahren",
    },
    kmuKredit: {
      title: "KMU-Kredit",
      description: "Flexible Finanzierungslösungen für kleine und mittlere Unternehmen.",
      href: "/kredit-beantragen/kmu-kredit",
      cta: "Mehr erfahren",
    },
    hypothek: {
      title: "Hypothek",
      description: "Attraktive Konditionen für Ihre Immobilienfinanzierung.",
      href: "/kredit-beantragen/hypotheken",
      cta: "Mehr erfahren",
    },
    howItWorks: "So funktioniert Cashare",
    steps: [
      {
        title: "Antrag stellen",
        description: "Füllen Sie den Online-Antrag in wenigen Minuten aus.",
      },
      {
        title: "Angebot erhalten",
        description: "Erhalten Sie innerhalb von 24 Stunden ein unverbindliches Angebot.",
      },
      {
        title: "Vertrag unterschreiben",
        description: "Unterschreiben Sie den Vertrag digital und bequem von zu Hause.",
      },
      {
        title: "Geld erhalten",
        description: "Das Geld wird direkt auf Ihr Konto überwiesen.",
      },
    ],
    benefits: {
      title: "Ihre Vorteile bei Cashare",
      items: [
        {
          title: "Effiziente Prozesse",
          description: "Der Kreditantrag ist online in wenigen Minuten abgeschlossen.",
        },
        {
          title: "Faire Zinsen",
          description: "Profitieren Sie von wettbewerbsfähigen Zinssätzen.",
        },
        {
          title: "Schnelle Auszahlung",
          description: "Nach Vertragsabschluss erhalten Sie Ihr Geld innerhalb weniger Tage.",
        },
        {
          title: "Persönliche Beratung",
          description: "Unser Team steht Ihnen bei Fragen jederzeit zur Verfügung.",
        },
      ],
    },
  },
  en: {
    title: "Apply for a Loan",
    subtitle: "Flexible and secure loans tailored to you",
    heroText: "Trust the FinTech pioneer. Flexible and secure loans tailored to your needs.",
    privatkredit: {
      title: "Personal Loan",
      description: "For private purchases, debt consolidation or unexpected expenses.",
      href: "/en/apply-for-credit/personal-loan",
      cta: "Learn More",
    },
    kmuKredit: {
      title: "SME Loan",
      description: "Flexible financing solutions for small and medium enterprises.",
      href: "/en/apply-for-credit/sme-loan",
      cta: "Learn More",
    },
    hypothek: {
      title: "Mortgage",
      description: "Attractive conditions for your real estate financing.",
      href: "/en/apply-for-credit/mortgage",
      cta: "Learn More",
    },
    howItWorks: "How Cashare Works",
    steps: [
      {
        title: "Submit Application",
        description: "Complete the online application in just a few minutes.",
      },
      {
        title: "Receive Offer",
        description: "Receive a non-binding offer within 24 hours.",
      },
      {
        title: "Sign Contract",
        description: "Sign the contract digitally from the comfort of your home.",
      },
      {
        title: "Receive Funds",
        description: "The money is transferred directly to your account.",
      },
    ],
    benefits: {
      title: "Your Benefits with Cashare",
      items: [
        {
          title: "Efficient Processes",
          description: "Complete your loan application online in minutes.",
        },
        {
          title: "Fair Interest Rates",
          description: "Benefit from competitive interest rates.",
        },
        {
          title: "Fast Payout",
          description: "Receive your money within days after signing.",
        },
        {
          title: "Personal Support",
          description: "Our team is available to answer your questions anytime.",
        },
      ],
    },
  },
  fr: {
    title: "Demander un credit",
    subtitle: "Des credits flexibles et securises, adaptes a vos besoins",
    heroText: "Faites confiance au pionnier FinTech. Des prets flexibles et securises, adaptes a vos besoins.",
    privatkredit: {
      title: "Credit prive",
      description: "Pour des achats prives, le regroupement de dettes ou des depenses imprevues.",
      href: "/fr/demander-un-credit/credit-prive",
      cta: "En savoir plus",
    },
    kmuKredit: {
      title: "Credit PME",
      description: "Solutions de financement flexibles pour les petites et moyennes entreprises.",
      href: "/fr/demander-un-credit/credit-pme",
      cta: "En savoir plus",
    },
    hypothek: {
      title: "Hypotheque",
      description: "Conditions attractives pour votre financement immobilier.",
      href: "/fr/demander-un-credit/hypotheque",
      cta: "En savoir plus",
    },
    howItWorks: "Comment fonctionne Cashare",
    steps: [
      {
        title: "Soumettre la demande",
        description: "Remplissez la demande en ligne en quelques minutes.",
      },
      {
        title: "Recevoir une offre",
        description: "Recevez une offre sans engagement dans les 24 heures.",
      },
      {
        title: "Signer le contrat",
        description: "Signez le contrat numeriquement depuis chez vous.",
      },
      {
        title: "Recevoir les fonds",
        description: "L'argent est transfere directement sur votre compte.",
      },
    ],
    benefits: {
      title: "Vos avantages avec Cashare",
      items: [
        {
          title: "Processus efficaces",
          description: "Completez votre demande de credit en ligne en quelques minutes.",
        },
        {
          title: "Taux d'interet equitables",
          description: "Beneficiez de taux d'interet competitifs.",
        },
        {
          title: "Versement rapide",
          description: "Recevez votre argent en quelques jours apres signature.",
        },
        {
          title: "Accompagnement personnel",
          description: "Notre equipe est disponible pour repondre a vos questions.",
        },
      ],
    },
  },
};

export function KreditBeantragen({ locale }: KreditBeanttragenProps) {
  const t = content[locale];

  return (
    <>
      {/* Hero Section */}
      <section class="py-20 md:py-32 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 relative overflow-hidden">
        <div class="absolute inset-0 opacity-10">
          <div class="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500 rounded-full blur-3xl"></div>
          <div class="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full blur-3xl"></div>
        </div>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div class="text-center">
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              {t.title}
            </h1>
            <p class="text-xl md:text-2xl text-blue-100 mb-4 max-w-3xl mx-auto">
              {t.subtitle}
            </p>
            <p class="text-lg text-blue-100 max-w-2xl mx-auto">
              {t.heroText}
            </p>
          </div>
        </div>
      </section>

      {/* Loan Types */}
      <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid md:grid-cols-3 gap-8">
            {/* Privatkredit */}
            <div class="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-all">
              <div class="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-gray-900 mb-3">{t.privatkredit.title}</h3>
              <p class="text-gray-600 mb-6">{t.privatkredit.description}</p>
              <a
                href={t.privatkredit.href}
                class="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                {t.privatkredit.cta}
              </a>
            </div>

            {/* KMU-Kredit */}
            <div class="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-all">
              <div class="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-gray-900 mb-3">{t.kmuKredit.title}</h3>
              <p class="text-gray-600 mb-6">{t.kmuKredit.description}</p>
              <a
                href={t.kmuKredit.href}
                class="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                {t.kmuKredit.cta}
              </a>
            </div>

            {/* Hypothek */}
            <div class="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-all">
              <div class="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-gray-900 mb-3">{t.hypothek.title}</h3>
              <p class="text-gray-600 mb-6">{t.hypothek.description}</p>
              <a
                href={t.hypothek.href}
                class="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                {t.hypothek.cta}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section class="py-20 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
            {t.howItWorks}
          </h2>
          <div class="grid md:grid-cols-4 gap-8">
            {t.steps.map((step, index) => (
              <div key={index} class="text-center">
                <div class="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {index + 1}
                </div>
                <h3 class="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p class="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
            {t.benefits.title}
          </h2>
          <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.benefits.items.map((benefit, index) => (
              <div key={index} class="text-center p-6">
                <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 class="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p class="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
