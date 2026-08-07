import Image from "next/image";
import Container from "@/components/layout/container";
import { SectionHeader } from "@/components/ui/section-header";
import { Reveal } from "@/components/ui/motion/reveal";
import type { DomainData } from "@/lib/data/domains";

type Props = {
  domain: DomainData;
};

export const DomainToolsSection = ({ domain }: Props) => {
  return (
    <section className="py-15 md:py-22 bg-bg-light">
      <Container>
        <SectionHeader
          eyebrow="Tools & Technologies"
          heading="What you'll actually work with."
          description={`The exact tools and technologies used by working ${domain.label} professionals.`}
        />

        <div className="flex flex-wrap items-center gap-4 mt-7">
          {domain.tools.map((tool, index) => (
            <Reveal key={tool.name} direction="up" delay={(index % 10) * 0.04} hover={{ scale: 1.05, y: -4 }}>
              <div className="flex items-center gap-2.5 bg-white border border-border-stroke rounded-lg px-4 py-3">
                <Image src={tool.icon} alt="" width={24} height={24} />
                <span className="text-13 font-medium">{tool.name}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
};
