import Layout from "@/components/layout/layout";
import Container from "@/components/layout/container";
import { ButtonLink } from "@/components/ui/button/button-link";
import { Clock, Zap, Download } from "lucide-react";
import { DOMAINS, WHY_ITEMS } from "@/lib/data/domains";
import type { DomainData } from "@/lib/data/domains";

type Domain = DomainData;

/* ─── Domain Card ────────────────────────────────────────────────────────── */

function DomainCard({
  id,
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
  index,
}: Domain & { index: number }) {
  return (
    <div
      className="group relative overflow-hidden rounded-2xl border border-border-default bg-[#ffffff] shadow-[0_2px_24px_rgba(0,60,200,0.06)] flex flex-col animate-fade-in-up"
      style={{ animationDelay: `${index * 70}ms` }}
    >
      {/* Gradient top accent strip */}
      <div className={`absolute top-0 left-0 right-0 h-[2px] bg-linear-to-r ${gradient}`} />

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
              <Icon size={24} className="text-[#fff]" strokeWidth={1.5} />
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
        <p className="text-text-secondary text-16 leading-relaxed">{description}</p>

        <div className="h-px bg-border-subtle" />

        {/* Skills */}
        <div>
          <p className="text-ink font-semibold text-xs uppercase tracking-[0.1em] mb-3">
            What you&apos;ll learn
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
        <div>
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
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-3 mt-auto border-t border-border-subtle">
          <div className="flex items-center gap-1.5 text-text-secondary text-14">
            <Clock size={13} className="shrink-0 text-primary opacity-80" />
            {duration}
          </div>
          <div className="flex items-center gap-2">
            <a
              href={`/brochures/${id}.pdf`}
              className="inline-flex items-center gap-1.5 text-14 font-semibold px-3.5 py-2 rounded-xl border border-border-default text-text-secondary hover:border-primary/40 hover:text-ink transition-all duration-200"
            >
              <Download size={12} />
              Brochure
            </a>
            <a
              href={`/domains/${id}`}
              className="inline-flex items-center gap-1.5 text-14 font-semibold px-3.5 py-2 rounded-xl bg-linear-to-r from-[#1437FF] to-[#6A2EFF] text-[#fff] hover:opacity-90 transition-opacity"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Page ───────────────────────────────────────────────────────────────── */

export default function DomainsPage() {
  return (
    <div className="bg-canvas relative overflow-x-hidden min-h-screen">
      {/* Page background gradient orbs */}
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
        {/* ── Hero ──────────────────────────────────── */}
        <section className="pt-36 pb-16 text-center">
          <Container>
            <div className="max-w-3xl mx-auto animate-fade-in-up">
              {/* Badge */}
              <div
                className="mb-7 inline-flex items-center gap-2 px-4 py-2 rounded-full text-14 font-semibold"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(20,55,255,0.08) 0%, rgba(154,45,255,0.10) 100%)",
                  border: "1px solid rgba(106,46,255,0.22)",
                  color: "#6A2EFF",
                }}
              >
                <Zap size={13} className="shrink-0" />
                8 Programs &middot; Real Projects &middot; Certified
              </div>

              <h1 className="text-h1-mobile md:text-h1 text-ink font-bold font-heading mb-6 leading-tight">
                Choose Your Domain.{" "}
                <span
                  style={{
                    background:
                      "linear-gradient(135deg, #1437FF 0%, #6A2EFF 50%, #9A2DFF 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Start Building.
                </span>
              </h1>

              <p className="text-text-secondary text-16 md:text-18 leading-relaxed max-w-2xl mx-auto">
                Every program is structured around real-world projects, expert
                mentorship, and industry-relevant skills. Pick the domain that
                excites you — we&apos;ll guide the rest.
              </p>

              {/* Stats */}
              <div className="mt-12 flex flex-wrap justify-center gap-x-10 gap-y-6">
                {[
                  { value: "8", label: "Domain Tracks" },
                  { value: "500+", label: "Students Trained" },
                  { value: "50+", label: "Real Projects" },
                  { value: "4.9 / 5", label: "Average Rating" },
                ].map(({ value, label }) => (
                  <div key={label} className="text-center">
                    <p className="text-ink font-bold text-h2-mobile leading-none">
                      {value}
                    </p>
                    <p className="text-text-secondary text-14 mt-1.5">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* ── Domains Grid ──────────────────────────── */}
        <section className="pb-24" id="domains">
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {DOMAINS.map((domain, i) => (
                <DomainCard key={domain.id} {...domain} index={i} />
              ))}
            </div>
          </Container>
        </section>

        {/* ── Why Sapphire IQ ───────────────────────── */}
        <section className="py-20 border-y border-border-subtle">
          <Container>
            <div className="text-center mb-14">
              <p
                className="text-14 font-bold uppercase tracking-[0.12em] mb-4"
                style={{
                  background: "linear-gradient(90deg, #1437FF 0%, #6A2EFF 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Why Sapphire IQ
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
              {WHY_ITEMS.map(({ Icon, gradient, title, description }) => (
                <div
                  key={title}
                  className="group relative overflow-hidden rounded-2xl border border-border-default bg-[#ffffff] shadow-[0_2px_20px_rgba(0,60,200,0.05)] p-8 text-center"
                >
                  <div
                    className={`w-14 h-14 rounded-2xl bg-linear-to-br ${gradient} flex items-center justify-center mx-auto mb-5 shadow-lg`}
                  >
                    <Icon size={24} className="text-[#fff]" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-ink font-bold font-heading text-20 mb-3">
                    {title}
                  </h3>
                  <p className="text-text-secondary text-16 leading-relaxed">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* ── CTA ──────────────────────────────────── */}
        <section className="py-20">
          <Container>
            <div className="relative overflow-hidden rounded-3xl border border-border-default bg-[#ffffff] shadow-[0_4px_48px_rgba(20,55,255,0.07)] px-8 py-14 md:p-16 text-center">
              {/* Radial glow */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse at 50% 0%, rgba(20,55,255,0.06) 0%, transparent 65%)",
                }}
              />
              {/* Top gradient line */}
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
                    background: "linear-gradient(90deg, #6A2EFF 0%, #9A2DFF 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Not Sure Yet?
                </p>
                <h2 className="text-ink font-bold font-heading text-h2-mobile md:text-h2 mb-4">
                  Let&apos;s Find the Right Fit for You
                </h2>
                <p className="text-text-secondary text-16 md:text-18 mb-8 leading-relaxed">
                  Unsure which domain matches your strengths and career goals?
                  Talk to one of our counsellors for a free 1:1 session — we&apos;ll
                  point you in the right direction.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <ButtonLink href="/?apply-now">Apply Now</ButtonLink>
                  <ButtonLink variant="outline" href="#domains">
                    Browse Domains
                  </ButtonLink>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </Layout>
    </div>
  );
}
