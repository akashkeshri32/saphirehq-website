import { TwoColumnIntroSection } from "@/components/sections/twoColumnIntroSection";
import WhyWeExistImage from "@/assets/images/about/why-we-exist.png";

export const WhyWeExistSection = () => {
  return (
    <TwoColumnIntroSection
      eyebrow="Why We Exist"
      className="pt-10 md:pt-17"
      heading="Sapphire IQ was created to solve this challenge."
      description={`
        <p>
          We are a project-based internship platform that helps students transform theoretical knowledge into practical skills through industry-focused projects, expert mentorship, and portfolio development.
        </p>

        <p>
          Instead of simply learning concepts, our students work on real-world projects, build professional portfolios, receive mentor guidance, and develop the confidence needed to succeed in today's competitive job market.
        </p>
      `}
      image={WhyWeExistImage}
      imageAlt="Sapphire IQ learner working through a mentor-reviewed project"
      imagePosition="left"
      headingSize="h5"
      reverseOrderOnMobile={true}
    />
  );
};
