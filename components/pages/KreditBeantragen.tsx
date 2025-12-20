import type { Locale } from "../../lib/i18n/index.ts";

interface KreditBeanttragenProps {
  locale: Locale;
}

const content = {
  de: {
    title: "Kredit beantragen",
    subtitle: "Flexible und sichere Kredite, die auf Sie zugeschnitten sind",
    heroText: "Vertrauen Sie auf den FinTech-Pionier. Flexible und sichere Darlehen, abgestimmt auf Ihre Bedürfnisse.",
    privatkredit: {
      title: "Privatkredit",
      description: "Für private Anschaffungen, Umschuldungen oder unerwartete Ausgaben.",
      href: "/kredit-beantragen/privatkredit",
      cta: "Mehr erfahren",
    },
    kmuKredit: {
      title: "KMU-Kredit",
      description: "Flexible Finanzierungslösungen für kleine und mittlere Unternehmen.",
      href: "/kredit-beantragen/kmu-kredit",
      cta: "Mehr erfahren",
    },
    hypothek: {
      title: "Hypothek",
      description: "Attraktive Konditionen für Ihre Immobilienfinanzierung.",
      href: "/kredit-beantragen/hypotheken",
      cta: "Mehr erfahren",
    },
    howItWorks: "So funktioniert Cashare",
    steps: [
      {
        title: "Antrag stellen",
        description: "Füllen Sie den Online-Antrag in wenigen Minuten aus.",
      },
      {
        title: "Angebot erhalten",
        description: "Erhalten Sie innerhalb von 24 Stunden ein unverbindliches Angebot.",
      },
      {
        title: "Vertrag unterschreiben",
        description: "Unterschreiben Sie den Vertrag digital und bequem von zu Hause.",
      },
      {
        title: "Geld erhalten",
        description: "Das Geld wird direkt auf Ihr Konto überwiesen.",
      },
    ],
    benefits: {
      title: "Ihre Vorteile bei Cashare",
      items: [
        {
          title: "Effiziente Prozesse",
          description: "Der Kreditantrag ist online in wenigen Minuten abgeschlossen.",
        },
        {
          title: "Faire Zinsen",
          description: "Profitieren Sie von wettbewerbsfähigen Zinssätzen.",
        },
        {
          title: "Schnelle Auszahlung",
          description: "Nach Vertragsabschluss erhalten Sie Ihr Geld innerhalb weniger Tage.",
        },
        {
          title: "Persönliche Beratung",
          description: "Unser Team steht Ihnen bei Fragen jederzeit zur Verfügung.",
        },
      ],
    },
  },
  en: {
    title: "Apply for a Loan",
    subtitle: "Flexible and secure loans tailored to you",
    heroText: "Trust the FinTech pioneer. Flexible and secure loans tailored to your needs.",
    privatkredit: {
      title: "Personal Loan",
      description: "For private purchases, debt consolidation or unexpected expenses.",
      href: "/en/apply-for-credit/personal-loan",
      cta: "Learn More",
    },
    kmuKredit: {
      title: "SME Loan",
      description: "Flexible financing solutions for small and medium enterprises.",
      href: "/en/apply-for-credit/sme-loan",
      cta: "Learn More",
    },
    hypothek: {
      title: "Mortgage",
      description: "Attractive conditions for your real estate financing.",
      href: "/en/apply-for-credit/mortgage",
      cta: "Learn More",
    },
    howItWorks: "How Cashare Works",
    steps: [
      {
        title: "Submit Application",
        description: "Complete the online application in just a few minutes.",
      },
      {
        title: "Receive Offer",
        description: "Receive a non-binding offer within 24 hours.",
      },
      {
        title: "Sign Contract",
        description: "Sign the contract digitally from the comfort of your home.",
      },
      {
        title: "Receive Funds",
        description: "The money is transferred directly to your account.",
      },
    ],
    benefits: {
      title: "Your Benefits with Cashare",
      items: [
        {
          title: "Efficient Processes",
          description: "Complete your loan application online in minutes.",
        },
        {
          title: "Fair Interest Rates",
          description: "Benefit from competitive interest rates.",
        },
        {
          title: "Fast Payout",
          description: "Receive your money within days after signing.",
        },
        {
          title: "Personal Support",
          description: "Our team is available to answer your questions anytime.",
        },
      ],
    },
  },
  fr: {
    title: "Demander un credit",
    subtitle: "Des credits flexibles et securises, adaptes a vos besoins",
    heroText: "Faites confiance au pionnier FinTech. Des prets flexibles et securises, adaptes a vos besoins.",
    privatkredit: {
      title: "Credit prive",
      description: "Pour des achats prives, le regroupement de dettes ou des depenses imprevues.",
      href: "/fr/demander-un-credit/credit-prive",
      cta: "En savoir plus",
    },
    kmuKredit: {
      title: "Credit PME",
      description: "Solutions de financement flexibles pour les petites et moyennes entreprises.",
      href: "/fr/demander-un-credit/credit-pme",
      cta: "En savoir plus",
    },
    hypothek: {
      title: "Hypotheque",
      description: "Conditions attractives pour votre financement immobilier.",
      href: "/fr/demander-un-credit/hypotheque",
      cta: "En savoir plus",
    },
    howItWorks: "Comment fonctionne Cashare",
    steps: [
      {
        title: "Soumettre la demande",
        description: "Remplissez la demande en ligne en quelques minutes.",
      },
      {
        title: "Recevoir une offre",
        description: "Recevez une offre sans engagement dans les 24 heures.",
      },
      {
        title: "Signer le contrat",
        description: "Signez le contrat numeriquement depuis chez vous.",
      },
      {
        title: "Recevoir les fonds",
        description: "L'argent est transfere directement sur votre compte.",
      },
    ],
    benefits: {
      title: "Vos avantages avec Cashare",
      items: [
        {
          title: "Processus efficaces",
          description: "Completez votre demande de credit en ligne en quelques minutes.",
        },
        {
          title: "Taux d'interet equitables",
          description: "Beneficiez de taux d'interet competitifs.",
        },
        {
          title: "Versement rapide",
          description: "Recevez votre argent en quelques jours apres signature.",
        },
        {
          title: "Accompagnement personnel",
          description: "Notre equipe est disponible pour repondre a vos questions.",
        },
      ],
    },
  },
};

