import { Layout } from "../../components/Layout.tsx";
import { HowItWorksHypo } from "../../components/pages/HowItWorksHypo.tsx";
import type { Locale } from "../../lib/i18n/index.ts";

export default function HypothekHowItWorksDE() {
  const locale: Locale = "de";

  return (
    <Layout locale={locale}>
      <HowItWorksHypo locale={locale} />
    </Layout>
  );
}
