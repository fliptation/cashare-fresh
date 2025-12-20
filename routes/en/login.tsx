import { Login } from "../../components/pages/Login.tsx";
import type { Locale } from "../../lib/i18n/index.ts";

export default function LoginEN() {
  const locale: Locale = "en";

  return <Login locale={locale} />;
}
