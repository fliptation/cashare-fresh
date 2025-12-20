import { Head } from "$fresh/runtime.ts";
import ActiveNavigation from "../islands/styleguide/ActiveNavigation.tsx";
import CopyToClipboard from "../islands/styleguide/CopyToClipboard.tsx";
import CollapsibleSection from "../islands/styleguide/CollapsibleSection.tsx";

// Section definitions for navigation
const sections = [
  { id: "changelog", label: "Changelog", icon: "changelog" },
  { id: "logo", label: "Logo", icon: "logo" },
  { id: "og-image", label: "OG Image", icon: "share" },
  { id: "colors", label: "Farben", icon: "palette" },
  { id: "typography", label: "Typografie", icon: "type" },
  { id: "spacing", label: "Abstände", icon: "spacing" },
  { id: "radius", label: "Border Radius", icon: "radius" },
  { id: "shadows", label: "Schatten", icon: "shadow" },
  { id: "icons", label: "Icons", icon: "icons" },
  { id: "buttons", label: "Buttons", icon: "button" },
  { id: "alerts", label: "Alerts", icon: "alert" },
  { id: "loading", label: "Loading", icon: "loader" },
  { id: "modals", label: "Modals", icon: "modal" },
  { id: "cards", label: "Karten", icon: "card" },
  { id: "forms", label: "Formulare", icon: "form" },
  { id: "accordion", label: "Accordion", icon: "accordion" },
  { id: "timeline", label: "Timeline", icon: "timeline" },
  { id: "animations", label: "Animationen", icon: "animation" },
  { id: "layout", label: "Layout", icon: "layout" },
  { id: "error-pages", label: "Error Pages", icon: "warning" },
  { id: "components", label: "Komponenten", icon: "components" },
];

// Color data
const primaryColors = [
  {
    name: "Primary",
    variable: "--color-primary",
    hex: "#007399",
    class: "styleguide__color--primary",
  },
  {
    name: "Secondary",
    variable: "--color-secondary",
    hex: "#00B5CE",
    class: "styleguide__color--secondary",
  },
  {
    name: "Accent",
    variable: "--color-accent",
    hex: "#00D924",
    class: "styleguide__color--accent",
  },
  {
    name: "Text",
    variable: "--color-text",
    hex: "#1D2129",
    class: "styleguide__color--text",
  },
];

const neutralColors = [
  {
    name: "Gray Dark",
    variable: "--color-gray-dark",
    hex: "#424748",
    class: "styleguide__color--gray-dark",
  },
  {
    name: "Gray",
    variable: "--color-gray",
    hex: "#929292",
    class: "styleguide__color--gray",
  },
  {
    name: "Silver",
    variable: "--color-silver",
    hex: "#C4C4C4",
    class: "styleguide__color--silver",
  },
  {
    name: "Border",
    variable: "--color-border",
    hex: "#E5E5E5",
    class: "styleguide__color--border",
  },
  {
    name: "Background",
    variable: "--color-bg-light",
    hex: "#F5F5F5",
    class: "styleguide__color--bg-light",
  },
  {
    name: "White",
    variable: "--color-white",
    hex: "#FFFFFF",
    class: "styleguide__color--white",
  },
];

const statusColors = [
  {
    name: "Success",
    variable: "--color-success",
    hex: "#16a34a",
    class: "styleguide__color--success",
  },
  {
    name: "Warning",
    variable: "--color-warning",
    hex: "#ca8a04",
    class: "styleguide__color--warning",
  },
  {
    name: "Error",
    variable: "--color-error",
    hex: "#dc2626",
    class: "styleguide__color--error",
  },
];

const serviceColors = [
  {
    name: "Borrowing",
    variable: "--color-borrowing",
    hex: "#21CFE0",
    class: "styleguide__color--borrowing",
  },
  {
    name: "Investing",
    variable: "--color-investing",
    hex: "#23C343",
    class: "styleguide__color--investing",
  },
];

// Typography data
const fontWeights = [
  { name: "Regular", weight: 400, class: "styleguide__font--regular" },
  { name: "Medium", weight: 500, class: "styleguide__font--medium" },
  { name: "SemiBold", weight: 600, class: "styleguide__font--semibold" },
  { name: "Bold", weight: 700, class: "styleguide__font--bold" },
  { name: "ExtraBold", weight: 800, class: "styleguide__font--extrabold" },
];

const fontSizes = [
  {
    name: "Heading",
    variable: "--text-5xl",
    size: "3.5rem (56px)",
    class: "styleguide__text--5xl",
  },
  {
    name: "Section Title",
    variable: "--text-3xl",
    size: "2.125rem (34px)",
    class: "styleguide__text--3xl",
  },
  {
    name: "Card Title",
    variable: "--text-2xl",
    size: "2rem (32px)",
    class: "styleguide__text--2xl",
  },
  {
    name: "Subtitle",
    variable: "--text-xl",
    size: "1.5rem (24px)",
    class: "styleguide__text--xl",
  },
  {
    name: "Large Text",
    variable: "--text-lg",
    size: "1.25rem (20px)",
    class: "styleguide__text--lg",
  },
  {
    name: "Body Text",
    variable: "--text-base",
    size: "1.125rem (18px)",
    class: "styleguide__text--base",
  },
  {
    name: "Small Text",
    variable: "--text-sm",
    size: "1rem (16px)",
    class: "styleguide__text--sm",
  },
  {
    name: "Caption",
    variable: "--text-xs",
    size: "0.875rem (14px)",
    class: "styleguide__text--xs",
  },
  {
    name: "Label",
    variable: "--text-2xs",
    size: "0.75rem (12px)",
    class: "styleguide__text--2xs",
  },
];

// Spacing data
const spacingScale = [
  {
    name: "--space-1",
    value: "0.25rem (4px)",
    class: "styleguide__spacing--1",
  },
  { name: "--space-2", value: "0.5rem (8px)", class: "styleguide__spacing--2" },
  {
    name: "--space-3",
    value: "0.75rem (12px)",
    class: "styleguide__spacing--3",
  },
  { name: "--space-4", value: "1rem (16px)", class: "styleguide__spacing--4" },
  {
    name: "--space-5",
    value: "1.25rem (20px)",
    class: "styleguide__spacing--5",
  },
  {
    name: "--space-6",
    value: "1.5rem (24px)",
    class: "styleguide__spacing--6",
  },
  {
    name: "--space-7",
    value: "1.75rem (28px)",
    class: "styleguide__spacing--7",
  },
  { name: "--space-8", value: "2rem (32px)", class: "styleguide__spacing--8" },
];

// Border radius data
const radiusScale = [
  { name: "--radius-sm", value: "0.5rem", class: "styleguide__radius--sm" },
  { name: "--radius-md", value: "0.75rem", class: "styleguide__radius--md" },
  { name: "--radius-lg", value: "1rem", class: "styleguide__radius--lg" },
  { name: "--radius-xl", value: "1.5rem", class: "styleguide__radius--xl" },
  { name: "--radius-full", value: "9999px", class: "styleguide__radius--full" },
];

