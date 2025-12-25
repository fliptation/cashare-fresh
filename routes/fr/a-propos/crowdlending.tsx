import { Layout } from "../../../components/Layout.tsx";
import { SeoHead } from "../../../components/SeoHead.tsx";
import { Crowdlending } from "../../../components/pages/Crowdlending.tsx";
import type { Locale } from "../../../lib/i18n/index.ts";

export default function CrowdlendingFR() {
  const locale: Locale = "fr";

  return (
    <Layout locale={locale} currentPath="/fr/a-propos/crowdlending">
      <SeoHead
        title="Crowdlending"
        description="Qu'est-ce que le crowdlending? Découvrez le prêt participatif et comment Cashare met en relation investisseurs et emprunteurs en Suisse."
        canonicalPath="/fr/a-propos/crowdlending"
        locale={locale}
      />
      <Crowdlending locale={locale} />
    </Layout>
  );
}
