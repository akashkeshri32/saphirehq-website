// import { Clock, Download } from "lucide-react";
import Link from "next/link";
import type { DomainData } from "@/lib/data/domains";
import { Zap } from "lucide-react";

type Domain = DomainData;

export default function DomainCard({
  id,
  label,
  Icon,
  gradient,
  glowColor,
  tagline,
  description,
  skills,
  projects,
  popular,
  index,
}: Domain & { index: number }) {
  return (
    <div
      className="group relative overflow-hidden rounded-2xl border border-border-default bg-white shadow-[0_2px_24px_rgba(0,60,200,0.06)] flex flex-col animate-fade-in-up"
      style={{ animationDelay: `${index * 70}ms` }}
      id={id}
    >
      {/* Gradient top accent strip */}
      <div
        className={`absolute top-0 left-0 right-0 h-0.5 bg-linear-to-r ${gradient}`}
      />

      {/* Hover glow */}
      <div
        className="absolute top-0 right-0 w-80 h-72 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(ellipse at right top, ${glowColor} 0%, transparent 70%)`,
        }}
      />

      <div className="relative z-10 p-7 flex flex-col gap-5 flex-1">
        {/* Header */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-4">
            <div
              className={`w-13 h-13 rounded-2xl bg-linear-to-br ${gradient} flex items-center justify-center shrink-0 shadow-lg`}
            >
              <Icon size={24} className="text-white" strokeWidth={1.5} />
            </div>
            <div>
              <h3 className="text-ink font-bold font-heading text-20 leading-tight">
                {label}
              </h3>
              <p className="text-text-secondary text-14 mt-0.5">{tagline}</p>
            </div>
          </div>
          {popular && (
            <div
              className="shrink-0 inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold"
              style={{
                background:
                  "linear-gradient(135deg, rgba(20,55,255,0.08) 0%, rgba(154,45,255,0.10) 100%)",
                border: "1px solid rgba(106,46,255,0.22)",
                color: "#6A2EFF",
              }}
            >
              <Zap size={10} />
              Popular
            </div>
          )}
        </div>

        {/* Description */}
        <p className="text-text-secondary text-14 leading-5">{description}</p>

        <div className="h-px bg-border-subtle" />

        {/* Skills */}
        <div>
          <p className="text-ink font-semibold text-xs uppercase tracking-widest mb-3">
            Tools you will use
          </p>
          <div className="flex flex-wrap gap-1.5">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-2.5 py-1 rounded-lg text-xs font-medium bg-surface-2 text-text-secondary border border-border-subtle"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Sample projects */}
        {/*<div>
          <p className="text-ink font-semibold text-xs uppercase tracking-[0.1em] mb-3">
            Sample projects
          </p>
          <ul className="space-y-2">
            {projects.map((project) => (
              <li
                key={project}
                className="flex items-center gap-2.5 text-text-secondary text-14"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 opacity-60" />
                {project}
              </li>
            ))}
          </ul>
        </div>*/}

        {/* Footer */}
        <div className="flex items-center justify-between pt-3 mt-auto border-t border-border-subtle">
          {/*<div className="flex items-center gap-1.5 text-text-secondary text-14">
            <Clock size={13} className="shrink-0 text-primary opacity-80" />
            {duration}
          </div>*/}
          <div className="flex items-center gap-2">
            {/*<a
              href={`/brochures/${id}.pdf`}
              className="inline-flex items-center gap-1.5 text-14 font-semibold px-3.5 py-2 rounded-xl border border-border-default text-text-secondary hover:border-primary/40 hover:text-ink transition-all duration-200"
            >
              <Download size={12} />
              Brochure
            </a>*/}
            <Link
              href={`/domains/${id}`}
              className="inline-flex items-center gap-1.5 text-14 font-semibold px-3.5 py-2 rounded-xl bg-linear-to-r from-[#1437FF] to-[#6A2EFF] text-[#fff] hover:opacity-90 transition-opacity"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
