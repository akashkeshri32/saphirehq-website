"use client";

import { useState } from "react";
import Container from "@/components/layout/container";
import {
  BarChart3,
  Brain,
  Boxes,
  Bot,
  Palette,
  Globe,
  Server,
  Layers,
  Download,
  ChevronRight,
} from "lucide-react";
import { cn } from "@/lib/utils/tailwind";
import { ButtonLink } from "@/components/ui/button/button-link";
import CounsellorForm from "./cousellor-form";

const DOMAINS = [
  {
    id: "data-analyst",
    label: "Data Analyst",
    Icon: BarChart3,
    gradient: "from-cyan-400 to-blue-500",
    description:
      "Turns raw data into actionable insights that help teams make smarter decisions. Perfect for detail-oriented minds who love uncovering patterns and trends.",
  },
  {
    id: "business-analyst",
    label: "Business Analyst",
    Icon: Boxes,
    gradient: "from-violet-400 to-fuchsia-500",
    description:
      "The bridge between tech and business, focused on identifying problems and designing smart solutions to optimize company growth.",
  },
  {
    id: "data-science",
    label: "Data Science",
    Icon: Brain,
    gradient: "from-emerald-400 to-teal-500",
    description:
      "Blends statistics, programming, and strategy to build predictive models and extract deep meaning from complex data.",
  },
  {
    id: "ai-ml",
    label: "AI / ML",
    Icon: Bot,
    gradient: "from-amber-400 to-orange-500",
    description:
      "Teaches machines how to learn, adapt, and think. Dive into building the algorithms and intelligent systems shaping the future.",
  },
  {
    id: "ui-ux",
    label: "UI/UX Designer",
    Icon: Palette,
    gradient: "from-rose-400 to-pink-500",
    description:
      "Crafts intuitive, beautiful, and user-friendly digital experiences. Ideal for creative problem-solvers who care about how things look and feel.",
  },
  {
    id: "frontend",
    label: "Frontend",
    Icon: Globe,
    gradient: "from-sky-400 to-cyan-500",
    description:
      "Brings designs to life by building the visual, interactive elements of websites and apps that users interact with directly.",
  },
  {
    id: "backend",
    label: "Backend",
    Icon: Server,
    gradient: "from-indigo-400 to-blue-500",
    description:
      "The architect behind the curtain, building the secure servers, databases, and logic that power applications from the inside out.",
  },
  {
    id: "full-stack",
    label: "Full Stack",
    Icon: Layers,
    gradient: "from-purple-400 to-violet-500",
    description:
      "The ultimate tech all-rounder who masters both user-facing design and behind-the-scenes logic to build complete digital products.",
  },
] as const;

const HIGHLIGHTS = [
  "Industry-focused real-world projects",
  "Expert mentorship & guidance",
  "Portfolio & certification on completion",
];

