import { Layout } from "../../components/Layout.tsx";
import { SeoHead } from "../../components/SeoHead.tsx";
import { Legal } from "../../components/pages/Legal.tsx";
import type { Locale } from "../../lib/i18n/index.ts";

export default function CookiesFR() {
  const locale: Locale = "fr";

  return (
    <Layout locale={locale}>
      <SeoHead
        title="Politique des cookies"
        description="Politique des cookies de Cashare. Informations sur l'utilisation des cookies sur la plateforme suisse de crowdlending."
        canonicalPath="/fr/cookies"
        locale={locale}
      />
      <Legal locale={locale} page="cookies" />
    </Layout>
  );
}
