import { TwoColumnIntroSection } from "@/components/sections/twoColumnIntroSection";
import WhyWeExistImage from "@/assets/images/about/why-we-exist.png";

export const WhyWeExistSection = () => {
  return (
    <TwoColumnIntroSection
      eyebrow="Why We Exist"
      className="pt-10 md:pt-17"
      heading="Sapphire IQ was created to solve a simple, persistent problem."
      description={`
        <p>
          Most graduates leave education with theoretical knowledge but little proof they can
          apply it. Employers, in turn, spend months training new hires on skills a structured,
          project-based program could have taught in weeks.
        </p>
        
        <p>
          Sapphire IQ closes that gap directly — pairing every learner with live mentors, real
          industry projects, and a placement process built around outcomes, not attendance.
        </p>



      
      `}
      image={WhyWeExistImage}
      imageAlt="Sapphire IQ learner working through a mentor-reviewed project"
      imagePosition="left"
      headingSize="h5"
    />
  );
};
