# Cashare Website

Switzerland's leading peer-to-peer lending platform, rebuilt with modern web technologies.

## Tech Stack

- **Runtime:** [Deno](https://deno.land/)
- **Framework:** [Fresh 1.7.3](https://fresh.deno.dev/)
- **UI:** [Preact](https://preactjs.com/)
- **Styling:** Custom CSS with CSS variables
- **Languages:** TypeScript, TSX

## Getting Started

### Prerequisites

- [Deno](https://deno.land/) installed on your machine

### Development

```bash
# Start the development server
deno task dev
```

The site will be available at `http://localhost:8000`

### Production

```bash
# Build for production
deno task build

# Start production server
deno task start
```

## Project Structure

```
cashare-fresh/
├── routes/              # File-based routing
│   ├── index.tsx        # German homepage (default)
│   ├── en/              # English routes
│   └── fr/              # French routes
├── components/          # Static Preact components (server-rendered)
│   ├── Layout.tsx       # Page wrapper
│   ├── Header.tsx       # Site navigation
│   ├── Footer.tsx       # Site footer
│   ├── Hero.tsx         # Hero section with calculator
│   ├── Stats.tsx        # Statistics display
│   └── Features.tsx     # Feature cards
├── islands/             # Interactive components (client-side hydration)
│   ├── calculator/      # Loan calculators
│   └── charts/          # Interactive charts
├── lib/
│   ├── i18n/            # Translations (de.json, en.json, fr.json)
│   └── calculator/      # Financial calculation logic
└── static/
    └── styles/          # CSS files
        ├── variables.css    # Design tokens
        ├── blocks/          # Section styles
        ├── components/      # Component styles
        └── utilities/       # Utility classes
```

## Internationalization

The site supports three languages:

| Language | Path | Example |
|----------|------|---------|
| German (default) | `/` | `cashare.ch/` |
| English | `/en/` | `cashare.ch/en/` |
| French | `/fr/` | `cashare.ch/fr/` |

Translations are stored in `lib/i18n/` as JSON files.

## Styling

The project uses pure CSS with custom properties for theming. No CSS preprocessors or utility frameworks.

### Design Tokens

Key variables defined in `static/styles/variables.css`:

```css
--color-primary: #007399
--color-secondary: #00B5CE
--color-text: #1D2129
--font-sans: "Plus Jakarta Sans"
```

### Naming Convention

CSS follows BEM methodology: `.block__element--modifier`

## Component Types

### Static Components (`components/`)

Server-rendered with no client-side JavaScript:

```tsx
export function MyComponent({ locale }: { locale: Locale }) {
  return <div>...</div>;
}
```

### Islands (`islands/`)

Interactive components hydrated on the client:

```tsx
export default function MyIsland({ prop }: Props) {
  const [state, setState] = useState(initial);
  return <div>...</div>;
}
```

## License

Proprietary - Cashare AG
