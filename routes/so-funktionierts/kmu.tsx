import { Layout } from "../../components/Layout.tsx";
import { HowItWorksSme } from "../../components/pages/HowItWorksSme.tsx";
import type { Locale } from "../../lib/i18n/index.ts";

export default function KmuHowItWorksDE() {
  const locale: Locale = "de";

  return (
    <Layout locale={locale}>
      <HowItWorksSme locale={locale} />
    </Layout>
  );
}
