import type { Locale } from "../../lib/i18n/index.ts";

interface UeberUnsProps {
  locale: Locale;
}

const content = {
  de: {
    title: "Uber Cashare",
    subtitle: "Der Schweizer Pionier im Crowdlending",
    heroText: "Seit 2008 verbinden wir Kreditnehmer und Anleger auf unserer innovativen Plattform.",
    mission: {
      title: "Unsere Mission",
      text: "Wir demokratisieren den Zugang zu Krediten und Anlagemoglichkeiten. Unsere Plattform ermoglicht es Privatpersonen und KMUs, faire Kredite zu erhalten, wahrend Anleger attraktive Renditen erzielen konnen.",
    },
    history: {
      title: "Unsere Geschichte",
      items: [
        { year: "2008", event: "Grundung von Cashare als erste Crowdlending-Plattform der Schweiz" },
        { year: "2010", event: "Erste 100 finanzierte Projekte" },
        { year: "2015", event: "Erweiterung auf KMU-Kredite" },
        { year: "2018", event: "10-jahriges Jubilaum mit uber CHF 100 Mio. finanziertem Volumen" },
        { year: "2020", event: "Launch der neuen Plattform mit verbesserter Benutzerfreundlichkeit" },
        { year: "2024", event: "Uber CHF 2.5 Mrd. finanziertes Gesamtvolumen" },
      ],
    },
    values: {
      title: "Unsere Werte",
      items: [
        {
          title: "Transparenz",
          description: "Offene Kommunikation und klare Konditionen fur alle Beteiligten.",
        },
        {
          title: "Innovation",
          description: "Kontinuierliche Weiterentwicklung unserer Technologie und Prozesse.",
        },
        {
          title: "Vertrauen",
          description: "Langfristige Beziehungen basierend auf Zuverlassigkeit und Integritat.",
        },
        {
          title: "Nachhaltigkeit",
          description: "Verantwortungsvoller Umgang mit Ressourcen und gesellschaftliche Verantwortung.",
        },
      ],
    },
    team: {
      title: "Unser Team",
      text: "Ein erfahrenes Team aus Finanz-, Technologie- und Kundenservice-Experten arbeitet taglich daran, die beste Erfahrung fur unsere Nutzer zu schaffen.",
    },
    regulation: {
      title: "Regulierung & Sicherheit",
      text: "Cashare ist FINMA-reguliert und unterliegt den strengen Schweizer Finanzmarktgesetzen. Ihre Daten und Investitionen sind bei uns sicher.",
    },
    contact: {
      title: "Kontakt",
      address: "Cashare AG\nGartenstrasse 14\n6300 Zug\nSchweiz",
      email: "info@cashare.ch",
      phone: "+41 41 544 61 70",
    },
    links: {
      crowdlending: { title: "Was ist Crowdlending?", href: "/ueber-uns/crowdlending" },
      statistics: { title: "Statistik", href: "/ueber-uns/statistik" },
      press: { title: "Presse", href: "/presse" },
      careers: { title: "Karriere", href: "/karriere" },
    },
  },
  en: {
    title: "About Cashare",
    subtitle: "The Swiss Pioneer in Crowdlending",
    heroText: "Since 2008, we have been connecting borrowers and investors on our innovative platform.",
    mission: {
      title: "Our Mission",
      text: "We democratize access to loans and investment opportunities. Our platform enables individuals and SMEs to obtain fair loans while investors can achieve attractive returns.",
    },
    history: {
      title: "Our History",
      items: [
        { year: "2008", event: "Founding of Cashare as Switzerland's first crowdlending platform" },
        { year: "2010", event: "First 100 funded projects" },
        { year: "2015", event: "Expansion to SME loans" },
        { year: "2018", event: "10th anniversary with over CHF 100 million in funded volume" },
        { year: "2020", event: "Launch of new platform with improved user experience" },
        { year: "2024", event: "Over CHF 2.5 billion total funded volume" },
      ],
    },
    values: {
      title: "Our Values",
      items: [
        {
          title: "Transparency",
          description: "Open communication and clear terms for all parties involved.",
        },
        {
          title: "Innovation",
          description: "Continuous development of our technology and processes.",
        },
        {
          title: "Trust",
          description: "Long-term relationships based on reliability and integrity.",
        },
        {
          title: "Sustainability",
          description: "Responsible use of resources and social responsibility.",
        },
      ],
    },
    team: {
      title: "Our Team",
      text: "An experienced team of finance, technology, and customer service experts works daily to create the best experience for our users.",
    },
    regulation: {
      title: "Regulation & Security",
      text: "Cashare is FINMA-regulated and subject to strict Swiss financial market laws. Your data and investments are safe with us.",
    },
    contact: {
      title: "Contact",
      address: "Cashare AG\nGartenstrasse 14\n6300 Zug\nSwitzerland",
      email: "info@cashare.ch",
      phone: "+41 41 544 61 70",
    },
    links: {
      crowdlending: { title: "What is Crowdlending?", href: "/en/about/crowdlending" },
      statistics: { title: "Statistics", href: "/en/about/statistics" },
      press: { title: "Press", href: "/en/press" },
      careers: { title: "Careers", href: "/en/careers" },
    },
  },
  fr: {
    title: "A propos de Cashare",
    subtitle: "Le pionnier suisse du crowdlending",
    heroText: "Depuis 2008, nous connectons emprunteurs et investisseurs sur notre plateforme innovante.",
    mission: {
      title: "Notre Mission",
      text: "Nous democratisons l'acces aux credits et aux opportunites d'investissement. Notre plateforme permet aux particuliers et aux PME d'obtenir des credits equitables tandis que les investisseurs peuvent realiser des rendements attractifs.",
    },
    history: {
      title: "Notre Histoire",
      items: [
        { year: "2008", event: "Fondation de Cashare, premiere plateforme de crowdlending en Suisse" },
        { year: "2010", event: "Premiers 100 projets finances" },
        { year: "2015", event: "Extension aux credits PME" },
        { year: "2018", event: "10e anniversaire avec plus de CHF 100 millions de volume finance" },
        { year: "2020", event: "Lancement de la nouvelle plateforme avec une experience utilisateur amelioree" },
        { year: "2024", event: "Plus de CHF 2,5 milliards de volume total finance" },
      ],
    },
    values: {
      title: "Nos Valeurs",
      items: [
        {
          title: "Transparence",
          description: "Communication ouverte et conditions claires pour toutes les parties.",
        },
        {
          title: "Innovation",
          description: "Developpement continu de notre technologie et de nos processus.",
        },
        {
          title: "Confiance",
          description: "Relations a long terme basees sur la fiabilite et l'integrite.",
        },
        {
          title: "Durabilite",
          description: "Utilisation responsable des ressources et responsabilite sociale.",
        },
      ],
    },
    team: {
      title: "Notre Equipe",
      text: "Une equipe experimentee d'experts en finance, technologie et service client travaille quotidiennement pour creer la meilleure experience pour nos utilisateurs.",
    },
    regulation: {
      title: "Regulation & Securite",
      text: "Cashare est regulee par la FINMA et soumise aux strictes lois suisses sur les marches financiers. Vos donnees et investissements sont en securite chez nous.",
    },
    contact: {
      title: "Contact",
      address: "Cashare AG\nGartenstrasse 14\n6300 Zug\nSuisse",
      email: "info@cashare.ch",
      phone: "+41 41 544 61 70",
    },
    links: {
      crowdlending: { title: "Qu'est-ce que le crowdlending?", href: "/fr/a-propos/crowdlending" },
      statistics: { title: "Statistiques", href: "/fr/a-propos/statistiques" },
      press: { title: "Presse", href: "/fr/presse" },
      careers: { title: "Carrieres", href: "/fr/carrieres" },
    },
  },
};

