import { Layout } from "../../../components/Layout.tsx";
import { SeoHead } from "../../../components/SeoHead.tsx";
import { PrivateInvestors } from "../../../components/pages/PrivateInvestors.tsx";
import type { Locale } from "../../../lib/i18n/index.ts";

export default function InvestisseursPrivesFR() {
  const locale: Locale = "fr";

  return (
    <Layout locale={locale} currentPath="/fr/investir/investisseurs-prives">
      <SeoHead
        title="Pour les investisseurs privés"
        description="Investissez en tant que particulier dans des crédits suisses. À partir de CHF 100 par crédit. Rendements attractifs, transparent et sécurisé."
        canonicalPath="/fr/investir/investisseurs-prives"
        locale={locale}
      />
      <PrivateInvestors locale={locale} />
    </Layout>
  );
}
