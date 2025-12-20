import { useEffect, useRef } from "preact/hooks";
import { signal } from "@preact/signals";

interface AnimatedCounterProps {
  value: number;
  startValue?: number;
  duration?: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  format?: 'number' | 'currency' | 'percent';
  locale?: string;
}

// Easing function: easeOutExpo
// Fast at the start, decelerates smoothly toward the end
const easeOutExpo = (t: number): number => {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
};

export default function AnimatedCounter({
  value,
  startValue = 0,
  duration = 2000,
  decimals = 0,
  prefix = "",
  suffix = "",
  format = "number",
  locale = "de-CH",
}: AnimatedCounterProps) {
  const displayValue = signal(startValue);
  const elementRef = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  // Check if user prefers reduced motion
  const prefersReducedMotion = useRef(
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // If reduced motion is preferred, show final value immediately
    if (prefersReducedMotion.current) {
      displayValue.value = value;
      return;
    }

    // Intersection Observer to detect when element is in viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Only animate once when first entering viewport
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;
            animateValue(startValue, value, duration);
          }
        });
      },
      {
        threshold: 0.1, // Trigger when at least 10% visible
        rootMargin: "0px 0px -50px 0px", // Trigger slightly before fully visible
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [value, startValue, duration]);

  const animateValue = (start: number, end: number, animDuration: number) => {
    const startTime = performance.now();
    const difference = end - start;

    const step = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / animDuration, 1);

      // Apply easing function
      const easedProgress = easeOutExpo(progress);
      const current = start + difference * easedProgress;

      displayValue.value = current;

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        // Ensure we end exactly at the target value
        displayValue.value = end;
      }
    };

    requestAnimationFrame(step);
  };

  const formatValue = (num: number): string => {
    // Round to specified decimal places
    const rounded = Number(num.toFixed(decimals));

    switch (format) {
      case "currency":
        // Swiss rounding (to nearest 0.05 CHF) for currency
        const swissRounded = Math.round(rounded * 20) / 20;
        return new Intl.NumberFormat(locale, {
          minimumFractionDigits: decimals,
          maximumFractionDigits: decimals,
        }).format(swissRounded);

      case "percent":
        return new Intl.NumberFormat(locale, {
          minimumFractionDigits: decimals,
          maximumFractionDigits: decimals,
        }).format(rounded);

      case "number":
      default:
        return new Intl.NumberFormat(locale, {
          minimumFractionDigits: decimals,
          maximumFractionDigits: decimals,
        }).format(rounded);
    }
  };

  return (
    <span
      ref={elementRef}
      class="animated-counter"
      aria-live="polite"
      aria-atomic="true"
    >
      {prefix}
      {formatValue(displayValue.value)}
      {suffix}
    </span>
  );
}
