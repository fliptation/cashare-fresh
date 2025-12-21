import { SeoHead } from "../components/SeoHead.tsx";
import { PasswordReset } from "../components/pages/PasswordReset.tsx";
import type { Locale } from "../lib/i18n/index.ts";

export default function PasswordResetDE() {
  const locale: Locale = "de";

  return (
    <>
      <SeoHead
        title="Passwort zurücksetzen"
        description="Setzen Sie Ihr Cashare-Passwort zurück. Erhalten Sie Zugang zu Ihrem Konto auf der Schweizer Crowdlending-Plattform."
        canonicalPath="/passwort-zuruecksetzen"
        locale={locale}
      />
      <PasswordReset locale={locale} />
    </>
  );
}
