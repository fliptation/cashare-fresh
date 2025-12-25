import type { Locale } from "../../lib/i18n/index.ts";

interface PrivateInvestorsProps {
  locale: Locale;
}

const content = {
  de: {
    backLink: { label: "Zurück zur Übersicht", href: "/investieren" },
    badge: "Privatanleger",
    title: "Erfolgreich Geld in Kredite investieren",
    subtitle:
      "Lassen Sie Ihr Geld für Sie arbeiten. Der beste Weg, um ein passives Einkommen aufzubauen.",
    cta: { label: "Jetzt investieren", href: "/werde-anleger/" },
    benefits: {
      title: "Vorteile für Privatinvestoren",
      items: [
        {
          title: "Attraktive Renditen",
          desc:
            "Durchschnittlich 5-8% Rendite pro Jahr auf Ihre Investitionen in Kredite.",
        },
        {
          title: "Bereits ab CHF 100",
          desc:
            "Starten Sie mit kleinen Betragen und bauen Sie Ihr Portfolio schrittweise auf.",
        },
        {
          title: "Diversifikation",
          desc:
            "Streuen Sie Ihr Risiko über verschiedene Kreditnehmer, Laufzeiten und Kreditarten.",
        },
        {
          title: "Monatliche Ertrage",
          desc:
            "Erhalten Sie regelmassige Zins- und Tilgungszahlungen direkt auf Ihr Konto.",
        },
      ],
    },
    howItWorks: {
      title: "So funktioniert's",
      steps: [
        {
          title: "Registrieren",
          desc:
            "Erstellen Sie kostenlos ein Konto und verifizieren Sie Ihre Identitat online.",
        },
        {
          title: "Einzahlen",
          desc:
            "Uberweisen Sie Ihr Investitionskapital auf Ihr personliches Cashare-Konto.",
        },
        {
          title: "Projekte wahlen",
          desc:
            "Wahlen Sie manuell Kreditprojekte oder nutzen Sie unseren Auto-Invest.",
        },
        {
          title: "Rendite erhalten",
          desc:
            "Erhalten Sie monatliche Zahlungen und verfolgen Sie Ihre Performance.",
        },
      ],
    },
    autoInvest: {
      title: "Auto-Invest",
      text:
        "Lassen Sie Ihr Geld automatisch für Sie arbeiten. Mit Auto-Invest investieren Sie nach Ihren Kriterien in geprüfte Kreditprojekte - ohne manuellen Aufwand.",
      features: [
        "Individuelle Risikopraferenzen",
        "Automatische Diversifikation",
        "Zeitsparend und effizient",
        "Jederzeit anpassbar",
      ],
    },
    risks: {
      title: "Risiken verstehen",
      text:
        "Wie bei jeder Investition bestehen Risiken. Kreditnehmer können ausfallen, was zu Kapitalverlusten fuhren kann. Wir minimieren dieses Risiko durch sorgfaltige Bonitatsprufung und empfehlen eine breite Diversifikation.",
    },
    faq: {
      title: "Haufige Fragen",
      items: [
        {
          q: "Wie hoch ist die Mindestinvestition?",
          a: "Sie können bereits ab CHF 100 in einzelne Kreditprojekte investieren.",
        },
        {
          q: "Wie werden die Zinsen ausgezahlt?",
          a: "Die Zinsen werden monatlich zusammen mit den Tilgungsraten auf Ihr Cashare-Konto gutgeschrieben.",
        },
        {
          q: "Kann ich mein Geld vorzeitig abheben?",
          a: "Ja, Sie können Ihr nicht investiertes Guthaben jederzeit abheben. Laufende Investitionen können über den Sekundarmarkt verkauft werden.",
        },
        {
          q: "Wie werden die Kredite geprüft?",
          a: "Jeder Kreditantrag durchlauft eine umfassende Bonitatsprufung mit Scoring und manueller Prufung.",
        },
      ],
    },
  },
  en: {
    backLink: { label: "Back to overview", href: "/en/invest" },
    title: "Private Investors",
    subtitle: "Invest directly in loans and achieve attractive returns.",
    cta: { label: "Get started", href: "/en/register" },
    benefits: {
      title: "Benefits for Private Investors",
      items: [
        {
          title: "Attractive Returns",
          desc: "Average 5-8% annual returns on your loan investments.",
        },
        {
          title: "Start from CHF 100",
          desc: "Start with small amounts and build your portfolio gradually.",
        },
        {
          title: "Diversification",
          desc:
            "Spread your risk across different borrowers, terms, and loan types.",
        },
        {
          title: "Monthly Income",
          desc:
            "Receive regular interest and principal payments directly to your account.",
        },
      ],
    },
    howItWorks: {
      title: "How It Works",
      steps: [
        {
          title: "Register",
          desc: "Create a free account and verify your identity online.",
        },
        {
          title: "Deposit",
          desc:
            "Transfer your investment capital to your personal Cashare account.",
        },
        {
          title: "Choose Projects",
          desc: "Manually select loan projects or use our Auto-Invest feature.",
        },
        {
          title: "Earn Returns",
          desc: "Receive monthly payments and track your performance.",
        },
      ],
    },
    autoInvest: {
      title: "Auto-Invest",
      text:
        "Let your money work for you automatically. With Auto-Invest, you invest in vetted loan projects according to your criteria - without manual effort.",
      features: [
        "Individual risk preferences",
        "Automatic diversification",
        "Time-saving and efficient",
        "Adjustable anytime",
      ],
    },
    risks: {
      title: "Understanding Risks",
      text:
        "As with any investment, there are risks. Borrowers may default, which can lead to capital losses. We minimize this risk through careful crédit checks and recommend broad diversification.",
    },
    faq: {
      title: "Frequently Asked Questions",
      items: [
        {
          q: "What is the minimum investment?",
          a: "You can invest in individual loan projects starting from CHF 100.",
        },
        {
          q: "How are interest payments made?",
          a: "Interest is credited monthly to your Cashare account along with principal repayments.",
        },
        {
          q: "Can I withdraw my money early?",
          a: "Yes, you can withdraw uninvested funds at any time. Ongoing investments can be sold on the secondary market.",
        },
        {
          q: "How are loans vetted?",
          a: "Every loan application undergoes comprehensive crédit assessment with scoring and manual review.",
        },
      ],
    },
  },
  fr: {
    backLink: { label: "Retour a l'apercu", href: "/fr/investir" },
    title: "Investisseurs Privés",
    subtitle:
      "Investissez directement dans des credits et obtenez des rendements attractifs.",
    cta: { label: "Commencer", href: "/fr/inscription" },
    benefits: {
      title: "Avantages pour les investisseurs privés",
      items: [
        {
          title: "Rendements attractifs",
          desc:
            "Rendements moyens de 5 a 8% par an sur vos investissements en credits.",
        },
        {
          title: "Des CHF 100",
          desc:
            "Commencez avec de petits montants et construisez votre portefeuille progressivement.",
        },
        {
          title: "Diversification",
          desc:
            "Repartissez vos risques sur differents emprunteurs, durees et types de credits.",
        },
        {
          title: "Revenus mensuels",
          desc:
            "Recevez des paiements reguliers d'interets et de capital directement sur votre compte.",
        },
      ],
    },
    howItWorks: {
      title: "Comment ca marche",
      steps: [
        {
          title: "S'inscrire",
          desc: "Creez un compte gratuit et verifiez votre identite en ligne.",
        },
        {
          title: "Deposer",
          desc:
            "Transferez votre capital d'investissement sur votre compte Cashare personnel.",
        },
        {
          title: "Choisir des projets",
          desc:
            "Selectionnez manuellement des projets de crédit ou utilisez notre Auto-Invest.",
        },
        {
          title: "Recevoir des rendements",
          desc: "Recevez des paiements mensuels et suivez votre performance.",
        },
      ],
    },
    autoInvest: {
      title: "Auto-Invest",
      text:
        "Laissez votre argent travailler automatiquement pour vous. Avec Auto-Invest, vous investissez dans des projets de crédit verifies selon vos criteres - sans effort manuel.",
      features: [
        "Preferences de risque individuelles",
        "Diversification automatique",
        "Gain de temps et efficacite",
        "Ajustable a tout moment",
      ],
    },
    risks: {
      title: "Comprendre les risques",
      text:
        "Comme pour tout investissement, il existe des risques. Les emprunteurs peuvent faire defaut, ce qui peut entrainer des pertes en capital. Nous minimisons ce risque par des verifications de crédit rigoureuses et recommandons une large diversification.",
    },
    faq: {
      title: "Questions frequentes",
      items: [
        {
          q: "Quel est l'investissement minimum?",
          a: "Vous pouvez investir dans des projets de crédit individuels a partir de CHF 100.",
        },
        {
          q: "Comment les interets sont-ils payes?",
          a: "Les interets sont credites mensuellement sur votre compte Cashare avec les remboursements de capital.",
        },
        {
          q: "Puis-je retirer mon argent a l'avance?",
          a: "Oui, vous pouvez retirer les fonds non investis a tout moment. Les investissements en cours peuvent etre vendus sur le marche secondaire.",
        },
        {
          q: "Comment les credits sont-ils verifies?",
          a: "Chaque demande de crédit fait l'objet d'une evaluation complete avec scoring et examen manuel.",
        },
      ],
    },
  },
};

