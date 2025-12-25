import { Layout } from "../../components/Layout.tsx";
import { SeoHead } from "../../components/SeoHead.tsx";
import { Statistics } from "../../components/pages/Statistics.tsx";
import type { Locale } from "../../lib/i18n/index.ts";

export default function StatistikDE() {
  const locale: Locale = "de";

  return (
    <Layout locale={locale} currentPath="/ueber-uns/statistik">
      <SeoHead
        title="Statistik"
        description="Cashare Statistiken: Finanzierte Kredite, Ausfallraten, durchschnittliche Renditen. Transparente Zahlen zu unserer Crowdlending-Plattform."
        canonicalPath="/ueber-uns/statistik"
        locale={locale}
      />
      <Statistics locale={locale} />
    </Layout>
  );
}
