import { Layout } from "../../components/Layout.tsx";
import { Security } from "../../components/pages/Security.tsx";
import type { Locale } from "../../lib/i18n/index.ts";

export default function SecurityEN() {
  const locale: Locale = "en";

  return (
    <Layout locale={locale}>
      <Security locale={locale} />
    </Layout>
  );
}
