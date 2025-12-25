import { SeoHead } from "../../components/SeoHead.tsx";
import InvestorOnboarding from "../../islands/InvestorOnboarding.tsx";
import type { Locale } from "../../lib/i18n/index.ts";

export default function BecomeInvestorEN() {
  const locale: Locale = "en";

  return (
    <>
      <SeoHead
        title="Become an Investor"
        description="Become an investor at Cashare. Invest in Swiss loans and achieve attractive returns. For private investors and institutional investors."
        canonicalPath="/en/become-investor"
        locale={locale}
      />
      <InvestorOnboarding locale={locale} />
    </>
  );
}
