import { Layout } from "../../components/Layout.tsx";
import { SeoHead } from "../../components/SeoHead.tsx";
import { Crowdlending } from "../../components/pages/Crowdlending.tsx";
import type { Locale } from "../../lib/i18n/index.ts";

export default function CrowdlendingDE() {
  const locale: Locale = "de";

  return (
    <Layout locale={locale} currentPath="/ueber-uns/crowdlending">
      <SeoHead
        title="Was ist Crowdlending?"
        description="Crowdlending erklärt: Wie funktioniert Peer-to-Peer-Kredit in der Schweiz? Erfahren Sie alles über die alternative Finanzierungsform bei Cashare."
        canonicalPath="/ueber-uns/crowdlending"
        locale={locale}
      />
      <Crowdlending locale={locale} />
    </Layout>
  );
}
