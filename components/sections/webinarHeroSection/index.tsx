import Container from "@/components/layout/container";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { SectionHeader } from "@/components/ui/section-header";
import { WebinarRegistrationForm } from "./webinarRegistrationForm";
import { FeatureBox } from "@/components/sections/enrollmentHeroSection/featureBox";
import { HighlightsBox } from "@/components/sections/enrollmentHeroSection/highlightsBox";
import { Suspense } from "react";
import { Loader } from "lucide-react";
import { Reveal } from "@/components/ui/motion/reveal";

type Props = {
  sessionId: string;
  sessionTime: string;
  webinarDateLabel: string;
};

export const WebinarHeroSection = ({
  sessionId,
  sessionTime,
  webinarDateLabel,
}: Props) => {
  return (
    <section className="max-md:pb-19 pt-5 pb-22 bg-bg-light">
      <div className="h-px bg-border-stroke/80 w-full"></div>
      <Container className="mt-6">
        <Breadcrumb currentPage="Webinar Registration" />

        <SectionHeader
          as="h1"
          eyebrow="Free Live Webinar"
          heading="Reserve Your Spot."
          description="Join our live session and get your questions answered directly by a mentor — seats are limited."
          className="mt-8"
          descriptionClassName="max-w-[440px]"
          descriptionDelay={0.4}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-12 items-start">
          <Suspense fallback={<Loader size={18} />}>
            <Reveal direction="up">
              <WebinarRegistrationForm
                sessionId={sessionId}
                sessionTime={sessionTime}
                webinarDateLabel={webinarDateLabel}
              />
            </Reveal>
          </Suspense>

          <div className="flex flex-col gap-6">
            <Reveal delay={0.2} direction="left">
              <FeatureBox />
            </Reveal>
            <Reveal delay={0.2} direction="right">
              <HighlightsBox />
            </Reveal>

            <Reveal direction="down">
              <div className="mt-6 p-7.5 border border-border-stroke rounded-2xl">
                <p className="text-14 italic font-inter">
                  &ldquo;The application took two minutes. The mentor call the next
                  day is what actually convinced me.&rdquo;
                </p>
                <p className="text-13 font-semibold font-inter mt-3.5">
                  — Priya R., Data Analyst Program
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
};
