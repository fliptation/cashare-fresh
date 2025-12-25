import { Layout } from "../components/Layout.tsx";
import { SeoHead } from "../components/SeoHead.tsx";
import { Legal } from "../components/pages/Legal.tsx";
import type { Locale } from "../lib/i18n/index.ts";

export default function CookiesDE() {
  const locale: Locale = "de";

  return (
    <Layout locale={locale} currentPath="/cookies">
      <SeoHead
        title="Cookie-Richtlinie"
        description="Cookie-Richtlinie von Cashare. Informationen zur Verwendung von Cookies auf der Schweizer Crowdlending-Plattform."
        canonicalPath="/cookies"
        locale={locale}
      />
      <Legal locale={locale} page="cookies" />
    </Layout>
  );
}
