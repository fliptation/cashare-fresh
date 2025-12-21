import { Layout } from "../../components/Layout.tsx";
import { SeoHead } from "../../components/SeoHead.tsx";
import { Investieren } from "../../components/pages/Investieren.tsx";
import type { Locale } from "../../lib/i18n/index.ts";

export default function InvestirFR() {
  const locale: Locale = "fr";

  return (
    <Layout locale={locale}>
      <SeoHead
        title="Investir dans les crédits"
        description="Investissez directement dans des crédits suisses. Rendements attractifs, portefeuille diversifié. Pour investisseurs privés et institutionnels."
        canonicalPath="/fr/investir"
        locale={locale}
      />
      <Investieren locale={locale} />
    </Layout>
  );
}
