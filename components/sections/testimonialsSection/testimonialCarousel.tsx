"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils/tailwind";
import { TestimonialCard, type Testimonial } from "./testimonialCard";

type Props = {
  testimonials: Testimonial[];
};

export const TestimonialCarousel = ({ testimonials }: Props) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start" });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    const onInit = () => setScrollSnaps(emblaApi.scrollSnapList());
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());

    onInit();
    onSelect();

    emblaApi.on("reInit", onInit);
    emblaApi.on("select", onSelect);

    return () => {
      emblaApi.off("reInit", onInit);
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <div>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="flex-[0_0_85%] sm:flex-[0_0_320px] lg:flex-[0_0_389px] min-w-0"
            >
              <TestimonialCard {...testimonial} />
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-center gap-4 mt-8">
        <button
          type="button"
          onClick={scrollPrev}
          aria-label="Previous testimonial"
          className="w-10 h-10 rounded-full border border-border-stroke bg-white flex items-center justify-center hover:border-blue-primary hover:text-blue-primary transition-colors"
        >
          <ChevronLeft size={18} />
        </button>
        <button
          type="button"
          onClick={scrollNext}
          aria-label="Next testimonial"
          className="w-10 h-10 rounded-full border border-border-stroke bg-white flex items-center justify-center hover:border-blue-primary hover:text-blue-primary transition-colors"
        >
          <ChevronRight size={18} />
        </button>
      </div>

      <div className="flex items-center justify-center gap-2 mt-4">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => emblaApi?.scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={cn(
              "w-2 h-2 rounded-full transition-colors",
              index === selectedIndex ? "bg-blue-primary" : "bg-border-stroke",
            )}
          />
        ))}
      </div>
    </div>
  );
};
