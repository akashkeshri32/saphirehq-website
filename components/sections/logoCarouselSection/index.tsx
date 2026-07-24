import Image from "next/image";
import Container from "@/components/layout/container";
import { PARTNER_LOGOS } from "@/lib/data/partner-logos";

export const LogoCarouselSection = () => {
  return (
    <section className="py-80">
      <Container>
        <p className="text-13 font-jetbrains font-normal text-center text-text-gray">
          Trusted by 250+ hiring companies
        </p>

        <div className="mt-9 overflow-hidden mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex w-max animate-marquee">
            {[...PARTNER_LOGOS, ...PARTNER_LOGOS].map((logo, index) => (
              <div
                key={`${logo.name}-${index}`}
                className="flex items-center justify-center px-7 shrink-0"
              >
                <Image
                  src={logo.src}
                  alt={logo.name}
                  className="h-7 w-auto min-w16 object-contain grayscale opacity-70"
                />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
