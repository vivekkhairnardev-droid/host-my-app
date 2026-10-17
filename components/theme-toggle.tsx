"use client";

import * as React from "react";
import { Sun, Moon } from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";

export function ThemeToggle({ className }: { className?: string }) {
  const [theme, setTheme] = React.useState<"light" | "dark">("dark");
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
    const storedTheme = (localStorage.getItem("theme") as "light" | "dark") || "dark";
    setTheme(storedTheme);
    if (storedTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    localStorage.setItem("theme", nextTheme);
    if (nextTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  if (!mounted) {
    return (
      <Button
        variant="ghost"
        size="icon"
        className={`size-9 rounded-md border border-border bg-card/70 text-muted-foreground hover:bg-muted hover:text-foreground cursor-pointer ${className || ""}`}
        aria-label="Toggle theme"
      >
        <span className="size-4.5" />
      </Button>
    );
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className={`size-9 rounded-md border border-border bg-card/70 text-muted-foreground hover:bg-muted hover:text-foreground cursor-pointer transition-colors ${className || ""}`}
      title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
    >
      {theme === "dark" ? (
        <Sun weight="bold" className="size-4.5 text-amber-400 transition-transform rotate-0 scale-100 hover:rotate-45" />
      ) : (
        <Moon weight="bold" className="size-4.5 text-zinc-700 transition-transform rotate-0 scale-100 hover:-rotate-12" />
      )}
    </Button>
  );
}
