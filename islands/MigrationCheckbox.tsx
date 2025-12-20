import { useEffect, useState } from "preact/hooks";

const STORAGE_KEY = "cashare-migration-approved";

interface Props {
  pageId: string;
  label?: string;
}

export default function MigrationCheckbox({ pageId, label = "Content OK" }: Props) {
  const [checked, setChecked] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Load from localStorage on mount
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const approved: string[] = JSON.parse(saved);
      setChecked(approved.includes(pageId));
    }
    setMounted(true);
  }, [pageId]);

  const handleChange = (e: Event) => {
    const target = e.target as HTMLInputElement;
    const isChecked = target.checked;
    setChecked(isChecked);

    // Save to localStorage
    const saved = localStorage.getItem(STORAGE_KEY);
    let approved: string[] = saved ? JSON.parse(saved) : [];

    if (isChecked) {
      if (!approved.includes(pageId)) {
        approved.push(pageId);
      }
    } else {
      approved = approved.filter((id) => id !== pageId);
    }

    localStorage.setItem(STORAGE_KEY, JSON.stringify(approved));
  };

  if (!mounted) {
    return (
      <label class="migration__checkbox">
        <input type="checkbox" disabled />
        <span class="migration__checkbox-label">{label}</span>
      </label>
    );
  }

  return (
    <label class={`migration__checkbox ${checked ? "migration__checkbox--checked" : ""}`}>
      <input
        type="checkbox"
        checked={checked}
        onChange={handleChange}
      />
      <span class="migration__checkbox-label">{label}</span>
    </label>
  );
}
