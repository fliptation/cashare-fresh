import { Layout } from "../../../components/Layout.tsx";
import { SeoHead } from "../../../components/SeoHead.tsx";
import { HowItWorksSme } from "../../../components/pages/HowItWorksSme.tsx";
import type { Locale } from "../../../lib/i18n/index.ts";

export default function PmeHowItWorksFR() {
  const locale: Locale = "fr";

  return (
    <Layout locale={locale} currentPath="/fr/comment-ca-marche/pme">
      <SeoHead
        title="Crédit PME - Comment ça marche"
        description="Comment fonctionne un crédit PME chez Cashare. Financement rapide d'entreprise via crowdlending pour petites et moyennes entreprises."
        canonicalPath="/fr/comment-ca-marche/pme"
        locale={locale}
      />
      <HowItWorksSme locale={locale} />
    </Layout>
  );
}
