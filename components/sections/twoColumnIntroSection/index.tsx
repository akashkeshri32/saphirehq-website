import Image, { type StaticImageData } from "next/image";
import Container from "@/components/layout/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { cn } from "@/lib/utils/tailwind";
import { RevealHeading } from "@/components/ui/motion/reveal-heading";
import { Reveal } from "@/components/ui/motion/reveal";

type Props = {
  eyebrow: string;
  heading: string;
  description: string;
  image: StaticImageData;
  imageAlt: string;
  imagePosition?: "left" | "right";
  headingSize?: "h1" | "h5";
  breadcrumbLabel?: string;
  className?: string;
  reverseOrderOnMobile? : boolean
};

export const TwoColumnIntroSection = ({
  eyebrow,
  heading,
  description,
  image,
  imageAlt,
  imagePosition = "right",
  headingSize = "h1",
  breadcrumbLabel,
  className,
  reverseOrderOnMobile = false
}: Props) => {
  const HeadingTag = headingSize === "h1" ? "h1" : "h2";

  const content = (
    <div className={cn(`flex flex-col`,
      reverseOrderOnMobile ? 'max-lg:order-first' : ''
    )}>
      <Eyebrow variant="default" text={eyebrow} />

      <RevealHeading
        as={HeadingTag}
        text={heading}
        className={cn(
          "font-heading font-semibold mt-4.5",
          headingSize === "h1" ? "text-h1-mobile lg:text-h1" : "text-h5",
        )}
      />

      <Reveal direction="up" distance={16} delay={0.6}>
        <div className="text-17 text-text-gray mt-5 space-y-4.5" dangerouslySetInnerHTML={{ __html : description}} />
      </Reveal>
    </div>
  );

  const imageEl = (
    <Reveal direction="up" distance={16} delay={0.4}>

    <div className="relative rounded-3xl overflow-hidden">
      <Image src={image} alt={imageAlt} className="w-full h-auto" />
    </div>
    </Reveal>
  );

  return (
    <section className={cn("pb-19 pt-25", className)}>
      <Container>
        {breadcrumbLabel && <Breadcrumb currentPage={breadcrumbLabel} />}

        <div className={cn(
          "grid grid-cols-1  gap-13.5 items-center",
          imagePosition === "left" ? "lg:grid-cols-[1fr_1.3fr]" : "lg:grid-cols-[1.3fr_1fr]"
          )}>
          {imagePosition === "left" ? (
            <>
              {imageEl}
              {content}
            </>
          ) : (
            <>
              {content}
              {imageEl}
            </>
          )}
        </div>
      </Container>
    </section>
  );
};
