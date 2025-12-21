import { Layout } from "../../../components/Layout.tsx";
import { SeoHead } from "../../../components/SeoHead.tsx";
import { HowItWorksHypo } from "../../../components/pages/HowItWorksHypo.tsx";
import type { Locale } from "../../../lib/i18n/index.ts";

export default function MortgageHowItWorksEN() {
  const locale: Locale = "en";

  return (
    <Layout locale={locale}>
      <SeoHead
        title="Mortgage - How It Works"
        description="How mortgages work at Cashare. Alternative real estate financing through crowdlending in Switzerland."
        canonicalPath="/en/how-it-works/mortgage"
        locale={locale}
      />
      <HowItWorksHypo locale={locale} />
    </Layout>
  );
}
