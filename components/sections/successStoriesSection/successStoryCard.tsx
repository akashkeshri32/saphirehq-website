import { type StaticImageData } from "next/image";
import { Author } from "@/components/ui/author";

export type SuccessStory = {
  avatar: StaticImageData;
  name: string;
  designation: string;
  testimonial: string;
  highlight: string;
  company: string;
};

export const SuccessStoryCard = ({
  avatar,
  name,
  designation,
  testimonial,
  highlight,
  company,
}: SuccessStory) => {
  return (
    <div className="bg-white border border-border-stroke rounded-xl p-6.5 h-full flex flex-col">
      <Author avatar={avatar} name={name} designation={designation} />

      <p className="text-14 text-black mt-5">{testimonial}</p>

      <div className="border-t border-border-stroke mt-6 pt-4 flex items-center justify-between">
        <span className="font-jetbrains text-12 font-normal text-green">
          {highlight}
        </span>
        <span className="font-jetbrains text-12 font-extrabold text-green">
          {company}
        </span>
      </div>
    </div>
  );
};
