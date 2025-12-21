import { SeoHead } from "../../components/SeoHead.tsx";
import LoginForm from "../../islands/LoginForm.tsx";
import type { Locale } from "../../lib/i18n/index.ts";

export default function LoginEN() {
  const locale: Locale = "en";

  return (
    <>
      <SeoHead
        title="Login"
        description="Sign in to your Cashare account. Access your investments and loans on the Swiss crowdlending platform."
        canonicalPath="/en/login"
        locale={locale}
      />
      <LoginForm locale={locale} />
    </>
  );
}
