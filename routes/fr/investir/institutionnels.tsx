import { Layout } from "../../../components/Layout.tsx";
import { SeoHead } from "../../../components/SeoHead.tsx";
import { InstitutionalInvestors } from "../../../components/pages/InstitutionalInvestors.tsx";
import type { Locale } from "../../../lib/i18n/index.ts";

export default function InstitutionnelsFR() {
  const locale: Locale = "fr";

  return (
    <Layout locale={locale}>
      <SeoHead
        title="Pour les investisseurs institutionnels"
        description="Opportunités d'investissement institutionnel dans les crédits suisses. Solutions sur mesure pour caisses de pension, family offices et gestionnaires d'actifs."
        canonicalPath="/fr/investir/institutionnels"
        locale={locale}
      />
      <InstitutionalInvestors locale={locale} />
    </Layout>
  );
}
