import type { Locale } from "../../lib/i18n/index.ts";

interface PressProps {
  locale: Locale;
}

const content = {
  de: {
    title: "Presse",
    subtitle: "Medienzentrum",
    heroText: "Aktuelle Informationen, Medienmitteilungen und Pressekontakt.",
    backLink: { label: "Zuruck zu Uber uns", href: "/ueber-uns" },
    featured: {
      title: "Bekannt aus",
      outlets: [
        "Tages Anzeiger",
        "Finanz und Wirtschaft",
        "Swissquote",
        "moneycab",
        "The Business Times",
      ],
    },
    releases: {
      title: "Medienmitteilungen",
      items: [
        { date: "2024-12", title: "Cashare erreicht uber 250 Millionen CHF vermittelte Kredite", type: "Meilenstein" },
        { date: "2024-09", title: "Neue Partnerschaft mit fuhrenden Schweizer Banken", type: "Partnerschaft" },
        { date: "2024-06", title: "Launch der neuen Anleger-Plattform", type: "Produkt" },
        { date: "2024-03", title: "Cashare erweitert KMU-Kreditangebot", type: "Produkt" },
      ],
    },
    facts: {
      title: "Uber Cashare",
      items: [
        { label: "Grundung", value: "2008" },
        { label: "Hauptsitz", value: "Zurich, Schweiz" },
        { label: "Vermittelte Kredite", value: "CHF 250+ Mio." },
        { label: "Regulierung", value: "FINMA-lizenziert" },
      ],
    },
    contact: {
      title: "Pressekontakt",
      text: "Fur Medienanfragen, Interviews oder Bildmaterial kontaktieren Sie bitte:",
      email: "presse@cashare.ch",
      phone: "+41 44 515 95 95",
      download: {
        title: "Pressekit",
        text: "Laden Sie unser Pressekit mit Logos, Factsheet und Bildmaterial herunter.",
        label: "Pressekit herunterladen",
      },
    },
  },
  en: {
    title: "Press",
    subtitle: "Media Center",
    heroText: "Current information, press releases, and media contact.",
    backLink: { label: "Back to About Us", href: "/en/about" },
    featured: {
      title: "Featured in",
      outlets: [
        "Tages Anzeiger",
        "Finanz und Wirtschaft",
        "Swissquote",
        "moneycab",
        "The Business Times",
      ],
    },
    releases: {
      title: "Press Releases",
      items: [
        { date: "2024-12", title: "Cashare reaches over CHF 250 million in facilitated loans", type: "Milestone" },
        { date: "2024-09", title: "New partnership with leading Swiss banks", type: "Partnership" },
        { date: "2024-06", title: "Launch of new investor platform", type: "Product" },
        { date: "2024-03", title: "Cashare expands SME loan offerings", type: "Product" },
      ],
    },
    facts: {
      title: "About Cashare",
      items: [
        { label: "Founded", value: "2008" },
        { label: "Headquarters", value: "Zurich, Switzerland" },
        { label: "Facilitated Loans", value: "CHF 250+ million" },
        { label: "Regulation", value: "FINMA-licensed" },
      ],
    },
    contact: {
      title: "Press Contact",
      text: "For media inquiries, interviews, or visual materials, please contact:",
      email: "press@cashare.ch",
      phone: "+41 44 515 95 95",
      download: {
        title: "Press Kit",
        text: "Download our press kit with logos, fact sheet, and visual materials.",
        label: "Download Press Kit",
      },
    },
  },
  fr: {
    title: "Presse",
    subtitle: "Centre medias",
    heroText: "Informations actuelles, communiques de presse et contact medias.",
    backLink: { label: "Retour a A propos", href: "/fr/a-propos" },
    featured: {
      title: "Dans les medias",
      outlets: [
        "Tages Anzeiger",
        "Finanz und Wirtschaft",
        "Swissquote",
        "moneycab",
        "The Business Times",
      ],
    },
    releases: {
      title: "Communiques de presse",
      items: [
        { date: "2024-12", title: "Cashare atteint plus de 250 millions CHF de credits accordes", type: "Jalon" },
        { date: "2024-09", title: "Nouveau partenariat avec les principales banques suisses", type: "Partenariat" },
        { date: "2024-06", title: "Lancement de la nouvelle plateforme investisseurs", type: "Produit" },
        { date: "2024-03", title: "Cashare elargit son offre de credit PME", type: "Produit" },
      ],
    },
    facts: {
      title: "A propos de Cashare",
      items: [
        { label: "Fondation", value: "2008" },
        { label: "Siege", value: "Zurich, Suisse" },
        { label: "Credits accordes", value: "CHF 250+ millions" },
        { label: "Regulation", value: "Licence FINMA" },
      ],
    },
    contact: {
      title: "Contact presse",
      text: "Pour les demandes medias, interviews ou materiels visuels, veuillez contacter:",
      email: "presse@cashare.ch",
      phone: "+41 44 515 95 95",
      download: {
        title: "Kit presse",
        text: "Telechargez notre kit presse avec logos, fiche descriptive et materiels visuels.",
        label: "Telecharger le kit presse",
      },
    },
  },
};

