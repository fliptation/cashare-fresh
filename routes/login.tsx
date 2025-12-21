import LoginForm from "../islands/LoginForm.tsx";
import type { Locale } from "../lib/i18n/index.ts";

export default function LoginDE() {
  const locale: Locale = "de";

  return <LoginForm locale={locale} />;
}
