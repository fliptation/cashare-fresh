import { Layout } from "../../components/Layout.tsx";
import { SeoHead } from "../../components/SeoHead.tsx";
import LoanApplyForm from "../../islands/LoanApplyForm.tsx";
import type { Locale } from "../../lib/i18n/index.ts";

export default function ApplyForPersonalLoanEN() {
  const locale: Locale = "en";

  return (
    <Layout locale={locale} currentPath="/en/apply-for-personal-loan">
      <SeoHead
        title="Apply for Personal Loan"
        description="Apply for your personal loan at Cashare now. Quick online loan application on the Swiss crowdlending platform."
        canonicalPath="/en/apply-for-personal-loan"
        locale={locale}
      />
      <LoanApplyForm locale={locale} />
    </Layout>
  );
}
