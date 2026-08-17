import { Mail, Phone, Globe, MapPin, Clock } from "lucide-react";
import Container from "@/components/layout/container";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { SectionHeader } from "@/components/ui/section-header";
import { Reveal } from "@/components/ui/motion/reveal";
import LinkedinIcon from "@/components/icons/linkedin";
import InstagramIcon from "@/components/icons/instagram";
import { ContactInfoRow } from "./contactInfoRow";
import { ContactForm } from "./contactForm";

const CONTACT_DETAILS = [
  {
    icon: Mail,
    label: "Email",
    value: "admin@sapphireiq.in",
    href: "mailto:admin@sapphireiq.in",
  },
  {
    icon: Phone,
    label: "Contact Number",
    value: "+918851442459",
    href: "tel:+918851442459",
  },
  // {
  //   icon: Globe,
  //   label: "Website",
  //   value: "sapphireiq.in",
  //   href: "https://sapphireiq.in/",
  // },
  {
    icon: MapPin,
    label: "Office Address",
    value: "Unitech Unihomes, Sector 117, Noida, 201304",
  },
  {
    icon: Clock,
    label: "Business Hours",
    value: "Monday – Saturday | 10:00 AM – 6:00 PM",
  },
];

const SOCIAL_LINKS = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/sapphireiq",
    Icon: LinkedinIcon,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/sapphireiq_?igsh=MTFkcnRwM2dqN2JiZA==",
    Icon: InstagramIcon,
  },
];

export const ContactHeroSection = () => {
  return (
    <section className="max-md:pb-19 py-22 bg-bg-light">
      <div className="h-px bg-border-stroke/80 w-full"></div>
      <Container className="mt-6">
        <Breadcrumb currentPage="Contact Us" />

        <SectionHeader
          as="h1"
          eyebrow="Get In Touch"
          heading="We'd love to hear from you."
          description="Get in touch with the Sapphire IQ team — for admissions, partnerships, or just to say hello."
          className="mt-8"
          descriptionClassName="max-w-[440px]"
          descriptionDelay={0.4}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-12 items-start">
          <Reveal className="h-full" direction="left">
            <div className="bg-black rounded-2xl p-7.5 flex flex-col gap-6 h-full">
              <div className="flex flex-col gap-6">
                {CONTACT_DETAILS.map((detail) => (
                  <ContactInfoRow key={detail.label} {...detail} />
                ))}
              </div>

              <div className="h-px bg-white/10" />

              <div>
                <p className="text-12 uppercase tracking-wide text-gray-two font-jetbrains mb-3.5">
                  Connect With Us
                </p>
                <div className="flex items-center gap-3">
                  {SOCIAL_LINKS.map(({ label, href, Icon }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="w-10 h-10 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-white hover:bg-blue-primary hover:border-blue-primary transition-colors"
                    >
                      <Icon className="w-4.5 h-4.5" />
                    </a>
                  ))}
                </div>
              </div>

              {/*<div className="h-px bg-white/5" />*/}

              <div className="flex-1 flex items-end">
                <div>
                  <p className="text-15 font-heading font-semibold text-white">
                    Sapphire IQ.
                  </p>
                  <p className="text-13 text-gray-two mt-1">
                    Brilliant Minds. Intelligent Solutions.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal direction="right" delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>
      </Container>
    </section>
  );
};
