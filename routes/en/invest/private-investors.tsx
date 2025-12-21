import { Layout } from "../../../components/Layout.tsx";
import { SeoHead } from "../../../components/SeoHead.tsx";
import { PrivateInvestors } from "../../../components/pages/PrivateInvestors.tsx";
import type { Locale } from "../../../lib/i18n/index.ts";

export default function PrivateInvestorsEN() {
  const locale: Locale = "en";

  return (
    <Layout locale={locale}>
      <SeoHead
        title="For Private Investors"
        description="Invest as a private individual in Swiss loans. From CHF 100 per loan. Attractive returns, transparent and secure."
        canonicalPath="/en/invest/private-investors"
        locale={locale}
      />
      <PrivateInvestors locale={locale} />
    </Layout>
  );
}
