type Props = {
  index: number;
  heading: string;
  description: string;
};

export const JourneyCard = ({ index, heading, description }: Props) => {
  return (
    <div className="flex flex-col gap-3">
      <div className="w-12 h-12 rounded-full border-2 border-white-two bg-white flex items-center justify-center shrink-0 relative z-10">
        <span className="font-jetbrains font-bold text-[#8E9BAC]">
          {String(index).padStart(2, "0")}
        </span>
      </div>

      <h3 className="text-14 font-semibold">{heading}</h3>
      <p className="text-12 font-normal text-text-gray">{description}</p>
    </div>
  );
};
