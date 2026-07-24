import Container from "@/components/layout/container";
import { PlacementStatCard } from "./placementStatCard";

const STAT_DETAILS = [
  { bgColor: "bg-black", textColor: "text-white", title: "250+", text: "Hiring Partners" },
  { bgColor: "bg-blue-primary", textColor: "text-white", title: "1000+", text: "Students Trained" },
  { bgColor: "bg-[#1E3A8A]", textColor: "text-white", title: "99%", text: "Completion Rate" },
  { bgColor: "bg-purple", textColor: "text-white", title: "40%", text: "Avg. CTC Hike" },
  { bgColor: "bg-blue-light", textColor: "text-black", title: "100+", text: "Industry-Relevant Projects Delivered" },
  { bgColor: "bg-[#FFE2B7]", textColor: "text-[#EA580C]", title: "30+", text: "Skilled Mentors Actively Teaching" },
  { bgColor: "bg-[#7B9DBE]", textColor: "text-white", title: "15+", text: "Ongoing Live Batches" },
  { bgColor: "bg-[#969696]", textColor: "text-white", title: "85%", text: "Placed Within 6 Months" },
];

export const PlacementStatsSection = () => {
  return (
    <section className="py-15 md:py-22">
      <Container>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
          {STAT_DETAILS.map((stat) => (
            <PlacementStatCard key={stat.text} {...stat} />
          ))}
        </div>
      </Container>
    </section>
  );
};
