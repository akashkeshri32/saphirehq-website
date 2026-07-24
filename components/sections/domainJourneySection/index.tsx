import Image from "next/image";
import Container from "@/components/layout/container";
import { SectionHeader } from "@/components/ui/section-header";
import GrayArrow from "@/assets/icons/gray-arrow.svg";
import UserIcon from "@/assets/icons/journey/user-blue.svg";
import LearnIcon from "@/assets/icons/journey/learn.svg";
import ConceptIcon from "@/assets/icons/journey/concepts.svg";
import GraphIcon from "@/assets/icons/journey/graph.svg";
import TickIcon from "@/assets/icons/journey/tick.svg";
import CertificateIcon from "@/assets/icons/journey/certificate.svg";
import { cn } from "@/lib/utils/tailwind";



const STEPS = [
  { icon: UserIcon, text: "Live Mentor" },
  { icon: LearnIcon, text: "Learn" },
  { icon: ConceptIcon, text: "Build Concepts" },
  { icon: GraphIcon, text: "8-Step Accelerator" },
  { icon: TickIcon, text: "Placement" },
  { icon: CertificateIcon, text: "Certification" },
];

export const DomainJourneySection = () => {
  return (
    <section className="bg-black py-15 md:py-22">
      <Container>
        <SectionHeader
          variant="dark"
          eyebrow="Your Journey"
          eyebrowVariant="secondary"
          heading="From enrollment to offer letter."
          description="The exact path every learner follows in this track."
        />

        <div className="flex flex-col flex-wrap md:flex-row items-center md:gap-4 mt-12 md:overflow-x-auto md:pb-2">
          {STEPS.map((step, index) => (
            <div key={step.text} >
              <div className="flex max-md:flex-col max-md:items-center max-md:gap-5 gap-7 p-3 md:p-5">
                <div className="flex flex-col items-center text-center gap-4">
                  <Image src={step.icon} alt="" width={32} height={32} />
                  <span className="text-14 text-white">{step.text}</span>
                </div>
                <Image
                  src={GrayArrow}
                  alt=""
                  width={20}
                  height={20}
                  className={cn("rotate-90 md:rotate-0 shrink-0 ",
                    index === STEPS.length-1 && 'hidden'
                  )}
                />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
