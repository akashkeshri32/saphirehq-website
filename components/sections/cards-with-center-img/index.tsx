import Container from "@/components/layout/container";
import { Lock, FolderOpen, BookOpen, Mic } from "lucide-react";
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
        <h3 className="text-white font-semibold text-20 mb-2 leading-snug font-heading">
          {title}
        </h3>
        <p className="text-text-secondary text-16">{description}</p>
      </div>
    </div>
  );
}

export default function CardsWithCenterImg() {
  return (
    <section className="py-24">
      <Container>
        <div className="text-center max-w-4xl mx-auto mb-14">
          <p
            className="text-14 font-bold uppercase tracking-[0.12em] mb-4"
            style={{
              background: "linear-gradient(90deg, #1437FF 0%, #6A2EFF 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            The Challenge
          </p>
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
          <div className="md:row-span-2 rounded-2xl border border-border-default overflow-hidden relative min-h-72 bg-surface-2">
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse at 30% 20%, rgba(0,123,255,0.10) 0%, transparent 60%)",
              }}
            />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse at 80% 90%, rgba(106,46,255,0.08) 0%, transparent 55%)",
              }}
            />
            <Image
              src={ConfusedManImage}
              alt="confused man image"
              width={600}
              height={600}
              className="object-contain absolute max-md:h-102 md:w-full opacity-80 md:scale-105 -translate-y-5"
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
