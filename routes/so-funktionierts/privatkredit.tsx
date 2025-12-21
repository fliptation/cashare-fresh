import { Layout } from "../../components/Layout.tsx";
import { SeoHead } from "../../components/SeoHead.tsx";
import { HowItWorksPrivate } from "../../components/pages/HowItWorksPrivate.tsx";
import type { Locale } from "../../lib/i18n/index.ts";

export default function PrivatkreditHowItWorksDE() {
  const locale: Locale = "de";

  return (
    <Layout locale={locale}>
      <SeoHead
        title="Privatkredit - So funktioniert's"
        description="So funktioniert ein Privatkredit bei Cashare. Einfacher Ablauf vom Antrag bis zur Auszahlung auf der Schweizer Crowdlending-Plattform."
        canonicalPath="/so-funktionierts/privatkredit"
        locale={locale}
      />
      <HowItWorksPrivate locale={locale} />
    </Layout>
  );
}
