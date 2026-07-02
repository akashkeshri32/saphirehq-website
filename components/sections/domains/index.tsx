import Container from "@/components/layout/container";
import CounsellorForm from "./cousellor-form";
import DomainCard from "./domain-card";
import { DOMAINS } from "@/lib/data/domains";

export default function DomainsSection() {
  return (
    <section id="domains" className="py-10 md:py-24">
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

        <section className="pb-24" id="domains">
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {DOMAINS.map((domain, i) => (
                <DomainCard key={domain.id} {...domain} index={i} />
              ))}
            </div>
          </Container>
        </section>
      </Container>
    </section>
  );
}
