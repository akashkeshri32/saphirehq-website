import { type StaticImageData } from "next/image";
import { Author } from "@/components/ui/author";

export type PlacementSuccessStory = {
  avatar: StaticImageData;
  name: string;
  designation: string;
  testimonial: string;
  role?: string;
  highlight: string;
  linkedinUrl?: string
  company : string
};

export const PlacementSuccessStoryCard = ({
  avatar,
  name,
  designation,
  testimonial,
  role,
  highlight,
  linkedinUrl,
  company
}: PlacementSuccessStory) => {
  return (
    <div className="bg-white border border-border-stroke rounded-xl p-6.5 h-full flex flex-col justify-between">
      <div>
        <Author avatar={avatar} name={name} designation={designation} linkedinUrl={linkedinUrl} />

        <div className="text-14 text-black mt-5 space-y-2" dangerouslySetInnerHTML={{ __html : testimonial}} />
      </div>

      <div className="border-t border-border-stroke mt-6 pt-4 flex items-center justify-between">
        <span className="font-jetbrains text-12 font-normal text-green">
          {company}
        </span>
        <span className="font-jetbrains text-12 font-extrabold text-green">
          {highlight}
        </span>
      </div>
    </div>
  );
};
