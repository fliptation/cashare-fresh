import { t, type Locale } from "../lib/i18n/index.ts";
import { ButtonArrow } from "./ButtonArrow.tsx";

interface BorrowersProps {
  locale: Locale;
}

const content = {
  de: {
    label: "Für Kreditnehmer",
    title: "Die clevere Lösung!",
    subtitle:
      "Schnelle, einfache und sichere Kredite für Privatpersonen und kleine Unternehmen",
    cta: "Mehr Informationen",
    ctaHref: "/kredit-beantragen",
    products: [
      {
        icon: "person",
        title: "Privatkredit",
        description:
          "Mit unserem flexiblen Privatkredit erreichen Sie Ihre Ziele, zu fairen Konditionen und mit unkomplizierter Online-Abwicklung.",
        href: "/kredit-beantragen/privatkredit",
      },
      {
        icon: "building",
        title: "KMU-Kredit",
        description:
          "Frisches Kapital für Ihr KMU, flexibel, fair und genau auf Ihre Pläne zugeschnitten.",
        href: "/kredit-beantragen/kmu-kredit",
      },
      {
        icon: "home",
        title: "Immobilienkredit",
        description:
          "Ob Eigenheim oder Renditeobjekt, mit unseren Hypotheken und Nachrangdarlehen profitieren Sie von Top-Zinsen, flexibler Rückzahlung und schneller Abwicklung.",
        href: "/kredit-beantragen/hypotheken",
      },
    ],
  },
  en: {
    label: "For Borrowers",
    title: "The Smart Solution!",
    subtitle:
      "Fast, simple and secure loans for individuals and small businesses",
    cta: "More Information",
    ctaHref: "/en/apply-for-credit",
    products: [
      {
        icon: "person",
        title: "Personal Loan",
        description:
          "Achieve your goals with our flexible personal loans, at fair conditions and fully transparent.",
        href: "/en/apply-for-credit/personal-loan",
      },
      {
        icon: "building",
        title: "SME Loan",
        description:
          "Fresh capital for your SME, flexible, fair and tailored exactly to your plans.",
        href: "/en/apply-for-credit/sme-loan",
      },
      {
        icon: "home",
        title: "Mortgage",
        description:
          "Whether home or investment property, finance smartly with our mortgages and real estate loans.",
        href: "/en/apply-for-credit/mortgage",
      },
    ],
  },
  fr: {
    label: "Pour les emprunteurs",
    title: "La solution intelligente!",
    subtitle:
      "Des crédits rapides, simples et sécurisés pour les particuliers et les petites entreprises",
    cta: "Plus d'informations",
    ctaHref: "/fr/demander-un-credit",
    products: [
      {
        icon: "person",
        title: "Crédit privé",
        description:
          "Atteignez vos objectifs avec notre crédit privé flexible, à des conditions équitables et transparentes.",
        href: "/fr/demander-un-credit/credit-prive",
      },
      {
        icon: "building",
        title: "Crédit PME",
        description:
          "Du capital frais pour votre PME, flexible, équitable et adapté exactement à vos projets.",
        href: "/fr/demander-un-credit/credit-pme",
      },
      {
        icon: "home",
        title: "Crédit immobilier",
        description:
          "Que ce soit pour votre maison ou un investissement, financez intelligemment avec nos hypothèques.",
        href: "/fr/demander-un-credit/hypotheque",
      },
    ],
  },
};

