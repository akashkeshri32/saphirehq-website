import Container from "@/components/layout/container";
import { SectionHeader } from "@/components/ui/section-header";
import AvatarPlaceholder from "@/assets/images/placeholders/avatar-placeholder.svg";
import { SuccessStoryCarousel } from "./successStoryCarousel";
import type { SuccessStory } from "./successStoryCard";

const SUCCESS_STORIES: SuccessStory[] = [
  {
    avatar: AvatarPlaceholder,
    name: "Ananya Sharma",
    designation: "Data Analyst",
    testimonial:
      "The mentor feedback loop was what made the difference — I wasn't just submitting assignments, I was building things a hiring manager would actually want to see.",
    highlight: "40% Salary Hike",
    company: "TCS",
  },
  {
    avatar: AvatarPlaceholder,
    name: "Rohan Kapoor",
    designation: "AI/ML Engineer",
    testimonial:
      "I came in with zero ML experience. Within four months I had shipped a real recommendation engine and could actually explain every decision behind it.",
    highlight: "Placed in 60 days",
    company: "Infosys",
  },
  {
    avatar: AvatarPlaceholder,
    name: "Meera Iyer",
    designation: "UI/UX Designer",
    testimonial:
      "The portfolio reviews were brutally honest in the best way. My final case studies were strong enough to get callbacks from every company I applied to.",
    highlight: "3 Offers Received",
    company: "Adobe",
  },
  {
    avatar: AvatarPlaceholder,
    name: "Vikram Rao",
    designation: "Full Stack Developer",
    testimonial:
      "Working on a real client-style project changed how I talk about my skills in interviews. I stopped describing tutorials and started describing decisions.",
    highlight: "35% Salary Hike",
    company: "Wipro",
  },
  {
    avatar: AvatarPlaceholder,
    name: "Sneha Reddy",
    designation: "Business Analyst",
    testimonial:
      "My mentor pushed me to defend every recommendation with data. That habit alone is what got me through three rounds of case interviews.",
    highlight: "Placed in 45 days",
    company: "Deloitte",
  },
  {
    avatar: AvatarPlaceholder,
    name: "Aditya Nair",
    designation: "Backend Developer",
    testimonial:
      "I finally understood how production systems actually work — not just how to make an API return 200. That gap was what interviews kept exposing before.",
    highlight: "50% Salary Hike",
    company: "Cognizant",
  },
];

export const SuccessStoriesSection = () => {
  return (
    <section id="success-stories" className="bg-bg-light py-120">
      <Container>
        <SectionHeader
          eyebrow="Success Stories"
          heading="Real people. Real placements."
          description="Hear directly from students who turned a structured program into an actual job offer."
        />

        <div className="mt-12">
          <SuccessStoryCarousel stories={SUCCESS_STORIES} />
        </div>
      </Container>
    </section>
  );
};
