import { Layout } from "../../../components/Layout.tsx";
import { SeoHead } from "../../../components/SeoHead.tsx";
import { KmuKredit } from "../../../components/pages/KmuKredit.tsx";
import type { Locale } from "../../../lib/i18n/index.ts";

export default function SmeLoanEN() {
  const locale: Locale = "en";

  return (
    <Layout locale={locale}>
      <SeoHead
        title="Apply for SME Loan"
        description="Business loan for Swiss SMEs from CHF 50,000 to CHF 5 million. Flexible financing for your company. Fast processing at Cashare."
        canonicalPath="/en/apply-for-credit/sme-loan"
        locale={locale}
      />
      <KmuKredit locale={locale} />
    </Layout>
  );
}
