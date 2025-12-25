import { Layout } from "../../components/Layout.tsx";
import { SeoHead } from "../../components/SeoHead.tsx";
import { KreditBeantragen } from "../../components/pages/KreditBeantragen.tsx";
import type { Locale } from "../../lib/i18n/index.ts";

export default function DemanderCreditFR() {
  const locale: Locale = "fr";

  return (
    <Layout locale={locale} theme="borrowing">
      <SeoHead
        title="Demander un crédit"
        description="Demandez votre crédit chez Cashare. Crédits privés, crédits PME et hypothèques à des conditions équitables. Traitement rapide, processus transparents."
        canonicalPath="/fr/demander-un-credit"
        locale={locale}
      />
      <KreditBeantragen locale={locale} />
    </Layout>
  );
}
