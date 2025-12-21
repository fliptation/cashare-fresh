import { Layout } from "../../components/Layout.tsx";
import { SeoHead } from "../../components/SeoHead.tsx";
import { PrivateInvestors } from "../../components/pages/PrivateInvestors.tsx";
import type { Locale } from "../../lib/i18n/index.ts";

export default function PrivatinvestorenDE() {
  const locale: Locale = "de";

  return (
    <Layout locale={locale}>
      <SeoHead
        title="Für Privatinvestoren"
        description="Investieren Sie als Privatperson in Schweizer Kredite. Ab CHF 100 pro Kredit. Attraktive Renditen, transparent und sicher."
        canonicalPath="/investieren/privatinvestoren"
        locale={locale}
      />
      <PrivateInvestors locale={locale} />
    </Layout>
  );
}
