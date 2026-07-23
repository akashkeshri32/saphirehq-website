import Image, { type StaticImageData } from "next/image";

type Props = {
  image: StaticImageData;
  name: string;
  domain: string;
  description: string;
};

export const InstructorCard = ({ image, name, domain, description }: Props) => {
  return (
    <div className="bg-white border border-border-stroke rounded-xl p-6 w-full max-w-[287px]">
      <div className="rounded-lg overflow-hidden border-2 border-blue-primary">
        <Image
          src={image}
          alt={name}
          width={240}
          height={240}
          className="w-full h-auto max-h-60 object-cover"
        />
      </div>

      <h3 className="text-16 font-semibold text-black mt-4">{name}</h3>
      <p className="text-13 font-medium font-inter text-blue-primary mt-1">
        {domain}
      </p>
      <p className="text-13 font-normal text-text-gray mt-2">{description}</p>
    </div>
  );
};
