import { Layout } from "../../components/Layout.tsx";
import { SeoHead } from "../../components/SeoHead.tsx";
import { Press } from "../../components/pages/Press.tsx";
import type { Locale } from "../../lib/i18n/index.ts";

export default function PresseDE() {
  const locale: Locale = "de";

  return (
    <Layout locale={locale} currentPath="/ueber-uns/presse">
      <SeoHead
        title="Presse"
        description="Crowdlending und Fintech sind Themen von nationalem und internationalem Interesse. Schauen Sie rein und lassen Sie sich inspirieren."
        canonicalPath="/ueber-uns/presse"
        locale={locale}
      />
      <Press locale={locale} />
    </Layout>
  );
}
