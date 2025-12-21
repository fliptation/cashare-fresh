import { Layout } from "../../../../components/Layout.tsx";
import { SeoHead } from "../../../../components/SeoHead.tsx";
import { Blog } from "../../../../components/pages/Blog.tsx";
import type { Locale } from "../../../../lib/i18n/index.ts";

export default function BlogEN() {
  const locale: Locale = "en";

  return (
    <Layout locale={locale}>
      <SeoHead
        title="Blog"
        description="Cashare Blog: Latest articles on crowdlending, financing and investments. Learn more about fintech and alternative lending in Switzerland."
        canonicalPath="/en/about/blog"
        locale={locale}
      />
      <Blog locale={locale} />
    </Layout>
  );
}
