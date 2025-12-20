import { JSX } from "preact";
import { useEffect, useRef } from "preact/hooks";

type AnimationType =
  | 'fade'
  | 'fade-up'
  | 'fade-down'
  | 'fade-left'
  | 'fade-right'
  | 'scale'
  | 'scale-up';

interface AnimatedSectionProps {
  /** Type of animation to apply */
  animation: AnimationType;
  /** Children elements to animate */
  children: JSX.Element | JSX.Element[];
  /** Delay index for stagger animations (1-6) */
  delay?: 1 | 2 | 3 | 4 | 5 | 6;
  /** Intersection observer threshold (0-1) */
  threshold?: number;
  /** Intersection observer root margin */
  rootMargin?: string;
  /** Additional CSS classes */
  class?: string;
  /** Trigger animation only once */
  once?: boolean;
  /** HTML element type (default: div) */
  as?: keyof JSX.IntrinsicElements;
}

/**
 * AnimatedSection Component
 *
 * Wraps content and triggers CSS animations when scrolled into view using
 * the Intersection Observer API. Animations are defined in animations.css.
 *
 * @example
 * <AnimatedSection animation="fade-up" delay={2}>
 *   <h2>Section Title</h2>
 * </AnimatedSection>
 *
 * @example
 * <AnimatedSection
 *   animation="scale"
 *   threshold={0.3}
 *   rootMargin="-50px"
 *   once={true}
 * >
 *   <div>Content</div>
 * </AnimatedSection>
 */
export function AnimatedSection({
  animation,
  children,
  delay,
  threshold = 0.1,
  rootMargin = "0px",
  class: className = "",
  once = true,
  as = "div",
}: AnimatedSectionProps) {
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // If reduced motion is preferred, show content immediately
    if (prefersReducedMotion) {
      element.classList.add("is-visible");
      return;
    }

    // Create intersection observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add visible class to trigger animation
            entry.target.classList.add("is-visible");

            // If once is true, stop observing after first trigger
            if (once) {
              observer.unobserve(entry.target);
            }
          } else if (!once) {
            // Remove visible class if element leaves viewport (when once is false)
            entry.target.classList.remove("is-visible");
          }
        });
      },
      {
        threshold,
        rootMargin,
      }
    );

    // Start observing
    observer.observe(element);

    // Cleanup
    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [threshold, rootMargin, once]);

  // Build CSS classes
  const animationClass = `animate animate--${animation}`;
  const delayClass = delay ? `animate--delay-${delay}` : "";
  const classes = [animationClass, delayClass, className]
    .filter(Boolean)
    .join(" ");

  // Create element with dynamic tag
  const Element = as as any;

  return (
    <Element ref={elementRef} class={classes}>
      {children}
    </Element>
  );
}
