"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type CurrencyCode = "INR" | "USD" | "EUR" | "GBP";

export interface CurrencyConfig {
  code: CurrencyCode;
  symbol: string;
  name: string;
  label: string;
  rate: number; // Base rate relative to 1 USD
  flag: string;
}

export const CURRENCIES: Record<CurrencyCode, CurrencyConfig> = {
  INR: {
    code: "INR",
    symbol: "₹",
    name: "Indian Rupee",
    label: "INR (₹)",
    rate: 85.0,
    flag: "🇮🇳",
  },
  USD: {
    code: "USD",
    symbol: "$",
    name: "US Dollar",
    label: "USD ($)",
    rate: 1.0,
    flag: "🇺🇸",
  },
  EUR: {
    code: "EUR",
    symbol: "€",
    name: "Euro",
    label: "EUR (€)",
    rate: 0.92,
    flag: "🇪🇺",
  },
  GBP: {
    code: "GBP",
    symbol: "£",
    name: "British Pound",
    label: "GBP (£)",
    rate: 0.79,
    flag: "🇬🇧",
  },
};

export const CURRENCY_LIST = Object.values(CURRENCIES);

interface CurrencyContextType {
  currency: CurrencyCode;
  setCurrency: (code: CurrencyCode) => void;
  current: CurrencyConfig;
  currencies: CurrencyConfig[];
  convert: (usdAmount: number) => number;
  formatPrice: (usdAmount: number, options?: { showCents?: boolean; round?: boolean }) => string;
  formatPriceString: (priceString: string) => string;
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

export function CurrencyProvider({ children }: { children: ReactNode }) {
  // Default to INR as requested by the user
  const [currency, setCurrencyState] = useState<CurrencyCode>("INR");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("app_currency") as CurrencyCode | null;
    if (saved && CURRENCIES[saved]) {
      setCurrencyState(saved);
    }
  }, []);

  const setCurrency = (code: CurrencyCode) => {
    if (CURRENCIES[code]) {
      setCurrencyState(code);
      localStorage.setItem("app_currency", code);
    }
  };

  const current = CURRENCIES[currency] || CURRENCIES.INR;

  const convert = (usdAmount: number): number => {
    if (typeof usdAmount !== "number" || isNaN(usdAmount)) return 0;
    return usdAmount * current.rate;
  };

  const formatPrice = (
    usdAmount: number,
    options?: { showCents?: boolean; round?: boolean }
  ): string => {
    if (typeof usdAmount !== "number" || isNaN(usdAmount)) return `${current.symbol}0`;
    const converted = usdAmount * current.rate;

    if (current.code === "INR") {
      if (converted < 10) {
        return `${current.symbol}${converted.toFixed(2)}`;
      }
      return `${current.symbol}${Math.round(converted).toLocaleString("en-IN")}`;
    }

    if (options?.round || converted >= 100) {
      return `${current.symbol}${Math.round(converted).toLocaleString("en-US")}`;
    }

    if (converted < 10 && options?.showCents !== false) {
      return `${current.symbol}${converted.toFixed(2)}`;
    }

    return `${current.symbol}${converted.toFixed(2)}`;
  };

  const formatPriceString = (priceString: string): string => {
    if (!priceString || typeof priceString !== "string") return priceString;

    // Matches patterns like "$12.00", "$2.99/mo", "$89.00/month", "$9.99/yr", "~$68.40 / mo"
    const regex = /(\$|\bUSD\s*)([0-9]+(?:\.[0-9]+)?)/g;
    return priceString.replace(regex, (_, prefix, numStr) => {
      const num = parseFloat(numStr);
      if (isNaN(num)) return _;
      return formatPrice(num);
    });
  };

  return (
    <CurrencyContext.Provider
      value={{
        currency,
        setCurrency,
        current,
        currencies: CURRENCY_LIST,
        convert,
        formatPrice,
        formatPriceString,
      }}
    >
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency(): CurrencyContextType {
  const context = useContext(CurrencyContext);
  if (!context) {
    // Fallback safe context if used outside provider
    const fallbackCurrent = CURRENCIES.INR;
    return {
      currency: "INR",
      setCurrency: () => {},
      current: fallbackCurrent,
      currencies: CURRENCY_LIST,
      convert: (amt) => amt * fallbackCurrent.rate,
      formatPrice: (amt) => `${fallbackCurrent.symbol}${Math.round(amt * fallbackCurrent.rate)}`,
      formatPriceString: (str) =>
        str.replace(/(\$|\bUSD\s*)([0-9]+(?:\.[0-9]+)?)/g, (_, __, n) => `₹${Math.round(parseFloat(n) * 85)}`),
    };
  }
  return context;
}
