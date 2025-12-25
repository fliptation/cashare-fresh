import { Layout } from "../components/Layout.tsx";
import { SeoHead } from "../components/SeoHead.tsx";
import { KreditBeantragen } from "../components/pages/KreditBeantragen.tsx";
import type { Locale } from "../lib/i18n/index.ts";

export default function KreditBeanttragenDE() {
  const locale: Locale = "de";

  return (
    <Layout locale={locale} currentPath="/kredit-beantragen" theme="borrowing">
      <SeoHead
        title="Kredit beantragen"
        description="Beantragen Sie Ihren Kredit bei Cashare. Privatkredite, KMU-Kredite und Hypotheken zu fairen Konditionen. Schnelle Bearbeitung, transparente Prozesse."
        canonicalPath="/kredit-beantragen"
        locale={locale}
      />
      <KreditBeantragen locale={locale} />
    </Layout>
  );
}
