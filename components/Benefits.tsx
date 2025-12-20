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

// Icons matching the reference image style
const icons = {
  history: (
    <svg viewBox="0 0 80 80" fill="none" class="benefits__icon">
      {/* Three overlapping circles - pink/purple/blue */}
      <circle cx="30" cy="40" r="18" fill="#f9a8d4" />
      <circle cx="40" cy="35" r="16" fill="#c084fc" opacity="0.9" />
      <circle cx="50" cy="42" r="14" fill="#60a5fa" opacity="0.8" />
    </svg>
  ),
  transparency: (
    <svg viewBox="0 0 80 80" fill="none" class="benefits__icon">
      {/* Overlapping ovals - pink/purple */}
      <ellipse cx="35" cy="40" rx="18" ry="24" fill="#f472b6" />
      <ellipse cx="45" cy="40" rx="16" ry="22" fill="#a855f7" opacity="0.85" />
    </svg>
  ),
  flexible: (
    <svg viewBox="0 0 80 80" fill="none" class="benefits__icon">
      {/* Three overlapping circles - yellow/cyan/purple */}
      <circle cx="50" cy="28" r="16" fill="#fde047" />
      <circle cx="32" cy="42" r="20" fill="#22d3ee" />
      <circle cx="52" cy="52" r="14" fill="#a78bfa" opacity="0.9" />
    </svg>
  ),
  returns: (
    <svg viewBox="0 0 80 80" fill="none" class="benefits__icon">
      {/* Medal/ribbon shape */}
      <circle cx="40" cy="32" r="20" fill="#fde047" />
      <path d="M30 48 L40 70 L50 48" fill="#f472b6" />
      <circle cx="40" cy="32" r="12" fill="#fbbf24" />
    </svg>
  ),
  security: (
    <svg viewBox="0 0 80 80" fill="none" class="benefits__icon">
      {/* Document/folder with stripes */}
      <rect x="20" y="20" width="40" height="45" rx="4" fill="#f472b6" />
      <rect x="20" y="20" width="40" height="12" fill="#fbbf24" />
      <rect x="28" y="38" width="24" height="4" rx="2" fill="#fce7f3" />
      <rect x="28" y="48" width="18" height="4" rx="2" fill="#fce7f3" />
    </svg>
  ),
  sustainable: (
    <svg viewBox="0 0 80 80" fill="none" class="benefits__icon">
      {/* Leaves/petals shape - green/cyan */}
      <ellipse cx="32" cy="50" rx="14" ry="20" fill="#86efac" transform="rotate(-20 32 50)" />
      <ellipse cx="48" cy="50" rx="14" ry="20" fill="#22d3ee" transform="rotate(20 48 50)" />
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
