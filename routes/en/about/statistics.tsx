import { Layout } from "../../../components/Layout.tsx";
import { SeoHead } from "../../../components/SeoHead.tsx";
import { Statistics } from "../../../components/pages/Statistics.tsx";
import type { Locale } from "../../../lib/i18n/index.ts";

export default function StatisticsEN() {
  const locale: Locale = "en";

  return (
    <Layout locale={locale} currentPath="/en/about/statistics">
      <SeoHead
        title="Statistics"
        description="Cashare statistics: Funded loans, default rates, average returns. Transparent figures about our crowdlending platform."
        canonicalPath="/en/about/statistics"
        locale={locale}
      />
      <Statistics locale={locale} />
    </Layout>
  );
}
