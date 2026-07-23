import Container from "@/components/layout/container";
import { StatsCard } from "./statsCard";

const STATS = [
  {
    number: "250",
    text: "Hiring Companies",
    bgClassName: "bg-[#E9EEFF]",
    textClassName: "text-blue-primary",
  },
  {
    number: "1000",
    text: "Students Trained",
    bgClassName: "bg-[#F1EBFF]",
    textClassName: "text-purple",
  },
  {
    number: "99",
    text: "Completion Rate %",
    bgClassName: "bg-[#E3FBF5]",
    textClassName: "text-green",
  },
  {
    number: "100",
    text: "Industry Projects",
    bgClassName: "bg-[#FFF6DE]",
    textClassName: "text-brown-dark",
  },
  {
    number: "30",
    text: "Skilled Mentors",
    bgClassName: "bg-[#E4F7FF]",
    textClassName: "text-blue-secondary",
  },
  {
    number: "40",
    text: "Avg. CTC Hike %",
    bgClassName: "bg-[#F7E9FF]",
    textClassName: "text-[#9A2DFF]",
  },
];

export const StatsSection = () => {
  return (
    <section className="py-25">
      <Container>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5">
          {STATS.map((stat) => (
            <StatsCard key={stat.text} {...stat} />
          ))}
        </div>
      </Container>
    </section>
  );
};
