import { Layout } from "../../../components/Layout.tsx";
import { SeoHead } from "../../../components/SeoHead.tsx";
import { Partners } from "../../../components/pages/Partners.tsx";
import type { Locale } from "../../../lib/i18n/index.ts";

export default function PartnersEN() {
  const locale: Locale = "en";

  return (
    <Layout locale={locale}>
      <SeoHead
        title="Partners"
        description="Cashare partners: Our strategic partnerships and cooperations. Together for better financial solutions in Switzerland."
        canonicalPath="/en/about/partners"
        locale={locale}
      />
      <Partners locale={locale} />
    </Layout>
  );
}
