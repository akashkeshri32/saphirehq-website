import Image from "next/image";
import Container from "@/components/layout/container";
import { PARTNER_LOGOS } from "@/lib/data/partner-logos";
import { cn } from "@/lib/utils/tailwind";

export const LogoCarouselSection = () => {

  const topCarousel = PARTNER_LOGOS.slice(0, PARTNER_LOGOS.length / 2);

  const bottomCarousel = PARTNER_LOGOS.slice(PARTNER_LOGOS.length/2);


  return (
    <section className="py-80">
      <Container>
        <p className="text-13 font-jetbrains font-normal text-center text-text-gray">
          Trusted by 250+ hiring companies
        </p>

        <div className="mt-7 py-4 overflow-hidden mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex w-max animate-marquee gap-x-14">
            {[...topCarousel, ...topCarousel].map((logo, index) => (
              <div
                key={`${logo.name}-${index}`}
                className={cn("flex items-center justify-center shrink-0", logo.scale)}
              >
                <Image
                  src={logo.src}
                  alt={logo.name}
                  // layout="fill"
                  className="w-auto h-7.5 object-contain grayscale opacity-70"
                />
              </div>
            ))}
          </div>
        </div>

          <div className="mt-7 py-4 overflow-hidden mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex w-max animate-marquee-reverse gap-x-14">
            {[...bottomCarousel, ...bottomCarousel].map((logo, index) => (
              <div
                key={`${logo.name}-${index}`}
                className={cn("flex items-center justify-center  shrink-0", logo.scale)}
              >
                <Image
                  src={logo.src}
                  alt={logo.name}
                  // layout="fill"
                  className="h-7.5 w-auto object-contain grayscale opacity-70"
                />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
