export default function ButtonsStyleguide() {
  return (
    <div class="styleguide">
        <div class="styleguide__container">
          <header class="styleguide__header">
            <h1 class="styleguide__title">Styleguide</h1>
            <p class="styleguide__subtitle">Buttons</p>
          </header>

          {/* Variants */}
          <section class="styleguide__section">
            <h2 class="styleguide__section-title">Varianten</h2>

            <div class="styleguide__group">
              <h3 class="styleguide__group-title">Primary</h3>
              <p class="styleguide__description">Hauptaktion, CTA-Buttons</p>
              <div class="styleguide__demo">
                <button class="btn btn--primary">Primary Button</button>
              </div>
              <code class="styleguide__code">.btn .btn--primary</code>
            </div>

            <div class="styleguide__group">
              <h3 class="styleguide__group-title">Secondary</h3>
              <p class="styleguide__description">Sekundäre Aktionen</p>
              <div class="styleguide__demo">
                <button class="btn btn--secondary">Secondary Button</button>
              </div>
              <code class="styleguide__code">.btn .btn--secondary</code>
            </div>

            <div class="styleguide__group">
              <h3 class="styleguide__group-title">Outline</h3>
              <p class="styleguide__description">Weniger prominente Aktionen</p>
              <div class="styleguide__demo">
                <button class="btn btn--outline">Outline Button</button>
              </div>
              <code class="styleguide__code">.btn .btn--outline</code>
            </div>

            <div class="styleguide__group">
              <h3 class="styleguide__group-title">Ghost</h3>
              <p class="styleguide__description">Subtile Aktionen, Links</p>
              <div class="styleguide__demo">
                <button class="btn btn--ghost">Ghost Button</button>
              </div>
              <code class="styleguide__code">.btn .btn--ghost</code>
            </div>

            <div class="styleguide__group">
              <h3 class="styleguide__group-title">White</h3>
              <p class="styleguide__description">Auf dunklem Hintergrund</p>
              <div class="styleguide__demo styleguide__demo--dark">
                <button class="btn btn--white">White Button</button>
              </div>
              <code class="styleguide__code">.btn .btn--white</code>
            </div>
          </section>

          {/* Sizes */}
          <section class="styleguide__section">
            <h2 class="styleguide__section-title">Grössen</h2>

            <div class="styleguide__group">
              <h3 class="styleguide__group-title">Small</h3>
              <div class="styleguide__demo styleguide__demo--row">
                <button class="btn btn--primary btn--sm">Small Primary</button>
                <button class="btn btn--secondary btn--sm">Small Secondary</button>
                <button class="btn btn--outline btn--sm">Small Outline</button>
              </div>
              <code class="styleguide__code">.btn--sm</code>
            </div>

            <div class="styleguide__group">
              <h3 class="styleguide__group-title">Default</h3>
              <div class="styleguide__demo styleguide__demo--row">
                <button class="btn btn--primary">Default Primary</button>
                <button class="btn btn--secondary">Default Secondary</button>
                <button class="btn btn--outline">Default Outline</button>
              </div>
              <code class="styleguide__code">.btn (keine Grössenklasse)</code>
            </div>

            <div class="styleguide__group">
              <h3 class="styleguide__group-title">Large</h3>
              <div class="styleguide__demo styleguide__demo--row">
                <button class="btn btn--primary btn--lg">Large Primary</button>
                <button class="btn btn--secondary btn--lg">Large Secondary</button>
                <button class="btn btn--outline btn--lg">Large Outline</button>
              </div>
              <code class="styleguide__code">.btn--lg</code>
            </div>

            <div class="styleguide__group">
              <h3 class="styleguide__group-title">Full Width</h3>
              <div class="styleguide__demo" style="max-width: 400px;">
                <button class="btn btn--primary btn--full">Full Width Button</button>
              </div>
              <code class="styleguide__code">.btn--full</code>
            </div>
          </section>

          {/* States */}
          <section class="styleguide__section">
            <h2 class="styleguide__section-title">Zustände (States)</h2>

            <div class="styleguide__group">
              <h3 class="styleguide__group-title">Default</h3>
              <div class="styleguide__demo styleguide__demo--row">
                <button class="btn btn--primary">Primary</button>
                <button class="btn btn--secondary">Secondary</button>
                <button class="btn btn--outline">Outline</button>
                <button class="btn btn--ghost">Ghost</button>
              </div>
            </div>

            <div class="styleguide__group">
              <h3 class="styleguide__group-title">Hover</h3>
              <p class="styleguide__description">Bewege die Maus über die Buttons</p>
              <div class="styleguide__demo styleguide__demo--row">
                <button class="btn btn--primary styleguide__hover-demo">Primary Hover</button>
                <button class="btn btn--secondary styleguide__hover-demo">Secondary Hover</button>
                <button class="btn btn--outline styleguide__hover-demo">Outline Hover</button>
                <button class="btn btn--ghost styleguide__hover-demo">Ghost Hover</button>
              </div>
            </div>

            <div class="styleguide__group">
              <h3 class="styleguide__group-title">Active / Pressed</h3>
              <p class="styleguide__description">Klicke und halte die Buttons</p>
              <div class="styleguide__demo styleguide__demo--row">
                <button class="btn btn--primary">Primary Active</button>
                <button class="btn btn--secondary">Secondary Active</button>
                <button class="btn btn--outline">Outline Active</button>
              </div>
            </div>

            <div class="styleguide__group">
              <h3 class="styleguide__group-title">Disabled</h3>
              <div class="styleguide__demo styleguide__demo--row">
                <button class="btn btn--primary" disabled>Primary Disabled</button>
                <button class="btn btn--secondary" disabled>Secondary Disabled</button>
                <button class="btn btn--outline" disabled>Outline Disabled</button>
                <button class="btn btn--ghost" disabled>Ghost Disabled</button>
              </div>
              <code class="styleguide__code">disabled Attribut oder .btn--disabled</code>
            </div>

            <div class="styleguide__group">
              <h3 class="styleguide__group-title">Focus</h3>
              <p class="styleguide__description">Nutze Tab zur Navigation</p>
              <div class="styleguide__demo styleguide__demo--row">
                <button class="btn btn--primary">Primary Focus</button>
                <button class="btn btn--secondary">Secondary Focus</button>
                <button class="btn btn--outline">Outline Focus</button>
              </div>
            </div>
          </section>

          {/* With Icons */}
          <section class="styleguide__section">
            <h2 class="styleguide__section-title">Mit Icons</h2>

            <div class="styleguide__group">
              <h3 class="styleguide__group-title">Icon Links</h3>
              <div class="styleguide__demo styleguide__demo--row">
                <button class="btn btn--primary">
                  <svg class="btn__icon btn__icon--left" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                  Weiter
                </button>
                <button class="btn btn--outline">
                  <svg class="btn__icon btn__icon--left" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M19 12H5M12 19l-7-7 7-7"/>
                  </svg>
                  Zurück
                </button>
              </div>
              <code class="styleguide__code">.btn__icon .btn__icon--left</code>
            </div>

            <div class="styleguide__group">
              <h3 class="styleguide__group-title">Icon Rechts</h3>
              <div class="styleguide__demo styleguide__demo--row">
                <button class="btn btn--primary">
                  Jetzt starten
                  <svg class="btn__icon btn__icon--right" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </button>
                <button class="btn btn--secondary">
                  Mehr erfahren
                  <svg class="btn__icon btn__icon--right" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M6 9l6 6 6-6"/>
                  </svg>
                </button>
              </div>
              <code class="styleguide__code">.btn__icon .btn__icon--right</code>
            </div>
          </section>

          {/* Utility Classes */}
          <section class="styleguide__section">
            <h2 class="styleguide__section-title">Utility-Klassen</h2>

            <div class="styleguide__group">
              <h3 class="styleguide__group-title">Hover Lift</h3>
              <p class="styleguide__description">Schwebt beim Hover nach oben</p>
              <div class="styleguide__demo styleguide__demo--row">
                <button class="btn btn--primary hover-lift">Hover Lift</button>
                <button class="btn btn--secondary hover-lift">Hover Lift</button>
              </div>
              <code class="styleguide__code">.hover-lift</code>
            </div>

            <div class="styleguide__group">
              <h3 class="styleguide__group-title">Hover Press</h3>
              <p class="styleguide__description">Wird beim Klicken leicht kleiner</p>
              <div class="styleguide__demo styleguide__demo--row">
                <button class="btn btn--primary hover-press">Hover Press</button>
                <button class="btn btn--secondary hover-press">Hover Press</button>
              </div>
              <code class="styleguide__code">.hover-press</code>
            </div>

            <div class="styleguide__group">
              <h3 class="styleguide__group-title">Shadow Primary</h3>
              <p class="styleguide__description">Primary-farbiger Schatten</p>
              <div class="styleguide__demo styleguide__demo--row">
                <button class="btn btn--outline shadow-primary">Shadow Primary</button>
              </div>
              <code class="styleguide__code">.shadow-primary</code>
            </div>
          </section>

          {/* As Links */}
          <section class="styleguide__section">
            <h2 class="styleguide__section-title">Als Links</h2>

            <div class="styleguide__group">
              <p class="styleguide__description">Buttons können auch als {'<a>'} Tags verwendet werden</p>
              <div class="styleguide__demo styleguide__demo--row">
                <a href="#" class="btn btn--primary">Link Primary</a>
                <a href="#" class="btn btn--secondary">Link Secondary</a>
                <a href="#" class="btn btn--outline">Link Outline</a>
                <a href="#" class="btn btn--ghost">Link Ghost</a>
              </div>
            </div>
          </section>

          {/* Complete Overview */}
          <section class="styleguide__section">
            <h2 class="styleguide__section-title">Komplette Übersicht</h2>

            <div class="styleguide__table-wrapper">
              <table class="styleguide__table">
                <thead>
                  <tr>
                    <th>Variante</th>
                    <th>Small</th>
                    <th>Default</th>
                    <th>Large</th>
                    <th>Disabled</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Primary</td>
                    <td><button class="btn btn--primary btn--sm">Button</button></td>
                    <td><button class="btn btn--primary">Button</button></td>
                    <td><button class="btn btn--primary btn--lg">Button</button></td>
                    <td><button class="btn btn--primary" disabled>Button</button></td>
                  </tr>
                  <tr>
                    <td>Secondary</td>
                    <td><button class="btn btn--secondary btn--sm">Button</button></td>
                    <td><button class="btn btn--secondary">Button</button></td>
                    <td><button class="btn btn--secondary btn--lg">Button</button></td>
                    <td><button class="btn btn--secondary" disabled>Button</button></td>
                  </tr>
                  <tr>
                    <td>Outline</td>
                    <td><button class="btn btn--outline btn--sm">Button</button></td>
                    <td><button class="btn btn--outline">Button</button></td>
                    <td><button class="btn btn--outline btn--lg">Button</button></td>
                    <td><button class="btn btn--outline" disabled>Button</button></td>
                  </tr>
                  <tr>
                    <td>Ghost</td>
                    <td><button class="btn btn--ghost btn--sm">Button</button></td>
                    <td><button class="btn btn--ghost">Button</button></td>
                    <td><button class="btn btn--ghost btn--lg">Button</button></td>
                    <td><button class="btn btn--ghost" disabled>Button</button></td>
                  </tr>
                  <tr class="styleguide__table-row--dark">
                    <td>White</td>
                    <td><button class="btn btn--white btn--sm">Button</button></td>
                    <td><button class="btn btn--white">Button</button></td>
                    <td><button class="btn btn--white btn--lg">Button</button></td>
                    <td><button class="btn btn--white" disabled>Button</button></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* CSS Variables */}
          <section class="styleguide__section">
            <h2 class="styleguide__section-title">CSS Variablen</h2>

            <div class="styleguide__code-block">
              <pre>{`/* Colors */
--color-primary: #007399
--color-secondary: #00B5CE

/* Typography */
--font-sans: "Plus Jakarta Sans"
--text-xs: 0.875rem
--text-sm: 1rem
--text-base: 1.125rem

/* Border Radius */
--radius-sm: 0.5rem

/* Transitions */
--duration-fast: 150ms
--duration-slow: 300ms
--ease-out: cubic-bezier(0.4, 0, 0.2, 1)`}</pre>
            </div>
          </section>

        </div>
      </div>
  );
}
