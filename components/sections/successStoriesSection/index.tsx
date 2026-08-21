import Container from "@/components/layout/container";
import { SectionHeader } from "@/components/ui/section-header";
import { SuccessStoryCarousel } from "./successStoryCarousel";
import type { SuccessStory } from "./successStoryCard";
import { Reveal } from "@/components/ui/motion/reveal";

import AkashSinghImage from "@/assets/placements/Akash Singh.png";
import RahulBansalImage from "@/assets/placements/Rahul Bansal.png";
import RheaGuptaImage from "@/assets/placements/Rhea Gupta.png";
import AdityaVerma from "@/assets/placements/Aditya Verma.png";

import TCSIcon from "@/assets/partner-logos/tcs.svg";
import ZohoIcon from "@/assets/partner-logos/zoho.svg";
import GrowwIcon from "@/assets/partner-logos/groww.png"
import ScalerAcademyIcon from "@/assets/partner-logos/scaler-academy.svg";


const SUCCESS_STORIES: SuccessStory[] = [
  {
    avatar: AkashSinghImage,
    name: "Aakash Singh",
    linkedinUrl : "http://www.linkedin.com/in/akash-singh-621538419",
    designation: "Data Analyst",
    testimonial:
      `<p>
        My six-month journey with <strong className="font-semibold">Sapphire IQ</strong> was an amazing learning experience. The hands-on projects, supportive mentors, and regular guidance helped me strengthen my Data Analytics skills and gain practical industry exposure.
      </p>
      <p>
        The mock interviews and placement preparation were especially helpful in building my confidence and preparing me for real interview scenarios. I’m grateful to the entire Sapphire IQ team for their support, which played an important role in helping me secure my placement as a <strong className="font-semibold">Data Analyst at TCS</strong>.

      </p>`,
    highlight: "8lpa",
    company: "TCS",
    companyIcon : TCSIcon

  },
  {
    avatar: RahulBansalImage,
    name: "Rahul Bansal",
    linkedinUrl : "http://www.linkedin.com/in/rahul-bansal-9a61a2429",
    designation: "Business Analyst",
    testimonial:
      `My five-month journey with <strong className="font-semibold">Sapphire IQ</strong> as a Business Analyst Intern was a great learning experience. The practical projects, mentorship, and especially the placement team’s constant support helped me improve my skills and build confidence for interviews. I’m grateful to the entire team for their guidance, which played an important role in helping me secure my placement as a <strong className="font-semibold">Business Analyst at Zoho.</strong>`,
    highlight: "9lpa",
    company: "Zoho",
    companyIcon : ZohoIcon

  },
  {
    avatar: RheaGuptaImage,
    name: "Rhea Gupta",
    linkedinUrl : "https://www.linkedin.com/in/rhea-gupta-1271ba429/",
    designation: "HTML Developer",
    testimonial:
      `
        <p>
          My experience with Sapphire IQ as a Frontend Development Intern was a great learning journey. The practical projects, mentorship, <strong className="font-semibold">mock interviews, placement assistance, and LinkedIn profile guidance </strong> helped me improve my skills and build confidence.
        </p>

        <p>
        I’m grateful to the entire Sapphire IQ team for their constant support, which helped me secure my placement as an <strong className="font-semibold">HTML Developer at Groww</strong>
        </p>
      `,
    highlight: "7lpa",
    company: "Groww",
    companyIcon : GrowwIcon

  },
  {
    avatar: AdityaVerma,
    name: "Aditya Verma",
    linkedinUrl : "http://www.linkedin.com/in/aditya-verma-a175a7429",
    designation: "Full Stack Developer",
    testimonial:
      `<p>
        Joining <strong className="font-semibold">Sapphire IQ</strong> turned out to be an important step in my career. Over six months, I got the opportunity to work on practical assignments, understand professional workflows, and improve the way I approach real-world problems.
      </p>
      <p>
        The experience helped me become more confident and better prepared for the recruitment process. I’m happy to share that I’ve now secured a placement at <strong className="font-semibold">Scaler Academy</strong>, and I truly appreciate the role Sapphire IQ played in helping me reach this milestone.
      </p>

      `,
    highlight: "10lpa",
    company: "Scaler Academy",
    companyIcon : ScalerAcademyIcon

  },
];

export const SuccessStoriesSection = () => {
  return (
    <section id="success-stories" className="bg-bg-light py-19 md:py-120">
      <Container>
        <SectionHeader
          eyebrow="Success Stories"
          heading="Real people. Real placements."
          description="Hear directly from students who turned a structured program into an actual job offer."
        />

        <Reveal direction="up" distance={40} delay={0.25} duration={0.5}>
          <div className="mt-12">
            <SuccessStoryCarousel stories={SUCCESS_STORIES} />
          </div>
        </Reveal>
      </Container>
    </section>
  );
};
