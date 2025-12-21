import { Layout } from "../components/Layout.tsx";
import SmeApplyForm from "../islands/SmeApplyForm.tsx";
import type { Locale } from "../lib/i18n/index.ts";

export default function KmuKreditBeantragenDE() {
  const locale: Locale = "de";

  return (
    <Layout locale={locale}>
      <SmeApplyForm locale={locale} />
    </Layout>
  );
}
