import Image from "next/image";
import { machinery, type SpecTable } from "@/lib/content";
import { cn } from "@/lib/utils";
import { ImageReveal, Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

function Spec({ table }: { table: SpecTable }) {
  const last = table.columns.length - 1;
  return (
    <table className="w-full border-collapse text-left">
      {table.caption ? (
        <caption className="eyebrow pb-3 text-left text-ink/60">{table.caption}</caption>
      ) : null}
      <thead>
        <tr className="border-b border-ink">
          {table.columns.map((col, i) => (
            <th
              key={col}
              scope="col"
              className={cn(
                "eyebrow py-3 font-normal text-ink/60",
                i === last && "text-right",
              )}
            >
              {col}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {table.rows.map((row) => (
          <tr
            key={row.join("-")}
            className="border-b border-ink/12 transition-colors hover:bg-ink/[0.035]"
          >
            {row.map((cell, i) =>
              i === 0 ? (
                <th key={i} scope="row" className="py-4 pr-4 font-medium">
                  {cell}
                </th>
              ) : (
                <td
                  key={i}
                  className={cn(
                    "py-4 pr-4 text-ink/70",
                    i === last && "pr-0 text-right font-mono text-lg tabular-nums text-ink",
                  )}
                >
                  {cell}
                </td>
              ),
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export function Machinery() {
  return (
    <section
      id="machinery"
      aria-labelledby="machinery-title"
      className="bg-paper text-ink"
    >
      <div className="mx-auto max-w-[1440px] px-5 py-24 md:px-10 md:py-36">
        <SectionHeading
          id="machinery-title"
          label="Our machineries"
          title="Process capacity, through partners."
        >
          Knitting, washing and heat setting, dyeing, and brushing and raising
          are carried out through outsourcing partners.
        </SectionHeading>

        <div className="mt-16 space-y-20 md:mt-24 md:space-y-28">
          {machinery.map((group, i) => {
            const flip = i % 2 === 1;
            return (
              <article
                key={group.key}
                aria-labelledby={`machinery-${group.key}`}
                className="grid gap-8 md:grid-cols-12 md:gap-10"
              >
                <ImageReveal
                  className={cn(
                    "relative aspect-[16/10] bg-ink md:col-span-6",
                    flip && "md:order-2",
                  )}
                >
                  <Image
                    src={group.image}
                    alt={group.alt}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                  />
                </ImageReveal>

                <div className={cn("flex flex-col md:col-span-6", flip ? "md:pr-6" : "md:pl-6")}>
                  <Reveal>
                    <div className="flex flex-wrap items-center justify-between gap-4 border-b border-ink/15 pb-5">
                      <h3
                        id={`machinery-${group.key}`}
                        className="display text-[clamp(1.45rem,2.4vw,2.1rem)]"
                      >
                        {group.title}
                      </h3>
                    </div>
                  </Reveal>

                  <Reveal delay={0.1} className="mt-6 space-y-10">
                    {group.tables?.map((t, ti) => <Spec key={ti} table={t} />)}
                    {group.list ? (
                      <dl className="grid grid-cols-2 border-t border-ink">
                        {group.list.map((item, li) => (
                          <div
                            key={item.label}
                            className={cn("py-6", li === 0 ? "border-r border-ink/12 pr-6" : "pl-6")}
                          >
                            <dt className="eyebrow text-ink/60">{item.label}</dt>
                            <dd className="mt-3">
                              <span className="display text-5xl tabular-nums">
                                {item.value.split(" ")[0]}
                              </span>{" "}
                              <span className="text-ink/60">{item.value.split(" ").slice(1).join(" ")}</span>
                            </dd>
                          </div>
                        ))}
                      </dl>
                    ) : null}
                  </Reveal>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
