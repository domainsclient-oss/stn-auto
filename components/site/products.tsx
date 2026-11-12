import Image from "next/image";
import { products } from "@/lib/content";
import { ImageReveal, Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

export function Products() {
  return (
    <section
      id="products"
      aria-labelledby="products-title"
      className="dark-surface bg-ink text-white"
    >
      <div className="mx-auto max-w-[1440px] px-5 py-24 md:px-10 md:py-36">
        <SectionHeading
          id="products-title"
          label="Our products"
          tone="dark"
          title="Precision in every thread."
        >
          Four product categories of warp and weft knitted automotive
          fabrics and scrims, manufactured to OEM standards.
        </SectionHeading>

        <ul className="mt-16 grid gap-x-6 gap-y-14 md:mt-24 md:grid-cols-2 xl:grid-cols-4">
          {products.map((product, i) => (
            <li key={product.index} className={i % 2 === 1 ? "md:mt-24 xl:mt-16" : ""}>
              <article className="group" aria-labelledby={`product-${product.index}`}>
                <ImageReveal delay={0.08 * i} className="relative aspect-[4/5] bg-ink-2">
                  <Image
                    src={product.image}
                    alt={product.alt}
                    fill
                    sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-[1.6s] ease-[var(--ease-out-expo)] group-hover:scale-[1.07]"
                  />
                </ImageReveal>
                <Reveal delay={0.08 * i + 0.1} y={16}>
                  <div className="mt-6 border-t border-white/15 pt-5">
                    <p className="eyebrow text-white/60">{product.family}</p>
                    <h3
                      id={`product-${product.index}`}
                      className="display mt-2 text-2xl md:text-[1.75rem]"
                    >
                      {product.variant}
                    </h3>
                    <p className="mt-4 text-sm leading-relaxed text-white/60">
                      {product.description}
                    </p>
                  </div>
                </Reveal>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
