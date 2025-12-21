import type { Locale } from "../lib/i18n/index.ts";

interface BenefitsProps {
  locale: Locale;
}

const content = {
  de: {
    title: "Erfahrung – Sicherheit\nEffizienz – Technologie",
    subtitle: "Mit Innovation und Verantwortung zu kosteneffizienten Lösungen für <strong>Kreditnehmer</strong> und <strong>Anleger</strong>.",
    benefits: [
      {
        icon: "history",
        title: "Was Sie über uns wissen sollten",
        description: "Cashare wurde <strong>2008 als erste Crowdlending-Plattform der Schweiz</strong> gegründet und hat sich als führender Anbieter für innovative Finanzierungslösungen etabliert. Mit über <strong>60'000 Kunden</strong> und <strong>CHF 2,5 Milliarden geprüfter Kreditanträge</strong> bietet Cashare bewährte und sichere Finanzlösungen.",
      },
      {
        icon: "transparency",
        title: "Transparente & effiziente Prozesse",
        description: "Cashare steht für klare, faire und transparente Abläufe. Ob für Kreditnehmer oder Investoren – alle Schritte sind strukturiert, <strong>ohne versteckte Gebühren oder Überraschungen</strong>. Dank Echtzeit-Updates und detaillierten Analysen können Nutzer fundierte Finanzentscheidungen treffen.",
      },
      {
        icon: "flexible",
        title: "Flexible Finanzlösungen für alle",
        description: "Cashare verbindet Kreditnehmer mit Investoren und bietet <strong>eine faire Alternative zu Banken</strong>. Kreditnehmer profitieren von flexiblen Laufzeiten, attraktiven Zinssätzen und schneller Abwicklung, während Investoren Zugang zu <strong>attraktiven Renditen und einer diversifizierten Anlagestrategie</strong> erhalten.",
      },
      {
        icon: "returns",
        title: "Attraktive Renditen für Anleger",
        description: "Anleger profitieren von <strong>attraktiven Renditen</strong>, die traditionelle Anlageformen in einem Portfolio optimal ergänzen, speziell als Erweiterung im <strong>Fixed Income Bereich</strong>.",
      },
      {
        icon: "security",
        title: "Sicherheit durch intelligentes Risikomanagement",
        description: "Optimieren Sie Ihr Portfolio mit unseren <strong>massgeschneiderten Investitionslösungen</strong> für institutionelle Anleger. Profitieren Sie von einem <strong>starken Risikomanagement</strong> und einer professionellen Abwicklung in jeder Phase Ihrer Investition.",
      },
      {
        icon: "sustainable",
        title: "Nachhaltige Finanzlösungen",
        description: "Cashare verbindet Kreditnehmer und Investoren zu einer starken Finanzgemeinschaft. Durch Crowdlending wird nicht nur <strong>finanzielle Unabhängigkeit</strong> gefördert, sondern auch <strong>kleine Unternehmen unterstützt</strong>, die sonst keinen Zugang zu fairen Finanzierungsmöglichkeiten haben.",
      },
    ],
  },
  en: {
    title: "Experience – Security\nEfficiency – Technology",
    subtitle: "With innovation and responsibility towards cost-efficient solutions for <strong>borrowers</strong> and <strong>investors</strong>.",
    benefits: [
      {
        icon: "history",
        title: "What you should know about us",
        description: "Cashare was <strong>founded in 2008 as Switzerland's first crowdlending platform</strong> and has established itself as a leading provider of innovative financing solutions. With over <strong>60,000 customers</strong> and <strong>CHF 2.5 billion in reviewed loan applications</strong>, Cashare offers proven and secure financial solutions.",
      },
      {
        icon: "transparency",
        title: "Transparent & efficient processes",
        description: "Cashare stands for clear, fair and transparent processes. Whether for borrowers or investors – all steps are structured, <strong>without hidden fees or surprises</strong>. Thanks to real-time updates and detailed analyses, users can make informed financial decisions.",
      },
      {
        icon: "flexible",
        title: "Flexible financial solutions for everyone",
        description: "Cashare connects borrowers with investors and offers <strong>a fair alternative to banks</strong>. Borrowers benefit from flexible terms, attractive interest rates and fast processing, while investors gain access to <strong>attractive returns and a diversified investment strategy</strong>.",
      },
      {
        icon: "returns",
        title: "Attractive returns for investors",
        description: "Investors benefit from <strong>attractive returns</strong> that optimally complement traditional investment forms in a portfolio, especially as an extension in the <strong>fixed income sector</strong>.",
      },
      {
        icon: "security",
        title: "Security through intelligent risk management",
        description: "Optimize your portfolio with our <strong>tailored investment solutions</strong> for institutional investors. Benefit from <strong>strong risk management</strong> and professional handling at every stage of your investment.",
      },
      {
        icon: "sustainable",
        title: "Sustainable financial solutions",
        description: "Cashare connects borrowers and investors into a strong financial community. Through crowdlending, not only <strong>financial independence</strong> is promoted, but also <strong>small businesses are supported</strong> that otherwise have no access to fair financing options.",
      },
    ],
  },
  fr: {
    title: "Expérience – Sécurité\nEfficacité – Technologie",
    subtitle: "Avec innovation et responsabilité vers des solutions rentables pour les <strong>emprunteurs</strong> et les <strong>investisseurs</strong>.",
    benefits: [
      {
        icon: "history",
        title: "Ce que vous devez savoir sur nous",
        description: "Cashare a été <strong>fondée en 2008 en tant que première plateforme de crowdlending en Suisse</strong> et s'est établie comme un fournisseur leader de solutions de financement innovantes. Avec plus de <strong>60'000 clients</strong> et <strong>CHF 2,5 milliards de demandes de crédit examinées</strong>, Cashare offre des solutions financières éprouvées et sécurisées.",
      },
      {
        icon: "transparency",
        title: "Processus transparents et efficaces",
        description: "Cashare représente des processus clairs, équitables et transparents. Que ce soit pour les emprunteurs ou les investisseurs – toutes les étapes sont structurées, <strong>sans frais cachés ni surprises</strong>. Grâce aux mises à jour en temps réel et aux analyses détaillées, les utilisateurs peuvent prendre des décisions financières éclairées.",
      },
      {
        icon: "flexible",
        title: "Solutions financières flexibles pour tous",
        description: "Cashare connecte les emprunteurs avec les investisseurs et offre <strong>une alternative équitable aux banques</strong>. Les emprunteurs bénéficient de durées flexibles, de taux d'intérêt attractifs et d'un traitement rapide, tandis que les investisseurs ont accès à <strong>des rendements attractifs et à une stratégie d'investissement diversifiée</strong>.",
      },
      {
        icon: "returns",
        title: "Rendements attractifs pour les investisseurs",
        description: "Les investisseurs bénéficient de <strong>rendements attractifs</strong> qui complètent de manière optimale les formes d'investissement traditionnelles dans un portefeuille, notamment comme extension dans le <strong>secteur des revenus fixes</strong>.",
      },
      {
        icon: "security",
        title: "Sécurité grâce à une gestion intelligente des risques",
        description: "Optimisez votre portefeuille avec nos <strong>solutions d'investissement sur mesure</strong> pour les investisseurs institutionnels. Bénéficiez d'une <strong>gestion des risques solide</strong> et d'un traitement professionnel à chaque étape de votre investissement.",
      },
      {
        icon: "sustainable",
        title: "Solutions financières durables",
        description: "Cashare connecte les emprunteurs et les investisseurs dans une communauté financière solide. Grâce au crowdlending, non seulement <strong>l'indépendance financière</strong> est favorisée, mais aussi <strong>les petites entreprises sont soutenues</strong> qui n'auraient autrement pas accès à des options de financement équitables.",
      },
    ],
  },
};

