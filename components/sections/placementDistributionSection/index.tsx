import Container from "@/components/layout/container";
import { SectionHeader } from "@/components/ui/section-header";
import ByIndustry from "@/assets/images/placements/by-industry.svg";
import ByRole from "@/assets/images/placements/by-role.svg";
import { DistributionCard } from "./distributionCard";

const CARDS = [
  { heading: "By Industry", image: ByIndustry },
  { heading: "By Role", image: ByRole },
];

export const PlacementDistributionSection = () => {
  return (
    <section className="py-15 md:py-22 bg-bg-light">
      <Container>
        <SectionHeader
          // eyebrow="Placement Distribution"
          heading="Industry & role wise placement distribution"
          description="A breakdown of placements across domains and regions, so you know exactly where the outcomes are coming from."
          className="max-w-170 mx-auto items-center text-center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {CARDS.map((card) => (
            <DistributionCard key={card.heading} {...card} />
          ))}
        </div>
      </Container>
    </section>
  );
};
