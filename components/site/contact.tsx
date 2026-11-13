import { site } from "@/lib/site";
import { ContactForm } from "./contact-form";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

function Pending() {
  return <span className="text-white/60">To be updated</span>;
}

export function Contact() {
  const { addressLines, phone, email } = site.contact;
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="dark-surface border-t border-white/10 bg-ink text-white"
    >
      <div className="mx-auto max-w-[1440px] px-5 py-24 md:px-10 md:py-36">
        <SectionHeading
          id="contact-title"
          label="Contact"
          tone="dark"
          title={
            <>
              Let&apos;s talk
              <br />
              <span className="text-white/45">automotive fabrics.</span>
            </>
          }
        >
          For product enquiries, sampling and partnerships, reach the STN AUTO
          team in {site.city}.
        </SectionHeading>

        <div className="mt-16 grid gap-16 md:mt-24 lg:grid-cols-12 lg:gap-10">
          <Reveal className="lg:col-span-4 lg:col-start-1">
            <address className="not-italic">
              <dl className="divide-y divide-white/12 border-y border-white/12">
                <div className="py-6">
                  <dt className="eyebrow text-white/60">Company</dt>
                  <dd className="mt-2 text-lg">{site.name}</dd>
                </div>
                <div className="py-6">
                  <dt className="eyebrow text-white/60">Address</dt>
                  <dd className="mt-2 text-lg leading-snug">
                    {addressLines.length > 0 ? (
                      addressLines.map((line) => (
                        <span key={line} className="block">
                          {line}
                        </span>
                      ))
                    ) : (
                      <span className="block">
                        {site.city}, {site.region}, {site.country}
                      </span>
                    )}
                  </dd>
                </div>
                <div className="py-6">
                  <dt className="eyebrow text-white/60">Phone</dt>
                  <dd className="mt-2 text-lg">
                    {phone ? (
                      <a className="link-underline" href={`tel:${phone.replace(/[^\d+]/g, "")}`}>{phone}</a>
                    ) : (
                      <Pending />
                    )}
                  </dd>
                </div>
                <div className="py-6">
                  <dt className="eyebrow text-white/60">Email</dt>
                  <dd className="mt-2 text-lg">
                    {email ? (
                      <a className="link-underline" href={`mailto:${email}`}>{email}</a>
                    ) : (
                      <Pending />
                    )}
                  </dd>
                </div>
              </dl>
            </address>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-7 lg:col-start-6">
            <ContactForm email={email} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
