import type { Locale } from "../../lib/i18n/index.ts";

interface KreditBeanttragenProps {
  locale: Locale;
}

const content = {
  de: {
    title: "Der einfache Weg mit dem Cashare-Kredit",
    subtitle: "Flexible und sichere Kredite, die auf Sie zugeschnitten sind",
    heroText:
      "Vertrauen Sie auf den FinTech-Pionier. Flexible und sichere Darlehen, abgestimmt auf Ihre Bedürfnisse.",
    privatkredit: {
      title: "Privatkredit",
      tagline: "Ihr cleverer Kredit",
      href: "/kredit-beantragen/privatkredit",
      cta: "Mehr erfahren",
    },
    kmuKredit: {
      title: "KMU-Kredit",
      tagline: "Die smarte Finanzierung für Unternehmen",
      href: "/kredit-beantragen/kmu-kredit",
      cta: "Mehr erfahren",
    },
    hypothek: {
      title: "Hypothek",
      tagline: "Optimale Immobilienfinanzierung",
      href: "/kredit-beantragen/hypotheken",
      cta: "Mehr erfahren",
    },
    howItWorks: "So funktioniert's",
    steps: [
      {
        title: "Kreditantrag ausfüllen",
        description:
          "Den Kreditantrag ausfüllen und online die benötigten Dokumente einreichen. Einfacher geht's nicht.",
      },
      {
        title: "Schnelle Überprüfung",
        description:
          "Wir prüfen Ihren Antrag schnell und sicher. Nach Aufschaltung Ihres Kredites auf unserer Plattform haben Cashare Anleger die Möglichkeit, Ihr Darlehen zu finanzieren.",
      },
      {
        title: "Kreditauszahlung",
        description:
          "Nach Unterschrift aller Verträge wird der Darlehensbetrag auf Ihr Konto ausbezahlt.",
      },
    ],
    benefits: {
      title: "Ihre Vorteile bei Cashare",
      items: [
        {
          title: "Effiziente Prozesse",
          description:
            "Der Kreditantrag ist online schnell ausgefüllt. Die Kreditprüfung erfolgt in kürzester Zeit und Sie erhalten Ihre persönliche Offerte.",
        },
        {
          title: "Attraktive Konditionen",
          description:
            "Wir verbinden Kreditnehmer und Anleger direkt über unseren Kreditmarktplatz. So profitieren alle von attraktiven Zinsen und transparenten Gebühren, ganz ohne Bank.",
        },
        {
          title: "Flexible Laufzeiten",
          description:
            "Sie bestimmen die gewünschte Laufzeit nach Ihren Bedürfnissen. Eine vorzeitige Rückzahlung ist jederzeit problemlos möglich.",
        },
        {
          title: "Sichere Prozesse",
          description:
            "Volle Kostenkontrolle und strenge Sicherheitsmassnahmen schützen Sie und Ihre Daten.",
        },
      ],
    },
    stats: {
      title: "Seit 2008 Ihr Partner",
      subtitle:
        "Cashare wurde 2008 als erste Crowdlending-Plattform der Schweiz gegründet. Mit über 60'000 Kunden und CHF 2,5 Milliarden geprüfter Kreditanträge haben wir uns das Vertrauen tausender Kunden erarbeitet.",
      items: [
        { value: "60'000+", label: "Kunden" },
        { value: "CHF 2.5 Mrd.", label: "Geprüfte Kreditanträge" },
        { value: "Seit 2008", label: "FinTech-Pionier" },
      ],
    },
    requirements: {
      title: "Voraussetzungen",
      privatkredit: {
        title: "Privatkredit",
        items: [
          "Volljährig (mindestens 18 Jahre alt)",
          "CH/LI-Staatsbürger oder gültige Aufenthaltsbewilligung",
          "Schweizer Bankkonto",
          "Feste Anstellung oder regelmässiges, nachweisbares Einkommen",
          "Keine offenen Betreibungsverfahren und/oder Verlustscheine",
        ],
      },
      kmuKredit: {
        title: "KMU-Kredit",
        items: [
          "Im Handelsregister eingetragene Schweizer oder Liechtensteiner Firma",
          "Existiert seit mindestens 2 Jahren",
          "Jährlicher Mindestumsatz von CHF 100'000",
          "Positiver Cash Flow oder kurzfristig in Aussicht",
        ],
      },
      hypothek: {
        title: "Immobilienkredit",
        items: [
          "Maximale Beleihungsquote von 80% des Marktwerts",
          "Finanzielle Belastung max. 40% des Bruttoeinkommens",
          "Mindesthypothekenbetrag von CHF 250'000",
        ],
      },
    },
  },
  en: {
    title: "Apply for a Loan",
    subtitle: "Flexible and secure loans tailored to you",
    heroText:
      "Trust the FinTech pioneer. Flexible and secure loans tailored to your needs.",
    privatkredit: {
      title: "Personal Loan",
      tagline: "Your smart credit solution",
      href: "/en/apply-for-credit/personal-loan",
      cta: "Learn More",
    },
    kmuKredit: {
      title: "SME Loan",
      tagline: "Smart financing for businesses",
      href: "/en/apply-for-credit/sme-loan",
      cta: "Learn More",
    },
    hypothek: {
      title: "Mortgage",
      tagline: "Optimal real estate financing",
      href: "/en/apply-for-credit/mortgage",
      cta: "Learn More",
    },
    howItWorks: "How It Works",
    steps: [
      {
        title: "Submit Application",
        description:
          "Complete the online application and upload your documents.",
      },
      {
        title: "Quick Review",
        description:
          "We review your application and list it on our platform for investors.",
      },
      {
        title: "Receive Funds",
        description:
          "After signing the contract, the money is transferred to your account.",
      },
    ],
    benefits: {
      title: "Your Benefits with Cashare",
      items: [
        {
          title: "Efficient Processes",
          description:
            "Complete your loan application online in minutes. Fast and straightforward credit review.",
        },
        {
          title: "Attractive Conditions",
          description:
            "Our direct marketplace connects borrowers with investors – for fair rates without bank margins.",
        },
        {
          title: "Flexible Terms",
          description:
            "Choose the term that suits you. Early repayment possible at any time.",
        },
        {
          title: "Secure Processes",
          description:
            "Highest data protection standards and secure processing of all transactions.",
        },
      ],
    },
    stats: {
      title: "Your Partner Since 2008",
      subtitle:
        "As Switzerland's first crowdlending platform, we have earned the trust of thousands of customers.",
      items: [
        { value: "60,000+", label: "Customers" },
        { value: "CHF 2.5 Bn", label: "Reviewed Credit Applications" },
        { value: "Since 2008", label: "FinTech Pioneer" },
      ],
    },
    requirements: {
      title: "Requirements",
      privatkredit: {
        title: "Personal Loan",
        items: [
          "Minimum age 18 years",
          "CH/LI citizenship or valid residence permit",
          "Swiss bank account",
          "Stable employment or regular income",
          "No active debt collection or loss records",
        ],
      },
      kmuKredit: {
        title: "SME Loan",
        items: [
          "Company registered in Switzerland/Liechtenstein",
          "Operating for at least 2 years",
          "Minimum annual revenue CHF 100,000",
          "Positive cash flow (current or projected)",
        ],
      },
      hypothek: {
        title: "Mortgage",
        items: [
          "Maximum 80% loan-to-value ratio",
          "Financial burden max. 40% of gross income",
          "Minimum amount CHF 250,000",
        ],
      },
    },
  },
  fr: {
    title: "Demander un crédit",
    subtitle: "Des crédits flexibles et sécurisés, adaptés à vos besoins",
    heroText:
      "Faites confiance au pionnier FinTech. Des prêts flexibles et sécurisés, adaptés à vos besoins.",
    privatkredit: {
      title: "Crédit privé",
      tagline: "Votre crédit intelligent",
      href: "/fr/demander-un-credit/credit-prive",
      cta: "En savoir plus",
    },
    kmuKredit: {
      title: "Crédit PME",
      tagline: "Le financement intelligent pour les entreprises",
      href: "/fr/demander-un-credit/credit-pme",
      cta: "En savoir plus",
    },
    hypothek: {
      title: "Hypothèque",
      tagline: "Financement immobilier optimal",
      href: "/fr/demander-un-credit/hypotheque",
      cta: "En savoir plus",
    },
    howItWorks: "Comment ça marche",
    steps: [
      {
        title: "Soumettre la demande",
        description:
          "Remplissez la demande en ligne et téléchargez vos documents.",
      },
      {
        title: "Vérification rapide",
        description:
          "Nous examinons votre demande et la listons sur notre plateforme pour les investisseurs.",
      },
      {
        title: "Versement",
        description:
          "Après signature du contrat, l'argent est transféré sur votre compte.",
      },
    ],
    benefits: {
      title: "Vos avantages avec Cashare",
      items: [
        {
          title: "Processus efficaces",
          description:
            "Complétez votre demande de crédit en ligne en quelques minutes. Vérification rapide et simple.",
        },
        {
          title: "Conditions attractives",
          description:
            "Notre marché direct connecte emprunteurs et investisseurs – pour des taux équitables sans marges bancaires.",
        },
        {
          title: "Durées flexibles",
          description:
            "Choisissez la durée qui vous convient. Remboursement anticipé possible à tout moment.",
        },
        {
          title: "Processus sécurisés",
          description:
            "Normes de protection des données les plus élevées et traitement sécurisé de toutes les transactions.",
        },
      ],
    },
    stats: {
      title: "Votre partenaire depuis 2008",
      subtitle:
        "En tant que première plateforme de crowdlending en Suisse, nous avons gagné la confiance de milliers de clients.",
      items: [
        { value: "60'000+", label: "Clients" },
        { value: "CHF 2.5 Mrd", label: "Demandes de crédit examinées" },
        { value: "Depuis 2008", label: "Pionnier FinTech" },
      ],
    },
    requirements: {
      title: "Conditions",
      privatkredit: {
        title: "Crédit privé",
        items: [
          "Âge minimum 18 ans",
          "Nationalité CH/LI ou permis de séjour valide",
          "Compte bancaire suisse",
          "Emploi stable ou revenu régulier",
          "Pas de poursuites actives ou d'actes de défaut de biens",
        ],
      },
      kmuKredit: {
        title: "Crédit PME",
        items: [
          "Entreprise enregistrée en Suisse/Liechtenstein",
          "En activité depuis au moins 2 ans",
          "Chiffre d'affaires minimum CHF 100'000 par an",
          "Cash-flow positif (actuel ou projeté)",
        ],
      },
      hypothek: {
        title: "Hypothèque",
        items: [
          "Taux d'avance maximum 80%",
          "Charge financière max. 40% du revenu brut",
          "Montant minimum CHF 250'000",
        ],
      },
    },
  },
};

