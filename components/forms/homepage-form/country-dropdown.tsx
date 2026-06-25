"use client";

import { cn } from "@/lib/utils/tailwind";
import { Check, ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const COUNTRIES = [
  { dial: "+91", flag: "🇮🇳", name: "India" },
  { dial: "+1", flag: "🇺🇸", name: "United States" },
  { dial: "+44", flag: "🇬🇧", name: "United Kingdom" },
  { dial: "+971", flag: "🇦🇪", name: "UAE" },
  { dial: "+974", flag: "🇶🇦", name: "Qatar" },
  { dial: "+966", flag: "🇸🇦", name: "Saudi Arabia" },
  { dial: "+973", flag: "🇧🇭", name: "Bahrain" },
  { dial: "+968", flag: "🇴🇲", name: "Oman" },
  { dial: "+1", flag: "🇨🇦", name: "Canada" },
  { dial: "+61", flag: "🇦🇺", name: "Australia" },
  { dial: "+64", flag: "🇳🇿", name: "New Zealand" },
  { dial: "+65", flag: "🇸🇬", name: "Singapore" },
  { dial: "+60", flag: "🇲🇾", name: "Malaysia" },
  { dial: "+92", flag: "🇵🇰", name: "Pakistan" },
  { dial: "+880", flag: "🇧🇩", name: "Bangladesh" },
  { dial: "+977", flag: "🇳🇵", name: "Nepal" },
  { dial: "+94", flag: "🇱🇰", name: "Sri Lanka" },
  { dial: "+49", flag: "🇩🇪", name: "Germany" },
  { dial: "+33", flag: "🇫🇷", name: "France" },
  { dial: "+31", flag: "🇳🇱", name: "Netherlands" },
  { dial: "+81", flag: "🇯🇵", name: "Japan" },
  { dial: "+86", flag: "🇨🇳", name: "China" },
  { dial: "+55", flag: "🇧🇷", name: "Brazil" },
  { dial: "+27", flag: "🇿🇦", name: "South Africa" },
  { dial: "+234", flag: "🇳🇬", name: "Nigeria" },
  { dial: "+254", flag: "🇰🇪", name: "Kenya" },
];

export function CountryDropdown() {
  const [country, setCountry] = useState(COUNTRIES[0]);

  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} className="relative shrink-0">
      <input type="hidden" name="country-code" value={`${country.dial}`} />

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className={cn(
          "flex items-center gap-1.5 h-full px-3 rounded-l-xl",
          "bg-surface-input border border-border-default border-r-0",
          "text-content-primary text-body-sm font-medium",
          "hover:bg-surface-hover transition-all duration-200",
          "focus:outline-none focus:ring-2 focus:ring-brand-500/25 focus:ring-inset",
          open && "bg-surface-hover",
        )}
      >
        <span className="text-base leading-none">{country.flag}</span>
        <span className="text-content-muted">{country.dial}</span>
        <ChevronDown
          size={13}
          className={cn(
            "text-content-subtle transition-transform duration-200 shrink-0",
            open && "rotate-180",
          )}
        />
      </button>

      {open && (
        <div
          className={cn(
            "absolute top-full left-0 z-50 mt-1.5 w-56",
            "bg-surface-1 border border-border-default rounded-xl",
            "shadow-2xl shadow-black/50 overflow-hidden",
            "animate-fade-in",
          )}
        >
          <ul className="max-h-60 overflow-y-auto py-1">
            {COUNTRIES.map((c) => (
              <li key={`${c.name}-${c.dial}`}>
                <button
                  type="button"
                  onClick={() => {
                    setCountry(c);
                    setOpen(false);
                  }}
                  className={cn(
                    "w-full flex items-center gap-3 px-3 py-2.5",
                    "text-body-sm transition-colors duration-150",
                    "hover:bg-surface-hover",
                    country.name === c.name
                      ? "text-brand-300 bg-brand-600/10"
                      : "text-content-secondary",
                  )}
                >
                  <span className="text-base leading-none shrink-0">
                    {c.flag}
                  </span>
                  <span className="flex-1 text-left truncate">{c.name}</span>
                  <span className="text-content-subtle shrink-0">{c.dial}</span>
                  {country.name === c.name && (
                    <Check size={13} className="text-brand-400 shrink-0" />
                  )}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
