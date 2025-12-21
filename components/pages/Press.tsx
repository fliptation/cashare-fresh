import type { Locale } from "../../lib/i18n/index.ts";

interface PressProps {
  locale: Locale;
}

// Press logos - same as used on home page
const pressLogos = [
  { name: "Tages Anzeiger", src: "/images/press/tagi.png" },
  { name: "Swissquote", src: "/images/press/swissquote.png" },
  { name: "moneycab", src: "/images/press/moneycab.png" },
  { name: "The Business Times", src: "/images/press/The-Business-Times.png" },
  { name: "Finanz und Wirtschaft", src: "/images/press/fuw.png" },
];

const content = {
  de: {
    backLink: { label: "Zurück zu Über uns", href: "/ueber-uns" },
    title: "Presse",
    subtitle: "Aktuelle Informationen, Medienmitteilungen und Pressekontakt.",
    featured: {
      title: "Bekannt aus",
    },
    releases: {
      title: "Medienmitteilungen",
      items: [
        { date: "Dez 2024", title: "Cashare erreicht über 250 Millionen CHF vermittelte Kredite", type: "Meilenstein" },
        { date: "Sep 2024", title: "Neue Partnerschaft mit führenden Schweizer Banken", type: "Partnerschaft" },
        { date: "Jun 2024", title: "Launch der neuen Anleger-Plattform", type: "Produkt" },
        { date: "Mär 2024", title: "Cashare erweitert KMU-Kreditangebot", type: "Produkt" },
      ],
    },
    facts: {
      title: "Über Cashare",
      items: [
        { label: "Gründung", value: "2008" },
        { label: "Hauptsitz", value: "Zürich" },
        { label: "Vermittelte Kredite", value: "CHF 250+ Mio." },
        { label: "Regulierung", value: "FINMA" },
      ],
    },
    contact: {
      title: "Pressekontakt",
      text: "Für Medienanfragen, Interviews oder Bildmaterial kontaktieren Sie bitte:",
      email: "presse@cashare.ch",
      phone: "+41 44 515 95 95",
      kit: {
        title: "Pressekit",
        text: "Laden Sie unser Pressekit mit Logos, Factsheet und Bildmaterial herunter.",
        label: "Pressekit herunterladen",
      },
    },
  },
  en: {
    backLink: { label: "Back to About Us", href: "/en/about" },
    title: "Press",
    subtitle: "Current information, press releases, and media contact.",
    featured: {
      title: "Featured in",
    },
    releases: {
      title: "Press Releases",
      items: [
        { date: "Dec 2024", title: "Cashare reaches over CHF 250 million in facilitated loans", type: "Milestone" },
        { date: "Sep 2024", title: "New partnership with leading Swiss banks", type: "Partnership" },
        { date: "Jun 2024", title: "Launch of new investor platform", type: "Product" },
        { date: "Mar 2024", title: "Cashare expands SME loan offerings", type: "Product" },
      ],
    },
    facts: {
      title: "About Cashare",
      items: [
        { label: "Founded", value: "2008" },
        { label: "Headquarters", value: "Zürich" },
        { label: "Facilitated Loans", value: "CHF 250+ M" },
        { label: "Régulation", value: "FINMA" },
      ],
    },
    contact: {
      title: "Press Contact",
      text: "For media inquiries, interviews, or visual materials, please contact:",
      email: "press@cashare.ch",
      phone: "+41 44 515 95 95",
      kit: {
        title: "Press Kit",
        text: "Download our press kit with logos, fact sheet, and visual materials.",
        label: "Download Press Kit",
      },
    },
  },
  fr: {
    backLink: { label: "Retour à À propos", href: "/fr/a-propos" },
    title: "Presse",
    subtitle: "Informations actuelles, communiqués de presse et contact médias.",
    featured: {
      title: "Dans les médias",
    },
    releases: {
      title: "Communiqués de presse",
      items: [
        { date: "Déc 2024", title: "Cashare atteint plus de 250 millions CHF de crédits accordés", type: "Jalon" },
        { date: "Sep 2024", title: "Nouveau partenariat avec les principales banques suisses", type: "Partenariat" },
        { date: "Jun 2024", title: "Lancement de la nouvelle plateforme investisseurs", type: "Produit" },
        { date: "Mar 2024", title: "Cashare élargit son offre de crédit PME", type: "Produit" },
      ],
    },
    facts: {
      title: "À propos de Cashare",
      items: [
        { label: "Fondation", value: "2008" },
        { label: "Siège", value: "Zürich" },
        { label: "Crédits accordés", value: "CHF 250+ M" },
        { label: "Régulation", value: "FINMA" },
      ],
    },
    contact: {
      title: "Contact presse",
      text: "Pour les demandes médias, interviews ou matériels visuels, veuillez contacter:",
      email: "presse@cashare.ch",
      phone: "+41 44 515 95 95",
      kit: {
        title: "Kit presse",
        text: "Téléchargez notre kit presse avec logos, fiche descriptive et matériels visuels.",
        label: "Télécharger le kit presse",
      },
    },
  },
};

export function Press({ locale }: PressProps) {
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
        <div class="subpage-section__container subpage-section__container--wide">
          <div class="subpage-section__header">
            <p class="subpage-section__subtitle">{t.featured.title}</p>
          </div>
          <div class="logo-bar__container">
            {pressLogos.map((logo) => (
              <div key={logo.name} class="logo-bar__item" title={logo.name}>
                <img
                  src={logo.src}
                  alt={logo.name}
                  loading="lazy"
                  class="logo-bar__image"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section class="subpage-section subpage-section--gray">
        <div class="subpage-section__container">
          <div class="subpage-section__header">
            <h2 class="subpage-section__title">{t.releases.title}</h2>
          </div>
          <div class="press-releases">
            {t.releases.items.map((release, i) => (
              <div key={i} class="press-releases__item">
                <div class="press-releases__meta">
                  <span class="press-releases__date">{release.date}</span>
                  <span class="press-releases__type">{release.type}</span>
                </div>
                <h3 class="press-releases__title">{release.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section class="subpage-section subpage-section--dark">
        <div class="subpage-section__container subpage-section__container--wide">
          <div class="subpage-section__header">
            <h2 class="subpage-section__title">{t.facts.title}</h2>
          </div>
          <div class="stats-grid">
            {t.facts.items.map((fact, i) => (
              <div key={i} class="stats-grid__item">
                <div class="stats-grid__value">{fact.value}</div>
                <div class="stats-grid__label">{fact.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section class="subpage-section subpage-section--white">
        <div class="subpage-section__container">
          <div class="two-col">
            <div class="two-col__left">
              <h2 class="content-block__title">{t.contact.title}</h2>
              <p class="content-block__text">{t.contact.text}</p>
              <div class="contact-links">
                <a href={`mailto:${t.contact.email}`} class="contact-links__item">
                  <svg class="contact-links__icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  {t.contact.email}
                </a>
                <a href={`tel:${t.contact.phone}`} class="contact-links__item">
                  <svg class="contact-links__icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  {t.contact.phone}
                </a>
              </div>
            </div>
            <div class="two-col__right">
              <div class="info-box">
                <h3 class="info-box__title">{t.contact.kit.title}</h3>
                <p class="info-box__text">{t.contact.kit.text}</p>
                <button class="info-box__button">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  {t.contact.kit.label}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
