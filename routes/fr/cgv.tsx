import { Layout } from "../../components/Layout.tsx";
import { SeoHead } from "../../components/SeoHead.tsx";
import { Legal } from "../../components/pages/Legal.tsx";
import type { Locale } from "../../lib/i18n/index.ts";

export default function CgvFR() {
  const locale: Locale = "fr";

  return (
    <Layout locale={locale} currentPath="/fr/cgv">
      <SeoHead
        title="CGV"
        description="Conditions générales de vente de Cashare. Conditions d'utilisation de la plateforme suisse de crowdlending."
        canonicalPath="/fr/cgv"
        locale={locale}
      />
      <Legal locale={locale} page="agb" />
    </Layout>
  );
}
