import { useSignal, useComputed } from "@preact/signals";
import { useEffect, useRef } from "preact/hooks";
import { t, type Locale } from "../../lib/i18n/index.ts";

interface TimelineData {
  year: number;
  projects: number;
  members: number;
}

interface TimelineChartProps {
  lang?: Locale;
  data?: TimelineData[];
  apiEndpoint?: string;
}

export default function TimelineChart({
  lang = "de",
  data: initialData,
  apiEndpoint = "/api/statistics",
}: TimelineChartProps) {
  const tr = (key: "financedProjects" | "members") => t(lang, "charts", key);

  const data = useSignal<TimelineData[]>(initialData || []);
  const hoveredIndex = useSignal<number | null>(null);
  const hoveredType = useSignal<"bar" | "line" | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const dimensions = useSignal({ width: 800, height: 458 });

  // Fetch data if not provided
  useEffect(() => {
    if (!initialData && apiEndpoint) {
      fetch(apiEndpoint)
        .then((res) => res.json())
        .then((stats) => {
          if (stats.membersAndFinancedProjects) {
            // Skip header row
            data.value = stats.membersAndFinancedProjects
              .slice(1)
              .map((item: [number, number, number]) => ({
                year: item[0],
                projects: item[1],
                members: item[2],
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
        dimensions.value = { width: width - 40, height: 180 };
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
    left: window.innerWidth <= 767 ? 50 : 100,
    right: window.innerWidth <= 767 ? 50 : 100,
    top: 20,
    bottom: window.innerWidth <= 767 ? 30 : 60,
  }));

  const chartWidth = useComputed(
    () => dimensions.value.width - padding.value.left - padding.value.right
  );
  const chartHeight = useComputed(
    () => dimensions.value.height - padding.value.top - padding.value.bottom
  );

  // Calculate max values and scales
  const maxProjects = useComputed(() => {
    const max = Math.max(...data.value.map((d) => d.projects), 0);
    const scale = 500;
    return Math.ceil(max / scale + 1) * scale;
  });

  const maxMembers = useComputed(() => {
    const max = Math.max(...data.value.map((d) => d.members), 0);
    const scale = 10000;
    let result = Math.ceil(max / scale + 1) * scale;

    // Align scales (ratio of 20:1)
    if (maxProjects.value > result / 20) {
      result = maxProjects.value * 20;
    }
    return result;
  });

  // Adjusted maxProjects if needed
  const adjustedMaxProjects = useComputed(() => {
    if (maxProjects.value < maxMembers.value / 20) {
      return maxMembers.value / 20;
    }
    return maxProjects.value;
  });

  // Scale functions
  const xScale = useComputed(() => {
    const barCount = data.value.length;
    const barWidth = chartWidth.value / barCount;
    return (index: number) => padding.value.left + index * barWidth + barWidth / 2;
  });

  const yScaleProjects = useComputed(() => {
    return (value: number) =>
      padding.value.top +
      chartHeight.value -
      (value / adjustedMaxProjects.value) * chartHeight.value;
  });

  const yScaleMembers = useComputed(() => {
    return (value: number) =>
      padding.value.top +
      chartHeight.value -
      (value / maxMembers.value) * chartHeight.value;
  });

  const barWidth = useComputed(() => {
    const count = data.value.length || 1;
    const width = window.innerWidth <= 767 ? 14 : window.innerWidth <= 1024 ? 20 : 30;
    return Math.min(width, chartWidth.value / count - 10);
  });

  // Generate line path for members
  const linePath = useComputed(() => {
    if (data.value.length === 0) return "";

    const points = data.value.map((item, index) => ({
      x: xScale.value(index),
      y: yScaleMembers.value(item.members),
    }));

    return points.map((p, i) => (i === 0 ? `M ${p.x} ${p.y}` : `L ${p.x} ${p.y}`)).join(" ");
  });

  // Y-axis ticks for projects (left)
  const projectTicks = useComputed(() => {
    const ticks: number[] = [];
    const step = window.innerWidth <= 767 ? 1000 : 500;
    for (let i = 0; i <= adjustedMaxProjects.value; i += step) {
      ticks.push(i);
    }
    return ticks;
  });

  // Y-axis ticks for members (right)
  const memberTicks = useComputed(() => {
    const ticks: number[] = [];
    const step = window.innerWidth <= 767 ? 20000 : 10000;
    for (let i = 0; i <= maxMembers.value; i += step) {
      ticks.push(i);
    }
    return ticks;
  });

  // Format number for display
  function formatNumber(value: number): string {
    return value.toLocaleString("de-CH");
  }

  return (
    <div class="timeline-chart" ref={containerRef}>
      <svg
        width={dimensions.value.width}
        height={dimensions.value.height}
        viewBox={`0 0 ${dimensions.value.width} ${dimensions.value.height}`}
      >
        {/* Left Y-axis (Projects) */}
        <text
          x={padding.value.left - 10}
          y={padding.value.top - 10}
          text-anchor="end"
          class="timeline-chart__axis-title"
        >
          {tr("financedProjects")}
        </text>

        {projectTicks.value.map((tick) => (
          <g key={`proj-${tick}`}>
            <text
              x={padding.value.left - 10}
              y={yScaleProjects.value(tick)}
              text-anchor="end"
              dominant-baseline="middle"
              class="timeline-chart__axis-label"
            >
              {formatNumber(tick)}
            </text>
          </g>
        ))}

        {/* Right Y-axis (Members) */}
        <text
          x={dimensions.value.width - padding.value.right + 10}
          y={padding.value.top - 10}
          text-anchor="start"
          class="timeline-chart__axis-title"
        >
          {tr("members")}
        </text>

        {memberTicks.value.map((tick) => (
          <g key={`mem-${tick}`}>
            <text
              x={dimensions.value.width - padding.value.right + 10}
              y={yScaleMembers.value(tick)}
              text-anchor="start"
              dominant-baseline="middle"
              class="timeline-chart__axis-label"
            >
              {formatNumber(tick)}
            </text>
          </g>
        ))}

        {/* Bars (Projects) */}
        {data.value.map((item, index) => {
          const barHeight =
            (item.projects / adjustedMaxProjects.value) * chartHeight.value;
          const x = xScale.value(index) - barWidth.value / 2;
          const y = yScaleProjects.value(item.projects);
          const isHovered = hoveredIndex.value === index && hoveredType.value === "bar";

          return (
            <g key={`bar-${item.year}`}>
              <rect
                x={x}
                y={y}
                width={barWidth.value}
                height={barHeight}
                rx={window.innerWidth <= 767 ? 3 : 7}
                ry={window.innerWidth <= 767 ? 3 : 7}
                class={`timeline-chart__bar ${isHovered ? "timeline-chart__bar--active" : ""}`}
                onMouseEnter={() => {
                  hoveredIndex.value = index;
                  hoveredType.value = "bar";
                }}
                onMouseLeave={() => {
                  hoveredIndex.value = null;
                  hoveredType.value = null;
                }}
              />

              {/* X-axis label */}
              <text
                x={xScale.value(index)}
                y={dimensions.value.height - padding.value.bottom + 20}
                text-anchor="middle"
                class="timeline-chart__axis-label"
              >
                {window.innerWidth <= 767
                  ? item.year.toString().slice(-2)
                  : item.year}
              </text>
            </g>
          );
        })}

        {/* Line (Members) */}
        <path
          d={linePath.value}
          fill="none"
          stroke="#98E6FF"
          stroke-width={window.innerWidth <= 767 ? 1.5 : 3}
          class="timeline-chart__line"
        />

        {/* Line points */}
        {data.value.map((item, index) => {
          const isHovered = hoveredIndex.value === index && hoveredType.value === "line";
          const pointSize = window.innerWidth <= 767 ? 3 : 6;

          return (
            <circle
              key={`point-${item.year}`}
              cx={xScale.value(index)}
              cy={yScaleMembers.value(item.members)}
              r={isHovered ? pointSize * 1.5 : pointSize}
              fill="#98E6FF"
              class="timeline-chart__point"
              onMouseEnter={() => {
                hoveredIndex.value = index;
                hoveredType.value = "line";
              }}
              onMouseLeave={() => {
                hoveredIndex.value = null;
                hoveredType.value = null;
              }}
            />
          );
        })}

        {/* Tooltip */}
        {hoveredIndex.value !== null && data.value[hoveredIndex.value] && (
          <foreignObject
            x={xScale.value(hoveredIndex.value) - 100}
            y={
              hoveredType.value === "bar"
                ? yScaleProjects.value(data.value[hoveredIndex.value].projects) - 70
                : yScaleMembers.value(data.value[hoveredIndex.value].members) - 70
            }
            width="200"
            height="60"
          >
            <div class="timeline-chart__tooltip">
              <span
                class="timeline-chart__tooltip-dot"
                style={{
                  backgroundColor: hoveredType.value === "bar" ? "#00B9D0" : "#98E6FF",
                }}
              />
              <div>
                <div>{data.value[hoveredIndex.value].year}</div>
                <div>
                  <strong>
                    {hoveredType.value === "bar"
                      ? tr("financedProjects")
                      : tr("members")}
                    :
                  </strong>{" "}
                  {formatNumber(
                    hoveredType.value === "bar"
                      ? data.value[hoveredIndex.value].projects
                      : data.value[hoveredIndex.value].members
                  )}
                </div>
              </div>
            </div>
          </foreignObject>
        )}
      </svg>
    </div>
  );
}
