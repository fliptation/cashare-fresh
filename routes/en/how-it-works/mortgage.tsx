import { Layout } from "../../../components/Layout.tsx";
import { HowItWorksHypo } from "../../../components/pages/HowItWorksHypo.tsx";
import type { Locale } from "../../../lib/i18n/index.ts";

export default function MortgageHowItWorksEN() {
  const locale: Locale = "en";

  return (
    <Layout locale={locale}>
      <HowItWorksHypo locale={locale} />
    </Layout>
  );
}
