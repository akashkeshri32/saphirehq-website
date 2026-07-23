type Props = {
  index: number;
  heading: string;
  description: string;
};

export const EnrollmentStepCard = ({ index, heading, description }: Props) => {
  return (
    <div className="bg-white border border-border-stroke rounded-xl p-7">
      <span className="font-jetbrains text-16 font-bold bg-blue-light h-10 w-10 flex justify-center rounded-full items-center text-blue-primary">
        {String(index).padStart(2, "0")}
      </span>

      <h3 className="text-16 font-heading font-semibold mt-4">{heading}</h3>
      <p className="text-14 text-text-gray mt-2 leading-5.5">{description}</p>
    </div>
  );
};
