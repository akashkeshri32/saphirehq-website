import Link from "next/link";
import Container from "@/components/layout/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { DomainCard } from "./domainCard";
import DOMAINS from "@/lib/data/domains";
import { RevealHeading } from "@/components/ui/motion/reveal-heading";
import { Reveal } from "@/components/ui/motion/reveal";
import { cn } from "@/lib/utils/tailwind";

const BORDER_TOP_COLORS = [
  "border-t-blue-primary",
  "border-t-purple",
  "border-t-green",
  "border-t-blue-secondary",
  "border-t-purple",
  "border-t-green",
  "border-t-blue-primary",
  "border-t-blue-secondary",
];

export const DomainsSection = () => {
  return (
    <section  id="domains" className="py-19 md:py-120 bg-bg-light">
      <Container>
        <div className=" flex w-full flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div className="flex flex-col gap-3.25 max-w-160">
            <Eyebrow variant="default" text="Choose Your Path" />
            <RevealHeading
              as="h2"
              text="Eight paths. One outcome: hired"
              className="text-h2-mobile lg:text-h2 font-heading font-semibold"
            />
          </div>

          <Link
            href="/enroll-now"
            className="text-14 font-semibold text-blue-primary whitespace-nowrap hover:opacity-80"
          >
            Not sure which domain fits you? Talk to a mentor →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-11">
          {DOMAINS.map((domain, index) => (
            <Reveal key={domain.id} direction="up" delay={(index % 4) * 0.08} className="h-full">
              <DomainCard
                icon={domain.Icon}
                heading={domain.label}
                tagline={domain.tagline}
                primaryHref={`/enroll-now?domain=${domain.id}`}
                secondaryHref={`/domains/${domain.id}`}
                className={cn(BORDER_TOP_COLORS[index], "h-full")}
              />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
};
