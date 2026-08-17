import Image, { type StaticImageData } from "next/image";
import LinkedinIcon from "../icons/linkedin";
import Link from "next/link";

type Props = {
  avatar: StaticImageData;
  name: string;
  designation: string;
  linkedinUrl? : string
};

export const Author = ({ avatar, name, designation, linkedinUrl }: Props) => {
  return (
    <div className="flex gap-3 w-full">
      <Image
        src={avatar}
        alt={name}
        width={50}
        height={50}
        className="rounded-full object-cover w-12 h-12 shrink-0"
      />

      <div className="space-y-0.5 flex gap-x-3 justify-between  w-full flex-1">
        <div>
          <p className="text-15 font-semibold font-inter">{name}</p>
          <p className="text-13 text-text-gray">{designation}</p>
        </div>

        {linkedinUrl && <Link href={linkedinUrl} target="_blank" className="p-2 bg-gray-100 rounded-full w-9 h-9 flex justify-center items-center text-blue-primary hover:text-black -translate-y-0.5">
          <LinkedinIcon width={18} />
        </Link>}
      </div>
    </div>
  );
};
