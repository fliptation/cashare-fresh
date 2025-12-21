import { Layout } from "../../components/Layout.tsx";
import { SeoHead } from "../../components/SeoHead.tsx";
import { Hero } from "../../components/Hero.tsx";
import { LogoBar } from "../../components/LogoBar.tsx";
import { Borrowers } from "../../components/Borrowers.tsx";
import { Investors } from "../../components/Investors.tsx";
import { Projects } from "../../components/Projects.tsx";
import { Benefits } from "../../components/Benefits.tsx";
import { Requirements } from "../../components/Requirements.tsx";
import { FAQ } from "../../components/FAQ.tsx";
import LoanCalculator from "../../islands/calculator/LoanCalculator.tsx";
import YieldCalculator from "../../islands/calculator/YieldCalculator.tsx";
import type { Locale } from "../../lib/i18n/index.ts";

export default function HomeFR() {
  const locale: Locale = "fr";

  return (
    <Layout locale={locale}>
      <SeoHead
        title="Plateforme suisse de crowdlending"
        description="Cashare est la première plateforme de crowdlending en Suisse. Crédits privés, crédits PME et hypothèques à des conditions équitables. Investissez directement dans des crédits suisses."
        canonicalPath="/fr"
        locale={locale}
      />
      <Hero
        locale={locale}
        calculator={<LoanCalculator lang={locale} />}
      />
      <LogoBar />
      <Borrowers locale={locale} />
      <Investors locale={locale} />
      <Projects locale={locale} />

      {/* Yield Calculator Section */}
      <section class="section section--gradient">
        <div class="container">
          <YieldCalculator lang={locale} />
        </div>
      </section>

      <Benefits locale={locale} />
      <Requirements locale={locale} />
      <FAQ locale={locale} />
    </Layout>
  );
}
