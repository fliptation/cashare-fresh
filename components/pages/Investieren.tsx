import type { Locale } from "../../lib/i18n/index.ts";

interface InvestierenProps {
  locale: Locale;
}

const content = {
  de: {
    title: "Investieren",
    subtitle: "Entfalten Sie Ihr finanzielles Potenzial",
    heroText: "Bei Cashare bieten wir Ihnen massgeschneiderte Moglichkeiten, um in Kredite (Private Debt) investieren zu konnen.",
    cta: "Jetzt investieren",
    ctaHref: "/registrieren",
    privatinvestor: {
      title: "Privatinvestoren",
      description: "Investieren Sie direkt in Kredite und erzielen Sie attraktive Renditen. Diversifizieren Sie Ihr Portfolio mit Private Debt.",
      href: "/investieren/privatinvestoren",
      cta: "Mehr erfahren",
    },
    institutional: {
      title: "Institutionelle Investoren",
      description: "Professionelle Losungen fur Banken, Pensionskassen und Vermogensverwalter mit massgeschneiderten Anlagestrategien.",
      href: "/investieren/institutionelle",
      cta: "Mehr erfahren",
    },
    benefits: {
      title: "Ihre Investition, Ihr Weg",
      subtitle: "Ubernehmen Sie die Kontrolle uber Ihre finanzielle Zukunft mit flexiblen, renditestarken Investitionsmoglichkeiten.",
      items: [
        {
          title: "Attraktive Renditen",
          description: "Erzielen Sie durchschnittlich 5-8% Rendite pro Jahr auf Ihre Investitionen.",
        },
        {
          title: "Diversifikation",
          description: "Streuen Sie Ihr Risiko uber verschiedene Kreditnehmer und Laufzeiten.",
        },
        {
          title: "Transparenz",
          description: "Volle Transparenz uber alle Kreditprojekte und deren Performance.",
        },
        {
          title: "Flexibilitat",
          description: "Wahlen Sie selbst, in welche Projekte Sie investieren mochten.",
        },
      ],
    },
    howItWorks: {
      title: "So funktioniert das Investieren",
      steps: [
        {
          title: "Registrieren",
          description: "Erstellen Sie kostenlos ein Konto und verifizieren Sie Ihre Identitat.",
        },
        {
          title: "Einzahlen",
          description: "Uberweisen Sie Ihr Investitionskapital auf Ihr Cashare-Konto.",
        },
        {
          title: "Investieren",
          description: "Wahlen Sie Kreditprojekte aus oder nutzen Sie unseren Auto-Invest.",
        },
        {
          title: "Rendite erhalten",
          description: "Erhalten Sie monatliche Zins- und Tilgungszahlungen.",
        },
      ],
    },
    stats: {
      title: "Cashare in Zahlen",
      items: [
        { value: "5.8%", label: "Durchschnittliche Rendite" },
        { value: "CHF 2.5 Mrd.", label: "Finanziertes Volumen" },
        { value: "4700+", label: "Finanzierte Projekte" },
        { value: "<1%", label: "Ausfallquote" },
      ],
    },
  },
  en: {
    title: "Invest",
    subtitle: "Unlock your financial potential",
    heroText: "At Cashare, we offer you tailored opportunities to invest in loans (Private Debt).",
    cta: "Start investing",
    ctaHref: "/en/register",
    privatinvestor: {
      title: "Private Investors",
      description: "Invest directly in loans and achieve attractive returns. Diversify your portfolio with Private Debt.",
      href: "/en/invest/private-investors",
      cta: "Learn more",
    },
    institutional: {
      title: "Institutional Investors",
      description: "Professional solutions for banks, pension funds and asset managers with tailored investment strategies.",
      href: "/en/invest/institutional",
      cta: "Learn more",
    },
    benefits: {
      title: "Your Investment, Your Way",
      subtitle: "Take control of your financial future with flexible, high-yield investment opportunities.",
      items: [
        {
          title: "Attractive Returns",
          description: "Achieve average returns of 5-8% per year on your investments.",
        },
        {
          title: "Diversification",
          description: "Spread your risk across different borrowers and maturities.",
        },
        {
          title: "Transparency",
          description: "Full transparency on all loan projects and their performance.",
        },
        {
          title: "Flexibility",
          description: "Choose which projects you want to invest in.",
        },
      ],
    },
    howItWorks: {
      title: "How Investing Works",
      steps: [
        {
          title: "Register",
          description: "Create a free account and verify your identity.",
        },
        {
          title: "Deposit",
          description: "Transfer your investment capital to your Cashare account.",
        },
        {
          title: "Invest",
          description: "Select loan projects or use our Auto-Invest feature.",
        },
        {
          title: "Earn Returns",
          description: "Receive monthly interest and principal payments.",
        },
      ],
    },
    stats: {
      title: "Cashare by the Numbers",
      items: [
        { value: "5.8%", label: "Average Return" },
        { value: "CHF 2.5B", label: "Financed Volume" },
        { value: "4700+", label: "Funded Projects" },
        { value: "<1%", label: "Default Rate" },
      ],
    },
  },
  fr: {
    title: "Investir",
    subtitle: "Liberez votre potentiel financier",
    heroText: "Chez Cashare, nous vous offrons des opportunites sur mesure pour investir dans des credits (Private Debt).",
    cta: "Commencer a investir",
    ctaHref: "/fr/inscription",
    privatinvestor: {
      title: "Investisseurs prives",
      description: "Investissez directement dans des credits et obtenez des rendements attractifs. Diversifiez votre portefeuille avec le Private Debt.",
      href: "/fr/investir/investisseurs-prives",
      cta: "En savoir plus",
    },
    institutional: {
      title: "Investisseurs institutionnels",
      description: "Solutions professionnelles pour banques, caisses de pension et gestionnaires de fortune avec des strategies d'investissement sur mesure.",
      href: "/fr/investir/institutionnels",
      cta: "En savoir plus",
    },
    benefits: {
      title: "Votre investissement, votre choix",
      subtitle: "Prenez le controle de votre avenir financier avec des opportunites d'investissement flexibles et a haut rendement.",
      items: [
        {
          title: "Rendements attractifs",
          description: "Obtenez des rendements moyens de 5 a 8% par an sur vos investissements.",
        },
        {
          title: "Diversification",
          description: "Repartissez vos risques sur differents emprunteurs et echeances.",
        },
        {
          title: "Transparence",
          description: "Transparence totale sur tous les projets de credit et leurs performances.",
        },
        {
          title: "Flexibilite",
          description: "Choisissez dans quels projets vous souhaitez investir.",
        },
      ],
    },
    howItWorks: {
      title: "Comment fonctionne l'investissement",
      steps: [
        {
          title: "S'inscrire",
          description: "Creez un compte gratuit et verifiez votre identite.",
        },
        {
          title: "Deposer",
          description: "Transferez votre capital d'investissement sur votre compte Cashare.",
        },
        {
          title: "Investir",
          description: "Selectionnez des projets de credit ou utilisez notre Auto-Invest.",
        },
        {
          title: "Recevoir des rendements",
          description: "Recevez des paiements mensuels d'interets et de capital.",
        },
      ],
    },
    stats: {
      title: "Cashare en chiffres",
      items: [
        { value: "5.8%", label: "Rendement moyen" },
        { value: "CHF 2.5 Mrd.", label: "Volume finance" },
        { value: "4700+", label: "Projets finances" },
        { value: "<1%", label: "Taux de defaut" },
      ],
    },
  },
};

