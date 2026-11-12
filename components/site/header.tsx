"use client";

import { useEffect, useState } from "react";
import { MenuIcon } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navItems, site } from "@/lib/site";
import { cn } from "@/lib/utils";
import { Wordmark } from "./wordmark";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the nav item for the section currently in the middle of the viewport.
  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => Boolean(el));
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={cn(
        "dark-surface fixed inset-x-0 top-0 z-50 text-white transition-[background-color,border-color,backdrop-filter] duration-500",
        scrolled
          ? "border-b border-white/10 bg-ink/90 backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-[72px] max-w-[1440px] items-center justify-between px-5 md:px-10"
      >
        <a href="#home" aria-label={`${site.name}, back to top`} className="shrink-0">
          <Wordmark />
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={item.href}
                aria-current={active === item.id ? "true" : undefined}
                className={cn(
                  "link-underline eyebrow transition-colors",
                  active === item.id ? "text-white" : "text-white/60 hover:text-white",
                )}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            className="-mr-2 inline-flex size-11 items-center justify-center text-white lg:hidden"
            aria-label="Open menu"
          >
            <MenuIcon className="size-6" strokeWidth={1.5} />
          </SheetTrigger>
          <SheetContent
            side="right"
            className="dark-surface gap-0 border-white/10 bg-ink text-white data-[side=right]:w-full data-[side=right]:sm:max-w-md [&_[data-slot=sheet-close]]:top-4 [&_[data-slot=sheet-close]]:right-4 [&_[data-slot=sheet-close]]:text-white [&_[data-slot=sheet-close]]:hover:bg-white/10"
          >
            <div className="flex h-[72px] items-center px-5">
              <SheetTitle className="text-white">
                <Wordmark />
              </SheetTitle>
            </div>
            <SheetDescription className="sr-only">Site navigation</SheetDescription>
            <ul className="flex flex-1 flex-col justify-center gap-1 px-5">
              {navItems.map((item) => (
                <li key={item.id} className="border-b border-white/10">
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    aria-current={active === item.id ? "true" : undefined}
                    className="group flex py-4"
                  >
                    <span className="display text-[clamp(1.2rem,5.4vw,1.6rem)] break-words text-white/80 transition-colors group-hover:text-white group-aria-[current=true]:text-white">
                      {item.label}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
            <p className="eyebrow px-5 pt-6 pb-8 text-white/60">
              {site.city}, {site.region}, {site.country}
            </p>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}
