import { Layout } from "../../../components/Layout.tsx";
import { SeoHead } from "../../../components/SeoHead.tsx";
import { Privatkredit } from "../../../components/pages/Privatkredit.tsx";
import type { Locale } from "../../../lib/i18n/index.ts";

export default function CreditPriveFR() {
  const locale: Locale = "fr";

  return (
    <Layout locale={locale} theme="borrowing">
      <SeoHead
        title="Demander un crédit privé"
        description="Crédit privé de CHF 1'000 à CHF 500'000 à des taux d'intérêt équitables. Durées flexibles, versement rapide. Demandez maintenant chez Cashare."
        canonicalPath="/fr/demander-un-credit/credit-prive"
        locale={locale}
      />
      <Privatkredit locale={locale} />
    </Layout>
  );
}
