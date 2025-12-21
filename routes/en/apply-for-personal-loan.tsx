import { Layout } from "../../components/Layout.tsx";
import { PrivatdarlehenBeantragen } from "../../components/pages/PrivatdarlehenBeantragen.tsx";
import type { Locale } from "../../lib/i18n/index.ts";

export default function ApplyForPersonalLoanEN() {
  const locale: Locale = "en";

  return (
    <Layout locale={locale}>
      <PrivatdarlehenBeantragen locale={locale} />
    </Layout>
  );
}
