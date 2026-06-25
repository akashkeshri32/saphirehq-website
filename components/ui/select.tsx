"use client";

import { useState, useRef, useEffect, useId } from "react";
import { ChevronDown, Check } from "lucide-react";
import { cn } from "@/lib/utils/tailwind";

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps {
  options: SelectOption[];
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  label?: string;
  hint?: string;
  name?: string;
  className?: string;
  triggerClassName?: string;
  size?: "sm" | "md";
}

export function Select({
  options,
  value: controlledValue,
  defaultValue = "",
  onChange,
  placeholder = "Select…",
  label,
  hint,
  name,
  className,
  triggerClassName,
  size = "md",
}: SelectProps) {
  const isControlled = controlledValue !== undefined;
  const [internalValue, setInternalValue] = useState(defaultValue);
  const selected = isControlled ? controlledValue : internalValue;

  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const id = useId();

  const selectedOption = options.find((o) => o.value === selected);
  const displayLabel = selectedOption?.label ?? placeholder;

  function choose(val: string) {
    if (!isControlled) setInternalValue(val);
    onChange?.(val);
    setOpen(false);
  }

  // Close on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  // Close on Escape
  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, []);

  const isSm = size === "sm";

  return (
    <div className={cn("flex flex-col gap-2", className)}>
      {label && (
        <label
          htmlFor={id}
          className="text-body-sm font-medium text-content-secondary select-none"
        >
          {label}
        </label>
      )}

      <div ref={containerRef} className="relative">
        {/* Hidden input for form submission */}
        {name && <input type="hidden" name={name} value={selected} />}

        {/* Trigger */}
        <button
          id={id}
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          aria-expanded={open}
          aria-haspopup="listbox"
          className={cn(
            "w-full flex items-center justify-between gap-2",
            "bg-surface-input border rounded-xl",
            "text-body-sm transition-all duration-200",
            "focus:outline-none focus:ring-2 focus:bg-surface-hover",
            open
              ? "border-brand-500/50 ring-2 ring-brand-500/25 bg-surface-hover"
              : "border-border-default hover:border-border-strong",
            isSm ? "h-9 px-3" : "h-10 px-3.5",
            selectedOption ? "text-content-primary" : "text-content-subtle",
            triggerClassName,
          )}
        >
          <span className="truncate">{displayLabel}</span>
          <ChevronDown
            size={14}
            className={cn(
              "shrink-0 text-content-subtle transition-transform duration-200",
              open && "rotate-180",
            )}
          />
        </button>

        {/* Dropdown panel */}
        {open && (
          <ul
            role="listbox"
            className={cn(
              "absolute z-50 w-full mt-1.5 py-1 rounded-xl",
              "bg-dark border border-border-default",
              "shadow-lg shadow-black/30",
              "max-h-60 overflow-y-auto",
            )}
          >
            {options.map((opt) => {
              const isSelected = opt.value === selected;
              return (
                <li
                  key={opt.value}
                  role="option"
                  aria-selected={isSelected}
                  onClick={() => choose(opt.value)}
                  className={cn(
                    "flex items-center justify-between gap-2 p-3 cursor-pointer",
                    "text-body-sm transition-colors duration-100",
                    isSm ? "h-8" : "h-9",
                    isSelected
                      ? "bg-brand-500/15 text-brand-300"
                      : "text-content-secondary hover:bg-surface-hover hover:text-content-primary",
                  )}
                >
                  <span className="truncate">{opt.label}</span>
                  {isSelected && (
                    <Check size={13} className="shrink-0 text-brand-400" />
                  )}
                </li>
              );
            })}
          </ul>
        )}
      </div>

      {hint && <p className="text-caption text-content-subtle">{hint}</p>}
    </div>
  );
}
