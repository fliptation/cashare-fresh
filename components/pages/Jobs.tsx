import type { Locale } from "../../lib/i18n/index.ts";

interface JobsProps {
  locale: Locale;
}

const content = {
  de: {
    title: "Jobs",
    subtitle: "Gestalten Sie die Zukunft der Finanzwelt mit uns",
    heroText: "Werden Sie Teil eines innovativen FinTech-Unternehmens und arbeiten Sie an der Spitze der digitalen Transformation.",
    backLink: { label: "Zuruck zu Uber uns", href: "/ueber-uns" },
    why: {
      title: "Warum Cashare?",
      items: [
        { title: "Innovation", description: "Arbeiten Sie mit modernster Technologie und gestalten Sie die Zukunft des Finanzwesens." },
        { title: "Impact", description: "Ihre Arbeit macht einen echten Unterschied fur Tausende von Kreditnehmern und Anlegern." },
        { title: "Wachstum", description: "Kontinuierliche Weiterentwicklung und Karrieremoglichkeiten in einem wachsenden Unternehmen." },
        { title: "Team", description: "Ein motiviertes Team mit flachen Hierarchien und offener Kommunikation." },
      ],
    },
    benefits: {
      title: "Unsere Benefits",
      items: [
        "Flexibles Arbeiten und Home-Office-Moglichkeiten",
        "Moderne Buros im Herzen von Zurich",
        "Wettbewerbsfahiges Gehalt und Bonusprogramm",
        "Weiterbildungsbudget",
        "Betriebliche Altersvorsorge",
        "Team-Events und gemeinsame Aktivitaten",
      ],
    },
    openings: {
      title: "Offene Stellen",
      empty: "Derzeit keine offenen Stellen. Initiativbewerbungen sind willkommen!",
      items: [
        { title: "Senior Software Engineer", department: "Engineering", type: "Vollzeit", location: "Zurich" },
        { title: "Risk Analyst", department: "Risk Management", type: "Vollzeit", location: "Zurich" },
        { title: "Customer Success Manager", department: "Operations", type: "Vollzeit", location: "Zurich" },
      ],
    },
    apply: {
      title: "Initiativbewerbung",
      text: "Keine passende Stelle gefunden? Wir freuen uns uber Ihre Initiativbewerbung und melden uns, sobald eine passende Position frei wird.",
      cta: { label: "Jetzt bewerben", href: "mailto:jobs@cashare.ch" },
    },
  },
  en: {
    title: "Jobs",
    subtitle: "Shape the future of finance with us",
    heroText: "Become part of an innovative FinTech company and work at the forefront of digital transformation.",
    backLink: { label: "Back to About Us", href: "/en/about" },
    why: {
      title: "Why Cashare?",
      items: [
        { title: "Innovation", description: "Work with cutting-edge technology and shape the future of finance." },
        { title: "Impact", description: "Your work makes a real difference for thousands of borrowers and investors." },
        { title: "Growth", description: "Continuous development and career opportunities in a growing company." },
        { title: "Team", description: "A motivated team with flat hierarchies and open communication." },
      ],
    },
    benefits: {
      title: "Our Benefits",
      items: [
        "Flexible working and home office options",
        "Modern offices in the heart of Zurich",
        "Competitive salary and bonus program",
        "Training budget",
        "Company pension plan",
        "Team events and joint activities",
      ],
    },
    openings: {
      title: "Open Positions",
      empty: "Currently no open positions. Spontaneous applications are welcome!",
      items: [
        { title: "Senior Software Engineer", department: "Engineering", type: "Full-time", location: "Zurich" },
        { title: "Risk Analyst", department: "Risk Management", type: "Full-time", location: "Zurich" },
        { title: "Customer Success Manager", department: "Operations", type: "Full-time", location: "Zurich" },
      ],
    },
    apply: {
      title: "Spontaneous Application",
      text: "No suitable position found? We welcome your spontaneous application and will get back to you as soon as a suitable position becomes available.",
      cta: { label: "Apply Now", href: "mailto:jobs@cashare.ch" },
    },
  },
  fr: {
    title: "Emplois",
    subtitle: "Faconnez l'avenir de la finance avec nous",
    heroText: "Rejoignez une entreprise FinTech innovante et travaillez a la pointe de la transformation numerique.",
    backLink: { label: "Retour a A propos", href: "/fr/a-propos" },
    why: {
      title: "Pourquoi Cashare?",
      items: [
        { title: "Innovation", description: "Travaillez avec une technologie de pointe et faconnez l'avenir de la finance." },
        { title: "Impact", description: "Votre travail fait une vraie difference pour des milliers d'emprunteurs et d'investisseurs." },
        { title: "Croissance", description: "Developpement continu et opportunites de carriere dans une entreprise en croissance." },
        { title: "Equipe", description: "Une equipe motivee avec des hierarchies plates et une communication ouverte." },
      ],
    },
    benefits: {
      title: "Nos avantages",
      items: [
        "Travail flexible et options de teletravail",
        "Bureaux modernes au coeur de Zurich",
        "Salaire competitif et programme de bonus",
        "Budget formation",
        "Plan de retraite d'entreprise",
        "Evenements d'equipe et activites communes",
      ],
    },
    openings: {
      title: "Postes ouverts",
      empty: "Actuellement aucun poste ouvert. Les candidatures spontanees sont les bienvenues!",
      items: [
        { title: "Ingenieur logiciel senior", department: "Ingenierie", type: "Temps plein", location: "Zurich" },
        { title: "Analyste des risques", department: "Gestion des risques", type: "Temps plein", location: "Zurich" },
        { title: "Responsable succes client", department: "Operations", type: "Temps plein", location: "Zurich" },
      ],
    },
    apply: {
      title: "Candidature spontanee",
      text: "Aucun poste correspondant trouve? Nous accueillons votre candidature spontanee et vous contacterons des qu'un poste adapte sera disponible.",
      cta: { label: "Postuler maintenant", href: "mailto:jobs@cashare.ch" },
    },
  },
};

