import Image, { type StaticImageData } from "next/image";
import { ButtonLink } from "@/components/ui/button/button-link";
import BackgroundGradients from "@/components/ui/gradients/bg-gradients";

export type FeatureCardGradient =
  | "primary-gradient"
  | "purple"
  | "plain-green"
  | "black"
  | "light-deep-blue"
  | "psych-violet";

export type FeatureCardData = {
  gradient: FeatureCardGradient;
  icon: StaticImageData;
  heading: string;
  description: string;
  cta?: {
    label: string;
    href: string;
  };
};

export const FeatureCard = ({
  gradient,
  icon,
  heading,
  description,
  cta,
}: FeatureCardData) => {
  return (
    <div className="relative overflow-hidden rounded-xl p-7">
      <BackgroundGradients variant={gradient} />

      <div className="relative z-10 flex flex-col justify-between h-full items-start text-left">
        <div>
          <Image src={icon} alt="" width={48} height={48} />

          <h3 className="text-20 font-heading text-white mt-5 font-semibold">{heading}</h3>

          <p className="text-15 text-text-white-secondary mt-2.5 font-normal">
            {description}
          </p>
        </div>

        {cta && (
          <div className="flex w-full">
            <ButtonLink
              href={cta.href}
              variant="outline-white"
              size="sm"
              className="mt-6 w-full py-3.5"
            >
              {cta.label}
            </ButtonLink>
          </div>
        )}
      </div>
    </div>
  );
};
