interface LogoBarProps {
  class?: string;
}

export function LogoBar({ class: className }: LogoBarProps) {
  const logos = [
    { name: "Tages Anzeiger", svg: `<svg viewBox="0 0 200 40" fill="currentColor"><text x="0" y="30" font-family="Georgia, serif" font-size="24" font-style="italic" font-weight="700">Tages Anzeiger</text></svg>` },
    { name: "Swissquote", svg: `<svg viewBox="0 0 180 40" fill="currentColor"><circle cx="15" cy="20" r="12" fill="#00a1e0"/><text x="35" y="28" font-family="Arial, sans-serif" font-size="20" font-weight="600">Swissquote</text></svg>` },
    { name: "moneycab", svg: `<svg viewBox="0 0 160 40" fill="currentColor"><text x="0" y="30" font-family="Arial, sans-serif" font-size="24" font-weight="700"><tspan fill="#00b5ce">money</tspan><tspan fill="#333">cab</tspan></text></svg>` },
    { name: "The Business Times", svg: `<svg viewBox="0 0 200 40" fill="currentColor"><text x="0" y="28" font-family="Georgia, serif" font-size="18" font-weight="400" letter-spacing="1">THE BUSINESS TIMES</text></svg>` },
    { name: "Finanz und Wirtschaft", svg: `<svg viewBox="0 0 180 45" fill="currentColor"><text x="0" y="20" font-family="Arial, sans-serif" font-size="18" font-weight="700" fill="#00b5ce">FINANZ<tspan font-size="12" fill="#666"> und</tspan></text><text x="0" y="40" font-family="Arial, sans-serif" font-size="18" font-weight="700" fill="#00b5ce">WIRTSCHAFT</text></svg>` },
  ];

  return (
    <section class={`logo-bar ${className || ''}`}>
      <div class="logo-bar__container">
        {logos.map((logo) => (
          <div
            key={logo.name}
            class="logo-bar__item"
            dangerouslySetInnerHTML={{ __html: logo.svg }}
            title={logo.name}
          />
        ))}
      </div>
    </section>
  );
}
