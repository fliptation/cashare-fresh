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
      tagline: "Ihr cleverer Kredit",
      description: "Für private Anschaffungen, Umschuldungen oder unerwartete Ausgaben.",
      href: "/kredit-beantragen/privatkredit",
      cta: "Mehr erfahren",
    },
    kmuKredit: {
      title: "KMU-Kredit",
      tagline: "Die smarte Finanzierung für Unternehmen",
      description: "Flexible Finanzierungslösungen für kleine und mittlere Unternehmen.",
      href: "/kredit-beantragen/kmu-kredit",
      cta: "Mehr erfahren",
    },
    hypothek: {
      title: "Hypothek",
      tagline: "Optimale Immobilienfinanzierung",
      description: "Attraktive Konditionen für Ihre Immobilienfinanzierung.",
      href: "/kredit-beantragen/hypotheken",
      cta: "Mehr erfahren",
    },
    howItWorks: "So funktioniert's",
    steps: [
      {
        title: "Antrag stellen",
        description: "Füllen Sie den Online-Antrag aus und laden Sie Ihre Dokumente hoch.",
      },
      {
        title: "Schnelle Prüfung",
        description: "Wir prüfen Ihren Antrag und listen ihn auf unserer Plattform für Investoren.",
      },
      {
        title: "Auszahlung",
        description: "Nach Vertragsunterzeichnung wird das Geld auf Ihr Konto überwiesen.",
      },
    ],
    benefits: {
      title: "Ihre Vorteile bei Cashare",
      items: [
        {
          title: "Effiziente Prozesse",
          description: "Der Kreditantrag ist online in wenigen Minuten abgeschlossen. Die Kreditprüfung erfolgt schnell und unkompliziert.",
        },
        {
          title: "Attraktive Konditionen",
          description: "Unser direkter Marktplatz verbindet Kreditnehmer mit Investoren – für faire Zinsen ohne Bankmargen.",
        },
        {
          title: "Flexible Laufzeiten",
          description: "Wählen Sie die Laufzeit, die zu Ihnen passt. Vorzeitige Rückzahlung jederzeit möglich.",
        },
        {
          title: "Sichere Prozesse",
          description: "Höchste Datenschutzstandards und sichere Abwicklung aller Transaktionen.",
        },
      ],
    },
    stats: {
      title: "Seit 2008 Ihr Partner",
      subtitle: "Als erste Crowdlending-Plattform der Schweiz haben wir uns das Vertrauen tausender Kunden erarbeitet.",
      items: [
        { value: "60'000+", label: "Kunden" },
        { value: "CHF 2.5 Mrd.", label: "Geprüfte Kreditanträge" },
        { value: "Seit 2008", label: "FinTech-Pionier" },
      ],
    },
  },
  en: {
    title: "Apply for a Loan",
    subtitle: "Flexible and secure loans tailored to you",
    heroText: "Trust the FinTech pioneer. Flexible and secure loans tailored to your needs.",
    privatkredit: {
      title: "Personal Loan",
      tagline: "Your smart credit solution",
      description: "For private purchases, debt consolidation or unexpected expenses.",
      href: "/en/apply-for-credit/personal-loan",
      cta: "Learn More",
    },
    kmuKredit: {
      title: "SME Loan",
      tagline: "Smart financing for businesses",
      description: "Flexible financing solutions for small and medium enterprises.",
      href: "/en/apply-for-credit/sme-loan",
      cta: "Learn More",
    },
    hypothek: {
      title: "Mortgage",
      tagline: "Optimal real estate financing",
      description: "Attractive conditions for your real estate financing.",
      href: "/en/apply-for-credit/mortgage",
      cta: "Learn More",
    },
    howItWorks: "How It Works",
    steps: [
      {
        title: "Submit Application",
        description: "Complete the online application and upload your documents.",
      },
      {
        title: "Quick Review",
        description: "We review your application and list it on our platform for investors.",
      },
      {
        title: "Receive Funds",
        description: "After signing the contract, the money is transferred to your account.",
      },
    ],
    benefits: {
      title: "Your Benefits with Cashare",
      items: [
        {
          title: "Efficient Processes",
          description: "Complete your loan application online in minutes. Fast and straightforward credit review.",
        },
        {
          title: "Attractive Conditions",
          description: "Our direct marketplace connects borrowers with investors – for fair rates without bank margins.",
        },
        {
          title: "Flexible Terms",
          description: "Choose the term that suits you. Early repayment possible at any time.",
        },
        {
          title: "Secure Processes",
          description: "Highest data protection standards and secure processing of all transactions.",
        },
      ],
    },
    stats: {
      title: "Your Partner Since 2008",
      subtitle: "As Switzerland's first crowdlending platform, we have earned the trust of thousands of customers.",
      items: [
        { value: "60,000+", label: "Customers" },
        { value: "CHF 2.5 Bn", label: "Reviewed Credit Applications" },
        { value: "Since 2008", label: "FinTech Pioneer" },
      ],
    },
  },
  fr: {
    title: "Demander un crédit",
    subtitle: "Des crédits flexibles et sécurisés, adaptés à vos besoins",
    heroText: "Faites confiance au pionnier FinTech. Des prêts flexibles et sécurisés, adaptés à vos besoins.",
    privatkredit: {
      title: "Crédit privé",
      tagline: "Votre crédit intelligent",
      description: "Pour des achats privés, le regroupement de dettes ou des dépenses imprévues.",
      href: "/fr/demander-un-credit/credit-prive",
      cta: "En savoir plus",
    },
    kmuKredit: {
      title: "Crédit PME",
      tagline: "Le financement intelligent pour les entreprises",
      description: "Solutions de financement flexibles pour les petites et moyennes entreprises.",
      href: "/fr/demander-un-credit/credit-pme",
      cta: "En savoir plus",
    },
    hypothek: {
      title: "Hypothèque",
      tagline: "Financement immobilier optimal",
      description: "Conditions attractives pour votre financement immobilier.",
      href: "/fr/demander-un-credit/hypotheque",
      cta: "En savoir plus",
    },
    howItWorks: "Comment ça marche",
    steps: [
      {
        title: "Soumettre la demande",
        description: "Remplissez la demande en ligne et téléchargez vos documents.",
      },
      {
        title: "Vérification rapide",
        description: "Nous examinons votre demande et la listons sur notre plateforme pour les investisseurs.",
      },
      {
        title: "Versement",
        description: "Après signature du contrat, l'argent est transféré sur votre compte.",
      },
    ],
    benefits: {
      title: "Vos avantages avec Cashare",
      items: [
        {
          title: "Processus efficaces",
          description: "Complétez votre demande de crédit en ligne en quelques minutes. Vérification rapide et simple.",
        },
        {
          title: "Conditions attractives",
          description: "Notre marché direct connecte emprunteurs et investisseurs – pour des taux équitables sans marges bancaires.",
        },
        {
          title: "Durées flexibles",
          description: "Choisissez la durée qui vous convient. Remboursement anticipé possible à tout moment.",
        },
        {
          title: "Processus sécurisés",
          description: "Normes de protection des données les plus élevées et traitement sécurisé de toutes les transactions.",
        },
      ],
    },
    stats: {
      title: "Votre partenaire depuis 2008",
      subtitle: "En tant que première plateforme de crowdlending en Suisse, nous avons gagné la confiance de milliers de clients.",
      items: [
        { value: "60'000+", label: "Clients" },
        { value: "CHF 2.5 Mrd", label: "Demandes de crédit examinées" },
        { value: "Depuis 2008", label: "Pionnier FinTech" },
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
              <span class="solution-card__tagline">{t.privatkredit.tagline}</span>
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
              <span class="solution-card__tagline">{t.kmuKredit.tagline}</span>
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
              <span class="solution-card__tagline">{t.hypothek.tagline}</span>
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

      {/* Stats Section */}
      <section class="subpage-section subpage-section--gray">
        <div class="subpage-section__container subpage-section__container--wide">
          <div class="subpage-section__header">
            <h2 class="subpage-section__title">{t.stats.title}</h2>
            <p class="subpage-section__subtitle">{t.stats.subtitle}</p>
          </div>
          <div class="stats-grid stats-grid--3">
            {t.stats.items.map((stat, index) => (
              <div key={index} class="stats-grid__item">
                <div class="stats-grid__value">{stat.value}</div>
                <div class="stats-grid__label">{stat.label}</div>
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
