import { TwoColumnIntroSection } from "@/components/sections/twoColumnIntroSection";
import AboutHero from "@/assets/images/about/hero.png";

export const AboutHeroSection = () => {
  return (
    <TwoColumnIntroSection
      breadcrumbLabel="About Us"
      eyebrow="About Sapphire IQ"
      heading="Bridging the Gap Between Education and Employment"
      description="<p> We transform theoretical knowledge into practical skills through
real-world projects, mentorship, and portfolio development —
preparing students for successful careers, not just certificates.</p>"
      image={AboutHero}
      imagePosition="right"
      headingSize="h1"
    />
  );
};
