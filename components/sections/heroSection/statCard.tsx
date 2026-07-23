import { cn } from "@/lib/utils/tailwind";

type Props = {
  heading: string;
  description: string;
  className? : string
};

export const StatCard = ({ heading, description, className }: Props) => {
  return (
    <div className={cn("border rounded-xl px-5.5 py-5.75 flex flex-col gap-4 ", className)}>
      <h3 className="text-h3-mobile lg:text-h3 font-jetbrains text-text-gray-secondary">
        {heading}
      </h3>
      <p className="text-13 text-text-gray-secondary-light font-normal">{description}</p>
    </div>
  );
};
