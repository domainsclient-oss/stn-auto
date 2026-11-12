"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useSpring } from "motion/react";
import { processSteps } from "@/lib/content";
import { cn } from "@/lib/utils";
import { SectionHeading } from "./section-heading";

const total = processSteps.length;
const pad = (n: number) => String(n).padStart(2, "0");

/**
 * Manufacturing process as a scroll-driven production line.
 * Desktop: a sticky image frame on the left follows the step in view on the
 * right, with a counter, phase, progress ticks and a rail that fills as you go.
 * Phone/tablet: a swipeable strip of image cards.
 */
export function Process() {
  const [active, setActive] = useState(0);
  const listRef = useRef<HTMLOListElement>(null);
  const itemRefs = useRef<(HTMLLIElement | null)[]>([]);

  const { scrollYProgress } = useScroll({
    target: listRef,
    offset: ["start center", "end center"],
  });
  const railFill = useSpring(scrollYProgress, { stiffness: 140, damping: 30, mass: 0.4 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(Number((entry.target as HTMLElement).dataset.index));
          }
        }
      },
      { rootMargin: "-50% 0px -50% 0px" },
    );
    itemRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const current = processSteps[active];

  return (
    <section
      id="process"
      aria-labelledby="process-title"
      className="border-t border-ink/10 bg-paper-2 text-ink"
    >
      <div className="mx-auto max-w-[1440px] px-5 py-24 md:px-10 md:py-32">
        <SectionHeading
          id="process-title"
          label="Manufacturing process"
          title="From master chip to dispatch."
        >
          Ten stages, in the order every fabric moves through production.
        </SectionHeading>

        {/* ── Desktop: sticky frame + scrolling steps ─────────────────────── */}
        <div className="mt-24 hidden grid-cols-12 gap-12 lg:grid">
          <div className="col-span-6">
            <div className="sticky top-24 flex h-[calc(100svh-8rem)] max-h-[860px] flex-col">
              <div className="relative flex-1 overflow-hidden bg-ink">
                {processSteps.map((step, i) => (
                  <Image
                    key={step.image}
                    src={step.image}
                    alt=""
                    aria-hidden
                    fill
                    sizes="(min-width: 1440px) 680px, 48vw"
                    className={cn(
                      "object-cover transition-[opacity,transform] duration-[900ms] ease-[var(--ease-out-expo)]",
                      i === active ? "scale-100 opacity-100" : "scale-[1.06] opacity-0",
                    )}
                  />
                ))}
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/20 to-ink/30"
                />

                {/* Counter */}
                <div className="dark-surface absolute top-6 left-6 flex items-baseline gap-2 text-white">
                  <span className="display text-6xl leading-none tabular-nums">{pad(active + 1)}</span>
                  <span className="display text-xl leading-none text-white/60 tabular-nums">/ {pad(total)}</span>
                </div>

                {/* Current stage */}
                <div className="dark-surface absolute inset-x-6 bottom-6 text-white" aria-live="polite">
                  <p className="eyebrow text-white/75">{current.phase}</p>
                  <p className="display mt-2 text-[clamp(1.4rem,2vw,2rem)] leading-[1.05] text-balance">
                    {current.name}
                  </p>
                </div>
              </div>

              {/* Progress ticks */}
              <div className="mt-4 flex gap-1.5" aria-hidden>
                {processSteps.map((step, i) => (
                  <span
                    key={step.name}
                    className={cn(
                      "h-1 flex-1 transition-colors duration-500",
                      i <= active ? "bg-ink" : "bg-ink/15",
                    )}
                  />
                ))}
              </div>
            </div>
          </div>

          <ol ref={listRef} className="relative col-span-6 pl-14">
            {/* Rail with a fill that tracks scroll through the steps */}
            <span aria-hidden className="absolute top-0 bottom-0 left-[5px] w-px bg-ink/15" />
            <motion.span
              aria-hidden
              style={{ scaleY: railFill }}
              className="absolute top-0 bottom-0 left-[4.5px] w-0.5 origin-top bg-ink"
            />

            {processSteps.map((step, i) => {
              const isActive = i === active;
              const isDone = i < active;
              return (
                <li
                  key={step.name}
                  ref={(el) => {
                    itemRefs.current[i] = el;
                  }}
                  data-index={i}
                  className="relative flex min-h-[34vh] flex-col justify-center"
                >
                  <span
                    aria-hidden
                    className={cn(
                      "absolute top-1/2 -left-14 size-3 -translate-y-1/2 border-2 border-ink transition-colors duration-300",
                      isActive || isDone ? "bg-ink" : "bg-paper-2",
                    )}
                  />
                  <div className="flex items-baseline gap-5">
                    <span
                      className={cn(
                        "display w-16 shrink-0 text-4xl leading-none tabular-nums transition-colors duration-500",
                        isActive ? "text-ink" : "text-ink/45",
                      )}
                    >
                      {pad(i + 1)}
                    </span>
                    <div>
                      <p
                        className={cn(
                          "eyebrow transition-colors duration-500",
                          isActive ? "text-ink/70" : "text-ink/55",
                        )}
                      >
                        {step.phase}
                      </p>
                      <h3
                        className={cn(
                          "display mt-2 text-[clamp(1.6rem,2.4vw,2.4rem)] leading-[1.05] transition-[color,transform] duration-500 ease-[var(--ease-out-expo)]",
                          isActive ? "translate-x-0 text-ink" : "-translate-x-1 text-ink/45",
                        )}
                      >
                        {step.name}
                      </h3>
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>

        {/* ── Phone & tablet: swipeable cards ─────────────────────────────── */}
        <div className="mt-14 lg:hidden">
          <ol
            aria-label="Manufacturing process steps"
            className="-mx-5 flex snap-x snap-mandatory scroll-px-5 gap-4 overflow-x-auto px-5 pb-6 md:scroll-px-10 [scrollbar-width:none] md:-mx-10 md:px-10 [&::-webkit-scrollbar]:hidden"
          >
            {processSteps.map((step, i) => (
              <li key={step.name} className="w-[78%] shrink-0 snap-start sm:w-[46%] md:w-[38%]">
                <figure>
                  <div className="relative aspect-[4/5] overflow-hidden bg-ink">
                    <Image
                      src={step.image}
                      alt={step.alt}
                      fill
                      sizes="(min-width: 768px) 38vw, (min-width: 640px) 46vw, 78vw"
                      className="object-cover"
                    />
                    <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-ink/60 via-transparent to-transparent" />
                    <span className="display absolute top-4 left-4 text-4xl leading-none text-white tabular-nums">
                      {pad(i + 1)}
                    </span>
                  </div>
                  <figcaption className="mt-4 border-t-2 border-ink pt-3">
                    <p className="eyebrow text-ink/65">{step.phase}</p>
                    <h3 className="mt-1.5 text-lg font-medium leading-snug">{step.name}</h3>
                  </figcaption>
                </figure>
              </li>
            ))}
          </ol>
          <p className="eyebrow mt-2 text-ink/65" aria-hidden>
            Swipe to follow the line →
          </p>
        </div>
      </div>
    </section>
  );
}
