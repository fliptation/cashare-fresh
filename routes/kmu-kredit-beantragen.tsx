import { Layout } from "../components/Layout.tsx";
import { SeoHead } from "../components/SeoHead.tsx";
import SmeApplyForm from "../islands/SmeApplyForm.tsx";
import type { Locale } from "../lib/i18n/index.ts";

export default function KmuKreditBeantragenDE() {
  const locale: Locale = "de";

  return (
    <Layout locale={locale}>
      <SeoHead
        title="KMU-Kredit beantragen"
        description="Beantragen Sie jetzt Ihren KMU-Kredit bei Cashare. Schnelle Unternehmensfinanzierung auf der Schweizer Crowdlending-Plattform."
        canonicalPath="/kmu-kredit-beantragen"
        locale={locale}
      />
      <SmeApplyForm locale={locale} />
    </Layout>
  );
}
