/**
 * Content Migration Types
 *
 * TypeScript interfaces for tracking extracted content from the live WordPress site.
 * Used to verify Fresh routes have the correct content.
 */

export type ContentStatus = "todo" | "crawled" | "verified" | "updated";

export type Locale = "de" | "en" | "fr";

export interface HeroContent {
  tagline?: string;
  heading: string;
  description?: string;
  cta?: {
    text: string;
    href: string;
  };
}

export interface StatItem {
  label: string;
  value: string;
  icon?: string;
}

export interface SectionContent {
  heading: string;
  subheading?: string;
  content: string[];
}

export interface AccordionItem {
  title: string;
  content: string;
}

export interface ChartData {
  title: string;
  type?: "pie" | "bar" | "line";
  data: Record<string, string>;
}

export interface BenefitItem {
  icon?: string;
  title: string;
  description: string;
}

export interface TestimonialItem {
  quote: string;
  author: string;
  role?: string;
  company?: string;
}

export interface PageContent {
  slug: string;
  locale: Locale;
  liveUrl: string;
  freshRoute: string;
  crawledAt: string;
  status: ContentStatus;

  // Page structure
  hero?: HeroContent;
  stats?: StatItem[];
  sections?: SectionContent[];
  accordion?: AccordionItem[];
  charts?: ChartData[];
  benefits?: BenefitItem[];
  testimonials?: TestimonialItem[];

  // SEO
  seo?: {
    title?: string;
    description?: string;
  };

  // Notes for manual review
  notes?: string;
}

export interface ContentDatabase {
  lastUpdated: string;
  pages: Record<string, PageContent>;
}
