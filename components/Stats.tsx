import AnimatedCounter from "../islands/AnimatedCounter.tsx";
import type { Locale } from "../lib/i18n/index.ts";

interface StatsProps {
  locale: Locale;
}

const statsContent = {
  de: {
    stats: [
      { value: 2008, label: "Gegründet" },
      { value: 60000, suffix: "+", label: "Mitglieder" },
      { value: 2.5, prefix: "CHF ", suffix: " Mrd.", decimals: 1, label: "Kreditvolumen" },
      { value: 7.2, suffix: "%", decimals: 1, label: "Ø Rendite p.a." },
    ],
  },
  en: {
    stats: [
      { value: 2008, label: "Founded" },
      { value: 60000, suffix: "+", label: "Members" },
      { value: 2.5, prefix: "CHF ", suffix: " Bn.", decimals: 1, label: "Loan Volume" },
      { value: 7.2, suffix: "%", decimals: 1, label: "Avg. Return p.a." },
    ],
  },
  fr: {
    stats: [
      { value: 2008, label: "Fondé" },
      { value: 60000, suffix: "+", label: "Membres" },
      { value: 2.5, prefix: "CHF ", suffix: " Mrd.", decimals: 1, label: "Volume de crédit" },
      { value: 7.2, suffix: "%", decimals: 1, label: "Rendement moy. p.a." },
    ],
  },
};

export function Stats({ locale }: StatsProps) {
  const content = statsContent[locale];

  return (
    <section class="stats">
      <div class="stats__container">
        <div class="stats__list">
          {content.stats.map((stat, index) => (
            <div
              key={index}
              class="stats__item animate animate--fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div class="stats__value-wrapper">
                {stat.prefix && <span class="stats__prefix">{stat.prefix}</span>}
                <AnimatedCounter
                  value={stat.value}
                  duration={2000}
                  decimals={stat.decimals ?? 0}
                  locale={locale}
                />
                {stat.suffix && <span class="stats__suffix">{stat.suffix}</span>}
              </div>
              <p class="stats__label">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
