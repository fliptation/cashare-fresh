import { Layout } from "../components/Layout.tsx";
import { SeoHead } from "../components/SeoHead.tsx";
import { Legal } from "../components/pages/Legal.tsx";
import type { Locale } from "../lib/i18n/index.ts";

export default function AgbDE() {
  const locale: Locale = "de";

  return (
    <Layout locale={locale} currentPath="/agb">
      <SeoHead
        title="AGB"
        description="Allgemeine Geschäftsbedingungen von Cashare. Nutzungsbedingungen für die Schweizer Crowdlending-Plattform."
        canonicalPath="/agb"
        locale={locale}
      />
      <Legal locale={locale} page="agb" />
    </Layout>
  );
}
