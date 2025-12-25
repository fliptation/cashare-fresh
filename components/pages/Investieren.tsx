import type { Locale } from "../../lib/i18n/index.ts";
import { Projects } from "../Projects.tsx";
import YieldCalculator from "../../islands/calculator/YieldCalculator.tsx";
import CountingStats from "../../islands/CountingStats.tsx";
import { ButtonArrow } from "../ButtonArrow.tsx";

interface InvestierenProps {
  locale: Locale;
}

const content = {
  de: {
    label: "Für Anleger",
    title: "Clever in Private Debt investieren",
    subtitle: "Entfalten Sie Ihr finanzielles Potenzial",
    heroText:
      "Bei Cashare bieten wir Ihnen massgeschneiderte Möglichkeiten, um in Kredite (Private Debt) investieren zu können.",
    cta: "Jetzt investieren",
    ctaHref: "/werde-anleger",
    investorTypes: [
      {
        title: "Privatinvestoren",
        desc:
          "Investieren Sie direkt in Kredite und erzielen Sie attraktive Renditen. Diversifizieren Sie Ihr Portfolio mit Private Debt.",
        href: "/investieren/privatinvestoren",
        cta: "Mehr erfahren",
      },
      {
        title: "Institutionelle Investoren",
        desc:
          "Professionelle Lösungen für Banken, Pensionskassen und Vermogensverwalter mit massgeschneiderten Anlagestrategien.",
        href: "/investieren/institutionelle",
        cta: "Mehr erfahren",
      },
    ],
    benefits: {
      title: "Ihre Investition, Ihr Weg",
      subtitle:
        "Ubernehmen Sie die Kontrolle über Ihre finanzielle Zukunft mit flexiblen, renditestarken Investitionsmoglichkeiten.",
      items: [
        {
          title: "Attraktive Renditen",
          desc:
            "Erzielen Sie durchschnittlich 5-8% Rendite pro Jahr auf Ihre Investitionen.",
        },
        {
          title: "Diversifikation",
          desc:
            "Streuen Sie Ihr Risiko über verschiedene Kreditnehmer und Laufzeiten.",
        },
        {
          title: "Transparenz",
          desc:
            "Volle Transparenz über alle Kreditprojekte und deren Performance.",
        },
        {
          title: "Flexibilitat",
          desc:
            "Wahlen Sie selbst, in welche Projekte Sie investieren mochten.",
        },
      ],
    },
    opportunities: {
      label: "Unsere Investitionsmöglichkeiten",
      title: "Sicher und breit diversifiziert zu attraktiven Renditen",
      subtitle: "Egal ob Sie eine Privatperson oder ein institutioneller Anleger sind.",
      items: [
        {
          title: "Private Anleger",
          desc: "Optimieren Sie Ihre Investitionen mit unseren einfachen Anlagemöglichkeiten in die Anlageklasse von Krediten. Als privater Anleger profitieren Sie von attraktiven Renditen, einer breiten Diversifikation und der Möglichkeit, bedeutungsvolle Projekte zu unterstützen – alles über eine sichere und transparente Plattform.",
        },
        {
          title: "Institutionelle Anleger",
          desc: "Mit massgeschneiderten Finanzprodukten können institutionelle Anleger unkompliziert und sicher in Private Debt investieren. Profitieren Sie von skalierbaren Investitionsmöglichkeiten, einem starken Risikomanagement und attraktiven Renditen – abgestimmt auf die finanziellen Ziele Ihrer Organisation.",
        },
        {
          title: "Plattform",
          desc: "Erhalten Sie Zugang zu unserer sicheren Investment-Plattform und entdecken Sie eine Vielzahl von Möglichkeiten, Ihr Vermögen effizient und mit minimalem Aufwand in die alternative Anlageklasse \"Kredite\" zu investieren.",
        },
      ],
    },
    howItWorks: {
      title: "So funktioniert das Investieren",
      steps: [
        {
          title: "Registrieren",
          desc:
            "Erstellen Sie kostenlos ein Konto und verifizieren Sie Ihre Identitat.",
        },
        {
          title: "Einzahlen",
          desc: "Uberweisen Sie Ihr Investitionskapital auf Ihr Cashare-Konto.",
        },
        {
          title: "Investieren",
          desc:
            "Wahlen Sie Kreditprojekte aus oder nutzen Sie unseren Auto-Invest.",
        },
        {
          title: "Rendite erhalten",
          desc: "Erhalten Sie monatliche Zins- und Tilgungszahlungen.",
        },
      ],
    },
    stats: {
      title: "Cashare in Zahlen",
      items: [
        { value: "5.8%", label: "Ø Rendite" },
        { value: "2.5 Mrd.", label: "Volumen (CHF)" },
        { value: "4700+", label: "Projekte" },
        { value: "<1%", label: "Ausfallquote" },
      ],
    },
  },
  en: {
    label: "For Investors",
    title: "Invest",
    subtitle: "Unlock your financial potential",
    heroText:
      "At Cashare, we offer you tailored opportunities to invest in loans (Private Debt).",
    cta: "Start investing",
    ctaHref: "/en/register",
    investorTypes: [
      {
        title: "Private Investors",
        desc:
          "Invest directly in loans and achieve attractive returns. Diversify your portfolio with Private Debt.",
        href: "/en/invest/private-investors",
        cta: "Learn more",
      },
      {
        title: "Institutional Investors",
        desc:
          "Professional solutions for banks, pension funds and asset managers with tailored investment strategies.",
        href: "/en/invest/institutional",
        cta: "Learn more",
      },
    ],
    benefits: {
      title: "Your Investment, Your Way",
      subtitle:
        "Take control of your financial future with flexible, high-yield investment opportunities.",
      items: [
        {
          title: "Attractive Returns",
          desc: "Achieve average returns of 5-8% per year on your investments.",
        },
        {
          title: "Diversification",
          desc: "Spread your risk across different borrowers and maturities.",
        },
        {
          title: "Transparency",
          desc: "Full transparency on all loan projects and their performance.",
        },
        {
          title: "Flexibility",
          desc: "Choose which projects you want to invest in.",
        },
      ],
    },
    howItWorks: {
      title: "How Investing Works",
      steps: [
        {
          title: "Register",
          desc: "Create a free account and verify your identity.",
        },
        {
          title: "Deposit",
          desc: "Transfer your investment capital to your Cashare account.",
        },
        {
          title: "Invest",
          desc: "Select loan projects or use our Auto-Invest feature.",
        },
        {
          title: "Earn Returns",
          desc: "Receive monthly interest and principal payments.",
        },
      ],
    },
    stats: {
      title: "Cashare by the Numbers",
      items: [
        { value: "5.8%", label: "Ø Return" },
        { value: "2.5B", label: "Volume (CHF)" },
        { value: "4700+", label: "Projects" },
        { value: "<1%", label: "Default Rate" },
      ],
    },
  },
  fr: {
    label: "Pour les investisseurs",
    title: "Investir",
    subtitle: "Liberez votre potentiel financier",
    heroText:
      "Chez Cashare, nous vous offrons des opportunites sur mesure pour investir dans des credits (Private Debt).",
    cta: "Commencer a investir",
    ctaHref: "/fr/inscription",
    investorTypes: [
      {
        title: "Investisseurs privés",
        desc:
          "Investissez directement dans des credits et obtenez des rendements attractifs. Diversifiez votre portefeuille avec le Private Debt.",
        href: "/fr/investir/investisseurs-privés",
        cta: "En savoir plus",
      },
      {
        title: "Investisseurs institutionnels",
        desc:
          "Solutions professionnelles pour banques, caisses de pension et gestionnaires de fortune avec des strategies d'investissement sur mesure.",
        href: "/fr/investir/institutionnels",
        cta: "En savoir plus",
      },
    ],
    benefits: {
      title: "Votre investissement, votre choix",
      subtitle:
        "Prenez le controle de votre avenir financier avec des opportunites d'investissement flexibles et a haut rendement.",
      items: [
        {
          title: "Rendements attractifs",
          desc:
            "Obtenez des rendements moyens de 5 a 8% par an sur vos investissements.",
        },
        {
          title: "Diversification",
          desc:
            "Repartissez vos risques sur differents emprunteurs et echeances.",
        },
        {
          title: "Transparence",
          desc:
            "Transparence totale sur tous les projets de crédit et leurs performances.",
        },
        {
          title: "Flexibilite",
          desc: "Choisissez dans quels projets vous souhaitez investir.",
        },
      ],
    },
    howItWorks: {
      title: "Comment fonctionne l'investissement",
      steps: [
        {
          title: "S'inscrire",
          desc: "Creez un compte gratuit et verifiez votre identite.",
        },
        {
          title: "Deposer",
          desc:
            "Transferez votre capital d'investissement sur votre compte Cashare.",
        },
        {
          title: "Investir",
          desc:
            "Selectionnez des projets de crédit ou utilisez notre Auto-Invest.",
        },
        {
          title: "Recevoir des rendements",
          desc: "Recevez des paiements mensuels d'interets et de capital.",
        },
      ],
    },
    stats: {
      title: "Cashare en chiffres",
      items: [
        { value: "5.8%", label: "Ø Rendement" },
        { value: "2.5 Mrd.", label: "Volume (CHF)" },
        { value: "4700+", label: "Projets" },
        { value: "<1%", label: "Taux défaut" },
      ],
    },
  },
};

