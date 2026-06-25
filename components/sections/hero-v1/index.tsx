import Container from "@/components/layout/container";
import ApplyButton from "./apply-btn";
import { ButtonLink } from "@/components/ui/button/button-link";
import Image from "next/image";
import CircularGradient from "@/assets/images/circular-gradient.svg";
import LogosCarousel from "../logos-carousel";

const HeroV1 = () => {
  return (
    <section className="pt-34 relative max-md:overflow-hidden">
      <Container className="overflow-hidden">
        <div className="max-w-4xl text-center mx-auto flex flex-col items-center relative z-10">
          <h1 className="text-h1-mobile md:text-h1 text-white font-bold font-heading">
            Where Future Professionals Build Real-World Experience.{" "}
          </h1>

          <p className="text-text-secondary mt-6 text-16 md:text-18 max-w-3xl font-medium">
            Collaborate with mentors, build portfolio-worthy projects, and gain
            practical experience across Data Science, AI/ML, Analytics, Design,
            and Development.
          </p>

          <div className="mt-8 flex gap-x-5">
            <ButtonLink href="/?apply-now">Apply Now</ButtonLink>
            <ButtonLink variant={"outline"} href="/domains">
              Explore Domains
            </ButtonLink>
          </div>
        </div>

        <LogosCarousel />
        <Image
          src={CircularGradient}
          alt=""
          className="absolute w-[130%] max-md:max-w-none md:w-250 bottom-0 md:-bottom-30 left-1/2 -translate-x-1/2"
        />
      </Container>
    </section>
  );
};

export default HeroV1;
