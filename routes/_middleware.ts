import { FreshContext } from "$fresh/server.ts";
import { getRedirectTarget } from "../lib/seo/redirects.ts";

/**
 * Global middleware for SEO redirects and URL normalization
 */
export async function handler(
  req: Request,
  ctx: FreshContext,
): Promise<Response> {
  const url = new URL(req.url);
  const path = url.pathname;

  // Skip static files and Fresh internals
  if (
    path.startsWith("/_frsh/") ||
    path.startsWith("/api/") ||
    path.match(/\.(css|js|png|jpg|jpeg|gif|svg|ico|woff|woff2|ttf|eot)$/)
  ) {
    return ctx.next();
  }

  // Check for SEO redirects (old WordPress URLs → new Fresh URLs)
  const redirectTarget = getRedirectTarget(path);
  if (redirectTarget) {
    // Preserve query string if present
    const targetUrl = new URL(redirectTarget, url.origin);
    targetUrl.search = url.search;

    return new Response(null, {
      status: 301,
      headers: {
        Location: targetUrl.toString(),
        "Cache-Control": "public, max-age=86400", // Cache redirect for 1 day
      },
    });
  }

  // Normalize trailing slashes: remove trailing slash (except for root)
  if (path !== "/" && path.endsWith("/")) {
    const normalizedPath = path.slice(0, -1);
    const targetUrl = new URL(normalizedPath, url.origin);
    targetUrl.search = url.search;

    return new Response(null, {
      status: 301,
      headers: {
        Location: targetUrl.toString(),
        "Cache-Control": "public, max-age=86400", // Cache redirect for 1 day
      },
    });
  }

  return ctx.next();
}
