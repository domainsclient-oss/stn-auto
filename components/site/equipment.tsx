import { equipment } from "@/lib/content";
import { cn } from "@/lib/utils";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

const columns = ["S.No.", "Item", "Maker", "Range", "Qty", "Location"] as const;

export function Equipment() {
  // Serial numbers run continuously across both divisions.
  let serial = 0;
  const groups = equipment.map((group) => ({
    ...group,
    items: group.items.map((item) => ({ ...item, sno: ++serial })),
  }));

  return (
    <section
      id="equipment"
      aria-labelledby="equipment-title"
      className="bg-paper text-ink"
    >
      <div className="mx-auto max-w-[1440px] px-5 py-24 md:px-10 md:py-32">
        <SectionHeading
          id="equipment-title"
          label="Measuring & testing"
          title="Our equipments."
        />

        <div className="mt-16 space-y-16 md:mt-24 md:space-y-20">
          {groups.map((group, gi) => (
            <Reveal key={group.division} delay={0.05 * gi}>
              <article aria-labelledby={`equipment-${gi}`}>
                <header className="flex items-baseline justify-between gap-6 border-b-2 border-ink pb-4">
                  <h3 id={`equipment-${gi}`} className="display text-[clamp(1.45rem,2.4vw,2.1rem)]">
                    {group.division}
                  </h3>
                  <p className="eyebrow shrink-0 text-ink/65">
                    {group.items.length} {group.items.length === 1 ? "item" : "items"}
                  </p>
                </header>

                {/* Desktop and tablet: full specification table */}
                <table className="hidden w-full table-fixed border-collapse text-left md:table">
                  <caption className="sr-only">{group.division}</caption>
                  <thead>
                    <tr className="border-b border-ink/20">
                      {columns.map((col) => (
                        <th
                          key={col}
                          scope="col"
                          className={cn(
                            "eyebrow py-4 pr-4 font-medium text-ink/65",
                            col === "S.No." && "w-20",
                            col === "Item" && "w-[30%]",
                            col === "Maker" && "w-[20%]",
                            col === "Qty" && "w-20 text-right",
                            col === "Location" && "w-44 pr-0 text-right",
                          )}
                        >
                          {col}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {group.items.map((row) => (
                      <tr
                        key={row.sno}
                        className="border-b border-ink/12 transition-colors hover:bg-ink/[0.035]"
                      >
                        <td className="py-5 pr-4 font-mono text-sm text-ink/65 tabular-nums">
                          {String(row.sno).padStart(2, "0")}
                        </td>
                        <th scope="row" className="py-5 pr-4 text-base font-medium lg:text-lg">
                          {row.item}
                        </th>
                        <td className="py-5 pr-4 text-ink/75">{row.maker}</td>
                        <td className="py-5 pr-4 font-mono text-sm text-ink/80 tabular-nums">
                          {row.range}
                        </td>
                        <td className="py-5 pr-4 text-right font-mono text-lg text-ink tabular-nums">
                          {row.qty}
                        </td>
                        <td className="py-5 text-right">
                          <span className="eyebrow inline-flex border border-ink/25 px-2.5 py-1 text-ink/75">
                            {row.location}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                {/* Phone: one block per item, since six columns cannot fit */}
                <ul className="md:hidden">
                  {group.items.map((row) => (
                    <li key={row.sno} className="border-b border-ink/12 py-5">
                      <div className="flex items-baseline justify-between gap-4">
                        <p className="text-lg font-medium">
                          <span className="mr-3 font-mono text-sm text-ink/65 tabular-nums">
                            {String(row.sno).padStart(2, "0")}
                          </span>
                          {row.item}
                        </p>
                        <span className="eyebrow shrink-0 border border-ink/25 px-2 py-0.5 text-ink/75">
                          {row.location}
                        </span>
                      </div>
                      <dl className="mt-3 grid grid-cols-[1fr_9.5rem_2.5rem] gap-x-6 gap-y-3 text-sm">
                        <div>
                          <dt className="eyebrow text-ink/65">Maker</dt>
                          <dd className="mt-1 text-ink/80">{row.maker}</dd>
                        </div>
                        <div>
                          <dt className="eyebrow text-ink/65">Range</dt>
                          <dd className="mt-1 whitespace-nowrap font-mono text-ink/80 tabular-nums">{row.range}</dd>
                        </div>
                        <div className="text-right">
                          <dt className="eyebrow text-ink/65">Qty</dt>
                          <dd className="mt-1 font-mono text-base text-ink tabular-nums">{row.qty}</dd>
                        </div>
                      </dl>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
