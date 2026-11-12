import Image from "next/image";
import { Reveal } from "./reveal";

export function VisionMission() {
  return (
    <section id="vision" aria-labelledby="vision-title">
      <h2 id="vision-title" className="sr-only">
        Vision and Mission
      </h2>

      {/* VISION: black, with a knitted texture */}
      <div className="dark-surface relative isolate overflow-hidden bg-ink text-white">
        <Image
          src="/images/texture.webp"
          alt=""
          aria-hidden
          fill
          sizes="100vw"
          quality={70}
          className="-z-10 object-cover opacity-30"
        />
        <div aria-hidden className="absolute inset-0 -z-10 bg-ink/60" />
        <div className="mx-auto max-w-[1440px] px-5 py-24 md:px-10 md:py-40">
          <div className="grid gap-10 md:grid-cols-12">
            <Reveal className="md:col-span-3">
              <p className="eyebrow flex items-center gap-3 text-white/60">
                <span aria-hidden className="h-px w-8 bg-current" />
                Vision
              </p>
            </Reveal>
            <div className="md:col-span-9">
              <Reveal delay={0.1}>
                <p className="display text-[clamp(1.55rem,3.1vw,2.9rem)] leading-[1.05] text-balance">
                  To provide premium-quality automotive fabrics to our valued
                  customers{" "}
                  <span className="text-white/45">
                    and stay ahead of competitors by developing new and innovative
                    products with unmatched quality.
                  </span>
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="mt-10 max-w-xl text-base leading-relaxed text-white/60">
                  Our vision stands firm and clear.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </div>

      {/* MISSION: inverted, white */}
      <div className="relative overflow-hidden bg-paper text-ink">
        <div className="relative mx-auto max-w-[1440px] px-5 py-24 md:px-10 md:py-36">
          <div className="grid gap-10 md:grid-cols-12">
            <Reveal className="md:col-span-3">
              <p className="eyebrow flex items-center gap-3 text-ink/60">
                <span aria-hidden className="h-px w-8 bg-current" />
                Mission
              </p>
            </Reveal>
            <div className="md:col-span-9">
              <ul>
                {["Effectively", "Responsibly", "Profitably"].map((word, i) => (
                  <li key={word} className="border-b border-ink/15 first:border-t">
                    <Reveal delay={0.1 * i} y={16}>
                      <p className="display py-4 text-[clamp(1.75rem,4.8vw,4rem)] md:py-5">{word}</p>
                    </Reveal>
                  </li>
                ))}
              </ul>
              <Reveal delay={0.3}>
                <p className="mt-12 max-w-2xl text-xl leading-snug text-ink/75 md:text-2xl">
                  Engage effectively, responsibly and profitably in the automotive
                  fabric industry.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
