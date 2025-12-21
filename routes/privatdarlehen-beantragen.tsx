import { Layout } from "../components/Layout.tsx";
import LoanApplyForm from "../islands/LoanApplyForm.tsx";
import type { Locale } from "../lib/i18n/index.ts";

export default function PrivatdarlehenBeantragenDE() {
  const locale: Locale = "de";

  return (
    <Layout locale={locale}>
      <LoanApplyForm locale={locale} />
    </Layout>
  );
}
