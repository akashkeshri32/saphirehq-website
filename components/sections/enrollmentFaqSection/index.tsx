import Container from "@/components/layout/container";
import { SectionHeader } from "@/components/ui/section-header";
import { FaqAccordionItem, type FaqItem } from "@/components/sections/faqSection/faqAccordionItem";

const ENROLLMENT_FAQS: FaqItem[] = [
  {
    question: "How long does the application review take?",
    answer:
      "Our team reviews every application within 24 hours and reaches out directly to schedule your mentor call.",
  },
  {
    question: "Is there an application fee?",
    answer:
      "No, submitting your application is completely free. Program fees are only discussed once your domain and cohort are confirmed.",
  },
  {
    question: "Can I change my domain after applying?",
    answer:
      "Yes. If you're unsure, your mentor call is the right time to finalize the domain that best fits your goals.",
  },
  {
    question: "When does the next cohort start?",
    answer:
      "New cohorts start every month. Once your application is reviewed, we'll confirm the next available start date for your domain.",
  },
  {
    question: "What if I need to cancel after enrolling?",
    answer:
      "You can review our refund and cancellation terms on the Refund & Cancellation Policy page, or ask your mentor directly during onboarding.",
  },
];

export const EnrollmentFaqSection = () => {
  return (
    <section className="bg-[#F1F5F9] py-22">
      <Container>
        <SectionHeader
          eyebrow="FAQs"
          heading="Common questions before youapply."
          description="Quick answers to the questions we get most from applicants."
        />

        <div className="mt-12 max-w-190">
          {ENROLLMENT_FAQS.map((item) => (
            <FaqAccordionItem key={item.question} {...item} />
          ))}
        </div>
      </Container>
    </section>
  );
};
