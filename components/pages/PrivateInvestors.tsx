import type { Locale } from "../../lib/i18n/index.ts";
import { Projects } from "../Projects.tsx";
import YieldCalculator from "../../islands/calculator/YieldCalculator.tsx";
import { ButtonArrow } from "../ButtonArrow.tsx";

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
    rating: {
      title: "Unser Rating",
      subtitle:
        "Jeder Kredit wird von A (geringes Risiko, geringe Rendite) bis F (höheres Risiko, höhere Rendite) bewertet. Ab einem Rating von C können Kredite als Investition genutzt werden.",
      riskLabel: "Risikobewertung",
      interestLabel: "Nominalzins",
      returnLabel: "Geschätzte Rendite",
      totalLabel: "Gesamtrendite",
      rejected: "Abgelehnt",
      totalReturn: "6.48%",
      description:
        "Cashare bringt Menschen zusammen: Kreditnehmer, die Geld brauchen, und Anleger, die investieren wollen. Anleger wählen selbst aus, in welche Kreditprojekte sie investieren, und können ihr Geld auf viele Kreditnehmer verteilen. So wird das Risiko breit gestreut. Es gibt keine versteckten Gebühren, dafür attraktive Renditen. Eine sorgfältige Prüfung der Kreditnehmer sorgt für zusätzliche Sicherheit.",
    },
    projects: {
      title: "Aktuelle Projekte",
      subtitle: "Entdecken Sie aktuelle Investitionsmöglichkeiten",
      cta: "Alle Projekte anzeigen",
      ctaHref: "/projekte",
    },
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
    badge: "Private Investors",
    title: "Successfully Invest Money in Loans",
    subtitle: "Invest directly in loans and achieve attractive returns.",
    cta: { label: "Get started", href: "/en/register" },
    rating: {
      title: "Our Rating",
      subtitle:
        "Every loan is rated from A (low risk, low return) to F (higher risk, higher return). Loans with a rating of C or better can be used as investments.",
      riskLabel: "Risk Assessment",
      interestLabel: "Nominal Interest",
      returnLabel: "Estimated Return",
      totalLabel: "Total Return",
      rejected: "Rejected",
      totalReturn: "6.48%",
      description:
        "Cashare brings people together: borrowers who need money and investors who want to invest. Investors choose which loan projects to invest in and can spread their money across many borrowers. This spreads the risk widely. There are no hidden fees, but attractive returns. Careful screening of borrowers provides additional security.",
    },
    projects: {
      title: "Current Projects",
      subtitle: "Discover current investment opportunities",
      cta: "View all projects",
      ctaHref: "/en/projects",
    },
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
    badge: "Investisseurs Privés",
    title: "Investir avec succès dans les crédits",
    subtitle:
      "Investissez directement dans des credits et obtenez des rendements attractifs.",
    cta: { label: "Commencer", href: "/fr/inscription" },
    rating: {
      title: "Notre Rating",
      subtitle:
        "Chaque crédit est noté de A (faible risque, faible rendement) à F (risque plus élevé, rendement plus élevé). Les crédits avec une notation de C ou mieux peuvent être utilisés comme investissements.",
      riskLabel: "Évaluation des risques",
      interestLabel: "Intérêt nominal",
      returnLabel: "Rendement estimé",
      totalLabel: "Rendement total",
      rejected: "Rejeté",
      totalReturn: "6.48%",
      description:
        "Cashare réunit les gens: les emprunteurs qui ont besoin d'argent et les investisseurs qui veulent investir. Les investisseurs choisissent eux-mêmes dans quels projets de crédit investir et peuvent répartir leur argent sur de nombreux emprunteurs. Cela répartit largement le risque. Il n'y a pas de frais cachés, mais des rendements attractifs. Un examen minutieux des emprunteurs offre une sécurité supplémentaire.",
    },
    projects: {
      title: "Projets actuels",
      subtitle: "Découvrez les opportunités d'investissement actuelles",
      cta: "Voir tous les projets",
      ctaHref: "/fr/projets",
    },
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

