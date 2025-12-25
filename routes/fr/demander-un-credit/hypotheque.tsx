import { Layout } from "../../../components/Layout.tsx";
import { SeoHead } from "../../../components/SeoHead.tsx";
import { Hypothek } from "../../../components/pages/Hypothek.tsx";
import type { Locale } from "../../../lib/i18n/index.ts";

export default function HypothequeFR() {
  const locale: Locale = "fr";

  return (
    <Layout locale={locale} theme="borrowing">
      <SeoHead
        title="Demander une hypothèque"
        description="Hypothèque pour l'immobilier en Suisse. Financement pour maisons, immeubles ou propriétés commerciales. Demandez une hypothèque maintenant."
        canonicalPath="/fr/demander-un-credit/hypotheque"
        locale={locale}
      />
      <Hypothek locale={locale} />
    </Layout>
  );
}
