import Container from "@/components/layout/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { cn } from "@/lib/utils/tailwind";
import { RevealHeading } from "@/components/ui/motion/reveal-heading";
import { Reveal } from "@/components/ui/motion/reveal";
import { FeatureCard, type FeatureCardData } from "./feature-card";

type Props = {
  eyebrow: string;
  heading: string;
  description: string;
  cards: FeatureCardData[];
  id?: string;
  className?: string;
  showHoverAnim? : boolean
};

export const CardsSection = ({
  eyebrow,
  heading,
  description,
  cards,
  id,
  className,
  showHoverAnim = true
}: Props) => {
  return (
    <section id={id} className={cn("py-19 md:py-120", className)}>
      <Container>
        <div className="max-w-160 flex flex-col gap-3.25">
          <Eyebrow variant="default" text={eyebrow} />
          <RevealHeading
            as="h2"
            text={heading}
            className="text-h2-mobile lg:text-h2 font-heading font-semibold"
          />
          <Reveal direction="up" distance={16} delay={0.45} duration={0.5}>
            <p className="text-17 text-text-gray">{description}</p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-32 mt-12">
          {cards.map((card, index) => (
            <Reveal key={card.heading} direction="up" delay={(index % 3) * 0.1} hover={showHoverAnim} className="h-full [&>*]:h-full">
              <FeatureCard {...card} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
};
