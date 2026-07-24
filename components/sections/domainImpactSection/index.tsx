import Image from "next/image";
import Container from "@/components/layout/container";
import { SectionHeader } from "@/components/ui/section-header";
import GreenTick from "@/assets/icons/green-tick.svg";
import type { DomainData } from "@/lib/data/domains";

type Props = {
  domain: DomainData;
};

export const DomainImpactSection = ({ domain }: Props) => {
  return (
    <section className="py-15 md:py-22 bg-bg-light">
      <Container>
        <SectionHeader
          eyebrow="Your Impact"
          heading="What you'll walk away with."
          description="Tangible outcomes you can point to in every interview."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12">
          {domain.impactPoints.map((point) => (
            <div
              key={point}
              className="flex items-center gap-3 border border-border-stroke rounded-xl p-5.5 bg-white"
            >
              <Image
                src={GreenTick}
                alt=""
                width={20}
                height={20}
                className="shrink-0"
              />
              <span className="text-16 font-semibold">{point}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
