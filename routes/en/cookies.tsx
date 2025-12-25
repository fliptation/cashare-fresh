import { Layout } from "../../components/Layout.tsx";
import { SeoHead } from "../../components/SeoHead.tsx";
import { Legal } from "../../components/pages/Legal.tsx";
import type { Locale } from "../../lib/i18n/index.ts";

export default function CookiesEN() {
  const locale: Locale = "en";

  return (
    <Layout locale={locale} currentPath="/en/cookies">
      <SeoHead
        title="Cookie Policy"
        description="Cashare cookie policy. Information about the use of cookies on the Swiss crowdlending platform."
        canonicalPath="/en/cookies"
        locale={locale}
      />
      <Legal locale={locale} page="cookies" />
    </Layout>
  );
}
