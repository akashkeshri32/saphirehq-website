import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Layout from "@/components/layout/layout";
import Container from "@/components/layout/container";
import CounsellorForm from "@/components/sections/domains/cousellor-form";
import {
  DOMAINS,
  WHY_ITEMS,
  CAREER_ACCELERATOR_STEPS,
} from "@/lib/data/domains";
import { Clock, Download, ArrowLeft, Zap, CheckCircle2 } from "lucide-react";

/* ─── Static params ─────────────────────────────────────────────────────── */

export function generateStaticParams() {
  return DOMAINS.map((d) => ({ slug: d.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const domain = DOMAINS.find((d) => d.id === slug);
  if (!domain) return {};
  return {
    title: `${domain.label} Program — SaphireIQ`,
    description: domain.description,
  };
}

/* ─── Page ───────────────────────────────────────────────────────────────── */

export default async function DomainInnerPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const domain = DOMAINS.find((d) => d.id === slug);
  if (!domain) notFound();

  const {
    label,
    Icon,
    gradient,
    glowColor,
    tagline,
    description,
    skills,
    projects,
    duration,
    popular,
    id,
  } = domain;

  return (
    <div className="bg-canvas relative overflow-x-hidden min-h-screen">
      {/* Background orbs */}
      <div
        className="fixed top-0 right-0 w-[600px] h-[600px] pointer-events-none -z-0"
        style={{
          background:
            "radial-gradient(ellipse at 85% 0%, rgba(20,55,255,0.10) 0%, rgba(106,46,255,0.06) 45%, transparent 65%)",
        }}
      />
      <div
        className="fixed top-0 left-0 w-[600px] h-[600px] pointer-events-none -z-0"
        style={{
          background:
            "radial-gradient(ellipse at 15% 0%, rgba(154,45,255,0.08) 0%, rgba(201,166,255,0.04) 45%, transparent 65%)",
        }}
      />

      <Layout>
        {/* ── Hero ─────────────────────────────────────── */}
        <section className="pt-32 pb-16">
          <Container>
            {/* Back link */}
            <a
              href="/domains"
              className="inline-flex items-center gap-2 text-text-secondary text-14 font-medium mb-10 hover:text-ink transition-colors group"
            >
              <ArrowLeft
                size={15}
                className="group-hover:-translate-x-0.5 transition-transform"
              />
              All Domains
            </a>

            <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-8 items-start">
              {/* Left — copy */}
              <div className="animate-fade-in-up">
                {/* Badge row */}
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  <div
                    className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-14 font-bold"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(20,55,255,0.08) 0%, rgba(154,45,255,0.10) 100%)",
                      border: "1px solid rgba(106,46,255,0.22)",
                      color: "#6A2EFF",
                    }}
                  >
                    <div
                      className={`w-5 h-5 rounded-md bg-linear-to-br ${gradient} flex items-center justify-center`}
                    >
                      <Icon size={11} className="text-white" strokeWidth={2} />
                    </div>
                    {label}
                  </div>
                  {popular && (
                    <div
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(20,55,255,0.08) 0%, rgba(154,45,255,0.10) 100%)",
                        border: "1px solid rgba(106,46,255,0.22)",
                        color: "#6A2EFF",
                      }}
                    >
                      <Zap size={10} />
                      Popular Track
                    </div>
                  )}
                </div>

                <h1 className="text-h1-mobile md:text-h1 text-ink font-bold font-heading mb-4">
                  {tagline.split(" ").slice(0, -1).join(" ")}{" "}
                  <span
                    style={{
                      background: `linear-gradient(135deg, #1437FF 0%, #6A2EFF 100%)`,
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {tagline.split(" ").slice(-1)[0]}
                  </span>
                </h1>

                <p className="text-text-secondary text-16 md:text-18 leading-relaxed mb-8">
                  {description}
                </p>

                {/* Duration + skills count */}
                <div className="flex flex-wrap gap-4 mb-8">
                  <div className="flex items-center gap-2 text-text-secondary text-14 bg-surface-2 border border-border-subtle px-4 py-2.5 rounded-xl">
                    <Clock
                      size={14}
                      className="text-primary opacity-80 shrink-0"
                    />
                    <span className="font-medium">{duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-text-secondary text-14 bg-surface-2 border border-border-subtle px-4 py-2.5 rounded-xl">
                    <CheckCircle2
                      size={14}
                      className="text-primary opacity-80 shrink-0"
                    />
                    <span className="font-medium">
                      {skills.length} core skills
                    </span>
                  </div>
                </div>

                {/* CTA buttons */}
                <div className="flex flex-wrap gap-3">
                  <a
                    href={`/brochures/${id}.pdf`}
                    download
                    className="inline-flex items-center gap-2 text-14 font-semibold px-5 py-3 rounded-xl border border-border-default text-text-secondary hover:border-primary/40 hover:text-ink transition-all duration-200"
                  >
                    <Download size={14} />
                    Download Brochure
                  </a>
                  <a
                    href="#counsellor-form"
                    className="inline-flex items-center gap-2 text-14 font-semibold px-5 py-3 rounded-xl bg-linear-to-r from-[#1437FF] to-[#6A2EFF] text-[#fff] hover:opacity-90 transition-opacity"
                  >
                    Talk to a Counsellor
                  </a>
                </div>
              </div>

              {/* Right — counsellor form */}
              <div
                id="counsellor-form"
                className="relative overflow-hidden rounded-2xl border border-border-default bg-[#ffffff] shadow-[0_4px_40px_rgba(20,55,255,0.08)] animate-fade-in-up"
                style={{ animationDelay: "80ms" }}
              >
                {/* Gradient top strip */}
                <div
                  className={`absolute top-0 left-0 right-0 h-[2px] bg-linear-to-r ${gradient}`}
                />
                {/* Hover glow */}
                <div
                  className="absolute top-0 right-0 w-64 h-56 pointer-events-none"
                  style={{
                    background: `radial-gradient(ellipse at right top, ${glowColor} 0%, transparent 70%)`,
                  }}
                />

                <div className="relative z-10 p-7 md:p-8">
                  <div className="mb-6">
                    <h2 className="text-ink font-bold font-heading text-20 mb-1.5">
                      Talk to a Counsellor
                    </h2>
                    <p className="text-text-secondary text-14">
                      Get your questions answered and find out if this track is
                      the right fit for you.
                    </p>
                  </div>
                  <CounsellorForm domain={label} />
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* ── What You'll Learn + Sample Projects ──────── */}
        <section className="py-16 border-t border-border-subtle">
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Skills */}
              <div className="relative overflow-hidden rounded-2xl border border-border-default bg-[#ffffff] shadow-[0_2px_20px_rgba(0,60,200,0.05)] p-8">
                <div
                  className={`absolute top-0 left-0 right-0 h-[2px] bg-linear-to-r ${gradient}`}
                />
                <h2 className="text-ink font-bold font-heading text-20 mb-2">
                  What You&apos;ll Learn
                </h2>
                <p className="text-text-secondary text-14 mb-6">
                  Core skills and tools you&apos;ll master in this program.
                </p>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-xl text-14 font-medium bg-surface-2 text-text-secondary border border-border-subtle"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Projects */}
              <div className="relative overflow-hidden rounded-2xl border border-border-default bg-[#ffffff] shadow-[0_2px_20px_rgba(0,60,200,0.05)] p-8">
                <div
                  className={`absolute top-0 left-0 right-0 h-[2px] bg-linear-to-r ${gradient}`}
                />
                <h2 className="text-ink font-bold font-heading text-20 mb-2">
                  Sample Projects
                </h2>
                <p className="text-text-secondary text-14 mb-6">
                  Real deliverables you&apos;ll add to your portfolio.
                </p>
                <ul className="space-y-4">
                  {projects.map((project, i) => (
                    <li key={project} className="flex items-start gap-3">
                      <div
                        className={`shrink-0 w-7 h-7 rounded-lg bg-linear-to-br ${gradient} flex items-center justify-center text-[#fff] text-xs font-bold mt-0.5`}
                      >
                        {i + 1}
                      </div>
                      <div>
                        <p className="text-ink font-semibold text-16">
                          {project}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
                <a
                  href={`/brochures/${id}.pdf`}
                  download
                  className="mt-6 inline-flex items-center gap-2 text-14 font-semibold text-text-secondary hover:text-ink transition-colors"
                >
                  <Download size={13} className="text-primary opacity-70" />
                  Full syllabus in brochure
                </a>
              </div>
            </div>
          </Container>
        </section>

        {/* ── 8-Step Career Accelerator ─────────────────── */}
        <section className="py-20 border-t border-border-subtle">
          <Container>
            <div className="text-center mb-14">
              <p
                className="text-14 font-bold uppercase tracking-[0.12em] mb-4"
                style={{
                  background:
                    "linear-gradient(90deg, #1437FF 0%, #6A2EFF 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Your Journey
              </p>
              <h2 className="text-ink font-bold font-heading text-h2-mobile md:text-h2 mb-4">
                The 8-Step Career Accelerator
              </h2>
              <p className="text-text-secondary text-16 md:text-18 max-w-xl mx-auto">
                A structured path from learning to landing — every step is
                designed to move you closer to your first (or next) role.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {CAREER_ACCELERATOR_STEPS.map(
                ({ step, Icon: StepIcon, title, description: stepDesc }, i) => (
                  <div
                    key={step}
                    className="group relative overflow-hidden rounded-2xl border border-border-default bg-[#ffffff] shadow-[0_2px_16px_rgba(0,60,200,0.05)] p-6 flex gap-5 items-start animate-fade-in-up"
                    style={{ animationDelay: `${i * 60}ms` }}
                  >
                    {/* Hover glow */}
                    <div
                      className="absolute top-0 right-0 w-48 h-40 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        background:
                          "radial-gradient(ellipse at right top, rgba(20,55,255,0.08) 0%, transparent 70%)",
                      }}
                    />

                    {/* Step number + icon */}
                    <div className="relative z-10 shrink-0">
                      <div
                        className={`w-12 h-12 rounded-2xl bg-linear-to-br ${gradient} flex items-center justify-center shadow-md`}
                      >
                        <StepIcon
                          size={20}
                          className="text-[#fff]"
                          strokeWidth={1.5}
                        />
                      </div>
                      <div
                        className="absolute -top-2 -right-2 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold text-[#fff]"
                        style={{
                          background:
                            "linear-gradient(135deg, #1437FF 0%, #6A2EFF 100%)",
                        }}
                      >
                        {step}
                      </div>
                    </div>

                    <div className="relative z-10">
                      <h3 className="text-ink font-bold font-heading text-16 mb-1.5 leading-snug">
                        {title}
                      </h3>
                      <p className="text-text-secondary text-14 leading-relaxed">
                        {stepDesc}
                      </p>
                    </div>
                  </div>
                ),
              )}
            </div>
          </Container>
        </section>

        {/* ── Why SaphireIQ ─────────────────────────────── */}
        <section className="py-20 border-t border-border-subtle">
          <Container>
            <div className="text-center mb-14">
              <p
                className="text-14 font-bold uppercase tracking-[0.12em] mb-4"
                style={{
                  background:
                    "linear-gradient(90deg, #1437FF 0%, #6A2EFF 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Why SaphireIQ
              </p>
              <h2 className="text-ink font-bold font-heading text-h2-mobile md:text-h2 mb-4">
                More Than Just a Certificate
              </h2>
              <p className="text-text-secondary text-16 md:text-18 max-w-xl mx-auto">
                Every element of our programs is designed to give you a genuine
                edge — not just knowledge, but evidence of what you can do.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {WHY_ITEMS.map(
                ({
                  Icon: WhyIcon,
                  gradient: whyGradient,
                  title,
                  description: whyDesc,
                }) => (
                  <div
                    key={title}
                    className="relative overflow-hidden rounded-2xl border border-border-default bg-[#ffffff] shadow-[0_2px_20px_rgba(0,60,200,0.05)] p-8 text-center"
                  >
                    <div
                      className={`w-14 h-14 rounded-2xl bg-linear-to-br ${whyGradient} flex items-center justify-center mx-auto mb-5 shadow-lg`}
                    >
                      <WhyIcon
                        size={24}
                        className="text-[#fff]"
                        strokeWidth={1.5}
                      />
                    </div>
                    <h3 className="text-ink font-bold font-heading text-20 mb-3">
                      {title}
                    </h3>
                    <p className="text-text-secondary text-16 leading-relaxed">
                      {whyDesc}
                    </p>
                  </div>
                ),
              )}
            </div>
          </Container>
        </section>

        {/* ── CTA ───────────────────────────────────────── */}
        <section className="py-20">
          <Container>
            <div className="relative overflow-hidden rounded-3xl border border-border-default bg-[#ffffff] shadow-[0_4px_48px_rgba(20,55,255,0.07)] px-8 py-14 md:p-16 text-center">
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse at 50% 0%, rgba(20,55,255,0.06) 0%, transparent 65%)",
                }}
              />
              <div
                className="absolute top-0 left-0 right-0 h-[2px]"
                style={{
                  background:
                    "linear-gradient(90deg, transparent 0%, rgba(20,55,255,0.5) 30%, rgba(154,45,255,0.5) 70%, transparent 100%)",
                }}
              />

              <div className="relative z-10 max-w-2xl mx-auto">
                <p
                  className="text-14 font-bold uppercase tracking-[0.12em] mb-4"
                  style={{
                    background:
                      "linear-gradient(90deg, #6A2EFF 0%, #9A2DFF 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Ready to Get Started?
                </p>
                <h2 className="text-ink font-bold font-heading text-h2-mobile md:text-h2 mb-4">
                  Your Career Starts Here
                </h2>
                <p className="text-text-secondary text-16 md:text-18 mb-8 leading-relaxed">
                  Still have questions about the {label} program? Talk to one of
                  our counsellors — they&apos;ll walk you through the
                  curriculum, projects, and placement support.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <a
                    href="#counsellor-form"
                    className="inline-flex items-center justify-center gap-2 font-semibold px-6 py-3 rounded-xl bg-linear-to-r from-[#1437FF] to-[#6A2EFF] text-[#fff] hover:opacity-90 transition-opacity"
                  >
                    Talk to a Counsellor
                  </a>
                  <a
                    href={`/brochures/${id}.pdf`}
                    download
                    className="inline-flex items-center justify-center gap-2 font-semibold px-6 py-3 rounded-xl border border-primary/60 text-ink hover:bg-canvas-tint transition-colors"
                  >
                    <Download size={15} />
                    Download Brochure
                  </a>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </Layout>
    </div>
  );
}
