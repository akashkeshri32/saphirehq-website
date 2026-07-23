import { cn } from "@/lib/utils/tailwind";

type Props = {
  number: string;
  text: string;
  bgClassName: string;
  textClassName: string;
};

export const StatsCard = ({
  number,
  text,
  bgClassName,
  textClassName,
}: Props) => {
  return (
    <div
      className={cn(
        "h-35 px-4.5 rounded-xl flex flex-col justify-center gap-3",
        bgClassName,
      )}
    >
      <span className={cn("font-jetbrains text-h2! font-bold inline-block", textClassName)}>
        {number}
      </span>
      <span className="text-14 text-text-gray">{text}</span>
    </div>
  );
};
