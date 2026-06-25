"use client";

import { useState } from "react";
import Container from "@/components/layout/container";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils/tailwind";
import { FAQS } from "./faq-items";

function FaqItem({
  q,
  a,
  open,
  onToggle,
}: {
  q: string;
  a: string;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className={cn(
        "rounded-2xl border transition-colors duration-200",
        open
          ? "border-primary/40 bg-primary/5"
          : "border-border-default bg-surface-overlay",
      )}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left cursor-pointer"
      >
        <span
          className={cn(
            "font-semibold font-heading text-16 leading-snug transition-colors",
            open ? "text-white" : "text-white/80",
          )}
        >
          {q}
        </span>
        <ChevronDown
          size={18}
          className={cn(
            "shrink-0 text-text-secondary transition-transform duration-300",
            open && "rotate-180 text-primary",
          )}
        />
      </button>

      <div
        className={cn(
          "overflow-hidden transition-all duration-300",
          open ? "max-h-96" : "max-h-0",
        )}
      >
        <p className="px-6 pb-5 text-text-secondary text-16 leading-relaxed">
          {a}
        </p>
      </div>
    </div>
  );
}

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-10 md:py-24">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.6fr] gap-10 items-start">
          {/* Left: sticky heading + description */}
          <div className="md:sticky md:top-24">
            <p className="text-primary font-semibold text-14 uppercase tracking-widest mb-4">
              FAQ
            </p>
            <h2 className="text-white font-bold font-heading text-h2-mobile md:text-h2 mb-5 leading-tight">
              Questions We Get <span className="text-primary">Asked A Lot</span>
            </h2>
            <p className="text-text-secondary text-16 md:text-18 leading-relaxed">
              Still unsure about something? Browse through our most common
              questions — or reach out to a counsellor and we&apos;ll get back
              to you within 24 hours.
            </p>
          </div>

          {/* Right: accordion */}
          <div className="flex flex-col gap-3">
            {FAQS.map((faq, i) => (
              <FaqItem
                key={i}
                q={faq.q}
                a={faq.a}
                open={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
