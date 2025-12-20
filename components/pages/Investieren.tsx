import type { Locale } from "../../lib/i18n/index.ts";

interface InvestierenProps {
  locale: Locale;
}

const content = {
  de: {
    title: "Investieren",
    subtitle: "Entfalten Sie Ihr finanzielles Potenzial",
    heroText: "Bei Cashare bieten wir Ihnen massgeschneiderte Möglichkeiten, um in Kredite (Private Debt) investieren zu können.",
    cta: "Jetzt investieren",
    ctaHref: "/registrieren",
    investorTypes: [
      {
        title: "Privatinvestoren",
        desc: "Investieren Sie direkt in Kredite und erzielen Sie attraktive Renditen. Diversifizieren Sie Ihr Portfolio mit Private Debt.",
        href: "/investieren/privatinvestoren",
        cta: "Mehr erfahren",
      },
      {
        title: "Institutionelle Investoren",
        desc: "Professionelle Lösungen für Banken, Pensionskassen und Vermogensverwalter mit massgeschneiderten Anlagestrategien.",
        href: "/investieren/institutionelle",
        cta: "Mehr erfahren",
      },
    ],
    benefits: {
      title: "Ihre Investition, Ihr Weg",
      subtitle: "Ubernehmen Sie die Kontrolle über Ihre finanzielle Zukunft mit flexiblen, renditestarken Investitionsmoglichkeiten.",
      items: [
        { title: "Attraktive Renditen", desc: "Erzielen Sie durchschnittlich 5-8% Rendite pro Jahr auf Ihre Investitionen." },
        { title: "Diversifikation", desc: "Streuen Sie Ihr Risiko über verschiedene Kreditnehmer und Laufzeiten." },
        { title: "Transparenz", desc: "Volle Transparenz über alle Kreditprojekte und deren Performance." },
        { title: "Flexibilitat", desc: "Wahlen Sie selbst, in welche Projekte Sie investieren mochten." },
      ],
    },
    howItWorks: {
      title: "So funktioniert das Investieren",
      steps: [
        { title: "Registrieren", desc: "Erstellen Sie kostenlos ein Konto und verifizieren Sie Ihre Identitat." },
        { title: "Einzahlen", desc: "Uberweisen Sie Ihr Investitionskapital auf Ihr Cashare-Konto." },
        { title: "Investieren", desc: "Wahlen Sie Kreditprojekte aus oder nutzen Sie unseren Auto-Invest." },
        { title: "Rendite erhalten", desc: "Erhalten Sie monatliche Zins- und Tilgungszahlungen." },
      ],
    },
    stats: {
      title: "Cashare in Zahlen",
      items: [
        { value: "5.8%", label: "Durchschnittliche Rendite" },
        { value: "CHF 2.5 Mrd.", label: "Finanziertes Volumen" },
        { value: "4700+", label: "Finanzierte Projekte" },
        { value: "<1%", label: "Ausfallquote" },
      ],
    },
  },
  en: {
    title: "Invest",
    subtitle: "Unlock your financial potential",
    heroText: "At Cashare, we offer you tailored opportunities to invest in loans (Private Debt).",
    cta: "Start investing",
    ctaHref: "/en/register",
    investorTypes: [
      {
        title: "Private Investors",
        desc: "Invest directly in loans and achieve attractive returns. Diversify your portfolio with Private Debt.",
        href: "/en/invest/private-investors",
        cta: "Learn more",
      },
      {
        title: "Institutional Investors",
        desc: "Professional solutions for banks, pension funds and asset managers with tailored investment strategies.",
        href: "/en/invest/institutional",
        cta: "Learn more",
      },
    ],
    benefits: {
      title: "Your Investment, Your Way",
      subtitle: "Take control of your financial future with flexible, high-yield investment opportunities.",
      items: [
        { title: "Attractive Returns", desc: "Achieve average returns of 5-8% per year on your investments." },
        { title: "Diversification", desc: "Spread your risk across different borrowers and maturities." },
        { title: "Transparency", desc: "Full transparency on all loan projects and their performance." },
        { title: "Flexibility", desc: "Choose which projects you want to invest in." },
      ],
    },
    howItWorks: {
      title: "How Investing Works",
      steps: [
        { title: "Register", desc: "Create a free account and verify your identity." },
        { title: "Deposit", desc: "Transfer your investment capital to your Cashare account." },
        { title: "Invest", desc: "Select loan projects or use our Auto-Invest feature." },
        { title: "Earn Returns", desc: "Receive monthly interest and principal payments." },
      ],
    },
    stats: {
      title: "Cashare by the Numbers",
      items: [
        { value: "5.8%", label: "Average Return" },
        { value: "CHF 2.5B", label: "Financed Volume" },
        { value: "4700+", label: "Funded Projects" },
        { value: "<1%", label: "Default Rate" },
      ],
    },
  },
  fr: {
    title: "Investir",
    subtitle: "Liberez votre potentiel financier",
    heroText: "Chez Cashare, nous vous offrons des opportunites sur mesure pour investir dans des credits (Private Debt).",
    cta: "Commencer a investir",
    ctaHref: "/fr/inscription",
    investorTypes: [
      {
        title: "Investisseurs privés",
        desc: "Investissez directement dans des credits et obtenez des rendements attractifs. Diversifiez votre portefeuille avec le Private Debt.",
        href: "/fr/investir/investisseurs-privés",
        cta: "En savoir plus",
      },
      {
        title: "Investisseurs institutionnels",
        desc: "Solutions professionnelles pour banques, caisses de pension et gestionnaires de fortune avec des strategies d'investissement sur mesure.",
        href: "/fr/investir/institutionnels",
        cta: "En savoir plus",
      },
    ],
    benefits: {
      title: "Votre investissement, votre choix",
      subtitle: "Prenez le controle de votre avenir financier avec des opportunites d'investissement flexibles et a haut rendement.",
      items: [
        { title: "Rendements attractifs", desc: "Obtenez des rendements moyens de 5 a 8% par an sur vos investissements." },
        { title: "Diversification", desc: "Repartissez vos risques sur differents emprunteurs et echeances." },
        { title: "Transparence", desc: "Transparence totale sur tous les projets de crédit et leurs performances." },
        { title: "Flexibilite", desc: "Choisissez dans quels projets vous souhaitez investir." },
      ],
    },
    howItWorks: {
      title: "Comment fonctionne l'investissement",
      steps: [
        { title: "S'inscrire", desc: "Creez un compte gratuit et verifiez votre identite." },
        { title: "Deposer", desc: "Transferez votre capital d'investissement sur votre compte Cashare." },
        { title: "Investir", desc: "Selectionnez des projets de crédit ou utilisez notre Auto-Invest." },
        { title: "Recevoir des rendements", desc: "Recevez des paiements mensuels d'interets et de capital." },
      ],
    },
    stats: {
      title: "Cashare en chiffres",
      items: [
        { value: "5.8%", label: "Rendement moyen" },
        { value: "CHF 2.5 Mrd.", label: "Volume finance" },
        { value: "4700+", label: "Projets finances" },
        { value: "<1%", label: "Taux de defaut" },
      ],
    },
  },
};

