import { Layout } from "../../components/Layout.tsx";
import { SeoHead } from "../../components/SeoHead.tsx";
import { KreditBeantragen } from "../../components/pages/KreditBeantragen.tsx";
import type { Locale } from "../../lib/i18n/index.ts";

export default function ApplyForCreditEN() {
  const locale: Locale = "en";

  return (
    <Layout locale={locale} currentPath="/en/apply-for-credit" theme="borrowing">
      <SeoHead
        title="Apply for Credit"
        description="Apply for your loan with Cashare. Personal loans, SME loans and mortgages at fair conditions. Fast processing, transparent processes."
        canonicalPath="/en/apply-for-credit"
        locale={locale}
      />
      <KreditBeantragen locale={locale} />
    </Layout>
  );
}
