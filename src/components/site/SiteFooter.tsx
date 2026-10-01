import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Mail, MapPin, Phone, MessageSquare, Clock } from "lucide-react";
import { NAV, SITE } from "@/lib/site";
import wordmark from "@/assets/thumbnail_Logo 1 from Lea.svg";

function TikTok({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M19.6 6.3a5.3 5.3 0 0 1-3.2-1.1V15a5.5 5.5 0 1 1-5.5-5.5c.3 0 .6 0 .9.1v2.7a2.8 2.8 0 1 0 1.9 2.7V2h2.7a5.3 5.3 0 0 0 3.2 4.3v0Z" />
    </svg>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-navy text-white">
      <div className="container-x grid gap-12 py-16 md:grid-cols-4">
        <div className="md:col-span-1">
          <img
            src={wordmark}
            alt="Charleston Medicine and Behavioral Health"
            className="h-12 w-auto brightness-0 invert"
          />
          <p className="mt-4 text-sm text-white/70">
            Integrated concierge medicine, behavioral health, and wellness on James Island,
            Charleston.
          </p>
          <div className="mt-6 flex gap-3">
            <a href={SITE.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="grid size-9 place-items-center rounded-full border border-white/20 text-white/80 transition hover:border-gold hover:text-gold">
              <Facebook className="size-4" />
            </a>
            <a href={SITE.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="grid size-9 place-items-center rounded-full border border-white/20 text-white/80 transition hover:border-gold hover:text-gold">
              <Instagram className="size-4" />
            </a>
            <a href={SITE.social.tiktok} target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="grid size-9 place-items-center rounded-full border border-white/20 text-white/80 transition hover:border-gold hover:text-gold">
              <TikTok className="size-4" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-xs uppercase tracking-[0.2em] text-gold">Visit</h3>
          <p className="mt-4 flex items-start gap-2 text-sm text-white/85">
            <MapPin className="mt-0.5 size-4 shrink-0 text-blue-light" />
            <span>
              {SITE.address.line1}
              <br />
              {SITE.address.city}, {SITE.address.state} {SITE.address.zip}
            </span>
          </p>
          <p className="mt-4 flex items-start gap-2 text-sm text-white/85">
            <Clock className="mt-0.5 size-4 shrink-0 text-blue-light" />
            <span>
              {SITE.hours.map((h) => (
                <span key={h.d} className="block">
                  <span className="text-white">{h.d}:</span> {h.h}
                </span>
              ))}
            </span>
          </p>
        </div>

        <div>
          <h3 className="text-xs uppercase tracking-[0.2em] text-gold">Contact</h3>
          <ul className="mt-3 space-y-1 text-sm text-white/85">
            <li>
              <a href={SITE.phoneHref} className="inline-flex min-h-11 items-center gap-2 hover:text-gold">
                <Phone className="size-4 text-blue-light" /> Call {SITE.phone}
              </a>
            </li>
            <li>
              <a href={SITE.textHref} className="inline-flex min-h-11 items-center gap-2 hover:text-gold">
                <MessageSquare className="size-4 text-blue-light" /> Text {SITE.text}
              </a>
            </li>
            <li>
              <a href={SITE.emailHref} className="inline-flex min-h-11 items-center gap-2 hover:text-gold">
                <Mail className="size-4 text-blue-light" /> {SITE.email}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xs uppercase tracking-[0.2em] text-gold">Explore</h3>
          <ul className="mt-4 grid grid-cols-1 gap-2 text-sm text-white/85">
            {NAV.map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="hover:text-gold">{n.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-start justify-between gap-2 py-6 text-xs text-white/60 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
          <p>Charleston, South Carolina · James Island</p>
        </div>
      </div>
    </footer>
  );
}
