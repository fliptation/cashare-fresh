import type { Locale } from "../../lib/i18n/index.ts";

interface InstitutionalInvestorsProps {
  locale: Locale;
}

const content = {
  de: {
    title: "Institutionelle Investoren",
    subtitle: "Professionelle Private Debt Losungen",
    heroText: "Massgeschneiderte Anlagestrategien fur Banken, Pensionskassen und Vermogensverwalter.",
    cta: "Kontakt aufnehmen",
    ctaHref: "mailto:institutional@cashare.ch",
    backLink: { label: "Zuruck zur Ubersicht", href: "/investieren" },
    intro: {
      title: "Ihr Partner fur Private Debt",
      text: "Cashare bietet institutionellen Investoren Zugang zu einem diversifizierten Portfolio von Schweizer Privat- und KMU-Krediten. Mit uber 15 Jahren Erfahrung und einem verwalteten Volumen von uber CHF 2.5 Mrd. sind wir Ihr verlasslicher Partner fur alternative Anlagen.",
    },
    solutions: {
      title: "Unsere Losungen",
      items: [
        {
          title: "Direktinvestition",
          description: "Investieren Sie direkt in einzelne Kreditprojekte mit voller Kontrolle uber Ihre Allokation.",
          features: ["Individuelle Projektauswahl", "Transparente Konditionen", "Detaillierte Reporting"],
        },
        {
          title: "Managed Account",
          description: "Uberlassen Sie die Selektion unseren Experten nach Ihren Vorgaben.",
          features: ["Professionelles Management", "Massgeschneiderte Strategie", "Regelmasslge Reviews"],
        },
        {
          title: "White-Label-Losung",
          description: "Bieten Sie Ihren Kunden Private Debt unter Ihrer eigenen Marke an.",
          features: ["Vollstandiges Branding", "API-Integration", "Dedizierter Support"],
        },
      ],
    },
    benefits: {
      title: "Vorteile fur institutionelle Anleger",
      items: [
        { title: "Attraktive Renditen", description: "Uberdurchschnittliche risikoadjustierte Returns im Vergleich zu traditionellen Fixed-Income-Anlagen." },
        { title: "Niedrige Korrelation", description: "Geringe Korrelation zu offentlichen Markten fur echte Portfoliodiversifikation." },
        { title: "Stabile Cashflows", description: "Regelmasslge, planbare Zahlungsstrome durch amortisierende Kredite." },
        { title: "ESG-Integration", description: "Nachhaltigkeitskriterien in der Kreditvergabe und im Reporting." },
      ],
    },
    process: {
      title: "Unser Prozess",
      steps: [
        { title: "Beratungsgesprach", description: "Wir analysieren Ihre Anforderungen und Anlageziele." },
        { title: "Massgeschneiderte Strategie", description: "Entwicklung einer individuellen Investmentstrategie." },
        { title: "Implementierung", description: "Effiziente Umsetzung mit modernem Onboarding." },
        { title: "Laufendes Reporting", description: "Transparente Berichterstattung und regelmasslge Reviews." },
      ],
    },
    compliance: {
      title: "Regulierung & Compliance",
      items: [
        "FINMA-regulierte Plattform",
        "Schweizer Datenschutzstandards",
        "Jahrliche Audits",
        "AML/KYC-konform",
      ],
    },
    contact: {
      title: "Kontaktieren Sie uns",
      text: "Unser Institutional Sales Team steht Ihnen fur ein personliches Gesprach zur Verfugung.",
      email: "institutional@cashare.ch",
      phone: "+41 41 544 61 70",
    },
  },
  en: {
    title: "Institutional Investors",
    subtitle: "Professional Private Debt Solutions",
    heroText: "Tailored investment strategies for banks, pension funds, and asset managers.",
    cta: "Contact us",
    ctaHref: "mailto:institutional@cashare.ch",
    backLink: { label: "Back to overview", href: "/en/invest" },
    intro: {
      title: "Your Partner for Private Debt",
      text: "Cashare offers institutional investors access to a diversified portfolio of Swiss private and SME loans. With over 15 years of experience and assets under management exceeding CHF 2.5 billion, we are your reliable partner for alternative investments.",
    },
    solutions: {
      title: "Our Solutions",
      items: [
        {
          title: "Direct Investment",
          description: "Invest directly in individual loan projects with full control over your allocation.",
          features: ["Individual project selection", "Transparent terms", "Detailed reporting"],
        },
        {
          title: "Managed Account",
          description: "Let our experts handle selection according to your specifications.",
          features: ["Professional management", "Customized strategy", "Regular reviews"],
        },
        {
          title: "White-Label Solution",
          description: "Offer Private Debt to your clients under your own brand.",
          features: ["Complete branding", "API integration", "Dedicated support"],
        },
      ],
    },
    benefits: {
      title: "Benefits for Institutional Investors",
      items: [
        { title: "Attractive Returns", description: "Above-average risk-adjusted returns compared to traditional fixed-income investments." },
        { title: "Low Correlation", description: "Low correlation to public markets for genuine portfolio diversification." },
        { title: "Stable Cash Flows", description: "Regular, predictable payment streams from amortizing loans." },
        { title: "ESG Integration", description: "Sustainability criteria in lending and reporting." },
      ],
    },
    process: {
      title: "Our Process",
      steps: [
        { title: "Consultation", description: "We analyze your requirements and investment objectives." },
        { title: "Customized Strategy", description: "Development of an individual investment strategy." },
        { title: "Implementation", description: "Efficient execution with modern onboarding." },
        { title: "Ongoing Reporting", description: "Transparent reporting and regular reviews." },
      ],
    },
    compliance: {
      title: "Regulation & Compliance",
      items: [
        "FINMA-regulated platform",
        "Swiss data protection standards",
        "Annual audits",
        "AML/KYC compliant",
      ],
    },
    contact: {
      title: "Contact Us",
      text: "Our Institutional Sales Team is available for a personal consultation.",
      email: "institutional@cashare.ch",
      phone: "+41 41 544 61 70",
    },
  },
  fr: {
    title: "Investisseurs Institutionnels",
    subtitle: "Solutions professionnelles de Private Debt",
    heroText: "Strategies d'investissement sur mesure pour les banques, caisses de pension et gestionnaires de fortune.",
    cta: "Nous contacter",
    ctaHref: "mailto:institutional@cashare.ch",
    backLink: { label: "Retour a l'apercu", href: "/fr/investir" },
    intro: {
      title: "Votre partenaire pour le Private Debt",
      text: "Cashare offre aux investisseurs institutionnels l'acces a un portefeuille diversifie de credits prives et PME suisses. Avec plus de 15 ans d'experience et un volume gere de plus de CHF 2,5 milliards, nous sommes votre partenaire fiable pour les investissements alternatifs.",
    },
    solutions: {
      title: "Nos solutions",
      items: [
        {
          title: "Investissement direct",
          description: "Investissez directement dans des projets de credit individuels avec un controle total sur votre allocation.",
          features: ["Selection de projets individuelle", "Conditions transparentes", "Reporting detaille"],
        },
        {
          title: "Compte gere",
          description: "Laissez nos experts gerer la selection selon vos specifications.",
          features: ["Gestion professionnelle", "Strategie sur mesure", "Revues regulieres"],
        },
        {
          title: "Solution en marque blanche",
          description: "Offrez le Private Debt a vos clients sous votre propre marque.",
          features: ["Branding complet", "Integration API", "Support dedie"],
        },
      ],
    },
    benefits: {
      title: "Avantages pour les investisseurs institutionnels",
      items: [
        { title: "Rendements attractifs", description: "Rendements ajustes au risque superieurs a la moyenne par rapport aux investissements a revenu fixe traditionnels." },
        { title: "Faible correlation", description: "Faible correlation avec les marches publics pour une veritable diversification de portefeuille." },
        { title: "Flux de tresorerie stables", description: "Flux de paiement reguliers et previsibles grace aux credits amortissables." },
        { title: "Integration ESG", description: "Criteres de durabilite dans l'octroi de credits et le reporting." },
      ],
    },
    process: {
      title: "Notre processus",
      steps: [
        { title: "Consultation", description: "Nous analysons vos besoins et objectifs d'investissement." },
        { title: "Strategie sur mesure", description: "Developpement d'une strategie d'investissement individuelle." },
        { title: "Mise en oeuvre", description: "Execution efficace avec un onboarding moderne." },
        { title: "Reporting continu", description: "Rapports transparents et revues regulieres." },
      ],
    },
    compliance: {
      title: "Regulation & Conformite",
      items: [
        "Plateforme regulee par la FINMA",
        "Standards suisses de protection des donnees",
        "Audits annuels",
        "Conforme AML/KYC",
      ],
    },
    contact: {
      title: "Contactez-nous",
      text: "Notre equipe de ventes institutionnelles est disponible pour une consultation personnelle.",
      email: "institutional@cashare.ch",
      phone: "+41 41 544 61 70",
    },
  },
};

