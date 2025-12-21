import { Layout } from "../../components/Layout.tsx";
import { SeoHead } from "../../components/SeoHead.tsx";
import { Investieren } from "../../components/pages/Investieren.tsx";
import type { Locale } from "../../lib/i18n/index.ts";

export default function InvestEN() {
  const locale: Locale = "en";

  return (
    <Layout locale={locale}>
      <SeoHead
        title="Invest in Loans"
        description="Invest directly in Swiss loans. Attractive returns, diversified portfolio. For private and institutional investors."
        canonicalPath="/en/invest"
        locale={locale}
      />
      <Investieren locale={locale} />
    </Layout>
  );
}
