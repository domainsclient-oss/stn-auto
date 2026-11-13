import type { SVGProps } from "react";
import { socialLinks } from "@/lib/site";
import { cn } from "@/lib/utils";

type Network = (typeof socialLinks)[number]["network"];

/** Outline brand glyphs drawn to match the lucide stroke style used elsewhere. */
function Glyph({ network, ...props }: { network: Network } & SVGProps<SVGSVGElement>) {
  const common = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
    ...props,
  };
  switch (network) {
    case "linkedin":
      return (
        <svg {...common}>
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect x="2" y="9" width="4" height="12" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      );
    case "instagram":
      return (
        <svg {...common}>
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
        </svg>
      );
    case "facebook":
      return (
        <svg {...common}>
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
      );
    case "youtube":
      return (
        <svg {...common}>
          <path d="M2.5 17a24 24 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.6 49.6 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24 24 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.6 49.6 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
          <path d="m10 15 5-3-5-3z" />
        </svg>
      );
  }
}

const tile =
  "inline-flex size-11 items-center justify-center border border-white/20 text-white/75 transition-colors duration-300";

export function SocialIcons({ className }: { className?: string }) {
  return (
    <ul aria-label="STN AUTO on social media" className={cn("flex gap-2", className)}>
      {socialLinks.map((s) => (
        <li key={s.network}>
          {s.href ? (
            <a
              href={s.href}
              // Real profile URLs open in a new tab; the "#" placeholder stays on the page
              {...(s.href.startsWith("http")
                ? { target: "_blank", rel: "noopener noreferrer", "aria-label": `${s.label} (opens in a new tab)` }
                : { "aria-label": s.label })}
              className={cn(tile, "hover:border-white hover:bg-white hover:text-ink")}
            >
              <Glyph network={s.network} className="size-[18px]" />
            </a>
          ) : (
            // No URL configured yet: shown for layout, but not a dead link.
            <span title={`${s.label}: link coming soon`} className={cn(tile, "cursor-default")}>
              <Glyph network={s.network} className="size-[18px]" />
              <span className="sr-only">{s.label} (coming soon)</span>
            </span>
          )}
        </li>
      ))}
    </ul>
  );
}
