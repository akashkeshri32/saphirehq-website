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
    <section className="py-15 md:py-22 bg-[#F1F5F9]">
      <Container>
        <SectionHeader
          eyebrow="Sample Projects"
          heading="Projects you'll actually ship."
          description="A preview of the kind of real, portfolio-ready work you'll complete in this track."
        />

        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-12">
          {Array.from({ length : 10 }).map((project, index) => (
            <div
              key={index}
              className="border border-border-stroke rounded-xl overflow-hidden"
            >
              <Image src={ImagePlaceholder} alt={"project"} className="w-full h-79 md:h-42.5 object-cover" />

              <div className="bg-white p-3.5">
                <span className="text-14 font-medium">{domain.projects[0]}</span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
