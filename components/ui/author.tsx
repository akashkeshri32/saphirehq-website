import Image, { type StaticImageData } from "next/image";

type Props = {
  avatar: StaticImageData;
  name: string;
  designation: string;
};

export const Author = ({ avatar, name, designation }: Props) => {
  return (
    <div className="flex items-center gap-3">
      <Image
        src={avatar}
        alt={name}
        width={46}
        height={46}
        className="rounded-full object-cover w-11.5 h-11.5 shrink-0"
      />

      <div className="space-y-0.5">
        <p className="text-15 font-semibold font-inter">{name}</p>
        <p className="text-13 text-text-gray">{designation}</p>
      </div>
    </div>
  );
};
