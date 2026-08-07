import Image, { StaticImageData } from "next/image";
import Container from "@/components/layout/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import ImagePlaceholder from "@/assets/images/placeholders/image-placeholder.svg";
import { HighlightItem } from "./highlightItem";
import { Reveal } from "@/components/ui/motion/reveal";
import { RevealHeading } from "@/components/ui/motion/reveal-heading";


type Props = {
  heading: string
  description: string
  eyebrow: string
  highlights: string[]
  imageSrc: StaticImageData
}

export const ColumnHighlightsSection = ({ heading, description, eyebrow, highlights, imageSrc }: Props) => {
  return (
    <section className="py-19 md:py-120 border-b border-border-stroke">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col lg:max-w-xl">
            <div className="flex flex-col max-w-xl">
              <Eyebrow variant="default" text={eyebrow} />

              <RevealHeading
                text={heading}
                as="h2"
                className="text-h3 font-heading font-semibold mt-5"
              />

              <Reveal direction="up" distance={16} delay={0.3} duration={0.5}>
                <p className="text-16 text-text-gray mt-4">
                  {description}
                </p>
              </Reveal>

              <Reveal  direction="up" distance={16} delay={0.35} duration={0.6}>
                <div className="flex flex-col gap-3 mt-5.5">
                  {highlights.map((text) => (
                    <HighlightItem key={text} text={text} />
                  ))}
                </div>
              </Reveal>
            </div>
          </div>

          <Reveal direction="up" distance={16} delay={0.35} duration={0.6}>
            <div className="relative rounded-3xl overflow-hidden">
              <Image
                src={imageSrc}
                alt="Column highlights placeholder"
                className="w-full h-auto lg:max-w-xl object-contain"
                width={576} height={344}
              />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
};
