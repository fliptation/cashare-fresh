import { Layout } from "../../../components/Layout.tsx";
import { SeoHead } from "../../../components/SeoHead.tsx";
import { WhoWeAre } from "../../../components/pages/WhoWeAre.tsx";
import type { Locale } from "../../../lib/i18n/index.ts";

export default function QuiSommesNousFR() {
  const locale: Locale = "fr";

  return (
    <Layout locale={locale} currentPath="/fr/a-propos/qui-sommes-nous">
      <SeoHead
        title="Qui sommes-nous"
        description="L'équipe Cashare: Rencontrez les personnes derrière la plateforme suisse de crowdlending. Expérience, vision et valeurs."
        canonicalPath="/fr/a-propos/qui-sommes-nous"
        locale={locale}
      />
      <WhoWeAre locale={locale} />
    </Layout>
  );
}
