interface LogoBarProps {
  class?: string;
}

export function LogoBar({ class: className }: LogoBarProps) {
  const logos = [
    { name: "Tages Anzeiger", src: "/images/press/tagi.png" },
    { name: "Swissquote", src: "/images/press/swissquote.png" },
    { name: "moneycab", src: "/images/press/moneycab.png" },
    { name: "The Business Times", src: "/images/press/The-Business-Times.png" },
    { name: "Finanz und Wirtschaft", src: "/images/press/fuw.png" },
  ];

  return (
    <section class={`logo-bar ${className || ''}`}>
      <div class="logo-bar__container">
        {logos.map((logo) => (
          <div key={logo.name} class="logo-bar__item" title={logo.name}>
            <img
              src={logo.src}
              alt={logo.name}
              width={120}
              height={40}
              loading="lazy"
              decoding="async"
              class="logo-bar__image"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
