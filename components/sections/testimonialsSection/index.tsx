import Container from "@/components/layout/container";
import { SectionHeader } from "@/components/ui/section-header";
import AvatarPlaceholder from "@/assets/images/placeholders/avatar-placeholder.svg";
import { TestimonialCarousel } from "./testimonialCarousel";
import type { Testimonial } from "./testimonialCard";
import { Reveal } from "@/components/ui/motion/reveal";
import AmanKumar from "@/assets/images/testimonials/aman-kumar.png";
import SushanshuRaj from "@/assets/images/testimonials/Sushanshu Raj.png"
import YashVaibhav from "@/assets/images/testimonials/Yash Vaibhav.png"
import AnuragHarsh  from "@/assets/images/testimonials/Anurag Harsh.png"
import Rohit  from "@/assets/images/testimonials/Rohit.png"
import VishalChandra  from "@/assets/images/testimonials/Vishal Chandra.png"






const TESTIMONIALS: Testimonial[] = [
  {
    rating: 5,
    testimonial:
      "One thing I really liked about Sapphire IQ was the practical approach. Every project taught me something new, and the mock interviews helped me understand how to confidently present my skills. The resume and LinkedIn guidance also played an important role in my job search. Thanks to the overall support, I successfully got placed. ",
    avatar: AmanKumar,
    name: "Aman Kumar",
    designation: "Data Analyst",
    linkedinUrl : "https://www.linkedin.com/in/aman-bhardwaj-3576a0260"
  },
  {
    rating: 5,
    testimonial:
      "Before joining Sapphire IQ, I wasn't confident enough to apply for jobs. The mentors helped me build real-world projects, improve my resume, optimize my LinkedIn profile, and prepare through mock interviews. The confidence I gained during the program helped me crack my interviews, and I eventually secured my placement. I highly recommend Sapphire IQ to anyone serious about building a career. ",
    avatar: SushanshuRaj,
    name: "Sushanshu Raj",
    designation: "UI/UX Designer",
    linkedinUrl : "https://www.linkedin.com/in/sudhanshu-raj-b24689201"
  },
  {
    rating: 5,
    testimonial:
    "The placement support went beyond just sharing opportunities. The mentors helped me improve my ATS-friendly resume, optimize my LinkedIn profile, and guided me on presenting my projects professionally. That made a huge difference in my confidence." ,
    avatar: YashVaibhav,
    name: "Yash Vaibhav",
    designation: "Backend Developer",
    linkedinUrl : "https://www.linkedin.com/in/yash-vaibhav-5894351a8"
  },
  {
    rating: 5,
    testimonial:
      "I joined because I wanted to work on real projects instead of just watching tutorials. The project structure was well planned, and the mentors explained concepts with practical examples. Building portfolio-worthy projects gave me much more confidence in my skills. ",
    avatar: AnuragHarsh,
    name: "Anurag Harsh",
    designation: "Business Analyst",
    linkedinUrl : "https://www.linkedin.com/in/anurag-harsh-3a2b90246/ "
  },
  {
    rating: 4,
    testimonial:
      "I joined Sapphire IQ in my third year, and it turned out to be one of the best decisions for my career. The projects felt like real industry work, and the mentors always pushed me to improve. Compared to many students in my batch, I had much better exposure to practical skills, portfolio building, and interview preparation. I feel far more confident about my career now.",
    avatar: AvatarPlaceholder,
    name: "Soumya Kirti",
    designation: "Full Stack Developer",
  },

  {
    rating: 4,
    testimonial:
      "I had a career gap and wasn't sure where to start again. The structured roadmap at Sapphire IQ made the process much easier. I worked on real-world projects, received valuable mentor feedback, and built a portfolio that I could confidently showcase during interviews. It gave me the exposure I was looking for.",
    avatar: Rohit,
    name: "Rohit",
    designation: "Full Stack Developer",
  },

  {
    rating: 4,
    testimonial:
      "The best part was that every project had a real-world use case. Instead of copying code from the internet, I learned how to think through problems and build solutions from scratch. That experience was incredibly valuable. ",
    avatar: VishalChandra,
    name: "Vishal Chandra",
    designation: "Business Analyst",
  },

];

export const TestimonialsSection = () => {
  return (
    <section className="bg-bg-light py-19 md:py-120">
      <Container>
        <SectionHeader
          eyebrow="Testimonials"
          heading="What our students say."
          description="Honest feedback from people who went through the program, in their own words."
        />

        <Reveal direction="up" distance={40} delay={0.25} duration={0.5}>
          <div className="mt-12">
            <TestimonialCarousel testimonials={TESTIMONIALS} />
          </div>
        </Reveal>
      </Container>
    </section>
  );
};
