import type { Locale } from "../../lib/i18n/index.ts";

interface RatingProps {
  locale: Locale;
}

const content = {
  de: {
    title: "Rating",
    subtitle: "Unser Kreditbewertungssystem",
    heroText: "Cashare verwendet Big Data, kunstliche Intelligenz und Machine Learning, um die Kreditwurdigkeit zu bewerten.",
    backLink: { label: "Zuruck zu Uber uns", href: "/ueber-uns" },
    intro: {
      title: "Das Cashare Rating-System",
      text: "Jeder Kreditantrag wird anhand von Hunderten von Datenpunkten aus unserer historischen Datenbank und externen Quellen uber API-Verbindungen zu Zahlungs- und Behordendatenbanken bewertet.",
    },
    scale: {
      title: "Rating-Skala",
      description: "Kredite erhalten Ratings von A bis F",
      items: [
        { rating: "A", range: "3.9% - 5.4%", risk: "Tiefstes Risiko", color: "bg-green-500" },
        { rating: "B+", range: "4.0% - 5.9%", risk: "Sehr tiefes Risiko", color: "bg-green-400" },
        { rating: "B", range: "4.6% - 7.3%", risk: "Tiefes Risiko", color: "bg-lime-500" },
        { rating: "C+", range: "5.6% - 9.7%", risk: "Moderates Risiko", color: "bg-yellow-500" },
        { rating: "C", range: "7.0% - 11.4%", risk: "Mittleres Risiko", color: "bg-orange-500" },
      ],
      note: "Ratings D-F werden abgelehnt und nicht auf der Plattform gelistet.",
    },
    returns: {
      title: "Erwartete Rendite",
      value: "6.48%",
      label: "Geschatzte Gesamtrendite",
    },
    collateral: {
      title: "Sicherheiten",
      text: "Kredite konnen mit folgenden Sicherheiten abgesichert werden:",
      items: [
        "Hypotheken (Grundpfand)",
        "Personliche Burgschaften",
      ],
      note: "Sicherheiten werden bei der Endbewertung berucksichtigt.",
    },
    safeguards: {
      title: "Zusatzliche Sicherheitsmassnahmen",
      items: [
        "Mindestzinssatz verhindert Unterpreisbildung",
        "Nur Ratings C und besser qualifizieren fur Investitionen",
        "Sorgfaltige Bonitatsprufung aller Antrage",
        "Kontinuierliche Uberwachung der Kreditperformance",
      ],
    },
    cta: {
      investor: { title: "Als Anleger investieren", button: { label: "Jetzt investieren", href: "/investieren" } },
      borrower: { title: "Als Kreditnehmer beantragen", button: { label: "Kredit beantragen", href: "/kredit-beantragen" } },
    },
  },
  en: {
    title: "Rating",
    subtitle: "Our Credit Scoring System",
    heroText: "Cashare employs big data, artificial intelligence, and machine learning algorithms to assess creditworthiness.",
    backLink: { label: "Back to About Us", href: "/en/about" },
    intro: {
      title: "The Cashare Rating System",
      text: "Each loan application is evaluated against hundreds of data points from Cashare's historical database and external sources via API connections to payment and government databases.",
    },
    scale: {
      title: "Rating Scale",
      description: "Loans receive ratings from A to F",
      items: [
        { rating: "A", range: "3.9% - 5.4%", risk: "Lowest Risk", color: "bg-green-500" },
        { rating: "B+", range: "4.0% - 5.9%", risk: "Very Low Risk", color: "bg-green-400" },
        { rating: "B", range: "4.6% - 7.3%", risk: "Low Risk", color: "bg-lime-500" },
        { rating: "C+", range: "5.6% - 9.7%", risk: "Moderate Risk", color: "bg-yellow-500" },
        { rating: "C", range: "7.0% - 11.4%", risk: "Medium Risk", color: "bg-orange-500" },
      ],
      note: "Ratings D-F are rejected and not listed on the platform.",
    },
    returns: {
      title: "Expected Returns",
      value: "6.48%",
      label: "Estimated overall return",
    },
    collateral: {
      title: "Collateral Options",
      text: "Loans may be secured with:",
      items: [
        "Mortgages (ground liens)",
        "Personal guarantees",
      ],
      note: "Collateral is considered in final ratings.",
    },
    safeguards: {
      title: "Additional Safeguards",
      items: [
        "Minimum interest rate floor prevents underpricing",
        "Only ratings C and above qualify for investment",
        "Careful creditworthiness check of all applications",
        "Continuous monitoring of loan performance",
      ],
    },
    cta: {
      investor: { title: "Invest as an investor", button: { label: "Start investing", href: "/en/invest" } },
      borrower: { title: "Apply as a borrower", button: { label: "Apply for loan", href: "/en/apply-for-credit" } },
    },
  },
  fr: {
    title: "Rating",
    subtitle: "Notre systeme de notation de credit",
    heroText: "Cashare utilise le big data, l'intelligence artificielle et les algorithmes de machine learning pour evaluer la solvabilite.",
    backLink: { label: "Retour a A propos", href: "/fr/a-propos" },
    intro: {
      title: "Le systeme de notation Cashare",
      text: "Chaque demande de credit est evaluee selon des centaines de points de donnees provenant de notre base historique et de sources externes via des connexions API aux bases de donnees de paiement et gouvernementales.",
    },
    scale: {
      title: "Echelle de notation",
      description: "Les credits recoivent des notes de A a F",
      items: [
        { rating: "A", range: "3.9% - 5.4%", risk: "Risque le plus faible", color: "bg-green-500" },
        { rating: "B+", range: "4.0% - 5.9%", risk: "Risque tres faible", color: "bg-green-400" },
        { rating: "B", range: "4.6% - 7.3%", risk: "Risque faible", color: "bg-lime-500" },
        { rating: "C+", range: "5.6% - 9.7%", risk: "Risque modere", color: "bg-yellow-500" },
        { rating: "C", range: "7.0% - 11.4%", risk: "Risque moyen", color: "bg-orange-500" },
      ],
      note: "Les notes D-F sont rejetees et non listees sur la plateforme.",
    },
    returns: {
      title: "Rendements attendus",
      value: "6.48%",
      label: "Rendement global estime",
    },
    collateral: {
      title: "Options de garantie",
      text: "Les credits peuvent etre garantis par:",
      items: [
        "Hypotheques (cedules hypothecaires)",
        "Garanties personnelles",
      ],
      note: "Les garanties sont prises en compte dans la notation finale.",
    },
    safeguards: {
      title: "Mesures de securite supplementaires",
      items: [
        "Un taux d'interet plancher empeche la sous-tarification",
        "Seules les notes C et superieures sont eligibles a l'investissement",
        "Verification soigneuse de la solvabilite de toutes les demandes",
        "Surveillance continue de la performance des credits",
      ],
    },
    cta: {
      investor: { title: "Investir en tant qu'investisseur", button: { label: "Commencer a investir", href: "/fr/investir" } },
      borrower: { title: "Demander en tant qu'emprunteur", button: { label: "Demander un credit", href: "/fr/demander-un-credit" } },
    },
  },
};