export default function DomainsSection() {
  const [activeId, setActiveId] = useState<string>(DOMAINS[0].id);
  const active = DOMAINS.find((d) => d.id === activeId)!;

  return (
    <section className="py-10 md:py-24">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p
            className="text-14 font-bold uppercase tracking-[0.12em] mb-4"
            style={{
              background: "linear-gradient(90deg, #1437FF 0%, #6A2EFF 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Choose Your Path
          </p>
          <h2 className="text-ink font-bold font-heading text-h2-mobile md:text-h2 mb-4">
            Explore Our <span className="text-primary">Domains</span>
          </h2>
          <p className="text-text-secondary text-16 md:text-18">
            Choose a domain that matches your interest and start building
            real-world expertise with guided projects and mentorship.
          </p>
        </div>

        {/* Mobile: horizontal scrollable pill row */}
        <div className="md:hidden flex gap-2 overflow-x-auto pb-2 -mx-4 px-4 scrollbar-none">
          {DOMAINS.map(({ id, label, Icon, gradient }) => {
            const isActive = id === activeId;
            return (
              <button
                key={id}
                onClick={() => setActiveId(id)}
                className={cn(
                  "flex items-center gap-2 px-3.5 py-2.5 rounded-xl border text-left shrink-0 transition-all duration-200 cursor-pointer",
                  isActive
                    ? "border-primary/40 bg-primary/10"
                    : "border-border-default bg-surface-overlay",
                )}
              >
                <div
                  className={cn(
                    "w-6 h-6 rounded-md bg-linear-to-br flex items-center justify-center shrink-0",
                    gradient,
                  )}
                >
                  <Icon size={12} className="text-[#fff]" strokeWidth={1.5} />
                </div>
                <span
                  className={cn(
                    "text-14 font-medium whitespace-nowrap",
                    isActive ? "text-ink" : "text-text-secondary",
                  )}
                >
                  {label}
                </span>
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-5 items-start">
          {/* Left: desktop-only vertical tab list */}
          <div className="hidden md:flex flex-col gap-2">
            {DOMAINS.map(({ id, label, Icon, gradient, description }) => {
              const isActive = id === activeId;
              return (
                <button
                  key={id}
                  onClick={() => setActiveId(id)}
                  className={cn(
                    "group relative overflow-hidden flex flex-col gap-5 px-4 py-4.5 rounded-xl border text-left transition-all duration-200 cursor-pointer",
                    isActive
                      ? "border-primary/40 bg-surface-1/80"
                      : "border-border-default bg-surface-overlay/40 hover:border-border-strong hover:bg-surface-hover",
                  )}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={cn(
                        "w-8 h-8 rounded-lg bg-linear-to-br flex items-center justify-center shrink-0 shadow-sm",
                        gradient,
                      )}
                    >
                      <Icon
                        size={15}
                        className="text-[#fff]"
                        strokeWidth={1.5}
                      />
                    </div>
                    <span
                      className={cn(
                        "text-14 font-medium transition-colors",
                        isActive
                          ? "text-ink"
                          : "text-text-secondary group-hover:text-ink",
                      )}
                    >
                      {label}
                    </span>
                    {isActive && (
                      <ChevronRight
                        size={15}
                        className="ml-auto text-primary shrink-0"
                      />
                    )}
                  </div>
                  {isActive && (
                    <p className="text-14 text-text-secondary">{description}</p>
                  )}

                  {isActive && (
                    <div
                      className="absolute right-0 top-0 w-36 h-24 pointer-events-none"
                      style={{
                        background:
                          "radial-gradient(ellipse at right top, rgba(0,123,255,0.10) 0%, transparent 40%)",
                      }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Right: detail panel */}
          <div className="max-md:mt-5 relative overflow-hidden rounded-2xl border border-border-default bg-[#ffffff] shadow-[0_2px_24px_rgba(0,60,200,0.06)] max-md:px-3 p-8">
            <div
              className="absolute right-0 top-0 w-80 h-64 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse at right top, rgba(0,123,255,0.07) 0%, transparent 65%)",
              }}
            />
            {/* Domain header */}
            <div className="flex items-center gap-4 mb-6">
              <div
                className={cn(
                  "w-14 h-14 rounded-2xl bg-linear-to-br flex items-center justify-center shrink-0 shadow-lg",
                  active.gradient,
                )}
              >
                <active.Icon
                  size={24}
                  className="text-[#fff]"
                  strokeWidth={1.5}
                />
              </div>
              <div>
                <h3 className="text-ink font-bold font-heading text-20 leading-tight">
                  {active.label}
                </h3>
                <p className="text-text-secondary text-14 mt-0.5">
                  Build real-world expertise, guided by industry professionals.
                </p>
              </div>
            </div>

            {/* Highlights */}
            {/*<ul className="flex flex-col gap-2 mb-6">
              {HIGHLIGHTS.map((h) => (
                <li
                  key={h}
                  className="flex items-center gap-2.5 text-14 text-text-secondary"
                >
                  <CheckCircle2 size={15} className="text-primary shrink-0" />
                  {h}
                </li>
              ))}
            </ul>*/}

            {/* Brochure download */}
            <ButtonLink href={`/brochures/${active.id}.pdf`} download>
              <Download size={15} />
              Download Brochure
            </ButtonLink>

            {/* Divider */}
            <div className="h-px bg-border-subtle my-6" />

            {/* Counsellor form */}
            <h6 className="text-ink font-bold font-heading text-18 mb-4">
              Get in touch with a counsellor
            </h6>
            <CounsellorForm domain={active.label} />
          </div>
        </div>
      </Container>
    </section>
  );
}
