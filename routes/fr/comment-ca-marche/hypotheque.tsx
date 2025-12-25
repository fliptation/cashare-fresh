import { Layout } from "../../../components/Layout.tsx";
import { SeoHead } from "../../../components/SeoHead.tsx";
import { HowItWorksHypo } from "../../../components/pages/HowItWorksHypo.tsx";
import type { Locale } from "../../../lib/i18n/index.ts";

export default function HypothequeHowItWorksFR() {
  const locale: Locale = "fr";

  return (
    <Layout locale={locale} currentPath="/fr/comment-ca-marche/hypotheque">
      <SeoHead
        title="Hypothèque - Comment ça marche"
        description="Comment fonctionne une hypothèque chez Cashare. Financement immobilier alternatif via crowdlending en Suisse."
        canonicalPath="/fr/comment-ca-marche/hypotheque"
        locale={locale}
      />
      <HowItWorksHypo locale={locale} />
    </Layout>
  );
}
