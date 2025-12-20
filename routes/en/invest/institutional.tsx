import { Layout } from "../../../components/Layout.tsx";
import { InstitutionalInvestors } from "../../../components/pages/InstitutionalInvestors.tsx";
import type { Locale } from "../../../lib/i18n/index.ts";

export default function InstitutionalEN() {
  const locale: Locale = "en";

  return (
    <Layout locale={locale}>
      <InstitutionalInvestors locale={locale} />
    </Layout>
  );
}
