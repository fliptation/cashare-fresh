import type { Locale } from "../lib/i18n/index.ts";
import ScrollReveal from "../islands/ScrollReveal.tsx";

interface FeaturesProps {
  locale: Locale;
}

const featuresContent = {
  de: {
    title: "Warum Cashare?",
    subtitle: "Die Vorteile unserer Crowdlending-Plattform",
    features: [
      {
        icon: "speed",
        title: "Schnell & Einfach",
        description: "Online-Antrag in wenigen Minuten. Schnelle Kreditentscheidung und unkomplizierte Abwicklung.",
      },
      {
        icon: "transparent",
        title: "Transparent",
        description: "Keine versteckten Gebühren. Sie sehen von Anfang an alle Kosten und Konditionen.",
      },
      {
        icon: "fair",
        title: "Faire Zinsen",
        description: "Attraktive Zinssätze für Kreditnehmer und überdurchschnittliche Renditen für Anleger.",
      },
      {
        icon: "secure",
        title: "Sicher & Reguliert",
        description: "Lizenzierter Kreditgeber, Mitglied der SRO Polyreg und jährlich von PwC geprüft.",
      },
    ],
  },
  en: {
    title: "Why Cashare?",
    subtitle: "The benefits of our crowdlending platform",
    features: [
      {
        icon: "speed",
        title: "Fast & Easy",
        description: "Online application in minutes. Quick credit decisions and straightforward processing.",
      },
      {
        icon: "transparent",
        title: "Transparent",
        description: "No hidden fees. You see all costs and conditions from the start.",
      },
      {
        icon: "fair",
        title: "Fair Rates",
        description: "Attractive interest rates for borrowers and above-average returns for investors.",
      },
      {
        icon: "secure",
        title: "Safe & Regulated",
        description: "Licensed lender, SRO Polyreg member, and annually audited by PwC.",
      },
    ],
  },
  fr: {
    title: "Pourquoi Cashare?",
    subtitle: "Les avantages de notre plateforme de crowdlending",
    features: [
      {
        icon: "speed",
        title: "Rapide & Simple",
        description: "Demande en ligne en quelques minutes. Décision rapide et traitement simple.",
      },
      {
        icon: "transparent",
        title: "Transparent",
        description: "Pas de frais cachés. Vous voyez tous les coûts et conditions dès le départ.",
      },
      {
        icon: "fair",
        title: "Taux équitables",
        description: "Taux d'intérêt attractifs pour les emprunteurs et rendements supérieurs pour les investisseurs.",
      },
      {
        icon: "secure",
        title: "Sûr & Réglementé",
        description: "Prêteur agréé, membre de l'OAR Polyreg et audité annuellement par PwC.",
      },
    ],
  },
};

const icons = {
  speed: (
    <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
  transparent: (
    <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
    </svg>
  ),
  fair: (
    <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
    </svg>
  ),
  secure: (
    <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
};

export function Features({ locale }: FeaturesProps) {
  const content = featuresContent[locale];

  return (
    <section class="section section--light">
      <div class="container">
        <ScrollReveal animation="fade-up">
          <div class="text-center mb-16">
            <h2 class="section__title">
              {content.title}
            </h2>
            <p class="section__subtitle">{content.subtitle}</p>
          </div>
        </ScrollReveal>

        <div class="features-grid">
          {content.features.map((feature, index) => (
            <ScrollReveal
              key={feature.title}
              animation="fade-up"
              delay={index * 100}
            >
              <div class="feature-card card card--interactive">
                <div class="feature-card__icon">
                  {icons[feature.icon as keyof typeof icons]}
                </div>
                <h3 class="feature-card__title">
                  {feature.title}
                </h3>
                <p class="feature-card__description">{feature.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
