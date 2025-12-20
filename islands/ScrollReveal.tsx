import { useEffect, useRef, useState } from "preact/hooks";
import type { ComponentChildren } from "preact";

type Animation =
  | "fade-up"
  | "fade-down"
  | "fade-left"
  | "fade-right"
  | "scale"
  | "scale-up";

interface ScrollRevealProps {
  children: ComponentChildren;
  animation?: Animation;
  delay?: number; // delay in ms
  duration?: number; // duration in ms
  threshold?: number; // 0-1, how much of element must be visible
  once?: boolean; // only animate once
  className?: string;
}

export default function ScrollReveal({
  children,
  animation = "fade-up",
  delay = 0,
  duration = 500,
  threshold = 0.1,
  once = true,
  className = "",
}: ScrollRevealProps) {
  const elementRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check for reduced motion preference
    if (typeof window !== "undefined") {
      setPrefersReducedMotion(
        window.matchMedia("(prefers-reduced-motion: reduce)").matches
      );
    }
  }, []);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // If reduced motion is preferred, show immediately
    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (once) {
              observer.unobserve(element);
            }
          } else if (!once) {
            setIsVisible(false);
          }
        });
      },
      {
        threshold,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, once, prefersReducedMotion]);

  // Animation class mapping
  const animationClass = `animate--${animation}`;

  const style = prefersReducedMotion
    ? {}
    : {
        animationDelay: `${delay}ms`,
        animationDuration: `${duration}ms`,
      };

  return (
    <div
      ref={elementRef}
      class={`animate ${animationClass} ${isVisible ? "is-visible" : ""} ${className}`}
      style={style}
    >
      {children}
    </div>
  );
}
