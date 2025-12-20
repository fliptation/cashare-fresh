import { JSX } from "preact";

interface SectionDividerProps {
  type?: 'angle' | 'curve' | 'wave';
  direction?: 'up' | 'down';
  fillColor?: string;
  height?: number;
  className?: string;
}

export default function SectionDivider({
  type = 'angle',
  direction = 'down',
  fillColor = 'currentColor',
  height = 100,
  className = '',
}: SectionDividerProps): JSX.Element {
  const viewBoxHeight = 100;
  const aspectRatio = `0 0 1200 ${viewBoxHeight}`;

  // Generate SVG paths based on divider type
  const getPath = (): string => {
    switch (type) {
      case 'angle':
        // Simple diagonal line from one corner
        if (direction === 'down') {
          return `M0,0 L1200,0 L1200,${viewBoxHeight} L0,0 Z`;
        } else {
          return `M0,${viewBoxHeight} L1200,${viewBoxHeight} L1200,0 L0,${viewBoxHeight} Z`;
        }

      case 'curve':
        // Subtle bezier curve
        if (direction === 'down') {
          return `M0,0 L1200,0 L1200,${viewBoxHeight} Q600,${viewBoxHeight * 0.5} 0,${viewBoxHeight} Z`;
        } else {
          return `M0,${viewBoxHeight} L0,0 Q600,${viewBoxHeight * 0.5} 1200,0 L1200,${viewBoxHeight} Z`;
        }

      case 'wave':
        // Wave pattern with multiple curves (Stripe-style)
        if (direction === 'down') {
          return `M0,0 L1200,0 L1200,${viewBoxHeight} Q900,${viewBoxHeight * 0.7} 600,${viewBoxHeight * 0.85} T0,${viewBoxHeight} Z`;
        } else {
          return `M0,${viewBoxHeight} L0,0 Q300,${viewBoxHeight * 0.3} 600,${viewBoxHeight * 0.15} T1200,0 L1200,${viewBoxHeight} Z`;
        }

      default:
        return '';
    }
  };

  return (
    <div
      class={`section-divider section-divider--${type} section-divider--${direction} ${className}`}
      style={{ height: `${height}px` }}
    >
      <svg
        class="section-divider__svg"
        viewBox={aspectRatio}
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d={getPath()}
          fill={fillColor}
        />
      </svg>
    </div>
  );
}
