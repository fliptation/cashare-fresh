import type { Locale } from "../../lib/i18n/index.ts";

interface PrivateInvestorsProps {
  locale: Locale;
}

const content = {
  de: {
    title: "Privatinvestoren",
    subtitle: "Investieren Sie direkt in Kredite",
    heroText: "Erzielen Sie attraktive Renditen und diversifizieren Sie Ihr Portfolio mit Private Debt.",
    cta: "Jetzt starten",
    ctaHref: "/registrieren",
    backLink: { label: "Zurück zur Übersicht", href: "/investieren" },
    benefits: {
      title: "Vorteile für Privatinvestoren",
      items: [
        {
          title: "Attraktive Renditen",
          description: "Durchschnittlich 5-8% Rendite pro Jahr auf Ihre Investitionen in Kredite.",
          icon: "chart",
        },
        {
          title: "Bereits ab CHF 100",
          description: "Starten Sie mit kleinen Beträgen und bauen Sie Ihr Portfolio schrittweise auf.",
          icon: "coin",
        },
        {
          title: "Diversifikation",
          description: "Streuen Sie Ihr Risiko über verschiedene Kreditnehmer, Laufzeiten und Kreditarten.",
          icon: "grid",
        },
        {
          title: "Monatliche Erträge",
          description: "Erhalten Sie regelmässige Zins- und Tilgungszahlungen direkt auf Ihr Konto.",
          icon: "calendar",
        },
      ],
    },
    howItWorks: {
      title: "So funktioniert's",
      steps: [
        {
          title: "Registrieren",
          description: "Erstellen Sie kostenlos ein Konto und verifizieren Sie Ihre Identität online.",
        },
        {
          title: "Einzahlen",
          description: "Überweisen Sie Ihr Investitionskapital auf Ihr persönliches Cashare-Konto.",
        },
        {
          title: "Projekte wählen",
          description: "Wählen Sie manuell Kreditprojekte oder nutzen Sie unseren Auto-Invest.",
        },
        {
          title: "Rendite erhalten",
          description: "Erhalten Sie monatliche Zahlungen und verfolgen Sie Ihre Performance.",
        },
      ],
    },
    autoInvest: {
      title: "Auto-Invest",
      description: "Lassen Sie Ihr Geld automatisch für Sie arbeiten. Mit Auto-Invest investieren Sie nach Ihren Kriterien in geprüfte Kreditprojekte - ohne manuellen Aufwand.",
      features: [
        "Individuelle Risikopräferenzen",
        "Automatische Diversifikation",
        "Zeitsparend und effizient",
        "Jederzeit anpassbar",
      ],
    },
    risks: {
      title: "Risiken verstehen",
      text: "Wie bei jeder Investition bestehen Risiken. Kreditnehmer können ausfallen, was zu Kapitalverlusten führen kann. Wir minimieren dieses Risiko durch sorgfältige Bonitätsprüfung und empfehlen eine breite Diversifikation.",
    },
    faq: {
      title: "Häufige Fragen",
      items: [
        {
          question: "Wie hoch ist die Mindestinvestition?",
          answer: "Sie können bereits ab CHF 100 in einzelne Kreditprojekte investieren.",
        },
        {
          question: "Wie werden die Zinsen ausgezahlt?",
          answer: "Die Zinsen werden monatlich zusammen mit den Tilgungsraten auf Ihr Cashare-Konto gutgeschrieben.",
        },
        {
          question: "Kann ich mein Geld vorzeitig abheben?",
          answer: "Ja, Sie können Ihr nicht investiertes Guthaben jederzeit abheben. Laufende Investitionen können über den Sekundärmarkt verkauft werden.",
        },
        {
          question: "Wie werden die Kredite geprüft?",
          answer: "Jeder Kreditantrag durchläuft eine umfassende Bonitätsprüfung mit Scoring und manueller Prüfung.",
        },
      ],
    },
  },
  en: {
    title: "Private Investors",
    subtitle: "Invest directly in loans",
    heroText: "Achieve attractive returns and diversify your portfolio with Private Debt.",
    cta: "Get started",
    ctaHref: "/en/register",
    backLink: { label: "Back to overview", href: "/en/invest" },
    benefits: {
      title: "Benefits for Private Investors",
      items: [
        {
          title: "Attractive Returns",
          description: "Average 5-8% annual returns on your loan investments.",
          icon: "chart",
        },
        {
          title: "Start from CHF 100",
          description: "Start with small amounts and build your portfolio gradually.",
          icon: "coin",
        },
        {
          title: "Diversification",
          description: "Spread your risk across different borrowers, terms, and loan types.",
          icon: "grid",
        },
        {
          title: "Monthly Income",
          description: "Receive regular interest and principal payments directly to your account.",
          icon: "calendar",
        },
      ],
    },
    howItWorks: {
      title: "How It Works",
      steps: [
        {
          title: "Register",
          description: "Create a free account and verify your identity online.",
        },
        {
          title: "Deposit",
          description: "Transfer your investment capital to your personal Cashare account.",
        },
        {
          title: "Choose Projects",
          description: "Manually select loan projects or use our Auto-Invest feature.",
        },
        {
          title: "Earn Returns",
          description: "Receive monthly payments and track your performance.",
        },
      ],
    },
    autoInvest: {
      title: "Auto-Invest",
      description: "Let your money work for you automatically. With Auto-Invest, you invest in vetted loan projects according to your criteria - without manual effort.",
      features: [
        "Individual risk preferences",
        "Automatic diversification",
        "Time-saving and efficient",
        "Adjustable anytime",
      ],
    },
    risks: {
      title: "Understanding Risks",
      text: "As with any investment, there are risks. Borrowers may default, which can lead to capital losses. We minimize this risk through careful credit checks and recommend broad diversification.",
    },
    faq: {
      title: "Frequently Asked Questions",
      items: [
        {
          question: "What is the minimum investment?",
          answer: "You can invest in individual loan projects starting from CHF 100.",
        },
        {
          question: "How are interest payments made?",
          answer: "Interest is credited monthly to your Cashare account along with principal repayments.",
        },
        {
          question: "Can I withdraw my money early?",
          answer: "Yes, you can withdraw uninvested funds at any time. Ongoing investments can be sold on the secondary market.",
        },
        {
          question: "How are loans vetted?",
          answer: "Every loan application undergoes comprehensive credit assessment with scoring and manual review.",
        },
      ],
    },
  },
  fr: {
    title: "Investisseurs Prives",
    subtitle: "Investissez directement dans des credits",
    heroText: "Obtenez des rendements attractifs et diversifiez votre portefeuille avec le Private Debt.",
    cta: "Commencer",
    ctaHref: "/fr/inscription",
    backLink: { label: "Retour a l'apercu", href: "/fr/investir" },
    benefits: {
      title: "Avantages pour les investisseurs prives",
      items: [
        {
          title: "Rendements attractifs",
          description: "Rendements moyens de 5 a 8% par an sur vos investissements en credits.",
          icon: "chart",
        },
        {
          title: "Des CHF 100",
          description: "Commencez avec de petits montants et construisez votre portefeuille progressivement.",
          icon: "coin",
        },
        {
          title: "Diversification",
          description: "Repartissez vos risques sur differents emprunteurs, durees et types de credits.",
          icon: "grid",
        },
        {
          title: "Revenus mensuels",
          description: "Recevez des paiements reguliers d'interets et de capital directement sur votre compte.",
          icon: "calendar",
        },
      ],
    },
    howItWorks: {
      title: "Comment ca marche",
      steps: [
        {
          title: "S'inscrire",
          description: "Creez un compte gratuit et verifiez votre identite en ligne.",
        },
        {
          title: "Deposer",
          description: "Transferez votre capital d'investissement sur votre compte Cashare personnel.",
        },
        {
          title: "Choisir des projets",
          description: "Selectionnez manuellement des projets de credit ou utilisez notre Auto-Invest.",
        },
        {
          title: "Recevoir des rendements",
          description: "Recevez des paiements mensuels et suivez votre performance.",
        },
      ],
    },
    autoInvest: {
      title: "Auto-Invest",
      description: "Laissez votre argent travailler automatiquement pour vous. Avec Auto-Invest, vous investissez dans des projets de credit verifies selon vos criteres - sans effort manuel.",
      features: [
        "Preferences de risque individuelles",
        "Diversification automatique",
        "Gain de temps et efficacite",
        "Ajustable a tout moment",
      ],
    },
    risks: {
      title: "Comprendre les risques",
      text: "Comme pour tout investissement, il existe des risques. Les emprunteurs peuvent faire defaut, ce qui peut entrainer des pertes en capital. Nous minimisons ce risque par des verifications de credit rigoureuses et recommandons une large diversification.",
    },
    faq: {
      title: "Questions frequentes",
      items: [
        {
          question: "Quel est l'investissement minimum?",
          answer: "Vous pouvez investir dans des projets de credit individuels a partir de CHF 100.",
        },
        {
          question: "Comment les interets sont-ils payes?",
          answer: "Les interets sont credites mensuellement sur votre compte Cashare avec les remboursements de capital.",
        },
        {
          question: "Puis-je retirer mon argent a l'avance?",
          answer: "Oui, vous pouvez retirer les fonds non investis a tout moment. Les investissements en cours peuvent etre vendus sur le marche secondaire.",
        },
        {
          question: "Comment les credits sont-ils verifies?",
          answer: "Chaque demande de credit fait l'objet d'une evaluation complete avec scoring et examen manuel.",
        },
      ],
    },
  },
};

