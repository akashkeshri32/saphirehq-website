import Image from "next/image";
import Container from "@/components/layout/container";
import { ButtonLink } from "@/components/ui/button/button-link";
import BlueTick from "@/assets/icons/blue-tick.svg";
import HeroPlaceholder from "@/assets/images/placeholders/hero-placeholder.svg";
import type { DomainData } from "@/lib/data/domains";
import DomainHeroImage from "@/assets/images/domain-hero.svg"
import { ArrowRight } from "lucide-react";
import { RevealHeading } from "@/components/ui/motion/reveal-heading";
import { Reveal } from "@/components/ui/motion/reveal";


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

            <RevealHeading
              as="h1"
              text={domain.label}
              className="text-h1-mobile lg:text-h1 font-heading font-semibold mt-4.5"
            />

            <Reveal direction="up" distance={16} delay={0.1}>
              <p className="text-13 md:text-[22px] font-medium text-blue-primary mt-3">
                {domain.tagline}
              </p>
            </Reveal>

            <Reveal direction="up" distance={16} delay={0.2}>
              <p className="text-15 md:text-17 font-inter text-text-gray mt-4">
                {domain.description}
              </p>
            </Reveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 mt-6">
              {domain.highlights.map((highlight, index) => (
                <Reveal key={highlight} direction="up" distance={12} delay={0.3 + index * 0.05}>
                  <div className="flex items-center gap-2 px-3.75 py-2.25">
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
                </Reveal>
              ))}
            </div>

            <Reveal direction="up" distance={16} delay={0.4}>
              <div className="flex flex-wrap gap-3.5 mt-6">
                <ButtonLink href={`/enroll-now?domain=${domain.id}`}variant="default">
                  Enroll Now
                </ButtonLink>
                <ButtonLink href="#journey" variant="outline">
                  See the Journey
                </ButtonLink>
              </div>
            </Reveal>
          </div>


          <Reveal direction="right" distance={40} delay={0.15} duration={0.8}>
            <DomainHeroStats domain={domain.id} />
          </Reveal>
        </div>
      </Container>
    </section>
  );
};




const DomainHeroStats = ({ domain } : { domain : string }) => {
  return (
    <div style={{ boxShadow: "0px 12px 32px rgba(20, 55, 255, 0.14)" }} className="max-w-138 border border-border-stroke bg-white rounded-xl md:rounded-[30px] p-5 md:p-7.5 ">
      <div  className=" grid grid-cols-2 gap-4 md:gap-7.5">

        <div style={{ boxShadow: '0px 12px 32px rgba(20, 55, 255, 0.14)' }} className="border border-[#AFF4C7] bg-[#EBFFF2] py-5 md:py-7.5 px-3.5 md:px-13 text-[#00A138] rounded-lg md:rounded-[30px]">
          <h6 className="text-2xl md:text-h3 font-bold font-poppins">500+</h6>
          <p className="text-xs! md:text-13 font-inter font-semibold opacity-75">Hiring Partners</p>
        </div>

        <div style={{ boxShadow: '0px 12px 32px rgba(20, 55, 255, 0.14)' }} className="border border-[#FFD1FD] bg-[#FFEBFE] py-5 md:py-7.5 px-3.5 md:px-13 text-[#8E0187] rounded-lg md:rounded-[30px]">
          <h6 className="text-2xl md:text-h3 font-bold font-poppins">1000+</h6>
          <p className="text-xs! md:text-13 font-inter font-semibold opacity-75">Students Trained</p>
        </div>

        <div style={{ boxShadow: '0px 12px 32px rgba(20, 55, 255, 0.14)' }} className="border border-[#FDCEC1] bg-[#FFEAE4] py-5 md:py-7.5 px-3.5 md:px-13 text-[#994200] rounded-lg md:rounded-[30px]">
          <h6 className="text-2xl md:text-h3 font-bold font-poppins">40%</h6>
          <p className="text-xs! md:text-13 font-inter font-semibold opacity-75" >Avg. CTC Hike</p>
        </div>

        <div style={{ boxShadow: '0px 12px 32px rgba(20, 55, 255, 0.14)' }} className="border border-[#DCCDFF] bg-[#F1EBFF] py-5 md:py-7.5 px-3.5 md:px-13 text-[#29008A] rounded-lg md:rounded-[30px]">
          <h6 className="text-2xl md:text-h3 font-bold font-poppins">99%</h6>
          <p className="text-xs! md:text-13 font-inter font-semibold opacity-75">Completion Rate</p>
        </div>

      </div>

      <ButtonLink className="w-full mt-7.5" href={`/enroll-now?domain=${domain}`} icon={<ArrowRight size={10} color="white" />}>
      Enroll Now
      </ButtonLink>
    </div>
  )
}
