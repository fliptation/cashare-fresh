import type { Locale } from "../../lib/i18n/index.ts";

interface HowItWorksProps {
  locale: Locale;
}

const content = {
  de: {
    title: "So funktioniert's",
    subtitle: "Ein Kredit so individuell wie Sie",
    heroText: "Cashare ermoglicht es Ihnen, Ihre Traume durch Crowdlending zu verwirklichen - Kredite bis CHF 1 Million ohne traditionelle Bank.",
    backLink: { label: "Zur Startseite", href: "/" },
    advantages: [
      { title: "FinTech-Pionier", description: "Die innovative Schweizer Crowdlending-Plattform seit 2008" },
      { title: "Attraktive Zinsen", description: "Zinsen ab 3.9% dank direktem Peer-to-Peer-Modell" },
      { title: "Schnelle Abwicklung", description: "Automatisierte Prozesse ermoglichen schnelle Auszahlung" },
    ],
    products: {
      title: "Unsere Finanzierungslosungen",
      items: [
        { title: "Privatkredit", description: "Personliche Kredite fur Privatpersonen bis CHF 250'000", href: "/so-funktionierts/privatkredit", icon: "user" },
        { title: "KMU-Kredit", description: "Geschaftskredite fur kleine und mittlere Unternehmen", href: "/so-funktionierts/kmu", icon: "building" },
        { title: "Hypothek", description: "Immobilienfinanzierung zu attraktiven Konditionen", href: "/so-funktionierts/hypothek", icon: "home" },
      ],
    },
    process: {
      title: "Der Ablauf in 3 Schritten",
      steps: [
        { step: "1", title: "Antrag & Prufung", description: "Stellen Sie online Ihren Kreditantrag. Wir prufen automatisiert Ihre Angaben." },
        { step: "2", title: "Finanzierung", description: "Nach Genehmigung wird Ihr Projekt den Anlegern prasentiert und finanziert." },
        { step: "3", title: "Auszahlung", description: "Die Kreditsumme wird elektronisch auf Ihr Bankkonto uberwiesen." },
      ],
    },
    stats: {
      title: "Uber 60'000 Menschen und Unternehmen vertrauen uns",
      timeline: "Ca. 10 Tage vom Antrag bis zur Auszahlung",
    },
    requirements: {
      title: "Voraussetzungen",
      items: [
        "Mindestalter 18 Jahre",
        "Wohnsitz in der Schweiz oder Liechtenstein",
        "Schweizer Bankkonto",
        "Feste Anstellung oder regelmassiges Einkommen",
        "Keine offenen Betreibungen oder Verlustscheine",
      ],
    },
    cta: {
      title: "Bereit loszulegen?",
      button: { label: "Kredit beantragen", href: "/kredit-beantragen" },
    },
  },
  en: {
    title: "How It Works",
    subtitle: "A loan as individual as you",
    heroText: "Cashare enables you to realize your dreams through crowdlending - loans up to CHF 1 million without traditional banking.",
    backLink: { label: "To Homepage", href: "/en" },
    advantages: [
      { title: "FinTech Pioneer", description: "Switzerland's innovative crowdlending platform since 2008" },
      { title: "Competitive Rates", description: "Interest from 3.9% thanks to direct peer-to-peer model" },
      { title: "Fast Processing", description: "Automated processes enable quick disbursement" },
    ],
    products: {
      title: "Our Financing Solutions",
      items: [
        { title: "Private Loan", description: "Personal loans for individuals up to CHF 250,000", href: "/en/how-it-works/private-loans", icon: "user" },
        { title: "SME Loan", description: "Business loans for small and medium enterprises", href: "/en/how-it-works/sme", icon: "building" },
        { title: "Mortgage", description: "Real estate financing at attractive terms", href: "/en/how-it-works/mortgage", icon: "home" },
      ],
    },
    process: {
      title: "The Process in 3 Steps",
      steps: [
        { step: "1", title: "Application & Review", description: "Submit your loan application online. We automatically verify your information." },
        { step: "2", title: "Funding", description: "Once approved, your project is presented to investors and funded." },
        { step: "3", title: "Disbursement", description: "The loan amount is electronically transferred to your bank account." },
      ],
    },
    stats: {
      title: "Over 60,000 individuals and businesses trust us",
      timeline: "Approx. 10 days from application to disbursement",
    },
    requirements: {
      title: "Requirements",
      items: [
        "Minimum age 18 years",
        "Residence in Switzerland or Liechtenstein",
        "Swiss bank account",
        "Permanent employment or regular income",
        "No open debt enforcement or loss certificates",
      ],
    },
    cta: {
      title: "Ready to get started?",
      button: { label: "Apply for loan", href: "/en/apply-for-credit" },
    },
  },
  fr: {
    title: "Comment ca marche",
    subtitle: "Un credit aussi individuel que vous",
    heroText: "Cashare vous permet de realiser vos reves grace au crowdlending - des credits jusqu'a CHF 1 million sans banque traditionnelle.",
    backLink: { label: "Vers l'accueil", href: "/fr" },
    advantages: [
      { title: "Pionnier FinTech", description: "La plateforme suisse innovante de crowdlending depuis 2008" },
      { title: "Taux attractifs", description: "Interets a partir de 3.9% grace au modele peer-to-peer direct" },
      { title: "Traitement rapide", description: "Des processus automatises permettent un versement rapide" },
    ],
    products: {
      title: "Nos solutions de financement",
      items: [
        { title: "Credit prive", description: "Prets personnels pour particuliers jusqu'a CHF 250'000", href: "/fr/comment-ca-marche/credit-prive", icon: "user" },
        { title: "Credit PME", description: "Credits commerciaux pour petites et moyennes entreprises", href: "/fr/comment-ca-marche/pme", icon: "building" },
        { title: "Hypotheque", description: "Financement immobilier a des conditions attractives", href: "/fr/comment-ca-marche/hypotheque", icon: "home" },
      ],
    },
    process: {
      title: "Le processus en 3 etapes",
      steps: [
        { step: "1", title: "Demande & Verification", description: "Soumettez votre demande de credit en ligne. Nous verifions automatiquement vos informations." },
        { step: "2", title: "Financement", description: "Une fois approuve, votre projet est presente aux investisseurs et finance." },
        { step: "3", title: "Versement", description: "Le montant du credit est transfere electroniquement sur votre compte bancaire." },
      ],
    },
    stats: {
      title: "Plus de 60'000 particuliers et entreprises nous font confiance",
      timeline: "Env. 10 jours de la demande au versement",
    },
    requirements: {
      title: "Conditions",
      items: [
        "Age minimum 18 ans",
        "Residence en Suisse ou au Liechtenstein",
        "Compte bancaire suisse",
        "Emploi permanent ou revenu regulier",
        "Pas de poursuites ou actes de defaut de biens",
      ],
    },
    cta: {
      title: "Pret a commencer?",
      button: { label: "Demander un credit", href: "/fr/demander-un-credit" },
    },
  },
};

