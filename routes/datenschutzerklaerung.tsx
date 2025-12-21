import { Layout } from "../components/Layout.tsx";
import { SeoHead } from "../components/SeoHead.tsx";
import { Legal } from "../components/pages/Legal.tsx";
import type { Locale } from "../lib/i18n/index.ts";

export default function DatenschutzDE() {
  const locale: Locale = "de";

  return (
    <Layout locale={locale}>
      <SeoHead
        title="Datenschutzerklärung"
        description="Datenschutzerklärung von Cashare. Wie wir Ihre Daten auf der Schweizer Crowdlending-Plattform schützen und verarbeiten."
        canonicalPath="/datenschutzerklaerung"
        locale={locale}
      />
      <Legal locale={locale} page="datenschutz" />
    </Layout>
  );
}
