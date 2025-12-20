export function TopBar() {
  return (
    <div class="top-bar">
      <div class="top-bar__container">
        <a href="/styleguide" class="top-bar__link">
          <svg class="top-bar__icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5">
            <rect x="2" y="2" width="5" height="5" rx="1" />
            <rect x="9" y="2" width="5" height="5" rx="1" />
            <rect x="2" y="9" width="5" height="5" rx="1" />
            <rect x="9" y="9" width="5" height="5" rx="1" />
          </svg>
          Styleguide
        </a>
      </div>
    </div>
  );
}
