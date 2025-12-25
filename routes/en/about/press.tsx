import { Layout } from "../../../components/Layout.tsx";
import { SeoHead } from "../../../components/SeoHead.tsx";
import { Press } from "../../../components/pages/Press.tsx";
import type { Locale } from "../../../lib/i18n/index.ts";

export default function PressEN() {
  const locale: Locale = "en";

  return (
    <Layout locale={locale} currentPath="/en/about/press">
      <SeoHead
        title="Press"
        description="Cashare in the media: Press releases, media contact and press material. Latest news about the Swiss crowdlending platform."
        canonicalPath="/en/about/press"
        locale={locale}
      />
      <Press locale={locale} />
    </Layout>
  );
}
