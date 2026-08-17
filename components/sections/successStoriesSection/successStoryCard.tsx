import { type StaticImageData } from "next/image";
import { Author } from "@/components/ui/author";

export type SuccessStory = {
  avatar: StaticImageData;
  name: string;
  designation: string;
  testimonial: string;
  highlight: string;
  company: string;
  linkedinUrl? : string
};

export const SuccessStoryCard = ({
  avatar,
  name,
  designation,
  testimonial,
  highlight,
  company,
  linkedinUrl
}: SuccessStory) => {
  return (
    <div className="bg-white border border-border-stroke rounded-xl p-6.5 h-full flex flex-col justify-between  transition-all duration-300 ease-out hover:-translate-y-1.5 hover:scale-[1.015] hover:shadow-lg hover:border-green/10">
      <div>
        <div className="flex gap-x-3 ">
          <Author avatar={avatar} name={name} designation={designation} linkedinUrl={linkedinUrl} />
       </div>

        <div className="text-14 text-black mt-5 space-y-2"
        dangerouslySetInnerHTML={{ __html : testimonial}}
        />
      </div>

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
