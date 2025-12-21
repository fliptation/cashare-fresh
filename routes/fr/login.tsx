import { SeoHead } from "../../components/SeoHead.tsx";
import LoginForm from "../../islands/LoginForm.tsx";
import type { Locale } from "../../lib/i18n/index.ts";

export default function LoginFR() {
  const locale: Locale = "fr";

  return (
    <>
      <SeoHead
        title="Connexion"
        description="Connectez-vous à votre compte Cashare. Accédez à vos investissements et crédits sur la plateforme suisse de crowdlending."
        canonicalPath="/fr/login"
        locale={locale}
      />
      <LoginForm locale={locale} />
    </>
  );
}
