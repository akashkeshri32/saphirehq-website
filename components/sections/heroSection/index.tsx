"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Container from "@/components/layout/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { ButtonLink } from "@/components/ui/button/button-link";
import { Reveal } from "@/components/ui/motion/reveal";
import { cn } from "@/lib/utils/tailwind";
import { StatCard } from "./statCard";
import GradientRight from "@/assets/gradients/hero-gradient-right.svg";
import GradientLeft from "@/assets/gradients/hero-gradient-left.svg";

import HomeHero from "@/assets/images/home-hero.svg";
import { motion } from "framer-motion"

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
    <section className="pt-28 pb-[64px] relative bg-bg-light overflow-hidden">

      <Image src={GradientRight} alt="" className="absolute -top-10 -right-40 w-[480px] h-[480px]" />
      <Image src={GradientLeft} alt="" className="absolute bottom-0 -left-20 w-105 h-105" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] max-lg:gap-y-14 items-center relative z-10">
          <div className="flex flex-col">
            <Reveal direction="down" distance={28} duration={0.6}>
              <Eyebrow variant="default" text="Career Accelerator Program" />
            </Reveal>

            <Reveal direction="up" distance={24} duration={0.7}>
              <motion.h1

                initial="hidden"
                whileInView="visible"
                viewport={{ once : true, amount: 0.4 }}
                variants={{
                  visible: {
                    transition: { staggerChildren: 0.02, },
                  },
                }}
                aria-label={"Turn Potential Into Placements."}
                className="text-h1-mobile lg:text-h1 font-heading mt-4.5 font-semibold">

               Turn Potential Into <span className="gradient-text">Placement.</span>
              </motion.h1>
            </Reveal>

            <Reveal direction="up" distance={16} delay={0.15} duration={0.6}>
              <p className="text-18 text-text-gray mt-5">
                Collaborate with mentors, build portfolio-worthy projects, and
                gain practical experience across Data Science, AI/ML, Full Stack, Business Analyst, UI/UX, Frontend and Backend Development.
              </p>
            </Reveal>

            <Reveal direction="up" distance={16} delay={0.3} duration={0.6}>
              <div className="flex flex-wrap gap-3.5 mt-8.5">
                <ButtonLink variant={"default"} href="/enroll-now">Apply Now</ButtonLink>
                <ButtonLink variant="outline" href="/#domains">
                  Explore Domains
                  <ArrowRight />
                </ButtonLink>
              </div>
            </Reveal>


          </div>

          <Reveal as="figure" className="relative" direction="left" distance={40} delay={0.1} duration={0.8}>
            <Image
              src={HomeHero}
              alt="Hero placeholder"
              width={672} height={670}
              className="w-full h-auto max-h-155 object-contain"
            />
          </Reveal>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-20.75">
          {STATS.map((stat, index) => (
            <Reveal key={stat.heading} direction="up" delay={index * 0.08} hover>
              <StatCard {...stat} className={cn(stat.className, "h-full")} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
};
