import type { Locale } from "../../lib/i18n/index.ts";

interface PartnersProps {
  locale: Locale;
}

const content = {
  de: {
    title: "Partner",
    subtitle: "Starke Partnerschaften fur Ihren Erfolg",
    heroText: "Wir arbeiten mit fuhrenden Unternehmen zusammen, um Ihnen den besten Service zu bieten.",
    backLink: { label: "Zuruck zu Uber uns", href: "/ueber-uns" },
    intro: {
      title: "Unsere Partnerschaften",
      text: "Cashare hat uber die Jahre starke Partnerschaften mit renommierten Unternehmen aufgebaut. Diese Zusammenarbeit ermoglicht es uns, unseren Kunden und Anlegern erstklassige Dienstleistungen und zusatzliche Sicherheit zu bieten.",
    },
    categories: [
      {
        title: "Finanzpartner",
        description: "Zusammenarbeit mit etablierten Finanzinstituten fur sichere und effiziente Transaktionen.",
        partners: ["PostFinance", "Swissquote", "Raiffeisen"],
      },
      {
        title: "Technologiepartner",
        description: "Modernste Technologie fur optimale Sicherheit und Benutzerfreundlichkeit.",
        partners: ["AWS", "Intrum", "Crif"],
      },
      {
        title: "Branchenverbande",
        description: "Aktives Mitglied in fuhrenden Fintech- und Kreditverbanden.",
        partners: ["Swiss Finance + Technology Association", "Verband Schweizerischer Kreditbanken"],
      },
    ],
    benefits: {
      title: "Vorteile unserer Partnerschaften",
      items: [
        { title: "Sicherheit", description: "Hochste Standards durch renommierte Partner" },
        { title: "Innovation", description: "Zugang zu neuesten Technologien" },
        { title: "Vertrauen", description: "Etablierte Namen starken das Vertrauen" },
        { title: "Effizienz", description: "Optimierte Prozesse durch Zusammenarbeit" },
      ],
    },
    becomePartner: {
      title: "Partner werden",
      text: "Sie mochten Partner von Cashare werden? Wir sind immer offen fur neue Kooperationen, die unseren Kunden Mehrwert bieten.",
      cta: { label: "Kontakt aufnehmen", href: "mailto:partner@cashare.ch" },
    },
  },
  en: {
    title: "Partners",
    subtitle: "Strong partnerships for your success",
    heroText: "We work with leading companies to provide you with the best service.",
    backLink: { label: "Back to About Us", href: "/en/about" },
    intro: {
      title: "Our Partnerships",
      text: "Cashare has built strong partnerships with renowned companies over the years. This collaboration enables us to offer our customers and investors first-class services and additional security.",
    },
    categories: [
      {
        title: "Financial Partners",
        description: "Collaboration with established financial institutions for secure and efficient transactions.",
        partners: ["PostFinance", "Swissquote", "Raiffeisen"],
      },
      {
        title: "Technology Partners",
        description: "State-of-the-art technology for optimal security and user-friendliness.",
        partners: ["AWS", "Intrum", "Crif"],
      },
      {
        title: "Industry Associations",
        description: "Active member in leading fintech and credit associations.",
        partners: ["Swiss Finance + Technology Association", "Association of Swiss Credit Banks"],
      },
    ],
    benefits: {
      title: "Benefits of our partnerships",
      items: [
        { title: "Security", description: "Highest standards through renowned partners" },
        { title: "Innovation", description: "Access to the latest technologies" },
        { title: "Trust", description: "Established names strengthen trust" },
        { title: "Efficiency", description: "Optimized processes through collaboration" },
      ],
    },
    becomePartner: {
      title: "Become a Partner",
      text: "Would you like to become a partner of Cashare? We are always open to new cooperations that provide added value to our customers.",
      cta: { label: "Get in touch", href: "mailto:partner@cashare.ch" },
    },
  },
  fr: {
    title: "Partenaires",
    subtitle: "Des partenariats solides pour votre succes",
    heroText: "Nous travaillons avec des entreprises de premier plan pour vous offrir le meilleur service.",
    backLink: { label: "Retour a A propos", href: "/fr/a-propos" },
    intro: {
      title: "Nos partenariats",
      text: "Cashare a etabli de solides partenariats avec des entreprises renommees au fil des ans. Cette collaboration nous permet d'offrir a nos clients et investisseurs des services de premiere classe et une securite supplementaire.",
    },
    categories: [
      {
        title: "Partenaires financiers",
        description: "Collaboration avec des institutions financieres etablies pour des transactions securisees et efficaces.",
        partners: ["PostFinance", "Swissquote", "Raiffeisen"],
      },
      {
        title: "Partenaires technologiques",
        description: "Technologie de pointe pour une securite et une convivialite optimales.",
        partners: ["AWS", "Intrum", "Crif"],
      },
      {
        title: "Associations professionnelles",
        description: "Membre actif des principales associations fintech et de credit.",
        partners: ["Swiss Finance + Technology Association", "Association des banques de credit suisses"],
      },
    ],
    benefits: {
      title: "Avantages de nos partenariats",
      items: [
        { title: "Securite", description: "Les normes les plus elevees grace a des partenaires renommes" },
        { title: "Innovation", description: "Acces aux dernieres technologies" },
        { title: "Confiance", description: "Les noms etablis renforcent la confiance" },
        { title: "Efficacite", description: "Processus optimises grace a la collaboration" },
      ],
    },
    becomePartner: {
      title: "Devenir partenaire",
      text: "Vous souhaitez devenir partenaire de Cashare? Nous sommes toujours ouverts a de nouvelles cooperations qui apportent une valeur ajoutee a nos clients.",
      cta: { label: "Nous contacter", href: "mailto:partner@cashare.ch" },
    },
  },
};

