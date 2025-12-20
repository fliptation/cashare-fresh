import type { Locale } from "../lib/i18n/index.ts";

interface InvestorsProps {
  locale: Locale;
}

const content = {
  de: {
    label: "Für Anleger",
    title: "Investieren Sie in Private Debt",
    subtitle: "Dank unserer langjährigen Erfahrung seit 2008 ermöglichen wir einfache Anlagelösungen in Kredite in einem sicheren Umfeld",
    cta: "Mehr Informationen",
    ctaHref: "/investieren",
    products: [
      {
        icon: "private",
        title: "Private Anleger",
        description: "Optimieren Sie Ihre Anlagestrategie mit <strong>geprüften Kreditprojekten</strong>. Als privater Anleger profitieren Sie von attraktiven Renditen, einer breiten Diversifikation und der Möglichkeit, bedeutungsvolle Projekte zu unterstützen.",
        href: "/investieren/privat",
      },
      {
        icon: "institutional",
        title: "Institutionelle Anleger",
        description: "Optimieren Sie Ihr Portfolio mit unseren <strong>massgeschneiderten Investitionslösungen</strong> für institutionelle Anleger. Profitieren Sie von einem <strong>starken Risikomanagement</strong> und einer professionellen Abwicklung in jeder Phase Ihrer Investition.",
        href: "/investieren/institutionell",
      },
    ],
  },
  en: {
    label: "For Investors",
    title: "Invest in Private Debt",
    subtitle: "Thanks to our extensive experience since 2008, we enable simple investment solutions in loans in a secure environment",
    cta: "More Information",
    ctaHref: "/en/invest",
    products: [
      {
        icon: "private",
        title: "Private Investors",
        description: "Optimize your investment strategy with <strong>vetted loan projects</strong>. As a private investor, you benefit from attractive returns, broad diversification and the opportunity to support meaningful projects.",
        href: "/en/invest/private",
      },
      {
        icon: "institutional",
        title: "Institutional Investors",
        description: "Optimize your portfolio with our <strong>tailored investment solutions</strong> for institutional investors. Benefit from <strong>strong risk management</strong> and professional handling at every stage of your investment.",
        href: "/en/invest/institutional",
      },
    ],
  },
  fr: {
    label: "Pour les investisseurs",
    title: "Investissez dans la dette privée",
    subtitle: "Grâce à notre longue expérience depuis 2008, nous proposons des solutions d'investissement simples dans les crédits dans un environnement sécurisé",
    cta: "Plus d'informations",
    ctaHref: "/fr/investir",
    products: [
      {
        icon: "private",
        title: "Investisseurs privés",
        description: "Optimisez votre stratégie d'investissement avec des <strong>projets de crédit vérifiés</strong>. En tant qu'investisseur privé, vous bénéficiez de rendements attractifs, d'une large diversification et de la possibilité de soutenir des projets significatifs.",
        href: "/fr/investir/prive",
      },
      {
        icon: "institutional",
        title: "Investisseurs institutionnels",
        description: "Optimisez votre portefeuille avec nos <strong>solutions d'investissement sur mesure</strong> pour les investisseurs institutionnels. Bénéficiez d'une <strong>gestion des risques solide</strong> et d'un traitement professionnel à chaque étape de votre investissement.",
        href: "/fr/investir/institutionnel",
      },
    ],
  },
};

const icons = {
  private: (
    <svg viewBox="0 0 80 80" fill="none" class="investors__icon">
      <ellipse cx="40" cy="55" rx="28" ry="12" fill="#d1fae5" />
      <ellipse cx="32" cy="40" rx="16" ry="28" fill="#fde047" transform="rotate(-15 32 40)" />
      <ellipse cx="48" cy="42" rx="14" ry="24" fill="#22c55e" transform="rotate(15 48 42)" />
    </svg>
  ),
  institutional: (
    <svg viewBox="0 0 80 80" fill="none" class="investors__icon">
      <rect x="20" y="30" width="40" height="45" rx="4" fill="#22c55e" />
      <rect x="20" y="30" width="40" height="12" fill="#fbbf24" />
      <rect x="28" y="48" width="10" height="10" fill="#dcfce7" />
      <rect x="42" y="48" width="10" height="10" fill="#dcfce7" />
      <rect x="28" y="62" width="10" height="10" fill="#dcfce7" />
      <rect x="42" y="62" width="10" height="10" fill="#dcfce7" />
      <rect x="35" y="20" width="10" height="14" fill="#d1d5db" />
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
          <a href={t.ctaHref} class="investors__cta btn btn--primary">
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
