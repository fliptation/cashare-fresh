import { Layout } from "../../../components/Layout.tsx";
import { KmuKredit } from "../../../components/pages/KmuKredit.tsx";
import type { Locale } from "../../../lib/i18n/index.ts";

export default function SmeLoanEN() {
  const locale: Locale = "en";

  return (
    <Layout locale={locale}>
      <KmuKredit locale={locale} />
    </Layout>
  );
}
