"use client";

import { cn } from "@/lib/utils/tailwind";
import { Check, ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function SelectDropdown({
  label,
  name,
  options,
  value,
  onChange,
  placeholder,
}: {
  label: string;
  name: string;
  options: string[];
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
}) {
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
    <div ref={ref} className="relative flex flex-col gap-2">
      <input type="hidden" name={name} value={value} />
      <label className="text-body-sm font-medium text-content-secondary select-none">
        {label}
      </label>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className={cn(
          "flex items-center justify-between w-full h-11 px-3.5 rounded-xl",
          "bg-surface-input border transition-all duration-200",
          "text-body-sm focus:outline-none focus:ring-2 focus:ring-brand-500/25",
          open
            ? "border-brand-500/50 bg-surface-hover ring-2 ring-brand-500/25"
            : "border-border-default hover:border-border-strong hover:bg-surface-hover",
          value ? "text-content-primary" : "text-content-subtle",
        )}
      >
        <span>{value || placeholder}</span>
        <ChevronDown
          size={15}
          className={cn(
            "text-content-subtle transition-transform duration-200 shrink-0",
            open && "rotate-180",
          )}
        />
      </button>

      {open && (
        <div
          className={cn(
            "absolute top-full left-0 right-0 z-50 mt-1.5",
            "bg-surface-1 border border-border-default rounded-xl",
            "shadow-2xl shadow-black/10 overflow-hidden animate-fade-in",
          )}
        >
          <ul className="py-1">
            {options.map((option) => (
              <li key={option}>
                <button
                  type="button"
                  onClick={() => {
                    onChange(option);
                    setOpen(false);
                  }}
                  className={cn(
                    "w-full flex items-center justify-between px-3.5 py-2.5",
                    "text-body-sm transition-colors duration-150",
                    "hover:bg-surface-hover",
                    value === option
                      ? "text-brand-300 bg-brand-600/10"
                      : "text-content-secondary",
                  )}
                >
                  <span>{option}</span>
                  {value === option && (
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
