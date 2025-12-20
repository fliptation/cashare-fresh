import { ComponentChildren } from "preact";
import StripeNav from "../islands/StripeNav.tsx";
import { Footer } from "./Footer.tsx";
import type { Locale } from "../lib/i18n/index.ts";

interface LayoutProps {
  children: ComponentChildren;
  locale: Locale;
  currentPath?: string;
}

export function Layout({ children, locale, currentPath }: LayoutProps) {
  return (
    <div class="min-h-screen flex flex-col">
      <StripeNav locale={locale} currentPath={currentPath} />
      <main class="flex-1" style="padding-top: 72px;">
        {children}
      </main>
      <Footer locale={locale} />
    </div>
  );
}
