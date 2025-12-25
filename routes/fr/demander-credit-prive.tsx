import { Layout } from "../../components/Layout.tsx";
import { SeoHead } from "../../components/SeoHead.tsx";
import LoanApplyForm from "../../islands/LoanApplyForm.tsx";
import type { Locale } from "../../lib/i18n/index.ts";

export default function DemanderCreditPriveFR() {
  const locale: Locale = "fr";

  return (
    <Layout locale={locale} currentPath="/fr/demander-credit-prive">
      <SeoHead
        title="Demander un crédit privé"
        description="Demandez votre crédit privé chez Cashare maintenant. Demande de crédit rapide en ligne sur la plateforme suisse de crowdlending."
        canonicalPath="/fr/demander-credit-prive"
        locale={locale}
      />
      <LoanApplyForm locale={locale} />
    </Layout>
  );
}
