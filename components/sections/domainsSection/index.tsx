import Link from "next/link";
import Container from "@/components/layout/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { DOMAINS } from "@/lib/data/domains";
import IconPlaceholder from "@/assets/images/placeholders/icon-placeholder-dark.svg";
import { DomainCard } from "./domainCard";

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
    <section  id="domains" className="py-120 bg-bg-light">
      <Container>
        <div className=" flex w-full flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div className="flex flex-col gap-3.25 max-w-160">
            <Eyebrow variant="default" text="Choose Your Path" />
            <h2 className="text-h2-mobile lg:text-h2 font-heading font-semibold">
              Eight paths. One outcome: hired
            </h2>
          </div>

          <Link
            href="/#talk-to-mentor"
            className="text-14 font-semibold text-blue-primary whitespace-nowrap hover:opacity-80"
          >
            Not sure which domain fits you? Talk to a mentor →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-11">
          {DOMAINS.map((domain, index) => (
            <DomainCard
              key={domain.id}
              icon={domain.Icon}
              heading={domain.label}
              tagline={domain.tagline}
              primaryHref="?apply-now"
              secondaryHref={`/domains/${domain.id}`}
              className={BORDER_TOP_COLORS[index]}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};
