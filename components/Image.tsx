import type { JSX } from "preact";

interface ImageProps extends Omit<JSX.HTMLAttributes<HTMLImageElement>, "loading" | "decoding"> {
  /** Image source URL */
  src: string;
  /** Alt text for accessibility */
  alt: string;
  /** Image width in pixels - required for CLS prevention */
  width: number;
  /** Image height in pixels - required for CLS prevention */
  height: number;
  /** Skip lazy loading for above-fold images */
  priority?: boolean;
}

/**
 * Optimized Image Component
 *
 * Provides:
 * - Lazy loading by default (skipped with priority=true for above-fold)
 * - Async decoding for better performance
 * - Required width/height to prevent Cumulative Layout Shift (CLS)
 *
 * Usage:
 * ```tsx
 * <Image
 *   src="/images/logo.svg"
 *   alt="Cashare Logo"
 *   width={120}
 *   height={40}
 * />
 *
 * // For above-fold hero images
 * <Image
 *   src="/images/hero.jpg"
 *   alt="Hero"
 *   width={1200}
 *   height={600}
 *   priority
 * />
 * ```
 */
export function Image({
  src,
  alt,
  width,
  height,
  priority = false,
  class: className,
  ...rest
}: ImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      class={className}
      {...rest}
    />
  );
}