export function Rating({ locale }: RatingProps) {
  const t = content[locale];

  return (
    <>
      {/* Hero Section */}
      <section class="py-20 md:py-32 bg-gradient-to-br from-violet-900 via-violet-800 to-purple-900 relative overflow-hidden">
        <div class="absolute inset-0 opacity-10">
          <div class="absolute -top-40 -right-40 w-80 h-80 bg-violet-400 rounded-full blur-3xl"></div>
          <div class="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400 rounded-full blur-3xl"></div>
        </div>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <a href={t.backLink.href} class="inline-flex items-center text-violet-200 hover:text-white mb-8 transition-colors">
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
            {t.backLink.label}
          </a>
          <div class="text-center">
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">{t.title}</h1>
            <p class="text-xl md:text-2xl text-violet-100 mb-4 max-w-3xl mx-auto">{t.subtitle}</p>
            <p class="text-lg text-violet-100 max-w-2xl mx-auto">{t.heroText}</p>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section class="py-20 bg-white">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{t.intro.title}</h2>
          <p class="text-xl text-gray-600 leading-relaxed">{t.intro.text}</p>
        </div>
      </section>

      {/* Rating Scale */}
      <section class="py-20 bg-gray-50">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">{t.scale.title}</h2>
          <p class="text-center text-gray-600 mb-12">{t.scale.description}</p>
          <div class="space-y-4">
            {t.scale.items.map((item, index) => (
              <div key={index} class="bg-white rounded-xl p-6 shadow-sm flex items-center gap-6">
                <div class={`w-14 h-14 ${item.color} rounded-xl flex items-center justify-center text-white text-xl font-bold`}>
                  {item.rating}
                </div>
                <div class="flex-1">
                  <div class="font-semibold text-gray-900">{item.risk}</div>
                  <div class="text-gray-600">Zinsen: {item.range}</div>
                </div>
              </div>
            ))}
          </div>
          <p class="text-center text-gray-500 mt-8">{t.scale.note}</p>
        </div>
      </section>

      {/* Expected Returns */}
      <section class="py-20 bg-violet-900">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 class="text-2xl font-bold text-violet-200 mb-4">{t.returns.title}</h2>
          <div class="text-7xl font-bold text-white mb-4">{t.returns.value}</div>
          <p class="text-violet-200">{t.returns.label}</p>
        </div>
      </section>

      {/* Collateral & Safeguards */}
      <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid md:grid-cols-2 gap-8">
            <div class="bg-gray-50 rounded-2xl p-8">
              <h2 class="text-2xl font-bold text-gray-900 mb-4">{t.collateral.title}</h2>
              <p class="text-gray-600 mb-6">{t.collateral.text}</p>
              <ul class="space-y-3 mb-6">
                {t.collateral.items.map((item, index) => (
                  <li key={index} class="flex items-center gap-3">
                    <svg class="w-5 h-5 text-violet-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span class="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <p class="text-sm text-gray-500">{t.collateral.note}</p>
            </div>
            <div class="bg-gray-50 rounded-2xl p-8">
              <h2 class="text-2xl font-bold text-gray-900 mb-6">{t.safeguards.title}</h2>
              <ul class="space-y-4">
                {t.safeguards.items.map((item, index) => (
                  <li key={index} class="flex items-start gap-3">
                    <svg class="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <span class="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTAs */}
      <section class="py-20 bg-gradient-to-r from-violet-600 to-purple-600">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid md:grid-cols-2 gap-8">
            <div class="text-center">
              <h3 class="text-2xl font-bold text-white mb-4">{t.cta.investor.title}</h3>
              <a
                href={t.cta.investor.button.href}
                class="inline-flex items-center px-8 py-4 bg-white text-violet-900 font-semibold rounded-lg hover:bg-violet-50 transition-colors"
              >
                {t.cta.investor.button.label}
              </a>
            </div>
            <div class="text-center">
              <h3 class="text-2xl font-bold text-white mb-4">{t.cta.borrower.title}</h3>
              <a
                href={t.cta.borrower.button.href}
                class="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
              >
                {t.cta.borrower.button.label}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
