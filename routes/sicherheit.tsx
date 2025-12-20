import { Layout } from "../components/Layout.tsx";
import { Security } from "../components/pages/Security.tsx";
import type { Locale } from "../lib/i18n/index.ts";

export default function SicherheitDE() {
  const locale: Locale = "de";

  return (
    <Layout locale={locale}>
      <Security locale={locale} />
    </Layout>
  );
}
