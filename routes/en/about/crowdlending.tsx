import { Layout } from "../../../components/Layout.tsx";
import { Crowdlending } from "../../../components/pages/Crowdlending.tsx";
import type { Locale } from "../../../lib/i18n/index.ts";

export default function CrowdlendingEN() {
  const locale: Locale = "en";

  return (
    <Layout locale={locale}>
      <Crowdlending locale={locale} />
    </Layout>
  );
}
