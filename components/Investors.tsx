import type { Locale } from "../lib/i18n/index.ts";

interface InvestorsProps {
  locale: Locale;
}

const content = {
  de: {
    label: "Für Anleger",
    title: "Investieren Sie in Private Debt",
    subtitle:
      "Dank unserer langjährigen Erfahrung seit 2008 ermöglichen wir einfache Anlagelösungen in Kredite in einem sicheren Umfeld",
    cta: "Mehr Informationen",
    ctaHref: "/investieren",
    products: [
      {
        icon: "private",
        title: "Private Anleger",
        description:
          "Optimieren Sie Ihre Anlagestrategie mit <strong>geprüften Kreditprojekten</strong>. Als privater Anleger profitieren Sie von attraktiven Renditen, einer breiten Diversifikation und der Möglichkeit, bedeutungsvolle Projekte zu unterstützen.",
        href: "/investieren/privat",
      },
      {
        icon: "institutional",
        title: "Institutionelle Anleger",
        description:
          "Optimieren Sie Ihr Portfolio mit unseren <strong>massgeschneiderten Investitionslösungen</strong> für institutionelle Anleger. Profitieren Sie von einem <strong>starken Risikomanagement</strong> und einer professionellen Abwicklung in jeder Phase Ihrer Investition.",
        href: "/investieren/institutionell",
      },
    ],
  },
  en: {
    label: "For Investors",
    title: "Invest in Private Debt",
    subtitle:
      "Thanks to our extensive experience since 2008, we enable simple investment solutions in loans in a secure environment",
    cta: "More Information",
    ctaHref: "/en/invest",
    products: [
      {
        icon: "private",
        title: "Private Investors",
        description:
          "Optimize your investment strategy with <strong>vetted loan projects</strong>. As a private investor, you benefit from attractive returns, broad diversification and the opportunity to support meaningful projects.",
        href: "/en/invest/private",
      },
      {
        icon: "institutional",
        title: "Institutional Investors",
        description:
          "Optimize your portfolio with our <strong>tailored investment solutions</strong> for institutional investors. Benefit from <strong>strong risk management</strong> and professional handling at every stage of your investment.",
        href: "/en/invest/institutional",
      },
    ],
  },
  fr: {
    label: "Pour les investisseurs",
    title: "Investissez dans la dette privée",
    subtitle:
      "Grâce à notre longue expérience depuis 2008, nous proposons des solutions d'investissement simples dans les crédits dans un environnement sécurisé",
    cta: "Plus d'informations",
    ctaHref: "/fr/investir",
    products: [
      {
        icon: "private",
        title: "Investisseurs privés",
        description:
          "Optimisez votre stratégie d'investissement avec des <strong>projets de crédit vérifiés</strong>. En tant qu'investisseur privé, vous bénéficiez de rendements attractifs, d'une large diversification et de la possibilité de soutenir des projets significatifs.",
        href: "/fr/investir/prive",
      },
      {
        icon: "institutional",
        title: "Investisseurs institutionnels",
        description:
          "Optimisez votre portefeuille avec nos <strong>solutions d'investissement sur mesure</strong> pour les investisseurs institutionnels. Bénéficiez d'une <strong>gestion des risques solide</strong> et d'un traitement professionnel à chaque étape de votre investissement.",
        href: "/fr/investir/institutionnel",
      },
    ],
  },
};

const icons = {
  private: (
    <svg viewBox="0 0 64 64" fill="none" class="investors__icon">
      <defs>
        <linearGradient id="priv-yellow" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#fef08a" />
          <stop offset="100%" stop-color="#fde047" />
        </linearGradient>
        <linearGradient id="priv-green" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#4ade80" />
          <stop offset="100%" stop-color="#22c55e" />
        </linearGradient>
      </defs>
      {/* Refined overlapping leaf shapes */}
      <ellipse
        cx="24"
        cy="34"
        rx="11"
        ry="20"
        fill="url(#priv-yellow)"
        transform="rotate(-12 24 34)"
      />
      <ellipse
        cx="38"
        cy="34"
        rx="11"
        ry="20"
        fill="url(#priv-green)"
        transform="rotate(12 38 34)"
      />
      {/* Subtle vein details */}
      <path
        d="M24 18 L24 50"
        stroke="#fbbf24"
        stroke-width="1.5"
        stroke-linecap="round"
        opacity="0.3"
        transform="rotate(-12 24 34)"
      />
      <path
        d="M38 18 L38 50"
        stroke="#16a34a"
        stroke-width="1.5"
        stroke-linecap="round"
        opacity="0.25"
        transform="rotate(12 38 34)"
      />
    </svg>
  ),
  institutional: (
    <svg viewBox="0 0 64 64" fill="none" class="investors__icon">
      <defs>
        <linearGradient id="inst-green" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#4ade80" />
          <stop offset="100%" stop-color="#22c55e" />
        </linearGradient>
        <linearGradient id="inst-yellow" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#fde047" />
          <stop offset="100%" stop-color="#fbbf24" />
        </linearGradient>
      </defs>
      {/* Clean calendar/building icon */}
      <rect
        x="12"
        y="18"
        width="40"
        height="40"
        rx="4"
        fill="url(#inst-green)"
      />
      {/* Header bar */}
      <rect
        x="12"
        y="18"
        width="40"
        height="12"
        rx="4"
        fill="url(#inst-yellow)"
      />
      <rect x="12" y="26" width="40" height="4" fill="url(#inst-yellow)" />
      {/* Calendar hanger */}
      <rect x="24" y="10" width="4" height="12" rx="2" fill="#9ca3af" />
      <rect x="36" y="10" width="4" height="12" rx="2" fill="#9ca3af" />
      {/* Grid cells - 2x2 */}
      <rect x="18" y="36" width="10" height="8" rx="1.5" fill="#dcfce7" />
      <rect x="36" y="36" width="10" height="8" rx="1.5" fill="#dcfce7" />
      <rect x="18" y="48" width="10" height="6" rx="1.5" fill="#dcfce7" />
      <rect x="36" y="48" width="10" height="6" rx="1.5" fill="#dcfce7" />
    </svg>
  ),
};

export function Investors({ locale }: InvestorsProps) {
  const t = content[locale];

  return (
    <section class="investors">
      <div class="investors__background" />
      <div class="investors__container">
        <div class="investors__header">
          <span class="investors__label">{t.label}</span>
          <h2 class="investors__title">{t.title}</h2>
          <p class="investors__subtitle">{t.subtitle}</p>
          <a href={t.ctaHref} class="btn btn--dark">
            {t.cta}
          </a>
        </div>

        <div class="investors__products">
          {t.products.map((product) => (
            <a href={product.href} class="investors__card" key={product.title}>
              {icons[product.icon as keyof typeof icons]}
              <h3 class="investors__card-title">{product.title}</h3>
              <p
                class="investors__card-description"
                dangerouslySetInnerHTML={{ __html: product.description }}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
