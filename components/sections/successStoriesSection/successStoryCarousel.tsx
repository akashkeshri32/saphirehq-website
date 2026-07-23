"use client";

import useEmblaCarousel from "embla-carousel-react";
import { SuccessStoryCard, type SuccessStory } from "./successStoryCard";

type Props = {
  stories: SuccessStory[];
};

export const SuccessStoryCarousel = ({ stories }: Props) => {
  const [emblaRef] = useEmblaCarousel({
    align: "start",
    dragFree: true,
    containScroll: "trimSnaps",
  });

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex gap-6">
        {stories.map((story) => (
          <div
            key={story.name}
            className="flex-[0_0_85%] sm:flex-[0_0_420px] lg:flex-[0_0_645px] min-w-0"
          >
            <SuccessStoryCard {...story} />
          </div>
        ))}
      </div>
    </div>
  );
};