export function KreditBeantragen({ locale }: KreditBeanttragenProps) {
  const t = content[locale];

  return (
    <>
      {/* Hero Section */}
      <section class="product-hero">
        <div class="container">
          <div class="product-hero__content">
            <span class="product-hero__badge">
              {locale === "de"
                ? "Kredit beantragen"
                : locale === "en"
                ? "Apply for Credit"
                : "Demander un crédit"}
            </span>
            <h1 class="product-hero__title">{t.title}</h1>
            <p class="product-hero__text">{t.heroText}</p>
          </div>
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
              <span class="solution-card__tagline">
                {t.privatkredit.tagline}
              </span>
              <h3 class="solution-card__title">{t.privatkredit.title}</h3>
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
              <span class="solution-card__link">
                {t.hypothek.cta} →
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section class="subpage-section subpage-section--gray">
        <div class="subpage-section__container subpage-section__container--wide">
          <div class="subpage-section__header">
            <h2 class="subpage-section__title">{t.requirements.title}</h2>
          </div>
          <div class="requirements-grid">
            <div class="requirements-card">
              <h3 class="requirements-card__title">
                {t.requirements.privatkredit.title}
              </h3>
              <ul class="requirements-card__list">
                {t.requirements.privatkredit.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div class="requirements-card">
              <h3 class="requirements-card__title">
                {t.requirements.kmuKredit.title}
              </h3>
              <ul class="requirements-card__list">
                {t.requirements.kmuKredit.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div class="requirements-card">
              <h3 class="requirements-card__title">
                {t.requirements.hypothek.title}
              </h3>
              <ul class="requirements-card__list">
                {t.requirements.hypothek.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section class="subpage-section subpage-section--white">
        <div class="subpage-section__container subpage-section__container--wide">
          <div class="subpage-section__header">
            <h2 class="subpage-section__title">{t.howItWorks}</h2>
          </div>
          <div class="stats-grid">
            {t.steps.map((step, index) => (
              <div key={index} class="stats-grid__item">
                <div class="stats-grid__icon">
                  <span style="font-size: 1.25rem; font-weight: 800;">
                    {index + 1}
                  </span>
                </div>
                <div
                  class="stats-grid__value"
                  style="font-size: 1.25rem; color: var(--color-text);"
                >
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
            <a
              href="/privatdarlehen-beantragen"
              class="subpage-cta__btn subpage-cta__btn--primary"
            >
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
