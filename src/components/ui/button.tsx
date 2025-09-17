import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-medium ring-offset-background transition-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "gradient-primary text-primary-foreground hover:scale-105 shadow-elegant transition-spring",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border-2 border-primary/20 bg-background hover:bg-primary/5 hover:border-primary/40 hover:scale-105 transition-spring",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 hover:scale-105 transition-spring",
        ghost: "hover:bg-accent hover:text-accent-foreground hover:scale-105 transition-spring",
        link: "text-primary underline-offset-4 hover:underline",
        hero: "gradient-hero text-white font-semibold shadow-elegant hover:scale-105 glow-primary hover:glow-accent transition-spring",
        glass: "glass-card backdrop-blur-xl border-2 border-primary/20 text-primary hover:border-primary/40 hover:scale-105 transition-spring",
      },
      size: {
        default: "h-12 px-6 py-3",
        sm: "h-9 rounded-lg px-4",
        lg: "h-14 rounded-xl px-10 text-base font-semibold",
        xl: "h-16 rounded-2xl px-12 text-lg font-semibold",
        icon: "h-12 w-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
