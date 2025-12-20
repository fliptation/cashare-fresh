import { Layout } from "../../../components/Layout.tsx";
import { Statistics } from "../../../components/pages/Statistics.tsx";
import type { Locale } from "../../../lib/i18n/index.ts";

export default function StatisticsEN() {
  const locale: Locale = "en";

  return (
    <Layout locale={locale}>
      <Statistics locale={locale} />
    </Layout>
  );
}
