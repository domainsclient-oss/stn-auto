import { ArrowDownRight, ArrowRight } from "lucide-react";
import { site } from "@/lib/site";
import { HeroMedia } from "./hero-media";

export function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="dark-surface relative isolate flex min-h-[640px] h-svh flex-col overflow-hidden bg-ink text-white"
    >
      <HeroMedia />
      {/* Readability: a light wash keeps the photo's colour; the scrim sits only where the copy is */}
      <div aria-hidden className="absolute inset-0 bg-ink/25" />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/0"
      />

      <div className="relative mx-auto flex w-full max-w-[1440px] flex-1 flex-col justify-end px-5 pt-28 pb-10 md:px-10 md:pb-14">
        <p
          className="eyebrow mb-6 flex flex-wrap items-center gap-x-3 gap-y-2 text-white/70 animate-rise"
          style={{ animationDelay: "0.1s" }}
        >
          <span className="text-white">{site.name}</span>
          <span aria-hidden className="hidden h-px w-8 bg-white/40 sm:block" />
          <span>{site.tagline}</span>
        </p>

        <h1 id="hero-title" className="display max-w-[16ch] text-[clamp(2.25rem,5.6vw,6rem)] lg:max-w-none">
          <span className="block animate-rise" style={{ animationDelay: "0.2s" }}>
            Engineered for comfort.
          </span>
          <span
            className="block text-white/55 animate-rise"
            style={{ animationDelay: "0.35s" }}
          >
            Designed for automotive excellence.
          </span>
        </h1>

        <div
          className="mt-8 grid gap-8 md:mt-10 md:grid-cols-12 md:items-end animate-rise"
          style={{ animationDelay: "0.5s" }}
        >
          <p className="max-w-xl text-base leading-relaxed text-white/75 md:col-span-6 md:text-lg">
            Precision-engineered automotive fabrics. Quality-driven manufacturing.
            Innovation for the future of mobility.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row md:col-span-6 md:justify-end">
            <a
              href="#products"
              className="group inline-flex h-14 items-center justify-between gap-6 bg-white px-6 text-sm font-medium tracking-wide text-ink uppercase transition-colors hover:bg-white/85 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              Explore our capabilities
              <ArrowRight
                className="size-4 transition-transform duration-500 group-hover:translate-x-1"
                strokeWidth={1.75}
              />
            </a>
            <a
              href="#contact"
              className="group inline-flex h-14 items-center justify-between gap-6 border border-white/40 px-6 text-sm font-medium tracking-wide text-white uppercase transition-colors hover:border-white hover:bg-white/5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              Contact us
              <ArrowDownRight
                className="size-4 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:translate-y-0.5"
                strokeWidth={1.75}
              />
            </a>
          </div>
        </div>

        <dl
          className="mt-12 grid grid-cols-2 border-t border-white/15 pt-6 text-white/60 md:mt-16 md:grid-cols-4 animate-rise"
          style={{ animationDelay: "0.65s" }}
        >
          <div className="py-2">
            <dt className="eyebrow text-white/60">Location</dt>
            <dd className="mt-2 text-sm text-white">
              {site.city}, {site.region}, {site.country}
            </dd>
          </div>
          <div className="py-2">
            <dt className="eyebrow text-white/60">Certification</dt>
            <dd className="mt-2 text-sm text-white">ISO 9001:2015</dd>
          </div>
          <div className="py-2">
            <dt className="eyebrow text-white/60">Incorporated</dt>
            <dd className="mt-2 text-sm text-white">{site.incorporated}</dd>
          </div>
          <div className="hidden items-end justify-end py-2 md:flex">
            <a href="#about" className="eyebrow flex items-center gap-3 text-white/60 hover:text-white">
              Scroll
              <span className="relative block h-10 w-px overflow-hidden bg-white/20">
                <span className="absolute inset-0 bg-white animate-scroll-cue" />
              </span>
            </a>
          </div>
        </dl>
      </div>
    </section>
  );
}
