import Container from "@/components/layout/container";
import { SectionHeader } from "@/components/ui/section-header";
import { Reveal } from "@/components/ui/motion/reveal";
import AvatarPlaceholder from "@/assets/images/placeholders/avatar-placeholder.svg";
import {
  PlacementSuccessStoryCard,
  type PlacementSuccessStory,
} from "./placementSuccessStoryCard";

const PLACEMENT_SUCCESS_STORIES: PlacementSuccessStory[] = [
  {
    avatar: AvatarPlaceholder,
    name: "Ananya Sharma",
    designation: "Data Analyst",
    testimonial:
      "The mentor feedback loop was what made the difference — I wasn't just submitting assignments, I was building things a hiring manager would actually want to see.",
    role: "Data Analyst",
    hikePercentage: "40% Hike",
  },
  {
    avatar: AvatarPlaceholder,
    name: "Rohan Kapoor",
    designation: "AI/ML Engineer",
    testimonial:
      "I came in with zero ML experience. Within four months I had shipped a real recommendation engine and could actually explain every decision behind it.",
    role: "AI/ML Engineer",
    hikePercentage: "55% Hike",
  },
  {
    avatar: AvatarPlaceholder,
    name: "Meera Iyer",
    designation: "UI/UX Designer",
    testimonial:
      "The portfolio reviews were brutally honest in the best way. My final case studies were strong enough to get callbacks from every company I applied to.",
    role: "UI/UX Designer",
    hikePercentage: "38% Hike",
  },
  {
    avatar: AvatarPlaceholder,
    name: "Vikram Rao",
    designation: "Full Stack Developer",
    testimonial:
      "Working on a real client-style project changed how I talk about my skills in interviews. I stopped describing tutorials and started describing decisions.",
    role: "Full Stack Developer",
    hikePercentage: "35% Hike",
  },
  {
    avatar: AvatarPlaceholder,
    name: "Sneha Reddy",
    designation: "Business Analyst",
    testimonial:
      "My mentor pushed me to defend every recommendation with data. That habit alone is what got me through three rounds of case interviews.",
    role: "Business Analyst",
    hikePercentage: "42% Hike",
  },
  {
    avatar: AvatarPlaceholder,
    name: "Aditya Nair",
    designation: "Backend Developer",
    testimonial:
      "I finally understood how production systems actually work — not just how to make an API return 200. That gap was what interviews kept exposing before.",
    role: "Backend Developer",
    hikePercentage: "50% Hike",
  },
];

export const PlacementSuccessStoriesSection = () => {
  return (
    <section id="success-stories" className="bg-bg-light py-19 md:py-120">
      <Container>
        <SectionHeader
          eyebrow="Success Stories"
          heading="Real people. Real placements."
          description="Hear directly from students who turned a structured program into an actual job offer."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {PLACEMENT_SUCCESS_STORIES.map((story, index) => (
            <Reveal key={story.name} direction="up" delay={(index % 3) * 0.1} hover className="h-full [&>*]:h-full">
              <PlacementSuccessStoryCard {...story} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
};
