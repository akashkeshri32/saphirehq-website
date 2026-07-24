import Image, { type StaticImageData } from "next/image";
import { cn } from "@/lib/utils/tailwind";

type Props = {
  icon: StaticImageData;
  heading: string;
  images: StaticImageData[];
};

export const PlacementHeroCard = ({ icon, heading, images }: Props) => {
  return (
    <div className="bg-white border border-border-stroke rounded-[20px] px-8 py-6.5">
      <div className="flex items-center justify-center gap-2.5 pl-3">
        <Image src={icon} alt="" width={14} height={14} />
        <h3 className="text-18 font-heading font-medium">{heading}</h3>
      </div>

      <div
        className={cn(
          "mt-7 grid grid-cols-1 gap-12",
          images.length === 2 && "md:grid-cols-2",
        )}
      >
        {images.map((image, index) => (
          <div key={index} className="relative rounded-xl overflow-hidden">
            <Image src={image} alt="" className="max-md:w-82 w-full h-auto" />
          </div>
        ))}
      </div>
    </div>
  );
};
