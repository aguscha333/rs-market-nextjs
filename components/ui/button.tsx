import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  `inline-flex items-center justify-center rounded-md text-sm font-bold 
        ring-offset-background transition-colors focus-visible:outline-none 
        focus-visible:ring-2 focus-visible:ring-focus  focus-visible:ring-offset-2 
        disabled:pointer-events-none disabled:text-disabled-foreground`,

  {
    variants: {
      variant: {
        primary:
          "bg-primary text-primary-foreground hover:bg-accent active:bg-active disabled:bg-disabled",
        outline:
          "border border-input bg-background hover:bg-accent hover:border-accent hover:text-accent-foreground active:bg-active active:border-active active:text-active-foreground disabled:bg-disabled disabled:border-disabled-border",
        link: "text-link underline-offset-4 hover:underline",
      },
      size: {
        md: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
