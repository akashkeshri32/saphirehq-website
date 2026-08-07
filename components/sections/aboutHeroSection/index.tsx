import { TwoColumnIntroSection } from "@/components/sections/twoColumnIntroSection";
import AboutHero from "@/assets/images/about/hero.png";

export const AboutHeroSection = () => {
  return (
    <TwoColumnIntroSection
      breadcrumbLabel="About Us"
      eyebrow="About Sapphire IQ"
      heading="Bridging the Gap Between Education and Employment"
      description="<p> At Sapphire IQ, we believe that talent is everywhere, but opportunities to gain practical experience are not. Every year, thousands of students complete degrees, certifications, and online courses. Yet many struggle to secure internships, placements, and career opportunities because they lack one crucial element — real-world project experience.</p>"
      image={AboutHero}
      imageAlt="Sapphire IQ mentors and learners collaborating on a real project"
      imagePosition="right"
      headingSize="h1"
    />
  );
};
