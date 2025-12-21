import { Layout } from "../../components/Layout.tsx";
import { SeoHead } from "../../components/SeoHead.tsx";
import { Security } from "../../components/pages/Security.tsx";
import type { Locale } from "../../lib/i18n/index.ts";

export default function SecurityEN() {
  const locale: Locale = "en";

  return (
    <Layout locale={locale}>
      <SeoHead
        title="Security"
        description="Security at Cashare: How we protect your data and investments. Learn more about our security measures."
        canonicalPath="/en/security"
        locale={locale}
      />
      <Security locale={locale} />
    </Layout>
  );
}
