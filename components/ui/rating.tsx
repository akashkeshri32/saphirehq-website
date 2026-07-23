import { Star } from "lucide-react";
import { cn } from "@/lib/utils/tailwind";

type Props = {
  value: number;
  max?: number;
};

export const Rating = ({ value, max = 5 }: Props) => {
  return (
    <div className="flex gap-1">
      {Array.from({ length: max }).map((_, i) => (
        <Star
          key={i}
          size={13}
          className={cn(
            i < value ? "fill-brown-light text-brown-light" : "text-white-two",
          )}
        />
      ))}
    </div>
  );
};
