import { Layout } from "../../components/Layout.tsx";
import { Investieren } from "../../components/pages/Investieren.tsx";
import type { Locale } from "../../lib/i18n/index.ts";

export default function InvestEN() {
  const locale: Locale = "en";

  return (
    <Layout locale={locale}>
      <Investieren locale={locale} />
    </Layout>
  );
}
