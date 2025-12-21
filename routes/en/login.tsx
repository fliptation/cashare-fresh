import LoginForm from "../../islands/LoginForm.tsx";
import type { Locale } from "../../lib/i18n/index.ts";

export default function LoginEN() {
  const locale: Locale = "en";

  return <LoginForm locale={locale} />;
}
