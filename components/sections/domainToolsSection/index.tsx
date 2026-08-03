import Image from "next/image";
import Container from "@/components/layout/container";
import { SectionHeader } from "@/components/ui/section-header";
import IconPlaceholder from "@/assets/images/placeholders/icon-placeholder-dark.svg";
import GreenTick from "@/assets/icons/green-tick.svg";
import type { DomainData } from "@/lib/data/domains";

type Props = {
  domain: DomainData;
};

export const DomainToolsSection = ({ domain }: Props) => {
  const skills = "skills" in domain ? domain.skills : undefined;

  return (
    <section className="py-15 md:py-22 bg-bg-light">
      <Container>
        <SectionHeader
          eyebrow="Tools & Technologies"
          heading="What you'll actually work with."
          description={`The exact tools and technologies used by working ${domain.label} professionals.`}
        />

        <div className="flex flex-wrap items-center gap-4 mt-12">
          {domain.tools.map((tool) => (
            <div
              key={tool.name}
              className="flex items-center gap-2.5 bg-white border border-border-stroke rounded-lg px-4 py-3"
            >
              <Image src={tool.icon ?? IconPlaceholder} alt="" width={20} height={20} />
              <span className="text-14 font-medium">{tool.name}</span>
            </div>
          ))}
        </div>

        {skills && skills.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-8">
            {skills.map((skill) => (
              <div key={skill} className="flex items-center gap-3">
                <Image src={GreenTick} alt="" width={20} height={20} className="shrink-0" />
                <span className="text-16 text-text-gray-secondary">{skill}</span>
              </div>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
};
