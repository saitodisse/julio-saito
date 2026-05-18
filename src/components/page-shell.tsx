import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type PageShellProps = {
  children: ReactNode;
  className?: string;
};

export function PageShell({ children, className }: PageShellProps) {
  return (
    <main
      className={cn(
        "mx-auto w-full max-w-[1280px] px-4 pb-12 pt-6 sm:px-6 sm:pt-8 lg:px-12 lg:pb-14 lg:pt-10",
        className
      )}
    >
      {children}
    </main>
  );
}
