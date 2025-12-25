import { Layout } from "../../components/Layout.tsx";
import { SeoHead } from "../../components/SeoHead.tsx";
import { Privatkredit } from "../../components/pages/Privatkredit.tsx";
import type { Locale } from "../../lib/i18n/index.ts";

export default function PrivatkreditDE() {
  const locale: Locale = "de";

  return (
    <Layout locale={locale} theme="borrowing">
      <SeoHead
        title="Privatkredit beantragen"
        description="Privatkredit von CHF 1'000 bis CHF 500'000 zu fairen Zinsen. Flexible Laufzeiten, schnelle Auszahlung. Jetzt unverbindlich anfragen bei Cashare."
        canonicalPath="/kredit-beantragen/privatkredit"
        locale={locale}
      />
      <Privatkredit locale={locale} />
    </Layout>
  );
}
