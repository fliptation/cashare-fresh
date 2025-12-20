import { JSX, ComponentChildren } from "preact";

type GradientTheme = 'default' | 'cashare' | 'sunset' | 'midnight';
type GradientSize = 'sm' | 'md' | 'lg' | 'xl';

interface GradientBreakerProps {
  /** Color theme preset */
  theme?: GradientTheme;
  /** Height variant */
  size?: GradientSize;
  /** Add curved wave edge on top */
  waveTop?: boolean;
  /** Add curved wave edge on bottom */
  waveBottom?: boolean;
  /** Optional content to display over the gradient */
  children?: ComponentChildren;
  /** Additional CSS classes */
  className?: string;
}

/**
 * Animated gradient section breaker with flowing cloud/wave effects.
 * Uses layered CSS gradients with subtle animations for a premium look.
 *
 * @example
 * // Basic usage
 * <GradientBreaker />
 *
 * @example
 * // With Cashare brand colors and content
 * <GradientBreaker theme="cashare" size="lg" waveBottom>
 *   <h2>Unkompliziert zur cleveren Finanzierung</h2>
 * </GradientBreaker>
 */
export default function GradientBreaker({
  theme = 'default',
  size,
  waveTop = false,
  waveBottom = false,
  children,
  className = '',
}: GradientBreakerProps): JSX.Element {
  const classes = [
    'gradient-breaker',
    theme !== 'default' && `gradient-breaker--${theme}`,
    size && `gradient-breaker--${size}`,
    waveTop && 'gradient-breaker--wave-top',
    waveBottom && 'gradient-breaker--wave-bottom',
    className,
  ].filter(Boolean).join(' ');

  return (
    <div class={classes}>
      {/* Animated gradient layers */}
      <div class="gradient-breaker__layer gradient-breaker__layer--1" />
      <div class="gradient-breaker__layer gradient-breaker__layer--2" />
      <div class="gradient-breaker__layer gradient-breaker__layer--3" />
      <div class="gradient-breaker__layer gradient-breaker__layer--4" />
      <div class="gradient-breaker__layer gradient-breaker__layer--5" />

      {/* Optional content overlay */}
      {children && (
        <div class="gradient-breaker__content">
          {children}
        </div>
      )}
    </div>
  );
}
