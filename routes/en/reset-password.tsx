import { SeoHead } from "../../components/SeoHead.tsx";
import { PasswordReset } from "../../components/pages/PasswordReset.tsx";
import type { Locale } from "../../lib/i18n/index.ts";

export default function PasswordResetEN() {
  const locale: Locale = "en";

  return (
    <>
      <SeoHead
        title="Reset Password"
        description="Reset your Cashare password. Regain access to your account on the Swiss crowdlending platform."
        canonicalPath="/en/reset-password"
        locale={locale}
      />
      <PasswordReset locale={locale} />
    </>
  );
}
