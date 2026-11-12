import Image from "next/image";
import { FileBadge2 } from "lucide-react";
import { site } from "@/lib/site";
import { ImageReveal, Reveal, Rule } from "./reveal";
import { SectionHeading } from "./section-heading";

const pillars = [
  {
    title: "ISO 9001:2015",
    body: "A certified quality management system across the business.",
  },
  {
    title: "OEM standards",
    body: "Products manufactured according to OEM standards: HMI & KMI.",
  },
  {
    title: "Fabric inspection",
    body: "A dedicated inspection facility and inspection machine at the plant.",
  },
] as const;

export function Quality() {
  const cert = site.certificateImage;
  return (
    <section
      id="quality"
      aria-labelledby="quality-title"
      className="bg-paper text-ink"
    >
      <div className="mx-auto max-w-[1440px] px-5 py-24 md:px-10 md:py-36">
        <SectionHeading
          id="quality-title"
          label="Our certification"
          title="Committed to quality."
        >
          STN AUTO is an ISO 9001:2015 certified company.
        </SectionHeading>

        <div className="mt-16 grid gap-12 md:mt-24 lg:grid-cols-12 lg:gap-10">
          {/* Certificate frame: shows the real scan once supplied via lib/site.ts */}
          <Reveal className="lg:col-span-5">
            <figure className="border border-ink/15 bg-white p-4 md:p-6">
              <div className="relative aspect-[1/1.414] w-full overflow-hidden bg-paper-2">
                {cert ? (
                  <Image
                    src={cert.src}
                    alt={cert.alt}
                    width={cert.width}
                    height={cert.height}
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    className="h-full w-full object-contain"
                  />
                ) : (
                  <div className="absolute inset-3 flex flex-col items-center justify-center gap-5 border border-dashed border-ink/25 p-6 text-center">
                    <FileBadge2 className="size-10 text-ink/35" strokeWidth={1.25} aria-hidden />
                    <div>
                      <p className="display text-xl">ISO 9001:2015</p>
                      <p className="eyebrow mt-3 text-ink/60">Certificate image placeholder</p>
                    </div>
                  </div>
                )}
              </div>
              <figcaption className="eyebrow mt-4 flex justify-between text-ink/60">
                <span>Quality management system</span>
                <span>ISO 9001:2015</span>
              </figcaption>
            </figure>
          </Reveal>

          <div className="flex flex-col lg:col-span-7 lg:pl-10">
            <ImageReveal className="relative aspect-[16/10] w-full bg-ink">
              <Image
                src="/images/quality.webp"
                alt="Inspecting knitted fabric through a magnifying loupe on a lit table"
                fill
                sizes="(min-width: 1024px) 55vw, 100vw"
                className="object-cover object-[50%_40%]"
              />
            </ImageReveal>
            <ul className="mt-10">
              {pillars.map((p, i) => (
                <li key={p.title}>
                  <Rule delay={0.1 * i} />
                  <Reveal delay={0.1 * i} y={12}>
                    <div className="grid gap-2 py-6 sm:grid-cols-12 sm:gap-6">
                      <h3 className="display text-xl sm:col-span-5">{p.title}</h3>
                      <p className="text-ink/65 sm:col-span-7">{p.body}</p>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
