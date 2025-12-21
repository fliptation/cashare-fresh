import { SeoHead } from "../components/SeoHead.tsx";
import LoginForm from "../islands/LoginForm.tsx";
import type { Locale } from "../lib/i18n/index.ts";

export default function LoginDE() {
  const locale: Locale = "de";

  return (
    <>
      <SeoHead
        title="Login"
        description="Melden Sie sich bei Ihrem Cashare-Konto an. Zugang zu Ihren Investitionen und Krediten auf der Schweizer Crowdlending-Plattform."
        canonicalPath="/login"
        locale={locale}
      />
      <LoginForm locale={locale} />
    </>
  );
}
