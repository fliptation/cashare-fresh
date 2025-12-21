import { Layout } from "../components/Layout.tsx";
import { SeoHead } from "../components/SeoHead.tsx";
import LoanApplyForm from "../islands/LoanApplyForm.tsx";
import type { Locale } from "../lib/i18n/index.ts";

export default function PrivatdarlehenBeantragenDE() {
  const locale: Locale = "de";

  return (
    <Layout locale={locale}>
      <SeoHead
        title="Privatdarlehen beantragen"
        description="Beantragen Sie jetzt Ihr Privatdarlehen bei Cashare. Schnelle Online-Kreditanfrage auf der Schweizer Crowdlending-Plattform."
        canonicalPath="/privatdarlehen-beantragen"
        locale={locale}
      />
      <LoanApplyForm locale={locale} />
    </Layout>
  );
}
