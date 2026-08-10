import LinkedinIcon from "@/components/icons/linkedin";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";

type Props = {
  image: StaticImageData;
  name: string;
  domain: string;
  description: string;
  linkedin?: string
};

export const InstructorCard = ({ image, name, domain, description, linkedin }: Props) => {
  return (
    <div className="bg-white flex flex-col gap-y-1 border border-border-stroke  rounded-xl p-4 md:p-6 w-full md:max-w-71 h-full hover:shadow-lg shadow-blue-primary/10">
      <div>
        <div className="rounded-lg overflow-hidden border-2 border-blue-primary">
          <Image
            src={image}
            alt={name}
            width={300}
            height={300}
            className="w-full h-68 md:h-60 object-cover object-top"
          />
        </div>

        <h3 className="text-16 font-semibold text-black mt-4">{name}</h3>
        <p className="text-13 font-medium font-inter text-blue-primary mt-1">
          {domain}
        </p>
      </div>
      {/*<p className="text-13 font-normal text-text-gray mt-2">{description}</p>*/}

      {
        linkedin && <Link href={linkedin} className="block rounded-xs mt-2.5 py-1 px-1 bg-blue-primary/10 w-max hover:bg-gray-300">
          <LinkedinIcon className="w-5.5" />
        </Link>
      }
    </div>
  );
};
