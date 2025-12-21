import { Layout } from "../components/Layout.tsx";
import { SeoHead } from "../components/SeoHead.tsx";
import { HowItWorks } from "../components/pages/HowItWorks.tsx";
import type { Locale } from "../lib/i18n/index.ts";

export default function SoFunktioniertsDE() {
  const locale: Locale = "de";

  return (
    <Layout locale={locale}>
      <SeoHead
        title="So funktioniert's"
        description="Erfahren Sie, wie Crowdlending bei Cashare funktioniert. Einfacher Prozess für Kreditnehmer und Anleger auf der Schweizer Plattform."
        canonicalPath="/so-funktionierts"
        locale={locale}
      />
      <HowItWorks locale={locale} />
    </Layout>
  );
}
