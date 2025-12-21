/**
 * Centralized Loan Product Configuration
 *
 * Single source of truth for all loan product parameters.
 * Used by calculators, forms, and validation across the application.
 */

import { ProductType } from "../calculator/mod.ts";
import { LoanProduct, LiableEntity } from "../api/types.ts";
import type { Locale } from "../i18n/index.ts";

/**
 * Loan product type identifiers
 */
export type LoanProductKey = "private" | "sme" | "smeBullet";

/**
 * Configuration for a single loan product
 */
export interface LoanProductConfig {
  /** Display key for translations */
  key: LoanProductKey;
  /** Calculator product type */
  calculatorType: ProductType;
  /** API loan product type */
  apiProduct: LoanProduct;
  /** Liable entity for API calls */
  liableEntity: LiableEntity;
  /** Interest rate range */
  rates: {
    min: number;
    max: number;
  };
  /** Loan amount constraints in CHF */
  amount: {
    min: number;
    max: number;
    default: number;
    step: number;
  };
  /** Duration constraints in months */
  duration: {
    min: number;
    max: number;
    default: number;
  };
  /** Whether insurance is available for this product */
  hasInsurance: boolean;
  /** Whether this is a bullet (single repayment) loan */
  isBullet: boolean;
}

/**
 * All loan product configurations
 */
export const LOAN_PRODUCTS: Record<LoanProductKey, LoanProductConfig> = {
  private: {
    key: "private",
    calculatorType: ProductType.P2P,
    apiProduct: LoanProduct.P2P,
    liableEntity: LiableEntity.PRIVATE,
    rates: {
      min: 4.4,
      max: 10.9,
    },
    amount: {
      min: 1_000,
      max: 1_000_000,
      default: 25_000,
      step: 500,
    },
    duration: {
      min: 1,
      max: 60,
      default: 24,
    },
    hasInsurance: true,
    isBullet: false,
  },
  sme: {
    key: "sme",
    calculatorType: ProductType.P2S,
    apiProduct: LoanProduct.P2S,
    liableEntity: LiableEntity.SME,
    rates: {
      min: 5.9,
      max: 14.9,
    },
    amount: {
      min: 10_000,
      max: 1_000_000,
      default: 50_000,
      step: 1_000,
    },
    duration: {
      min: 3,
      max: 60,
      default: 24,
    },
    hasInsurance: false,
    isBullet: false,
  },
  smeBullet: {
    key: "smeBullet",
    calculatorType: ProductType.BULLET_LOAN,
    apiProduct: LoanProduct.BULLET,
    liableEntity: LiableEntity.SME,
    rates: {
      min: 5.9,
      max: 14.9,
    },
    amount: {
      min: 10_000,
      max: 500_000,
      default: 50_000,
      step: 1_000,
    },
    duration: {
      min: 1,
      max: 36,
      default: 12,
    },
    hasInsurance: false,
    isBullet: true,
  },
} as const;

/**
 * URL paths for each product by locale
 */
export const LOAN_PRODUCT_PATHS: Record<LoanProductKey, Record<Locale, string>> = {
  private: {
    de: "/kredit-beantragen/privatkredit",
    en: "/en/apply-for-credit/personal-loan",
    fr: "/fr/demander-un-credit/credit-prive",
  },
  sme: {
    de: "/kredit-beantragen/kmu-kredit",
    en: "/en/apply-for-credit/sme-loan",
    fr: "/fr/demander-un-credit/credit-pme",
  },
  smeBullet: {
    de: "/kredit-beantragen/kmu-bullet-kredit",
    en: "/en/apply-for-credit/sme-bullet-loan",
    fr: "/fr/demander-un-credit/credit-pme-bullet",
  },
};

/**
 * Application form paths by locale (for redirects from calculator)
 */
export const APPLICATION_PATHS: Record<LoanProductKey, Record<Locale, string>> = {
  private: {
    de: "/privatdarlehen-beantragen",
    en: "/en/apply-for-private-loan",
    fr: "/fr/demander-pret-prive",
  },
  sme: {
    de: "/kmu-darlehen-beantragen",
    en: "/en/apply-for-sme-loan",
    fr: "/fr/demander-pret-pme",
  },
  smeBullet: {
    de: "/kmu-kurzkredit-beantragen",
    en: "/en/apply-for-sme-bullet-loan",
    fr: "/fr/demander-pret-pme-court-terme",
  },
};

/**
 * Get product configuration by key
 */
export function getProductConfig(key: LoanProductKey): LoanProductConfig {
  return LOAN_PRODUCTS[key];
}

/**
 * Get application URL for a product
 */
export function getApplicationUrl(
  product: LoanProductKey,
  locale: Locale,
  params?: { amount?: number; duration?: number }
): string {
  const basePath = APPLICATION_PATHS[product][locale];
  if (!params?.amount && !params?.duration) {
    return basePath;
  }
  const searchParams = new URLSearchParams();
  if (params.amount) searchParams.set("amount", String(params.amount));
  if (params.duration) searchParams.set("lifetime", String(params.duration));
  return `${basePath}?${searchParams.toString()}`;
}

/**
 * Validate amount for a product
 */
export function isValidAmount(product: LoanProductKey, amount: number): boolean {
  const config = LOAN_PRODUCTS[product];
  return amount >= config.amount.min && amount <= config.amount.max;
}

/**
 * Validate duration for a product
 */
export function isValidDuration(product: LoanProductKey, duration: number): boolean {
  const config = LOAN_PRODUCTS[product];
  return duration >= config.duration.min && duration <= config.duration.max;
}

/**
 * Format rate display string
 */
export function formatRateRange(product: LoanProductKey): string {
  const config = LOAN_PRODUCTS[product];
  return `${config.rates.min}% - ${config.rates.max}%`;
}

/**
 * Format amount range for display (with Swiss formatting)
 */
export function formatAmountRange(product: LoanProductKey): string {
  const config = LOAN_PRODUCTS[product];
  const format = (n: number) => n.toLocaleString("de-CH");
  return `${format(config.amount.min)} - ${format(config.amount.max)}`;
}

/**
 * Format duration range for display
 */
export function formatDurationRange(product: LoanProductKey): string {
  const config = LOAN_PRODUCTS[product];
  return `${config.duration.min} - ${config.duration.max}`;
}
