# Header Component Implementation

## Overview

A Stripe-inspired, fully interactive header component built as a Preact island with smooth animations, glassmorphism effects, and responsive design.

## Files Created/Updated

### 1. Interactive Island Component
**Location:** `/Users/vedi/Repositories/cashare-website/cashare-fresh/islands/Header.tsx`

- **Framework:** Preact with Signals for state management
- **Interactivity:** Full client-side interactivity as a Fresh island
- **Features:**
  - Sticky header with scroll detection
  - Animated dropdown menus with hover/focus states
  - Mobile hamburger menu with slide-in overlay
  - Language switcher (DE, EN, FR)
  - Active link indicators
  - Keyboard navigation support
  - Escape key closes menus/modals

### 2. Enhanced Styles
**Location:** `/Users/vedi/Repositories/cashare-website/cashare-fresh/static/styles/blocks/header.css`

- **Architecture:** BEM naming convention
- **Effects:**
  - Glassmorphism (backdrop blur) on scroll
  - Smooth fade-down animations for dropdowns
  - Slide-in animations for mobile menu
  - Animated hamburger-to-X icon
  - Gradient CTA button with hover effects
  - Animated arrow indicators on dropdown items

### 3. Layout Integration
**Location:** `/Users/vedi/Repositories/cashare-website/cashare-fresh/components/Layout.tsx`

- Updated to use the interactive Header island
- Added `currentPath` prop for active link detection
- Added padding-top to main content to account for fixed header

## Key Features

### 1. Sticky Header with Scroll Effects
```tsx
const isScrolled = signal(false);

useEffect(() => {
  const handleScroll = () => {
    isScrolled.value = window.scrollY > 20;
  };
  window.addEventListener("scroll", handleScroll);
}, []);
```

When scrolled beyond 20px:
- Background changes to semi-transparent white
- Backdrop blur effect (20px)
- Border and shadow appear
- Maintains readability over content

### 2. Animated Dropdown Menus

**Desktop:**
- Hover to open/close
- Smooth slide-down + fade-in animation
- Glass effect when header is scrolled
- Animated gradient sweep on hover
- Arrow indicator slides in on hover

**Animation Classes:**
- `.header__dropdown--open` - Triggers visibility and transform
- `.animate--fade-down` - Slide-down animation
- Staggered delays for menu items (50ms increments)

### 3. Mobile Menu

**Features:**
- Slide-in from right
- Backdrop blur overlay
- Animated hamburger-to-X icon
- Expandable sections with chevron rotation
- Staggered animations on menu items
- Body scroll lock when open

**Animation Details:**
```css
.header__mobile-menu {
  transition: right var(--duration-slow) var(--ease-out);
}

.header__mobile-menu--open {
  right: 0;
}
```

### 4. Language Switcher

Three-language support with pill-style buttons:
- Visual active state (primary color background)
- Smooth color transitions
- Hover states
- Mobile: Full-width buttons with language names
- Desktop: Compact 2-letter codes

### 5. CTA Button

Stripe-inspired gradient button:
- Linear gradient (primary → secondary)
- Reverse gradient on hover (smooth opacity transition)
- Lift effect on hover (translateY + shadow)
- Press effect on active state
- Pill-shaped border radius

## CSS Architecture

### BEM Naming Convention

```
Block:     .header
Element:   .header__logo, .header__nav, .header__dropdown
Modifier:  .header--scrolled, .header__dropdown--open
```

### Animation System

Uses CSS custom properties from `/static/styles/animations.css`:
- `--duration-fast: 200ms`
- `--duration-normal: 300ms`
- `--duration-slow: 500ms`
- `--ease-out: cubic-bezier(0.16, 1, 0.3, 1)`
- `--ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1)`

### Glassmorphism

```css
.header--scrolled {
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
}
```

## State Management

Uses Preact Signals for reactive state:

