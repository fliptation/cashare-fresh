export function ButtonArrow() {
  return (
    <svg class="btn__arrow" width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path
        class="arrow-line"
        d="M2 8H10"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
      />
      <path
        d="M6 4L10 8L6 12"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
