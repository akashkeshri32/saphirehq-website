import Container from "@/components/layout/container";
import { ButtonLink } from "@/components/ui/button/button-link";
import type { ButtonVariantProps } from "@/components/ui/button/button-variants";
import { cn } from "@/lib/utils/tailwind";

export type CtaButton = {
  label: string;
  href: string;
  variant?: ButtonVariantProps["variant"];
  icon?: React.ReactNode;
};

type Props = {
  heading: string;
  description: string;
  buttons: CtaButton[];
  className?: string;
};

export const CtaSection = ({ heading, description, buttons, className }: Props) => {
  return (
    <section className={cn("py-25 relative")}>
      <Container className={cn("relative z-5 max-w-[480px]!", className)}>
        <div className=" flex flex-col items-center text-center mx-auto">
          <h2 className="text-h2-mobile lg:text-h2 font-heading font-semibold text-white">
            {heading}
          </h2>

          <p className="text-16 max-w-[480px] font-normal text-white mt-4 opacity-80">{description}</p>

          <div className="flex max-md:flex-col flex-wrap gap-3.5 mt-9">
            {buttons.map((button) => (
              <ButtonLink
                key={button.label}
                href={button.href}
                variant={button.variant ?? "white"}
              >
                {button.label}
                {button.icon}
              </ButtonLink>
            ))}
          </div>
        </div>
      </Container>
      
      <div className={`bg-linear-[90deg,#00B7FF_0%,#1437FF_38%,#6A2EFF_70%,#9A2DFF_100%] w-full h-full absolute top-0 left-0 z-0`}></div>

    </section>
  );
};
