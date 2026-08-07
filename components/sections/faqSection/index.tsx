import Container from "@/components/layout/container";
import { SectionHeader } from "@/components/ui/section-header";
import { ButtonLink } from "@/components/ui/button/button-link";
import { FaqTabs } from "./faqTabs";
import { Reveal } from "@/components/ui/motion/reveal";
import { FAQ_CATEGORIES } from "./data";



export const FaqSection = () => {
  return (
    <section id="faqs" className="py-19 md:py-120">
      <Container>
        <SectionHeader
          eyebrow="FAQs"
          heading="Everything you need to know in one place."
          description="Have questions about our program, projects, mentorship, or placements? We've got you covered."
          descriptionDelay={0.3}
        />

        <Reveal>
          <div className="mt-72">
            <FaqTabs categories={FAQ_CATEGORIES} />
          </div>
        </Reveal>

        <div className="border-t border-border-stroke mt-9 pt-7 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-17 font-semibold text-black">
            Your journey. Our guidance. Your success.
          </p>
          <ButtonLink href="/enroll-now" variant="outline">
            Connect to Support Team
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
};