export function UeberUns({ locale }: UeberUnsProps) {
  const t = content[locale];

  return (
    <>
      {/* Hero Section */}
      <section class="py-20 md:py-32 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 relative overflow-hidden">
        <div class="absolute inset-0 opacity-10">
          <div class="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500 rounded-full blur-3xl"></div>
          <div class="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full blur-3xl"></div>
        </div>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div class="text-center">
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              {t.title}
            </h1>
            <p class="text-xl md:text-2xl text-blue-100 mb-4 max-w-3xl mx-auto">
              {t.subtitle}
            </p>
            <p class="text-lg text-blue-100 max-w-2xl mx-auto">
              {t.heroText}
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section class="py-20 bg-white">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            {t.mission.title}
          </h2>
          <p class="text-xl text-gray-600 leading-relaxed">
            {t.mission.text}
          </p>
        </div>
      </section>

      {/* History Timeline */}
      <section class="py-20 bg-gray-50">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
            {t.history.title}
          </h2>
          <div class="space-y-8">
            {t.history.items.map((item, index) => (
              <div key={index} class="flex items-start gap-6">
                <div class="flex-shrink-0 w-20 text-2xl font-bold text-blue-600">
                  {item.year}
                </div>
                <div class="flex-1 bg-white rounded-lg p-4 shadow-sm">
                  <p class="text-gray-700">{item.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
            {t.values.title}
          </h2>
          <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.values.items.map((value, index) => (
              <div key={index} class="text-center p-6">
                <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 class="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p class="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section class="py-20 bg-gray-50">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            {t.team.title}
          </h2>
          <p class="text-xl text-gray-600 leading-relaxed">
            {t.team.text}
          </p>
        </div>
      </section>

      {/* Regulation & Security */}
      <section class="py-20 bg-blue-900">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div class="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
            <svg class="w-8 h-8 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">
            {t.regulation.title}
          </h2>
          <p class="text-xl text-blue-100 leading-relaxed">
            {t.regulation.text}
          </p>
        </div>
      </section>

      {/* Quick Links */}
      <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid md:grid-cols-4 gap-6">
            {Object.values(t.links).map((link, index) => (
              <a
                key={index}
                href={link.href}
                class="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all text-center"
              >
                <h3 class="text-lg font-semibold text-gray-900 hover:text-blue-600">
                  {link.title}
                </h3>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section class="py-20 bg-gray-50">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            {t.contact.title}
          </h2>
          <div class="bg-white rounded-2xl shadow-lg p-8 text-center">
            <p class="text-gray-700 whitespace-pre-line mb-6">{t.contact.address}</p>
            <div class="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a href={`mailto:${t.contact.email}`} class="text-blue-600 hover:text-blue-700 font-medium">
                {t.contact.email}
              </a>
              <a href={`tel:${t.contact.phone}`} class="text-blue-600 hover:text-blue-700 font-medium">
                {t.contact.phone}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
