import { Layout } from "../components/Layout.tsx";
import { SeoHead } from "../components/SeoHead.tsx";
import { Security } from "../components/pages/Security.tsx";
import type { Locale } from "../lib/i18n/index.ts";

export default function SicherheitDE() {
  const locale: Locale = "de";

  return (
    <Layout locale={locale} currentPath="/sicherheit">
      <SeoHead
        title="Sicherheit"
        description="Sicherheit bei Cashare: Wie wir Ihre Daten und Investitionen schützen. Erfahren Sie mehr über unsere Sicherheitsmassnahmen."
        canonicalPath="/sicherheit"
        locale={locale}
      />
      <Security locale={locale} />
    </Layout>
  );
}
