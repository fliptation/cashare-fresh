import type { Locale } from "../../lib/i18n/index.ts";

interface PrivatdarlehenBeantragenProps {
  locale: Locale;
}

const content = {
  de: {
    hero: {
      title: "Privatdarlehen beantragen",
      subtitle: "Ihr persönlicher Kredit in wenigen Schritten",
      text: "Füllen Sie den Antrag aus und erhalten Sie schnell Ihre individuelle Offerte.",
    },
    form: {
      title: "Jetzt Kredit beantragen",
      subtitle: "Starten Sie Ihren Antrag online - einfach, schnell und sicher.",
      cta: "Zum Antragsformular",
      ctaLink: "https://app.cashare.ch/de/borrower/register",
    },
    benefits: {
      title: "Ihre Vorteile",
      items: [
        {
          title: "Schnelle Bearbeitung",
          description: "Ihr Antrag wird innerhalb kürzester Zeit geprüft.",
        },
        {
          title: "Attraktive Zinsen",
          description: "Profitieren Sie von fairen Konditionen ohne versteckte Gebühren.",
        },
        {
          title: "Flexible Laufzeiten",
          description: "Wählen Sie die Laufzeit, die zu Ihnen passt.",
        },
        {
          title: "100% Online",
          description: "Der gesamte Prozess läuft digital ab - kein Papierkram.",
        },
      ],
    },
    requirements: {
      title: "Voraussetzungen",
      items: [
        "Volljährig (mindestens 18 Jahre alt)",
        "CH/LI-Staatsbürger oder gültige Aufenthaltsbewilligung",
        "Schweizer Bankkonto",
        "Feste Anstellung oder regelmässiges, nachweisbares Einkommen",
        "Keine offenen Betreibungsverfahren und/oder Verlustscheine",
      ],
    },
  },
  en: {
    hero: {
      title: "Apply for Personal Loan",
      subtitle: "Your personal loan in just a few steps",
      text: "Fill out the application and quickly receive your personalized offer.",
    },
    form: {
      title: "Apply for Loan Now",
      subtitle: "Start your application online - simple, fast, and secure.",
      cta: "Go to Application Form",
      ctaLink: "https://app.cashare.ch/en/borrower/register",
    },
    benefits: {
      title: "Your Benefits",
      items: [
        {
          title: "Fast Processing",
          description: "Your application is reviewed within a short time.",
        },
        {
          title: "Attractive Rates",
          description: "Benefit from fair conditions without hidden fees.",
        },
        {
          title: "Flexible Terms",
          description: "Choose the term that suits you.",
        },
        {
          title: "100% Online",
          description: "The entire process is digital - no paperwork.",
        },
      ],
    },
    requirements: {
      title: "Requirements",
      items: [
        "Minimum age 18 years",
        "CH/LI citizenship or valid residence permit",
        "Swiss bank account",
        "Stable employment or regular income",
        "No active debt collection or loss records",
      ],
    },
  },
  fr: {
    hero: {
      title: "Demander un crédit privé",
      subtitle: "Votre crédit personnel en quelques étapes",
      text: "Remplissez la demande et recevez rapidement votre offre personnalisée.",
    },
    form: {
      title: "Demander un crédit maintenant",
      subtitle: "Commencez votre demande en ligne - simple, rapide et sécurisé.",
      cta: "Vers le formulaire de demande",
      ctaLink: "https://app.cashare.ch/fr/borrower/register",
    },
    benefits: {
      title: "Vos avantages",
      items: [
        {
          title: "Traitement rapide",
          description: "Votre demande est examinée dans les plus brefs délais.",
        },
        {
          title: "Taux attractifs",
          description: "Bénéficiez de conditions équitables sans frais cachés.",
        },
        {
          title: "Durées flexibles",
          description: "Choisissez la durée qui vous convient.",
        },
        {
          title: "100% en ligne",
          description: "Tout le processus est numérique - pas de paperasse.",
        },
      ],
    },
    requirements: {
      title: "Conditions requises",
      items: [
        "Âge minimum 18 ans",
        "Nationalité CH/LI ou permis de séjour valide",
        "Compte bancaire suisse",
        "Emploi stable ou revenu régulier",
        "Pas de poursuites actives ou d'actes de défaut de biens",
      ],
    },
  },
};

export function PrivatdarlehenBeantragen({ locale }: PrivatdarlehenBeantragenProps) {
  const t = content[locale];

  return (
    <>
      {/* Hero Section */}
      <section class="subpage-hero">
        <div class="subpage-hero__container">
          <h1 class="subpage-hero__title">{t.hero.title}</h1>
          <p class="subpage-hero__subtitle">{t.hero.subtitle}</p>
          <p class="subpage-hero__text">{t.hero.text}</p>
        </div>
      </section>

      {/* CTA Section */}
      <section class="subpage-section subpage-section--white">
        <div class="subpage-section__container">
          <div class="subpage-section__header">
            <h2 class="subpage-section__title">{t.form.title}</h2>
            <p class="subpage-section__subtitle">{t.form.subtitle}</p>
          </div>
          <div class="text-center">
            <a href={t.form.ctaLink} class="btn btn--primary btn--lg" target="_blank" rel="noopener noreferrer">
              {t.form.cta}
            </a>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section class="subpage-section subpage-section--gray">
        <div class="subpage-section__container subpage-section__container--wide">
          <div class="subpage-section__header">
            <h2 class="subpage-section__title">{t.benefits.title}</h2>
          </div>
          <div class="benefits-grid">
            {t.benefits.items.map((benefit, index) => (
              <div key={index} class="benefits-grid__item">
                <div class="benefits-grid__icon">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    width="28"
                    height="28"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 class="benefits-grid__title">{benefit.title}</h3>
                <p class="benefits-grid__desc">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section class="subpage-section subpage-section--white">
        <div class="subpage-section__container">
          <div class="subpage-section__header">
            <h2 class="subpage-section__title">{t.requirements.title}</h2>
          </div>
          <div class="requirements-list">
            {t.requirements.items.map((item, index) => (
              <div key={index} class="requirements-list__item">
                <svg
                  class="requirements-list__icon"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section class="subpage-cta">
        <div class="subpage-cta__container">
          <h2 class="subpage-cta__title">
            {locale === "de"
              ? "Bereit für Ihren Privatkredit?"
              : locale === "en"
              ? "Ready for your personal loan?"
              : "Prêt pour votre crédit privé?"}
          </h2>
          <div class="subpage-cta__buttons">
            <a href={t.form.ctaLink} class="subpage-cta__btn subpage-cta__btn--primary" target="_blank" rel="noopener noreferrer">
              {t.form.cta}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
