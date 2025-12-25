import { Head } from "$fresh/runtime.ts";

interface JsonLdProps {
  /** The structured data object to serialize */
  data: Record<string, unknown> | Record<string, unknown>[];
}

/**
 * JSON-LD Component for Structured Data
 *
 * Injects JSON-LD structured data into the page head for SEO.
 * Supports single schema objects or arrays of schemas.
 *
 * Usage:
 * ```tsx
 * import { JsonLd } from "../components/JsonLd.tsx";
 * import { generateFAQSchema } from "../lib/seo/schema.ts";
 *
 * <JsonLd data={generateFAQSchema(faqs)} />
 * ```
 */
export function JsonLd({ data }: JsonLdProps) {
  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
      />
    </Head>
  );
}
