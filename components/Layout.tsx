import { ComponentChildren } from "preact";
import StripeNav from "../islands/StripeNav.tsx";
import { Footer } from "./Footer.tsx";
import { TopBar } from "./TopBar.tsx";
import type { Locale } from "../lib/i18n/index.ts";

interface LayoutProps {
  children: ComponentChildren;
  locale: Locale;
  currentPath?: string;
  theme?: "borrowing" | "investing";
}

export function Layout({ children, locale, currentPath, theme }: LayoutProps) {
  const themeClass = theme ? `theme-${theme}` : "";

  return (
    <div class={`min-h-screen flex flex-col ${themeClass}`.trim()}>
      <TopBar />
      <StripeNav locale={locale} currentPath={currentPath} />
      <main class="flex-1">
        {children}
      </main>
      <Footer locale={locale} />
    </div>
  );
}
