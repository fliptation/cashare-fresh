import type { Locale } from "../../lib/i18n/index.ts";

interface WhoWeAreProps {
  locale: Locale;
}

const content = {
  de: {
    title: "Wer sind wir",
    subtitle: "Seit 2008 verbinden wir Menschen mit gemeinsamen finanziellen Zielen",
    heroText: "Cashare ist die fuhrende Schweizer Crowdlending-Plattform - fair, transparent und reguliert.",
    backLink: { label: "Zuruck zu Uber uns", href: "/ueber-uns" },
    mission: {
      title: "Unsere Mission",
      text: "Wir demokratisieren den Zugang zu Finanzierungen und Anlagemoglichkeiten. Durch unsere Plattform erhalten Kreditnehmer faire Konditionen und Anleger attraktive Renditen - ohne traditionelle Banken als Vermittler.",
    },
    vision: {
      title: "Unsere Vision",
      text: "Eine Finanzwelt, in der jeder Mensch Zugang zu fairen Finanzierungslosungen hat und sein Geld gewinnbringend anlegen kann. Wir glauben an die Kraft der Gemeinschaft und die Vorteile direkter Verbindungen.",
    },
    values: {
      title: "Unsere Werte",
      items: [
        { title: "Transparenz", description: "Klare Konditionen und offene Kommunikation in allem, was wir tun." },
        { title: "Fairness", description: "Faire Zinsen fur beide Seiten - Kreditnehmer und Anleger." },
        { title: "Innovation", description: "Kontinuierliche Weiterentwicklung unserer Technologie und Services." },
        { title: "Vertrauen", description: "FINMA-reguliert und mit hochsten Sicherheitsstandards." },
      ],
    },
    team: {
      title: "Unser Team",
      text: "Hinter Cashare steht ein erfahrenes Team aus Finanz- und Technologie-Experten. Wir vereinen jahrzehntelange Erfahrung im Bankwesen mit modernster Technologie-Kompetenz.",
    },
    history: {
      title: "Unsere Geschichte",
      items: [
        { year: "2008", event: "Grundung von Cashare als erste Crowdlending-Plattform der Schweiz" },
        { year: "2013", event: "Erhalt der FINMA-Lizenz als regulierte Plattform" },
        { year: "2016", event: "Launch der KMU-Kredit-Plattform" },
        { year: "2020", event: "Uber 100 Millionen CHF vermittelte Kredite" },
        { year: "2023", event: "Uber 250 Millionen CHF vermittelte Kredite" },
      ],
    },
    cta: {
      title: "Teil der Cashare-Community werden",
      borrower: { label: "Kredit beantragen", href: "/kredit-beantragen" },
      investor: { label: "Jetzt investieren", href: "/investieren" },
    },
  },
  en: {
    title: "Who We Are",
    subtitle: "Since 2008, we connect people with shared financial goals",
    heroText: "Cashare is Switzerland's leading crowdlending platform - fair, transparent, and regulated.",
    backLink: { label: "Back to About Us", href: "/en/about" },
    mission: {
      title: "Our Mission",
      text: "We democratize access to financing and investment opportunities. Through our platform, borrowers receive fair conditions and investors attractive returns - without traditional banks as intermediaries.",
    },
    vision: {
      title: "Our Vision",
      text: "A financial world where everyone has access to fair financing solutions and can invest their money profitably. We believe in the power of community and the benefits of direct connections.",
    },
    values: {
      title: "Our Values",
      items: [
        { title: "Transparency", description: "Clear conditions and open communication in everything we do." },
        { title: "Fairness", description: "Fair interest rates for both sides - borrowers and investors." },
        { title: "Innovation", description: "Continuous development of our technology and services." },
        { title: "Trust", description: "FINMA-regulated and with the highest security standards." },
      ],
    },
    team: {
      title: "Our Team",
      text: "Behind Cashare is an experienced team of finance and technology experts. We combine decades of banking experience with cutting-edge technology competence.",
    },
    history: {
      title: "Our History",
      items: [
        { year: "2008", event: "Founding of Cashare as Switzerland's first crowdlending platform" },
        { year: "2013", event: "Received FINMA license as a regulated platform" },
        { year: "2016", event: "Launch of SME loan platform" },
        { year: "2020", event: "Over CHF 100 million in facilitated loans" },
        { year: "2023", event: "Over CHF 250 million in facilitated loans" },
      ],
    },
    cta: {
      title: "Become part of the Cashare community",
      borrower: { label: "Apply for loan", href: "/en/apply-for-credit" },
      investor: { label: "Start investing", href: "/en/invest" },
    },
  },
  fr: {
    title: "Qui sommes-nous",
    subtitle: "Depuis 2008, nous connectons les personnes partageant des objectifs financiers communs",
    heroText: "Cashare est la principale plateforme suisse de crowdlending - equitable, transparente et regulee.",
    backLink: { label: "Retour a A propos", href: "/fr/a-propos" },
    mission: {
      title: "Notre mission",
      text: "Nous democratisons l'acces au financement et aux opportunites d'investissement. Grace a notre plateforme, les emprunteurs beneficient de conditions equitables et les investisseurs de rendements attractifs - sans banques traditionnelles comme intermediaires.",
    },
    vision: {
      title: "Notre vision",
      text: "Un monde financier ou chacun a acces a des solutions de financement equitables et peut investir son argent de maniere rentable. Nous croyons au pouvoir de la communaute et aux avantages des connexions directes.",
    },
    values: {
      title: "Nos valeurs",
      items: [
        { title: "Transparence", description: "Des conditions claires et une communication ouverte dans tout ce que nous faisons." },
        { title: "Equite", description: "Des taux d'interet equitables pour les deux parties - emprunteurs et investisseurs." },
        { title: "Innovation", description: "Developpement continu de notre technologie et de nos services." },
        { title: "Confiance", description: "Regulee par la FINMA et avec les normes de securite les plus elevees." },
      ],
    },
    team: {
      title: "Notre equipe",
      text: "Derriere Cashare se trouve une equipe experimentee d'experts en finance et en technologie. Nous combinons des decennies d'experience bancaire avec une competence technologique de pointe.",
    },
    history: {
      title: "Notre histoire",
      items: [
        { year: "2008", event: "Fondation de Cashare, premiere plateforme de crowdlending en Suisse" },
        { year: "2013", event: "Obtention de la licence FINMA en tant que plateforme regulee" },
        { year: "2016", event: "Lancement de la plateforme de credit PME" },
        { year: "2020", event: "Plus de 100 millions CHF de credits accordes" },
        { year: "2023", event: "Plus de 250 millions CHF de credits accordes" },
      ],
    },
    cta: {
      title: "Rejoignez la communaute Cashare",
      borrower: { label: "Demander un credit", href: "/fr/demander-un-credit" },
      investor: { label: "Commencer a investir", href: "/fr/investir" },
    },
  },
};

