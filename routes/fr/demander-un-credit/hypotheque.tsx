import { Layout } from "../../../components/Layout.tsx";
import { Hypothek } from "../../../components/pages/Hypothek.tsx";
import type { Locale } from "../../../lib/i18n/index.ts";

export default function HypothequeFR() {
  const locale: Locale = "fr";

  return (
    <Layout locale={locale}>
      <Hypothek locale={locale} />
    </Layout>
  );
}
