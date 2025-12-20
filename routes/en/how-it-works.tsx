import { Layout } from "../../components/Layout.tsx";
import { HowItWorks } from "../../components/pages/HowItWorks.tsx";
import type { Locale } from "../../lib/i18n/index.ts";

export default function HowItWorksEN() {
  const locale: Locale = "en";

  return (
    <Layout locale={locale}>
      <HowItWorks locale={locale} />
    </Layout>
  );
}
