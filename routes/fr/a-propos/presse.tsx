import { Layout } from "../../../components/Layout.tsx";
import { Press } from "../../../components/pages/Press.tsx";
import type { Locale } from "../../../lib/i18n/index.ts";

export default function PresseFR() {
  const locale: Locale = "fr";

  return (
    <Layout locale={locale}>
      <Press locale={locale} />
    </Layout>
  );
}
