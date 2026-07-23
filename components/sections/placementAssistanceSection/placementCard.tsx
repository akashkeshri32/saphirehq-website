import Image, { type StaticImageData } from "next/image";

type Props = {
  icon: StaticImageData;
  heading: string;
  description: string;
};

export const PlacementCard = ({ icon, heading, description }: Props) => {
  return (
    <div className="bg-white/4 border border-white/10 rounded-xl p-6.5 flex flex-col items-start">
      <Image src={icon} alt="" width={40} height={40} />

      <h3 className="text-18 font-heading font-semibold text-white mt-5">
        {heading}
      </h3>

      <p className="text-14 text-white-two mt-2.5">{description}</p>
    </div>
  );
};
