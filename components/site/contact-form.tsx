"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const field =
  "h-12 border-0 border-b border-white/25 bg-transparent px-0 text-base text-white placeholder:text-white/55 focus-visible:border-white focus-visible:ring-0 dark:bg-transparent md:text-base";

/**
 * Enquiry form with no server component: it opens the visitor's email client
 * with the message pre-filled, so no personal data is stored or sent by the site.
 * Disabled until `site.contact.email` is configured.
 */
export function ContactForm({ email }: { email: string }) {
  const [error, setError] = useState<string | null>(null);
  const enabled = email.length > 0;

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!enabled) return;
    const data = new FormData(e.currentTarget);
    const get = (k: string) => String(data.get(k) ?? "").trim().slice(0, 2000);
    const name = get("name");
    const message = get("message");
    if (!name || !message) {
      setError("Please add your name and a short message.");
      return;
    }
    setError(null);
    const body = [
      `Name: ${name}`,
      `Company: ${get("company") || "-"}`,
      `Phone: ${get("phone") || "-"}`,
      "",
      message,
    ].join("\n");
    const subject = `Enquiry from ${name}${get("company") ? `, ${get("company")}` : ""}`;
    window.location.href = `mailto:${encodeURIComponent(email)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-8 sm:grid-cols-2" aria-describedby="form-note">
      <div className="grid gap-2">
        <Label htmlFor="name" className="eyebrow text-white/60">Name *</Label>
        <Input id="name" name="name" autoComplete="name" required maxLength={120} className={field} />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="company" className="eyebrow text-white/60">Company</Label>
        <Input id="company" name="company" autoComplete="organization" maxLength={160} className={field} />
      </div>
      <div className="grid gap-2 sm:col-span-2">
        <Label htmlFor="phone" className="eyebrow text-white/60">Phone</Label>
        <Input id="phone" name="phone" type="tel" autoComplete="tel" maxLength={32} className={field} />
      </div>
      <div className="grid gap-2 sm:col-span-2">
        <Label htmlFor="message" className="eyebrow text-white/60">Message *</Label>
        <Textarea
          id="message"
          name="message"
          required
          rows={4}
          maxLength={2000}
          placeholder="Tell us about your fabric requirement"
          className={`${field} min-h-28 resize-none py-3`}
        />
      </div>

      <div className="flex flex-col gap-4 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
        <p id="form-note" className="text-xs leading-relaxed text-white/60" aria-live="polite">
          {error ??
            (enabled
              ? "Submitting opens your email app with this message ready to send."
              : "Online enquiries will open shortly.")}
        </p>
        <button
          type="submit"
          disabled={!enabled}
          className="group inline-flex h-14 shrink-0 items-center justify-between gap-6 bg-white px-6 text-sm font-medium tracking-wide text-ink uppercase transition-colors hover:bg-white/85 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white disabled:cursor-not-allowed disabled:opacity-40"
        >
          Send enquiry
          <ArrowRight className="size-4 transition-transform duration-500 group-hover:translate-x-1" strokeWidth={1.75} />
        </button>
      </div>
    </form>
  );
}
