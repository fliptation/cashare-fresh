import { SeoHead } from "../../components/SeoHead.tsx";
import { PasswordReset } from "../../components/pages/PasswordReset.tsx";
import type { Locale } from "../../lib/i18n/index.ts";

export default function PasswordResetFR() {
  const locale: Locale = "fr";

  return (
    <>
      <SeoHead
        title="Réinitialiser le mot de passe"
        description="Réinitialisez votre mot de passe Cashare. Récupérez l'accès à votre compte sur la plateforme suisse de crowdlending."
        canonicalPath="/fr/reinitialiser-mot-de-passe"
        locale={locale}
      />
      <PasswordReset locale={locale} />
    </>
  );
}
