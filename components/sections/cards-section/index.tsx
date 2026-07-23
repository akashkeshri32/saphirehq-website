import Container from "@/components/layout/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { cn } from "@/lib/utils/tailwind";
import { FeatureCard, type FeatureCardData } from "./feature-card";

type Props = {
  eyebrow: string;
  heading: string;
  description: string;
  cards: FeatureCardData[];
  id?: string;
  className?: string;
};

export const CardsSection = ({
  eyebrow,
  heading,
  description,
  cards,
  id,
  className,
}: Props) => {
  return (
    <section id={id} className={cn("py-120", className)}>
      <Container>
        <div className="max-w-160 flex flex-col gap-3.25">
          <Eyebrow variant="default" text={eyebrow} />
          <h2 className="text-h2-mobile lg:text-h2 font-heading font-semibold">{heading}</h2>
          <p className="text-17 text-text-gray">{description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-32 mt-12">
          {cards.map((card) => (
            <FeatureCard key={card.heading} {...card} />
          ))}
        </div>
      </Container>
    </section>
  );
};