const benefitIcons = [
  `<svg fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>`,
  `<svg fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" /></svg>`,
  `<svg fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" /></svg>`,
  `<svg fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>`,
];

// Rating data for the table
const ratingData = [
  { grade: "A", color: "#3b82f6", interest: "3.9 – 5.4%", returnRate: "4.65%" },
  { grade: "B", superscript: "+", color: "#22c55e", interest: "4.0 – 5.9%", returnRate: "4.95%" },
  { grade: "B", color: "#22c55e", interest: "4.6 – 7.3%", returnRate: "5.95%" },
  { grade: "C", superscript: "+", color: "#84cc16", interest: "5.6 – 9.7%", returnRate: "7.65%" },
  { grade: "C", color: "#eab308", interest: "7.0 – 11.4%", returnRate: "9.20%" },
  { grade: "D", color: "#f97316", interest: null, returnRate: null },
  { grade: "E", color: "#ef4444", interest: null, returnRate: null },
  { grade: "F", color: "#dc2626", interest: null, returnRate: null },
];

export function PrivateInvestors({ locale }: PrivateInvestorsProps) {
  const t = content[locale];

  return (
    <>
      {/* Hero */}
      <section class="invest-hero">
        <div class="invest-hero__container">
          <div class="invest-hero__content">
            <span class="invest-hero__label">{t.badge}</span>
            <h1 class="invest-hero__title">{t.title}</h1>
            <p class="invest-hero__subtitle">{t.subtitle}</p>
            <div class="invest-hero__actions">
              <a href={t.cta.href} class="btn btn--dark btn--with-arrow">
                {t.cta.label}
                <ButtonArrow />
              </a>
            </div>
          </div>
          <div class="invest-hero__visual">
            <div class="invest-hero__stats-card">
              <div class="invest-hero__stats-title">Ihre Vorteile</div>
              <div class="invest-hero__stats-grid">
                <div class="invest-hero__stat">
                  <div class="invest-hero__stat-value">5-8%</div>
                  <div class="invest-hero__stat-label">Rendite p.a.</div>
                </div>
                <div class="invest-hero__stat">
                  <div class="invest-hero__stat-value">CHF 100</div>
                  <div class="invest-hero__stat-label">Min. Investment</div>
                </div>
                <div class="invest-hero__stat">
                  <div class="invest-hero__stat-value">Monatlich</div>
                  <div class="invest-hero__stat-label">Auszahlung</div>
                </div>
                <div class="invest-hero__stat">
                  <div class="invest-hero__stat-value">&lt;1%</div>
                  <div class="invest-hero__stat-label">Ausfallquote</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section class="invest-benefits">
        <div class="invest-benefits__container">
          <div class="invest-benefits__header">
            <h2 class="invest-benefits__title">{t.benefits.title}</h2>
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

      {/* Rating Section */}
      <section class="rating-section">
        <div class="rating-section__container">
          <div class="rating-section__header">
            <h2 class="rating-section__title">{t.rating.title}</h2>
            <p class="rating-section__subtitle">{t.rating.subtitle}</p>
          </div>

          <div class="rating-table">
            <div class="rating-table__card">
              {/* Table Header Row - Labels */}
              <div class="rating-table__row rating-table__row--header">
                <div class="rating-table__cell rating-table__cell--label">{t.rating.riskLabel}</div>
                {ratingData.map((rating, i) => (
                  <div key={i} class="rating-table__cell">
                    <div class="rating-badge" style={{ backgroundColor: rating.color }}>
                      {rating.grade}
                      {rating.superscript && <sup>{rating.superscript}</sup>}
                    </div>
                  </div>
                ))}
                <div class="rating-table__cell rating-table__cell--total">{t.rating.totalLabel}</div>
              </div>

              {/* Interest Rate Row */}
              <div class="rating-table__row">
                <div class="rating-table__cell rating-table__cell--label">{t.rating.interestLabel}</div>
                {ratingData.map((rating, i) => (
                  <div key={i} class="rating-table__cell">
                    <span class="rating-table__value">
                      {rating.interest || t.rating.rejected}
                    </span>
                  </div>
                ))}
                <div class="rating-table__cell rating-table__cell--total"></div>
              </div>

              {/* Estimated Return Row */}
              <div class="rating-table__row">
                <div class="rating-table__cell rating-table__cell--label">{t.rating.returnLabel}</div>
                {ratingData.map((rating, i) => (
                  <div key={i} class="rating-table__cell">
                    <span class="rating-table__value">
                      {rating.returnRate || "–"}
                    </span>
                  </div>
                ))}
                <div class="rating-table__cell rating-table__cell--total">
                  <span class="rating-table__total-value">{t.rating.totalReturn}</span>
                </div>
              </div>
            </div>
          </div>

          <p class="rating-section__description">{t.rating.description}</p>
        </div>
      </section>

      {/* Current Projects */}
      <Projects locale={locale} />

      {/* Yield Calculator */}
      <section class="yield-calculator-section">
        <div class="yield-calculator-section__container">
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

      {/* Auto-Invest Feature */}
      <section class="invest-stats">
        <div class="invest-stats__container">
          <div class="invest-stats__header">
            <h2 class="invest-stats__title">{t.autoInvest.title}</h2>
            <p style="color: rgba(255,255,255,0.8); max-width: 600px; margin: 16px auto 0; font-size: 1.125rem; line-height: 1.7;">
              {t.autoInvest.text}
            </p>
          </div>
          <div class="invest-stats__grid">
            {t.autoInvest.features.map((feature, i) => (
              <div key={i} class="invest-stat-card">
                <div class="invest-stat-card__value" style="font-size: 1.25rem;">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin: 0 auto 12px; display: block;">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div class="invest-stat-card__label" style="font-size: 1rem; color: rgba(255,255,255,0.9);">
                  {feature}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Risk Notice */}
      <section class="invest-types" style="padding: 60px 40px;">
        <div class="invest-types__container">
          <div class="invest-type-card" style="max-width: 800px; margin: 0 auto; background: linear-gradient(135deg, #fffbeb 0%, #fef3c7 100%);">
            <div style="display: flex; gap: 20px; align-items: flex-start;">
              <div style="flex-shrink: 0; width: 48px; height: 48px; background: #f59e0b; border-radius: 12px; display: flex; align-items: center; justify-content: center; color: white;">
                <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <div>
                <h3 style="font-size: 1.25rem; font-weight: 700; color: var(--color-text); margin-bottom: 8px;">{t.risks.title}</h3>
                <p style="color: var(--color-gray); line-height: 1.7;">{t.risks.text}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section class="invest-benefits">
        <div class="invest-benefits__container">
          <div class="invest-benefits__header">
            <h2 class="invest-benefits__title">{t.faq.title}</h2>
          </div>
          <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px; max-width: 900px; margin: 0 auto;">
            {t.faq.items.map((item, i) => (
              <div key={i} class="invest-benefit" style="text-align: left; padding: 32px;">
                <h3 style="font-size: 1rem; font-weight: 700; color: var(--color-text); margin-bottom: 12px;">{item.q}</h3>
                <p style="font-size: 0.9375rem; color: var(--color-gray); line-height: 1.6;">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section class="invest-stats" style="padding: 80px 40px;">
        <div class="invest-stats__container" style="text-align: center;">
          <h2 class="invest-stats__title" style="margin-bottom: 32px;">Bereit zu investieren?</h2>
          <a href={t.cta.href} class="btn btn--white btn--lg btn--with-arrow">
            {t.cta.label}
            <ButtonArrow />
          </a>
        </div>
      </section>
    </>
  );
}
