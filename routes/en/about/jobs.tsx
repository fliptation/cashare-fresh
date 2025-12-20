import { Layout } from "../../../components/Layout.tsx";
import { Jobs } from "../../../components/pages/Jobs.tsx";
import type { Locale } from "../../../lib/i18n/index.ts";

export default function JobsEN() {
  const locale: Locale = "en";

  return (
    <Layout locale={locale}>
      <Jobs locale={locale} />
    </Layout>
  );
}
