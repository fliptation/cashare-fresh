import { Layout } from "../../components/Layout.tsx";
import { WhoWeAre } from "../../components/pages/WhoWeAre.tsx";
import type { Locale } from "../../lib/i18n/index.ts";

export default function WerSindWirDE() {
  const locale: Locale = "de";

  return (
    <Layout locale={locale}>
      <WhoWeAre locale={locale} />
    </Layout>
  );
}
