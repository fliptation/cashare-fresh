import { Layout } from "../components/Layout.tsx";
import { SeoHead } from "../components/SeoHead.tsx";
import { UeberUns } from "../components/pages/UeberUns.tsx";
import type { Locale } from "../lib/i18n/index.ts";

export default function UeberUnsDE() {
  const locale: Locale = "de";

  return (
    <Layout locale={locale} currentPath="/ueber-uns">
      <SeoHead
        title="Über uns"
        description="Cashare ist die erste Crowdlending-Plattform der Schweiz. Seit 2008 verbinden wir Kreditnehmer und Investoren. Erfahren Sie mehr über unser Unternehmen."
        canonicalPath="/ueber-uns"
        locale={locale}
      />
      <UeberUns locale={locale} />
    </Layout>
  );
}
