import type { Locale } from "../../lib/i18n/index.ts";

interface JobsProps {
  locale: Locale;
}

const content = {
  de: {
    backLink: { label: "Zurück zu Über uns", href: "/ueber-uns" },
    title: "Jobs",
    subtitle: "Werden Sie Teil unseres Teams",
    intro: {
      title: "Arbeiten bei Cashare",
      text:
        "Als Schweizer FinTech-Pionier im Bereich Crowdlending suchen wir leidenschaftliche und kreative Kopfe, die die digitale Medien- und Kreditbranche neu gestalten wollen. Wir bauen ein Team von zuverlassigen, innovativen Teamplayern auf, die neue Ideen annehmen, Anpassungsfahigkeit zeigen und sich der Gestaltung der Zukunft des Finanzsektors verschrieben haben.",
    },
    openings: {
      title: "Offene Stellen",
      jobs: [],
      noOpenings:
        "Zurzeit sind keine offenen Stellen verfügbar. Wir freuen uns jedoch über Ihre Initiativbewerbung.",
      applyBtn: "Jetzt bewerben",
    },
    culture: {
      title: "Unsere Kultur",
      items: [
        {
          title: "Innovation",
          desc: "Wir gestalten die Zukunft des Crowdlendings aktiv mit.",
        },
        {
          title: "Teamarbeit",
          desc:
            "Wir arbeiten als zuverlassige, innovative Teamplayer zusammen.",
        },
        {
          title: "Flexibilitat",
          desc: "Wir schatzen Anpassungsfahigkeit und neue Ideen.",
        },
        {
          title: "Wachstum",
          desc: "Wir fordern die personliche und berufliche Entwicklung.",
        },
      ],
    },
    spontaneous: {
      title: "Initiativbewerbung",
      text:
        "Keine passende Stelle gefunden? Wir freuen uns über Ihre Initiativbewerbung (Blindbewerbung). Senden Sie uns Ihre vollstandigen Bewerbungsunterlagen.",
      email: "jobs@cashare.ch",
      emailLabel: "Bewerbung senden",
    },
    contact: {
      title: "Kontakt",
      address: "Bosch 73, 6331 Hünenberg, Schweiz",
      phone: "+41 41 558 48 88",
      email: "jobs@cashare.ch",
    },
  },
  en: {
    backLink: { label: "Back to About Us", href: "/en/about" },
    title: "Jobs",
    subtitle: "Join our team",
    intro: {
      title: "Working at Cashare",
      text:
        "As a Swiss FinTech pioneer in crowdlending, we are looking for passionate and creative minds who want to reshape the digital media and crédit industry. We are building a team of reliable, innovative team players who embrace new ideas, demonstrate adaptability, and are committed to shaping the future of the financial sector.",
    },
    openings: {
      title: "Open Positions",
      jobs: [],
      noOpenings:
        "There are currently no open positions available. However, we welcome your spontaneous application.",
      applyBtn: "Apply now",
    },
    culture: {
      title: "Our Culture",
      items: [
        {
          title: "Innovation",
          desc: "We actively shape the future of crowdlending.",
        },
        {
          title: "Teamwork",
          desc: "We work together as reliable, innovative team players.",
        },
        { title: "Flexibility", desc: "We value adaptability and new ideas." },
        {
          title: "Growth",
          desc: "We promote personal and professional development.",
        },
      ],
    },
    spontaneous: {
      title: "Spontaneous Application",
      text:
        "No suitable position found? We welcome your spontaneous application. Send us your complete application documents.",
      email: "jobs@cashare.ch",
      emailLabel: "Send application",
    },
    contact: {
      title: "Contact",
      address: "Bosch 73, 6331 Hünenberg, Switzerland",
      phone: "+41 41 558 48 88",
      email: "jobs@cashare.ch",
    },
  },
  fr: {
    backLink: { label: "Retour à À propos", href: "/fr/a-propos" },
    title: "Emplois",
    subtitle: "Rejoignez notre equipe",
    intro: {
      title: "Travailler chez Cashare",
      text:
        "En tant que pionnier suisse de la FinTech dans le crowdlending, nous recherchons des esprits passionnes et creatifs qui veulent remodeler l'industrie des médias numeriques et du credit. Nous construisons une equipe de coequipiers fiables et innovants qui adoptent de nouvelles idees, font preuve d'adaptabilite et s'engagent a faconner l'avenir du secteur financier.",
    },
    openings: {
      title: "Postes ouverts",
      jobs: [],
      noOpenings:
        "Aucun poste n'est actuellement disponible. Cependant, nous accueillons volontiers votre candidature spontanee.",
      applyBtn: "Postuler maintenant",
    },
    culture: {
      title: "Notre culture",
      items: [
        {
          title: "Innovation",
          desc: "Nous faconnons activement l'avenir du crowdlending.",
        },
        {
          title: "Travail d'equipe",
          desc:
            "Nous travaillons ensemble en tant que coequipiers fiables et innovants.",
        },
        {
          title: "Flexibilite",
          desc: "Nous valorisons l'adaptabilite et les nouvelles idees.",
        },
        {
          title: "Croissance",
          desc: "Nous promouvons le developpement personnel et professionnel.",
        },
      ],
    },
    spontaneous: {
      title: "Candidature spontanee",
      text:
        "Aucun poste correspondant trouve? Nous accueillons votre candidature spontanee. Envoyez-nous vos documents de candidature complets.",
      email: "jobs@cashare.ch",
      emailLabel: "Envoyer la candidature",
    },
    contact: {
      title: "Contact",
      address: "Bosch 73, 6331 Hünenberg, Suisse",
      phone: "+41 41 558 48 88",
      email: "jobs@cashare.ch",
    },
  },
};

