import type { Locale } from "../../lib/i18n/index.ts";

interface HowItWorksSmeProps {
  locale: Locale;
}

const content = {
  de: {
    title: "KMU-Kredit",
    subtitle: "So funktioniert Ihre Unternehmensfinanzierung",
    heroText: "Massgeschneiderte P2P-Geschaftskredite fur Unternehmer und KMU - Entscheidung in 48 Stunden.",
    backLink: { label: "Zuruck zu So funktioniert's", href: "/so-funktionierts" },
    advantages: [
      { title: "Schnell", description: "Schnelle Antragsprufung mit raschem Geldtransfer nach Finanzierung" },
      { title: "Tiefe Zinsen", description: "Ab 3.9% - wettbewerbsfahige Crowdlending-Konditionen ohne Bank" },
      { title: "Transparent", description: "Volle Offenlegung aller Gebuhren - keine versteckten Kosten" },
    ],
    loanTypes: {
      title: "Unsere KMU-Kreditarten",
      items: [
        { title: "Blanko KMU-Kredit", description: "Unbesicherte Unternehmensfinanzierung" },
        { title: "Gesicherter Kredit", description: "Kredite mit hinterlegten Sicherheiten" },
        { title: "Kurzfristiger Kredit", description: "Finanzierung bis zu 12 Monaten" },
      ],
    },
    process: {
      title: "Der Ablauf in 3 Schritten",
      steps: [
        { step: "1", title: "Antrag & Prufung", description: "Reichen Sie Ihren Kreditantrag zur Bewertung ein." },
        { step: "2", title: "Finanzierung & Genehmigung", description: "Die Anleger-Crowd pruft und finanziert genehmigte Antrage." },
        { step: "3", title: "Auszahlung", description: "Das Geld wird elektronisch auf Ihr Geschftskonto uberwiesen." },
      ],
      timeline: "Ca. 10 Tage von der Genehmigung bis zum Geldeingang",
    },
    requirements: {
      title: "Voraussetzungen",
      items: [
        "Schweizer oder Liechtensteiner Firmenregistrierung",
        "Mindestens 2 Jahre Geschaftstatigkeit",
        "Mindestumsatz CHF 100'000 jahrlich",
        "Positiver Cashflow nachweisbar",
      ],
    },
    stats: "Uber 60'000 Privatpersonen und Unternehmen unterstutzt",
    cta: {
      title: "Jetzt KMU-Kredit beantragen",
      button: { label: "Kredit beantragen", href: "/kredit-beantragen/kmu-kredit" },
    },
  },
  en: {
    title: "SME Loan",
    subtitle: "How your business financing works",
    heroText: "Tailored P2P business loans for entrepreneurs and SMEs - decision within 48 hours.",
    backLink: { label: "Back to How It Works", href: "/en/how-it-works" },
    advantages: [
      { title: "Fast", description: "Quick application review with rapid fund transfer after financing" },
      { title: "Low Interest", description: "From 3.9% - competitive crowdlending rates without traditional banking" },
      { title: "Transparent", description: "Full disclosure of fees upfront - no hidden costs" },
    ],
    loanTypes: {
      title: "Our SME Loan Types",
      items: [
        { title: "Blank SME Loan", description: "Unsecured business financing" },
        { title: "Secured Credit", description: "Loans backed by deposited collateral" },
        { title: "Short-Term Credit", description: "Financing up to 12 months" },
      ],
    },
    process: {
      title: "The Process in 3 Steps",
      steps: [
        { step: "1", title: "Application & Review", description: "Submit your loan request for assessment." },
        { step: "2", title: "Funding & Approval", description: "Investor crowd reviews and finances approved applications." },
        { step: "3", title: "Disbursement", description: "Money transfers electronically to your business account." },
      ],
      timeline: "Approx. 10 days from approval to fund receipt",
    },
    requirements: {
      title: "Requirements",
      items: [
        "Swiss or Liechtenstein company registration",
        "Minimum 2-year operating history",
        "Minimum CHF 100,000 annual turnover",
        "Positive cash flow demonstration",
      ],
    },
    stats: "Over 60,000 individuals and businesses supported",
    cta: {
      title: "Apply for an SME loan now",
      button: { label: "Apply for loan", href: "/en/apply-for-credit/sme-loan" },
    },
  },
  fr: {
    title: "Credit PME",
    subtitle: "Comment fonctionne votre financement d'entreprise",
    heroText: "Credits P2P sur mesure pour entrepreneurs et PME - decision en 48 heures.",
    backLink: { label: "Retour a Comment ca marche", href: "/fr/comment-ca-marche" },
    advantages: [
      { title: "Rapide", description: "Examen rapide de la demande avec transfert de fonds rapide apres financement" },
      { title: "Taux bas", description: "A partir de 3.9% - taux crowdlending competitifs sans banque traditionnelle" },
      { title: "Transparent", description: "Divulgation complete des frais - pas de couts caches" },
    ],
    loanTypes: {
      title: "Nos types de credit PME",
      items: [
        { title: "Credit PME en blanc", description: "Financement d'entreprise non garanti" },
        { title: "Credit garanti", description: "Prets adosses a des garanties deposees" },
        { title: "Credit a court terme", description: "Financement jusqu'a 12 mois" },
      ],
    },
    process: {
      title: "Le processus en 3 etapes",
      steps: [
        { step: "1", title: "Demande & Examen", description: "Soumettez votre demande de credit pour evaluation." },
        { step: "2", title: "Financement & Approbation", description: "La communaute d'investisseurs examine et finance les demandes approuvees." },
        { step: "3", title: "Versement", description: "L'argent est transfere electroniquement sur votre compte professionnel." },
      ],
      timeline: "Env. 10 jours de l'approbation a la reception des fonds",
    },
    requirements: {
      title: "Conditions",
      items: [
        "Enregistrement d'entreprise suisse ou liechtensteinois",
        "Minimum 2 ans d'activite",
        "Chiffre d'affaires minimum CHF 100'000 par an",
        "Flux de tresorerie positif demontrable",
      ],
    },
    stats: "Plus de 60'000 particuliers et entreprises soutenus",
    cta: {
      title: "Demandez un credit PME maintenant",
      button: { label: "Demander un credit", href: "/fr/demander-un-credit/credit-pme" },
    },
  },
};

