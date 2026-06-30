import Container from "@/components/layout/container";
import { ButtonLink } from "@/components/ui/button/button-link";
import LogosCarousel from "../logos-carousel";
import { Users, Star, Briefcase, Award } from "lucide-react";

const FLOATING_LEFT = [
  {
    Icon: Users,
    value: "500+",
    label: "Students Trained",
    gradient: "from-[#1437FF] to-[#6A2EFF]",
    className:
      "absolute left-[5%] -top-13 max-md:left-8 max-md:-top-20 max-md:scale-[0.72] max-md:origin-top-left",
  },
  {
    Icon: Star,
    value: "4.9 / 5",
    label: "Average Rating",
    gradient: "from-[#6A2EFF] to-[#9A2DFF]",
    className:
      "absolute left-[10%] bottom-[40%] max-md:left-[35%] max-md:bottom-[38%] max-md:scale-[0.72] max-md:origin-bottom-left",
  },
];

const FLOATING_RIGHT = [
  {
    Icon: Briefcase,
    value: "50+",
    label: "Real Projects",
    gradient: "from-[#9A2DFF] to-[#C9A6FF]",
    className:
      "absolute right-[7%] -top-8 max-md:right-5 max-md:-top-25 max-md:scale-[0.72] max-md:origin-top-right",
  },
  {
    Icon: Award,
    value: "100%",
    label: "Certification Rate",
    gradient: "from-[#1437FF] to-[#9A2DFF]",
    className:
      "absolute right-[10%] bottom-[42%] max-md:hidden max-md:bottom-[38%] max-md:scale-[0.72] max-md:origin-bottom-right",
  },
];

function FloatingCard({
  Icon,
  value,
  label,
  gradient,
  className,
}: (typeof FLOATING_LEFT)[0]) {
  return (
    <div className={className}>
      <div className="flex items-center gap-3 bg-surface-base border border-border-default rounded-2xl px-4 py-3.5 shadow-[0_8px_32px_rgba(20,55,255,0.09)] w-44">
        <div
          className={`w-10 h-10 rounded-xl bg-linear-to-br ${gradient} flex items-center justify-center shrink-0`}
        >
          <Icon size={17} className="text-[#fff]" strokeWidth={1.5} />
        </div>
        <div>
          <p className="text-ink font-bold text-16 leading-none">{value}</p>
          <p className="text-text-secondary text-xs mt-1">{label}</p>
        </div>
      </div>
    </div>
  );
}

const HeroV1 = () => {
  return (
    <section className="pt-45 relative max-md:overflow-hidden">
      {/* Hero-specific gradient orbs */}
      <div
        className="absolute top-0 right-0 w-120 h-120 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 90% 8%, rgba(20,55,255,0.13) 0%, rgba(106,46,255,0.07) 50%, transparent 70%)",
        }}
      />
      <div
        className="absolute top-0 left-0 w-120 h-120 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 10% 8%, rgba(154,45,255,0.11) 0%, rgba(201,166,255,0.06) 50%, transparent 70%)",
        }}
      />

      <Container className="relative">
        {/* Left floating stat cards — desktop only */}
        {FLOATING_LEFT.map((card) => (
          <FloatingCard key={card.label} {...card} className={card.className} />
        ))}

        {/* Right floating stat cards — desktop only */}
        {FLOATING_RIGHT.map((card) => (
          <FloatingCard key={card.label} {...card} className={card.className} />
        ))}

        {/* Center content */}
        <div className="max-w-5xl text-center mx-auto flex flex-col items-center relative z-10 pb-4">
          {/* Gradient badge */}
          <div
            className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full text-14 font-semibold"
            style={{
              background:
                "linear-gradient(135deg, rgba(20,55,255,0.08) 0%, rgba(154,45,255,0.12) 100%)",
              border: "1px solid rgba(106,46,255,0.25)",
              color: "#6A2EFF",
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full animate-pulse"
              style={{ background: "#6A2EFF" }}
            />
            Now Accepting Applications
          </div>

          <h1 className="text-h1-mobile md:text-h1 text-ink font-bold font-heading">
            Where Future Professionals Build Real-World Experience.
          </h1>

          <p className="text-text-secondary mt-6 text-16 md:text-18 max-w-2xl font-medium">
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

        {/* Bottom glow */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-64 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 50% 100%, rgba(20,55,255,0.10) 0%, rgba(154,45,255,0.07) 40%, transparent 70%)",
          }}
        />
      </Container>
    </section>
  );
};

export default HeroV1;
