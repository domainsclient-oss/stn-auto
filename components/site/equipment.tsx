import { equipment } from "@/lib/content";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

const pad = (n: number) => String(n).padStart(2, "0");

/**
 * Equipment as an instrument catalogue: each division is a band with a sticky
 * summary panel (count, units, location) beside a hairline grid of spec tiles.
 * Every tile keeps the original fields: S.No., item, maker, range, qty, location.
 */
export function Equipment() {
  // Serial numbers run continuously across both divisions.
  let serial = 0;
  const groups = equipment.map((group) => {
    const items = group.items.map((item) => ({ ...item, sno: ++serial }));
    const locations = [...new Set(items.map((i) => i.location))];
    const units = items.reduce((sum, i) => sum + i.qty, 0);
    return { ...group, items, locations, units };
  });

  return (
    <section id="equipment" aria-labelledby="equipment-title" className="bg-paper text-ink">
      <div className="mx-auto max-w-[1440px] px-5 py-24 md:px-10 md:py-32">
        <SectionHeading id="equipment-title" label="Measuring & testing" title="Our equipments." />

        <div className="mt-16 space-y-20 md:mt-24 md:space-y-28">
          {groups.map((group, gi) => (
            <article
              key={group.division}
              aria-labelledby={`equipment-${gi}`}
              className="grid gap-8 border-t-2 border-ink pt-8 lg:grid-cols-12 lg:gap-10 lg:pt-10"
            >
              {/* Division summary, pinned while its instruments scroll by */}
              <div className="lg:col-span-4">
                <Reveal className="lg:sticky lg:top-28">
                  <h3
                    id={`equipment-${gi}`}
                    className="display text-[clamp(1.6rem,2.6vw,2.4rem)] leading-[1.02]"
                  >
                    {group.division}
                  </h3>
                  <dl className="mt-8 grid grid-cols-3 border-y border-ink/15 lg:grid-cols-1">
                    <div className="py-5 pr-4 lg:border-b lg:border-ink/15 lg:pr-0">
                      <dt className="eyebrow text-ink/65">Instruments</dt>
                      <dd className="display mt-2 text-4xl leading-none tabular-nums md:text-5xl">
                        {pad(group.items.length)}
                      </dd>
                    </div>
                    <div className="border-l border-ink/15 py-5 pl-4 lg:border-b lg:border-l-0 lg:pl-0">
                      <dt className="eyebrow text-ink/65">Total units</dt>
                      <dd className="display mt-2 text-4xl leading-none tabular-nums md:text-5xl">
                        {pad(group.units)}
                      </dd>
                    </div>
                    <div className="border-l border-ink/15 py-5 pl-4 lg:border-l-0 lg:pl-0">
                      <dt className="eyebrow text-ink/65">Location</dt>
                      <dd className="mt-3 text-base font-medium md:text-lg">
                        {group.locations.join(", ")}
                      </dd>
                    </div>
                  </dl>
                </Reveal>
              </div>

              {/* Spec tiles on a hairline grid */}
              <ul className="grid gap-px border border-ink/15 bg-ink/15 sm:grid-cols-2 lg:col-span-8 xl:grid-cols-3">
                {group.items.map((row, i) => (
                  <li key={row.sno} className="bg-paper">
                    <Reveal delay={0.05 * i} y={14} className="h-full">
                      <div className="group relative flex h-full flex-col p-5 sm:min-h-72 sm:p-6 transition-colors duration-500 hover:bg-ink hover:text-white md:p-7">
                        <div className="flex items-start justify-between gap-4">
                          <span className="font-mono text-sm text-ink/65 tabular-nums transition-colors duration-500 group-hover:text-white/65">
                            <span className="sr-only">S.No. </span>
                            {pad(row.sno)}
                          </span>
                          <span className="text-right">
                            <span className="eyebrow block text-ink/65 transition-colors duration-500 group-hover:text-white/65">
                              Qty
                            </span>
                            <span className="display mt-1 block text-4xl leading-none tabular-nums">
                              {row.qty}
                            </span>
                          </span>
                        </div>

                        <h4 className="display mt-4 text-xl sm:mt-8 leading-[1.1] md:text-[1.4rem]">{row.item}</h4>

                        <dl className="mt-auto space-y-2.5 pt-5 text-sm sm:space-y-3 sm:pt-8">
                          {[
                            ["Maker", row.maker, false],
                            ["Range", row.range, true],
                            ["Location", row.location, false],
                          ].map(([label, value, mono]) => (
                            <div
                              key={label as string}
                              className="flex items-baseline justify-between gap-4 border-t border-ink/12 pt-3 transition-colors duration-500 group-hover:border-white/15"
                            >
                              <dt className="eyebrow text-ink/65 transition-colors duration-500 group-hover:text-white/65">
                                {label}
                              </dt>
                              <dd
                                className={
                                  mono
                                    ? "whitespace-nowrap font-mono tabular-nums"
                                    : "text-right font-medium"
                                }
                              >
                                {value}
                              </dd>
                            </div>
                          ))}
                        </dl>

                        {/* Measuring-scale ticks along the base of each tile */}
                        <span
                          aria-hidden
                          className="mt-5 block h-3 opacity-30 sm:mt-6 transition-opacity duration-500 group-hover:opacity-60 [background-image:repeating-linear-gradient(to_right,currentColor_0_1px,transparent_1px_8px),repeating-linear-gradient(to_right,currentColor_0_1px,transparent_1px_40px)] [background-position:0_100%,0_100%] [background-repeat:repeat-x] [background-size:100%_6px,100%_12px]"
                        />
                      </div>
                    </Reveal>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