// Shadow data
const shadows = [
  {
    name: "--shadow-card",
    desc: "Für Karten",
    class: "styleguide__shadow--card",
  },
  {
    name: "--shadow-tooltip",
    desc: "Für Tooltips",
    class: "styleguide__shadow--tooltip",
  },
  {
    name: "--shadow-modal",
    desc: "Für Modals",
    class: "styleguide__shadow--modal",
  },
  {
    name: "shadow-primary",
    desc: "Primary Buttons",
    class: "styleguide__shadow--primary",
  },
];

// Icons (inline SVG definitions)
const icons = {
  check:
    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>`,
  close:
    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`,
  chevronDown:
    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>`,
  chevronRight:
    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>`,
  arrow:
    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>`,
  search:
    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`,
  user:
    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`,
  mail:
    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22 6 12 13 2 6"/></svg>`,
  phone:
    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>`,
  home:
    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
  settings:
    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z"/></svg>`,
  heart:
    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>`,
  star:
    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
  info:
    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>`,
  warning:
    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`,
  upload:
    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>`,
  download:
    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>`,
  calendar:
    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>`,
  clock:
    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
  money:
    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>`,
};

// Breakpoints data
const breakpoints = [
  { name: "Mobile", range: "< 480px", description: "Kleine Smartphones" },
  {
    name: "Mobile Large",
    range: "480px - 768px",
    description: "Grosse Smartphones",
  },
  {
    name: "Tablet",
    range: "768px - 1024px",
    description: "Tablets und kleine Laptops",
  },
  {
    name: "Desktop",
    range: "1024px - 1440px",
    description: "Desktop-Bildschirme",
  },
  { name: "Large", range: "> 1440px", description: "Grosse Bildschirme" },
];

export default function Styleguide() {
  return (
    <>
      <Head>
        <title>Styleguide | Cashare Design System</title>
        <link rel="stylesheet" href="/styles/global.css" />
      </Head>

      {/* Top Bar */}
      <div class="top-bar top-bar--styleguide">
        <div class="top-bar__container">
          <a href="/" class="top-bar__back">
            <svg
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <path d="M10 12L6 8l4-4" />
            </svg>
            Back to Site
          </a>
          <span class="top-bar__title">Design System</span>
        </div>
      </div>

      <div class="styleguide-layout">
        {/* Sidebar Navigation */}
        <aside class="styleguide-nav">
          <div class="styleguide-nav__header">
            <a href="/" class="styleguide-nav__logo">
              <img
                src="/images/cashare-black-logo.svg"
                alt="Cashare"
                class="styleguide-nav__logo-full"
              />
              <img
                src="/images/cashare-logomark.svg"
                alt="Cashare"
                class="styleguide-nav__logo-mark"
              />
            </a>
            <div class="styleguide-nav__header-row">
              <span class="styleguide-nav__badge">Design System</span>
              <span class="styleguide-nav__version">v1.0</span>
            </div>
          </div>

          <ActiveNavigation sections={sections} />
        </aside>

        {/* Main Content */}
        <main class="styleguide">
          <div class="styleguide__container">
            {/* Header */}
            <header class="styleguide__header">
              <span class="styleguide__label">Design System</span>
              <h1 class="styleguide__title">Cashare Styleguide</h1>
              <p class="styleguide__subtitle">
                Alli Komponentä, Farbä und Schriftä wo mir z'Zug so bruuchid.
                Eifach schön, oder?
              </p>
            </header>

            {/* 1. Changelog Section */}
            <section id="changelog" class="styleguide__section">
              <h2 class="styleguide__section-title">Was isch neu?</h2>
              <CollapsibleSection title="Versione-Gschicht" defaultOpen={true}>
                <div class="styleguide__changelog">
                  <div class="styleguide__changelog-entry">
                    <span class="styleguide__changelog-version">v1.0</span>
                    <span class="styleguide__changelog-date">
                      20. Dezämber 2024
                    </span>
                    <p>
                      Erscht richtigi Version! Alli Komponentä, Farbä und
                      Schriftä sind jetzt parat. Mir händ mega büezt - jetzt
                      chamer loslege! 🎉
                    </p>
                  </div>
                  <div class="styleguide__changelog-entry">
                    <span class="styleguide__changelog-version">v0.9</span>
                    <span class="styleguide__changelog-date">
                      15. Dezämber 2024
                    </span>
                    <p>
                      Beta-Version mit Chnöpf, Chärtli und Formular. Isch nonig
                      perfekt gsi, aber mir händ dra gschaffet wie d'Zuger am
                      Chriesitopf.
                    </p>
                  </div>
                </div>
              </CollapsibleSection>
            </section>

            {/* 2. Logo Section */}
            <section id="logo" class="styleguide__section">
              <h2 class="styleguide__section-title">S'Logo</h2>

              <div class="styleguide__group">
                <h3 class="styleguide__group-title">Logo Variantä</h3>
                <p class="styleguide__description">
                  S'Cashare Logo in verschidene Farbä - je noch Hintergrund.
                  Bitte nöd verdrehe oder komisch skaliere, susch git's Ärger!
                  😤
                </p>
                <div class="styleguide__demo">
                  <div class="styleguide__logo-grid">
                    <div class="styleguide__logo-item styleguide__logo-item--light">
                      <img
                        src="/images/cashare-black-logo.svg"
                        alt="Cashare Logo (Dunkel)"
                        class="styleguide__logo-image"
                      />
                      <span class="styleguide__logo-label">
                        Für helli Hintergründ
                      </span>
                    </div>
                    <div class="styleguide__logo-item styleguide__logo-item--dark">
                      <img
                        src="/images/cashare-white-logo.svg"
                        alt="Cashare Logo (Hell)"
                        class="styleguide__logo-image"
                      />
                      <span class="styleguide__logo-label">
                        Für dunkli Hintergründ
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div class="styleguide__group">
                <h3 class="styleguide__group-title">S'Logomark</h3>
                <p class="styleguide__description">
                  S'chlii Bildli für Favicons, App-Icons oder wenn's eng wird.
                  Praktisch wie es Sackmesser! 🔪
                </p>
                <div class="styleguide__demo">
                  <div class="styleguide__logo-grid">
                    <div class="styleguide__logo-item styleguide__logo-item--light styleguide__logo-item--small">
                      <img
                        src="/images/cashare-logomark.svg"
                        alt="Cashare Logomark"
                        class="styleguide__logo-image styleguide__logo-image--mark"
                      />
                      <span class="styleguide__logo-label">
                        Logomark
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div class="styleguide__group">
                <h3 class="styleguide__group-title">Mindestabstand</h3>
                <p class="styleguide__description">
                  S'Logo bruucht Platz zum Schnuufe! Mindestens d'Höchi vom "C"
                  uf allne Sitä. Nöd azwänge wie Sardine i de Büchse! 🐟
                </p>
                <div class="styleguide__demo">
                  <div class="styleguide__logo-clearspace">
                    <img
                      src="/images/cashare-black-logo.svg"
                      alt="Cashare Logo mit Abstand"
                      class="styleguide__logo-image"
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* 3. OG Image Section */}
            <section id="og-image" class="styleguide__section">
              <h2 class="styleguide__section-title">OG Image 📱</h2>

              <div class="styleguide__group">
                <h3 class="styleguide__group-title">Vorschau</h3>
                <p class="styleguide__description">
                  Das Bildli wo erschint wenn öpper üsi Syte teilt uf WhatsApp,
                  Facebook und so. Sieht schön us, oder? 😎
                </p>
                <div class="styleguide__demo">
                  <div class="styleguide__og-image-wrapper">
                    <img
                      src="/images/og-image.svg"
                      alt="Cashare OG Image"
                      class="styleguide__og-image"
                    />
                  </div>
                </div>
              </div>

              <div class="styleguide__group">
                <h3 class="styleguide__group-title">Export Aleitig</h3>
                <div class="alert alert--info">
                  <span
                    class="alert__icon"
                    dangerouslySetInnerHTML={{ __html: icons.info }}
                  />
                  <div class="alert__content">
                    <p class="alert__title">PNG Export bruucht's! 🖼️</p>
                    <p class="alert__message">
                      Social Media checkt SVG nöd. So gaht's:
                      <br />1. Mach <code>/images/og-image.svg</code>{" "}
                      im Browser uf
                      <br />2. Screenshot mache (1200x630px)
                      <br />3. Als <code>og-image.png</code> i{" "}
                      <code>/static/images/</code> speichere
                      <br />Eifach, gäll? 👍
                    </p>
                  </div>
                </div>
              </div>

              <div class="styleguide__group">
                <h3 class="styleguide__group-title">Meta Tags</h3>
                <div class="styleguide__demo">
                  <div class="styleguide__code-block">
                    <code>
                      &lt;meta property="og:image"
                      content="https://cashare.ch/images/og-image.png" /&gt;
                    </code>
                    <br />
                    <code>
                      &lt;meta property="og:image:width" content="1200" /&gt;
                    </code>
                    <br />
                    <code>
                      &lt;meta property="og:image:height" content="630" /&gt;
                    </code>
                    <br />
                    <code>
                      &lt;meta name="twitter:card" content="summary_large_image"
                      /&gt;
                    </code>
                    <br />
                    <code>
                      &lt;meta name="twitter:image"
                      content="https://cashare.ch/images/og-image.png" /&gt;
                    </code>
                  </div>
                </div>
              </div>
            </section>

            {/* 4. Colors Section */}
            <section id="colors" class="styleguide__section">
              <h2 class="styleguide__section-title">Farbä</h2>

              <div class="styleguide__group">
                <h3 class="styleguide__group-title">Hauptfarbä</h3>
                <p class="styleguide__description">
                  D'Farbä vo Cashare - schöner als de Zugersee im Summer! 💙
                </p>
                <div class="styleguide__color-grid">
                  {primaryColors.map((color) => (
                    <div class="styleguide__color-card" key={color.variable}>
                      <div class={`styleguide__color-preview ${color.class}`}>
                      </div>
                      <div class="styleguide__color-info">
                        <span class="styleguide__color-name">{color.name}</span>
                        <CopyToClipboard value={color.variable}>
                          {color.variable}
                        </CopyToClipboard>
                        <span class="styleguide__color-hex">{color.hex}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div class="styleguide__group">
                <h3 class="styleguide__group-title">Neutrali Farbä</h3>
                <div class="styleguide__color-grid">
                  {neutralColors.map((color) => (
                    <div class="styleguide__color-card" key={color.variable}>
                      <div class={`styleguide__color-preview ${color.class}`}>
                      </div>
                      <div class="styleguide__color-info">
                        <span class="styleguide__color-name">{color.name}</span>
                        <CopyToClipboard value={color.variable}>
                          {color.variable}
                        </CopyToClipboard>
                        <span class="styleguide__color-hex">{color.hex}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div class="styleguide__group">
                <h3 class="styleguide__group-title">Status-Farbä</h3>
                <div class="styleguide__color-grid">
                  {statusColors.map((color) => (
                    <div class="styleguide__color-card" key={color.variable}>
                      <div class={`styleguide__color-preview ${color.class}`}>
                      </div>
                      <div class="styleguide__color-info">
                        <span class="styleguide__color-name">{color.name}</span>
                        <CopyToClipboard value={color.variable}>
                          {color.variable}
                        </CopyToClipboard>
                        <span class="styleguide__color-hex">{color.hex}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div class="styleguide__group">
                <h3 class="styleguide__group-title">Service-Farbä</h3>
                <div class="styleguide__color-grid">
                  {serviceColors.map((color) => (
                    <div class="styleguide__color-card" key={color.variable}>
                      <div class={`styleguide__color-preview ${color.class}`}>
                      </div>
                      <div class="styleguide__color-info">
                        <span class="styleguide__color-name">{color.name}</span>
                        <CopyToClipboard value={color.variable}>
                          {color.variable}
                        </CopyToClipboard>
                        <span class="styleguide__color-hex">{color.hex}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div class="styleguide__group">
                <h3 class="styleguide__group-title">Gradient</h3>
                <div class="styleguide__demo">
                  <div class="styleguide__gradient-preview gradient-hero"></div>
                  <p class="styleguide__gradient-label">
                    De Hero Gradient - so schön wie en Sunneuntergang überm
                    Rigi! 🌅
                  </p>
                </div>
              </div>
            </section>

            {/* 4. Typography Section */}
            <section id="typography" class="styleguide__section">
              <h2 class="styleguide__section-title">Typografi</h2>

              <div class="styleguide__group">
                <h3 class="styleguide__group-title">D'Schrift</h3>
                <p class="styleguide__description">
                  Plus Jakarta Sans - die schönschti Schrift sit em Gutenberg!
                  📜
                </p>
                <div class="styleguide__demo">
                  <div class="styleguide__font-samples">
                    {fontWeights.map((font) => (
                      <p
                        class={`styleguide__font-sample ${font.class}`}
                        key={font.weight}
                      >
                        Plus Jakarta Sans - {font.name} {font.weight}
                      </p>
                    ))}
                  </div>
                </div>
              </div>

              <div class="styleguide__group">
                <h3 class="styleguide__group-title">Schriftgrössä</h3>
                <div class="styleguide__demo">
                  <div class="styleguide__type-scale">
                    {fontSizes.map((size) => (
                      <div class="styleguide__type-item" key={size.variable}>
                        <span class={`styleguide__type-preview ${size.class}`}>
                          {size.name}
                        </span>
                        <div class="styleguide__type-meta">
                          <CopyToClipboard value={size.variable}>
                            {size.variable}
                          </CopyToClipboard>
                          <span>{size.size}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* 5. Spacing Section */}
            <section id="spacing" class="styleguide__section">
              <h2 class="styleguide__section-title">Abständ</h2>

              <div class="styleguide__group">
                <h3 class="styleguide__group-title">Abstands-Skala</h3>
                <p class="styleguide__description">
                  Konsistenti Abständ basierend uf 4px - so ordentlich wie
                  d'Schwiizer Pünktlichkeit! 🕐
                </p>
                <div class="styleguide__demo">
                  <div class="styleguide__spacing-scale">
                    {spacingScale.map((space) => (
                      <div class="styleguide__spacing-item" key={space.name}>
                        <div class={`styleguide__spacing-bar ${space.class}`}>
                        </div>
                        <div class="styleguide__spacing-meta">
                          <CopyToClipboard value={space.name}>
                            {space.name}
                          </CopyToClipboard>
                          <span>{space.value}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* 6. Border Radius Section */}
            <section id="radius" class="styleguide__section">
              <h2 class="styleguide__section-title">Border Radius</h2>

              <div class="styleguide__group">
                <div class="styleguide__demo">
                  <div class="styleguide__radius-grid">
                    {radiusScale.map((radius) => (
                      <div class="styleguide__radius-item" key={radius.name}>
                        <div
                          class={`styleguide__radius-preview ${radius.class}`}
                        >
                        </div>
                        <CopyToClipboard value={radius.name}>
                          {radius.name}
                        </CopyToClipboard>
                        <span class="styleguide__radius-value">
                          {radius.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* 7. Shadows Section */}
            <section id="shadows" class="styleguide__section">
              <h2 class="styleguide__section-title">Schattä</h2>

              <div class="styleguide__group">
                <div class="styleguide__demo">
                  <div class="styleguide__shadow-grid">
                    {shadows.map((shadow) => (
                      <div class="styleguide__shadow-item" key={shadow.name}>
                        <div
                          class={`styleguide__shadow-preview ${shadow.class}`}
                        >
                        </div>
                        <CopyToClipboard value={shadow.name}>
                          {shadow.name}
                        </CopyToClipboard>
                        <span class="styleguide__shadow-desc">
                          {shadow.desc}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* 8. Icons Section */}
            <section id="icons" class="styleguide__section">
              <h2 class="styleguide__section-title">Icons</h2>

              <div class="styleguide__group">
                <h3 class="styleguide__group-title">Icon Sammlig</h3>
                <p class="styleguide__description">
                  Klick uf es Icon zum de Name kopiere. Eifacher als
                  Chriesichueche bache! 🍒
                </p>
                <div class="styleguide__demo">
                  <div class="styleguide__icons-grid">
                    {Object.entries(icons).map(([name, svg]) => (
                      <div
                        class="styleguide__icon-item"
                        key={name}
                        title={name}
                      >
                        <span
                          class="styleguide__icon-preview"
                          dangerouslySetInnerHTML={{ __html: svg }}
                        />
                        <span class="styleguide__icon-name">{name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div class="styleguide__group">
                <h3 class="styleguide__group-title">Icon Grössä</h3>
                <div class="styleguide__demo">
                  <div class="styleguide__icon-sizes">
                    {[16, 20, 24, 32, 48].map((size) => (
                      <div
                        class={`styleguide__icon-size styleguide__icon-size--${size}`}
                        key={size}
                      >
                        <span
                          dangerouslySetInnerHTML={{ __html: icons.heart }}
                        />
                        <span class="styleguide__icon-name">{size}px</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* 9. Buttons Section */}
            <section id="buttons" class="styleguide__section">
              <h2 class="styleguide__section-title">Chnöpf</h2>

              <div class="styleguide__group">
                <h3 class="styleguide__group-title">Variantä</h3>
                <div class="styleguide__demo">
                  <div class="styleguide__button-row">
                    <button class="btn btn--primary">Primary</button>
                    <button class="btn btn--secondary">Secondary</button>
                    <button class="btn btn--outline">Outline</button>
                    <button class="btn btn--ghost">Ghost</button>
                  </div>
                </div>
              </div>

              <div class="styleguide__group">
                <h3 class="styleguide__group-title">Grössä</h3>
                <div class="styleguide__demo">
                  <div class="styleguide__button-row">
                    <button class="btn btn--primary btn--sm">Chli</button>
                    <button class="btn btn--primary">Normal</button>
                    <button class="btn btn--primary btn--lg">Gross</button>
                  </div>
                </div>
              </div>

              <div class="styleguide__group">
                <h3 class="styleguide__group-title">Zuständ</h3>
                <div class="styleguide__demo">
                  <div class="styleguide__states-grid">
                    <div class="styleguide__state-item">
                      <button class="btn btn--primary">Normal</button>
                      <span class="styleguide__state-label">Default</span>
                    </div>
                    <div class="styleguide__state-item">
                      <button class="btn btn--primary styleguide__btn--hover">
                        Hover
                      </button>
                      <span class="styleguide__state-label">Hover</span>
                    </div>
                    <div class="styleguide__state-item">
                      <button class="btn btn--primary styleguide__btn--focus">
                        Focus
                      </button>
                      <span class="styleguide__state-label">Focus</span>
                    </div>
                    <div class="styleguide__state-item">
                      <button class="btn btn--primary styleguide__btn--active">
                        Active
                      </button>
                      <span class="styleguide__state-label">Active</span>
                    </div>
                    <div class="styleguide__state-item">
                      <button class="btn btn--primary" disabled>
                        Disabled
                      </button>
                      <span class="styleguide__state-label">Disabled</span>
                    </div>
                    <div class="styleguide__state-item">
                      <button class="btn btn--primary btn--loading">
                        Loading
                      </button>
                      <span class="styleguide__state-label">Loading</span>
                    </div>
                  </div>
                </div>
              </div>

              <div class="styleguide__group">
                <h3 class="styleguide__group-title">Uf dunklem Hintergrund</h3>
                <div class="styleguide__demo styleguide__demo--dark">
                  <div class="styleguide__button-row">
                    <button class="btn btn--white">White</button>
                    <button class="btn btn--outline btn--white">Outline</button>
                  </div>
                </div>
              </div>
            </section>

            {/* 10. Alerts Section */}
            <section id="alerts" class="styleguide__section">
              <h2 class="styleguide__section-title">Mäldigä & Notifications</h2>

              <div class="styleguide__group">
                <h3 class="styleguide__group-title">Alert Variantä</h3>
                <div class="styleguide__demo">
                  <div class="styleguide__form-stack">
                    <div class="alert alert--info">
                      <span
                        class="alert__icon"
                        dangerouslySetInnerHTML={{ __html: icons.info }}
                      />
                      <div class="alert__content">
                        <p class="alert__title">Info</p>
                        <p class="alert__message">
                          Das isch eifach e Information. Nüt Wildes! 🧘
                        </p>
                      </div>
                    </div>
                    <div class="alert alert--success">
                      <span
                        class="alert__icon"
                        dangerouslySetInnerHTML={{ __html: icons.check }}
                      />
                      <div class="alert__content">
                        <p class="alert__title">Erfolg</p>
                        <p class="alert__message">
                          Alles im grüene Bereich! Hät klappt wie am Schnürli.
                          🎯
                        </p>
                      </div>
                    </div>
                    <div class="alert alert--warning">
                      <span
                        class="alert__icon"
                        dangerouslySetInnerHTML={{ __html: icons.warning }}
                      />
                      <div class="alert__content">
                        <p class="alert__title">Obacht!</p>
                        <p class="alert__message">
                          Pass uf, da stimmt öppis nöd ganz. Lueg mol gnauer
                          ane! ⚠️
                        </p>
                      </div>
                    </div>
                    <div class="alert alert--error">
                      <span
                        class="alert__icon"
                        dangerouslySetInnerHTML={{ __html: icons.close }}
                      />
                      <div class="alert__content">
                        <p class="alert__title">Hoppla!</p>
                        <p class="alert__message">
                          Da isch öppis schiefgloffe. Probier's nomal oder rüef
                          üs aa! 📞
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="styleguide__group">
                <h3 class="styleguide__group-title">Banner</h3>
                <div class="styleguide__demo">
                  <div class="styleguide__form-stack">
                    <div class="banner banner--info">
                      <span dangerouslySetInnerHTML={{ __html: icons.info }} />
                      Neui Funktionä verfüegbar!{" "}
                      <a href="#" class="banner__link">Meh erfahre</a>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 11. Loading States Section */}
            <section id="loading" class="styleguide__section">
              <h2 class="styleguide__section-title">Lade-Animationä ⏳</h2>

              <div class="styleguide__group">
                <h3 class="styleguide__group-title">Spinner</h3>
                <div class="styleguide__demo">
                  <div class="styleguide__button-row">
                    <div class="spinner spinner--xs"></div>
                    <div class="spinner spinner--sm"></div>
                    <div class="spinner"></div>
                    <div class="spinner spinner--lg"></div>
                    <div class="spinner spinner--xl"></div>
                  </div>
                </div>
              </div>

              <div class="styleguide__group">
                <h3 class="styleguide__group-title">Spinner Farben</h3>
                <div class="styleguide__demo">
                  <div class="styleguide__button-row">
                    <div class="spinner spinner--primary"></div>
                    <div class="spinner spinner--secondary"></div>
                    <div class="spinner spinner--success"></div>
                    <div class="spinner spinner--error"></div>
                  </div>
                </div>
                <div class="styleguide__demo styleguide__demo--dark">
                  <div class="spinner spinner--white"></div>
                </div>
              </div>

              <div class="styleguide__group">
                <h3 class="styleguide__group-title">Dots Spinner</h3>
                <div class="styleguide__demo">
                  <div class="styleguide__button-row">
                    <div class="spinner-dots spinner-dots--sm">
                      <span class="spinner-dots__dot"></span>
                      <span class="spinner-dots__dot"></span>
                      <span class="spinner-dots__dot"></span>
                    </div>
                    <div class="spinner-dots">
                      <span class="spinner-dots__dot"></span>
                      <span class="spinner-dots__dot"></span>
                      <span class="spinner-dots__dot"></span>
                    </div>
                    <div class="spinner-dots spinner-dots--lg">
                      <span class="spinner-dots__dot"></span>
                      <span class="spinner-dots__dot"></span>
                      <span class="spinner-dots__dot"></span>
                    </div>
                  </div>
                </div>
              </div>

              <div class="styleguide__group">
                <h3 class="styleguide__group-title">Skeleton Loader</h3>
                <div class="styleguide__demo">
                  <div class="skeleton-card">
                    <div class="skeleton-card__header">
                      <div class="skeleton skeleton--circle"></div>
                      <div class="skeleton-card__body">
                        <div class="skeleton skeleton--text"></div>
                        <div class="skeleton skeleton--text-sm"></div>
                      </div>
                    </div>
                    <div class="skeleton-paragraph">
                      <div class="skeleton skeleton--text"></div>
                      <div class="skeleton skeleton--text"></div>
                      <div class="skeleton skeleton--text"></div>
                    </div>
                    <div class="skeleton skeleton--button"></div>
                  </div>
                </div>
              </div>

              <div class="styleguide__group">
                <h3 class="styleguide__group-title">Progress Bar</h3>
                <div class="styleguide__demo">
                  <div class="styleguide__form-stack">
                    <div class="progress-wrapper">
                      <div class="progress-wrapper__header">
                        <span class="progress-wrapper__label">
                          Upload-Fortschritt
                        </span>
                        <span class="progress-wrapper__value">65%</span>
                      </div>
                      <div class="progress">
                        <div class="progress__bar" style="width: 65%"></div>
                      </div>
                    </div>
                    <div class="progress progress--gradient">
                      <div class="progress__bar" style="width: 45%"></div>
                    </div>
                    <div class="progress progress--striped progress--animated">
                      <div class="progress__bar" style="width: 80%"></div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 12. Modals Section */}
            <section id="modals" class="styleguide__section">
              <h2 class="styleguide__section-title">Modals & Dialogs 🪟</h2>

              <div class="styleguide__group">
                <h3 class="styleguide__group-title">Standard Modal</h3>
                <p class="styleguide__description">
                  Es Fänschter wo ufpoppt - nöd erschrecke! 😱
                </p>
                <div class="styleguide__modal-demo">
                  <div class="styleguide__modal-preview">
                    <div class="styleguide__modal-header">
                      <h3 class="styleguide__modal-title">Modal Titel</h3>
                      <button
                        class="styleguide__modal-close"
                        aria-label="Schliessen"
                      >
                        <span
                          dangerouslySetInnerHTML={{ __html: icons.close }}
                        />
                      </button>
                    </div>
                    <div class="styleguide__modal-body">
                      <p>
                        Dies ist der Inhalt des modalen Dialogs. Hier können
                        verschiedene Informationen oder Formulare angezeigt
                        werden.
                      </p>
                    </div>
                    <div class="styleguide__modal-footer">
                      <button class="btn btn--ghost">Abbrechen</button>
                      <button class="btn btn--primary">Bestätigen</button>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 13. Cards Section */}
            <section id="cards" class="styleguide__section">
              <h2 class="styleguide__section-title">Chärtli 🃏</h2>

              <div class="styleguide__group">
                <h3 class="styleguide__group-title">Standard Charte</h3>
                <div class="styleguide__demo">
                  <div class="styleguide__cards-row">
                    <div class="card styleguide__card-preview">
                      <div class="card__header">
                        <h3 class="card__title">Kartentitel</h3>
                        <p class="card__subtitle">Untertitel der Karte</p>
                      </div>
                      <div class="card__body">
                        <p class="styleguide__card-body-text">
                          Dies ist der Inhalt der Karte. Er kann verschiedene
                          Elemente enthalten.
                        </p>
                      </div>
                      <div class="card__footer">
                        <button class="btn btn--primary btn--sm">Aktion</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="styleguide__group">
                <h3 class="styleguide__group-title">Interaktivi Charte</h3>
                <p class="styleguide__description">
                  Fahre drüber für de Lift-Effekt - wie im Lift uf de Rigi! 🚡
                </p>
                <div class="styleguide__demo">
                  <div class="styleguide__cards-row">
                    <div class="card card--interactive styleguide__card-preview">
                      <div class="card__header">
                        <h3 class="card__title">Interaktive Karte</h3>
                      </div>
                      <div class="card__body">
                        <p class="styleguide__card-body-text">
                          Diese Karte hat einen Hover-Effekt. Bewegen Sie die
                          Maus darüber.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="styleguide__group">
                <h3 class="styleguide__group-title">Benefits Karte</h3>
                <div class="styleguide__demo">
                  <div class="styleguide__cards-row">
                    <div class="benefits__card styleguide__benefits-preview">
                      <svg
                        viewBox="0 0 80 80"
                        fill="none"
                        class="benefits__icon"
                      >
                        <circle cx="30" cy="40" r="18" fill="#f9a8d4" />
                        <circle
                          cx="40"
                          cy="35"
                          r="16"
                          fill="#c084fc"
                          opacity="0.9"
                        />
                        <circle
                          cx="50"
                          cy="42"
                          r="14"
                          fill="#60a5fa"
                          opacity="0.8"
                        />
                      </svg>
                      <h3 class="benefits__card-title">Beispiel Benefit</h3>
                      <p class="benefits__card-description">
                        Beschreibungstext für die Benefit-Karte mit{" "}
                        <strong>hervorgehobenen</strong> Wörtern.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 14. Forms Section */}
            <section id="forms" class="styleguide__section">
              <h2 class="styleguide__section-title">Formular 📝</h2>

              <div class="styleguide__group">
                <h3 class="styleguide__group-title">Text-Fälder</h3>
                <div class="styleguide__demo">
                  <div class="styleguide__form-grid">
                    <div class="form-group">
                      <label class="form-label">Standard</label>
                      <input
                        type="text"
                        class="form-input"
                        placeholder="Platzhaltertext"
                      />
                    </div>
                    <div class="form-group">
                      <label class="form-label form-label--required">
                        Pflichtfeld
                      </label>
                      <input
                        type="text"
                        class="form-input"
                        value="Eingabewert"
                      />
                    </div>
                    <div class="form-group">
                      <label class="form-label">Mit Fehler</label>
                      <input
                        type="text"
                        class="form-input form-input--error"
                        value="Ungültig"
                      />
                      <span class="form-error">
                        <svg
                          class="form-error__icon"
                          viewBox="0 0 16 16"
                          fill="currentColor"
                        >
                          <path d="M8 1a7 7 0 100 14A7 7 0 008 1zm0 11a1 1 0 110-2 1 1 0 010 2zm1-3H7V4h2v5z" />
                        </svg>
                        Bitte geben Sie einen gültigen Wert ein
                      </span>
                    </div>
                    <div class="form-group">
                      <label class="form-label">Deaktiviert</label>
                      <input
                        type="text"
                        class="form-input"
                        disabled
                        value="Nicht editierbar"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div class="styleguide__group">
                <h3 class="styleguide__group-title">Select</h3>
                <div class="styleguide__demo">
                  <div class="styleguide__form-grid">
                    <div class="form-group">
                      <label class="form-label">Standard</label>
                      <select class="form-select">
                        <option>Option 1</option>
                        <option>Option 2</option>
                        <option>Option 3</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              <div class="styleguide__group">
                <h3 class="styleguide__group-title">Checkbox & Radio</h3>
                <div class="styleguide__demo">
                  <div class="styleguide__form-inline">
                    <label class="form-checkbox">
                      <input type="checkbox" class="form-checkbox__input" />
                      <span class="form-checkbox__box">
                        <svg
                          viewBox="0 0 12 12"
                          fill="none"
                          stroke="white"
                          stroke-width="2"
                        >
                          <path
                            d="M2 6l3 3 5-5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </span>
                      <span class="form-checkbox__label">Checkbox Option</span>
                    </label>
                    <label class="form-radio">
                      <input
                        type="radio"
                        name="demo"
                        class="form-radio__input"
                        checked
                      />
                      <span class="form-radio__circle"></span>
                      <span class="form-radio__label">Radio A</span>
                    </label>
                    <label class="form-radio">
                      <input
                        type="radio"
                        name="demo"
                        class="form-radio__input"
                      />
                      <span class="form-radio__circle"></span>
                      <span class="form-radio__label">Radio B</span>
                    </label>
                  </div>
                </div>
              </div>

              <div class="styleguide__group">
                <h3 class="styleguide__group-title">Toggle Switch</h3>
                <div class="styleguide__demo">
                  <label class="form-toggle">
                    <input type="checkbox" class="form-toggle__input" />
                    <span class="form-toggle__switch"></span>
                    <span class="form-toggle__label">Toggle Option</span>
                  </label>
                </div>
              </div>

              <div class="styleguide__group">
                <h3 class="styleguide__group-title">File Upload</h3>
                <div class="styleguide__demo">
                  <div class="form-file">
                    <input
                      type="file"
                      class="form-file__input"
                      id="file-upload"
                    />
                    <label for="file-upload" class="form-file__dropzone">
                      <span
                        class="form-file__icon"
                        dangerouslySetInnerHTML={{ __html: icons.upload }}
                      />
                      <span class="form-file__text">
                        <strong>Klicken</strong> oder Datei hierher ziehen
                      </span>
                      <span class="form-file__hint">
                        PDF, JPG oder PNG bis 10MB
                      </span>
                    </label>
                  </div>
                </div>
              </div>
            </section>

            {/* 15. Accordion Section */}
            <section id="accordion" class="styleguide__section">
              <h2 class="styleguide__section-title">Accordion 🪗</h2>

              <div class="styleguide__group">
                <h3 class="styleguide__group-title">FAQ Akkordeon</h3>
                <p class="styleguide__description">
                  Klappsch uf und zue - wie es Schwyzerörgeli! 🎵 Verwendet{" "}
                  <code>.faq__*</code> Klasse.
                </p>
                <div class="faq__list">
                  <details class="faq__item" open>
                    <summary class="faq__question">
                      Wie funktioniert Cashare?
                      <svg
                        class="faq__chevron"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </summary>
                    <div class="faq__answer">
                      <p>
                        Cashare verbindet Kreditnehmer direkt mit privaten und
                        institutionellen Investoren. Als Schweizer
                        Crowdlending-Plattform ermöglichen wir faire Kredite zu
                        transparenten Konditionen.
                      </p>
                    </div>
                  </details>
                  <details class="faq__item">
                    <summary class="faq__question">
                      Welche Voraussetzungen muss ich erfüllen?
                      <svg
                        class="faq__chevron"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </summary>
                    <div class="faq__answer">
                      <p>
                        Sie müssen mindestens 18 Jahre alt sein und in der
                        Schweiz wohnhaft. Weitere Details finden Sie in unseren
                        Anforderungen.
                      </p>
                    </div>
                  </details>
                  <details class="faq__item">
                    <summary class="faq__question">
                      Wie lange dauert die Kreditprüfung?
                      <svg
                        class="faq__chevron"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </summary>
                    <div class="faq__answer">
                      <p>
                        Die Prüfung dauert in der Regel 1-2 Werktage. Bei
                        vollständigen Unterlagen kann es auch schneller gehen.
                      </p>
                    </div>
                  </details>
                  <details class="faq__item">
                    <summary class="faq__question">
                      Welche Arten von Krediten kann ich beantragen?
                      <svg
                        class="faq__chevron"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </summary>
                    <div class="faq__answer">
                      <p>
                        Wir bieten Privatkredite, KMU-Kredite und Hypotheken an.
                        Jede Kreditart hat ihre eigenen Konditionen und
                        Anforderungen.
                      </p>
                    </div>
                  </details>
                </div>
              </div>
            </section>

            {/* 16. Timeline Section */}
            <section id="timeline" class="styleguide__section">
              <h2 class="styleguide__section-title">Timeline 📅</h2>

              <div class="styleguide__group">
                <h3 class="styleguide__group-title">Vorussetzig Timeline</h3>
                <p class="styleguide__description">
                  Schritt für Schritt - wie bim Wandere uf de Zugerberg! 🥾
                </p>
                <div class="styleguide__demo styleguide__demo--dark">
                  <div class="requirements__timeline requirements__timeline--preview">
                    <div class="requirements__item">
                      <div class="requirements__item-content">
                        <svg
                          class="requirements__icon"
                          viewBox="0 0 40 40"
                          fill="none"
                        >
                          <circle cx="20" cy="14" r="8" fill="#21CFE0" />
                          <path
                            d="M8 34c0-6.627 5.373-12 12-12s12 5.373 12 12"
                            fill="#FFD166"
                          />
                        </svg>
                        <span class="requirements__item-text">
                          Sie sind mindestens 18 Jahre
                        </span>
                      </div>
                    </div>
                    <div class="requirements__item requirements__item--right">
                      <div class="requirements__item-content">
                        <svg
                          class="requirements__icon"
                          viewBox="0 0 40 40"
                          fill="none"
                        >
                          <rect
                            x="6"
                            y="8"
                            width="28"
                            height="20"
                            rx="2"
                            fill="#FFD166"
                          />
                          <rect
                            x="10"
                            y="14"
                            width="8"
                            height="6"
                            fill="#21CFE0"
                          />
                        </svg>
                        <span class="requirements__item-text">
                          Sie sind CH/LI-Bürger oder besitzen eine gültige
                          Aufenthaltsbewilligung
                        </span>
                      </div>
                    </div>
                    <div class="requirements__item">
                      <div class="requirements__item-content">
                        <svg
                          class="requirements__icon"
                          viewBox="0 0 40 40"
                          fill="none"
                        >
                          <rect
                            x="8"
                            y="8"
                            width="24"
                            height="24"
                            rx="4"
                            fill="#E8F5E9"
                          />
                          <path
                            d="M16 20l4 4 8-8"
                            stroke="#16a34a"
                            stroke-width="3"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                        <span class="requirements__item-text">
                          Sie haben ein Schweizer Bankkonto und haben den
                          Registrierungsprozess durchgelaufen.
                        </span>
                      </div>
                    </div>
                  </div>
                  <div class="requirements__cta-wrapper">
                    <a href="#" class="requirements__cta">Loslegen</a>
                  </div>
                </div>
              </div>

              <div class="styleguide__group">
                <h3 class="styleguide__group-title">CSS Klassen</h3>
                <div class="styleguide__demo">
                  <div class="styleguide__code-block">
                    <code>.requirements__timeline</code>{" "}
                    - Container mit vertikaler Linie<br />
                    <code>.requirements__item</code>{" "}
                    - Links positionierte Karte<br />
                    <code>.requirements__item--right</code>{" "}
                    - Rechts positionierte Karte<br />
                    <code>.requirements__item-content</code>{" "}
                    - Karten-Inhalt mit Icon und Text<br />
                    <code>.requirements__cta</code> - Call-to-Action Button
                  </div>
                </div>
              </div>
            </section>

            {/* 17. Animations Section */}
            <section id="animations" class="styleguide__section">
              <h2 class="styleguide__section-title">Animationä ✨</h2>

              <div class="styleguide__group">
                <h3 class="styleguide__group-title">Hover Effäkt</h3>
                <p class="styleguide__description">
                  Beweg d'Muus drüber - aber nöd erschrecke! 🐭
                </p>
                <div class="styleguide__demo">
                  <div class="styleguide__animations-grid">
                    <div class="styleguide__animation-item styleguide__animation--lift">
                      <div class="styleguide__animation-preview"></div>
                      <span class="styleguide__animation-name">Lift</span>
                      <span class="styleguide__animation-desc">
                        translateY(-4px)
                      </span>
                    </div>
                    <div class="styleguide__animation-item styleguide__animation--scale">
                      <div class="styleguide__animation-preview"></div>
                      <span class="styleguide__animation-name">Scale</span>
                      <span class="styleguide__animation-desc">
                        scale(1.05)
                      </span>
                    </div>
                    <div class="styleguide__animation-item styleguide__animation--glow">
                      <div class="styleguide__animation-preview"></div>
                      <span class="styleguide__animation-name">Glow</span>
                      <span class="styleguide__animation-desc">box-shadow</span>
                    </div>
                  </div>
                </div>
              </div>

              <div class="styleguide__group">
                <h3 class="styleguide__group-title">
                  Duuri Animationä 🔄
                </h3>
                <div class="styleguide__demo">
                  <div class="styleguide__animations-grid">
                    <div class="styleguide__animation-item styleguide__animation--pulse">
                      <div class="styleguide__animation-preview"></div>
                      <span class="styleguide__animation-name">Pulse</span>
                      <span class="styleguide__animation-desc">
                        Aufmerksamkeit
                      </span>
                    </div>
                    <div class="styleguide__animation-item styleguide__animation--spin">
                      <div class="styleguide__animation-preview"></div>
                      <span class="styleguide__animation-name">Spin</span>
                      <span class="styleguide__animation-desc">Laden</span>
                    </div>
                    <div class="styleguide__animation-item styleguide__animation--float">
                      <div class="styleguide__animation-preview"></div>
                      <span class="styleguide__animation-name">Float</span>
                      <span class="styleguide__animation-desc">Dekorativ</span>
                    </div>
                  </div>
                </div>
              </div>

              <div class="styleguide__group">
                <h3 class="styleguide__group-title">Barrierefreiheit ♿</h3>
                <div class="alert alert--info">
                  <span
                    class="alert__icon"
                    dangerouslySetInnerHTML={{ __html: icons.info }}
                  />
                  <div class="alert__content">
                    <p class="alert__title">Weniäger Bewegi</p>
                    <p class="alert__message">
                      Alli Animationä werded abgschaltet wenn{" "}
                      <code>prefers-reduced-motion: reduce</code>{" "}
                      aktiv isch. Mir dänked au a die wo's gschwind wird! 🤗
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* 17. Layout Section */}
            <section id="layout" class="styleguide__section">
              <h2 class="styleguide__section-title">Layout & Breakpoints 📐</h2>

              <div class="styleguide__group">
                <h3 class="styleguide__group-title">Responsivi Breakpoints</h3>
                <div class="styleguide__demo">
                  <table class="styleguide__breakpoints-table">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Bereich</th>
                        <th>Beschreibung</th>
                      </tr>
                    </thead>
                    <tbody>
                      {breakpoints.map((bp) => (
                        <tr key={bp.name}>
                          <td>
                            <strong>{bp.name}</strong>
                          </td>
                          <td>
                            <code>{bp.range}</code>
                          </td>
                          <td>{bp.description}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div class="styleguide__group">
                <h3 class="styleguide__group-title">Container</h3>
                <p class="styleguide__description">
                  Max-width: 1200px mit automatischen Seitenabständen
                </p>
                <div class="styleguide__demo">
                  <div class="styleguide__container-demo">
                    <span class="styleguide__container-label">
                      max-width: 1200px
                    </span>
                    <p class="styleguide__card-body-text">Container-Inhalt</p>
                  </div>
                </div>
              </div>

              <div class="styleguide__group">
                <h3 class="styleguide__group-title">Grid System</h3>
                <div class="styleguide__demo">
                  <div class="styleguide__form-stack">
                    <div class="styleguide__grid-demo styleguide__grid-demo--2">
                      <div class="styleguide__grid-cell">1/2</div>
                      <div class="styleguide__grid-cell">1/2</div>
                    </div>
                    <div class="styleguide__grid-demo styleguide__grid-demo--3">
                      <div class="styleguide__grid-cell">1/3</div>
                      <div class="styleguide__grid-cell">1/3</div>
                      <div class="styleguide__grid-cell">1/3</div>
                    </div>
                    <div class="styleguide__grid-demo styleguide__grid-demo--4">
                      <div class="styleguide__grid-cell">1/4</div>
                      <div class="styleguide__grid-cell">1/4</div>
                      <div class="styleguide__grid-cell">1/4</div>
                      <div class="styleguide__grid-cell">1/4</div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 18. Error Pages Section */}
            <section id="error-pages" class="styleguide__section">
              <h2 class="styleguide__section-title">Fähler-Sitä 💥</h2>

              <div class="styleguide__group">
                <h3 class="styleguide__group-title">404 - Syte nöd gfunde</h3>
                <p class="styleguide__description">
                  Wenns mol schiefgaht - aber stylisch! Finanz-Emojis wirbled
                  ums Zäntrum wie s'Gäld ufem Bankkonto. D'"0" isch es 🪙
                  Münzli!
                </p>
                <div class="styleguide__demo">
                  <div class="error-page error-page--animated error-page--preview">
                    <div class="error-page__emoji-vortex">
                      {["💰", "💵", "💳", "📈", "💎", "🏦"].map((emoji, i) => (
                        <span
                          key={i}
                          class="error-page__emoji error-page__emoji--ring-2"
                          style={`--i: ${i}; --total: 6; --delay: ${i * 0.3}s;`}
                        >
                          {emoji}
                        </span>
                      ))}
                    </div>
                    <div class="error-page__container error-page__container--centered">
                      <div class="error-page__content error-page__content--centered">
                        <div class="error-page__code-wrapper">
                          <span class="error-page__code error-page__code--animated error-page__code--preview">
                            4
                          </span>
                          <span class="error-page__code error-page__code--emoji error-page__code--preview">
                            🌑
                          </span>
                          <span class="error-page__code error-page__code--animated error-page__code--preview">
                            4
                          </span>
                        </div>
                        <h3 class="error-page__title">Seite nicht gefunden</h3>
                        <p class="error-page__description">
                          Ups! Diese Seite ist uns leider entwischt.
                        </p>
                        <div class="error-page__actions">
                          <button class="btn btn--primary btn--sm">
                            Zur Startseite
                          </button>
                          <button class="btn btn--outline btn--sm">
                            Kontakt
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="styleguide__group">
                <h3 class="styleguide__group-title">CSS Klassen</h3>
                <div class="styleguide__demo">
                  <div class="styleguide__code-block">
                    <code>.error-page</code> - Hauptcontainer
                    <br />
                    <code>.error-page--animated</code>{" "}
                    - Aktiviert Emoji-Animationen
                    <br />
                    <code>.error-page__emoji-vortex</code>{" "}
                    - Container für wirbelnde Emojis
                    <br />
                    <code>.error-page__emoji--ring-1/2/3</code>{" "}
                    - Verschiedene Orbit-Ringe
                    <br />
                    <code>.error-page__code-wrapper</code>{" "}
                    - Flex-Container für 4🪙4
                    <br />
                    <code>.error-page__code--emoji</code>{" "}
                    - Coin-Emoji mit Spin-Animation
                    <br />
                    <code>.error-page__code--animated</code>{" "}
                    - Float-Animation für Zahlen
                  </div>
                </div>
              </div>

              <div class="styleguide__group">
                <h3 class="styleguide__group-title">Live-Ansicht</h3>
                <div class="styleguide__component-preview">
                  <span class="styleguide__component-label">
                    404 Error Page
                  </span>
                  <p class="styleguide__card-body-text">
                    Die vollständige 404-Seite mit Header, Footer und
                    Illustration.
                  </p>
                  <a href="/nicht-vorhanden" class="btn btn--outline">
                    404 Seite testen
                  </a>
                </div>
              </div>
            </section>

            {/* 19. Interactive Components Section */}
            <section id="components" class="styleguide__section">
              <h2 class="styleguide__section-title">
                Interaktivi Komponentä 🎮
              </h2>

              <div class="styleguide__group">
                <h3 class="styleguide__group-title">Krediträchner</h3>
                <p class="styleguide__description">
                  De interaktivi Krediträchner - rächnet schneller als mer
                  "Zuger Chriesi" säge cha! 🍒
                </p>
                <div class="styleguide__component-preview">
                  <span class="styleguide__component-label">
                    LoanCalculator Island
                  </span>
                  <p class="styleguide__card-body-text">
                    Der Kreditrechner ist eine komplexe interaktive Komponente
                    die mit Preact Signals arbeitet. Er berechnet monatliche
                    Raten, Gesamtzinsen und zeigt einen Amortisationsplan.
                  </p>
                  <a href="/" class="btn btn--outline">
                    Auf der Homepage ansehen
                  </a>
                </div>
              </div>

              <div class="styleguide__group">
                <h3 class="styleguide__group-title">Animated Counter</h3>
                <p class="styleguide__description">
                  Zählt von einem Startwert zum Endwert mit Easing-Animation.
                </p>
                <div class="styleguide__component-preview">
                  <span class="styleguide__component-label">
                    AnimatedCounter Island
                  </span>
                  <p class="styleguide__card-body-text">
                    Wird für Statistiken auf der Homepage verwendet. Unterstützt
                    verschiedene Formate (Zahl, Währung, Prozent) und
                    respektiert <code>prefers-reduced-motion</code>.
                  </p>
                </div>
              </div>

              <div class="styleguide__group">
                <h3 class="styleguide__group-title">Charts</h3>
                <p class="styleguide__description">
                  Verschiedene Diagramme für Datenvisualisierung.
                </p>
                <div class="styleguide__component-preview">
                  <span class="styleguide__component-label">
                    Chart.js Integration
                  </span>
                  <p class="styleguide__card-body-text">
                    Die Plattform verwendet Chart.js für interaktive Diagramme:
                    TimelineChart, VolumesChart, RatingsChart.
                  </p>
                </div>
              </div>
            </section>

            {/* Footer */}
            <footer class="styleguide__footer">
              <p>
                Cashare Design System &bull; Version 1.0 &bull; Made with ❤️
                z'Zug
              </p>
              <a href="/" class="styleguide__footer-link">
                &larr; Zrugg zur Homepage
              </a>
            </footer>
          </div>
        </main>
      </div>
    </>
  );
}