export function KreditBeantragen({ locale }: KreditBeanttragenProps) {
  const t = content[locale];

  return (
    <>
      {/* Hero Section */}
      <section class="subpage-hero">
        <div class="subpage-hero__container">
          <h1 class="subpage-hero__title">{t.title}</h1>
          <p class="subpage-hero__subtitle">
            {t.subtitle}
            <br />
            {t.heroText}
          </p>
        </div>
      </section>

      {/* Loan Types */}
      <section class="subpage-section subpage-section--white">
        <div class="subpage-section__container subpage-section__container--wide">
          <div class="solution-grid">
            {/* Privatkredit */}
            <a href={t.privatkredit.href} class="solution-card">
              <div class="solution-card__icon">
                <svg
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  width="32"
                  height="32"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <h3 class="solution-card__title">{t.privatkredit.title}</h3>
              <p class="solution-card__desc">{t.privatkredit.description}</p>
              <span class="solution-card__link">
                {t.privatkredit.cta} →
              </span>
            </a>

            {/* KMU-Kredit */}
            <a href={t.kmuKredit.href} class="solution-card">
              <div class="solution-card__icon">
                <svg
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  width="32"
                  height="32"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
              <h3 class="solution-card__title">{t.kmuKredit.title}</h3>
              <p class="solution-card__desc">{t.kmuKredit.description}</p>
              <span class="solution-card__link">
                {t.kmuKredit.cta} →
              </span>
            </a>

            {/* Hypothek */}
            <a href={t.hypothek.href} class="solution-card">
              <div class="solution-card__icon">
                <svg
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  width="32"
                  height="32"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
              </div>
              <h3 class="solution-card__title">{t.hypothek.title}</h3>
              <p class="solution-card__desc">{t.hypothek.description}</p>
              <span class="solution-card__link">
                {t.hypothek.cta} →
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section class="subpage-section subpage-section--gray">
        <div class="subpage-section__container subpage-section__container--wide">
          <div class="subpage-section__header">
            <h2 class="subpage-section__title">{t.howItWorks}</h2>
          </div>
          <div class="stats-grid">
            {t.steps.map((step, index) => (
              <div key={index} class="stats-grid__item">
                <div class="stats-grid__icon">
                  <span style="font-size: 1.25rem; font-weight: 700;">{index + 1}</span>
                </div>
                <div class="stats-grid__value" style="font-size: 1.25rem; color: var(--color-text);">
                  {step.title}
                </div>
                <div class="stats-grid__label">{step.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section class="subpage-section subpage-section--white">
        <div class="subpage-section__container subpage-section__container--wide">
          <div class="subpage-section__header">
            <h2 class="subpage-section__title">{t.benefits.title}</h2>
          </div>
          <div class="benefits-grid">
            {t.benefits.items.map((benefit, index) => (
              <div key={index} class="benefits-grid__item">
                <div class="benefits-grid__icon">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    width="28"
                    height="28"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 class="benefits-grid__title">{benefit.title}</h3>
                <p class="benefits-grid__desc">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section class="subpage-cta">
        <div class="subpage-cta__container">
          <h2 class="subpage-cta__title">
            {locale === "de"
              ? "Bereit für Ihren Kredit?"
              : locale === "en"
              ? "Ready for your loan?"
              : "Prêt pour votre crédit?"}
          </h2>
          <div class="subpage-cta__buttons">
            <a href="/loslegen" class="subpage-cta__btn subpage-cta__btn--primary">
              {locale === "de"
                ? "Jetzt starten"
                : locale === "en"
                ? "Get Started"
                : "Commencer"}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
