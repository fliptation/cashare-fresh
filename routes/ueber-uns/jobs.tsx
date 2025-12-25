import { Layout } from "../../components/Layout.tsx";
import { SeoHead } from "../../components/SeoHead.tsx";
import { Jobs } from "../../components/pages/Jobs.tsx";
import type { Locale } from "../../lib/i18n/index.ts";

export default function JobsDE() {
  const locale: Locale = "de";

  return (
    <Layout locale={locale} currentPath="/ueber-uns/jobs">
      <SeoHead
        title="Jobs"
        description="Karriere bei Cashare: Offene Stellen und Karrieremöglichkeiten bei der Schweizer Crowdlending-Plattform. Werde Teil unseres Teams."
        canonicalPath="/ueber-uns/jobs"
        locale={locale}
      />
      <Jobs locale={locale} />
    </Layout>
  );
}
