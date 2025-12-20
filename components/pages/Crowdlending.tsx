import type { Locale } from "../../lib/i18n/index.ts";

interface CrowdlendingProps {
  locale: Locale;
}

const content = {
  de: {
    title: "Was ist Crowdlending?",
    subtitle: "Die moderne Art der Kreditfinanzierung",
    heroText: "Crowdlending verbindet Kreditnehmer direkt mit Anlegern - ohne traditionelle Banken als Vermittler.",
    backLink: { label: "Zuruck zu Uber uns", href: "/ueber-uns" },
    definition: {
      title: "Crowdlending einfach erklart",
      text: "Beim Crowdlending (auch Peer-to-Peer-Lending oder P2P-Lending genannt) werden Kredite von einer Vielzahl von Privatpersonen oder institutionellen Anlegern finanziert. Die Plattform fungiert als Vermittler, der Kreditnehmer und Anleger zusammenbringt, die Bonitat pruft und die Abwicklung ubernimmt.",
    },
    howItWorks: {
      title: "Wie funktioniert Crowdlending?",
      forBorrowers: {
        title: "Fur Kreditnehmer",
        steps: [
          { title: "Antrag stellen", description: "Der Kreditnehmer stellt online einen Kreditantrag mit allen relevanten Informationen." },
          { title: "Bonitatsprufung", description: "Die Plattform pruft die Kreditwurdigkeit und bewertet das Risiko." },
          { title: "Projekt online", description: "Bei positivem Entscheid wird das Kreditprojekt auf der Plattform veroffentlicht." },
          { title: "Finanzierung", description: "Anleger investieren in das Projekt, bis die gewunschte Summe erreicht ist." },
          { title: "Auszahlung", description: "Der Kredit wird ausgezahlt und der Kreditnehmer beginnt mit der Ruckzahlung." },
        ],
      },
      forInvestors: {
        title: "Fur Anleger",
        steps: [
          { title: "Registrieren", description: "Anleger erstellen ein Konto und verifizieren ihre Identitat." },
          { title: "Einzahlen", description: "Geld wird auf das Anlegerkonto uberwiesen." },
          { title: "Investieren", description: "Anleger wahlen Kreditprojekte aus oder nutzen Auto-Invest." },
          { title: "Rendite", description: "Monatlich werden Zinsen und Tilgungen gutgeschrieben." },
        ],
      },
    },
    benefits: {
      title: "Vorteile von Crowdlending",
      borrowers: {
        title: "Fur Kreditnehmer",
        items: [
          "Oft gunstigere Zinsen als bei Banken",
          "Schnellere Entscheidung und Auszahlung",
          "Transparenter Online-Prozess",
          "Auch bei mittlerer Bonitat moglich",
        ],
      },
      investors: {
        title: "Fur Anleger",
        items: [
          "Attraktive Renditen (5-8% p.a.)",
          "Direkte Kontrolle uber Investitionen",
          "Niedrige Einstiegshurden",
          "Diversifikationsmoglichkeiten",
        ],
      },
    },
    vsBank: {
      title: "Crowdlending vs. Bankkredit",
      items: [
        { aspect: "Vermittler", crowdlending: "Direkt uber Plattform", bank: "Bank als Vermittler" },
        { aspect: "Geldgeber", crowdlending: "Viele Privatanleger/Institutionen", bank: "Die Bank selbst" },
        { aspect: "Entscheidung", crowdlending: "Schnell (Tage)", bank: "Langsamer (Wochen)" },
        { aspect: "Transparenz", crowdlending: "Hohe Transparenz", bank: "Begrenzte Einsicht" },
        { aspect: "Konditionen", crowdlending: "Marktbasiert, oft gunstiger", bank: "Bankkonditionen" },
      ],
    },
    risks: {
      title: "Risiken verstehen",
      text: "Wie bei jeder Geldanlage gibt es auch beim Crowdlending Risiken. Das Hauptrisiko ist der mogliche Ausfall von Kreditnehmern. Seriose Plattformen minimieren dieses Risiko durch sorgfaltige Bonitatsprufung und empfehlen Diversifikation.",
    },
    regulation: {
      title: "Regulierung in der Schweiz",
      text: "Crowdlending-Plattformen in der Schweiz unterliegen der Aufsicht der FINMA (Eidgenossische Finanzmarktaufsicht). Cashare ist als eine der ersten Plattformen FINMA-reguliert und erfullt alle gesetzlichen Anforderungen zum Schutz von Anlegern und Kreditnehmern.",
    },
    history: {
      title: "Geschichte des Crowdlending",
      items: [
        { year: "2005", event: "Zopa startet als erste P2P-Plattform in Grossbritannien" },
        { year: "2006", event: "Prosper und LendingClub starten in den USA" },
        { year: "2008", event: "Cashare startet als erste Crowdlending-Plattform der Schweiz" },
        { year: "2010er", event: "Weltweites Wachstum der Branche" },
        { year: "Heute", event: "Etablierte Anlageklasse mit Milliarden-Volumen" },
      ],
    },
    cta: {
      title: "Bereit zum Starten?",
      borrower: { label: "Kredit beantragen", href: "/kredit-beantragen" },
      investor: { label: "Jetzt investieren", href: "/investieren" },
    },
  },
  en: {
    title: "What is Crowdlending?",
    subtitle: "The modern way of loan financing",
    heroText: "Crowdlending connects borrowers directly with investors - without traditional banks as intermediaries.",
    backLink: { label: "Back to About Us", href: "/en/about" },
    definition: {
      title: "Crowdlending explained simply",
      text: "In crowdlending (also called peer-to-peer lending or P2P lending), loans are financed by a multitude of private individuals or institutional investors. The platform acts as an intermediary that brings together borrowers and investors, checks creditworthiness, and handles the processing.",
    },
    howItWorks: {
      title: "How does Crowdlending work?",
      forBorrowers: {
        title: "For Borrowers",
        steps: [
          { title: "Submit application", description: "The borrower submits an online loan application with all relevant information." },
          { title: "Credit check", description: "The platform checks creditworthiness and assesses the risk." },
          { title: "Project online", description: "If approved, the loan project is published on the platform." },
          { title: "Funding", description: "Investors invest in the project until the desired amount is reached." },
          { title: "Disbursement", description: "The loan is paid out and the borrower begins repayment." },
        ],
      },
      forInvestors: {
        title: "For Investors",
        steps: [
          { title: "Register", description: "Investors create an account and verify their identity." },
          { title: "Deposit", description: "Money is transferred to the investor account." },
          { title: "Invest", description: "Investors choose loan projects or use Auto-Invest." },
          { title: "Returns", description: "Interest and principal are credited monthly." },
        ],
      },
    },
    benefits: {
      title: "Benefits of Crowdlending",
      borrowers: {
        title: "For Borrowers",
        items: [
          "Often lower interest rates than banks",
          "Faster decision and disbursement",
          "Transparent online process",
          "Possible even with medium credit scores",
        ],
      },
      investors: {
        title: "For Investors",
        items: [
          "Attractive returns (5-8% p.a.)",
          "Direct control over investments",
          "Low entry barriers",
          "Diversification opportunities",
        ],
      },
    },
    vsBank: {
      title: "Crowdlending vs. Bank Loan",
      items: [
        { aspect: "Intermediary", crowdlending: "Direct via platform", bank: "Bank as intermediary" },
        { aspect: "Lender", crowdlending: "Many private/institutional investors", bank: "The bank itself" },
        { aspect: "Decision", crowdlending: "Fast (days)", bank: "Slower (weeks)" },
        { aspect: "Transparency", crowdlending: "High transparency", bank: "Limited insight" },
        { aspect: "Terms", crowdlending: "Market-based, often cheaper", bank: "Bank conditions" },
      ],
    },
    risks: {
      title: "Understanding Risks",
      text: "As with any investment, crowdlending carries risks. The main risk is the potential default of borrowers. Reputable platforms minimize this risk through careful credit checks and recommend diversification.",
    },
    regulation: {
      title: "Regulation in Switzerland",
      text: "Crowdlending platforms in Switzerland are subject to supervision by FINMA (Swiss Financial Market Supervisory Authority). Cashare was one of the first FINMA-regulated platforms and meets all legal requirements to protect investors and borrowers.",
    },
    history: {
      title: "History of Crowdlending",
      items: [
        { year: "2005", event: "Zopa launches as the first P2P platform in the UK" },
        { year: "2006", event: "Prosper and LendingClub launch in the USA" },
        { year: "2008", event: "Cashare launches as Switzerland's first crowdlending platform" },
        { year: "2010s", event: "Global industry growth" },
        { year: "Today", event: "Established asset class with billions in volume" },
      ],
    },
    cta: {
      title: "Ready to get started?",
      borrower: { label: "Apply for a loan", href: "/en/apply-for-credit" },
      investor: { label: "Start investing", href: "/en/invest" },
    },
  },
  fr: {
    title: "Qu'est-ce que le Crowdlending?",
    subtitle: "La maniere moderne de financer des credits",
    heroText: "Le crowdlending connecte directement les emprunteurs aux investisseurs - sans les banques traditionnelles comme intermediaires.",
    backLink: { label: "Retour a A propos", href: "/fr/a-propos" },
    definition: {
      title: "Le crowdlending explique simplement",
      text: "Dans le crowdlending (egalement appele pret entre particuliers ou P2P lending), les credits sont finances par une multitude de particuliers ou d'investisseurs institutionnels. La plateforme agit comme intermediaire, reunissant emprunteurs et investisseurs, verifiant la solvabilite et gerant le traitement.",
    },
    howItWorks: {
      title: "Comment fonctionne le Crowdlending?",
      forBorrowers: {
        title: "Pour les emprunteurs",
        steps: [
          { title: "Soumettre une demande", description: "L'emprunteur soumet une demande de credit en ligne avec toutes les informations pertinentes." },
          { title: "Verification de credit", description: "La plateforme verifie la solvabilite et evalue le risque." },
          { title: "Projet en ligne", description: "En cas d'approbation, le projet de credit est publie sur la plateforme." },
          { title: "Financement", description: "Les investisseurs investissent dans le projet jusqu'a ce que le montant souhaite soit atteint." },
          { title: "Versement", description: "Le credit est verse et l'emprunteur commence le remboursement." },
        ],
      },
      forInvestors: {
        title: "Pour les investisseurs",
        steps: [
          { title: "S'inscrire", description: "Les investisseurs creent un compte et verifient leur identite." },
          { title: "Deposer", description: "L'argent est transfere sur le compte investisseur." },
          { title: "Investir", description: "Les investisseurs choisissent des projets de credit ou utilisent l'Auto-Invest." },
          { title: "Rendements", description: "Les interets et le capital sont credites mensuellement." },
        ],
      },
    },
    benefits: {
      title: "Avantages du Crowdlending",
      borrowers: {
        title: "Pour les emprunteurs",
        items: [
          "Souvent des taux d'interet inferieurs aux banques",
          "Decision et versement plus rapides",
          "Processus en ligne transparent",
          "Possible meme avec un credit moyen",
        ],
      },
      investors: {
        title: "Pour les investisseurs",
        items: [
          "Rendements attractifs (5-8% p.a.)",
          "Controle direct sur les investissements",
          "Faibles barrieres a l'entree",
          "Opportunites de diversification",
        ],
      },
    },
    vsBank: {
      title: "Crowdlending vs. Credit bancaire",
      items: [
        { aspect: "Intermediaire", crowdlending: "Direct via la plateforme", bank: "Banque comme intermediaire" },
        { aspect: "Preteur", crowdlending: "Nombreux investisseurs prives/institutionnels", bank: "La banque elle-meme" },
        { aspect: "Decision", crowdlending: "Rapide (jours)", bank: "Plus lent (semaines)" },
        { aspect: "Transparence", crowdlending: "Haute transparence", bank: "Apercu limite" },
        { aspect: "Conditions", crowdlending: "Basees sur le marche, souvent moins cheres", bank: "Conditions bancaires" },
      ],
    },
    risks: {
      title: "Comprendre les risques",
      text: "Comme pour tout investissement, le crowdlending comporte des risques. Le risque principal est le defaut potentiel des emprunteurs. Les plateformes reputees minimisent ce risque par des verifications de credit rigoureuses et recommandent la diversification.",
    },
    regulation: {
      title: "Regulation en Suisse",
      text: "Les plateformes de crowdlending en Suisse sont soumises a la surveillance de la FINMA (Autorite federale de surveillance des marches financiers). Cashare a ete l'une des premieres plateformes regulees par la FINMA et repond a toutes les exigences legales pour proteger les investisseurs et les emprunteurs.",
    },
    history: {
      title: "Histoire du Crowdlending",
      items: [
        { year: "2005", event: "Zopa lance la premiere plateforme P2P au Royaume-Uni" },
        { year: "2006", event: "Prosper et LendingClub lancent aux Etats-Unis" },
        { year: "2008", event: "Cashare lance la premiere plateforme de crowdlending en Suisse" },
        { year: "2010s", event: "Croissance mondiale de l'industrie" },
        { year: "Aujourd'hui", event: "Classe d'actifs etablie avec des milliards de volume" },
      ],
    },
    cta: {
      title: "Pret a commencer?",
      borrower: { label: "Demander un credit", href: "/fr/demander-un-credit" },
      investor: { label: "Commencer a investir", href: "/fr/investir" },
    },
  },
};