export function HowItWorks({ locale }: HowItWorksProps) {
  const t = content[locale];

  const icons: Record<string, string> = {
    user: `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>`,
    building: `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>`,
    home: `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>`,
  };

  return (
    <>
      {/* Hero Section */}
      <section class="py-20 md:py-32 bg-gradient-to-br from-indigo-900 via-indigo-800 to-purple-900 relative overflow-hidden">
        <div class="absolute inset-0 opacity-10">
          <div class="absolute -top-40 -right-40 w-80 h-80 bg-indigo-400 rounded-full blur-3xl"></div>
          <div class="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400 rounded-full blur-3xl"></div>
        </div>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <a href={t.backLink.href} class="inline-flex items-center text-indigo-200 hover:text-white mb-8 transition-colors">
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
            {t.backLink.label}
          </a>
          <div class="text-center">
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">{t.title}</h1>
            <p class="text-xl md:text-2xl text-indigo-100 mb-4 max-w-3xl mx-auto">{t.subtitle}</p>
            <p class="text-lg text-indigo-100 max-w-2xl mx-auto">{t.heroText}</p>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid md:grid-cols-3 gap-8">
            {t.advantages.map((item, index) => (
              <div key={index} class="text-center">
                <div class="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg class="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 class="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
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
            {t.products.items.map((product, index) => (
              <a
                key={index}
                href={product.href}
                class="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow group"
              >
                <div
                  class="w-14 h-14 bg-indigo-100 rounded-xl flex items-center justify-center text-indigo-600 mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors"
                  dangerouslySetInnerHTML={{ __html: icons[product.icon] }}
                />
                <h3 class="text-xl font-bold text-gray-900 mb-3">{product.title}</h3>
                <p class="text-gray-600 mb-4">{product.description}</p>
                <span class="inline-flex items-center text-indigo-600 font-medium group-hover:gap-2 transition-all">
                  Mehr erfahren
                  <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </a>
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
                <div class="flex-shrink-0 w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
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
            <p class="text-lg text-indigo-600 font-medium">{t.stats.timeline}</p>
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

      {/* Stats & CTA */}
      <section class="py-20 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p class="text-xl text-indigo-100 mb-4">{t.stats.title}</p>
          <h2 class="text-3xl md:text-4xl font-bold text-white mb-8">{t.cta.title}</h2>
          <a
            href={t.cta.button.href}
            class="inline-flex items-center px-8 py-4 bg-white text-indigo-900 font-semibold rounded-lg hover:bg-indigo-50 transition-colors"
          >
            {t.cta.button.label}
          </a>
        </div>
      </section>
    </>
  );
}
