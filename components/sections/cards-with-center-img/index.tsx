import Container from "@/components/layout/container";
import { Lock, FolderOpen, BookOpen, Mic } from "lucide-react";

import TopRightGradient from "@/assets/images/primary-gradient-right.svg";
import Image from "next/image";

import ConfusedManImage from "@/assets/images/confused-man-img.png";

const cards = [
  {
    Icon: Lock,
    gradient: "from-rose-400 to-orange-500",
    title: '"Experience Required" Everywhere?',
    description:
      "You can't get hired without experience, but finding opportunities to gain experience feels impossible.",
  },
  {
    Icon: FolderOpen,
    gradient: "from-violet-400 to-fuchsia-500",
    title: "Nothing Worth Adding to Your Portfolio?",
    description:
      "Without meaningful projects, standing out from thousands of applicants becomes difficult.",
  },
  {
    Icon: BookOpen,
    gradient: "from-cyan-400 to-blue-500",
    title: "Finished the Course. Now What?",
    description:
      "Most students complete courses but still don't know how to apply their skills in real scenarios.",
  },
  {
    Icon: Mic,
    gradient: "from-amber-400 to-orange-500",
    title: "Worried About Placements and Interviews?",
    description:
      "Many students feel unprepared because they lack real project experience to discuss confidently.",
  },
];

function ProblemCard({
  Icon,
  gradient,
  title,
  description,
}: (typeof cards)[0]) {
  return (
    <div
      className={`relative group overflow-hidden rounded-2xl border border-border-default bg-linear-to-br from-#743ce596 to-#3706638a backdrop-blur-sm p-6 flex flex-col gap-4 h-full`}
    >
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

export default function CardsWithCenterImg() {
  return (
    <section className="py-24">
      <Container>
        <div className="text-center max-w-4xl mx-auto mb-14">
          <h2 className="text-white font-bold font-heading text-h2-mobile md:text-h2 mb-4">
            Everyone Says &ldquo;
            <span className="text-primary">Gain Experience.</span> &rdquo;
            <br /> But How?
          </h2>
          <p className="text-text-secondary text-16 md:text-18">
            The biggest challenge for students isn&apos;t
            learning&mdash;it&apos;s getting hands-on experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-5">
          {/* Top-left card */}
          <ProblemCard {...cards[0]} />

          {/* Center card — spans both rows */}
          <div className="md:row-span-2 rounded-2xl border border-border-default overflow-hidden relative min-h-72">
            <div className="absolute -top-10 -left-10 w-56 h-56 rounded-full bg-primary/25 blur-3xl opacity-40" />
            <div className="absolute -bottom-10 -right-10 w-48 h-48 rounded-full bg-violet-500/25 blur-3xl" />

            <Image
              src={ConfusedManImage}
              alt="confused man image"
              width={600}
              height={600}
              className="object-contain absolute max-md:h-102 md:w-full grayscale opacity-60 md:scale-105 -translate-y-5"
            />
          </div>

          {/* Top-right card */}
          <ProblemCard {...cards[2]} />

          {/* Bottom-left card */}
          <ProblemCard {...cards[1]} />

          {/* Bottom-right card */}
          <ProblemCard {...cards[3]} />
        </div>
      </Container>
    </section>
  );
}
