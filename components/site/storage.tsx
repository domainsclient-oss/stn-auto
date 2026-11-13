import Image from "next/image";
import { storage } from "@/lib/content";
import { cn } from "@/lib/utils";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

export function Storage() {
  return (
    <section
      id="storage"
      aria-labelledby="storage-title"
      className="dark-surface relative isolate overflow-hidden bg-ink text-white"
    >
      <Image
        src="/images/storage.webp"
        alt=""
        aria-hidden
        fill
        sizes="100vw"
        quality={70}
        className="-z-10 object-cover"
      />
      <div aria-hidden className="absolute inset-0 -z-10 bg-ink/75" />

      <div className="mx-auto max-w-[1440px] px-5 py-24 md:px-10 md:py-36">
        <SectionHeading
          id="storage-title"
          label="Storage facilities"
          tone="dark"
          title="Capacity at every stage."
        >
          From yarn to ready-for-dispatch goods.
        </SectionHeading>

        <ul className="mt-16 grid border-t border-white/25 md:mt-24 lg:grid-cols-3">
          {storage.map((s, i) => (
            <li
              key={s.key}
              className={cn(
                "flex flex-col border-b border-white/15 py-10 lg:border-b-0 lg:px-8 lg:py-12",
                i === 0 && "lg:pl-0",
                i < storage.length - 1 && "lg:border-r",
              )}
            >
              <Reveal delay={0.1 * i} className="flex h-full flex-col">
                <h3 className="display text-xl md:text-2xl">{s.title}</h3>

                <dl className="mt-auto space-y-8 pt-12">
                  {s.figures.map((f) => (
                    <div key={f.label}>
                      <dt className="eyebrow text-white/60">{f.label}</dt>
                      <dd className="mt-3 flex items-baseline gap-3">
                        <span className="display text-[clamp(2.5rem,4.4vw,4rem)] tabular-nums">
                          {f.value}
                        </span>
                        {f.unit ? (
                          <span className="eyebrow text-white/70">{f.unit}</span>
                        ) : null}
                      </dd>
                      {"note" in f ? (
                        <dd className="mt-2 text-sm text-white/70">{f.note}</dd>
                      ) : null}
                    </div>
                  ))}
                </dl>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
