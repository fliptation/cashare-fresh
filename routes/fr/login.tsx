import LoginForm from "../../islands/LoginForm.tsx";
import type { Locale } from "../../lib/i18n/index.ts";

export default function LoginFR() {
  const locale: Locale = "fr";

  return <LoginForm locale={locale} />;
}
