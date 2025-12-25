import { SeoHead } from "../components/SeoHead.tsx";
import InvestorOnboarding from "../islands/InvestorOnboarding.tsx";
import type { Locale } from "../lib/i18n/index.ts";

export default function WerdeAnlegerDE() {
  const locale: Locale = "de";

  return (
    <>
      <SeoHead
        title="Werde Anleger"
        description="Werden Sie Investor bei Cashare. Investieren Sie in Schweizer Kredite und erzielen Sie attraktive Renditen. Für Privatanleger und institutionelle Investoren."
        canonicalPath="/werde-anleger"
        locale={locale}
      />
      <InvestorOnboarding locale={locale} />
    </>
  );
}
