import Container from "@/components/layout/container";
import { SectionHeader } from "@/components/ui/section-header";
import { ButtonLink } from "@/components/ui/button/button-link";
import { FaqTabs, type FaqCategory } from "./faqTabs";

const FAQ_CATEGORIES: FaqCategory[] = [
  {
    label: "General",
    items: [
      {
        question: "Who is this program designed for?",
        answer:
          "Students, career switchers, and working professionals who want hands-on, mentor-guided experience in a specific tech or business domain — not just another course.",
      },
      {
        question: "Do I need prior experience to join?",
        answer:
          "No. Each domain starts from the fundamentals and builds up, with mentors adjusting pace based on your background.",
      },
      {
        question: "How long does the program take?",
        answer:
          "Most tracks run 8–16 weeks depending on the domain, with a mix of live sessions, self-paced modules, and project work.",
      },
    ],
  },
  {
    label: "Our Programs",
    items: [
      {
        question: "What domains can I choose from?",
        answer:
          "Data Analytics, Data Science, AI/ML, UI/UX, Frontend, Backend, and Full Stack — each with its own curriculum and mentor track.",
      },
      {
        question: "Are the sessions live or pre-recorded?",
        answer:
          "Core sessions are live and mentor-led, supplemented with recorded material for revision and self-paced learning.",
      },
      {
        question: "Can I switch domains after starting?",
        answer:
          "Yes, within the first two weeks. After that, we recommend finishing your current track before starting another.",
      },
    ],
  },
  {
    label: "Projects",
    items: [
      {
        question: "Are the projects real or simulated?",
        answer:
          "Every project is modeled on a real business brief with actual constraints, datasets, and stakeholder-style reviews — not a simplified classroom version.",
      },
      {
        question: "Do I own the projects I build?",
        answer:
          "Yes. All project work is yours to keep, showcase, and add to your portfolio or GitHub.",
      },
      {
        question: "How many projects will I complete?",
        answer:
          "Most tracks include 3–5 milestone projects, reviewed and scored by an assigned mentor.",
      },
    ],
  },
  {
    label: "Certificates",
    items: [
      {
        question: "Is the certificate verifiable?",
        answer:
          "Yes, every certificate includes a unique ID that recruiters can verify against our records.",
      },
      {
        question: "What do I need to complete to get certified?",
        answer:
          "All milestone projects and the final assessment for your domain, reviewed and approved by your mentor.",
      },
      {
        question: "Can I add the certificate to LinkedIn?",
        answer:
          "Yes, certificates are formatted for direct upload to LinkedIn and other professional profiles.",
      },
    ],
  },
  {
    label: "Placements",
    items: [
      {
        question: "Is placement guaranteed?",
        answer:
          "We guarantee placement assistance — interview opportunities, resume support, and introductions — not a guaranteed offer, which depends on your performance.",
      },
      {
        question: "How many hiring partners do you work with?",
        answer:
          "Over 250 companies across product, services, and consulting actively hire from our graduate pool.",
      },
      {
        question: "What kind of placement support is included?",
        answer:
          "Resume and LinkedIn optimization, mock interviews, and direct introductions to our hiring partner network.",
      },
    ],
  },
  {
    label: "Support",
    items: [
      {
        question: "What if I fall behind schedule?",
        answer:
          "Your mentor works with you on a catch-up plan, and recorded sessions are available for anything you miss.",
      },
      {
        question: "How can I reach my mentor outside sessions?",
        answer:
          "Through your dashboard messaging and a dedicated cohort channel for quick questions.",
      },
      {
        question: "Who do I contact for account or billing issues?",
        answer:
          "Our support team is reachable directly through the button below, or via the help center in your dashboard.",
      },
    ],
  },
];

export const FaqSection = () => {
  return (
    <section id="faqs" className="py-120">
      <Container>
        <SectionHeader
          eyebrow="FAQs"
          heading="Everything you need to know in one place."
          description="Have questions about our program, projects, mentorship, or placements? We've got you covered."
        />

        <div className="mt-72">
          <FaqTabs categories={FAQ_CATEGORIES} />
        </div>

        <div className="border-t border-border-stroke mt-9 pt-7 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-17 font-semibold text-black">
            Your journey. Our guidance. Your success.
          </p>
          <ButtonLink href="#support" variant="outline">
            Connect to Support Team
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
};
