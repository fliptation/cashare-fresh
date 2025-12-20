import { Layout } from "../../components/Layout.tsx";
import { HowItWorksPrivate } from "../../components/pages/HowItWorksPrivate.tsx";
import type { Locale } from "../../lib/i18n/index.ts";

export default function PrivatkreditHowItWorksDE() {
  const locale: Locale = "de";

  return (
    <Layout locale={locale}>
      <HowItWorksPrivate locale={locale} />
    </Layout>
  );
}
