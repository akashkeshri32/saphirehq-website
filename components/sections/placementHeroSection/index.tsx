import Container from "@/components/layout/container";
import { SectionHeader } from "@/components/ui/section-header";
import BarGraphIcon from "@/assets/icons/placement-bar-graph.svg";
import PlacementOverviewIcon from "@/assets/icons/placement-overview.svg";
import ProjectsDeliveryImage from "@/assets/images/placements/projects-delivery.svg";
import PlacementOverviewOne from "@/assets/images/placements/placement-overview-one.svg";
import PlacementOverviewTwo from "@/assets/images/placements/placement-overview-two.svg";
import { PlacementHeroCard } from "./placementHeroCard";


const CARDS = [
  {
    icon: PlacementOverviewIcon,
    heading: "Batch-Wise Completion Trend",
    images: [ProjectsDeliveryImage],
  },
  {
    icon: BarGraphIcon,
    heading: "Domain-Wise Placements",
    images: [PlacementOverviewOne, PlacementOverviewTwo],
  },
];

export const PlacementHeroSection = () => {
  return (
    <section className="pt-41 pb-[64px]">
      <Container>
        <SectionHeader
          eyebrow="Placement Statistics"
          heading="Numbers that speak for themselves."
          description="Real outcomes from real learners — tracked, verified, and updated every cohort."
          className="mx-auto items-center text-center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {CARDS.map((card) => (
            <PlacementHeroCard key={card.heading} {...card} />
          ))}
        </div>
      </Container>
    </section>
  );
};
