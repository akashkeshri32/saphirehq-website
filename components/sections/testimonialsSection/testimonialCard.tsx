import { type StaticImageData } from "next/image";
import { Author } from "@/components/ui/author";
import { Rating } from "@/components/ui/rating";

export type Testimonial = {
  rating: number;
  testimonial: string;
  avatar: StaticImageData;
  name: string;
  designation: string;
};

export const TestimonialCard = ({
  rating,
  testimonial,
  avatar,
  name,
  designation,
}: Testimonial) => {
  return (
    <div className="bg-white border border-border-stroke rounded-xl p-6.5 h-full flex flex-col">
      <Rating value={rating} />

      <p className="text-15 font-normal font-inter mt-5">{testimonial}</p>

      <div className="mt-6">
        <Author avatar={avatar} name={name} designation={designation} />
      </div>
    </div>
  );
};
