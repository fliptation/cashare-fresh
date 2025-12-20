import { Layout } from "../../components/Layout.tsx";
import { KreditBeantragen } from "../../components/pages/KreditBeantragen.tsx";
import type { Locale } from "../../lib/i18n/index.ts";

export default function ApplyForCreditEN() {
  const locale: Locale = "en";

  return (
    <Layout locale={locale}>
      <KreditBeantragen locale={locale} />
    </Layout>
  );
}
