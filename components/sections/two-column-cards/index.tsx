import Container from "@/components/layout/container";
import {
  Briefcase,
  LayoutTemplate,
  Lightbulb,
  TrendingUp,
  Zap,
  UsersRound,
} from "lucide-react";
import TopRightGradient from "@/assets/images/primary-gradient-right.svg";
import Image from "next/image";

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

function ExpectCard({
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

export default function TwoColumnCards() {
  return (
    <section className="py-24">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-white font-bold font-heading text-h2-mobile md:text-h2 mb-4">
            What You Can{" "}
            <span className="text-primary">Expect</span>
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
