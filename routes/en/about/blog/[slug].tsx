import { PageProps } from "$fresh/server.ts";
import { Layout } from "../../../../components/Layout.tsx";
import { SeoHead } from "../../../../components/SeoHead.tsx";
import { BlogPostPage } from "../../../../components/pages/BlogPost.tsx";
import { getBlogPost } from "../../../../lib/blog/posts.ts";
import type { Locale } from "../../../../lib/i18n/index.ts";

export default function BlogPostEN(props: PageProps) {
  const locale: Locale = "en";
  const { slug } = props.params;
  const post = getBlogPost(slug);

  return (
    <Layout locale={locale} currentPath={`/en/about/blog/${slug}`}>
      {post ? (
        <SeoHead
          title={post.title[locale]}
          description={post.excerpt[locale]}
          canonicalPath={`/en/about/blog/${slug}`}
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
          title="Article not found"
          description="The article you're looking for doesn't exist."
          canonicalPath={`/en/about/blog/${slug}`}
          locale={locale}
          noindex={true}
        />
      )}
      <BlogPostPage locale={locale} slug={slug} />
    </Layout>
  );
}
