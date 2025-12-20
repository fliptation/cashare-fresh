import { Layout } from "../../../components/Layout.tsx";
import { Privatkredit } from "../../../components/pages/Privatkredit.tsx";
import type { Locale } from "../../../lib/i18n/index.ts";

export default function PersonalLoanEN() {
  const locale: Locale = "en";

  return (
    <Layout locale={locale}>
      <Privatkredit locale={locale} />
    </Layout>
  );
}
