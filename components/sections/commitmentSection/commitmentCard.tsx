import { cn } from "@/lib/utils/tailwind";

type Props = {
  heading: string;
  description: string;
  bgClassName: string;
};

export const CommitmentCard = ({ heading, description, bgClassName }: Props) => {
  return (
    <div className={cn("rounded-xl p-7 text-white", bgClassName)}>
      <h3 className="text-16 font-heading font-semibold">{heading}</h3>
      <p className="text-14 font-normal mt-1.5 text-white/85 leading-5">{description}</p>
    </div>
  );
};
