import Image from "next/image";
import { facilities } from "@/lib/content";
import { cn } from "@/lib/utils";
import { ImageReveal, Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

// Editorial grid: a full-bleed lead image, then an asymmetric 2+2 rhythm.
const layout = [
  { cell: "md:col-span-12", frame: "aspect-[16/9] md:aspect-[21/9]", sizes: "100vw" },
  { cell: "md:col-span-5", frame: "aspect-[4/5]", sizes: "(min-width: 768px) 42vw, 100vw" },
  { cell: "md:col-span-7 md:pt-24", frame: "aspect-[4/3]", sizes: "(min-width: 768px) 58vw, 100vw" },
  { cell: "md:col-span-7", frame: "aspect-[16/10]", sizes: "(min-width: 768px) 58vw, 100vw" },
  { cell: "md:col-span-5", frame: "aspect-[4/3] md:aspect-[5/4]", sizes: "(min-width: 768px) 42vw, 100vw" },
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
                    className="object-cover brightness-90 transition-[transform,filter] duration-[1.6s] ease-[var(--ease-out-expo)] group-hover:scale-[1.04] group-hover:brightness-110"
                  />
                </ImageReveal>
                <Reveal y={10}>
                  <figcaption className="mt-4 flex items-baseline justify-between gap-4 border-t border-white/15 pt-4">
                    <span className="display text-lg md:text-xl">{f.title}</span>
                    <span
                      aria-hidden
                      className="h-px w-10 origin-right scale-x-50 bg-white/50 transition-transform duration-700 group-hover:scale-x-100"
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
