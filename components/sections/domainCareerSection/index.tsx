import Image from "next/image";
import Container from "@/components/layout/container";
import { SectionHeader } from "@/components/ui/section-header";
import { PARTNER_LOGOS } from "@/lib/data/partner-logos";
import type { DomainData } from "@/lib/data/domains";
import { Reveal } from "@/components/ui/motion/reveal";

type Props = {
  domain: DomainData;
};

export const DomainCareerSection = ({ domain }: Props) => {
  return (
    <section className="py-15 md:py-22">
      <Container>
        <SectionHeader
          eyebrow="Career Opportunities"
          heading="Access to leading organizations."
          // description="Outcomes tracked from real graduates of this specific domain."
        />

        <div className="grid grid-cols-3 md:grid-cols-5 gap-5 mt-12">
          {domain.careerStats.map((stat) => (
            <Reveal direction="down" key={stat.text}>
              <div

                className="flex flex-col gap-0.5 bg-white"
              >
                <span className="text-[36px] font-heading font-bold">{stat.stat}</span>
                <span className="text-12 text-text-gray">{stat.text}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
};
