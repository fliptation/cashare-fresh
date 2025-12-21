import { Layout } from "../../components/Layout.tsx";
import LoanApplyForm from "../../islands/LoanApplyForm.tsx";
import type { Locale } from "../../lib/i18n/index.ts";

export default function ApplyForPersonalLoanEN() {
  const locale: Locale = "en";

  return (
    <Layout locale={locale}>
      <LoanApplyForm locale={locale} />
    </Layout>
  );
}