export function PrivateInvestors({ locale }: PrivateInvestorsProps) {
  const t = content[locale];

  return (
    <>
      {/* Hero Section */}
      <section class="py-20 md:py-32 bg-gradient-to-br from-green-900 via-green-800 to-emerald-900 relative overflow-hidden">
        <div class="absolute inset-0 opacity-10">
          <div class="absolute -top-40 -right-40 w-80 h-80 bg-emerald-400 rounded-full blur-3xl"></div>
          <div class="absolute -bottom-40 -left-40 w-80 h-80 bg-green-400 rounded-full blur-3xl"></div>
        </div>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <a href={t.backLink.href} class="inline-flex items-center text-green-200 hover:text-white mb-8 transition-colors">
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
            {t.backLink.label}
          </a>
          <div class="text-center">
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">{t.title}</h1>
            <p class="text-xl md:text-2xl text-green-100 mb-4 max-w-3xl mx-auto">{t.subtitle}</p>
            <p class="text-lg text-green-100 max-w-2xl mx-auto mb-8">{t.heroText}</p>
            <a
              href={t.ctaHref}
              class="inline-flex items-center px-8 py-4 bg-white text-green-900 font-semibold rounded-lg hover:bg-green-50 transition-colors"
            >
              {t.cta}
            </a>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">{t.benefits.title}</h2>
          <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.benefits.items.map((benefit, index) => (
              <div key={index} class="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all">
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
      <section class="py-20 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">{t.howItWorks.title}</h2>
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

      {/* Auto-Invest */}
      <section class="py-20 bg-green-900">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">{t.autoInvest.title}</h2>
              <p class="text-lg text-green-100 mb-8">{t.autoInvest.description}</p>
              <ul class="space-y-3">
                {t.autoInvest.features.map((feature, index) => (
                  <li key={index} class="flex items-center text-green-100">
                    <svg class="w-5 h-5 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div class="bg-white/10 backdrop-blur-lg rounded-2xl p-8">
              <div class="text-center">
                <div class="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg class="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div class="text-4xl font-bold text-white mb-2">Auto-Invest</div>
                <div class="text-green-200">Smart. Automatisch. Effizient.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Risks */}
      <section class="py-16 bg-amber-50">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex items-start gap-4">
            <div class="flex-shrink-0">
              <svg class="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <div>
              <h3 class="text-xl font-semibold text-gray-900 mb-2">{t.risks.title}</h3>
              <p class="text-gray-700">{t.risks.text}</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section class="py-20 bg-white">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">{t.faq.title}</h2>
          <div class="space-y-6">
            {t.faq.items.map((item, index) => (
              <div key={index} class="bg-gray-50 rounded-xl p-6">
                <h3 class="text-lg font-semibold text-gray-900 mb-2">{item.question}</h3>
                <p class="text-gray-600">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section class="py-20 bg-gradient-to-r from-green-600 to-emerald-600">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">{t.cta}</h2>
          <a
            href={t.ctaHref}
            class="inline-flex items-center px-8 py-4 bg-white text-green-900 font-semibold rounded-lg hover:bg-green-50 transition-colors"
          >
            {t.cta}
          </a>
        </div>
      </section>
    </>
  );
}
