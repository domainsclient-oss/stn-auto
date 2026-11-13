import { ArrowUp } from "lucide-react";
import { navItems, site } from "@/lib/site";
import { SocialIcons } from "./social-icons";
import { Wordmark } from "./wordmark";

export function SiteFooter() {
  return (
    <footer className="dark-surface relative overflow-hidden border-t border-white/10 bg-ink text-white">
      <div className="mx-auto max-w-[1440px] px-5 pt-16 pb-8 md:px-10">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <a href="#home" aria-label={`${site.name}, back to top`} className="inline-block">
              <Wordmark />
            </a>
            <p className="eyebrow mt-6 text-white/60">{site.tagline}</p>
            <address className="mt-5 max-w-sm border-l-2 border-white/20 pl-4 text-sm leading-relaxed text-white/75 not-italic">
              <span className="block font-medium text-white">{site.name}</span>
              {site.contact.addressLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
            <SocialIcons className="mt-8" />
          </div>
          <nav aria-label="Footer" className="md:col-span-5">
            <ul className="grid grid-flow-col grid-cols-2 grid-rows-4 gap-x-10 gap-y-3">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a href={item.href} className="link-underline text-sm text-white/65 hover:text-white">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="md:col-span-2 md:text-right">
            <a
              href="#home"
              className="eyebrow inline-flex items-center gap-2 text-white/65 hover:text-white"
            >
              Back to top <ArrowUp className="size-3.5" strokeWidth={1.75} aria-hidden />
            </a>
          </div>
        </div>
        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/60 md:flex-row md:justify-between">
          <p>© {site.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
