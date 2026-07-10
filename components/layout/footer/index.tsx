import Container from "@/components/layout/container";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import NavLogo from "@/assets/images/nav-logo.png";

const DOMAINS = [
  { label: "Data Analyst", href: "/#data-analyst" },
  { label: "Business Analyst", href: "/#business-analyst" },
  { label: "Data Science", href: "/#data-science" },
  { label: "AI / ML", href: "/#ai-ml" },
  { label: "UI/UX Designer", href: "/#ui-ux" },
  { label: "Frontend", href: "/#frontend" },
  { label: "Backend", href: "/#backend" },
  { label: "Full Stack", href: "/#full-stack" },
];

const LINKS = [
  { label: "Domains", href: "/#domains" },
  { label: "Instructors", href: "/#instructors" },
  { label: "About Us", href: "/about" },
  { label: "Apply Now", href: "/?apply-now" },
];

const LEGAL = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
  { label: "Refund & Cancellation Policy", href: "/refund-and-cancellation-policy" },
  { label: "Code of Conduct", href: "/code-of-conduct" },
];

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="w-9 h-9 rounded-xl border border-border-default bg-surface-overlay flex items-center justify-center text-text-secondary hover:border-primary/40 hover:text-ink hover:bg-primary/10 transition-all duration-200"
    >
      {children}
    </a>
  );
}

export default function Footer() {
  return (
    <footer className="relative border-t border-border-default mt-8">
      {/* Faint top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-linear-to-r from-transparent via-primary/40 to-transparent" />

      <Container>
        {/* Main grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 py-16">
          {/* Col 1 — Brand */}
          <div className="flex flex-col gap-5">
            <div>
              <Link href={"/"}>
                <figure>
                  <Image
                    src={NavLogo}
                    alt="saphireiq logo"
                    height={50}
                    objectFit="contain"
                  />
                </figure>
              </Link>
              <p className="text-text-secondary text-14 mt-3 leading-relaxed">
                Bridging the gap between learning and employment through
                real-world projects, mentorship, and industry-ready experience.
              </p>
            </div>

            {/* Social links */}
            <div className="flex gap-2.5">
              <SocialLink href="https://x.com/saphirehq" label="X (Twitter)">
                <svg
                  viewBox="0 0 24 24"
                  className="w-4 h-4 fill-current"
                  aria-hidden="true"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.259 5.63L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
                </svg>
              </SocialLink>

              <SocialLink
                href="https://linkedin.com/company/saphirehq"
                label="LinkedIn"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-4 h-4 fill-current"
                  aria-hidden="true"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </SocialLink>

              <SocialLink
                href="https://instagram.com/saphirehq"
                label="Instagram"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-4 h-4 fill-current"
                  aria-hidden="true"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                </svg>
              </SocialLink>
            </div>
          </div>

          {/* Col 2 — Quick Links */}
          <div>
            <p className="text-ink font-semibold font-heading text-16 mb-5">
              Quick Links
            </p>
            <ul className="flex flex-col gap-3">
              {LINKS.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-text-secondary text-14 hover:text-ink transition-colors duration-200 inline-flex items-center gap-1.5 group"
                  >
                    {label}
                    <ArrowUpRight
                      size={13}
                      className="opacity-0 -translate-y-0.5 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Domains */}
          <div>
            <p className="text-ink font-semibold font-heading text-16 mb-5">
              Domains
            </p>
            <ul className="flex flex-col gap-3">
              {DOMAINS.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-text-secondary text-14 hover:text-ink transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Contact */}
          <div>
            <p className="text-ink font-semibold font-heading text-16 mb-5">
              Get In Touch
            </p>
            <ul className="flex flex-col gap-4">
              <li>
                <a
                  href="mailto:hello@saphirehq.com"
                  className="flex items-center gap-3 text-text-secondary text-14 hover:text-ink transition-colors duration-200 group"
                >
                  <span className="w-8 h-8 rounded-lg border border-border-default bg-surface-overlay flex items-center justify-center shrink-0 group-hover:border-primary/40 transition-colors">
                    <Mail size={14} />
                  </span>
                  hello@saphirehq.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+919999999999"
                  className="flex items-center gap-3 text-text-secondary text-14 hover:text-ink transition-colors duration-200 group"
                >
                  <span className="w-8 h-8 rounded-lg border border-border-default bg-surface-overlay flex items-center justify-center shrink-0 group-hover:border-primary/40 transition-colors">
                    <Phone size={14} />
                  </span>
                  +91 99999 99999
                </a>
              </li>
              <li className="flex items-center gap-3 text-text-secondary text-14">
                <span className="w-8 h-8 rounded-lg border border-border-default bg-surface-overlay flex items-center justify-center shrink-0">
                  <MapPin size={14} />
                </span>
                <span className="leading-relaxed">India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-border-subtle" />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-6">
          <p className="text-text-secondary text-14">
            © {new Date().getFullYear()} SaphireHQ. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            {LEGAL.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className="text-text-secondary text-14 hover:text-ink transition-colors duration-200"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