export function Partners({ locale }: PartnersProps) {
  const t = content[locale];

  return (
    <>
      {/* Hero Section */}
      <section class="py-20 md:py-32 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 relative overflow-hidden">
        <div class="absolute inset-0 opacity-10">
          <div class="absolute -top-40 -right-40 w-80 h-80 bg-blue-400 rounded-full blur-3xl"></div>
          <div class="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-400 rounded-full blur-3xl"></div>
        </div>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <a href={t.backLink.href} class="inline-flex items-center text-blue-200 hover:text-white mb-8 transition-colors">
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
            {t.backLink.label}
          </a>
          <div class="text-center">
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">{t.title}</h1>
            <p class="text-xl md:text-2xl text-blue-100 mb-4 max-w-3xl mx-auto">{t.subtitle}</p>
            <p class="text-lg text-blue-100 max-w-2xl mx-auto">{t.heroText}</p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section class="py-20 bg-white">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{t.intro.title}</h2>
          <p class="text-xl text-gray-600 leading-relaxed">{t.intro.text}</p>
        </div>
      </section>

      {/* Partner Categories */}
      <section class="py-20 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid md:grid-cols-3 gap-8">
            {t.categories.map((category, index) => (
              <div key={index} class="bg-white rounded-2xl p-8 shadow-sm">
                <h3 class="text-xl font-bold text-gray-900 mb-4">{category.title}</h3>
                <p class="text-gray-600 mb-6">{category.description}</p>
                <div class="space-y-3">
                  {category.partners.map((partner, pIndex) => (
                    <div key={pIndex} class="flex items-center gap-3 text-gray-700">
                      <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                      </svg>
                      {partner}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">{t.benefits.title}</h2>
          <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.benefits.items.map((item, index) => (
              <div key={index} class="text-center">
                <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 class="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p class="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Become Partner CTA */}
      <section class="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">{t.becomePartner.title}</h2>
          <p class="text-xl text-blue-100 mb-8">{t.becomePartner.text}</p>
          <a
            href={t.becomePartner.cta.href}
            class="inline-flex items-center px-8 py-4 bg-white text-blue-900 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
          >
            {t.becomePartner.cta.label}
          </a>
        </div>
      </section>
    </>
  );
}
