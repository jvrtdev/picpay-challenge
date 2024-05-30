import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export const MaxWidthWrapper = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-screen-xl p-2",
        className
      )}
    >
      {children}
    </div>
  );
};