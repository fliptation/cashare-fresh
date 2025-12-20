import { Layout } from "../../../components/Layout.tsx";
import { Press } from "../../../components/pages/Press.tsx";
import type { Locale } from "../../../lib/i18n/index.ts";

export default function PressEN() {
  const locale: Locale = "en";

  return (
    <Layout locale={locale}>
      <Press locale={locale} />
    </Layout>
  );
}
