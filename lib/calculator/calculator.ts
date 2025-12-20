/**
 * Cashare Loan Calculator
 *
 * Financial calculator for P2P lending with Swiss-specific rounding.
 * Handles loan installments, insurance premiums, fees, and yield calculations.
 */

import { roundForSwitzerland } from "./swiss-rounding.ts";

// Insurance rate constants
const INSURANCE_RATES = {
  death: 0.0065,
  disability: 0.0275, // Death + Accident + Sickness
  unemployed: 0.0635, // Death + Accident + Sickness + Unemployment
} as const;

// Lender fee rate (Gold fee)
const LENDER_FEE_RATE = 0.0075 / 12;

// Loanee margin rates
const LOANEE_MARGIN = {
  default: 0.0075,
  bulletLoan: 0.015,
} as const;

/**
 * Insurance types available for loans
 */
export enum InsuranceType {
  NONE = 1,
  DEATHCASE = 2,
  DEATHCASE_ACCIDENT_SICKNESS = 3,
  DEATHCASE_ACCIDENT_SICKNESS_UNEMPLOYMENT = 4,
}

/**
 * Loan product types
 */
export enum ProductType {
  /** Private individual loans (P2P) */
  P2P = 0,
  /** Private express loans (P2E) */
  P2E = 1,
  /** SME loans (P2S) */
  P2S = 2,
  /** SME express loans (P2SO) */
  P2SO = 3,
  /** Bullet loans - single repayment at end */
  BULLET_LOAN = 5,
}

/** Minimum fees per product type */
const FEE_MINIMUMS: Record<ProductType, number> = {
  [ProductType.P2P]: 75,
  [ProductType.P2E]: 0,
  [ProductType.P2S]: 500,
  [ProductType.P2SO]: 500,
  [ProductType.BULLET_LOAN]: 500,
};

/**
 * Result of a loan calculation
 */
export interface CalculationResult {
  /** Loan amount in CHF */
  amount: number;
  /** Effective annual interest rate (%) */
  effectiveInterest: number;
  /** Loanee fee in CHF (null if no product set) */
  fee: string | null;
  /** Lender fee in CHF */
  fee_forLoaner: string;
  /** Total death insurance over loan lifetime */
  insuranceDeathAddedUp: string;
  /** Monthly death insurance premium */
  insuranceDeathProRata: string;
  /** Total disability insurance over loan lifetime */
  insuranceDisabilityAddedUp: string;
  /** Monthly disability insurance premium */
  insuranceDisabilityProRata: string;
  /** Total unemployment insurance over loan lifetime */
  insuranceUnemployedAddedUp: string;
  /** Monthly unemployment insurance premium */
  insuranceUnemployedProRata: string;
  /** Monthly installment including insurance */
  instalment: string;
  /** Monthly installment without insurance */
  instalmentWithoutPremium: string;
  /** Nominal interest rate (decimal) */
  interest: number;
  /** Nominal interest rate (percentage * 100) */
  nominalInterest: number;
  /** Total interest costs in CHF */
  interestCosts: string;
  /** Loan duration in months */
  lifetime: number;
  /** Net yield for investor (costs - fees) */
  netYield: string;
  /** Gross yield (same as interestCosts) */
  yield: string;
}

/**
 * Insurance calculation utilities
 */
const insurance = {
  deathProRata(instalment: number): string {
    return roundForSwitzerland(instalment * INSURANCE_RATES.death).toFixed(2);
  },

  deathAddedUp(instalment: number, lifetime: number): string {
    return (parseFloat(this.deathProRata(instalment)) * lifetime).toFixed(2);
  },

  disabilityProRata(instalment: number): string {
    return roundForSwitzerland(instalment * INSURANCE_RATES.disability).toFixed(
      2
    );
  },

  disabilityAddedUp(instalment: number, lifetime: number): string {
    return (parseFloat(this.disabilityProRata(instalment)) * lifetime).toFixed(
      2
    );
  },

  unemployedProRata(instalment: number): string {
    return roundForSwitzerland(instalment * INSURANCE_RATES.unemployed).toFixed(
      2
    );
  },

  unemployedAddedUp(instalment: number, lifetime: number): string {
    return (parseFloat(this.unemployedProRata(instalment)) * lifetime).toFixed(
      2
    );
  },
};

/**
 * Loan Calculator class
 *
 * @example
 * ```ts
 * const calc = new Calculator();
 * calc.setProduct(ProductType.P2P);
 * calc.setInsuranceType(InsuranceType.DEATHCASE);
 * const result = calc.calculate(25000, 6.5, 36);
 * console.log(result.instalment); // Monthly payment
 * ```
 */
export class Calculator {
  private product: ProductType | null = ProductType.P2E;
  private insuranceType: InsuranceType = InsuranceType.NONE;

  /**
   * Set the loan product type
   */
  setProduct(product: ProductType | null): void {
    this.product = product;
  }

  /**
   * Set the insurance type
   */
  setInsuranceType(type: InsuranceType): void {
    this.insuranceType = type;
  }

  /**
   * Get the current product type
   */
  getProduct(): ProductType | null {
    return this.product;
  }

  /**
   * Get the current insurance type
   */
  getInsuranceType(): InsuranceType {
    return this.insuranceType;
  }

  /**
   * Check if current product is a bullet loan
   */
  isProductBulletLoan(): boolean {
    return this.product === ProductType.BULLET_LOAN;
  }

  /**
   * Check if current product is individual (P2P)
   */
  isProductIndividual(): boolean {
    return this.product === ProductType.P2P;
  }

