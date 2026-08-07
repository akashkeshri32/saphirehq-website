import Container from "@/components/layout/container";
import { SectionHeader } from "@/components/ui/section-header";
import { Reveal } from "@/components/ui/motion/reveal";
import { CertificateCard } from "./certificateCard";
import CertificateImage from "@/assets/images/certificates/certificate.png";
import OfferLetter from "@/assets/images/certificates/offer-letter.png";
import RecommendationLetter from "@/assets/images/certificates/recommendation-letter.png";
import ExperienceLetter from "@/assets/images/certificates/experience-letter.png";



const CERTIFICATES = [
  { alt: "Certificate", image : CertificateImage },
  { alt: "Offer Letter", image : OfferLetter },
  { alt: "Recommendation Letter", image : RecommendationLetter },
  { alt: "Experience Letter", image : ExperienceLetter },
];

export const CertificatesSection = () => {
  return (
    <section className="py-19 md:py-120 bg-black">
      <Container>
        <SectionHeader
          eyebrow="Certification"
          eyebrowVariant="secondary"
          heading="A certificate that means something."
          descriptionClassName="text-white-two"
          description="Every track ends with a verifiable certificate — proof of the specific skills and projects you completed, not just attendance."
          headingClassName="text-white"
          descriptionDelay={0.4}
        />

        <Reveal  direction="up">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {CERTIFICATES.map((certificate) => (
              <CertificateCard
                key={certificate.alt}
                image={certificate.image}
                alt={certificate.alt}
              />
          ))}
        </div>
        </Reveal>
      </Container>
    </section>
  );
};
