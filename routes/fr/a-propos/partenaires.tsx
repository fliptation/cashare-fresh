import { Layout } from "../../../components/Layout.tsx";
import { SeoHead } from "../../../components/SeoHead.tsx";
import { Partners } from "../../../components/pages/Partners.tsx";
import type { Locale } from "../../../lib/i18n/index.ts";

export default function PartenairesFR() {
  const locale: Locale = "fr";

  return (
    <Layout locale={locale} currentPath="/fr/a-propos/partenaires">
      <SeoHead
        title="Partenaires"
        description="Partenaires Cashare: Nos partenariats stratégiques et coopérations. Ensemble pour de meilleures solutions financières en Suisse."
        canonicalPath="/fr/a-propos/partenaires"
        locale={locale}
      />
      <Partners locale={locale} />
    </Layout>
  );
}
