import { cn } from "@/lib/utils/tailwind";

type Props = {
  bgColor: string;
  textColor: string;
  title: string;
  text: string;
};

export const PlacementStatCard = ({ bgColor, textColor, title, text }: Props) => {
  return (
    <div className={cn("rounded-xl p-6 flex flex-col gap-1.5", bgColor)}>
      <span className={cn("text-h3-mobile! md:text-h3! font-heading font-bold", textColor)}>
        {title}
      </span>
      <span className={cn("text-12! md:text-13 font-medium font-inter", textColor)}>
        {text}
      </span>
    </div>
  );
};
