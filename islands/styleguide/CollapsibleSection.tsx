import { useState } from "preact/hooks";
import { JSX } from "preact";

interface CollapsibleSectionProps {
  title: string;
  defaultOpen?: boolean;
  children: JSX.Element | JSX.Element[];
}

export default function CollapsibleSection({
  title,
  defaultOpen = false,
  children
}: CollapsibleSectionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div class={`styleguide__collapsible ${isOpen ? "styleguide__collapsible--open" : ""}`}>
      <button
        type="button"
        class="styleguide__collapsible-trigger"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span>{title}</span>
        <svg
          class="styleguide__collapsible-icon"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
      <div class="styleguide__collapsible-content">
        {children}
      </div>
    </div>
  );
}
