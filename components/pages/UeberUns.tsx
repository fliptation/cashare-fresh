import type { Locale } from "../../lib/i18n/index.ts";

interface UeberUnsProps {
  locale: Locale;
}

const content = {
  de: {
    badge: "Seit 2008",
    title: "Der Schweizer Pionier im Crowdlending",
    subtitle:
      "Wir verbinden Kreditnehmer und Anleger auf unserer innovativen Plattform und demokratisieren den Zugang zu fairen Finanzierungen.",
    stats: [
      { value: "CHF 2.5 Mrd.", label: "Finanziertes Volumen" },
      { value: "36'000+", label: "Registrierte Nutzer" },
      { value: "2'400+", label: "Finanzierte Projekte" },
      { value: "16+", label: "Jahre Erfahrung" },
    ],
    mission: {
      label: "Unsere Mission",
      title: "Faire Finanzierung für alle",
      text:
        "Wir glauben, dass jeder Zugang zu fairen Krediten verdient. Unsere Plattform ermoglicht es Privatpersonen und KMUs, gunstige Kredite zu erhalten, wahrend Anleger attraktive Renditen erzielen. Durch innovative Technologie und transparente Prozesse schaffen wir Vertrauen zwischen allen Beteiligten.",
    },
    history: {
      title: "Unsere Geschichte",
      subtitle:
        "Von der ersten Schweizer Crowdlending-Plattform zum führenden FinTech-Unternehmen.",
      items: [
        {
          year: "2008",
          event:
            "Gründung von Cashare als erste Crowdlending-Plattform der Schweiz",
        },
        { year: "2010", event: "Erste 100 erfolgreich finanzierte Projekte" },
        { year: "2015", event: "Erweiterung des Angebots auf KMU-Kredite" },
        {
          year: "2018",
          event:
            "10-jahriges Jubilaum mit über CHF 100 Mio. finanziertem Volumen",
        },
        {
          year: "2020",
          event:
            "Launch der neuen Plattform mit verbesserter Benutzerfreundlichkeit",
        },
        {
          year: "2024",
          event: "Uber CHF 2.5 Mrd. finanziertes Gesamtvolumen erreicht",
        },
      ],
    },
    values: {
      title: "Unsere Werte",
      items: [
        {
          title: "Transparenz",
          description:
            "Offene Kommunikation und klare Konditionen für alle Beteiligten.",
          icon: "eye",
        },
        {
          title: "Innovation",
          description:
            "Kontinuierliche Weiterentwicklung unserer Technologie und Prozesse.",
          icon: "lightbulb",
        },
        {
          title: "Vertrauen",
          description:
            "Langfristige Beziehungen basierend auf Zuverlassigkeit und Integritat.",
          icon: "shield",
        },
        {
          title: "Nachhaltigkeit",
          description:
            "Verantwortungsvoller Umgang mit Ressourcen und gesellschaftliche Verantwortung.",
          icon: "leaf",
        },
      ],
    },
    team: {
      title: "Unser Team",
      text:
        "Ein erfahrenes Team aus Finanz-, Technologie- und Kundenservice-Experten arbeitet taglich daran, die beste Erfahrung für unsere Nutzer zu schaffen. Mit Leidenschaft und Expertise entwickeln wir innovative Lösungen für die Finanzwelt von morgen.",
    },
    regulation: {
      title: "Regulierung & Sicherheit",
      text:
        "Cashare ist FINMA-reguliert und unterliegt den strengen Schweizer Finanzmarktgesetzen. Ihre Daten und Investitionen sind bei uns sicher.",
      badges: ["FINMA-reguliert", "SRO Polyreg Mitglied", "Swiss Made"],
    },
    links: [
      {
        title: "Was ist Crowdlending?",
        href: "/ueber-uns/crowdlending",
        icon: "info",
      },
      { title: "Statistik", href: "/ueber-uns/statistik", icon: "chart" },
      { title: "Presse", href: "/presse", icon: "newspaper" },
      { title: "Blog", href: "/ueber-uns/blog", icon: "blog" },
    ],
    contact: {
      title: "Kontakt",
      address: "Cashare AG\nBosch 73\n6331 Hünenberg\nSchweiz",
      email: "support@cashare.ch",
      phone: "+41 41 558 48 88",
    },
  },
  en: {
    badge: "Since 2008",
    title: "The Swiss Pioneer in Crowdlending",
    subtitle:
      "We connect borrowers and investors on our innovative platform, democratizing access to fair financing.",
    stats: [
      { value: "CHF 2.5 Bn", label: "Funded Volume" },
      { value: "36,000+", label: "Registered Users" },
      { value: "2,400+", label: "Funded Projects" },
      { value: "16+", label: "Years Experience" },
    ],
    mission: {
      label: "Our Mission",
      title: "Fair Financing for Everyone",
      text:
        "We believe everyone deserves access to fair loans. Our platform enables individuals and SMEs to obtain favorable loans while investors achieve attractive returns. Through innovative technology and transparent processes, we create trust between all parties.",
    },
    history: {
      title: "Our History",
      subtitle:
        "From Switzerland's first crowdlending platform to a leading FinTech company.",
      items: [
        {
          year: "2008",
          event:
            "Founding of Cashare as Switzerland's first crowdlending platform",
        },
        { year: "2010", event: "First 100 successfully funded projects" },
        { year: "2015", event: "Expansion of offerings to SME loans" },
        {
          year: "2018",
          event: "10th anniversary with over CHF 100 million in funded volume",
        },
        {
          year: "2020",
          event: "Launch of new platform with improved user experience",
        },
        {
          year: "2024",
          event: "Over CHF 2.5 billion total funded volume achieved",
        },
      ],
    },
    values: {
      title: "Our Values",
      items: [
        {
          title: "Transparency",
          description:
            "Open communication and clear terms for all parties involved.",
          icon: "eye",
        },
        {
          title: "Innovation",
          description:
            "Continuous development of our technology and processes.",
          icon: "lightbulb",
        },
        {
          title: "Trust",
          description:
            "Long-term relationships based on reliability and integrity.",
          icon: "shield",
        },
        {
          title: "Sustainability",
          description:
            "Responsible use of resources and social responsibility.",
          icon: "leaf",
        },
      ],
    },
    team: {
      title: "Our Team",
      text:
        "An experienced team of finance, technology, and customer service experts works daily to create the best experience for our users. With passion and expertise, we develop innovative solutions for the financial world of tomorrow.",
    },
    regulation: {
      title: "Régulation & Security",
      text:
        "Cashare is FINMA-regulated and subject to strict Swiss financial market laws. Your data and investments are safe with us.",
      badges: ["FINMA-regulated", "SRO Polyreg Member", "Swiss Made"],
    },
    links: [
      {
        title: "What is Crowdlending?",
        href: "/en/about/crowdlending",
        icon: "info",
      },
      { title: "Statistics", href: "/en/about/statistics", icon: "chart" },
      { title: "Press", href: "/en/press", icon: "newspaper" },
      { title: "Blog", href: "/en/about/blog", icon: "blog" },
    ],
    contact: {
      title: "Contact",
      address: "Cashare AG\nBosch 73\n6331 Hünenberg\nSwitzerland",
      email: "support@cashare.ch",
      phone: "+41 41 558 48 88",
    },
  },
  fr: {
    badge: "Depuis 2008",
    title: "Le pionnier suisse du crowdlending",
    subtitle:
      "Nous connectons emprunteurs et investisseurs sur notre plateforme innovante, democratisant l'acces a un financement equitable.",
    stats: [
      { value: "CHF 2.5 Mrd", label: "Volume finance" },
      { value: "36'000+", label: "Utilisateurs inscrits" },
      { value: "2'400+", label: "Projets finances" },
      { value: "16+", label: "Annees d'experience" },
    ],
    mission: {
      label: "Notre Mission",
      title: "Un financement equitable pour tous",
      text:
        "Nous croyons que chacun merite un acces a des prets equitables. Notre plateforme permet aux particuliers et aux PME d'obtenir des prets avantageux tandis que les investisseurs obtiennent des rendements attractifs. Grace a une technologie innovante et des processus transparents, nous creons la confiance entre toutes les parties.",
    },
    history: {
      title: "Notre Histoire",
      subtitle:
        "De la premiere plateforme de crowdlending suisse a une entreprise FinTech leader.",
      items: [
        {
          year: "2008",
          event:
            "Fondation de Cashare, premiere plateforme de crowdlending en Suisse",
        },
        { year: "2010", event: "Premiers 100 projets finances avec succes" },
        { year: "2015", event: "Extension de l'offre aux credits PME" },
        {
          year: "2018",
          event:
            "10e anniversaire avec plus de CHF 100 millions de volume finance",
        },
        {
          year: "2020",
          event:
            "Lancement de la nouvelle plateforme avec une experience utilisateur amelioree",
        },
        {
          year: "2024",
          event: "Plus de CHF 2,5 milliards de volume total finance atteint",
        },
      ],
    },
    values: {
      title: "Nos Valeurs",
      items: [
        {
          title: "Transparence",
          description:
            "Communication ouverte et conditions claires pour toutes les parties.",
          icon: "eye",
        },
        {
          title: "Innovation",
          description:
            "Developpement continu de notre technologie et de nos processus.",
          icon: "lightbulb",
        },
        {
          title: "Confiance",
          description:
            "Relations a long terme basees sur la fiabilite et l'integrite.",
          icon: "shield",
        },
        {
          title: "Durabilite",
          description:
            "Utilisation responsable des ressources et responsabilite sociale.",
          icon: "leaf",
        },
      ],
    },
    team: {
      title: "Notre Equipe",
      text:
        "Une equipe experimentee d'experts en finance, technologie et service client travaille quotidiennement pour creer la meilleure experience pour nos utilisateurs. Avec passion et expertise, nous developpons des solutions innovantes pour le monde financier de demain.",
    },
    regulation: {
      title: "Régulation & Sécurité",
      text:
        "Cashare est regulee par la FINMA et soumise aux strictes lois suisses sur les marches financiers. Vos donnees et investissements sont en sécurité chez nous.",
      badges: ["Regulee FINMA", "Membre SRO Polyreg", "Swiss Made"],
    },
    links: [
      {
        title: "Qu'est-ce que le crowdlending?",
        href: "/fr/a-propos/crowdlending",
        icon: "info",
      },
      {
        title: "Statistiques",
        href: "/fr/a-propos/statistiques",
        icon: "chart",
      },
      { title: "Presse", href: "/fr/presse", icon: "newspaper" },
      { title: "Blog", href: "/fr/a-propos/blog", icon: "blog" },
    ],
    contact: {
      title: "Contact",
      address: "Cashare AG\nBosch 73\n6331 Hünenberg\nSuisse",
      email: "support@cashare.ch",
      phone: "+41 41 558 48 88",
    },
  },
};

