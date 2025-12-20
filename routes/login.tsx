import { Login } from "../components/pages/Login.tsx";
import type { Locale } from "../lib/i18n/index.ts";

export default function LoginDE() {
  const locale: Locale = "de";

  return <Login locale={locale} />;
}