export function WhoWeAre({ locale }: WhoWeAreProps) {
  const t = content[locale];

  return (
    <>
      {/* Hero Section */}
      <section class="py-20 md:py-32 bg-gradient-to-br from-teal-900 via-teal-800 to-cyan-900 relative overflow-hidden">
        <div class="absolute inset-0 opacity-10">
          <div class="absolute -top-40 -right-40 w-80 h-80 bg-teal-400 rounded-full blur-3xl"></div>
          <div class="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-400 rounded-full blur-3xl"></div>
        </div>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <a href={t.backLink.href} class="inline-flex items-center text-teal-200 hover:text-white mb-8 transition-colors">
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
            {t.backLink.label}
          </a>
          <div class="text-center">
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">{t.title}</h1>
            <p class="text-xl md:text-2xl text-teal-100 mb-4 max-w-3xl mx-auto">{t.subtitle}</p>
            <p class="text-lg text-teal-100 max-w-2xl mx-auto">{t.heroText}</p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid md:grid-cols-2 gap-12">
            <div class="bg-teal-50 rounded-2xl p-8">
              <div class="w-12 h-12 bg-teal-600 rounded-lg flex items-center justify-center mb-6">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h2 class="text-2xl font-bold text-gray-900 mb-4">{t.mission.title}</h2>
              <p class="text-gray-700 leading-relaxed">{t.mission.text}</p>
            </div>
            <div class="bg-cyan-50 rounded-2xl p-8">
              <div class="w-12 h-12 bg-cyan-600 rounded-lg flex items-center justify-center mb-6">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h2 class="text-2xl font-bold text-gray-900 mb-4">{t.vision.title}</h2>
              <p class="text-gray-700 leading-relaxed">{t.vision.text}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section class="py-20 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">{t.values.title}</h2>
          <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.values.items.map((value, index) => (
              <div key={index} class="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 class="text-lg font-bold text-gray-900 mb-3">{value.title}</h3>
                <p class="text-gray-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section class="py-20 bg-teal-900">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">{t.team.title}</h2>
          <p class="text-xl text-teal-100 leading-relaxed">{t.team.text}</p>
        </div>
      </section>

      {/* History Timeline */}
      <section class="py-20 bg-white">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">{t.history.title}</h2>
          <div class="space-y-6">
            {t.history.items.map((item, index) => (
              <div key={index} class="flex items-start gap-6">
                <div class="flex-shrink-0 w-24 text-lg font-bold text-teal-600">{item.year}</div>
                <div class="flex-1 bg-gray-50 rounded-lg p-4">
                  <p class="text-gray-700">{item.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section class="py-20 bg-gradient-to-r from-teal-600 to-cyan-600">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 class="text-3xl md:text-4xl font-bold text-white mb-8">{t.cta.title}</h2>
          <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={t.cta.borrower.href}
              class="inline-flex items-center px-8 py-4 bg-white text-teal-900 font-semibold rounded-lg hover:bg-teal-50 transition-colors"
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
