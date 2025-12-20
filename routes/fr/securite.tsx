import { Layout } from "../../components/Layout.tsx";
import { Security } from "../../components/pages/Security.tsx";
import type { Locale } from "../../lib/i18n/index.ts";

export default function SecuriteFR() {
  const locale: Locale = "fr";

  return (
    <Layout locale={locale}>
      <Security locale={locale} />
    </Layout>
  );
}
