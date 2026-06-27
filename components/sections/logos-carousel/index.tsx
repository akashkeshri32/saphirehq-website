import MotorolaLogo from "@/assets/partner-logos/motorola.png";
import PeugeotLogo from "@/assets/partner-logos/peugeot.png";
import SugarLogo from "@/assets/partner-logos/sugar.png";
import XboxLogo from "@/assets/partner-logos/xbox.png";
import Image from "next/image";
import "./style.css";

const logos = [MotorolaLogo, PeugeotLogo, SugarLogo, XboxLogo];

const LogosCarousel = () => {
  return (
    <section className="py-28 relative z-20 overflow-hidden">
      <h5 className="mb-7 text-center text-white font-semibold uppercase text-lg">
        Trusted By
      </h5>
      <div className="marquee">
        <div className="marquee__item flex gap-x-14 items-center pr-14">
          {Array.from({ length: 30 }).map((_, i) => (
            <Image
              src={logos[i % logos.length]}
              alt=""
              key={`track1-${i}`}
              height={50}
              objectFit="contain"
              className="opacity-70"
            />
          ))}
        </div>

        <div className="marquee__item flex gap-x-14 items-center pr-14">
          {Array.from({ length: 30 }).map((_, i) => (
            <Image
              src={logos[i % logos.length]}
              alt=""
              key={`track2-${i}`}
              height={50}
              objectFit="contain"
              className="opacity-70"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogosCarousel;
