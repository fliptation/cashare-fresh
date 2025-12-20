import { Layout } from "../../../components/Layout.tsx";
import { Partners } from "../../../components/pages/Partners.tsx";
import type { Locale } from "../../../lib/i18n/index.ts";

export default function PartnersEN() {
  const locale: Locale = "en";

  return (
    <Layout locale={locale}>
      <Partners locale={locale} />
    </Layout>
  );
}
