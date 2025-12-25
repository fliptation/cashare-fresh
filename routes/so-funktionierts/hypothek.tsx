import { Layout } from "../../components/Layout.tsx";
import { SeoHead } from "../../components/SeoHead.tsx";
import { HowItWorksHypo } from "../../components/pages/HowItWorksHypo.tsx";
import type { Locale } from "../../lib/i18n/index.ts";

export default function HypothekHowItWorksDE() {
  const locale: Locale = "de";

  return (
    <Layout locale={locale} currentPath="/so-funktionierts/hypothek">
      <SeoHead
        title="Hypothek - So funktioniert's"
        description="So funktioniert eine Hypothek bei Cashare. Alternative Immobilienfinanzierung über Crowdlending in der Schweiz."
        canonicalPath="/so-funktionierts/hypothek"
        locale={locale}
      />
      <HowItWorksHypo locale={locale} />
    </Layout>
  );
}
