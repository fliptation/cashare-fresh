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

export default function HomeEN() {
  const locale: Locale = "en";

  return (
    <Layout locale={locale} currentPath="/en">
      <SeoHead
        title="Swiss Crowdlending Platform"
        description="Cashare is Switzerland's first crowdlending platform. Personal loans, SME loans and mortgages at fair conditions. Invest directly in Swiss loans."
        canonicalPath="/en"
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
