import { Layout } from "../components/Layout.tsx";
import { Legal } from "../components/pages/Legal.tsx";
import type { Locale } from "../lib/i18n/index.ts";

export default function CookiesDE() {
  const locale: Locale = "de";

  return (
    <Layout locale={locale}>
      <Legal locale={locale} page="cookies" />
    </Layout>
  );
}
