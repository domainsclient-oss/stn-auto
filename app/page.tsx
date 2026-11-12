import { About } from "@/components/site/about";
import { Contact } from "@/components/site/contact";
import { Customers } from "@/components/site/customers";
import { Equipment } from "@/components/site/equipment";
import { SiteFooter } from "@/components/site/footer";
import { SiteHeader } from "@/components/site/header";
import { Hero } from "@/components/site/hero";
import { Infrastructure } from "@/components/site/infrastructure";
import { Machinery } from "@/components/site/machinery";
import { Process } from "@/components/site/process";
import { Products } from "@/components/site/products";
import { Quality } from "@/components/site/quality";
import { Storage } from "@/components/site/storage";
import { VisionMission } from "@/components/site/vision-mission";
import { site } from "@/lib/site";

function OrganizationJsonLd() {
  const { email, phone } = site.contact;
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    alternateName: site.shortName,
    url: site.url,
    description: site.description,
    foundingDate: "2021-10",
    address: {
      "@type": "PostalAddress",
      addressLocality: site.city,
      addressRegion: site.region,
      addressCountry: "IN",
    },
    ...(email ? { email } : {}),
    ...(phone ? { telephone: phone } : {}),
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "certification",
      name: "ISO 9001:2015",
    },
  };
  return (
    <script
      type="application/ld+json"
      // Static, developer-controlled data; `<` is escaped to keep the script block safe.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

export default function Home() {
  return (
    <>
      <OrganizationJsonLd />
      <SiteHeader />
      <main id="main">
        <Hero />
        <About />
        <VisionMission />
        <Customers />
        <Products />
        <Process />
        <Quality />
        <Infrastructure />
        <Machinery />
        <Storage />
        <Contact />
        <Equipment />
      </main>
      <SiteFooter />
    </>
  );
}
