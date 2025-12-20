import type { Locale } from "../../lib/i18n/index.ts";

interface HowItWorksPrivateProps {
  locale: Locale;
}

const content = {
  de: {
    title: "Privatkredit",
    subtitle: "So funktioniert Ihr personlicher Kredit",
    heroText: "Personliche Kredite bis CHF 250'000 - direkt von Anlegern finanziert, ohne Bank.",
    backLink: { label: "Zurück zu So funktioniert's", href: "/so-funktionierts" },
    advantages: [
      { title: "Tiefe Zinsen", description: "Ab 3.9% dank direktem Peer-to-Peer-Lending ohne Bankmarge" },
      { title: "Pionier-Status", description: "Erste innovative Crowdlending-Plattform der Schweiz" },
      { title: "Schnelle Abwicklung", description: "Vollautomatisierte Prozesse für schnelle Auszahlung" },
    ],
    loanTypes: {
      title: "Unsere Kreditarten",
      items: [
        { title: "Blankokredit", description: "Personlicher Kredit ohne Sicherheiten" },
        { title: "Kredit mit Hypothek", description: "Kredit mit Immobilie als Sicherheit" },
        { title: "Kredit mit Burgschaft", description: "Kredit mit personlicher Garantie" },
      ],
    },
    process: {
      title: "Der Ablauf in 3 Schritten",
      steps: [
        { step: "1", title: "Antrag & Prufung", description: "Stellen Sie online Ihren Kreditantrag. Die Plattform fuhrt automatisierte Prufungen durch." },
        { step: "2", title: "Investoren-Review & Finanzierung", description: "Genehmigte Antrage werden der Anleger-Community zur Finanzierung prasentiert." },
        { step: "3", title: "Kreditauszahlung", description: "Die Kreditsumme wird elektronisch auf Ihr Bankkonto uberwiesen." },
      ],
      timeline: "Ca. 10 Tage vom Antrag bis zur Auszahlung",
    },
    requirements: {
      title: "Voraussetzungen",
      items: [
        "Mindestalter 18 Jahre",
        "Gultige CH- oder LI-Aufenthaltsbewilligung",
        "Schweizer Bankkonto erforderlich",
        "Feste Anstellung oder regelmassiges Einkommen",
        "Keine offenen Betreibungen oder Verlustscheine",
      ],
    },
    fees: {
      title: "Gebuhren & Konditionen",
      items: [
        "Plattformgebuhr wird direkt vom Kreditbetrag abgezogen",
        "Zinsen laufen ab dem Auszahlungsdatum",
        "Erste Zahlung nach Erhalt der Kreditsumme fallig",
      ],
    },
    stats: "Uber 60'000 Privatpersonen und Unternehmen bedient",
    cta: {
      title: "Jetzt Privatkredit beantragen",
      button: { label: "Kredit beantragen", href: "/kredit-beantragen/privatkredit" },
    },
  },
  en: {
    title: "Private Loans",
    subtitle: "How your personal loan works",
    heroText: "Personal loans up to CHF 250,000 - financed directly by investors, without a bank.",
    backLink: { label: "Back to How It Works", href: "/en/how-it-works" },
    advantages: [
      { title: "Low Interest", description: "From 3.9% thanks to direct peer-to-peer lending without bank margins" },
      { title: "Pioneer Status", description: "Switzerland's first innovative crowdlending platform" },
      { title: "Fast Processing", description: "Fully automated processes for quick disbursement" },
    ],
    loanTypes: {
      title: "Our Loan Types",
      items: [
        { title: "Blank Loan", description: "Personal loan without collateral" },
        { title: "Mortgage-backed Loan", description: "Loan with real estate as security" },
        { title: "Guaranteed Loan", description: "Loan with personal guarantee" },
      ],
    },
    process: {
      title: "The Process in 3 Steps",
      steps: [
        { step: "1", title: "Application & Review", description: "Submit your loan application online. The platform conducts automated verification checks." },
        { step: "2", title: "Investor Review & Funding", description: "Approved applications are presented to the investor community for funding." },
        { step: "3", title: "Loan Disbursement", description: "The loan amount is electronically transferred to your bank account." },
      ],
      timeline: "Approx. 10 days from application to funding",
    },
    requirements: {
      title: "Requirements",
      items: [
        "Minimum age 18 years",
        "Valid CH or LI residence permit required",
        "Swiss bank account necessary",
        "Permanent employment or regular income",
        "No open debt enforcement or loss certificates",
      ],
    },
    fees: {
      title: "Fees & Terms",
      items: [
        "Platform fee deducted directly from loan amount",
        "Interest accrues from disbursement date",
        "First payment due after receiving funds",
      ],
    },
    stats: "Over 60,000 individuals and businesses served",
    cta: {
      title: "Apply for a private loan now",
      button: { label: "Apply for loan", href: "/en/apply-for-credit/personal-loan" },
    },
  },
  fr: {
    title: "Crédit privé",
    subtitle: "Comment fonctionne votre crédit personnel",
    heroText: "Credits personnels jusqu'a CHF 250'000 - finances directement par des investisseurs, sans banque.",
    backLink: { label: "Retour a Comment ca marche", href: "/fr/comment-ca-marche" },
    advantages: [
      { title: "Taux bas", description: "A partir de 3.9% grace au pret peer-to-peer direct sans marge bancaire" },
      { title: "Statut de pionnier", description: "Premiere plateforme suisse innovante de crowdlending" },
      { title: "Traitement rapide", description: "Processus entierement automatises pour un versement rapide" },
    ],
    loanTypes: {
      title: "Nos types de credit",
      items: [
        { title: "Crédit en blanc", description: "Crédit personnel sans garantie" },
        { title: "Crédit hypothecaire", description: "Crédit avec bien immobilier en garantie" },
        { title: "Crédit avec caution", description: "Crédit avec garantie personnelle" },
      ],
    },
    process: {
      title: "Le processus en 3 etapes",
      steps: [
        { step: "1", title: "Demande & Verification", description: "Soumettez votre demande de crédit en ligne. La plateforme effectue des verifications automatisees." },
        { step: "2", title: "Examen des investisseurs & Financement", description: "Les demandes approuvees sont presentees a la communaute d'investisseurs pour financement." },
        { step: "3", title: "Versement du credit", description: "Le montant du crédit est transfere electroniquement sur votre compte bancaire." },
      ],
      timeline: "Env. 10 jours de la demande au versement",
    },
    requirements: {
      title: "Conditions",
      items: [
        "Age minimum 18 ans",
        "Permis de sejour CH ou LI valide requis",
        "Compte bancaire suisse necessaire",
        "Emploi permanent ou revenu regulier",
        "Pas de poursuites ou actes de defaut de biens",
      ],
    },
    fees: {
      title: "Frais & Conditions",
      items: [
        "Frais de plateforme deduits directement du montant du credit",
        "Les interets courent a partir de la date de versement",
        "Premier paiement du apres reception des fonds",
      ],
    },
    stats: "Plus de 60'000 particuliers et entreprises servis",
    cta: {
      title: "Demandez un crédit privé maintenant",
      button: { label: "Demander un credit", href: "/fr/demander-un-credit/credit-privé" },
    },
  },
};