// Refined icons with polished geometry and smooth gradients
const icons = {
  history: (
    <svg viewBox="0 0 64 64" fill="none" class="benefits__icon">
      <defs>
        <linearGradient id="history-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#67e8f9" />
          <stop offset="100%" stop-color="#22d3ee" />
        </linearGradient>
        <linearGradient id="history-grad-2" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#f9a8d4" />
          <stop offset="100%" stop-color="#f472b6" />
        </linearGradient>
        <linearGradient id="history-grad-3" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#c4b5fd" />
          <stop offset="100%" stop-color="#a78bfa" />
        </linearGradient>
      </defs>
      {/* Three soft overlapping circles with gradients */}
      <circle cx="22" cy="38" r="16" fill="url(#history-grad-1)" />
      <circle cx="32" cy="28" r="14" fill="url(#history-grad-2)" opacity="0.92" />
      <circle cx="42" cy="40" r="12" fill="url(#history-grad-3)" opacity="0.88" />
    </svg>
  ),
  transparency: (
    <svg viewBox="0 0 64 64" fill="none" class="benefits__icon">
      <defs>
        <linearGradient id="trans-grad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#f472b6" />
          <stop offset="50%" stop-color="#ec4899" />
          <stop offset="100%" stop-color="#db2777" />
        </linearGradient>
      </defs>
      {/* Refined vertical pill/oval shape */}
      <rect x="20" y="12" width="24" height="40" rx="12" fill="url(#trans-grad)" />
      {/* Subtle inner highlight */}
      <ellipse cx="28" cy="24" rx="4" ry="6" fill="#fce7f3" opacity="0.3" />
    </svg>
  ),
  flexible: (
    <svg viewBox="0 0 64 64" fill="none" class="benefits__icon">
      <defs>
        <linearGradient id="flex-yellow" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#fef08a" />
          <stop offset="100%" stop-color="#fde047" />
        </linearGradient>
        <linearGradient id="flex-purple" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#c4b5fd" />
          <stop offset="100%" stop-color="#a78bfa" />
        </linearGradient>
      </defs>
      {/* Two clean overlapping circles - yellow and purple */}
      <circle cx="26" cy="28" r="16" fill="url(#flex-yellow)" />
      <circle cx="38" cy="38" r="16" fill="url(#flex-purple)" opacity="0.9" />
    </svg>
  ),
  returns: (
    <svg viewBox="0 0 64 64" fill="none" class="benefits__icon">
      <defs>
        <linearGradient id="returns-pin" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#fda4af" />
          <stop offset="100%" stop-color="#f472b6" />
        </linearGradient>
        <linearGradient id="returns-top" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#fef08a" />
          <stop offset="100%" stop-color="#fde047" />
        </linearGradient>
      </defs>
      {/* Polished location pin icon */}
      <path
        d="M32 8c-9.941 0-18 8.059-18 18 0 12 18 30 18 30s18-18 18-30c0-9.941-8.059-18-18-18z"
        fill="url(#returns-pin)"
      />
      {/* Inner highlight circle */}
      <circle cx="32" cy="26" r="8" fill="url(#returns-top)" />
      {/* Subtle shine */}
      <ellipse cx="26" cy="18" rx="4" ry="5" fill="#fce7f3" opacity="0.35" />
    </svg>
  ),
  security: (
    <svg viewBox="0 0 64 64" fill="none" class="benefits__icon">
      <defs>
        <linearGradient id="sec-bg" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#fdba74" />
          <stop offset="100%" stop-color="#f97316" />
        </linearGradient>
      </defs>
      {/* Clean document/clipboard icon */}
      <rect x="14" y="8" width="36" height="48" rx="4" fill="url(#sec-bg)" />
      {/* Document lines - precise spacing */}
      <rect x="22" y="22" width="20" height="4" rx="2" fill="#fff" opacity="0.95" />
      <rect x="22" y="32" width="16" height="4" rx="2" fill="#fff" opacity="0.95" />
      <rect x="22" y="42" width="12" height="4" rx="2" fill="#fff" opacity="0.95" />
    </svg>
  ),
  sustainable: (
    <svg viewBox="0 0 64 64" fill="none" class="benefits__icon">
      <defs>
        <linearGradient id="sust-cyan" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#5eead4" />
          <stop offset="100%" stop-color="#14b8a6" />
        </linearGradient>
        <linearGradient id="sust-teal" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#22d3ee" />
          <stop offset="100%" stop-color="#06b6d4" />
        </linearGradient>
      </defs>
      {/* Two refined leaf/petal shapes */}
      <ellipse
        cx="24" cy="36"
        rx="10" ry="18"
        fill="url(#sust-cyan)"
        transform="rotate(-15 24 36)"
      />
      <ellipse
        cx="40" cy="36"
        rx="10" ry="18"
        fill="url(#sust-teal)"
        transform="rotate(15 40 36)"
        opacity="0.92"
      />
      {/* Subtle vein detail on leaves */}
      <path d="M24 22 L24 50" stroke="#fff" stroke-width="1.5" stroke-linecap="round" opacity="0.25" transform="rotate(-15 24 36)" />
      <path d="M40 22 L40 50" stroke="#fff" stroke-width="1.5" stroke-linecap="round" opacity="0.25" transform="rotate(15 40 36)" />
    </svg>
  ),
};

export function Benefits({ locale }: BenefitsProps) {
  const t = content[locale];

  return (
    <section class="benefits">
      <div class="benefits__container">
        <div class="benefits__header">
          <h2 class="benefits__title">{t.title}</h2>
          <p
            class="benefits__subtitle"
            dangerouslySetInnerHTML={{ __html: t.subtitle }}
          />
        </div>

        <div class="benefits__grid">
          {t.benefits.map((benefit, index) => (
            <div class="benefits__card" key={index}>
              {icons[benefit.icon as keyof typeof icons]}
              <h3 class="benefits__card-title">{benefit.title}</h3>
              <p
                class="benefits__card-description"
                dangerouslySetInnerHTML={{ __html: benefit.description }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
