"use client";

import useEmblaCarousel from "embla-carousel-react";
import { SuccessStoryCard, type SuccessStory } from "./successStoryCard";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback } from "react";

type Props = {
  stories: SuccessStory[];
};

export const SuccessStoryCarousel = ({ stories }: Props) => {
  const [emblaRef, emblaApi ] = useEmblaCarousel({
    align: "start",
    dragFree: true,
    containScroll: "trimSnaps",
  });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex gap-6 pb-5">
        {stories.map((story) => (
          <div
            key={story.name}
            className="flex-[0_0_90%] sm:flex-[0_0_420px] lg:flex-[0_0_49%] min-w-0"
          >
            <SuccessStoryCard {...story} />
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center gap-4 mt-7">
        <button
          type="button"
          onClick={scrollPrev}
          aria-label="Previous testimonial"
          className="w-10 h-10 cursor-pointer rounded-full border border-border-stroke bg-white flex items-center justify-center hover:border-blue-primary hover:text-blue-primary transition-colors"
        >
          <ChevronLeft size={18} />
        </button>
        <button
          type="button"
          onClick={scrollNext}
          aria-label="Next testimonial"
          className="w-10 h-10 cursor-pointer rounded-full border border-border-stroke bg-white flex items-center justify-center hover:border-blue-primary hover:text-blue-primary transition-colors"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
};
