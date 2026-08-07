import Image from "next/image";
import Container from "@/components/layout/container";
import { SectionHeader } from "@/components/ui/section-header";
import { Reveal } from "@/components/ui/motion/reveal";
import type { DomainData } from "@/lib/data/domains";

type Props = {
  domain: DomainData;
};

export const DomainProjectsSection = ({ domain }: Props) => {
  return (
    <section className="py-15 md:py-22 bg-[#F1F5F9]">
      <Container>
        <SectionHeader
          eyebrow="Sample Projects"
          heading="Projects you'll actually ship."
          description="A preview of the kind of real, portfolio-ready work you'll complete in this track."
        />

        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-12">
          {domain.projects.map((project, index) => (
            <Reveal key={project.name} direction="up" delay={(index % 5) * 0.06} hover={{ scale: 1.03, y: -6 }}>
              <div className="border border-border-stroke rounded-xl overflow-hidden h-full">
                <Image
                  src={project.icon}
                  width={400}
                  height={400}
                  alt={`${project.name} — ${domain.label} sample project`}
                  className="w-full h-79 md:h-42.5 object-cover object-top-left"
                />

                <div className="bg-white p-3.5 h-full">
                  <span className="text-14 font-medium">{project.name}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
};
