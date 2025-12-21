import { Layout } from "../components/Layout.tsx";
import { SeoHead } from "../components/SeoHead.tsx";
import SmeBulletApplyForm from "../islands/SmeBulletApplyForm.tsx";
import type { Locale } from "../lib/i18n/index.ts";

export default function KmuKurzkreditBeantragenDE() {
  const locale: Locale = "de";

  return (
    <Layout locale={locale}>
      <SeoHead
        title="KMU-Kurzkredit beantragen"
        description="Beantragen Sie jetzt Ihren KMU-Kurzkredit bei Cashare. Schnelle kurzfristige Finanzierung für Unternehmen."
        canonicalPath="/kmu-kurzkredit-beantragen"
        locale={locale}
      />
      <SmeBulletApplyForm locale={locale} />
    </Layout>
  );
}
