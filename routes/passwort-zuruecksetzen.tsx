import { PasswordReset } from "../components/pages/PasswordReset.tsx";
import type { Locale } from "../lib/i18n/index.ts";

export default function PasswordResetDE() {
  const locale: Locale = "de";

  return <PasswordReset locale={locale} />;
}
