import { Eyebrow } from "./eyebrow";
import { cn } from "@/lib/utils/tailwind";

type Props = {
  eyebrow?: string;
  eyebrowVariant?: "default" | "secondary";
  variant? : "default" | "dark",
  heading: string;
  description?: string;
  className?: string;
  headingClassName?: string;
  descriptionClassName?: string;
};

export const SectionHeader = ({
  variant = "default",
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
      { eyebrow && <Eyebrow variant={eyebrowVariant} text={eyebrow} />}

      <h2
        className={cn(
          "text-h2-mobile! lg:text-h2! font-heading font-semibold",
          headingClassName,
          variant === "dark" && "text-white"
        )}
      >
        {heading}
      </h2>

     { description && <p className={cn(
        "text-17", 
        descriptionClassName,
        variant === "dark" ? "text-white-two" : "text-text-gray"
        
      )}>
        {description}
      </p>}
    </div>
  );
};
