import type { Locale } from "../lib/i18n/index.ts";
import type { ComponentChildren } from "preact";

interface HeroProps {
  locale: Locale;
  title?: string;
  subtitle?: string;
  primaryCTA?: { text: string; href: string };
  secondaryCTA?: { text: string; href: string };
  calculator?: ComponentChildren;
}

const heroContent = {
  de: {
    headline: "Unkompliziert zur cleveren Finanzierung",
    subline: "Mit Cashare zum individuellen Kredit. Einfach, transparent und sicher – ganz ohne Bank. Der faire Kredit für Privatpersonen und Unternehmen.",
    ctaLoan: "Kredit beantragen",
    ctaInvest: "Jetzt investieren",
    loanHref: "/kredit-beantragen",
    investHref: "/investieren",
  },
  en: {
    headline: "Smart Financing Made Simple",
    subline: "Switzerland's first crowdlending platform connects borrowers directly with investors. Transparent, fair, and without traditional banks.",
    ctaLoan: "Apply for Loan",
    ctaInvest: "Start Investing",
    loanHref: "/en/apply-for-loan",
    investHref: "/en/invest",
  },
  fr: {
    headline: "Financement intelligent simplifié",
    subline: "La première plateforme de crowdlending en Suisse connecte directement emprunteurs et investisseurs. Transparente, équitable et sans banque.",
    ctaLoan: "Demander un crédit",
    ctaInvest: "Investir maintenant",
    loanHref: "/fr/demander-credit",
    investHref: "/fr/investir",
  },
};

export function Hero({
  locale,
  title,
  subtitle,
  primaryCTA,
  secondaryCTA,
  calculator,
}: HeroProps) {
  const content = heroContent[locale];

  const heroTitle = title || content.headline;
  const heroSubtitle = subtitle || content.subline;
  const primaryButton = primaryCTA || { text: content.ctaLoan, href: content.loanHref };
  const secondaryButton = secondaryCTA || { text: content.ctaInvest, href: content.investHref };

  return (
    <section class="hero gradient-hero">
      {/* Animated background orbs - flowing gradient clouds */}
      <div class="hero__orb hero__orb--1" aria-hidden="true"></div>
      <div class="hero__orb hero__orb--2" aria-hidden="true"></div>
      <div class="hero__orb hero__orb--3" aria-hidden="true"></div>
      <div class="hero__orb hero__orb--4" aria-hidden="true"></div>

      {/* Animated background effects */}
      <div class="hero__grid-lines" aria-hidden="true"></div>
      <div class="hero__shine" aria-hidden="true"></div>
      <div class="hero__shine hero__shine--2" aria-hidden="true"></div>

      <div class="hero__container">
        {/* Left column - Content */}
        <div class="hero__left">
          <h1 class="hero__title text-reveal">
            {heroTitle}
          </h1>

          <p class="hero__subtitle text-reveal text-reveal-delay-2">
            {heroSubtitle}
          </p>

          <div class="hero__actions text-reveal text-reveal-delay-3">
            <a
              href={primaryButton.href}
              class="btn btn--primary hover-lift hover-press shadow-primary"
            >
              {primaryButton.text}
            </a>

            <a
              href={secondaryButton.href}
              class="btn btn--secondary hover-lift hover-press"
            >
              {secondaryButton.text}
            </a>
          </div>
        </div>

        {/* Right column - Calculator */}
        {calculator && (
          <div class="hero__right text-reveal text-reveal-delay-2">
            {calculator}
          </div>
        )}
      </div>

      {/* Bottom fade overlay */}
      <div class="hero__fade" aria-hidden="true"></div>
    </section>
  );
}