  /**
   * Check if current product is SME
   */
  isProductSme(): boolean {
    return this.product === ProductType.P2S;
  }

  /**
   * Calculate the loanee fee
   */
  private calculateLoaneeFee(amount: number, lifetime: number): number {
    const minFee =
      this.product !== null ? FEE_MINIMUMS[this.product] ?? 0 : 0;
    const margin = this.isProductBulletLoan()
      ? LOANEE_MARGIN.bulletLoan
      : LOANEE_MARGIN.default;

    return Math.max(minFee, (amount * margin / 12) * lifetime);
  }

  /**
   * Calculate the insurance premium based on current insurance type
   */
  private calculatePremium(instalmentWithoutPremium: number): number {
    switch (this.insuranceType) {
      case InsuranceType.NONE:
        return 0;
      case InsuranceType.DEATHCASE:
        return parseFloat(insurance.deathProRata(instalmentWithoutPremium));
      case InsuranceType.DEATHCASE_ACCIDENT_SICKNESS:
        return parseFloat(insurance.disabilityProRata(instalmentWithoutPremium));
      case InsuranceType.DEATHCASE_ACCIDENT_SICKNESS_UNEMPLOYMENT:
        return parseFloat(insurance.unemployedProRata(instalmentWithoutPremium));
      default:
        return 0;
    }
  }

  /**
   * Calculate loan details
   *
   * @param amount - Loan amount in CHF
   * @param effectiveInterest - Effective annual interest rate (e.g., 6.5 for 6.5%)
   * @param lifetime - Loan duration in months
   * @returns Calculation result with all loan details
   */
  calculate(
    amount: number,
    effectiveInterest: number,
    lifetime: number
  ): CalculationResult {
    // Convert effective interest to nominal (monthly) interest
    // Formula: nominal = 12 * ((1 + effective/100)^(1/12) - 1)
    const nominalInterest =
      12 * (Math.pow(1 + effectiveInterest / 100, 1 / 12) - 1);
    const nominalInterestPerMonth = nominalInterest / 12;
    const q = 1 + nominalInterestPerMonth;

    // Calculate installment based on product type
    let instalmentWithoutPremium: number;

    if (this.isProductBulletLoan()) {
      // Bullet loan: single payment at end with simple interest
      instalmentWithoutPremium = roundForSwitzerland(
        amount * (1 + (effectiveInterest / 100) * (lifetime / 12))
      );
    } else {
      // Regular loan: annuity formula
      // instalment = principal * (r * (1+r)^n) / ((1+r)^n - 1)
      instalmentWithoutPremium = roundForSwitzerland(
        (amount * nominalInterestPerMonth * Math.pow(q, lifetime)) /
          (Math.pow(q, lifetime) - 1)
      );
    }

    // Fallback for edge cases (e.g., 0% interest)
    if (isNaN(instalmentWithoutPremium)) {
      instalmentWithoutPremium = roundForSwitzerland(amount / lifetime);
    }

    // Calculate insurance premium
    const premium = this.calculatePremium(instalmentWithoutPremium);

    // Calculate loanee fees
    let loaneeFees: string | null = null;
    if (this.product !== null) {
      const fee = this.calculateLoaneeFee(amount, lifetime);
      loaneeFees = roundForSwitzerland(fee).toFixed(2);
    }

    // Calculate total interest costs
    let costs: number;
    if (this.isProductBulletLoan()) {
      costs = instalmentWithoutPremium - amount;
    } else {
      costs = lifetime * instalmentWithoutPremium - amount;
    }

    // Calculate lender fee (Gold fee)
    const feeForLoaner = roundForSwitzerland(
      ((LENDER_FEE_RATE * Math.pow(1 + LENDER_FEE_RATE, lifetime)) /
        (Math.pow(1 + LENDER_FEE_RATE, lifetime) - 1)) *
        amount *
        lifetime -
        amount
    );

    // Final rounding and formatting
    const finalCosts = roundForSwitzerland(isNaN(costs) ? 0 : costs);
    instalmentWithoutPremium = roundForSwitzerland(instalmentWithoutPremium);
    const instalmentWithPremium = instalmentWithoutPremium + premium;

    return {
      amount,
      effectiveInterest,
      fee: loaneeFees,
      fee_forLoaner: feeForLoaner.toFixed(2),
      insuranceDeathAddedUp: insurance.deathAddedUp(
        instalmentWithoutPremium,
        lifetime
      ),
      insuranceDeathProRata: insurance.deathProRata(instalmentWithoutPremium),
      insuranceDisabilityAddedUp: insurance.disabilityAddedUp(
        instalmentWithoutPremium,
        lifetime
      ),
      insuranceDisabilityProRata: insurance.disabilityProRata(
        instalmentWithoutPremium
      ),
      insuranceUnemployedAddedUp: insurance.unemployedAddedUp(
        instalmentWithoutPremium,
        lifetime
      ),
      insuranceUnemployedProRata: insurance.unemployedProRata(
        instalmentWithoutPremium
      ),
      instalment: instalmentWithPremium.toFixed(2),
      instalmentWithoutPremium: instalmentWithoutPremium.toFixed(2),
      interest: nominalInterest,
      nominalInterest: Math.round(nominalInterest * 100),
      interestCosts: finalCosts.toFixed(2),
      lifetime,
      netYield: (finalCosts - feeForLoaner).toFixed(2),
      yield: finalCosts.toFixed(2),
    };
  }
}

// Export a default instance for convenience
export const calculator = new Calculator();
