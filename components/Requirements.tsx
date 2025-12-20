import type { Locale } from "../lib/i18n/index.ts";

interface RequirementsProps {
  locale: Locale;
}

const content = {
  de: {
    borrower: {
      title: "Welche Voraussetzungen müssen Sie für einen Kreditantrag erfüllen?",
      cta: "Loslegen",
      ctaHref: "/kredit-beantragen",
      items: [
        {
          icon: "age",
          text: "Sie sind mindestens 18 Jahre",
        },
        {
          icon: "residence",
          text: "Sie sind CH/LI-Bürger oder besitzen eine gültige Aufenthaltsbewilligung für die Schweiz (CH) oder Liechtenstein (LI)",
        },
        {
          icon: "bank",
          text: "Sie haben ein Schweizer Bankkonto",
        },
        {
          icon: "income",
          text: "Sie haben eine unbefristete Anstellung oder ein regelmässiges Einkommen",
        },
        {
          icon: "debt",
          text: "Sie haben keine offenen Betreibungen und/oder Verlustscheine",
        },
      ],
    },
    investor: {
      title: "Wann kann ich mit dem Investieren beginnen?",
      cta: "Loslegen",
      ctaHref: "/investieren",
      items: [
        {
          icon: "age",
          text: "Sie sind mindestens 18 Jahre",
        },
        {
          icon: "residence",
          text: "Sie sind CH/LI-Bürger oder besitzen eine gültige Aufenthaltsbewilligung für die Schweiz (CH) oder Liechtenstein (LI)",
        },
        {
          icon: "registration",
          text: "Sie haben ein Schweizer Bankkonto und haben den Registrierungsprozess durchgelaufen.",
        },
      ],
    },
  },
  en: {
    borrower: {
      title: "What requirements do you need to meet for a loan application?",
      cta: "Get Started",
      ctaHref: "/en/apply-for-loan",
      items: [
        {
          icon: "age",
          text: "You are at least 18 years old",
        },
        {
          icon: "residence",
          text: "You are a CH/LI citizen or have a valid residence permit for Switzerland (CH) or Liechtenstein (LI)",
        },
        {
          icon: "bank",
          text: "You have a Swiss bank account",
        },
        {
          icon: "income",
          text: "You have a permanent position or regular income",
        },
        {
          icon: "debt",
          text: "You have no outstanding debt collection proceedings and/or loss certificates",
        },
      ],
    },
    investor: {
      title: "When can I start investing?",
      cta: "Get Started",
      ctaHref: "/en/invest",
      items: [
        {
          icon: "age",
          text: "You are at least 18 years old",
        },
        {
          icon: "residence",
          text: "You are a CH/LI citizen or have a valid residence permit for Switzerland (CH) or Liechtenstein (LI)",
        },
        {
          icon: "registration",
          text: "You have a Swiss bank account and have completed the registration process.",
        },
      ],
    },
  },
  fr: {
    borrower: {
      title: "Quelles conditions devez-vous remplir pour une demande de crédit?",
      cta: "Commencer",
      ctaHref: "/fr/demander-credit",
      items: [
        {
          icon: "age",
          text: "Vous avez au moins 18 ans",
        },
        {
          icon: "residence",
          text: "Vous êtes citoyen CH/LI ou possédez un permis de séjour valide pour la Suisse (CH) ou le Liechtenstein (LI)",
        },
        {
          icon: "bank",
          text: "Vous avez un compte bancaire suisse",
        },
        {
          icon: "income",
          text: "Vous avez un emploi permanent ou un revenu régulier",
        },
        {
          icon: "debt",
          text: "Vous n'avez pas de poursuites en cours et/ou d'actes de défaut de biens",
        },
      ],
    },
    investor: {
      title: "Quand puis-je commencer à investir?",
      cta: "Commencer",
      ctaHref: "/fr/investir",
      items: [
        {
          icon: "age",
          text: "Vous avez au moins 18 ans",
        },
        {
          icon: "residence",
          text: "Vous êtes citoyen CH/LI ou possédez un permis de séjour valide pour la Suisse (CH) ou le Liechtenstein (LI)",
        },
        {
          icon: "registration",
          text: "Vous avez un compte bancaire suisse et avez terminé le processus d'inscription.",
        },
      ],
    },
  },
};

const icons = {
  age: (
    <svg viewBox="0 0 40 40" fill="none" class="requirements__icon">
      <circle cx="20" cy="14" r="8" fill="#fde047" />
      <path d="M8 34c0-6.627 5.373-12 12-12s12 5.373 12 12" fill="#22d3ee" />
    </svg>
  ),
  residence: (
    <svg viewBox="0 0 40 40" fill="none" class="requirements__icon">
      <rect x="8" y="12" width="24" height="20" rx="2" fill="#22d3ee" />
      <rect x="12" y="16" width="8" height="6" fill="#fde047" />
      <rect x="24" y="16" width="4" height="4" fill="#a78bfa" />
      <rect x="24" y="22" width="4" height="4" fill="#a78bfa" />
    </svg>
  ),
  bank: (
    <svg viewBox="0 0 40 40" fill="none" class="requirements__icon">
      <rect x="6" y="16" width="28" height="18" rx="2" fill="#22d3ee" />
      <rect x="6" y="12" width="28" height="6" fill="#0ea5e9" />
      <rect x="12" y="22" width="6" height="4" fill="#fde047" />
    </svg>
  ),
  income: (
    <svg viewBox="0 0 40 40" fill="none" class="requirements__icon">
      <rect x="8" y="8" width="24" height="24" rx="4" fill="#a78bfa" />
      <path d="M14 20h12M20 14v12" stroke="#fff" stroke-width="2" stroke-linecap="round" />
    </svg>
  ),
  debt: (
    <svg viewBox="0 0 40 40" fill="none" class="requirements__icon">
      <rect x="8" y="10" width="24" height="20" rx="2" fill="#fde047" />
      <path d="M14 18h12M14 24h8" stroke="#1e293b" stroke-width="2" stroke-linecap="round" />
    </svg>
  ),
  registration: (
    <svg viewBox="0 0 40 40" fill="none" class="requirements__icon">
      <rect x="10" y="8" width="20" height="24" rx="2" fill="#22c55e" />
      <path d="M16 18l3 3 6-6" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  ),
};

function RequirementsList({ section, type }: { section: typeof content.de.borrower; type: "borrower" | "investor" }) {
  return (
    <div class={`requirements__section requirements__section--${type}`}>
      <h2 class="requirements__title">{section.title}</h2>

      <div class="requirements__timeline">
        {section.items.map((item, index) => (
          <div
            class={`requirements__item ${index % 2 === 1 ? "requirements__item--right" : ""}`}
            key={index}
          >
            <div class="requirements__item-content">
              {icons[item.icon as keyof typeof icons]}
              <span class="requirements__item-text">{item.text}</span>
            </div>
          </div>
        ))}
      </div>

      <div class="requirements__cta-wrapper">
        <a href={section.ctaHref} class="requirements__cta">
          {section.cta}
        </a>
      </div>
    </div>
  );
}

export function Requirements({ locale }: RequirementsProps) {
  const t = content[locale];

  return (
    <section class="requirements">
      <div class="requirements__container">
        <RequirementsList section={t.borrower} type="borrower" />
        <RequirementsList section={t.investor} type="investor" />
      </div>
    </section>
  );
}
