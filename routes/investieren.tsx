import { Layout } from "../components/Layout.tsx";
import { SeoHead } from "../components/SeoHead.tsx";
import { Investieren } from "../components/pages/Investieren.tsx";
import type { Locale } from "../lib/i18n/index.ts";

export default function InvestierenDE() {
  const locale: Locale = "de";

  return (
    <Layout locale={locale} currentPath="/investieren">
      <SeoHead
        title="In Kredite investieren"
        description="Investieren Sie direkt in Schweizer Kredite. Attraktive Renditen, diversifiziertes Portfolio. Für Privatanleger und institutionelle Investoren."
        canonicalPath="/investieren"
        locale={locale}
      />
      <Investieren locale={locale} />
    </Layout>
  );
}
