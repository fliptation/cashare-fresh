import { Layout } from "../../components/Layout.tsx";
import { SeoHead } from "../../components/SeoHead.tsx";
import { InstitutionalInvestors } from "../../components/pages/InstitutionalInvestors.tsx";
import type { Locale } from "../../lib/i18n/index.ts";

export default function InstitutionelleDE() {
  const locale: Locale = "de";

  return (
    <Layout locale={locale}>
      <SeoHead
        title="Für institutionelle Investoren"
        description="Institutionelle Anlagemöglichkeiten in Schweizer Kredite. Massgeschneiderte Lösungen für Pensionskassen, Family Offices und Vermögensverwalter."
        canonicalPath="/investieren/institutionelle"
        locale={locale}
      />
      <InstitutionalInvestors locale={locale} />
    </Layout>
  );
}
