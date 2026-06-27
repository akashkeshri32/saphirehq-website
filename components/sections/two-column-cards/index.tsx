import Container from "@/components/layout/container";
import {
  Briefcase,
  LayoutTemplate,
  Lightbulb,
  TrendingUp,
  Zap,
  UsersRound,
} from "lucide-react";

const cards = [
  {
    Icon: Briefcase,
    gradient: "from-cyan-400 to-blue-500",
    title: "Real-World Project Experience",
    description:
      "Work on industry-focused projects that help you apply your knowledge, solve practical challenges, and gain hands-on experience that goes beyond traditional learning.",
  },
  {
    Icon: LayoutTemplate,
    gradient: "from-violet-400 to-fuchsia-500",
    title: "Strong Portfolio & Professional Profile",
    description:
      "Build meaningful projects that can be showcased on GitHub, LinkedIn, resumes, and personal portfolios to stand out from the crowd.",
  },
  {
    Icon: Lightbulb,
    gradient: "from-amber-400 to-orange-500",
    title: "Expert Mentorship & Industry Guidance",
    description:
      "Learn from experienced professionals who provide valuable insights, project feedback, and practical guidance throughout your journey.",
  },
  {
    Icon: TrendingUp,
    gradient: "from-emerald-400 to-teal-500",
    title: "Enhanced Career Readiness",
    description:
      "Develop the confidence, technical exposure, and problem-solving abilities needed to perform better during internships, placements, and interviews.",
  },
  {
    Icon: Zap,
    gradient: "from-rose-400 to-pink-500",
    title: "A Bridge Between Learning & Employment",
    description:
      "Gain the practical exposure, documentation, certification, and project experience that help transform academic knowledge into industry readiness.",
  },
  {
    Icon: UsersRound,
    gradient: "from-indigo-400 to-blue-500",
    title: "Grow With A Community of Driven Learners",
    description:
      "Connect with like-minded peers, collaborate on shared challenges, exchange ideas, and build a professional network that supports your growth long after the program ends.",
  },
];

function ExpectCard({ Icon, gradient, title, description }: (typeof cards)[0]) {
  return (
    <div className="relative group overflow-hidden rounded-2xl border border-border-default bg-[#ffffff] shadow-[0_2px_20px_rgba(0,60,200,0.06)] p-6 flex flex-col gap-4 h-full">
      {/* Gradient top accent strip */}
      {/*<div
        className={`absolute top-0 left-0 right-0 h-[2px] bg-linear-to-r ${gradient} opacity-15`}
      />*/}

      {/* Hover glow */}
      <div
        className="absolute top-0 right-0 w-52 h-44 pointer-events-none opacity-80 "
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
        <h3 className="text-white font-semibold text-20 mb-2 leading-snug font-heading">
          {title}
        </h3>
        <p className="text-text-secondary text-16">{description}</p>
      </div>
    </div>
  );
}

export default function TwoColumnCards() {
  return (
    <section className="py-24">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p
            className="text-14 font-bold uppercase tracking-[0.12em] mb-4"
            style={{
              background: "linear-gradient(90deg, #6A2EFF 0%, #9A2DFF 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Program Benefits
          </p>
          <h2 className="text-white font-bold font-heading text-h2-mobile md:text-h2 mb-4">
            What You Can <span className="text-primary">Expect</span>
          </h2>
          <p className="text-text-secondary text-16 md:text-18">
            Everything you need to go from learner to industry-ready
            professional&mdash;real projects, expert guidance, and a profile
            that gets you noticed.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {cards.map((card) => (
            <ExpectCard key={card.title} {...card} />
          ))}
        </div>
      </Container>
    </section>
  );
}