export function Press({ locale }: PressProps) {
  const t = content[locale];

  return (
    <>
      {/* Hero Section */}
      <section class="py-20 md:py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
        <div class="absolute inset-0 opacity-10">
          <div class="absolute -top-40 -right-40 w-80 h-80 bg-gray-400 rounded-full blur-3xl"></div>
          <div class="absolute -bottom-40 -left-40 w-80 h-80 bg-gray-500 rounded-full blur-3xl"></div>
        </div>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <a href={t.backLink.href} class="inline-flex items-center text-gray-300 hover:text-white mb-8 transition-colors">
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
            {t.backLink.label}
          </a>
          <div class="text-center">
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">{t.title}</h1>
            <p class="text-xl md:text-2xl text-gray-200 mb-4">{t.subtitle}</p>
            <p class="text-lg text-gray-300 max-w-2xl mx-auto">{t.heroText}</p>
          </div>
        </div>
      </section>

      {/* Featured In */}
      <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-lg font-semibold text-gray-600 text-center mb-8">{t.featured.title}</h2>
          <div class="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {t.featured.outlets.map((outlet, index) => (
              <div key={index} class="text-gray-400 text-lg font-medium">
                {outlet}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Press Releases */}
      <section class="py-20 bg-gray-50">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-12">{t.releases.title}</h2>
          <div class="space-y-6">
            {t.releases.items.map((release, index) => (
              <div key={index} class="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div class="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <div class="flex items-center gap-3 mb-2">
                      <span class="text-sm text-gray-500">{release.date}</span>
                      <span class="px-2 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded">
                        {release.type}
                      </span>
                    </div>
                    <h3 class="text-lg font-semibold text-gray-900">{release.title}</h3>
                  </div>
                  <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Facts */}
      <section class="py-20 bg-gray-900">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-3xl md:text-4xl font-bold text-center text-white mb-12">{t.facts.title}</h2>
          <div class="grid md:grid-cols-4 gap-8">
            {t.facts.items.map((fact, index) => (
              <div key={index} class="text-center">
                <div class="text-3xl font-bold text-white mb-2">{fact.value}</div>
                <div class="text-gray-400">{fact.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section class="py-20 bg-white">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid md:grid-cols-2 gap-12">
            <div>
              <h2 class="text-3xl font-bold text-gray-900 mb-6">{t.contact.title}</h2>
              <p class="text-gray-600 mb-6">{t.contact.text}</p>
              <div class="space-y-4">
                <a href={`mailto:${t.contact.email}`} class="flex items-center gap-3 text-gray-700 hover:text-gray-900">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  {t.contact.email}
                </a>
                <a href={`tel:${t.contact.phone}`} class="flex items-center gap-3 text-gray-700 hover:text-gray-900">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  {t.contact.phone}
                </a>
              </div>
            </div>
            <div class="bg-gray-50 rounded-2xl p-8">
              <h3 class="text-xl font-bold text-gray-900 mb-4">{t.contact.download.title}</h3>
              <p class="text-gray-600 mb-6">{t.contact.download.text}</p>
              <button class="inline-flex items-center px-6 py-3 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors">
                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                {t.contact.download.label}
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
