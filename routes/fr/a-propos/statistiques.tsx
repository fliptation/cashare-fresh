import { Layout } from "../../../components/Layout.tsx";
import { SeoHead } from "../../../components/SeoHead.tsx";
import { Statistics } from "../../../components/pages/Statistics.tsx";
import type { Locale } from "../../../lib/i18n/index.ts";

export default function StatistiquesFR() {
  const locale: Locale = "fr";

  return (
    <Layout locale={locale}>
      <SeoHead
        title="Statistiques"
        description="Statistiques Cashare: Chiffres actuels sur les crédits, rendements et évolution de la plateforme suisse de crowdlending."
        canonicalPath="/fr/a-propos/statistiques"
        locale={locale}
      />
      <Statistics locale={locale} />
    </Layout>
  );
}
