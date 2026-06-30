import Container from "@/components/layout/container";
import { FolderGit2, Award, Code2, Compass } from "lucide-react";
import Image from "next/image";
import ManWithIdeaImg from "@/assets/images/man-with-idea.png";

const cards = [
  {
    Icon: Code2,
    gradient: "from-cyan-400 to-blue-500",
    title: "Gain Practical Experience Through Real Projects",
    description:
      "Work on industry-focused projects that help you build hands-on experience and demonstrate your capabilities with confidence.",
  },
  {
    Icon: FolderGit2,
    gradient: "from-violet-400 to-fuchsia-500",
    title: "Build A Portfolio That Speaks For You",
    description:
      "Create meaningful projects that showcase your skills on GitHub, LinkedIn, and your resume.",
  },
  {
    Icon: Compass,
    gradient: "from-emerald-400 to-teal-500",
    title: "Follow A Structured Growth Path",
    description:
      "Get access to curated projects, clear milestones, and mentor guidance that keep you focused and progressing.",
  },
  {
    Icon: Award,
    gradient: "from-amber-400 to-orange-500",
    title: "Walk Into Interviews With Confidence",
    description:
      "Develop real project experience, practical problem-solving skills, and portfolio evidence that strengthen your profile.",
  },
];

function SolutionCard({
  Icon,
  gradient,
  title,
  description,
}: (typeof cards)[0]) {
  return (
    <div className="relative group overflow-hidden rounded-2xl border border-border-default bg-[#ffffff] shadow-[0_2px_20px_rgba(0,60,200,0.06)] p-6 flex flex-col gap-4 h-full">
      {/* Gradient top accent strip */}
      {/*<div className={`absolute top-0 left-0 right-0 h-[2px] bg-linear-to-r ${gradient} opacity-70`} />*/}

      {/* Hover glow */}
      <div
        className="absolute top-0 right-0 w-52 h-44 pointer-events-none opacity-80"
        style={{
          background:
            "radial-gradient(ellipse at right top, rgba(106,46,255,0.11) 0%, rgba(20,55,255,0.06) 55%, transparent 75%)",
        }}
      />

      <div
        className={`relative z-10 w-11 h-11 rounded-xl bg-linear-to-br ${gradient} flex items-center justify-center shrink-0 shadow-lg`}
      >
        <Icon className="w-5 h-5 text-[#fff]" strokeWidth={1.5} />
      </div>

      <div className="relative z-10">
        <h3 className="text-ink font-semibold text-20 mb-2 leading-snug font-heading">
          {title}
        </h3>
        <p className="text-text-secondary text-16">{description}</p>
      </div>
    </div>
  );
}

export default function CardsWithLeftImg() {
  return (
    <section className="py-24">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-5 items-stretch">
          {/* Left column — image card */}
          <div className="rounded-2xl border border-border-default overflow-hidden relative min-h-96 bg-surface-2">
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse at 20% 20%, rgba(0,123,255,0.10) 0%, transparent 60%)",
              }}
            />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse at 85% 85%, rgba(106,46,255,0.08) 0%, transparent 55%)",
              }}
            />
            <Image
              src={ManWithIdeaImg}
              alt="how sapphirehq helps"
              width={600}
              height={600}
              className="opacity-90 brightness-100 absolute max-md:-bottom-15 -bottom-5"
            />
          </div>

          {/* Right column — heading, subheading, 2×2 cards */}
          <div className="flex flex-col gap-8 max-md:order-first">
            <div>
              <p
                className="text-14 font-bold uppercase tracking-[0.12em] mb-4"
                style={{
                  background:
                    "linear-gradient(90deg, #1437FF 0%, #9A2DFF 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Our Approach
              </p>
              <h2 className="text-ink font-bold font-heading text-h2-mobile md:text-h2 mb-4">
                How Sapphire IQ Helps You{" "}
                <span className="text-primary">Move Forward</span>
              </h2>
              <p className="text-text-secondary text-16 md:text-18">
                From unfinished projects and empty portfolios to real-world
                experience and industry-ready skills&mdash;here&apos;s how
                Sapphire IQ helps you bridge the gap.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 flex-1">
              {cards.map((card) => (
                <SolutionCard key={card.title} {...card} />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
