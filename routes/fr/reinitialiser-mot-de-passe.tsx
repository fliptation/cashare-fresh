import { PasswordReset } from "../../components/pages/PasswordReset.tsx";
import type { Locale } from "../../lib/i18n/index.ts";

export default function PasswordResetFR() {
  const locale: Locale = "fr";

  return <PasswordReset locale={locale} />;
}
