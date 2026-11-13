import type { Metadata, Viewport } from "next";
import { Archivo, Geist_Mono, Instrument_Sans } from "next/font/google";
import { MotionProvider } from "@/components/site/motion-provider";
import { site } from "@/lib/site";
import "./globals.css";

// Body face: Instrument Sans, a crisp grotesk that pairs with the wide Archivo display cut.
const bodySans = Instrument_Sans({
  variable: "--font-body-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  axes: ["wdth"],
  display: "swap",
});

const title = `${site.name} | Automotive Seat Fabric Manufacturer, Surat`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: title,
    template: `%s | ${site.shortName}`,
  },
  description: site.description,
  applicationName: site.shortName,
  keywords: [
    "automotive seat fabric",
    "automotive fabric manufacturer",
    "warp knitted fabric",
    "weft knitted fabric",
    "pile fabric",
    "warp knit scrim",
    "polywarp",
    "circular knit scrim",
    "car seat upholstery fabric",
    "ISO 9001:2015",
    "Surat",
    "Gujarat",
    "India",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    siteName: site.name,
    title,
    description: site.description,
    images: [
      {
        url: "/video/hero-poster-v2.jpg",
        width: 2560,
        height: 1429,
        alt: "Close-up of automotive fabric on a warp knitting machine",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: site.description,
    images: ["/video/hero-poster-v2.jpg"],
  },
  robots: { index: true, follow: true },
  formatDetection: { telephone: false, email: false, address: false },
};

export const viewport: Viewport = {
  themeColor: "#0b0b0b",
  colorScheme: "dark light",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-IN"
      data-scroll-behavior="smooth"
      className={`${bodySans.variable} ${geistMono.variable} ${archivo.variable} antialiased`}
    >
      <body className="min-h-full">
        <a
          href="#main"
          className="sr-only z-[100] bg-paper px-4 py-3 text-ink focus:not-sr-only focus:fixed focus:top-4 focus:left-4"
        >
          Skip to content
        </a>
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
