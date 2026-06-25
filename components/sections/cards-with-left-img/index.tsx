import Container from "@/components/layout/container";
import { FolderGit2, Award, Code2, Compass } from "lucide-react";
import TopRightGradient from "@/assets/images/primary-gradient-right.svg";
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
    <div className="relative group overflow-hidden rounded-2xl border border-border-default bg-linear-to-br from-#743ce596 to-#3706638a backdrop-blur-sm p-6 flex flex-col gap-4 h-full">
      <div
        className={`w-11 h-11 rounded-xl bg-linear-to-br ${gradient} flex items-center justify-center shrink-0 shadow-lg`}
      >
        <Icon className="w-5 h-5 text-white" strokeWidth={1.5} />
      </div>

      <div>
        <h3 className="text-white font-semibold text-20 mb-2 leading-snug font-heading">
          {title}
        </h3>
        <p className="text-text-secondary text-16">{description}</p>
      </div>

      <Image
        src={TopRightGradient}
        alt=""
        width={250}
        height={190}
        className="absolute top-0 right-0 object-contain -z-10 opacity-20 transition-opacity group-hover:opacity-50"
      />
    </div>
  );
}

export default function CardsWithLeftImg() {
  return (
    <section className="py-24">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-5 items-stretch">
          {/* Left column — image card */}
          <div className="rounded-2xl border border-border-default overflow-hidden relative min-h-96">
            <div className="absolute inset-0 bg-linear-to-br from-primary/20 via-purple-900/15 to-surface-3 opacity-40" />
            <div className="absolute -top-10 -left-10 w-64 h-64 rounded-full bg-primary/25 blur-3xl opacity-20" />
            <div className="absolute -bottom-10 -right-10 w-56 h-56 rounded-full bg-violet-500/25 blur-3xl opacity-30" />

            <Image
              src={ManWithIdeaImg}
              alt="how sapphirehq helps"
              width={600}
              height={600}
              className="grayscale opacity-80 brightness-110 absolute max-md:-bottom-15 -bottom-5"
            />
          </div>

          {/* Right column — heading, subheading, 2×2 cards */}
          <div className="flex flex-col gap-8 max-md:order-first">
            <div>
              <h2 className="text-white font-bold font-heading text-h2-mobile md:text-h2 mb-4">
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
