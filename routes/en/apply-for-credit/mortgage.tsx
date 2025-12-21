import { Layout } from "../../../components/Layout.tsx";
import { SeoHead } from "../../../components/SeoHead.tsx";
import { Hypothek } from "../../../components/pages/Hypothek.tsx";
import type { Locale } from "../../../lib/i18n/index.ts";

export default function MortgageEN() {
  const locale: Locale = "en";

  return (
    <Layout locale={locale}>
      <SeoHead
        title="Apply for Mortgage"
        description="Mortgage for real estate in Switzerland. Financing for homes, apartment buildings or commercial properties. Apply for a mortgage now."
        canonicalPath="/en/apply-for-credit/mortgage"
        locale={locale}
      />
      <Hypothek locale={locale} />
    </Layout>
  );
}
