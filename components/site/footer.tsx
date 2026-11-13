import { ArrowUp } from "lucide-react";
import { navItems, site } from "@/lib/site";
import { SocialIcons } from "./social-icons";
import { Wordmark } from "./wordmark";

// Footer menu split into two headed columns (rename headings here).
const menuColumns = [
  { heading: "Company", items: navItems.slice(0, 4) },
  { heading: "Quick Links", items: navItems.slice(4) },
];

/**
 * Footer: brand | two-column menu | address, with copyright and
 * "Back to top" in the bottom bar.
 */
export function SiteFooter() {
  return (
    <footer className="dark-surface relative overflow-hidden border-t border-white/10 bg-ink text-white">
      <div className="mx-auto max-w-[1440px] px-5 pt-16 pb-8 md:px-10">
        <div className="grid gap-10 md:grid-cols-12 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-5 lg:col-span-4">
            <a href="#home" aria-label={`${site.name}, back to top`} className="inline-block">
              <Wordmark />
            </a>
            <p className="eyebrow mt-6 text-white/60">{site.tagline}</p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/60">
              {site.name}. ISO 9001:2015 certified. {site.city}, {site.region},{" "}
              {site.country}.
            </p>
            <SocialIcons className="mt-8" />
          </div>

          {/* Menu, two headed columns */}
          <nav aria-label="Footer" className="grid grid-cols-2 gap-x-10 md:col-span-7 lg:col-span-4">
            {menuColumns.map((col) => (
              <div key={col.heading}>
                <p className="eyebrow text-white/60">{col.heading}</p>
                <ul className="mt-5 space-y-3">
                  {col.items.map((item) => (
                    <li key={item.id}>
                      <a href={item.href} className="link-underline text-sm text-white/65 hover:text-white">
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>

          {/* Address */}
          <div className="md:col-span-12 lg:col-span-4">
            <p className="eyebrow text-white/60">Address</p>
            <address className="mt-5 border-l-2 border-white/20 pl-4 text-sm leading-relaxed text-white/75 not-italic">
              <span className="block font-medium text-white">{site.name}</span>
              {site.contact.addressLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {site.name}. All rights reserved.</p>
          <a
            href="#home"
            className="eyebrow inline-flex items-center gap-2 text-white/65 hover:text-white"
          >
            Back to top <ArrowUp className="size-3.5" strokeWidth={1.75} aria-hidden />
          </a>
        </div>
      </div>
    </footer>
  );
}
