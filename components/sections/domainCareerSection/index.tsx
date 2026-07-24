import Image from "next/image";
import Container from "@/components/layout/container";
import { SectionHeader } from "@/components/ui/section-header";
import { PARTNER_LOGOS } from "@/lib/data/partner-logos";
import type { DomainData } from "@/lib/data/domains";

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

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 mt-12">
          {domain.careerStats.map((stat) => (
            <div
              key={stat.text}
              className="flex flex-col gap-0.5 bg-white"
            >
              <span className="text-[36px] font-heading font-bold">{stat.stat}</span>
              <span className="text-12 text-text-gray">{stat.text}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center items-center gap-10 mt-12">
          {PARTNER_LOGOS.map((logo) => (
            <Image
              key={logo.name}
              src={logo.src}
              alt={logo.name}
              className="h-6 w-auto object-contain grayscale opacity-70"
            />
          ))}
        </div>
      </Container>
    </section>
  );
};
