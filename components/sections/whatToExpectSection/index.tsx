import Image from "next/image";
import Container from "@/components/layout/container";
import { SectionHeader } from "@/components/ui/section-header";
import GreenTick from "@/assets/icons/green-tick.svg";

const POINTS = [
  "A live mentor, not a pre-recorded course",
  "Real projects that become your portfolio",
  "A clear, structured path — never guesswork.",
  "Placement support that continues past enrollment",
];

export const WhatToExpectSection = () => {
  return (
    <section className="py-15 md:py-22">
      <Container>
        <SectionHeader
          eyebrow="Our Promise"
          heading="What you can expect from us."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-9 gap-y-4 mt-12 max-w-200">
          {POINTS.map((point) => (
            <div key={point} className="flex items-start gap-3">
              <Image
                src={GreenTick}
                alt=""
                width={20}
                height={20}
                className="shrink-0"
              />
              <span className="text-15 text-text-gray-secondary">{point}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
