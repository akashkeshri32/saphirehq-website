import Image from "next/image";
import Container from "@/components/layout/container";
import { ButtonLink } from "@/components/ui/button/button-link";
import BlueTick from "@/assets/icons/blue-tick.svg";
import HeroPlaceholder from "@/assets/images/placeholders/hero-placeholder.svg";
import type { DomainData } from "@/lib/data/domains";
import DomainHeroImage from "@/assets/images/domain-hero.svg"


type Props = {
  domain: DomainData;
};

export const DomainHeroSection = ({ domain }: Props) => {
  return (
    <section className="pt-25 md:pt-41 pb-[64px]">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col">
            <span className="inline-flex w-fit items-center bg-brown-light text-brown-dark text-[11px] font-jetbrains font-bold uppercase px-2.75 py-2 rounded-full">
              {domain.heroPillText}
            </span>

            <h1 className="text-h1-mobile lg:text-h1 font-heading font-semibold mt-4.5">
              {domain.label}
            </h1>

            <p className="text-13 md:text-[22px] font-medium text-blue-primary mt-3">
              {domain.tagline}
            </p>

            <p className="text-15 md:text-17 font-inter text-text-gray mt-4">
              {domain.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 mt-6">
              {domain.highlights.map((highlight) => (
                <div
                  key={highlight}
                  className="flex items-center gap-2 px-3.75 py-2.25"
                >
                  <Image
                    src={BlueTick}
                    alt=""
                    width={16}
                    height={16}
                    className="shrink-0"
                  />
                  <span className="text-13 text-text-gray-secondary">
                    {highlight}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3.5 mt-6">
              <ButtonLink href="/enroll-now" variant="default">
                Enroll Now
              </ButtonLink>
              <ButtonLink href="?apply-now" variant="outline">
                Talk to a Mentor
              </ButtonLink>
            </div>
          </div>

          <div className="relative rounded-3xl overflow-hidden">
            <Image
              src={DomainHeroImage}
              alt={domain.label}
              className="w-full h-auto"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};
