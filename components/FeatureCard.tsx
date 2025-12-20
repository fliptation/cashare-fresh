import { ComponentChildren } from "preact";

export interface FeatureCardProps {
  icon?: string | ComponentChildren;
  title: string;
  description: string;
  href?: string;
  variant?: 'default' | 'glass' | 'outlined';
  className?: string;
}

export default function FeatureCard({
  icon,
  title,
  description,
  href,
  variant = 'default',
  className = '',
}: FeatureCardProps) {
  const baseClass = 'feature-card';
  const variantClass = `${baseClass}--${variant}`;
  const classes = `${baseClass} ${variantClass} ${className}`.trim();

  const CardContent = () => (
    <>
      {icon && (
        <div class={`${baseClass}__icon-wrapper`}>
          {typeof icon === 'string' ? (
            <div class={`${baseClass}__icon`}>
              <span class={`${baseClass}__icon-text`}>{icon}</span>
            </div>
          ) : (
            <div class={`${baseClass}__icon`}>
              {icon}
            </div>
          )}
        </div>
      )}

      <div class={`${baseClass}__content`}>
        <h3 class={`${baseClass}__title`}>{title}</h3>
        <p class={`${baseClass}__description`}>{description}</p>
      </div>

      {href && (
        <div class={`${baseClass}__arrow`}>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.33333 8H12.6667M12.6667 8L8 3.33333M12.6667 8L8 12.6667"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      )}

      <div class={`${baseClass}__glow`}></div>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        class={classes}
        data-tilt="true"
      >
        <CardContent />
      </a>
    );
  }

  return (
    <div class={classes} data-tilt="true">
      <CardContent />
    </div>
  );
}
