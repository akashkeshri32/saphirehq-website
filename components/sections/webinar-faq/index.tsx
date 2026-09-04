import Container from "@/components/layout/container";
import { SectionHeader } from "@/components/ui/section-header";
import { FaqAccordionItem, type FaqItem } from "@/components/sections/faqSection/faqAccordionItem";

export const ENROLLMENT_FAQS: FaqItem[] = [
  {
    question: "Does Sapphire IQ provide placement support?",
    answer:
      "Yes. We provide placement guidance, interview preparation, resume support and career assistance to help students become job-ready.",
  },
  {
    question: "What placement guidance does Sapphire IQ offer?",
    answer:
      "Students receive support with portfolio building, LinkedIn optimization, mock interviews and preparation for relevant job opportunities.",
  },
  {
    question: "What salary package can students expect?",
    answer:
      "Our placement-focused programs target opportunities with an average package of 6–8 LPA, depending on skills, performance and the hiring organization.",
  },
  {
    question: "Is there a stipend during the internship?",
    answer:
      "Yes. Eligible interns can receive a stipend of up to 15,000, based on the program and applicable performance criteria.",
  },
  {
    question: "What is Sapphire IQ?",
    answer:
      "Sapphire IQ is a career-focused learning and internship platform helping students build practical skills and professional experience.",
  },
  {
    question: "Who can join Sapphire IQ?",
    answer:
      "College students, freshers, recent graduates and candidates with career gaps can apply. Beginners are welcome.",
  },
  {
    question: "Do I need prior technical knowledge?",
    answer:
      "No. Prior knowledge is not mandatory. Our mentors provide guidance throughout the learning and project journey.",
  },
  {
    question: "What internship domains are available?",
    answer:
      "Data Analytics, Business Analytics, Data Science, AI & Machine Learning, Front-End, Back-End, Full Stack Development and UI/UX Design.",
  },
  {
    question: "Will I work on practical projects?",
    answer:
      "Yes. Students work on practical, industry-relevant projects to build hands-on experience and a strong portfolio.",
  },
  {
    question: "What will the webinar cover?",
    answer:
      "The webinar will explain our internships, domains, projects, mentor support, stipend opportunities and career and placement guidance.",
  },
];

export const WebinarFAQ = () => {
  return (
    <section className="bg-[#F1F5F9] py-19 md:py-22">
      <Container>
        <SectionHeader
          eyebrow="FAQs"
          heading="Common questions before you apply."
          description="Quick answers to the questions we get most from applicants."
          descriptionDelay={0.4}
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
