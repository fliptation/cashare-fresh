import { Layout } from "../../components/Layout.tsx";
import { Legal } from "../../components/pages/Legal.tsx";
import type { Locale } from "../../lib/i18n/index.ts";

export default function CookiesFR() {
  const locale: Locale = "fr";

  return (
    <Layout locale={locale}>
      <Legal locale={locale} page="cookies" />
    </Layout>
  );
}
