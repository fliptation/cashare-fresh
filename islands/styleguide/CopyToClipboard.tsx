import { useState } from "preact/hooks";
import { JSX } from "preact";

interface CopyToClipboardProps {
  value: string;
  children: JSX.Element | string;
}

export default function CopyToClipboard({ value, children }: CopyToClipboardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <button
      type="button"
      class={`styleguide__code styleguide__code--copyable ${copied ? "styleguide__code--copied" : ""}`}
      onClick={handleCopy}
      title={`Kopieren: ${value}`}
    >
      {children}
    </button>
  );
}
