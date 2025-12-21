import { useSignal, useComputed } from "@preact/signals";
import { useEffect, useRef } from "preact/hooks";
import { t, type Locale } from "../../lib/i18n/index.ts";

interface VolumeData {
  year: number;
  value: number;
}

interface VolumesChartProps {
  lang?: Locale;
  data?: VolumeData[];
  apiEndpoint?: string;
}

export default function VolumesChart({
  lang = "de",
  data: initialData,
  apiEndpoint = "/api/statistics",
}: VolumesChartProps) {
  const tr = (key: "volumeTitle" | "million") => t(lang, "charts", key);

  const data = useSignal<VolumeData[]>(initialData || []);
  const hoveredIndex = useSignal<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const dimensions = useSignal({ width: 800, height: 458 });

  // Fetch data if not provided
  useEffect(() => {
    if (!initialData && apiEndpoint) {
      fetch(apiEndpoint)
        .then((res) => res.json())
        .then((stats) => {
          if (stats.totalRequestedLoanVolume) {
            data.value = stats.totalRequestedLoanVolume.map(
              (item: [number, number]) => ({
                year: item[0],
                value: item[1],
              })
            );
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
        dimensions.value = { width: width - 40, height: 200 };
      } else if (width <= 1024) {
        dimensions.value = { width: 600, height: 275 };
      } else {
        dimensions.value = { width: 800, height: 458 };
      }
    }
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  // Chart configuration
  const padding = useComputed(() => ({
    left: window.innerWidth <= 767 ? 50 : 80,
    right: window.innerWidth <= 767 ? 20 : 40,
    top: 40,
    bottom: window.innerWidth <= 767 ? 30 : 60,
  }));

  const chartWidth = useComputed(
    () => dimensions.value.width - padding.value.left - padding.value.right
  );
  const chartHeight = useComputed(
    () => dimensions.value.height - padding.value.top - padding.value.bottom
  );

  // Calculate max value for scaling (rounded up to nearest 500)
  const maxValue = useComputed(() => {
    const max = Math.max(...data.value.map((d) => d.value), 0);
    return Math.ceil(max / 500) * 500 || 3000;
  });

  // Scale functions
  const xScale = useComputed(() => {
    const barCount = data.value.length;
    const barWidth = chartWidth.value / barCount;
    return (index: number) => padding.value.left + index * barWidth + barWidth / 2;
  });

  const yScale = useComputed(() => {
    return (value: number) =>
      padding.value.top + chartHeight.value - (value / maxValue.value) * chartHeight.value;
  });

  const barWidth = useComputed(() => {
    const count = data.value.length || 1;
    const width = window.innerWidth <= 767 ? 14 : window.innerWidth <= 1024 ? 20 : 30;
    return Math.min(width, chartWidth.value / count - 10);
  });

  // Y-axis ticks
  const yTicks = useComputed(() => {
    const ticks: number[] = [];
    const step = window.innerWidth <= 767 ? 500 : 200;
    for (let i = 0; i <= maxValue.value; i += step) {
      ticks.push(i);
    }
    return ticks;
  });

  // Format value for display
  function formatValue(value: number): string {
    return value.toLocaleString("de-CH", {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });
  }

  return (
    <div class="volumes-chart" ref={containerRef}>
      <svg
        width={dimensions.value.width}
        height={dimensions.value.height}
        viewBox={`0 0 ${dimensions.value.width} ${dimensions.value.height}`}
      >
        {/* Y-axis line */}
        <line
          x1={padding.value.left}
          y1={padding.value.top - 10}
          x2={padding.value.left}
          y2={dimensions.value.height - padding.value.bottom}
          stroke="#D1D5DB"
          stroke-width="1"
        />

        {/* Y-axis ticks and labels */}
        {yTicks.value.map((tick) => (
          <g key={tick}>
            <text
              x={padding.value.left - 10}
              y={yScale.value(tick)}
              text-anchor="end"
              dominant-baseline="middle"
              class="volumes-chart__axis-label"
            >
              {tick} {tr("million")}
            </text>
          </g>
        ))}

        {/* Bars */}
        {data.value.map((item, index) => {
          const barHeight =
            (item.value / maxValue.value) * chartHeight.value;
          const x = xScale.value(index) - barWidth.value / 2;
          const y = yScale.value(item.value);
          const isHovered = hoveredIndex.value === index;

          return (
            <g key={item.year}>
              {/* Bar */}
              <rect
                x={x}
                y={y}
                width={barWidth.value}
                height={barHeight}
                rx={window.innerWidth <= 767 ? 3 : 7}
                ry={window.innerWidth <= 767 ? 3 : 7}
                class={`volumes-chart__bar ${isHovered ? "volumes-chart__bar--active" : ""}`}
                onMouseEnter={() => (hoveredIndex.value = index)}
                onMouseLeave={() => (hoveredIndex.value = null)}
              />

              {/* X-axis label */}
              <text
                x={xScale.value(index)}
                y={dimensions.value.height - padding.value.bottom + 20}
                text-anchor="middle"
                class="volumes-chart__axis-label"
              >
                {window.innerWidth <= 767
                  ? item.year.toString().slice(-2)
                  : item.year}
              </text>
            </g>
          );
        })}

        {/* Tooltip */}
        {hoveredIndex.value !== null && data.value[hoveredIndex.value] && (
          <foreignObject
            x={xScale.value(hoveredIndex.value) - 80}
            y={yScale.value(data.value[hoveredIndex.value].value) - 70}
            width="160"
            height="60"
          >
            <div class="volumes-chart__tooltip">
              <span class="volumes-chart__tooltip-dot" />
              <div>
                <div>{data.value[hoveredIndex.value].year}</div>
                <div>
                  <strong>{tr("volumeTitle")}:</strong>
                  <br />
                  {formatValue(data.value[hoveredIndex.value].value)}
                </div>
              </div>
            </div>
          </foreignObject>
        )}
      </svg>
    </div>
  );
}
