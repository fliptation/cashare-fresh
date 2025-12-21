import { Layout } from "../../../components/Layout.tsx";
import { SeoHead } from "../../../components/SeoHead.tsx";
import { Jobs } from "../../../components/pages/Jobs.tsx";
import type { Locale } from "../../../lib/i18n/index.ts";

export default function JobsEN() {
  const locale: Locale = "en";

  return (
    <Layout locale={locale}>
      <SeoHead
        title="Jobs"
        description="Careers at Cashare: Open positions and career opportunities at the Swiss crowdlending platform. Join our team."
        canonicalPath="/en/about/jobs"
        locale={locale}
      />
      <Jobs locale={locale} />
    </Layout>
  );
}
