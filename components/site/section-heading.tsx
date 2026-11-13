import { cn } from "@/lib/utils";
import { Reveal } from "./reveal";

type SectionHeadingProps = {
  label: string;
  title: React.ReactNode;
  id?: string;
  tone?: "dark" | "light";
  className?: string;
  children?: React.ReactNode;
};

/** Editorial section heading: a running label in the left rail, the headline beside it. */
export function SectionHeading({
  label,
  title,
  id,
  tone = "light",
  className,
  children,
}: SectionHeadingProps) {
  const dark = tone === "dark";
  return (
    <div
      className={cn(
        "grid gap-8 md:grid-cols-12 md:gap-6",
        className,
      )}
    >
      <Reveal className="order-last md:order-none md:col-span-3">
        <p
          className={cn(
            "eyebrow flex items-center gap-3",
            dark ? "text-white/60" : "text-ink/65",
          )}
        >
          <span aria-hidden className="h-px w-8 bg-current" />
          {label}
        </p>
      </Reveal>
      <div className="md:col-span-9">
        <Reveal delay={0.08}>
          <h2
            id={id}
            className={cn(
              "display text-[clamp(1.85rem,4.2vw,3.75rem)] text-balance",
              dark ? "text-white" : "text-ink",
            )}
          >
            {title}
          </h2>
        </Reveal>
        {children ? (
          <Reveal delay={0.16}>
            <div
              className={cn(
                "mt-6 max-w-2xl text-base leading-relaxed md:text-lg",
                dark ? "text-white/65" : "text-ink/65",
              )}
            >
              {children}
            </div>
          </Reveal>
        ) : null}
      </div>
    </div>
  );
}
