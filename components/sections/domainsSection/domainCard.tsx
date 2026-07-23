import Image, { type StaticImageData } from "next/image";
import { ButtonLink } from "@/components/ui/button/button-link";
import { cn } from "@/lib/utils/tailwind";

type Props = {
  icon: StaticImageData;
  heading: string;
  tagline: string;
  primaryHref: string;
  secondaryHref: string;
  className?: string;
};

export const DomainCard = ({
  icon,
  heading,
  tagline,
  primaryHref,
  secondaryHref,
  className,
}: Props) => {
  return (
    <div
      className={cn(
        "bg-white border border-border-stroke border-t-4 rounded-xl p-6 flex flex-col items-start",
        className,
      )}
    >
      <Image src={icon} alt={heading} width={38} height={38} />

      <h3 className="text-18 font-heading mt-4.5 font-semibold">{heading}</h3>

      <p className="text-14 text-text-gray mt-2">{tagline}</p>

      <div className="flex gap-3 mt-9.5 w-full">
        <ButtonLink href={secondaryHref} variant="outline" size="sm" className="w-full">
          Learn More
        </ButtonLink>
        <ButtonLink href={primaryHref} size="sm" className="w-full">
          Apply Now
        </ButtonLink>
      </div>
    </div>
  );
};
