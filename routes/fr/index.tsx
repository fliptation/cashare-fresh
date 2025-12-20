import { Layout } from "../../components/Layout.tsx";
import { Hero } from "../../components/Hero.tsx";
import { Stats } from "../../components/Stats.tsx";
import { Features } from "../../components/Features.tsx";
import LoanCalculator from "../../islands/calculator/LoanCalculator.tsx";
import type { Locale } from "../../lib/i18n/index.ts";

export default function HomeFR() {
  const locale: Locale = "fr";

  return (
    <Layout locale={locale}>
      <Hero locale={locale} />
      <Stats locale={locale} />
      <LoanCalculator lang={locale} />
    </Layout>
  );
}
