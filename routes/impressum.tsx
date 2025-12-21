import { Layout } from "../components/Layout.tsx";
import { SeoHead } from "../components/SeoHead.tsx";
import { Legal } from "../components/pages/Legal.tsx";
import type { Locale } from "../lib/i18n/index.ts";

export default function ImpressumDE() {
  const locale: Locale = "de";

  return (
    <Layout locale={locale}>
      <SeoHead
        title="Impressum"
        description="Impressum von Cashare AG. Kontaktdaten und rechtliche Informationen zur Schweizer Crowdlending-Plattform."
        canonicalPath="/impressum"
        locale={locale}
      />
      <Legal locale={locale} page="impressum" />
    </Layout>
  );
}
