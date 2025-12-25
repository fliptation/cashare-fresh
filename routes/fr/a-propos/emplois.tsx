import { Layout } from "../../../components/Layout.tsx";
import { SeoHead } from "../../../components/SeoHead.tsx";
import { Jobs } from "../../../components/pages/Jobs.tsx";
import type { Locale } from "../../../lib/i18n/index.ts";

export default function EmploisFR() {
  const locale: Locale = "fr";

  return (
    <Layout locale={locale} currentPath="/fr/a-propos/emplois">
      <SeoHead
        title="Emplois"
        description="Carrières chez Cashare: Postes ouverts et opportunités de carrière sur la plateforme suisse de crowdlending. Rejoignez notre équipe."
        canonicalPath="/fr/a-propos/emplois"
        locale={locale}
      />
      <Jobs locale={locale} />
    </Layout>
  );
}
