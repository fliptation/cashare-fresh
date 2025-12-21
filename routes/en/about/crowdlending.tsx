import { Layout } from "../../../components/Layout.tsx";
import { SeoHead } from "../../../components/SeoHead.tsx";
import { Crowdlending } from "../../../components/pages/Crowdlending.tsx";
import type { Locale } from "../../../lib/i18n/index.ts";

export default function CrowdlendingEN() {
  const locale: Locale = "en";

  return (
    <Layout locale={locale}>
      <SeoHead
        title="What is Crowdlending?"
        description="Crowdlending explained: How does peer-to-peer lending work in Switzerland? Learn all about this alternative financing method at Cashare."
        canonicalPath="/en/about/crowdlending"
        locale={locale}
      />
      <Crowdlending locale={locale} />
    </Layout>
  );
}
