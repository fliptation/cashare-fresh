import { Layout } from "../../components/Layout.tsx";
import { SeoHead } from "../../components/SeoHead.tsx";
import { Legal } from "../../components/pages/Legal.tsx";
import type { Locale } from "../../lib/i18n/index.ts";

export default function MentionsLegalesFR() {
  const locale: Locale = "fr";

  return (
    <Layout locale={locale}>
      <SeoHead
        title="Mentions légales"
        description="Mentions légales de Cashare AG. Coordonnées et informations juridiques sur la plateforme suisse de crowdlending."
        canonicalPath="/fr/mentions-legales"
        locale={locale}
      />
      <Legal locale={locale} page="impressum" />
    </Layout>
  );
}
