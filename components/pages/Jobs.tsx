import type { Locale } from "../../lib/i18n/index.ts";

interface JobsProps {
  locale: Locale;
}

const content = {
  de: {
    backLink: { label: "Zuruck zu Uber uns", href: "/ueber-uns" },
    title: "Jobs",
    subtitle: "Gestalten Sie die Zukunft der Finanzwelt mit uns",
    why: {
      title: "Warum Cashare?",
      items: [
        { title: "Innovation", desc: "Arbeiten Sie mit modernster Technologie und gestalten Sie die Zukunft des Finanzwesens." },
        { title: "Impact", desc: "Ihre Arbeit macht einen echten Unterschied fur Tausende von Kreditnehmern und Anlegern." },
        { title: "Wachstum", desc: "Kontinuierliche Weiterentwicklung und Karrieremoglichkeiten in einem wachsenden Unternehmen." },
        { title: "Team", desc: "Ein motiviertes Team mit flachen Hierarchien und offener Kommunikation." },
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
    backLink: { label: "Back to About Us", href: "/en/about" },
    title: "Jobs",
    subtitle: "Shape the future of finance with us",
    why: {
      title: "Why Cashare?",
      items: [
        { title: "Innovation", desc: "Work with cutting-edge technology and shape the future of finance." },
        { title: "Impact", desc: "Your work makes a real difference for thousands of borrowers and investors." },
        { title: "Growth", desc: "Continuous development and career opportunities in a growing company." },
        { title: "Team", desc: "A motivated team with flat hierarchies and open communication." },
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
    backLink: { label: "Retour a A propos", href: "/fr/a-propos" },
    title: "Emplois",
    subtitle: "Faconnez l'avenir de la finance avec nous",
    why: {
      title: "Pourquoi Cashare?",
      items: [
        { title: "Innovation", desc: "Travaillez avec une technologie de pointe et faconnez l'avenir de la finance." },
        { title: "Impact", desc: "Votre travail fait une vraie difference pour des milliers d'emprunteurs et d'investisseurs." },
        { title: "Croissance", desc: "Developpement continu et opportunites de carriere dans une entreprise en croissance." },
        { title: "Equipe", desc: "Une equipe motivee avec des hierarchies plates et une communication ouverte." },
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
      <section class="subpage-hero">
        <div class="subpage-hero__container">
          <a href={t.backLink.href} class="subpage-hero__back">
            <svg class="subpage-hero__back-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
            {t.backLink.label}
          </a>
          <h1 class="subpage-hero__title">{t.title}</h1>
          <p class="subpage-hero__subtitle">{t.subtitle}</p>
        </div>
      </section>

      <section class="subpage-section subpage-section--white">
        <div class="subpage-section__container subpage-section__container--wide">
          <div class="subpage-section__header">
            <h2 class="subpage-section__title">{t.why.title}</h2>
          </div>
          <div class="benefits-grid">
            {t.why.items.map((item, i) => (
              <div key={i} class="benefits-grid__item">
                <div class="benefits-grid__icon">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h3 class="benefits-grid__title">{item.title}</h3>
                <p class="benefits-grid__desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section class="subpage-section subpage-section--gray">
        <div class="subpage-section__container">
          <div class="subpage-section__header">
            <h2 class="subpage-section__title">{t.benefits.title}</h2>
          </div>
          <div class="two-col">
            <div class="check-list">
              {t.benefits.items.slice(0, 3).map((benefit, i) => (
                <div key={i} class="check-list__item">
                  <svg class="check-list__icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span class="check-list__text">{benefit}</span>
                </div>
              ))}
            </div>
            <div class="check-list">
              {t.benefits.items.slice(3).map((benefit, i) => (
                <div key={i} class="check-list__item">
                  <svg class="check-list__icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span class="check-list__text">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section class="subpage-section subpage-section--white">
        <div class="subpage-section__container">
          <div class="subpage-section__header">
            <h2 class="subpage-section__title">{t.openings.title}</h2>
          </div>
          <div class="job-list">
            {t.openings.items.map((job, i) => (
              <div key={i} class="job-list__item">
                <div class="job-list__header">
                  <div>
                    <h3 class="job-list__title">{job.title}</h3>
                    <div class="job-list__meta">
                      <span class="job-list__tag">
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                        {job.department}
                      </span>
                      <span class="job-list__tag">
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {job.type}
                      </span>
                      <span class="job-list__tag">
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {job.location}
                      </span>
                    </div>
                  </div>
                  <svg class="job-list__arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section class="subpage-cta">
        <div class="subpage-cta__container">
          <h2 class="subpage-cta__title">{t.apply.title}</h2>
          <p class="subpage-cta__text">{t.apply.text}</p>
          <a href={t.apply.cta.href} class="subpage-cta__button">
            {t.apply.cta.label}
          </a>
        </div>
      </section>
    </>
  );
}
