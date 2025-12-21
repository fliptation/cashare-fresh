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
      <defs>
        <linearGradient id="age-head" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#fef08a" />
          <stop offset="100%" stop-color="#fde047" />
        </linearGradient>
        <linearGradient id="age-body" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#67e8f9" />
          <stop offset="100%" stop-color="#22d3ee" />
        </linearGradient>
      </defs>
      <circle cx="20" cy="13" r="7" fill="url(#age-head)" />
      <path d="M9 34c0-6.075 4.925-11 11-11s11 4.925 11 11" fill="url(#age-body)" />
      <circle cx="17" cy="11" r="1.5" fill="#fbbf24" opacity="0.4" />
    </svg>
  ),
  residence: (
    <svg viewBox="0 0 40 40" fill="none" class="requirements__icon">
      <defs>
        <linearGradient id="res-bg" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#67e8f9" />
          <stop offset="100%" stop-color="#22d3ee" />
        </linearGradient>
      </defs>
      <rect x="8" y="12" width="24" height="20" rx="3" fill="url(#res-bg)" />
      {/* Photo area */}
      <rect x="11" y="16" width="9" height="8" rx="1" fill="#fde047" />
      {/* Text lines */}
      <rect x="23" y="16" width="6" height="2" rx="1" fill="#cffafe" />
      <rect x="23" y="20" width="6" height="2" rx="1" fill="#cffafe" />
      <rect x="23" y="24" width="4" height="2" rx="1" fill="#cffafe" />
    </svg>
  ),
  bank: (
    <svg viewBox="0 0 40 40" fill="none" class="requirements__icon">
      <defs>
        <linearGradient id="bank-main" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#67e8f9" />
          <stop offset="100%" stop-color="#22d3ee" />
        </linearGradient>
        <linearGradient id="bank-top" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#22d3ee" />
          <stop offset="100%" stop-color="#0891b2" />
        </linearGradient>
      </defs>
      {/* Roof */}
      <path d="M20 6L4 16h32L20 6z" fill="url(#bank-top)" />
      {/* Building */}
      <rect x="6" y="16" width="28" height="18" rx="1" fill="url(#bank-main)" />
      {/* Pillars */}
      <rect x="10" y="20" width="3" height="10" rx="1" fill="#cffafe" />
      <rect x="18.5" y="20" width="3" height="10" rx="1" fill="#cffafe" />
      <rect x="27" y="20" width="3" height="10" rx="1" fill="#cffafe" />
      {/* Base */}
      <rect x="6" y="32" width="28" height="2" fill="url(#bank-top)" />
    </svg>
  ),
  income: (
    <svg viewBox="0 0 40 40" fill="none" class="requirements__icon">
      <defs>
        <linearGradient id="income-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#c4b5fd" />
          <stop offset="100%" stop-color="#a78bfa" />
        </linearGradient>
      </defs>
      <rect x="8" y="8" width="24" height="24" rx="5" fill="url(#income-bg)" />
      {/* Plus icon - centered */}
      <path d="M14 20h12" stroke="#fff" stroke-width="2.5" stroke-linecap="round" />
      <path d="M20 14v12" stroke="#fff" stroke-width="2.5" stroke-linecap="round" />
    </svg>
  ),
  debt: (
    <svg viewBox="0 0 40 40" fill="none" class="requirements__icon">
      <defs>
        <linearGradient id="debt-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#fef08a" />
          <stop offset="100%" stop-color="#fde047" />
        </linearGradient>
      </defs>
      <rect x="8" y="8" width="24" height="24" rx="3" fill="url(#debt-bg)" />
      {/* Document lines */}
      <rect x="13" y="14" width="14" height="2.5" rx="1" fill="#fbbf24" />
      <rect x="13" y="20" width="10" height="2.5" rx="1" fill="#fbbf24" />
      <rect x="13" y="26" width="6" height="2.5" rx="1" fill="#fbbf24" />
    </svg>
  ),
  registration: (
    <svg viewBox="0 0 40 40" fill="none" class="requirements__icon">
      <defs>
        <linearGradient id="reg-bg" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#4ade80" />
          <stop offset="100%" stop-color="#22c55e" />
        </linearGradient>
      </defs>
      <rect x="10" y="6" width="20" height="28" rx="3" fill="url(#reg-bg)" />
      {/* Checkmark */}
      <path
        d="M15 20l4 4 7-8"
        stroke="#fff"
        stroke-width="2.5"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
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
