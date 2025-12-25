import { SeoHead } from "../../components/SeoHead.tsx";
import InvestorOnboarding from "../../islands/InvestorOnboarding.tsx";
import type { Locale } from "../../lib/i18n/index.ts";

export default function DevenirInvestisseurFR() {
  const locale: Locale = "fr";

  return (
    <>
      <SeoHead
        title="Devenir Investisseur"
        description="Devenez investisseur chez Cashare. Investissez dans des crédits suisses et obtenez des rendements attractifs. Pour les investisseurs privés et institutionnels."
        canonicalPath="/fr/devenir-investisseur"
        locale={locale}
      />
      <InvestorOnboarding locale={locale} />
    </>
  );
}
