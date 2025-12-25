import { Layout } from "../../../components/Layout.tsx";
import { SeoHead } from "../../../components/SeoHead.tsx";
import { HowItWorksSme } from "../../../components/pages/HowItWorksSme.tsx";
import type { Locale } from "../../../lib/i18n/index.ts";

export default function SmeHowItWorksEN() {
  const locale: Locale = "en";

  return (
    <Layout locale={locale} currentPath="/en/how-it-works/sme">
      <SeoHead
        title="SME Loans - How It Works"
        description="How SME loans work at Cashare. Fast business financing through crowdlending for small and medium enterprises."
        canonicalPath="/en/how-it-works/sme"
        locale={locale}
      />
      <HowItWorksSme locale={locale} />
    </Layout>
  );
}
