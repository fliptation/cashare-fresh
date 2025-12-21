import { Layout } from "../../../components/Layout.tsx";
import { SeoHead } from "../../../components/SeoHead.tsx";
import { HowItWorksPrivate } from "../../../components/pages/HowItWorksPrivate.tsx";
import type { Locale } from "../../../lib/i18n/index.ts";

export default function CreditPriveHowItWorksFR() {
  const locale: Locale = "fr";

  return (
    <Layout locale={locale}>
      <SeoHead
        title="Crédit privé - Comment ça marche"
        description="Comment fonctionne un crédit privé chez Cashare. Processus simple de la demande au versement sur la plateforme suisse de crowdlending."
        canonicalPath="/fr/comment-ca-marche/credit-prive"
        locale={locale}
      />
      <HowItWorksPrivate locale={locale} />
    </Layout>
  );
}
