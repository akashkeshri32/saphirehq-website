import Image from "next/image";
import Container from "@/components/layout/container";
import { SectionHeader } from "@/components/ui/section-header";
import ImagePlaceholder from "@/assets/images/placeholders/image-placeholder.svg";
import type { DomainData } from "@/lib/data/domains";

type Props = {
  domain: DomainData;
};

export const DomainProjectsSection = ({ domain }: Props) => {
  return (
    <section className="py-15 md:py-22">
      <Container>
        <SectionHeader
          eyebrow="Sample Projects"
          heading="Projects you'll actually ship."
          description="A preview of the kind of real, portfolio-ready work you'll complete in this track."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {domain.projects.map((project) => (
            <div
              key={project}
              className="border border-border-stroke rounded-xl overflow-hidden"
            >
              <Image src={ImagePlaceholder} alt={project} className="w-full h-auto" />

              <div className="bg-white p-3.5">
                <span className="text-14 font-medium">{project}</span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
