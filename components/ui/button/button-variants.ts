// components/ui/button-variants.ts
import { cva, type VariantProps } from "class-variance-authority";

export const buttonVariants = cva(
  "inline-flex items-center cursor-pointer font-heading  justify-center gap-2 whitespace-nowrap rounded-md font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-linear-to-r from-[#1437FF] to-[#6A2EFF] text-[#fff] hover:opacity-90 active:opacity-80",
        destructive: "bg-red-600 text-white hover:bg-red-700 active:bg-red-800",
        outline:
          "border border-primary/60  bg-transparent hover:bg-dark-secondary text-white",
        secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200",
        ghost: "hover:bg-gray-100 text-gray-700",
        link: "text-text-secondary underline-offset-4 hover:underline",
      },
      size: {
        default: " px-4.5 py-3",
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
