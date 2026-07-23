// components/ui/button-variants.ts
import { cva, type VariantProps } from "class-variance-authority";

export const buttonVariants = cva(
  "inline-flex items-center cursor-pointer font-heading  justify-center gap-2 whitespace-nowrap rounded-lg font-semibold font-inter transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "primary-gradient text-[#fff] hover:opacity-90 active:opacity-80",
        outline:
          "border border-[#CBD5E1] text-black hover:text-blue-primary hover:border-blue-primary",
        "outline-white": "border border-white text-white hover:opacity-80",
        white: "bg-white text-blue-primary hover:opacity-80",
        link: "text-text-secondary underline-offset-4 hover:underline",
      },
      size: {
        default: " px-[1.625rem] py-[14px]",
        sm: " rounded-md py-2.5 px-4 text-sm",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export type ButtonVariantProps = VariantProps<typeof buttonVariants>;
