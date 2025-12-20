# Cashare Website

Switzerland's leading peer-to-peer lending platform, rebuilt with modern web technologies.

**Live:** [cashare.ch](https://cashare.ch) | **Staging:** [cashare-fresh.deno.dev](https://cashare-fresh.deno.dev)

## Tech Stack

- **Runtime:** [Deno](https://deno.land/)
- **Framework:** [Fresh 1.7.3](https://fresh.deno.dev/)
- **UI:** [Preact](https://preactjs.com/)
- **Styling:** Custom CSS with CSS variables (no Tailwind)
- **Deployment:** [Deno Deploy](https://deno.com/deploy)
- **CI/CD:** GitHub Actions

## Getting Started

### Prerequisites

- [Deno](https://deno.land/) v1.x or higher

```bash
# macOS/Linux
curl -fsSL https://deno.land/install.sh | sh

# Windows (PowerShell)
irm https://deno.land/install.ps1 | iex

# Homebrew
brew install deno
```

### Development

```bash
# Start the development server with hot reload
deno task start
```

The site will be available at `http://localhost:8000`

### Production Build

```bash
# Build for production
deno task build

# Preview production build locally
deno task preview
```

## Available Tasks

| Command | Description |
|---------|-------------|
| `deno task start` | Start dev server with hot reload |
| `deno task build` | Build for production |
| `deno task preview` | Preview production build |
| `deno task check` | Run formatter, linter, and type checks |
| `deno task translate` | Translate new/changed strings |
| `deno task translate:all` | Re-translate all strings |
| `deno task translate:watch` | Watch for changes and auto-translate |
| `deno task i18n:types` | Generate TypeScript types from translations |

## Deployment

### Automatic Deployment (GitHub Actions)

The site is automatically deployed to [Deno Deploy](https://deno.com/deploy) on every push to `main`:

1. **Push to `main`** → Triggers GitHub Actions workflow
2. **Build step** → Runs `deno task build`
3. **Deploy** → Deploys to Deno Deploy project `cashare-fresh`

Pull requests also trigger preview deployments.

### Manual Deployment

```bash
# Install deployctl
deno install -A --no-check -r -f https://deno.land/x/deploy/deployctl.ts

# Deploy manually
deployctl deploy --project=cashare-fresh --prod main.ts
```

### Environment Variables

For translation features (using Claude API):

```bash
export ANTHROPIC_API_KEY=your_api_key_here
```

## Project Structure

```
cashare-fresh/
├── .github/workflows/   # CI/CD configuration
│   └── deploy.yml       # Deno Deploy workflow
├── routes/              # File-based routing
│   ├── index.tsx        # German homepage (default)
│   ├── styleguide.tsx   # Design system documentation
│   ├── _404.tsx         # Custom 404 page
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
│   ├── calculator/      # Loan calculators (Personal, SME, Home)
│   └── charts/          # Interactive data visualizations
├── lib/
│   ├── i18n/            # Internationalization
│   │   ├── de.json      # German (source of truth)
│   │   ├── en.json      # English
│   │   ├── fr.json      # French
│   │   └── translate.ts # AI-powered translation agent
│   └── calculator/      # Financial calculation logic
└── static/
    ├── images/          # Static images (logo, OG image, etc.)
    └── styles/          # CSS files
        ├── variables.css    # Design tokens
        ├── global.css       # Global styles
        ├── blocks/          # Section styles (hero, calculator, etc.)
        ├── components/      # Component styles
        ├── pages/           # Page-specific styles
        └── utilities/       # Utility classes
```

## Internationalization

The site supports three languages:

| Language | Path | Example |
|----------|------|---------|
| German (default) | `/` | `cashare.ch/` |
| English | `/en/` | `cashare.ch/en/` |
| French | `/fr/` | `cashare.ch/fr/` |

### Translation Workflow

1. Add/modify strings in `lib/i18n/de.json` (German is the source)
2. Run `deno task translate` to auto-translate to EN/FR
3. Review translations in `lib/i18n/en.json` and `lib/i18n/fr.json`

The translation agent uses Claude AI to maintain context-aware, natural translations.

## Styling

The project uses pure CSS with custom properties for theming. No preprocessors or utility frameworks.

### Design Tokens

Key variables defined in `static/styles/variables.css`:

```css
--color-primary: #007399
--color-secondary: #00B5CE
--color-text: #1D2129
--color-gray-dark: #424748
--font-sans: "Plus Jakarta Sans"
```

### Naming Convention

CSS follows BEM methodology: `.block__element--modifier`

### Design Reference

The design language follows [Stripe Enterprise](https://stripe.com/en-ch/enterprise) aesthetics:
- Premium glassmorphism effects
- Subtle micro-interactions
- Generous whitespace
- Strong typography hierarchy

## Component Patterns

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

## Financial Calculations

Swiss rounding to nearest 0.05 CHF:

```ts
Math.round(value * 20) / 20
```

## Styleguide

Visit `/styleguide` to see the complete design system documentation including:
- Color palette
- Typography scale
- Spacing system
- UI components (buttons, cards, alerts, etc.)
- Animation examples

## Contributing

1. Create a feature branch from `main`
2. Make your changes
3. Run `deno task check` to ensure code quality
4. Submit a pull request

## License

Proprietary - Cashare AG
