import { cn } from "@/lib/utils/tailwind";
import { PropsWithChildren } from "react";

type ContainerProps = PropsWithChildren<{
  className?: string;
}>;

const Container = ({ className, children }: ContainerProps) => {
  return (
    <div className={cn("max-w-desktop mx-auto w-full px-4", className)}>
      {children}
    </div>
  );
};

export default Container;
