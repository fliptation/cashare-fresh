import { Layout } from "../../components/Layout.tsx";
import { SeoHead } from "../../components/SeoHead.tsx";
import { Security } from "../../components/pages/Security.tsx";
import type { Locale } from "../../lib/i18n/index.ts";

export default function SecuriteFR() {
  const locale: Locale = "fr";

  return (
    <Layout locale={locale}>
      <SeoHead
        title="Sécurité"
        description="Sécurité chez Cashare: Comment nous protégeons vos données et investissements. En savoir plus sur nos mesures de sécurité."
        canonicalPath="/fr/securite"
        locale={locale}
      />
      <Security locale={locale} />
    </Layout>
  );
}
