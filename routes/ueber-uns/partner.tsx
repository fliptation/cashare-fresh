import { Layout } from "../../components/Layout.tsx";
import { SeoHead } from "../../components/SeoHead.tsx";
import { Partners } from "../../components/pages/Partners.tsx";
import type { Locale } from "../../lib/i18n/index.ts";

export default function PartnerDE() {
  const locale: Locale = "de";

  return (
    <Layout locale={locale}>
      <SeoHead
        title="Partner"
        description="Cashare Partner: Unsere strategischen Partnerschaften und Kooperationen. Gemeinsam für bessere Finanzlösungen in der Schweiz."
        canonicalPath="/ueber-uns/partner"
        locale={locale}
      />
      <Partners locale={locale} />
    </Layout>
  );
}
