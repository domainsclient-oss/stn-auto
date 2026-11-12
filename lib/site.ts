/**
 * Site-wide configuration.
 *
 * Fields marked TODO are deliberately left empty: fill them with STN AUTO's
 * real details. Empty values render as "To be updated" on the page and are
 * omitted from structured data, so nothing invented is ever published.
 */
export const site = {
  name: "STN AUTO PRIVATE LIMITED",
  shortName: "STN AUTO",
  tagline: "Automotive Seat Material Manufacturer",
  description:
    "STN AUTO PRIVATE LIMITED is an ISO 9001:2015 certified manufacturer of automotive seat fabrics in Surat, Gujarat, India: warp knitted, weft knitted and pile fabrics made to OEM standards.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  city: "Surat",
  region: "Gujarat",
  country: "India",
  incorporated: "October 2021",
  contact: {
    /** TODO: full registered / plant address, one line per entry. */
    addressLines: [] as string[],
    /** TODO: e.g. "+91 00000 00000" */
    phone: "" as string,
    /** TODO: enquiry inbox. The enquiry form is disabled until this is set. */
    email: "" as string,
  },
  /**
   * TODO: replace this SAMPLE with the real ISO 9001:2015 certificate scan.
   * Put the file in /public/images, update src/width/height, and change alt to
   * describe the official certificate.
   */
  certificateImage: {
    src: "/images/iso-certificate-sample.webp",
    width: 1240,
    height: 1754,
    alt: "Sample ISO 9001:2015 certificate layout for STN AUTO PRIVATE LIMITED",
  } as null | { src: string; width: number; height: number; alt: string },
} as const;

/**
 * TODO: paste STN AUTO's real profile URLs. Every icon shows in the footer;
 * an icon with an empty URL is not clickable until its URL is filled in.
 */
export const socialLinks: { network: "linkedin" | "instagram" | "facebook" | "youtube"; label: string; href: string }[] = [
  { network: "linkedin", label: "LinkedIn", href: "" },
  { network: "instagram", label: "Instagram", href: "" },
  { network: "facebook", label: "Facebook", href: "" },
  { network: "youtube", label: "YouTube", href: "" },
];

export const navItems = [
  { href: "#home", id: "home", label: "Home" },
  { href: "#about", id: "about", label: "About" },
  { href: "#vision", id: "vision", label: "Vision & Mission" },
  { href: "#products", id: "products", label: "Products" },
  { href: "#infrastructure", id: "infrastructure", label: "Infrastructure" },
  { href: "#quality", id: "quality", label: "Quality" },
  { href: "#contact", id: "contact", label: "Contact" },
] as const;
