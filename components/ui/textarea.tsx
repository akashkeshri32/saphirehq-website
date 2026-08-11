"use client";

import { cn } from "@/lib/utils/tailwind";
import { TextareaHTMLAttributes, forwardRef, useId } from "react";

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  hint?: string;
  error?: string;
  fullWidth?: boolean;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, hint, error, fullWidth = false, className, id, rows = 5, ...props }, ref) => {
    const generatedId = useId();
    const textareaId = id ?? generatedId;

    return (
      <div className={cn("flex flex-col gap-2", fullWidth && "w-full")}>
        {label && (
          <label
            htmlFor={textareaId}
            className="text-body-sm font-semibold text-content-secondary text-13 select-none"
          >
            {label}
          </label>
        )}

        <textarea
          ref={ref}
          id={textareaId}
          rows={rows}
          className={cn(
            "w-full bg-[#F8FAFF] border border-white-two! rounded-lg px-3.5 py-3 resize-none",
            "text-content-primary placeholder:text-content-subtle",
            "transition-all duration-200",
            "focus:outline-none focus:ring-1 focus:bg-surface-hover",
            error
              ? "border-red-500/50 focus:ring-red-500/25 focus:border-red-500/70"
              : "border-border-default hover:border-border-strong focus:ring-brand-500/25 focus:border-brand-500/50",
            "disabled:opacity-40 disabled:cursor-not-allowed",
            className,
          )}
          {...props}
        />

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
Textarea.displayName = "Textarea";

export { Textarea };
