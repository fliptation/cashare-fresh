import type { Locale } from "../lib/i18n/index.ts";

interface BorrowersProps {
  locale: Locale;
}

const content = {
  de: {
    label: "Für Kreditnehmer",
    title: "Die clevere Lösung!",
    subtitle: "Schnelle, einfache und sichere Kredite für Privatpersonen und kleine Unternehmen",
    cta: "Mehr Informationen",
    ctaHref: "/kredit-beantragen",
    products: [
      {
        icon: "person",
        title: "Privatkredit",
        description: "Mit unserem flexiblen Privatkredit erreichen Sie Ihre Ziele, zu fairen Konditionen und transparent.",
        href: "/privatkredit",
      },
      {
        icon: "building",
        title: "KMU-Kredit",
        description: "Frisches Kapital für Ihr KMU, flexibel, fair und genau auf Ihre Pläne zugeschnitten.",
        href: "/kmu-kredit",
      },
      {
        icon: "home",
        title: "Immobilienkredit",
        description: "Ob Eigenheim oder Renditeobjekt, mit unseren Hypotheken und Immobilienkrediten finanzieren Sie clever.",
        href: "/immobilienkredit",
      },
    ],
  },
  en: {
    label: "For Borrowers",
    title: "The Smart Solution!",
    subtitle: "Fast, simple and secure loans for individuals and small businesses",
    cta: "More Information",
    ctaHref: "/en/apply-for-credit",
    products: [
      {
        icon: "person",
        title: "Personal Loan",
        description: "Achieve your goals with our flexible personal loans, at fair conditions and fully transparent.",
        href: "/en/personal-loan",
      },
      {
        icon: "building",
        title: "SME Loan",
        description: "Fresh capital for your SME, flexible, fair and tailored exactly to your plans.",
        href: "/en/sme-loan",
      },
      {
        icon: "home",
        title: "Mortgage",
        description: "Whether home or investment property, finance smartly with our mortgages and real estate loans.",
        href: "/en/mortgage",
      },
    ],
  },
  fr: {
    label: "Pour les emprunteurs",
    title: "La solution intelligente!",
    subtitle: "Des crédits rapides, simples et sécurisés pour les particuliers et les petites entreprises",
    cta: "Plus d'informations",
    ctaHref: "/fr/demander-un-credit",
    products: [
      {
        icon: "person",
        title: "Crédit privé",
        description: "Atteignez vos objectifs avec notre crédit privé flexible, à des conditions équitables et transparentes.",
        href: "/fr/credit-prive",
      },
      {
        icon: "building",
        title: "Crédit PME",
        description: "Du capital frais pour votre PME, flexible, équitable et adapté exactement à vos projets.",
        href: "/fr/credit-pme",
      },
      {
        icon: "home",
        title: "Crédit immobilier",
        description: "Que ce soit pour votre maison ou un investissement, financez intelligemment avec nos hypothèques.",
        href: "/fr/credit-immobilier",
      },
    ],
  },
};

const icons = {
  person: (
    <svg viewBox="0 0 64 64" fill="none" class="borrowers__icon">
      <rect width="64" height="64" rx="16" fill="url(#person-gradient)" />
      <circle cx="32" cy="24" r="10" fill="#6366f1" />
      <path d="M16 56c0-8.837 7.163-16 16-16s16 7.163 16 16" stroke="#6366f1" stroke-width="4" fill="none" />
      <defs>
        <linearGradient id="person-gradient" x1="0" y1="0" x2="64" y2="64">
          <stop stop-color="#c7d2fe" />
          <stop offset="1" stop-color="#e0e7ff" />
        </linearGradient>
      </defs>
    </svg>
  ),
  building: (
    <svg viewBox="0 0 64 64" fill="none" class="borrowers__icon">
      <rect width="64" height="64" rx="16" fill="url(#building-gradient)" />
      <rect x="12" y="20" width="40" height="36" rx="2" fill="#ec4899" />
      <rect x="18" y="26" width="8" height="8" fill="#fce7f3" />
      <rect x="28" y="26" width="8" height="8" fill="#fce7f3" />
      <rect x="38" y="26" width="8" height="8" fill="#fce7f3" />
      <rect x="18" y="38" width="8" height="8" fill="#fce7f3" />
      <rect x="28" y="38" width="8" height="8" fill="#fce7f3" />
      <rect x="38" y="38" width="8" height="8" fill="#fce7f3" />
      <polygon points="32,8 52,20 12,20" fill="#ec4899" />
      <defs>
        <linearGradient id="building-gradient" x1="0" y1="0" x2="64" y2="64">
          <stop stop-color="#fce7f3" />
          <stop offset="1" stop-color="#fbcfe8" />
        </linearGradient>
      </defs>
    </svg>
  ),
  home: (
    <svg viewBox="0 0 64 64" fill="none" class="borrowers__icon">
      <rect width="64" height="64" rx="16" fill="url(#home-gradient)" />
      <path d="M32 12L8 32h8v20h32V32h8L32 12z" fill="#0891b2" />
      <rect x="26" y="36" width="12" height="16" fill="#cffafe" />
      <rect x="40" y="24" width="8" height="12" fill="#0e7490" />
      <defs>
        <linearGradient id="home-gradient" x1="0" y1="0" x2="64" y2="64">
          <stop stop-color="#cffafe" />
          <stop offset="1" stop-color="#a5f3fc" />
        </linearGradient>
      </defs>
    </svg>
  ),
};

export function Borrowers({ locale }: BorrowersProps) {
  const t = content[locale];

  return (
    <section class="borrowers">
      <div class="borrowers__background" />
      <div class="borrowers__container">
        <div class="borrowers__header">
          <span class="borrowers__label">{t.label}</span>
          <h2 class="borrowers__title">{t.title}</h2>
          <p class="borrowers__subtitle">{t.subtitle}</p>
          <a href={t.ctaHref} class="borrowers__cta btn btn--primary">
            {t.cta}
          </a>
        </div>

        <div class="borrowers__products">
          {t.products.map((product) => (
            <a href={product.href} class="borrowers__card" key={product.title}>
              {icons[product.icon as keyof typeof icons]}
              <h3 class="borrowers__card-title">{product.title}</h3>
              <p class="borrowers__card-description">{product.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