export function HowItWorksPrivate({ locale }: HowItWorksPrivateProps) {
  const t = content[locale];

  return (
    <>
      {/* Hero Section */}
      <section class="py-20 md:py-32 bg-gradient-to-br from-cyan-900 via-cyan-800 to-teal-900 relative overflow-hidden">
        <div class="absolute inset-0 opacity-10">
          <div class="absolute -top-40 -right-40 w-80 h-80 bg-cyan-400 rounded-full blur-3xl"></div>
          <div class="absolute -bottom-40 -left-40 w-80 h-80 bg-teal-400 rounded-full blur-3xl"></div>
        </div>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <a href={t.backLink.href} class="inline-flex items-center text-cyan-200 hover:text-white mb-8 transition-colors">
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
            {t.backLink.label}
          </a>
          <div class="text-center">
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">{t.title}</h1>
            <p class="text-xl md:text-2xl text-cyan-100 mb-4 max-w-3xl mx-auto">{t.subtitle}</p>
            <p class="text-lg text-cyan-100 max-w-2xl mx-auto">{t.heroText}</p>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid md:grid-cols-3 gap-8">
            {t.advantages.map((item, index) => (
              <div key={index} class="bg-cyan-50 rounded-2xl p-8 text-center">
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
                <div class="flex-shrink-0 w-12 h-12 bg-cyan-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
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
            <p class="text-lg text-cyan-600 font-medium">{t.process.timeline}</p>
          </div>
        </div>
      </section>

      {/* Requirements & Fees */}
      <section class="py-20 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid md:grid-cols-2 gap-8">
            <div class="bg-white rounded-2xl p-8">
              <h2 class="text-2xl font-bold text-gray-900 mb-6">{t.requirements.title}</h2>
              <ul class="space-y-3">
                {t.requirements.items.map((item, index) => (
                  <li key={index} class="flex items-start gap-3">
                    <svg class="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span class="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div class="bg-white rounded-2xl p-8">
              <h2 class="text-2xl font-bold text-gray-900 mb-6">{t.fees.title}</h2>
              <ul class="space-y-3">
                {t.fees.items.map((item, index) => (
                  <li key={index} class="flex items-start gap-3">
                    <svg class="w-5 h-5 text-cyan-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span class="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section class="py-20 bg-gradient-to-r from-cyan-600 to-teal-600">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p class="text-xl text-cyan-100 mb-4">{t.stats}</p>
          <h2 class="text-3xl md:text-4xl font-bold text-white mb-8">{t.cta.title}</h2>
          <a
            href={t.cta.button.href}
            class="inline-flex items-center px-8 py-4 bg-white text-cyan-900 font-semibold rounded-lg hover:bg-cyan-50 transition-colors"
          >
            {t.cta.button.label}
          </a>
        </div>
      </section>
    </>
  );
}
