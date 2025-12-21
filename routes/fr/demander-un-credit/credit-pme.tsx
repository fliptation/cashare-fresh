import { Layout } from "../../../components/Layout.tsx";
import { SeoHead } from "../../../components/SeoHead.tsx";
import { KmuKredit } from "../../../components/pages/KmuKredit.tsx";
import type { Locale } from "../../../lib/i18n/index.ts";

export default function CreditPmeFR() {
  const locale: Locale = "fr";

  return (
    <Layout locale={locale}>
      <SeoHead
        title="Demander un crédit PME"
        description="Crédit d'entreprise pour les PME suisses de CHF 50'000 à CHF 5 millions. Financement flexible pour votre entreprise. Traitement rapide chez Cashare."
        canonicalPath="/fr/demander-un-credit/credit-pme"
        locale={locale}
      />
      <KmuKredit locale={locale} />
    </Layout>
  );
}
