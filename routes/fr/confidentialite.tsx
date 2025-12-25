import { Layout } from "../../components/Layout.tsx";
import { SeoHead } from "../../components/SeoHead.tsx";
import { Legal } from "../../components/pages/Legal.tsx";
import type { Locale } from "../../lib/i18n/index.ts";

export default function ConfidentialiteFR() {
  const locale: Locale = "fr";

  return (
    <Layout locale={locale} currentPath="/fr/confidentialite">
      <SeoHead
        title="Politique de confidentialité"
        description="Politique de confidentialité de Cashare. Comment nous protégeons et traitons vos données sur la plateforme suisse de crowdlending."
        canonicalPath="/fr/confidentialite"
        locale={locale}
      />
      <Legal locale={locale} page="datenschutz" />
    </Layout>
  );
}
