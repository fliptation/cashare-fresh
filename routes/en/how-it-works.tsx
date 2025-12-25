import { Layout } from "../../components/Layout.tsx";
import { SeoHead } from "../../components/SeoHead.tsx";
import { HowItWorks } from "../../components/pages/HowItWorks.tsx";
import type { Locale } from "../../lib/i18n/index.ts";

export default function HowItWorksEN() {
  const locale: Locale = "en";

  return (
    <Layout locale={locale} currentPath="/en/how-it-works">
      <SeoHead
        title="How It Works"
        description="Learn how crowdlending works at Cashare. Simple process for borrowers and investors on the Swiss platform."
        canonicalPath="/en/how-it-works"
        locale={locale}
      />
      <HowItWorks locale={locale} />
    </Layout>
  );
}
