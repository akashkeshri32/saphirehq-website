import Image, { type StaticImageData } from "next/image";
import Container from "@/components/layout/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { cn } from "@/lib/utils/tailwind";

type Props = {
  eyebrow: string;
  heading: string;
  description: string;
  image: StaticImageData;
  imagePosition?: "left" | "right";
  headingSize?: "h1" | "h5";
  breadcrumbLabel?: string;
  className?: string;
};

export const TwoColumnIntroSection = ({
  eyebrow,
  heading,
  description,
  image,
  imagePosition = "right",
  headingSize = "h1",
  breadcrumbLabel,
  className,
}: Props) => {
  const HeadingTag = headingSize === "h1" ? "h1" : "h2";

  const content = (
    <div className="flex flex-col">
      <Eyebrow variant="default" text={eyebrow} />

      <HeadingTag
        className={cn(
          "font-heading font-semibold mt-4.5",
          headingSize === "h1" ? "text-h1-mobile lg:text-h1" : "text-h5",
        )}
      >
        {heading}
      </HeadingTag>

      <div className="text-17 text-text-gray mt-5 space-y-4.5" dangerouslySetInnerHTML={{ __html : description}} />
    </div>
  );

  const imageEl = (
    <div className="relative rounded-3xl overflow-hidden">
      <Image src={image} alt="" className="w-full h-auto" />
    </div>
  );

  return (
    <section className={cn("py-25", className)}>
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
