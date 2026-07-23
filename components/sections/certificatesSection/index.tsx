import Container from "@/components/layout/container";
import { SectionHeader } from "@/components/ui/section-header";
import CertificatePlaceholder from "@/assets/images/placeholders/certificate-placeholder.svg";
import { CertificateCard } from "./certificateCard";

const CERTIFICATES = [
  { alt: "Data Analytics Certificate" },
  { alt: "AI & Machine Learning Certificate" },
  { alt: "UI/UX Design Certificate" },
  { alt: "Full Stack Development Certificate" },
  { alt: "Business Analysis Certificate" },
  { alt: "Digital Marketing Certificate" },
];

export const CertificatesSection = () => {
  return (
    <section className="py-120 bg-black">
      <Container>
        <SectionHeader
          eyebrow="Certification"
          eyebrowVariant="secondary"
          heading="A certificate that means something."
          descriptionClassName="text-white-two"
          description="Every track ends with a verifiable certificate — proof of the specific skills and projects you completed, not just attendance."
          headingClassName="text-white"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {CERTIFICATES.map((certificate) => (
            <CertificateCard
              key={certificate.alt}
              image={CertificatePlaceholder}
              alt={certificate.alt}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};
