import { Login } from "../../components/pages/Login.tsx";
import type { Locale } from "../../lib/i18n/index.ts";

export default function LoginFR() {
  const locale: Locale = "fr";

  return <Login locale={locale} />;
}
