import type { Locale } from "../../lib/i18n/index.ts";

interface PartnersProps {
  locale: Locale;
}

const content = {
  de: {
    backLink: { label: "Zurück zu Über uns", href: "/ueber-uns" },
    title: "Partner",
    subtitle: "Starke Partnerschaften für Ihren Erfolg",
    intro: {
      title: "Unsere Partnerschaften",
      text: "Cashare hat über die Jahre starke Partnerschaften mit renommierten Unternehmen aufgebaut. Diese Zusammenarbeit ermoglicht es uns, unseren Kunden und Anlegern erstklassige Dienstleistungen und zusatzliche Sicherheit zu bieten.",
    },
    categories: [
      {
        title: "Finanzpartner",
        description: "Zusammenarbeit mit etablierten Finanzinstituten für sichere und effiziente Transaktionen.",
        partners: ["PostFinance", "Swissquote", "Raiffeisen"],
      },
      {
        title: "Technologiepartner",
        description: "Modernste Technologie für optimale Sicherheit und Benutzerfreundlichkeit.",
        partners: ["AWS", "Intrum", "CRIF AG"],
      },
      {
        title: "Branchenverbande",
        description: "Aktives Mitglied in führenden Fintech- und Kreditverbanden.",
        partners: ["Swiss Finance + Technology Association", "Verband Schweizerischer Kreditbanken"],
      },
    ],
    benefits: {
      title: "Vorteile unserer Partnerschaften",
      items: [
        { title: "Sicherheit", desc: "Hochste Standards durch renommierte Partner" },
        { title: "Innovation", desc: "Zugang zu neuesten Technologien" },
        { title: "Vertrauen", desc: "Etablierte Namen starken das Vertrauen" },
        { title: "Effizienz", desc: "Optimierte Prozesse durch Zusammenarbeit" },
      ],
    },
    becomePartner: {
      title: "Partner werden",
      text: "Sie mochten Partner von Cashare werden? Wir sind immer offen für neue Kooperationen, die unseren Kunden Mehrwert bieten.",
      cta: { label: "Kontakt aufnehmen", href: "mailto:partner@cashare.ch" },
    },
  },
  en: {
    backLink: { label: "Back to About Us", href: "/en/about" },
    title: "Partners",
    subtitle: "Strong partnerships for your success",
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
        partners: ["AWS", "Intrum", "CRIF AG"],
      },
      {
        title: "Industry Associations",
        description: "Active member in leading fintech and crédit associations.",
        partners: ["Swiss Finance + Technology Association", "Association of Swiss Crédit Banks"],
      },
    ],
    benefits: {
      title: "Benefits of our partnerships",
      items: [
        { title: "Security", desc: "Highest standards through renowned partners" },
        { title: "Innovation", desc: "Access to the latest technologies" },
        { title: "Trust", desc: "Established names strengthen trust" },
        { title: "Efficiency", desc: "Optimized processes through collaboration" },
      ],
    },
    becomePartner: {
      title: "Become a Partner",
      text: "Would you like to become a partner of Cashare? We are always open to new cooperations that provide added value to our customers.",
      cta: { label: "Get in touch", href: "mailto:partner@cashare.ch" },
    },
  },
  fr: {
    backLink: { label: "Retour à À propos", href: "/fr/a-propos" },
    title: "Partenaires",
    subtitle: "Des partenariats solides pour votre succes",
    intro: {
      title: "Nos partenariats",
      text: "Cashare a etabli de solides partenariats avec des entreprises renommees au fil des ans. Cette collaboration nous permet d'offrir a nos clients et investisseurs des services de premiere classe et une sécurité supplementaire.",
    },
    categories: [
      {
        title: "Partenaires financiers",
        description: "Collaboration avec des institutions financieres etablies pour des transactions securisees et efficaces.",
        partners: ["PostFinance", "Swissquote", "Raiffeisen"],
      },
      {
        title: "Partenaires technologiques",
        description: "Technologie de pointe pour une sécurité et une convivialite optimales.",
        partners: ["AWS", "Intrum", "CRIF AG"],
      },
      {
        title: "Associations professionnelles",
        description: "Membre actif des principales associations fintech et de credit.",
        partners: ["Swiss Finance + Technology Association", "Association des banques de crédit suisses"],
      },
    ],
    benefits: {
      title: "Avantages de nos partenariats",
      items: [
        { title: "Sécurité", desc: "Les normes les plus elevees grace a des partenaires renommes" },
        { title: "Innovation", desc: "Acces aux dernieres technologies" },
        { title: "Confiance", desc: "Les noms etablis renforcent la confiance" },
        { title: "Efficacite", desc: "Processus optimises grace a la collaboration" },
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
        <div class="subpage-section__container subpage-section__container--wide">
          <div class="partner-grid">
            {t.categories.map((category, i) => (
              <div key={i} class="partner-grid__card">
                <h3 class="partner-grid__title">{category.title}</h3>
                <p class="partner-grid__desc">{category.description}</p>
                <div class="check-list">
                  {category.partners.map((partner, j) => (
                    <div key={j} class="check-list__item">
                      <svg class="check-list__icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span class="check-list__text">{partner}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section class="subpage-section subpage-section--white">
        <div class="subpage-section__container subpage-section__container--wide">
          <div class="subpage-section__header">
            <h2 class="subpage-section__title">{t.benefits.title}</h2>
          </div>
          <div class="stats-grid">
            {t.benefits.items.map((item, i) => (
              <div key={i} class="stats-grid__item">
                <div class="stats-grid__icon">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div class="stats-grid__value">{item.title}</div>
                <div class="stats-grid__label">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section class="subpage-cta">
        <div class="subpage-cta__container">
          <h2 class="subpage-cta__title">{t.becomePartner.title}</h2>
          <p class="subpage-cta__text">{t.becomePartner.text}</p>
          <a href={t.becomePartner.cta.href} class="subpage-cta__button">
            {t.becomePartner.cta.label}
          </a>
        </div>
      </section>
    </>
  );
}
