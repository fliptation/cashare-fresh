import { Layout } from "../../components/Layout.tsx";
import { PrivateInvestors } from "../../components/pages/PrivateInvestors.tsx";
import type { Locale } from "../../lib/i18n/index.ts";

export default function PrivatinvestorenDE() {
  const locale: Locale = "de";

  return (
    <Layout locale={locale}>
      <PrivateInvestors locale={locale} />
    </Layout>
  );
}
