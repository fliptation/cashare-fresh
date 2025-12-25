import { Layout } from "../../../components/Layout.tsx";
import { SeoHead } from "../../../components/SeoHead.tsx";
import { InstitutionalInvestors } from "../../../components/pages/InstitutionalInvestors.tsx";
import type { Locale } from "../../../lib/i18n/index.ts";

export default function InstitutionalEN() {
  const locale: Locale = "en";

  return (
    <Layout locale={locale} currentPath="/en/invest/institutional">
      <SeoHead
        title="For Institutional Investors"
        description="Institutional investment opportunities in Swiss loans. Tailored solutions for pension funds, family offices and asset managers."
        canonicalPath="/en/invest/institutional"
        locale={locale}
      />
      <InstitutionalInvestors locale={locale} />
    </Layout>
  );
}
