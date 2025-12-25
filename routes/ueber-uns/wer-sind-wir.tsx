import { Layout } from "../../components/Layout.tsx";
import { SeoHead } from "../../components/SeoHead.tsx";
import { WhoWeAre } from "../../components/pages/WhoWeAre.tsx";
import type { Locale } from "../../lib/i18n/index.ts";

export default function WerSindWirDE() {
  const locale: Locale = "de";

  return (
    <Layout locale={locale} currentPath="/ueber-uns/wer-sind-wir">
      <SeoHead
        title="Wer sind wir"
        description="Das Cashare Team: Lernen Sie die Menschen hinter der Schweizer Crowdlending-Plattform kennen. Erfahrung, Vision und Werte."
        canonicalPath="/ueber-uns/wer-sind-wir"
        locale={locale}
      />
      <WhoWeAre locale={locale} />
    </Layout>
  );
}
