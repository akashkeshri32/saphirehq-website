import Image from "next/image";
import GreenTick from "@/assets/icons/green-tick.svg";

type Props = {
  text: string;
};

export const HighlightItem = ({ text }: Props) => {
  return (
    <div className="flex items-center gap-3">
      <Image src={GreenTick} alt="" width={20} height={20} className="shrink-0" />
      <span className="text-16 text-text-gray-secondary">{text}</span>
    </div>
  );
};
