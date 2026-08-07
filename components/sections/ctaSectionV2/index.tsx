import Container from "@/components/layout/container";
import { ButtonLink } from "@/components/ui/button/button-link";
import { RevealHeading } from "@/components/ui/motion/reveal-heading";
import { Reveal } from "@/components/ui/motion/reveal";

type Props = {
  heading: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
};

export const CtaSectionV2 = ({ heading, description, ctaLabel, ctaHref }: Props) => {
  return (
    <section className="py-15 md:py-22 px-4">
      <Container  className="bg-black py-15 rounded-2xl md:rounded-3xl px-7.5 md:px-14">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div className="max-w-160">
            <RevealHeading
              as="h2"
              text={heading}
              className="text-h2-mobile lg:text-h2 font-heading font-semibold text-white"
            />
            <Reveal direction="up" distance={16} delay={0.15}>
              <p className="text-17 text-text-gray mt-4">{description}</p>
            </Reveal>
          </div>

          <Reveal direction="up" distance={16} delay={0.25}>
            <ButtonLink href={ctaHref} variant="default" className="shrink-0">
              {ctaLabel}
            </ButtonLink>
          </Reveal>
        </div>
      </Container>
    </section>
  );
};
