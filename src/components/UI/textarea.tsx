import * as React from "react";
import { cn } from "@/lib/utils";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "placeholder:text-[var(--placeholder)] border-[0.5px] border-neutral-300 focus:border-blue-400 focus:outline-none focus:ring-0 dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm font-sans",
        className
      )}
      {...props}
    />
  );
}

export { Textarea };
