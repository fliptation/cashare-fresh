import { Layout } from "../../components/Layout.tsx";
import { SeoHead } from "../../components/SeoHead.tsx";
import { UeberUns } from "../../components/pages/UeberUns.tsx";
import type { Locale } from "../../lib/i18n/index.ts";

export default function AboutEN() {
  const locale: Locale = "en";

  return (
    <Layout locale={locale}>
      <SeoHead
        title="About Us"
        description="Cashare is Switzerland's first crowdlending platform. Since 2008, we connect borrowers and investors. Learn more about our company."
        canonicalPath="/en/about"
        locale={locale}
      />
      <UeberUns locale={locale} />
    </Layout>
  );
}