export function Investieren({ locale }: InvestierenProps) {
  const t = content[locale];

  return (
    <>
      <section class="subpage-hero">
        <div class="subpage-hero__container">
          <h1 class="subpage-hero__title">{t.title}</h1>
          <p class="subpage-hero__subtitle">{t.subtitle}</p>
          <p class="subpage-hero__subtitle" style="margin-top: 16px; font-size: 1.125rem;">
            {t.heroText}
          </p>
          <a href={t.ctaHref} class="subpage-cta__button" style="margin-top: 32px;">
            {t.cta}
          </a>
        </div>
      </section>

      <section class="subpage-section subpage-section--white">
        <div class="subpage-section__container subpage-section__container--wide">
          <div class="two-col">
            {t.investorTypes.map((type, i) => (
              <div key={i} class="two-col__item">
                <div class="stats-grid__icon" style="margin: 0 0 24px 0;">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {i === 0 ? (
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    ) : (
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    )}
                  </svg>
                </div>
                <h3 class="two-col__title">{type.title}</h3>
                <p class="content-block__text">{type.desc}</p>
                <a href={type.href} class="subpage-cta__button" style="margin-top: 24px;">
                  {type.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section class="subpage-section subpage-section--gray">
        <div class="subpage-section__container subpage-section__container--wide">
          <div class="subpage-section__header">
            <h2 class="subpage-section__title">{t.benefits.title}</h2>
            <p class="subpage-section__subtitle">{t.benefits.subtitle}</p>
          </div>
          <div class="values-grid">
            {t.benefits.items.map((benefit, i) => (
              <div key={i} class="values-grid__item">
                <h3 class="values-grid__title">{benefit.title}</h3>
                <p class="values-grid__desc">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section class="subpage-section subpage-section--white">
        <div class="subpage-section__container subpage-section__container--wide">
          <div class="subpage-section__header">
            <h2 class="subpage-section__title">{t.howItWorks.title}</h2>
          </div>
          <div class="benefits-grid">
            {t.howItWorks.steps.map((step, i) => (
              <div key={i} class="benefits-grid__item">
                <div class="benefits-grid__icon">
                  <span style="font-size: 1.5rem; font-weight: 700;">{i + 1}</span>
                </div>
                <h3 class="benefits-grid__title">{step.title}</h3>
                <p class="benefits-grid__desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section class="subpage-section subpage-section--dark">
        <div class="subpage-section__container subpage-section__container--wide">
          <div class="subpage-section__header">
            <h2 class="subpage-section__title">{t.stats.title}</h2>
          </div>
          <div class="stats-grid">
            {t.stats.items.map((stat, i) => (
              <div key={i} class="stats-grid__item">
                <div class="stats-grid__value">{stat.value}</div>
                <div class="stats-grid__label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
