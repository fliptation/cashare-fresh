import { Layout } from "../../components/Layout.tsx";
import { Partners } from "../../components/pages/Partners.tsx";
import type { Locale } from "../../lib/i18n/index.ts";

export default function PartnerDE() {
  const locale: Locale = "de";

  return (
    <Layout locale={locale}>
      <Partners locale={locale} />
    </Layout>
  );
}