export function Jobs({ locale }: JobsProps) {
  const t = content[locale];

  return (
    <>
      {/* Hero Section */}
      <section class="py-20 md:py-32 bg-gradient-to-br from-orange-900 via-orange-800 to-red-900 relative overflow-hidden">
        <div class="absolute inset-0 opacity-10">
          <div class="absolute -top-40 -right-40 w-80 h-80 bg-orange-400 rounded-full blur-3xl"></div>
          <div class="absolute -bottom-40 -left-40 w-80 h-80 bg-red-400 rounded-full blur-3xl"></div>
        </div>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <a href={t.backLink.href} class="inline-flex items-center text-orange-200 hover:text-white mb-8 transition-colors">
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
            {t.backLink.label}
          </a>
          <div class="text-center">
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">{t.title}</h1>
            <p class="text-xl md:text-2xl text-orange-100 mb-4 max-w-3xl mx-auto">{t.subtitle}</p>
            <p class="text-lg text-orange-100 max-w-2xl mx-auto">{t.heroText}</p>
          </div>
        </div>
      </section>

      {/* Why Cashare */}
      <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">{t.why.title}</h2>
          <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.why.items.map((item, index) => (
              <div key={index} class="text-center">
                <div class="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg class="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h3 class="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p class="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section class="py-20 bg-gray-50">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">{t.benefits.title}</h2>
          <div class="grid md:grid-cols-2 gap-4">
            {t.benefits.items.map((benefit, index) => (
              <div key={index} class="flex items-center gap-3 bg-white p-4 rounded-lg">
                <svg class="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span class="text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section class="py-20 bg-white">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-12">{t.openings.title}</h2>
          <div class="space-y-4">
            {t.openings.items.map((job, index) => (
              <div key={index} class="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors cursor-pointer">
                <div class="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <h3 class="text-lg font-semibold text-gray-900 mb-2">{job.title}</h3>
                    <div class="flex flex-wrap gap-3 text-sm text-gray-600">
                      <span class="flex items-center gap-1">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                        {job.department}
                      </span>
                      <span class="flex items-center gap-1">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {job.type}
                      </span>
                      <span class="flex items-center gap-1">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {job.location}
                      </span>
                    </div>
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

      {/* Spontaneous Application CTA */}
      <section class="py-20 bg-gradient-to-r from-orange-600 to-red-600">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">{t.apply.title}</h2>
          <p class="text-xl text-orange-100 mb-8">{t.apply.text}</p>
          <a
            href={t.apply.cta.href}
            class="inline-flex items-center px-8 py-4 bg-white text-orange-900 font-semibold rounded-lg hover:bg-orange-50 transition-colors"
          >
            {t.apply.cta.label}
          </a>
        </div>
      </section>
    </>
  );
}
