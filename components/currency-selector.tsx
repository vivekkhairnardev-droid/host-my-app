"use client";

import React, { useState, useRef, useEffect } from "react";
import { useCurrency, CurrencyCode } from "@/lib/currency-context";
import { CaretDown, Check } from "@phosphor-icons/react";
import { cn } from "@/lib/utils";

interface CurrencySelectorProps {
  className?: string;
  variant?: "navbar" | "compact" | "pill";
}

export function CurrencySelector({ className, variant = "navbar" }: CurrencySelectorProps) {
  const { currency, setCurrency, current, currencies } = useCurrency();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} className={cn("relative inline-block text-left", className)}>
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        aria-label="Select pricing currency"
        className={cn(
          "flex items-center gap-1.5 rounded-md border border-border bg-card/70 px-2.5 py-1.5 text-xs font-semibold text-foreground transition-all duration-150 hover:bg-muted hover:border-border/80 cursor-pointer shadow-2xs select-none",
          open && "bg-muted border-primary/50 ring-1 ring-primary/20",
          variant === "pill" && "rounded-full px-3 py-1 bg-muted/60"
        )}
      >
        <span className="text-sm leading-none">{current.flag}</span>
        <span className="font-mono font-bold text-primary">{current.symbol}</span>
        <span className="font-medium tracking-tight text-foreground">{current.code}</span>
        <CaretDown
          weight="bold"
          className={cn("size-3 text-muted-foreground transition-transform duration-200", open && "rotate-180 text-primary")}
        />
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-1.5 w-44 rounded-lg border border-border bg-popover p-1 text-popover-foreground shadow-lg z-50 animate-in fade-in slide-in-from-top-1 duration-150">
          <div className="px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground border-b border-border/50 mb-1">
            Display Currency
          </div>
          <div className="space-y-0.5">
            {currencies.map((c) => {
              const isSelected = c.code === currency;
              return (
                <button
                  key={c.code}
                  type="button"
                  onClick={() => {
                    setCurrency(c.code as CurrencyCode);
                    setOpen(false);
                  }}
                  className={cn(
                    "flex w-full items-center justify-between rounded-md px-2.5 py-1.5 text-xs font-medium transition-colors cursor-pointer",
                    isSelected
                      ? "bg-primary/10 text-primary font-semibold"
                      : "text-foreground hover:bg-muted/80"
                  )}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-sm">{c.flag}</span>
                    <span className="font-mono font-bold text-muted-foreground">{c.symbol}</span>
                    <span>{c.code}</span>
                  </div>
                  {isSelected && <Check weight="bold" className="size-3 text-primary shrink-0" />}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
