import * as React from "react";

import { Toaster as Sonner } from "sonner";

type ToasterProps = React.ComponentProps<typeof Sonner>;

export const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      className="toaster group font-sans"
      toastOptions={{
        classNames: {
          title: "font-bold",
          description: "text-xs",
        },
      }}
      {...props}
    />
  );
};