export function Crowdlending({ locale }: CrowdlendingProps) {
  const t = content[locale];

  return (
    <>
      {/* Hero Section */}
      <section class="py-20 md:py-32 bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 relative overflow-hidden">
        <div class="absolute inset-0 opacity-10">
          <div class="absolute -top-40 -right-40 w-80 h-80 bg-purple-400 rounded-full blur-3xl"></div>
          <div class="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-400 rounded-full blur-3xl"></div>
        </div>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <a href={t.backLink.href} class="inline-flex items-center text-purple-200 hover:text-white mb-8 transition-colors">
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
            {t.backLink.label}
          </a>
          <div class="text-center">
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">{t.title}</h1>
            <p class="text-xl md:text-2xl text-purple-100 mb-4 max-w-3xl mx-auto">{t.subtitle}</p>
            <p class="text-lg text-purple-100 max-w-2xl mx-auto">{t.heroText}</p>
          </div>
        </div>
      </section>

      {/* Definition */}
      <section class="py-20 bg-white">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{t.definition.title}</h2>
          <p class="text-xl text-gray-600 leading-relaxed">{t.definition.text}</p>
        </div>
      </section>

      {/* How It Works */}
      <section class="py-20 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">{t.howItWorks.title}</h2>
          <div class="grid md:grid-cols-2 gap-12">
            {/* For Borrowers */}
            <div>
              <h3 class="text-2xl font-bold text-gray-900 mb-8">{t.howItWorks.forBorrowers.title}</h3>
              <div class="space-y-6">
                {t.howItWorks.forBorrowers.steps.map((step, index) => (
                  <div key={index} class="flex gap-4">
                    <div class="flex-shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">
                      {index + 1}
                    </div>
                    <div>
                      <h4 class="font-semibold text-gray-900">{step.title}</h4>
                      <p class="text-gray-600 text-sm">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* For Investors */}
            <div>
              <h3 class="text-2xl font-bold text-gray-900 mb-8">{t.howItWorks.forInvestors.title}</h3>
              <div class="space-y-6">
                {t.howItWorks.forInvestors.steps.map((step, index) => (
                  <div key={index} class="flex gap-4">
                    <div class="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">
                      {index + 1}
                    </div>
                    <div>
                      <h4 class="font-semibold text-gray-900">{step.title}</h4>
                      <p class="text-gray-600 text-sm">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">{t.benefits.title}</h2>
          <div class="grid md:grid-cols-2 gap-8">
            <div class="bg-purple-50 rounded-2xl p-8">
              <h3 class="text-xl font-bold text-gray-900 mb-6">{t.benefits.borrowers.title}</h3>
              <ul class="space-y-3">
                {t.benefits.borrowers.items.map((item, index) => (
                  <li key={index} class="flex items-start">
                    <svg class="w-5 h-5 text-purple-600 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span class="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div class="bg-green-50 rounded-2xl p-8">
              <h3 class="text-xl font-bold text-gray-900 mb-6">{t.benefits.investors.title}</h3>
              <ul class="space-y-3">
                {t.benefits.investors.items.map((item, index) => (
                  <li key={index} class="flex items-start">
                    <svg class="w-5 h-5 text-green-600 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span class="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section class="py-20 bg-gray-50">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">{t.vsBank.title}</h2>
          <div class="bg-white rounded-2xl shadow-lg overflow-hidden">
            <table class="w-full">
              <thead class="bg-gray-100">
                <tr>
                  <th class="px-6 py-4 text-left text-sm font-semibold text-gray-900"></th>
                  <th class="px-6 py-4 text-left text-sm font-semibold text-purple-600">Crowdlending</th>
                  <th class="px-6 py-4 text-left text-sm font-semibold text-gray-600">Bank</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-100">
                {t.vsBank.items.map((row, index) => (
                  <tr key={index}>
                    <td class="px-6 py-4 text-sm font-medium text-gray-900">{row.aspect}</td>
                    <td class="px-6 py-4 text-sm text-gray-700">{row.crowdlending}</td>
                    <td class="px-6 py-4 text-sm text-gray-500">{row.bank}</td>
                  </tr>
                ))}
              </tbody>
            </table>
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

      {/* Regulation */}
      <section class="py-20 bg-purple-900">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div class="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
            <svg class="w-8 h-8 text-purple-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">{t.regulation.title}</h2>
          <p class="text-xl text-purple-100 leading-relaxed">{t.regulation.text}</p>
        </div>
      </section>

      {/* History Timeline */}
      <section class="py-20 bg-white">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">{t.history.title}</h2>
          <div class="space-y-6">
            {t.history.items.map((item, index) => (
              <div key={index} class="flex items-start gap-6">
                <div class="flex-shrink-0 w-24 text-lg font-bold text-purple-600">{item.year}</div>
                <div class="flex-1 bg-gray-50 rounded-lg p-4">
                  <p class="text-gray-700">{item.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section class="py-20 bg-gradient-to-r from-purple-600 to-indigo-600">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 class="text-3xl md:text-4xl font-bold text-white mb-8">{t.cta.title}</h2>
          <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={t.cta.borrower.href}
              class="inline-flex items-center px-8 py-4 bg-white text-purple-900 font-semibold rounded-lg hover:bg-purple-50 transition-colors"
            >
              {t.cta.borrower.label}
            </a>
            <a
              href={t.cta.investor.href}
              class="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
            >
              {t.cta.investor.label}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
