import { Layout } from "../components/Layout.tsx";
import SmeBulletApplyForm from "../islands/SmeBulletApplyForm.tsx";
import type { Locale } from "../lib/i18n/index.ts";

export default function KmuKurzkreditBeantragenDE() {
  const locale: Locale = "de";

  return (
    <Layout locale={locale}>
      <SmeBulletApplyForm locale={locale} />
    </Layout>
  );
}
