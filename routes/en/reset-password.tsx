import { PasswordReset } from "../../components/pages/PasswordReset.tsx";
import type { Locale } from "../../lib/i18n/index.ts";

export default function PasswordResetEN() {
  const locale: Locale = "en";

  return <PasswordReset locale={locale} />;
}
