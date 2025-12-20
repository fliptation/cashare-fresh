import { Layout } from "../../components/Layout.tsx";
import { Privatkredit } from "../../components/pages/Privatkredit.tsx";
import type { Locale } from "../../lib/i18n/index.ts";

export default function PrivatkreditDE() {
  const locale: Locale = "de";

  return (
    <Layout locale={locale}>
      <Privatkredit locale={locale} />
    </Layout>
  );
}
