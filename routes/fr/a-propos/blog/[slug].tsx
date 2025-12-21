import { PageProps } from "$fresh/server.ts";
import { Layout } from "../../../../components/Layout.tsx";
import { SeoHead } from "../../../../components/SeoHead.tsx";
import { BlogPostPage } from "../../../../components/pages/BlogPost.tsx";
import { getBlogPost } from "../../../../lib/blog/posts.ts";
import type { Locale } from "../../../../lib/i18n/index.ts";

export default function BlogPostFR(props: PageProps) {
  const locale: Locale = "fr";
  const { slug } = props.params;
  const post = getBlogPost(slug);

  return (
    <Layout locale={locale}>
      {post ? (
        <SeoHead
          title={post.title[locale]}
          description={post.excerpt[locale]}
          canonicalPath={`/fr/a-propos/blog/${slug}`}
          locale={locale}
          ogType="article"
          ogImage={post.image}
          article={{
            publishedTime: post.date,
            author: post.author,
            section: post.category,
          }}
        />
      ) : (
        <SeoHead
          title="Article non trouvé"
          description="L'article que vous recherchez n'existe pas."
          canonicalPath={`/fr/a-propos/blog/${slug}`}
          locale={locale}
          noindex={true}
        />
      )}
      <BlogPostPage locale={locale} slug={slug} />
    </Layout>
  );
}