// Icons as components
const icons = {
  eye: (
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
      />
    </svg>
  ),
  lightbulb: (
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
      />
    </svg>
  ),
  shield: (
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
      />
    </svg>
  ),
  leaf: (
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
      />
    </svg>
  ),
  info: (
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  ),
  chart: (
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
      />
    </svg>
  ),
  newspaper: (
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
      />
    </svg>
  ),
  blog: (
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
      />
    </svg>
  ),
  check: (
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M5 13l4 4L19 7"
      />
    </svg>
  ),
  mail: (
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    </svg>
  ),
  phone: (
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
      />
    </svg>
  ),
};

export function UeberUns({ locale }: UeberUnsProps) {
  const t = content[locale];

  return (
    <>
      {/* Hero Section */}
      <section class="about-hero">
        <div class="about-hero__shape about-hero__shape--1" />
        <div class="about-hero__shape about-hero__shape--2" />
        <div class="about-hero__container">
          <span class="about-hero__badge">{t.badge}</span>
          <h1 class="about-hero__title">{t.title}</h1>
          <p class="about-hero__subtitle">{t.subtitle}</p>
        </div>
      </section>

      {/* Stats Banner */}
      <section class="about-stats">
        <div class="about-stats__container">
          <div class="about-stats__grid">
            {t.stats.map((stat, index) => (
              <div key={index} class="about-stats__item">
                <div class="about-stats__value">{stat.value}</div>
                <div class="about-stats__label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section class="about-mission">
        <div class="about-mission__container">
          <div class="about-mission__content">
            <span class="about-mission__label">{t.mission.label}</span>
            <h2 class="about-mission__title">{t.mission.title}</h2>
            <p class="about-mission__text">{t.mission.text}</p>
          </div>
          <div class="about-mission__visual">
            <div class="about-mission__graphic">
              <svg
                class="about-mission__graphic-icon"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline / History */}
      <section class="about-timeline">
        <div class="about-timeline__container">
          <div class="about-timeline__header">
            <h2 class="about-timeline__title">{t.history.title}</h2>
            <p class="about-timeline__subtitle">{t.history.subtitle}</p>
          </div>
          <div class="about-timeline__list">
            {t.history.items.map((item, index) => (
              <div key={index} class="about-timeline__item">
                <div class="about-timeline__year">{item.year}</div>
                <div class="about-timeline__dot" />
                <div class="about-timeline__content">
                  <p class="about-timeline__event">{item.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section class="about-values">
        <div class="about-values__container">
          <div class="about-values__header">
            <h2 class="about-values__title">{t.values.title}</h2>
          </div>
          <div class="about-values__grid">
            {t.values.items.map((value, index) => (
              <div key={index} class="about-values__card">
                <div class="about-values__icon">
                  {icons[value.icon as keyof typeof icons]}
                </div>
                <h3 class="about-values__card-title">{value.title}</h3>
                <p class="about-values__card-text">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section class="about-team">
        <div class="about-team__container">
          <h2 class="about-team__title">{t.team.title}</h2>
          <p class="about-team__text">{t.team.text}</p>
        </div>
      </section>

      {/* Régulation & Security */}
      <section class="about-regulation">
        <div class="about-regulation__container">
          <div class="about-regulation__icon">
            {icons.shield}
          </div>
          <h2 class="about-regulation__title">{t.regulation.title}</h2>
          <p class="about-regulation__text">{t.regulation.text}</p>
          <div class="about-regulation__badges">
            {t.regulation.badges.map((badge, index) => (
              <div key={index} class="about-regulation__badge">
                {icons.check}
                <span>{badge}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section class="about-links">
        <div class="about-links__container">
          <div class="about-links__grid">
            {t.links.map((link, index) => (
              <a key={index} href={link.href} class="about-links__card">
                <div class="about-links__card-icon">
                  {icons[link.icon as keyof typeof icons]}
                </div>
                <span class="about-links__card-title">{link.title}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section class="about-contact">
        <div class="about-contact__container">
          <div class="about-contact__header">
            <h2 class="about-contact__title">{t.contact.title}</h2>
          </div>
          <div class="about-contact__card">
            <p class="about-contact__address">{t.contact.address}</p>
            <div class="about-contact__links">
              <a href={`mailto:${t.contact.email}`} class="about-contact__link">
                {icons.mail}
                <span>{t.contact.email}</span>
              </a>
              <a href={`tel:${t.contact.phone}`} class="about-contact__link">
                {icons.phone}
                <span>{t.contact.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
