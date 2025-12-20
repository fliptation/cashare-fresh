import { Layout } from "../../components/Layout.tsx";
import { Press } from "../../components/pages/Press.tsx";
import type { Locale } from "../../lib/i18n/index.ts";

export default function PresseDE() {
  const locale: Locale = "de";

  return (
    <Layout locale={locale}>
      <Press locale={locale} />
    </Layout>
  );
}