export function Investieren({ locale }: InvestierenProps) {
  const t = content[locale];

  return (
    <>
      {/* Hero Section */}
      <section class="py-20 md:py-32 bg-gradient-to-br from-green-900 via-green-800 to-green-900 relative overflow-hidden">
        <div class="absolute inset-0 opacity-10">
          <div class="absolute -top-40 -right-40 w-80 h-80 bg-emerald-500 rounded-full blur-3xl"></div>
          <div class="absolute -bottom-40 -left-40 w-80 h-80 bg-green-500 rounded-full blur-3xl"></div>
        </div>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div class="text-center">
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              {t.title}
            </h1>
            <p class="text-xl md:text-2xl text-green-100 mb-4 max-w-3xl mx-auto">
              {t.subtitle}
            </p>
            <p class="text-lg text-green-100 max-w-2xl mx-auto mb-8">
              {t.heroText}
            </p>
            <a
              href={t.ctaHref}
              class="inline-flex items-center px-8 py-4 bg-white text-green-900 font-semibold rounded-lg hover:bg-green-50 transition-colors"
            >
              {t.cta}
            </a>
          </div>
        </div>
      </section>

      {/* Investor Types */}
      <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid md:grid-cols-2 gap-8">
            {/* Private Investors */}
            <div class="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-all">
              <div class="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-gray-900 mb-3">{t.privatinvestor.title}</h3>
              <p class="text-gray-600 mb-6">{t.privatinvestor.description}</p>
              <a
                href={t.privatinvestor.href}
                class="inline-flex items-center px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors"
              >
                {t.privatinvestor.cta}
              </a>
            </div>

            {/* Institutional Investors */}
            <div class="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-all">
              <div class="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-gray-900 mb-3">{t.institutional.title}</h3>
              <p class="text-gray-600 mb-6">{t.institutional.description}</p>
              <a
                href={t.institutional.href}
                class="inline-flex items-center px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors"
              >
                {t.institutional.cta}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section class="py-20 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t.benefits.title}
            </h2>
            <p class="text-xl text-gray-600 max-w-2xl mx-auto">
              {t.benefits.subtitle}
            </p>
          </div>
          <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.benefits.items.map((benefit, index) => (
              <div key={index} class="bg-white rounded-xl p-6 shadow-sm">
                <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 class="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p class="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
            {t.howItWorks.title}
          </h2>
          <div class="grid md:grid-cols-4 gap-8">
            {t.howItWorks.steps.map((step, index) => (
              <div key={index} class="text-center">
                <div class="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {index + 1}
                </div>
                <h3 class="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p class="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section class="py-20 bg-green-900">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-3xl md:text-4xl font-bold text-center text-white mb-16">
            {t.stats.title}
          </h2>
          <div class="grid md:grid-cols-4 gap-8">
            {t.stats.items.map((stat, index) => (
              <div key={index} class="text-center">
                <div class="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</div>
                <div class="text-green-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