export function PrivateInvestors({ locale }: PrivateInvestorsProps) {
  const t = content[locale];

  return (
    <>
      <section class="subpage-hero subpage-hero--investing">
        <div class="subpage-hero__container">
          <span class="subpage-hero__label">{t.badge}</span>
          <h1 class="subpage-hero__title">{t.title}</h1>
          <p class="subpage-hero__subtitle">{t.subtitle}</p>
          <a
            href={t.cta.href}
            class="btn btn--dark"
            style="margin-top: 32px;"
          >
            {t.cta.label}
          </a>
        </div>
      </section>

      <section class="subpage-section subpage-section--white">
        <div class="subpage-section__container subpage-section__container--wide">
          <div class="subpage-section__header">
            <h2 class="subpage-section__title">{t.benefits.title}</h2>
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

      <section class="subpage-section subpage-section--gray">
        <div class="subpage-section__container subpage-section__container--wide">
          <div class="subpage-section__header">
            <h2 class="subpage-section__title">{t.howItWorks.title}</h2>
          </div>
          <div class="benefits-grid">
            {t.howItWorks.steps.map((step, i) => (
              <div key={i} class="benefits-grid__item">
                <div class="benefits-grid__icon">
                  <span style="font-size: 1.5rem; font-weight: 800;">
                    {i + 1}
                  </span>
                </div>
                <h3 class="benefits-grid__title">{step.title}</h3>
                <p class="benefits-grid__desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section class="subpage-section subpage-section--primary">
        <div class="subpage-section__container subpage-section__container--wide">
          <div class="two-col" style="align-items: center;">
            <div class="two-col__left">
              <h2
                class="content-block__title"
                style="color: white; font-size: 2rem;"
              >
                {t.autoInvest.title}
              </h2>
              <p
                class="content-block__text"
                style="color: rgba(255,255,255,0.9);"
              >
                {t.autoInvest.text}
              </p>
              <div class="check-list" style="margin-top: 24px;">
                {t.autoInvest.features.map((feature, i) => (
                  <div key={i} class="check-list__item">
                    <svg
                      class="check-list__icon"
                      style="color: white;"
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
                    <span
                      class="check-list__text"
                      style="color: rgba(255,255,255,0.9);"
                    >
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div
              class="two-col__right"
              style="display: flex; justify-content: center;"
            >
              <div class="featured-stat" style="padding: 40px;">
                <div class="featured-stat__value" style="font-size: 3rem;">
                  Auto-Invest
                </div>
                <p class="featured-stat__desc">
                  Smart. Automatisch. Effizient.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="subpage-section subpage-section--white">
        <div class="subpage-section__container">
          <div class="info-box">
            <svg
              class="info-box__icon"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
            <div class="info-box__content">
              <h3 class="info-box__title">{t.risks.title}</h3>
              <p class="info-box__text">{t.risks.text}</p>
            </div>
          </div>
        </div>
      </section>

      <section class="subpage-section subpage-section--gray">
        <div class="subpage-section__container">
          <div class="subpage-section__header">
            <h2 class="subpage-section__title">{t.faq.title}</h2>
          </div>
          <div class="faq-list">
            {t.faq.items.map((item, i) => (
              <div key={i} class="faq-list__item">
                <h3 class="faq-list__question">{item.q}</h3>
                <p class="faq-list__answer">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section class="subpage-cta">
        <div class="subpage-cta__container">
          <h2 class="subpage-cta__title">{t.cta.label}</h2>
          <a href={t.cta.href} class="subpage-cta__button">
            {t.cta.label}
          </a>
        </div>
      </section>
    </>
  );
}