```tsx
const isScrolled = signal(false);          // Scroll state
const isMobileMenuOpen = signal(false);    // Mobile menu toggle
const activeDropdown = signal<string | null>(null);  // Active dropdown
```

## Accessibility Features

1. **Keyboard Navigation:**
   - Tab through all interactive elements
   - Escape key closes dropdowns and mobile menu
   - Focus styles (2px primary color outline)

2. **ARIA Attributes:**
   - `aria-label` on toggle buttons
   - `aria-expanded` on mobile menu toggle

3. **Reduced Motion:**
   - Respects `prefers-reduced-motion` media query
   - Disables animations for users who prefer reduced motion

4. **High Contrast Mode:**
   - Enhanced borders in high contrast mode
   - Underlines on links for better visibility

## Responsive Breakpoints

- **Mobile:** < 768px
  - Hamburger menu visible
  - Navigation hidden
  - CTA button hidden
  - Compact logo

- **Tablet/Desktop:** ≥ 768px
  - Full navigation visible
  - Hamburger menu hidden
  - Desktop login button visible
  - CTA button visible
  - Larger logo

- **Large Desktop:** ≥ 1024px
  - Increased spacing
  - Larger font sizes

## Integration Guide

### Using the Header in a Route

```tsx
import { Layout } from "../components/Layout.tsx";
import type { Locale } from "../lib/i18n/index.ts";

export default function MyPage() {
  const locale: Locale = "de";

  return (
    <Layout locale={locale} currentPath="/current-path">
      {/* Your page content */}
    </Layout>
  );
}
```

### Active Link Detection

The header automatically highlights active links based on `currentPath`:

```tsx
const isActive = (href: string) => {
  return currentPath === href || currentPath.startsWith(href + "/");
};
```

## Browser Support

- **Modern Browsers:** Full support (Chrome, Firefox, Safari, Edge)
- **Backdrop Filter:** Supported in all modern browsers
  - Chrome/Edge 76+
  - Firefox 103+
  - Safari 9+
- **Fallback:** Semi-transparent background without blur

## Performance Optimizations

1. **Event Listeners:**
   - Cleanup on component unmount
   - Debounced scroll handling (native browser optimization)

2. **CSS:**
   - Hardware-accelerated transforms
   - Will-change hints for animated properties
   - Reduced motion support

3. **Animations:**
   - CSS-based animations (GPU accelerated)
   - Minimal JavaScript involvement

## Customization

### Colors

Modify CSS custom properties in `/static/styles/variables.css`:
```css
--color-primary: #007399;
--color-secondary: #00B5CE;
```

### Timing

Adjust animation timing in `/static/styles/animations.css`:
```css
--duration-normal: 300ms;
--ease-out: cubic-bezier(0.16, 1, 0.3, 1);
```

### Navigation Items

Update the navigation object in `/islands/Header.tsx`:
```tsx
const navigation = {
  de: {
    sections: [
      {
        label: "Your Label",
        href: "/your-path",
        items: [/* dropdown items */]
      }
    ]
  }
};
```

## Testing Checklist

- [ ] Header appears on all pages
- [ ] Sticky header activates on scroll
- [ ] Glass effect appears when scrolled
- [ ] Desktop dropdowns open on hover
- [ ] Mobile menu slides in smoothly
- [ ] Hamburger animates to X
- [ ] Language switcher highlights active language
- [ ] Active links are highlighted
- [ ] CTA button gradient animates on hover
- [ ] Escape key closes all menus
- [ ] Body scroll locks when mobile menu is open
- [ ] Keyboard navigation works throughout
- [ ] Reduced motion is respected

## Known Issues / Future Enhancements

- [ ] Add mega menu support for more complex dropdowns
- [ ] Add search functionality
- [ ] Add user avatar/account dropdown
- [ ] Add notifications indicator
- [ ] Consider adding progress bar on scroll

## Support

For questions or issues, refer to:
- Fresh documentation: https://fresh.deno.dev
- Preact Signals: https://preactjs.com/guide/v10/signals/
