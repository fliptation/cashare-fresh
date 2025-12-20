import { Layout } from "../../../components/Layout.tsx";
import { Privatkredit } from "../../../components/pages/Privatkredit.tsx";
import type { Locale } from "../../../lib/i18n/index.ts";

export default function CreditPriveFR() {
  const locale: Locale = "fr";

  return (
    <Layout locale={locale}>
      <Privatkredit locale={locale} />
    </Layout>
  );
}
