import Image, { type StaticImageData } from "next/image";

type Props = {
  heading: string;
  image: StaticImageData;
};

export const DistributionCard = ({ heading, image }: Props) => {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-16 font-heading font-semibold text-center">{heading}</h3>

      <div className="rounded-[20px] border border-border-stroke overflow-hidden flex justify-center py-2">
        <Image src={image} alt=""  width={260} height={360} />
      </div>
    </div>
  );
};
