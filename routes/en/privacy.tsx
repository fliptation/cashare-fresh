import { Layout } from "../../components/Layout.tsx";
import { SeoHead } from "../../components/SeoHead.tsx";
import { Legal } from "../../components/pages/Legal.tsx";
import type { Locale } from "../../lib/i18n/index.ts";

export default function PrivacyEN() {
  const locale: Locale = "en";

  return (
    <Layout locale={locale} currentPath="/en/privacy">
      <SeoHead
        title="Privacy Policy"
        description="Cashare privacy policy. How we protect and process your data on the Swiss crowdlending platform."
        canonicalPath="/en/privacy"
        locale={locale}
      />
      <Legal locale={locale} page="datenschutz" />
    </Layout>
  );
}
