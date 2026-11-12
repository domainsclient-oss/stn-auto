import Image from "next/image";
import { customerSegments } from "@/lib/content";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

/**
 * Customer ledger: one row per category, the category set large on the left and
 * its customers' logos on white plates to the right. Plates sit on a shared
 * three-column track so every row aligns to the same grid.
 */
export function Customers() {
  return (
    <section
      id="customers"
      aria-labelledby="customers-title"
      className="border-t border-ink/10 bg-paper text-ink"
    >
      <div className="mx-auto max-w-[1440px] px-5 py-24 md:px-10 md:py-32">
        <SectionHeading
          id="customers-title"
          label="Our precious customers"
          title="Trusted across the automotive value chain"
        />

        <ul className="mt-16 border-t-2 border-ink lg:mt-24">
          {customerSegments.map((segment, i) => (
            <li key={segment.title} className="group border-b border-ink/15">
              <Reveal delay={0.06 * i} y={16}>
                <div className="flex flex-col gap-6 py-8 md:py-10 lg:flex-row lg:items-center lg:gap-8">
                  <div className="relative lg:w-[30%] lg:shrink-0">
                    {/* Hairline that draws in from the left as the row is hovered */}
                    <span
                      aria-hidden
                      className="absolute -top-8 left-0 hidden h-0.5 w-full origin-left scale-x-0 bg-ink transition-transform duration-700 ease-[var(--ease-out-expo)] group-hover:scale-x-100 md:-top-10 lg:block"
                    />
                    <h3 className="display text-[clamp(2rem,3.5vw,3.4rem)] transition-transform duration-700 ease-[var(--ease-out-expo)] lg:group-hover:translate-x-2">
                      {segment.title}
                    </h3>
                    <p className="mt-3 text-sm text-ink/65 md:text-base">{segment.detail}</p>
                  </div>

                  {/* Dotted leader, as in a printed index, carrying the eye to the logos */}
                  <span
                    aria-hidden
                    className="hidden h-px flex-1 bg-[radial-gradient(circle,rgb(0_0_0/0.35)_1px,transparent_1.5px)] bg-[length:8px_2px] bg-repeat-x lg:block"
                  />

                  <ul
                    aria-label={`${segment.title} customers`}
                    className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 lg:flex lg:shrink-0 lg:justify-end"
                  >
                    {segment.logos.map((logo) => (
                      <li
                        key={logo.name}
                        className={
                          segment.logos.length === 1
                            ? "col-span-2 md:col-span-1 lg:w-72"
                            : "lg:w-72"
                        }
                      >
                        <div className="group/plate flex h-32 items-center justify-center border border-ink/10 bg-white px-6 transition-[border-color,box-shadow] duration-500 hover:border-ink/40 hover:shadow-[0_18px_40px_-24px_rgb(0_0_0/0.35)] md:h-40">
                          <Image
                            src={logo.src}
                            alt={logo.name}
                            width={logo.width}
                            height={logo.height}
                            sizes="(min-width: 1024px) 260px, 45vw"
                            style={{ height: `${logo.h}px` }}
                            className="w-auto max-w-[82%] object-contain transition-transform duration-700 ease-[var(--ease-out-expo)] group-hover/plate:scale-[1.06]"
                          />
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
