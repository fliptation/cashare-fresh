import { Layout } from "../components/Layout.tsx";
import { UeberUns } from "../components/pages/UeberUns.tsx";
import type { Locale } from "../lib/i18n/index.ts";

export default function UeberUnsDE() {
  const locale: Locale = "de";

  return (
    <Layout locale={locale}>
      <UeberUns locale={locale} />
    </Layout>
  );
}
