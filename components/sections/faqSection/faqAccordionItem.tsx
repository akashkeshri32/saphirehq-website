"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils/tailwind";

export type FaqItem = {
  question: string;
  answer: string;
};

export const FaqAccordionItem = ({ question, answer }: FaqItem) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-border-stroke py-5">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex w-full items-center justify-between gap-4 text-left cursor-pointer"
        aria-expanded={isOpen}
      >
        <span className="text-16 font-medium">{question}</span>
        <ChevronDown
          size={18}
          className={cn(
            "shrink-0 text-text-gray transition-transform",
            isOpen && "rotate-180",
          )}
        />
      </button>

      {isOpen && <p className="text-14 text-text-gray mt-5 md:max-w-9/12 leading-5.5">{answer}</p>}
    </div>
  );
};
