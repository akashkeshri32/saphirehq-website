import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Container from "@/components/layout/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { ButtonLink } from "@/components/ui/button/button-link";
import { StatCard } from "./statCard";
import GradientRight from "@/assets/gradients/hero-gradient-right.svg";
import GradientLeft from "@/assets/gradients/hero-gradient-left.svg";

import HomeHero from "@/assets/images/home-hero.png";



const STATS = [
  { 
    heading: "500+",
    description: "Hiring Partners", 
    className : "bg-black/5 border-black" 
  },
  { 
    heading: "1000+",
    description: "Students Trained", 
    className : "border-blue-primary bg-linear-[113.87deg,rgba(20,55,255,0.05)_0%,rgba(106,46,255,0.05)_100%]" 
  },
  { 
    heading: "99%",
    description: "Completion Rate",
    className : "bg-black/5 border-black" 

  },
  { 
    heading: "40%",
    description: "Avg. CTC Hike",
    className : "border-blue-primary bg-linear-[113.87deg,rgba(20,55,255,0.05)_0%,rgba(106,46,255,0.05)_100%]" 

  },
];

export const HeroSection = () => {
  return (
    <section className="pt-41 pb-[64px] relative bg-bg-light overflow-hidden">

      <Image src={GradientRight} alt="" className="absolute -top-10 -right-40 w-[480px] h-[480px]" />
      <Image src={GradientLeft} alt="" className="absolute bottom-0 -left-20 w-105 h-105" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-20 items-center">
          <div className="flex flex-col">
            <Eyebrow variant="default" text="Career Accelerator Program" />

            <h1 className="text-h1-mobile lg:text-h1 font-heading mt-4.5 font-semibold">
             Turn Potential Into <span className="gradient-text">Placement.</span>
            </h1>

            <p className="text-18 text-text-gray mt-5">
              Collaborate with mentors, build portfolio-worthy projects, and
              gain practical experience across Data Science, AI/ML,
              Analytics, Design, and Development.
            </p>

            <div className="flex flex-wrap gap-3.5 mt-8.5">
              <ButtonLink variant={"default"} href="/programs">Explore Programs</ButtonLink>
              <ButtonLink variant="outline" href="/#domains">
                Explore Domains
                <ArrowRight />
              </ButtonLink>
            </div>

            
          </div>

          <figure className="relative">
            <Image
              src={HomeHero}
              alt="Hero placeholder"
              width={672} height={352}
              className="w-full h-auto object-contain"
            />
          </figure>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-20.75">
          {STATS.map((stat) => (
            <StatCard key={stat.heading} {...stat} />
          ))}
        </div>
      </Container>
    </section>
  );
};
