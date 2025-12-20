import { PageProps } from "$fresh/server.ts";
import { Layout } from "../../../../components/Layout.tsx";
import { BlogPostPage } from "../../../../components/pages/BlogPost.tsx";
import type { Locale } from "../../../../lib/i18n/index.ts";

export default function BlogPostFR(props: PageProps) {
  const locale: Locale = "fr";
  const { slug } = props.params;

  return (
    <Layout locale={locale}>
      <BlogPostPage locale={locale} slug={slug} />
    </Layout>
  );
}