export function HowItWorksSme({ locale }: HowItWorksSmeProps) {
  const t = content[locale];

  return (
    <>
      {/* Hero Section */}
      <section class="py-20 md:py-32 bg-gradient-to-br from-amber-900 via-amber-800 to-orange-900 relative overflow-hidden">
        <div class="absolute inset-0 opacity-10">
          <div class="absolute -top-40 -right-40 w-80 h-80 bg-amber-400 rounded-full blur-3xl"></div>
          <div class="absolute -bottom-40 -left-40 w-80 h-80 bg-orange-400 rounded-full blur-3xl"></div>
        </div>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <a href={t.backLink.href} class="inline-flex items-center text-amber-200 hover:text-white mb-8 transition-colors">
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
            {t.backLink.label}
          </a>
          <div class="text-center">
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">{t.title}</h1>
            <p class="text-xl md:text-2xl text-amber-100 mb-4 max-w-3xl mx-auto">{t.subtitle}</p>
            <p class="text-lg text-amber-100 max-w-2xl mx-auto">{t.heroText}</p>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid md:grid-cols-3 gap-8">
            {t.advantages.map((item, index) => (
              <div key={index} class="bg-amber-50 rounded-2xl p-8 text-center">
                <h3 class="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p class="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Loan Types */}
      <section class="py-20 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">{t.loanTypes.title}</h2>
          <div class="grid md:grid-cols-3 gap-8">
            {t.loanTypes.items.map((item, index) => (
              <div key={index} class="bg-white rounded-xl p-6 shadow-sm">
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
                <div class="flex-shrink-0 w-12 h-12 bg-amber-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
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
            <p class="text-lg text-amber-600 font-medium">{t.process.timeline}</p>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section class="py-20 bg-gray-50">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">{t.requirements.title}</h2>
          <div class="bg-white rounded-2xl p-8">
            <ul class="grid md:grid-cols-2 gap-4">
              {t.requirements.items.map((item, index) => (
                <li key={index} class="flex items-center gap-3">
                  <svg class="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span class="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section class="py-20 bg-gradient-to-r from-amber-600 to-orange-600">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p class="text-xl text-amber-100 mb-4">{t.stats}</p>
          <h2 class="text-3xl md:text-4xl font-bold text-white mb-8">{t.cta.title}</h2>
          <a
            href={t.cta.button.href}
            class="inline-flex items-center px-8 py-4 bg-white text-amber-900 font-semibold rounded-lg hover:bg-amber-50 transition-colors"
          >
            {t.cta.button.label}
          </a>
        </div>
      </section>
    </>
  );
}