export function InstitutionalInvestors({ locale }: InstitutionalInvestorsProps) {
  const t = content[locale];

  return (
    <>
      {/* Hero Section */}
      <section class="py-20 md:py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        <div class="absolute inset-0 opacity-10">
          <div class="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full blur-3xl"></div>
          <div class="absolute -bottom-40 -left-40 w-80 h-80 bg-slate-500 rounded-full blur-3xl"></div>
        </div>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <a href={t.backLink.href} class="inline-flex items-center text-slate-300 hover:text-white mb-8 transition-colors">
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
            {t.backLink.label}
          </a>
          <div class="text-center">
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">{t.title}</h1>
            <p class="text-xl md:text-2xl text-slate-300 mb-4 max-w-3xl mx-auto">{t.subtitle}</p>
            <p class="text-lg text-slate-300 max-w-2xl mx-auto mb-8">{t.heroText}</p>
            <a
              href={t.ctaHref}
              class="inline-flex items-center px-8 py-4 bg-white text-slate-900 font-semibold rounded-lg hover:bg-slate-100 transition-colors"
            >
              {t.cta}
            </a>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section class="py-20 bg-white">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{t.intro.title}</h2>
          <p class="text-xl text-gray-600 leading-relaxed">{t.intro.text}</p>
        </div>
      </section>

      {/* Solutions */}
      <section class="py-20 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">{t.solutions.title}</h2>
          <div class="grid md:grid-cols-3 gap-8">
            {t.solutions.items.map((solution, index) => (
              <div key={index} class="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all">
                <h3 class="text-2xl font-bold text-gray-900 mb-4">{solution.title}</h3>
                <p class="text-gray-600 mb-6">{solution.description}</p>
                <ul class="space-y-2">
                  {solution.features.map((feature, fIndex) => (
                    <li key={fIndex} class="flex items-center text-sm text-gray-700">
                      <svg class="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">{t.benefits.title}</h2>
          <div class="grid md:grid-cols-2 gap-8">
            {t.benefits.items.map((benefit, index) => (
              <div key={index} class="flex gap-4 p-6 bg-gray-50 rounded-xl">
                <div class="flex-shrink-0">
                  <div class="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center">
                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 class="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                  <p class="text-gray-600">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section class="py-20 bg-slate-900">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-3xl md:text-4xl font-bold text-center text-white mb-16">{t.process.title}</h2>
          <div class="grid md:grid-cols-4 gap-8">
            {t.process.steps.map((step, index) => (
              <div key={index} class="text-center">
                <div class="w-12 h-12 bg-white text-slate-900 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {index + 1}
                </div>
                <h3 class="text-xl font-semibold text-white mb-2">{step.title}</h3>
                <p class="text-slate-300">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance */}
      <section class="py-16 bg-gray-50">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-2xl font-bold text-center text-gray-900 mb-8">{t.compliance.title}</h2>
          <div class="flex flex-wrap justify-center gap-4">
            {t.compliance.items.map((item, index) => (
              <div key={index} class="flex items-center bg-white px-4 py-2 rounded-full shadow-sm">
                <svg class="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span class="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section class="py-20 bg-white">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{t.contact.title}</h2>
          <p class="text-xl text-gray-600 mb-8">{t.contact.text}</p>
          <div class="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a href={`mailto:${t.contact.email}`} class="inline-flex items-center px-6 py-3 bg-slate-900 text-white font-semibold rounded-lg hover:bg-slate-800 transition-colors">
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              {t.contact.email}
            </a>
            <a href={`tel:${t.contact.phone}`} class="inline-flex items-center px-6 py-3 border-2 border-slate-900 text-slate-900 font-semibold rounded-lg hover:bg-slate-50 transition-colors">
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {t.contact.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