export function Jobs({ locale }: JobsProps) {
  const t = content[locale];

  return (
    <>
      <section class="subpage-hero">
        <div class="subpage-hero__container">
          <h1 class="subpage-hero__title">{t.title}</h1>
          <p class="subpage-hero__subtitle">{t.subtitle}</p>
        </div>
      </section>

      <section class="subpage-section subpage-section--white">
        <div class="subpage-section__container">
          <div class="content-block">
            <h2 class="content-block__title">{t.intro.title}</h2>
            <p class="content-block__text">{t.intro.text}</p>
          </div>
        </div>
      </section>

      <section class="subpage-section subpage-section--gray">
        <div class="subpage-section__container">
          <div class="subpage-section__header">
            <h2 class="subpage-section__title">{t.openings.title}</h2>
          </div>
          <div class="job-list">
            {t.openings.jobs.length === 0
              ? (
                <div class="job-list__empty">
                  <p class="content-block__text">{t.openings.noOpenings}</p>
                </div>
              )
              : (
                t.openings.jobs.map((job, i) => (
                  <div key={i} class="job-list__item">
                    <div class="job-list__header">
                      <div>
                        <h3 class="job-list__title">{job.title}</h3>
                        <div class="job-list__meta">
                          <span class="job-list__tag">
                            <svg
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                              />
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                              />
                            </svg>
                            {job.location}
                          </span>
                          <span class="job-list__tag">
                            <svg
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                            {job.type}
                          </span>
                          <span class="job-list__tag">
                            <svg
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                            {job.salary}
                          </span>
                        </div>
                      </div>
                      <a
                        href={`mailto:${t.spontaneous.email}?subject=${
                          encodeURIComponent(job.title)
                        }`}
                        class="subpage-cta__button"
                      >
                        {t.openings.applyBtn}
                      </a>
                    </div>
                  </div>
                ))
              )}
          </div>
        </div>
      </section>

      <section class="subpage-section subpage-section--white">
        <div class="subpage-section__container subpage-section__container--wide">
          <div class="subpage-section__header">
            <h2 class="subpage-section__title">{t.culture.title}</h2>
          </div>
          <div class="values-grid">
            {t.culture.items.map((item, i) => (
              <div key={i} class="values-grid__item">
                <h3 class="values-grid__title">{item.title}</h3>
                <p class="values-grid__desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section class="subpage-section subpage-section--gray">
        <div class="subpage-section__container">
          <div class="two-col">
            <div class="two-col__item">
              <h2 class="content-block__title">{t.spontaneous.title}</h2>
              <p class="content-block__text">{t.spontaneous.text}</p>
              <a
                href={`mailto:${t.spontaneous.email}`}
                class="subpage-cta__button"
                style="margin-top: 24px;"
              >
                {t.spontaneous.emailLabel}
              </a>
            </div>
            <div class="two-col__item">
              <h2 class="content-block__title">{t.contact.title}</h2>
              <div class="contact-links">
                <div class="contact-links__item">
                  <svg
                    class="contact-links__icon"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  {t.contact.address}
                </div>
                <a href={`tel:${t.contact.phone}`} class="contact-links__item">
                  <svg
                    class="contact-links__icon"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  {t.contact.phone}
                </a>
                <a
                  href={`mailto:${t.contact.email}`}
                  class="contact-links__item"
                >
                  <svg
                    class="contact-links__icon"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  {t.contact.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
