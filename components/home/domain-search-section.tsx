"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MagnifyingGlass, CheckCircle, Globe } from "@phosphor-icons/react";

const domainTlds = [
  { tld: ".com", price: "$9.99/yr", popular: true },
  { tld: ".in", price: "$6.99/yr", popular: true },
  { tld: ".io", price: "$29.99/yr", popular: false },
  { tld: ".dev", price: "$14.99/yr", popular: false },
  { tld: ".org", price: "$10.99/yr", popular: false },
  { tld: ".net", price: "$11.99/yr", popular: false },
  { tld: ".co", price: "$12.99/yr", popular: false },
];

export function DomainSearchSection() {
  const [domainInput, setDomainInput] = useState("");
  const [searched, setSearched] = useState(false);
  const [searchedName, setSearchedName] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (domainInput.trim()) {
      setSearchedName(domainInput.trim().toLowerCase());
      setSearched(true);
    }
  };

  return (
    <section className="relative py-16 lg:py-24 border-t border-border/60 bg-muted/20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Section Header */}


        <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Find the perfect domain for your next idea.
        </h2>

        <p className="mt-3 text-sm text-muted-foreground sm:text-base max-w-2xl mx-auto">
          Instant domain registration, free WHOIS privacy protection, Anycast DNS management, and seamless 1-click binding to your NEXORA cloud instances.
        </p>

        {/* Large Domain Search Input */}
        <form onSubmit={handleSearch} className="mt-8 mx-auto max-w-2xl">
          <div className="flex flex-col sm:flex-row items-center gap-2 rounded-lg border border-border bg-card p-1.5 shadow-xs">
            <div className="flex flex-1 items-center gap-2.5 px-3 w-full">
              <MagnifyingGlass className="size-5 text-muted-foreground shrink-0" />
              <input
                type="text"
                value={domainInput}
                onChange={(e) => setDomainInput(e.target.value)}
                placeholder="Enter domain name (e.g. mycompany.com)"
                className="w-full bg-transparent py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
              />
            </div>
            <Button
              type="submit"
              size="default"
              className="w-full sm:w-auto"
            >
              Search Domain
            </Button>
          </div>

          {/* Searched Status Feedback */}
          {searched && (
            <div className="mt-4 rounded-md border border-border bg-card p-3.5 text-xs text-foreground flex flex-col sm:flex-row sm:items-center justify-between gap-3 animate-fadeIn">
              <div className="flex items-center gap-2 font-medium">
                <CheckCircle weight="fill" className="size-4 text-primary" />
                <span>
                  <strong>{searchedName.includes(".") ? searchedName : `${searchedName}.com`}</strong> is available for registration!
                </span>
              </div>
              <Button
                type="button"
                size="sm"
                className="shrink-0"
              >
                Add to Cart ($9.99/yr)
              </Button>
            </div>
          )}
        </form>

        {/* Popular Extensions TLD badges */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2.5">
          {domainTlds.map((t) => (
            <div
              key={t.tld}
              className={`flex items-center gap-2 rounded-md border px-3 py-1.5 text-xs transition-colors ${t.popular
                  ? "border-primary/40 bg-primary/5 text-foreground font-semibold"
                  : "border-border bg-card text-muted-foreground"
                }`}
            >
              <span className="text-foreground font-bold">{t.tld}</span>
              <span className="text-muted-foreground">{t.price}</span>
            </div>
          ))}
        </div>

        {/* Transfer domain link */}
        <div className="mt-6 text-xs text-muted-foreground">
          Already own a domain?{" "}
          <Link href="/domains/transfer" className="font-semibold text-primary hover:underline">
            Transfer your existing domain to NEXORA for free renewal & Anycast DNS
          </Link>
        </div>
      </div>
    </section>
  );
}
