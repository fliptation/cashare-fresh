import { Layout } from "../../components/Layout.tsx";
import { SeoHead } from "../../components/SeoHead.tsx";
import { Hypothek } from "../../components/pages/Hypothek.tsx";
import type { Locale } from "../../lib/i18n/index.ts";

export default function HypothekenDE() {
  const locale: Locale = "de";

  return (
    <Layout locale={locale} theme="borrowing">
      <SeoHead
        title="Hypothek beantragen"
        description="Hypothekarkredit für Immobilien in der Schweiz. Finanzierung für Eigenheim, Mehrfamilienhaus oder Gewerbeliegenschaften. Jetzt Hypothek anfragen."
        canonicalPath="/kredit-beantragen/hypotheken"
        locale={locale}
      />
      <Hypothek locale={locale} />
    </Layout>
  );
}
