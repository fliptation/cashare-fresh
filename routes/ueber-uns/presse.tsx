import { Layout } from "../../components/Layout.tsx";
import { SeoHead } from "../../components/SeoHead.tsx";
import { Press } from "../../components/pages/Press.tsx";
import type { Locale } from "../../lib/i18n/index.ts";

export default function PresseDE() {
  const locale: Locale = "de";

  return (
    <Layout locale={locale}>
      <SeoHead
        title="Presse"
        description="Cashare in den Medien: Pressemitteilungen, Medienkontakt und Pressematerial. Aktuelle News zur Schweizer Crowdlending-Plattform."
        canonicalPath="/ueber-uns/presse"
        locale={locale}
      />
      <Press locale={locale} />
    </Layout>
  );
}
