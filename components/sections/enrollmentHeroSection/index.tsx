import Container from "@/components/layout/container";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { SectionHeader } from "@/components/ui/section-header";
import { ApplicationForm } from "./applicationForm";
import { FeatureBox } from "./featureBox";
import { HighlightsBox } from "./highlightsBox";

export const EnrollmentHeroSection = () => {
  return (
    <section className="py-22 bg-bg-light">
      <div className="h-px bg-border-stroke/80 w-full"></div>
      <Container className="mt-6">
        <Breadcrumb currentPage="Enrollment" />

        <SectionHeader
          eyebrow="Enroll Now"
          heading="Start Your Career Transformation."
          description="Tell us a little about yourself — a mentor will follow up to help you pick the right domain and get started."
          className="mt-8"
          descriptionClassName="max-w-[440px]"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-12 items-start">
          <ApplicationForm />

          <div className="flex flex-col gap-6">
            <FeatureBox />
            <HighlightsBox />

            <div className="mt-6 p-7.5 border border-border-stroke rounded-2xl">
              <p className="text-14 italic font-inter">
                &ldquo;The application took two minutes. The mentor call the next
                day is what actually convinced me.&rdquo;
              </p>
              <p className="text-13 font-semibold font-inter mt-3.5">
                — Priya R., Data Analyst Program
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
