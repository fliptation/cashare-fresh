import { Layout } from "../../../components/Layout.tsx";
import { SeoHead } from "../../../components/SeoHead.tsx";
import { Press } from "../../../components/pages/Press.tsx";
import type { Locale } from "../../../lib/i18n/index.ts";

export default function PresseFR() {
  const locale: Locale = "fr";

  return (
    <Layout locale={locale} currentPath="/fr/a-propos/presse">
      <SeoHead
        title="Presse"
        description="Cashare dans les médias: Communiqués de presse, contact média et matériel de presse. Dernières actualités sur la plateforme suisse de crowdlending."
        canonicalPath="/fr/a-propos/presse"
        locale={locale}
      />
      <Press locale={locale} />
    </Layout>
  );
}
