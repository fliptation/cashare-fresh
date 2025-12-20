import { Layout } from "../components/Layout.tsx";
import { Hero } from "../components/Hero.tsx";
import { LogoBar } from "../components/LogoBar.tsx";
import { Borrowers } from "../components/Borrowers.tsx";
import { Investors } from "../components/Investors.tsx";
import { Projects } from "../components/Projects.tsx";
import { Benefits } from "../components/Benefits.tsx";
import { Requirements } from "../components/Requirements.tsx";
import { FAQ } from "../components/FAQ.tsx";
import { Stats } from "../components/Stats.tsx";
import { Features } from "../components/Features.tsx";
import LoanCalculator from "../islands/calculator/LoanCalculator.tsx";
import YieldCalculator from "../islands/calculator/YieldCalculator.tsx";
import type { Locale } from "../lib/i18n/index.ts";

export default function Home() {
  const locale: Locale = "de";

  return (
    <Layout locale={locale}>
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
