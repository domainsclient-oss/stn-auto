import { cn } from "@/lib/utils";

/** Typographic STN AUTO logo, shared by the header and footer. */
export function Wordmark({ className }: { className?: string }) {
  return (
    <span className={cn("flex items-baseline gap-2 leading-none", className)}>
      <span className="display text-[1.35rem] tracking-[-0.01em]">STN</span>
      <span className="font-display text-[1.35rem] font-light uppercase tracking-[0.18em] [font-stretch:118%]">
        Auto
      </span>
    </span>
  );
}
