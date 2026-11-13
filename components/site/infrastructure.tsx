import Image from "next/image";
import { facilities } from "@/lib/content";
import { cn } from "@/lib/utils";
import { ImageReveal, Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

// Editorial grid: a full-bleed lead image, then an asymmetric 2+2 rhythm.
// On tablet/desktop each left/right pair shares one height (widths unchanged);
// phones keep each photo's natural aspect ratio.
const pairHeight = "md:aspect-auto md:h-[clamp(320px,36vw,560px)]";

const layout = [
  { cell: "md:col-span-12", frame: "aspect-[16/9] md:aspect-[21/9]", sizes: "100vw" },
  { cell: "md:col-span-5", frame: `aspect-[4/5] ${pairHeight}`, sizes: "(min-width: 768px) 42vw, 100vw" },
  { cell: "md:col-span-7", frame: `aspect-[4/3] ${pairHeight}`, sizes: "(min-width: 768px) 58vw, 100vw" },
  { cell: "md:col-span-7", frame: `aspect-[16/10] ${pairHeight}`, sizes: "(min-width: 768px) 58vw, 100vw" },
  { cell: "md:col-span-5", frame: `aspect-[4/3] ${pairHeight}`, sizes: "(min-width: 768px) 42vw, 100vw" },
];

export function Infrastructure() {
  return (
    <section
      id="infrastructure"
      aria-labelledby="infrastructure-title"
      className="dark-surface bg-ink text-white"
    >
      <div className="mx-auto max-w-[1440px] px-5 py-24 md:px-10 md:py-36">
        <SectionHeading
          id="infrastructure-title"
          label="Our plant & infrastructure"
          tone="dark"
          title={
            <>
              Built for precision.
              <br />
              <span className="text-white/45">Equipped for quality.</span>
            </>
          }
        />

        <ul className="mt-16 grid gap-6 md:mt-24 md:grid-cols-12 md:gap-8">
          {facilities.map((f, i) => (
            <li key={f.title} className={cn("group", layout[i].cell)}>
              <figure>
                <ImageReveal
                  delay={0.05 * (i % 2)}
                  className={cn("relative w-full bg-ink-2", layout[i].frame)}
                >
                  <Image
                    src={f.image}
                    alt={f.alt}
                    fill
                    sizes={layout[i].sizes}
                    className="object-cover transition-transform duration-[1400ms] ease-[var(--ease-out-expo)] will-change-transform group-hover:scale-[1.06]"
                  />
                  {/* Hover: a light wash lifts off the photo... */}
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-0 bg-ink/20 transition-opacity duration-700 ease-[var(--ease-out-expo)] group-hover:opacity-0"
                  />
                  {/* ...and a hairline frame settles in just inside the edges */}
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-3 scale-[0.97] border border-white/70 opacity-0 transition-[opacity,transform] duration-700 ease-[var(--ease-out-expo)] group-hover:scale-100 group-hover:opacity-100 md:inset-5"
                  />
                </ImageReveal>
                <Reveal y={10}>
                  <figcaption className="mt-4 flex items-baseline justify-between gap-4 border-t border-white/15 pt-4">
                    <span className="display text-lg transition-transform duration-700 ease-[var(--ease-out-expo)] group-hover:translate-x-1.5 md:text-xl">
                      {f.title}
                    </span>
                    <span
                      aria-hidden
                      className="h-px w-12 origin-right scale-x-50 bg-white/50 transition-[transform,background-color] duration-700 ease-[var(--ease-out-expo)] group-hover:scale-x-100 group-hover:bg-white"
                    />
                  </figcaption>
                </Reveal>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
