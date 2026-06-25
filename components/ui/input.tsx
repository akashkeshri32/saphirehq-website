"use client";

import { cn } from "@/lib/utils/tailwind";
import { InputHTMLAttributes, ReactNode, forwardRef, useId } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  hint?: string;
  error?: string;
  LeftIcon?: ReactNode;
  RightIcon?: ReactNode;
  fullWidth?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      hint,
      error,
      LeftIcon,
      RightIcon,
      fullWidth = false,
      className,
      id,
      ...props
    },
    ref,
  ) => {
    const generatedId = useId();
    const inputId = id ?? generatedId;

    return (
      <div className={cn("flex flex-col gap-2", fullWidth && "w-full")}>
        {label && (
          <label
            htmlFor={inputId}
            className="text-body-sm font-medium text-content-secondary select-none"
          >
            {label}
          </label>
        )}

        <div className="relative">
          {LeftIcon && (
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-content-subtle">
              {LeftIcon}
            </span>
          )}

          <input
            ref={ref}
            id={inputId}
            className={cn(
              "w-full bg-surface-input border rounded-xl px-3.5 py-2.5",
              "text-content-primary placeholder:text-content-subtle",
              "transition-all duration-200",
              "focus:outline-none focus:ring-2 focus:bg-surface-hover",
              error
                ? "border-red-500/50 focus:ring-red-500/25 focus:border-red-500/70"
                : "border-border-default hover:border-border-strong focus:ring-brand-500/25 focus:border-brand-500/50",
              "disabled:opacity-40 disabled:cursor-not-allowed",
              LeftIcon && "pl-10",
              RightIcon && "pr-10",
              className,
            )}
            {...props}
          />

          {RightIcon && (
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-content-subtle">
              {RightIcon}
            </span>
          )}
        </div>

        {error ? (
          <p className="text-caption text-red-400 flex items-center gap-1">
            <span aria-hidden="true">⚠</span> {error}
          </p>
        ) : hint ? (
          <p className="text-caption text-content-subtle">{hint}</p>
        ) : null}
      </div>
    );
  },
);
Input.displayName = "Input";

export { Input };
