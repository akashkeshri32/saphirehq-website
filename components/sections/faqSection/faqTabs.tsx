"use client";

import { useState } from "react";
import { cn } from "@/lib/utils/tailwind";
import { FaqAccordionItem, type FaqItem } from "./faqAccordionItem";

export type FaqCategory = {
  label: string;
  items: FaqItem[];
};

type Props = {
  categories: FaqCategory[];
};

export const FaqTabs = ({ categories }: Props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeCategory = categories[activeIndex];

  return (
    <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-12">
      <div className="flex md:flex-col gap-2 overflow-x-auto scrollbar-none md:max-w-55">
        {categories.map((category, index) => (
          <button
            key={category.label}
            type="button"
            onClick={() => setActiveIndex(index)}
            className={cn(
              "shrink-0 rounded-lg px-3.5 py-2.75 text-14 font-normal text-left whitespace-nowrap transition-colors cursor-pointer",
              index === activeIndex
                ? "bg-blue-light text-blue-primary font-bold"
                : "bg-transparent text-text-gray hover:text-black",
            )}
          >
            {category.label}
          </button>
        ))}
      </div>

      <div>
        {activeCategory.items.map((item) => (
          <FaqAccordionItem key={item.question} {...item} />
        ))}
      </div>
    </div>
  );
};
