import { TwoColumnIntroSection } from "@/components/sections/twoColumnIntroSection";
import WhyWeExistImage from "@/assets/images/about/why-we-exist.png";

export const WhyWeExistSection = () => {
  return (
    <TwoColumnIntroSection
      eyebrow="Why We Exist"
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
      imagePosition="left"
      headingSize="h5"
    />
  );
};
