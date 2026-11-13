import Image from "next/image";
import { companyFacts } from "@/lib/content";
import { site } from "@/lib/site";
import { ImageReveal, Reveal, Rule } from "./reveal";

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="relative bg-paper text-ink"
    >
      <div className="mx-auto grid max-w-[1440px] gap-14 px-5 py-24 md:px-10 md:py-36 lg:grid-cols-12 lg:gap-10">
        <div className="flex flex-col lg:col-span-6 lg:pr-8">
          <Reveal>
            <h2
              id="about-title"
              className="display text-[clamp(2rem,3.6vw,3.75rem)]"
            >
              Engineering fabrics.
              <br />
              <span className="text-ink/55">Building trust.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-10 max-w-xl text-lg leading-relaxed text-ink/70 md:text-xl">
              STN AUTO&apos;s core business is the manufacturing of automotive
              fabrics, operating from {site.city}, {site.region}. We specialise in
              the materials that sit closest to the driver: the fabrics behind
              every seat.
            </p>
          </Reveal>

          <dl className="mt-12">
            {companyFacts.map((fact, i) => (
              <div key={fact.label}>
                <Rule delay={0.1 * i} />
                <Reveal delay={0.1 * i} y={12}>
                  <div className="grid grid-cols-12 items-baseline gap-4 py-5">
                    <dt className="eyebrow col-span-4 text-ink/60 sm:col-span-3">
                      {fact.label}
                    </dt>
                    <dd className="col-span-8 text-base font-medium sm:col-span-9 md:text-lg">
                      {fact.value}
                    </dd>
                  </div>
                </Reveal>
              </div>
            ))}
            <Rule delay={0.4} />
          </dl>
        </div>

        {/* On desktop the photo stretches to the height of the text column */}
        <div className="relative flex flex-col lg:col-span-6">
          <ImageReveal className="relative aspect-[4/5] w-full bg-ink lg:aspect-auto lg:min-h-[420px] lg:flex-1">
            <Image
              src="/images/intro-seat.webp"
              alt="Close detail of a car seat upholstered in knitted automotive fabric"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </ImageReveal>
          {/* Caption hangs below the frame so the photo ends level with the text */}
          <p className="eyebrow mt-4 flex justify-between text-ink/60 lg:absolute lg:inset-x-0 lg:top-full">
            <span>Automotive seat fabric</span>
          </p>
        </div>
      </div>
    </section>
  );
}
