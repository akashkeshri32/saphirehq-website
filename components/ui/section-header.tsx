import { Eyebrow } from "./eyebrow";
import { cn } from "@/lib/utils/tailwind";

type Props = {
  eyebrow: string;
  eyebrowVariant?: "default" | "secondary";
  heading: string;
  description?: string;
  className?: string;
  headingClassName?: string;
  descriptionClassName?: string;
};

export const SectionHeader = ({
  eyebrow,
  eyebrowVariant = "default",
  heading,
  description,
  className,
  headingClassName,
  descriptionClassName,
}: Props) => {
  return (
    <div className={cn("max-w-160 flex flex-col gap-3.25", className)}>
      <Eyebrow variant={eyebrowVariant} text={eyebrow} />

      <h2
        className={cn(
          "text-h2-mobile lg:text-h2 font-heading font-semibold",
          headingClassName,
        )}
      >
        {heading}
      </h2>

     { description && <p className={cn("text-17 text-text-gray", descriptionClassName)}>
        {description}
      </p>}
    </div>
  );
};
