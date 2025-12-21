import { Layout } from "../../../components/Layout.tsx";
import { SeoHead } from "../../../components/SeoHead.tsx";
import { HowItWorksPrivate } from "../../../components/pages/HowItWorksPrivate.tsx";
import type { Locale } from "../../../lib/i18n/index.ts";

export default function PrivateLoansHowItWorksEN() {
  const locale: Locale = "en";

  return (
    <Layout locale={locale}>
      <SeoHead
        title="Private Loans - How It Works"
        description="How personal loans work at Cashare. Simple process from application to payout on the Swiss crowdlending platform."
        canonicalPath="/en/how-it-works/private-loans"
        locale={locale}
      />
      <HowItWorksPrivate locale={locale} />
    </Layout>
  );
}
