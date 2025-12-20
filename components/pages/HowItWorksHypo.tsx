import type { Locale } from "../../lib/i18n/index.ts";

interface HowItWorksHypoProps {
  locale: Locale;
}

const content = {
  de: {
    title: "Hypothek",
    subtitle: "So funktioniert Ihre Immobilienfinanzierung",
    heroText: "Optimale Hypothekenlösungen für Ihren Immobilienkauf - über Crowdlending statt traditioneller Bank.",
    backLink: { label: "Zurück zu So funktioniert's", href: "/so-funktionierts" },
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
    backLink: { label: "Back to How It Works", href: "/en/how-it-works" },
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
    backLink: { label: "Retour a Comment ca marche", href: "/fr/comment-ca-marche" },
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
      <section class="py-20 md:py-32 bg-gradient-to-br from-emerald-900 via-emerald-800 to-green-900 relative overflow-hidden">
        <div class="absolute inset-0 opacity-10">
          <div class="absolute -top-40 -right-40 w-80 h-80 bg-emerald-400 rounded-full blur-3xl"></div>
          <div class="absolute -bottom-40 -left-40 w-80 h-80 bg-green-400 rounded-full blur-3xl"></div>
        </div>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <a href={t.backLink.href} class="inline-flex items-center text-emerald-200 hover:text-white mb-8 transition-colors">
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
            {t.backLink.label}
          </a>
          <div class="text-center">
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">{t.title}</h1>
            <p class="text-xl md:text-2xl text-emerald-100 mb-4 max-w-3xl mx-auto">{t.subtitle}</p>
            <p class="text-lg text-emerald-100 max-w-2xl mx-auto">{t.heroText}</p>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid md:grid-cols-3 gap-8">
            {t.advantages.map((item, index) => (
              <div key={index} class="bg-emerald-50 rounded-2xl p-8 text-center">
                <h3 class="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p class="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section class="py-20 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">{t.products.title}</h2>
          <div class="grid md:grid-cols-3 gap-8">
            {t.products.items.map((item, index) => (
              <div key={index} class="bg-white rounded-xl p-6 shadow-sm">
                <div class="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                  <svg class="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <h3 class="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p class="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section class="py-20 bg-white">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">{t.process.title}</h2>
          <div class="space-y-8">
            {t.process.steps.map((step, index) => (
              <div key={index} class="flex gap-6 items-start">
                <div class="flex-shrink-0 w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                  {step.step}
                </div>
                <div class="flex-1 pt-2">
                  <h3 class="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p class="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div class="mt-12 text-center">
            <p class="text-lg text-emerald-600 font-medium">{t.process.timeline}</p>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section class="py-20 bg-emerald-900">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-3xl md:text-4xl font-bold text-center text-white mb-12">{t.requirements.title}</h2>
          <div class="grid md:grid-cols-3 gap-6">
            {t.requirements.items.map((item, index) => (
              <div key={index} class="bg-white/10 rounded-xl p-6 text-center">
                <div class="text-emerald-300 text-sm font-medium mb-2">{item.label}</div>
                <div class="text-white text-xl font-bold">{item.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section class="py-20 bg-gradient-to-r from-emerald-600 to-green-600">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 class="text-3xl md:text-4xl font-bold text-white mb-8">{t.cta.title}</h2>
          <a
            href={t.cta.button.href}
            class="inline-flex items-center px-8 py-4 bg-white text-emerald-900 font-semibold rounded-lg hover:bg-emerald-50 transition-colors"
          >
            {t.cta.button.label}
          </a>
        </div>
      </section>
    </>
  );
}