const icons = {
  person: (
    <svg viewBox="0 0 64 64" fill="none" class="borrowers__icon">
      <defs>
        <linearGradient id="person-bg" x1="0" y1="0" x2="64" y2="64">
          <stop stop-color="#e0e7ff" />
          <stop offset="1" stop-color="#c7d2fe" />
        </linearGradient>
        <linearGradient id="person-fill" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#818cf8" />
          <stop offset="100%" stop-color="#6366f1" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="16" fill="url(#person-bg)" />
      {/* Head */}
      <circle cx="32" cy="22" r="9" fill="url(#person-fill)" />
      {/* Body arc */}
      <path
        d="M18 52c0-7.732 6.268-14 14-14s14 6.268 14 14"
        fill="url(#person-fill)"
      />
      {/* Subtle highlight */}
      <circle cx="29" cy="19" r="2.5" fill="#a5b4fc" opacity="0.5" />
    </svg>
  ),
  building: (
    <svg viewBox="0 0 64 64" fill="none" class="borrowers__icon">
      <defs>
        <linearGradient id="building-bg" x1="0" y1="0" x2="64" y2="64">
          <stop stop-color="#fce7f3" />
          <stop offset="1" stop-color="#fbcfe8" />
        </linearGradient>
        <linearGradient id="building-fill" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#f472b6" />
          <stop offset="100%" stop-color="#ec4899" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="16" fill="url(#building-bg)" />
      {/* Roof */}
      <path d="M32 8L12 22h40L32 8z" fill="url(#building-fill)" />
      {/* Building body */}
      <rect
        x="14"
        y="22"
        width="36"
        height="34"
        rx="2"
        fill="url(#building-fill)"
      />
      {/* Windows - 3x2 grid, precisely aligned */}
      <rect x="19" y="28" width="7" height="6" rx="1" fill="#fce7f3" />
      <rect x="28.5" y="28" width="7" height="6" rx="1" fill="#fce7f3" />
      <rect x="38" y="28" width="7" height="6" rx="1" fill="#fce7f3" />
      <rect x="19" y="38" width="7" height="6" rx="1" fill="#fce7f3" />
      <rect x="28.5" y="38" width="7" height="6" rx="1" fill="#fce7f3" />
      <rect x="38" y="38" width="7" height="6" rx="1" fill="#fce7f3" />
      {/* Door */}
      <rect x="27" y="48" width="10" height="8" rx="1" fill="#fce7f3" />
    </svg>
  ),
  home: (
    <svg viewBox="0 0 64 64" fill="none" class="borrowers__icon">
      <defs>
        <linearGradient id="home-bg" x1="0" y1="0" x2="64" y2="64">
          <stop stop-color="#cffafe" />
          <stop offset="1" stop-color="#a5f3fc" />
        </linearGradient>
        <linearGradient id="home-fill" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#22d3ee" />
          <stop offset="100%" stop-color="#0891b2" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="16" fill="url(#home-bg)" />
      {/* House shape - clean geometry */}
      <path
        d="M32 10L8 30h6v22h36V30h6L32 10z"
        fill="url(#home-fill)"
      />
      {/* Door */}
      <rect x="26" y="36" width="12" height="16" rx="1.5" fill="#ecfeff" />
      {/* Door handle */}
      <circle cx="35" cy="44" r="1.5" fill="#0891b2" />
      {/* Window */}
      <rect x="38" y="32" width="8" height="6" rx="1" fill="#ecfeff" />
      {/* Chimney */}
      <rect x="40" y="14" width="6" height="12" rx="1" fill="url(#home-fill)" />
    </svg>
  ),
};

export function Borrowers({ locale }: BorrowersProps) {
  const c = content[locale];
  const learnMore = t(locale, "common", "learnMore");

  return (
    <section class="borrowers">
      <div class="borrowers__background" />
      <div class="borrowers__container">
        <div class="borrowers__header">
          <span class="borrowers__label">{c.label}</span>
          <h2 class="borrowers__title">{c.title}</h2>
          <p class="borrowers__subtitle">{c.subtitle}</p>
          <a href={c.ctaHref} class="btn btn--primary btn--with-arrow">
            {c.cta}
            <ButtonArrow />
          </a>
        </div>

        <div class="borrowers__products">
          {c.products.map((product) => (
            <a href={product.href} class="borrowers__card" key={product.title}>
              {icons[product.icon as keyof typeof icons]}
              <h3 class="borrowers__card-title">{product.title}</h3>
              <p class="borrowers__card-description">{product.description}</p>
              <span class="borrowers__card-link">
                {learnMore}
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M6 3L11 8L6 13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
