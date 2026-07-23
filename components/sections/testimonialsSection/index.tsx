import Container from "@/components/layout/container";
import { SectionHeader } from "@/components/ui/section-header";
import AvatarPlaceholder from "@/assets/images/placeholders/avatar-placeholder.svg";
import { TestimonialCarousel } from "./testimonialCarousel";
import type { Testimonial } from "./testimonialCard";

const TESTIMONIALS: Testimonial[] = [
  {
    rating: 5,
    testimonial:
      "The structure kept me accountable in a way self-study never could. Every week had a clear deliverable.",
    avatar: AvatarPlaceholder,
    name: "Ishaan Malhotra",
    designation: "Data Analyst",
  },
  {
    rating: 5,
    testimonial:
      "My mentor caught issues in my project I would have never noticed on my own. That feedback was worth the entire program.",
    avatar: AvatarPlaceholder,
    name: "Divya Krishnan",
    designation: "UI/UX Designer",
  },
  {
    rating: 4,
    testimonial:
      "Live sessions made a huge difference compared to the recorded courses I'd tried before. I could actually ask questions.",
    avatar: AvatarPlaceholder,
    name: "Farhan Ali",
    designation: "Backend Developer",
  },
  {
    rating: 5,
    testimonial:
      "I switched careers from finance to tech in under a year. The mentor support made the transition feel manageable.",
    avatar: AvatarPlaceholder,
    name: "Neha Joshi",
    designation: "Business Analyst",
  },
  {
    rating: 5,
    testimonial:
      "The mock interviews alone were worth signing up for. I walked into my real interviews knowing exactly what to expect.",
    avatar: AvatarPlaceholder,
    name: "Aman Gupta",
    designation: "Full Stack Developer",
  },
];

export const TestimonialsSection = () => {
  return (
    <section className="bg-bg-light py-120">
      <Container>
        <SectionHeader
          eyebrow="Testimonials"
          heading="What our students say."
          description="Honest feedback from people who went through the program, in their own words."
        />

        <div className="mt-12">
          <TestimonialCarousel testimonials={TESTIMONIALS} />
        </div>
      </Container>
    </section>
  );
};