const benefitIcons = [
  // Rendite / Returns
  `<svg fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
    <path stroke-linecap="round" stroke-linejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
  </svg>`,
  // Diversifikation
  `<svg fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
    <path stroke-linecap="round" stroke-linejoin="round" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
  </svg>`,
  // Transparenz
  `<svg fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
    <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    <path stroke-linecap="round" stroke-linejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
  </svg>`,
  // Flexibilität
  `<svg fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
  </svg>`,
];

export function Investieren({ locale }: InvestierenProps) {
  const t = content[locale];

  return (
    <>
      {/* Hero Section */}
      <section class="invest-hero">
        <div class="invest-hero__container">
          <div class="invest-hero__content">
            <span class="invest-hero__label">{t.label}</span>
            <h1 class="invest-hero__title">{t.title}</h1>
            <p class="invest-hero__subtitle">{t.heroText}</p>
            <div class="invest-hero__actions">
              <a href={t.ctaHref} class="btn btn--dark btn--with-arrow">
                {t.cta}
                <ButtonArrow />
              </a>
            </div>
          </div>
          <div class="invest-hero__visual">
            <div class="invest-hero__stats-card">
              <div class="invest-hero__stats-title">{t.stats.title}</div>
              <div class="invest-hero__stats-grid">
                {t.stats.items.map((stat, i) => (
                  <div key={i} class="invest-hero__stat">
                    <div class="invest-hero__stat-value">{stat.value}</div>
                    <div class="invest-hero__stat-label">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investor Types */}
      <section class="invest-types">
        <div class="invest-types__container">
          <div class="invest-types__grid">
            {t.investorTypes.map((type, i) => (
              <a key={i} href={type.href} class="invest-type-card">
                <div class={`invest-type-card__icon invest-type-card__icon--${i === 0 ? 'private' : 'institutional'}`}>
                  {i === 0 ? (
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  ) : (
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  )}
                </div>
                <h3 class="invest-type-card__title">{type.title}</h3>
                <p class="invest-type-card__desc">{type.desc}</p>
                <span class="invest-type-card__link">
                  {type.cta}
                  <svg viewBox="0 0 20 20" fill="none">
                    <path d="M4 10h12m0 0l-4-4m4 4l-4 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Aktuelle Projekte */}
      <Projects locale={locale} />

      {/* Benefits */}
      <section class="invest-benefits">
        <div class="invest-benefits__container">
          <div class="invest-benefits__header">
            <h2 class="invest-benefits__title">{t.benefits.title}</h2>
            <p class="invest-benefits__subtitle">{t.benefits.subtitle}</p>
          </div>
          <div class="invest-benefits__grid">
            {t.benefits.items.map((benefit, i) => (
              <div key={i} class="invest-benefit">
                <div class="invest-benefit__icon" dangerouslySetInnerHTML={{ __html: benefitIcons[i] }} />
                <h3 class="invest-benefit__title">{benefit.title}</h3>
                <p class="invest-benefit__desc">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Renditerechner */}
      <section class="section section--gradient">
        <div class="container">
          <YieldCalculator lang={locale} />
        </div>
      </section>

      {/* How It Works */}
      <section class="invest-steps">
        <div class="invest-steps__container">
          <div class="invest-steps__header">
            <h2 class="invest-steps__title">{t.howItWorks.title}</h2>
          </div>
          <div class="invest-steps__grid">
            {t.howItWorks.steps.map((step, i) => (
              <div key={i} class="invest-step">
                <div class="invest-step__number">{i + 1}</div>
                <h3 class="invest-step__title">{step.title}</h3>
                <p class="invest-step__desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats with Counting Animation */}
      <CountingStats title={t.stats.title} items={t.stats.items} />
    </>
  );
}
