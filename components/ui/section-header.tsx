import { Eyebrow } from "./eyebrow";
import { cn } from "@/lib/utils/tailwind";
import { RevealHeading } from "./motion/reveal-heading";
import { Reveal } from "./motion/reveal";

type Props = {
  eyebrow?: string;
  eyebrowVariant?: "default" | "secondary";
  variant? : "default" | "dark",
  as?: "h1" | "h2";
  heading: string;
  description?: string;
  className?: string;
  headingClassName?: string;
  descriptionClassName?: string;
  descriptionDelay? : number
};

export const SectionHeader = ({
  variant = "default",
  eyebrow,
  eyebrowVariant = "default",
  as: HeadingTag = "h2",
  heading,
  description,
  className,
  headingClassName,
  descriptionClassName,
  descriptionDelay = 0.15
}: Props) => {
  return (
    <div className={cn("max-w-160 flex flex-col gap-3.25", className)}>
      { eyebrow && <Eyebrow variant={eyebrowVariant} text={eyebrow} />}

      <RevealHeading
        as={HeadingTag}
        text={heading}
        className={cn(
          "text-h2-mobile! lg:text-h2! font-heading font-semibold",
          headingClassName,
          variant === "dark" && "text-white"
        )}
      />

     { description && (
        <Reveal direction="up" distance={16} delay={descriptionDelay} duration={0.5}>
          <p className={cn(
            "text-17",
            descriptionClassName,
            variant === "dark" ? "text-white-two" : "text-text-gray"
          )}>
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
};
