import { useSignal, useComputed } from "@preact/signals";
import { useEffect, useRef } from "preact/hooks";
import type { Locale } from "../../lib/i18n/index.ts";

// Translations
const translations = {
  de: {
    title: "Verteilung der Kreditratings: Abwägung von Risiken und Chancen",
    overview: "Überblick",
    rating: "Rating",
    share: "Anteil",
  },
  en: {
    title: "Distribution of Credit Ratings: Balancing Risks and Opportunities",
    overview: "Overview",
    rating: "Rating",
    share: "Share",
  },
  fr: {
    title: "Répartition des notations de crédit: équilibre entre risques et opportunités",
    overview: "Aperçu",
    rating: "Rating",
    share: "Part",
  },
} as const;

// Color palette for ratings
const COLORS = [
  "#6FDCFF", "#2B97C9", "#98E6FF", "#246884",
  "#2B97C9", "#2E83A6", "#33A9BD", "#4799BB",
  "#0D375A", "#2B97C9", "#3F89A9"
];

interface RatingData {
  rating: string;
  value: number;
}

interface RatingsChartProps {
  lang?: Locale;
  data?: RatingData[];
  apiEndpoint?: string;
}

export default function RatingsChart({
  lang = "de",
  data: initialData,
  apiEndpoint = "/api/statistics",
}: RatingsChartProps) {
  const t = (key: keyof typeof translations.de) => translations[lang][key];

  const data = useSignal<RatingData[]>(initialData || []);
  const hoveredIndex = useSignal<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const size = useSignal(353);

  // Fetch data if not provided
  useEffect(() => {
    if (!initialData && apiEndpoint) {
      fetch(apiEndpoint)
        .then((res) => res.json())
        .then((stats) => {
          if (stats.rating) {
            data.value = stats.rating.map((item: [string, number]) => ({
              rating: item[0],
              value: item[1],
            }));
          }
        })
        .catch(console.error);
    }
  }, [apiEndpoint, initialData]);

  // Handle responsive sizing
  useEffect(() => {
    function updateSize() {
      const width = window.innerWidth;
      if (width <= 767) {
        size.value = 134;
      } else if (width <= 1024) {
        size.value = 280;
      } else {
        size.value = 353;
      }
    }
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  // Calculate total and percentages
  const total = useComputed(() =>
    data.value.reduce((sum, item) => sum + item.value, 0)
  );

  const chartData = useComputed(() =>
    data.value.map((item, index) => ({
      ...item,
      percentage: total.value > 0 ? (item.value / total.value) * 100 : 0,
      color: item.rating === "C" ? "#123442" : COLORS[index % COLORS.length],
    }))
  );

  // SVG donut chart calculations
  const center = useComputed(() => size.value / 2);
  const outerRadius = useComputed(() => size.value / 2 - 5);
  const innerRadius = useComputed(() => outerRadius.value * 0.6);
  const strokeWidth = 5;

  // Create donut segments
  const segments = useComputed(() => {
    const segs: Array<{
      d: string;
      color: string;
      index: number;
    }> = [];

    let currentAngle = -90; // Start at top

    chartData.value.forEach((item, index) => {
      const angle = (item.percentage / 100) * 360;
      const startAngle = currentAngle;
      const endAngle = currentAngle + angle;

      // Calculate arc path
      const startRad = (startAngle * Math.PI) / 180;
      const endRad = (endAngle * Math.PI) / 180;

      const x1Outer = center.value + outerRadius.value * Math.cos(startRad);
      const y1Outer = center.value + outerRadius.value * Math.sin(startRad);
      const x2Outer = center.value + outerRadius.value * Math.cos(endRad);
      const y2Outer = center.value + outerRadius.value * Math.sin(endRad);

      const x1Inner = center.value + innerRadius.value * Math.cos(endRad);
      const y1Inner = center.value + innerRadius.value * Math.sin(endRad);
      const x2Inner = center.value + innerRadius.value * Math.cos(startRad);
      const y2Inner = center.value + innerRadius.value * Math.sin(startRad);

      const largeArc = angle > 180 ? 1 : 0;

      const d = [
        `M ${x1Outer} ${y1Outer}`,
        `A ${outerRadius.value} ${outerRadius.value} 0 ${largeArc} 1 ${x2Outer} ${y2Outer}`,
        `L ${x1Inner} ${y1Inner}`,
        `A ${innerRadius.value} ${innerRadius.value} 0 ${largeArc} 0 ${x2Inner} ${y2Inner}`,
        `Z`,
      ].join(" ");

      segs.push({ d, color: item.color, index });

      currentAngle = endAngle;
    });

    return segs;
  });

  return (
    <div class="ratings-chart" ref={containerRef}>
      <div class="ratings-chart__header">
        <h3 class="ratings-chart__title">{t("title")}</h3>
      </div>
      <p class="ratings-chart__overview">{t("overview")}</p>

      <div class="ratings-chart__container">
        {/* SVG Donut Chart */}
        <div class="ratings-chart__donut">
          <svg
            width={size.value}
            height={size.value}
            viewBox={`0 0 ${size.value} ${size.value}`}
          >
            {segments.value.map((seg) => (
              <path
                key={seg.index}
                d={seg.d}
                fill={seg.color}
                stroke="#fff"
                stroke-width={strokeWidth}
                stroke-linejoin="round"
                stroke-linecap="round"
                class={`ratings-chart__segment ${hoveredIndex.value === seg.index ? "ratings-chart__segment--active" : ""}`}
                onMouseEnter={() => (hoveredIndex.value = seg.index)}
                onMouseLeave={() => (hoveredIndex.value = null)}
              />
            ))}
          </svg>

          {/* Tooltip */}
          {hoveredIndex.value !== null && chartData.value[hoveredIndex.value] && (
            <div class="ratings-chart__tooltip">
              <span
                class="ratings-chart__tooltip-dot"
                style={{ backgroundColor: chartData.value[hoveredIndex.value].color }}
              />
              <div>
                <div>
                  {t("rating")}: <strong>{chartData.value[hoveredIndex.value].rating}</strong>
                </div>
                <div>
                  {t("share")}: {chartData.value[hoveredIndex.value].value} ({chartData.value[hoveredIndex.value].percentage.toFixed(1)}%)
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Legend */}
        <div class="ratings-chart__legend">
          {chartData.value.map((item, index) => (
            <div
              key={index}
              class={`ratings-chart__legend-item ${hoveredIndex.value === index ? "ratings-chart__legend-item--active" : ""}`}
              onMouseEnter={() => (hoveredIndex.value = index)}
              onMouseLeave={() => (hoveredIndex.value = null)}
            >
              <div class="ratings-chart__legend-top">
                <span
                  class="ratings-chart__legend-color"
                  style={{ backgroundColor: item.color }}
                />
                <span class="ratings-chart__legend-label">{item.rating}</span>
              </div>
              <div class="ratings-chart__progress-wrapper">
                <div
                  class="ratings-chart__progress-bar"
                  style={{
                    width: `${item.percentage}%`,
                    backgroundColor: item.color,
                  }}
                />
                <span class="ratings-chart__legend-value">
                  {item.percentage.toFixed(1)}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
