import { useEffect, useRef, useState } from "preact/hooks";

interface StatItem {
  value: string;
  label: string;
}

interface CountingStatsProps {
  title: string;
  items: StatItem[];
}

// Parse a stat value like "5.8%", "CHF 2.5 Mrd.", "4700+", "<1%"
function parseStatValue(value: string): { prefix: string; number: number; suffix: string; decimals: number } {
  // Handle special cases
  if (value.startsWith("<")) {
    const match = value.match(/^<(\d+(?:\.\d+)?)(.*)/);
    if (match) {
      const num = parseFloat(match[1]);
      return { prefix: "<", number: num, suffix: match[2], decimals: match[1].includes(".") ? 1 : 0 };
    }
  }

  // Handle CHF prefix
  if (value.startsWith("CHF")) {
    const match = value.match(/CHF\s*(\d+(?:\.\d+)?)\s*(.*)/);
    if (match) {
      const num = parseFloat(match[1]);
      return { prefix: "CHF ", number: num, suffix: " " + match[2], decimals: match[1].includes(".") ? 1 : 0 };
    }
  }

  // Handle numbers with + suffix
  const plusMatch = value.match(/^(\d+(?:[',]\d+)*)\+$/);
  if (plusMatch) {
    const num = parseFloat(plusMatch[1].replace(/[',]/g, ""));
    return { prefix: "", number: num, suffix: "+", decimals: 0 };
  }

  // Handle percentages
  const percentMatch = value.match(/^(\d+(?:\.\d+)?)\s*%$/);
  if (percentMatch) {
    const num = parseFloat(percentMatch[1]);
    return { prefix: "", number: num, suffix: "%", decimals: percentMatch[1].includes(".") ? 1 : 0 };
  }

  // Default: try to extract any number
  const numMatch = value.match(/(\d+(?:\.\d+)?)/);
  if (numMatch) {
    const num = parseFloat(numMatch[1]);
    const idx = value.indexOf(numMatch[1]);
    return {
      prefix: value.slice(0, idx),
      number: num,
      suffix: value.slice(idx + numMatch[1].length),
      decimals: numMatch[1].includes(".") ? 1 : 0
    };
  }

  return { prefix: "", number: 0, suffix: value, decimals: 0 };
}

function formatNumber(num: number, decimals: number): string {
  const rounded = decimals > 0 ? num : Math.round(num);

  if (decimals > 0) {
    return rounded.toFixed(decimals);
  }

  // No thousands separator - just the raw integer
  return Math.round(num).toString();
}

function AnimatedNumber({ value, hasStarted }: { value: string; hasStarted: boolean }) {
  const [displayValue, setDisplayValue] = useState("0");
  const parsed = parseStatValue(value);

  useEffect(() => {
    if (!hasStarted) {
      setDisplayValue(parsed.prefix + "0" + parsed.suffix);
      return;
    }

    const duration = 2000; // 2 seconds
    const startTime = Date.now();
    const startValue = 0;
    const endValue = parsed.number;

    function easeOutQuart(t: number): number {
      return 1 - Math.pow(1 - t, 4);
    }

    function animate() {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutQuart(progress);
      const currentValue = startValue + (endValue - startValue) * easedProgress;

      setDisplayValue(parsed.prefix + formatNumber(currentValue, parsed.decimals) + parsed.suffix);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    }

    requestAnimationFrame(animate);
  }, [hasStarted, value]);

  return <>{displayValue}</>;
}

export default function CountingStats({ title, items }: CountingStatsProps) {
  const [hasStarted, setHasStarted] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasStarted) {
            setHasStarted(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasStarted]);

  return (
    <section class="invest-stats" ref={sectionRef}>
      <div class="invest-stats__container">
        <div class="invest-stats__header">
          <h2 class="invest-stats__title">{title}</h2>
        </div>
        <div class="invest-stats__grid">
          {items.map((stat, i) => (
            <div key={i} class="invest-stat-card">
              <div class="invest-stat-card__value">
                <AnimatedNumber value={stat.value} hasStarted={hasStarted} />
              </div>
              <div class="invest-stat-card__label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
