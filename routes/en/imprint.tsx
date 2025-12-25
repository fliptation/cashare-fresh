import { Layout } from "../../components/Layout.tsx";
import { SeoHead } from "../../components/SeoHead.tsx";
import { Legal } from "../../components/pages/Legal.tsx";
import type { Locale } from "../../lib/i18n/index.ts";

export default function ImprintEN() {
  const locale: Locale = "en";

  return (
    <Layout locale={locale} currentPath="/en/imprint">
      <SeoHead
        title="Imprint"
        description="Cashare AG imprint. Contact details and legal information about the Swiss crowdlending platform."
        canonicalPath="/en/imprint"
        locale={locale}
      />
      <Legal locale={locale} page="impressum" />
    </Layout>
  );
}
