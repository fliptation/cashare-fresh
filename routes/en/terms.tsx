import { Layout } from "../../components/Layout.tsx";
import { SeoHead } from "../../components/SeoHead.tsx";
import { Legal } from "../../components/pages/Legal.tsx";
import type { Locale } from "../../lib/i18n/index.ts";

export default function TermsEN() {
  const locale: Locale = "en";

  return (
    <Layout locale={locale} currentPath="/en/terms">
      <SeoHead
        title="Terms and Conditions"
        description="Cashare terms and conditions. Terms of use for the Swiss crowdlending platform."
        canonicalPath="/en/terms"
        locale={locale}
      />
      <Legal locale={locale} page="agb" />
    </Layout>
  );
}
