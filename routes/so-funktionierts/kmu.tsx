import { Layout } from "../../components/Layout.tsx";
import { SeoHead } from "../../components/SeoHead.tsx";
import { HowItWorksSme } from "../../components/pages/HowItWorksSme.tsx";
import type { Locale } from "../../lib/i18n/index.ts";

export default function KmuHowItWorksDE() {
  const locale: Locale = "de";

  return (
    <Layout locale={locale} currentPath="/so-funktionierts/kmu">
      <SeoHead
        title="KMU-Kredit - So funktioniert's"
        description="So funktioniert ein KMU-Kredit bei Cashare. Schnelle Unternehmensfinanzierung über Crowdlending für kleine und mittlere Unternehmen."
        canonicalPath="/so-funktionierts/kmu"
        locale={locale}
      />
      <HowItWorksSme locale={locale} />
    </Layout>
  );
}
