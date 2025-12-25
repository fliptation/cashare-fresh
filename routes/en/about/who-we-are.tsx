import { Layout } from "../../../components/Layout.tsx";
import { SeoHead } from "../../../components/SeoHead.tsx";
import { WhoWeAre } from "../../../components/pages/WhoWeAre.tsx";
import type { Locale } from "../../../lib/i18n/index.ts";

export default function WhoWeAreEN() {
  const locale: Locale = "en";

  return (
    <Layout locale={locale} currentPath="/en/about/who-we-are">
      <SeoHead
        title="Who We Are"
        description="The Cashare team: Meet the people behind the Swiss crowdlending platform. Experience, vision and values."
        canonicalPath="/en/about/who-we-are"
        locale={locale}
      />
      <WhoWeAre locale={locale} />
    </Layout>
  );
}
