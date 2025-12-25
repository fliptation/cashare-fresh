import { Layout } from "../../../components/Layout.tsx";
import { SeoHead } from "../../../components/SeoHead.tsx";
import { Privatkredit } from "../../../components/pages/Privatkredit.tsx";
import type { Locale } from "../../../lib/i18n/index.ts";

export default function PersonalLoanEN() {
  const locale: Locale = "en";

  return (
    <Layout locale={locale} theme="borrowing">
      <SeoHead
        title="Apply for Personal Loan"
        description="Personal loan from CHF 1,000 to CHF 500,000 at fair interest rates. Flexible terms, fast payout. Apply now at Cashare."
        canonicalPath="/en/apply-for-credit/personal-loan"
        locale={locale}
      />
      <Privatkredit locale={locale} />
    </Layout>
  );
}
