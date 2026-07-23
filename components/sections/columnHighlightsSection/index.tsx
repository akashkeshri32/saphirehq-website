import Image, { StaticImageData } from "next/image";
import Container from "@/components/layout/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import ImagePlaceholder from "@/assets/images/placeholders/image-placeholder.svg";
import { HighlightItem } from "./highlightItem";


type Props = {
  heading : string
  description : string
  eyebrow : string
  highlights : string[]
  imageSrc : StaticImageData
}

export const ColumnHighlightsSection = ({ heading, description, eyebrow, highlights, imageSrc } : Props) => {
  return (
    <section className="py-120 border-b border-border-stroke">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col max-w-xl">
            <Eyebrow variant="default" text={eyebrow} />

            <h2 className="text-h3 font-heading font-semibold mt-5">
              {heading}
            </h2>

            <p className="text-16 text-text-gray mt-4">
             {description}
            </p>

            <div className="flex flex-col gap-3 mt-5.5">
              {highlights.map((text) => (
                <HighlightItem key={text} text={text} />
              ))}
            </div>
          </div>

          <div className="relative rounded-3xl overflow-hidden">
            <Image
              src={imageSrc}
              alt="Column highlights placeholder"
              className="w-full h-auto max-w-xl object-contain"
              width={576} height={344}
            />
          </div>
        </div>
      </Container>
    </section>
  );
};
