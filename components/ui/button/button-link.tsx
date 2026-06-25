import * as React from "react";
import Link from "next/link";
import { buttonVariants, type ButtonVariantProps } from "./button-variants";
import { cn } from "@/lib/utils/tailwind";

export interface ButtonLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>, ButtonVariantProps {
  href: string;
  icon?: React.ReactNode;
}

export const ButtonLink = React.forwardRef<HTMLAnchorElement, ButtonLinkProps>(
  ({ className, variant, size, icon, children, href, ...props }, ref) => {
    return (
      <Link
        href={href}
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {icon && <span className="inline-flex">{icon}</span>}
        {children}
      </Link>
    );
  },
);

ButtonLink.displayName = "ButtonLink";
