import * as React from "react";

import { cva, type VariantProps } from "class-variance-authority";
import Ripple from "material-ripple-effects";

export const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-semibold transition hover:shadow-sm focus:ring-offset-2 focus:ring-2 ring-hive-black/20",
  {
    variants: {
      variant: {
        default: "bg-hive-black text-white hover:bg-hive-black/90",
        secondary: "bg-white text-hive-black border border-[#C8C8C8] hover:bg-white/90",
        success: "bg-green-100 text-green-800 border border-[#C8C8C8] hover:bg-green-100/90 !ring-green-800/20",
      },
      size: {
        default: "h-10 px-7 py-2",
        sm: "h-6 rounded-md px-4 text-xs",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    const ripple = new Ripple();

    return (
      <button
        className={buttonVariants({ variant, size, className })}
        ref={ref}
        {...props}
        onMouseUp={e => {
          ripple.create(e, variant === "secondary" ? "dark" : "light");
          props.onMouseUp?.(e);
        }}
      />
    );
  }
);
Button.displayName = "Button";
