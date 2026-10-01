import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";
import { NAV, SITE } from "@/lib/site";
import { cn } from "@/lib/utils";
import wordmark from "@/assets/thumbnail_Logo 1 from Lea.svg";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b bg-white/85 backdrop-blur-md transition-shadow duration-300",
        scrolled ? "border-border shadow-[0_4px_20px_-8px_rgba(27,43,107,0.18)]" : "border-border/70",
      )}
    >
      <div
        className={cn(
          "flex items-center justify-between gap-3 pl-4 pr-4 transition-all duration-300 md:pl-8 md:pr-8 xl:gap-3 xl:pl-6 xl:pr-6 2xl:gap-6 2xl:pl-8 2xl:pr-8",
          scrolled ? "h-16 md:h-20" : "h-20 md:h-24",
        )}
      >
        <Link to="/" className="flex shrink-0 items-center" onClick={() => setOpen(false)} aria-label={SITE.name}>
          <img
            src={wordmark}
            alt="Charleston Medicine and Behavioral Health"
            className={cn("w-auto transition-all duration-300", scrolled ? "h-9 md:h-11" : "h-10 md:h-14")}
          />
        </Link>

        <div className="ml-auto hidden items-center gap-3 xl:flex 2xl:gap-8">
          <nav className="flex items-center gap-3 2xl:gap-7">
            {NAV.slice(1, -1).map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="relative whitespace-nowrap py-1 text-[13px] font-medium text-navy/80 transition-colors hover:text-navy after:absolute after:inset-x-0 after:-bottom-0.5 after:h-[2px] after:origin-center after:scale-x-0 after:bg-gold after:transition-transform after:duration-300 hover:after:scale-x-100"
                activeProps={{ className: "text-navy after:scale-x-100" }}
              >
                {n.label}
              </Link>
            ))}
          </nav>
          <a
            href={SITE.phoneHref}
            className="hidden items-center gap-1.5 whitespace-nowrap text-sm font-medium text-navy hover:text-blue 2xl:inline-flex"
          >
            <Phone className="size-3.5" /> {SITE.phone}
          </a>
          <Link
            to="/contact"
            className="inline-flex h-10 items-center whitespace-nowrap rounded-full bg-gold px-4 text-sm font-medium text-navy shadow-sm transition-all hover:bg-gold/90 hover:shadow 2xl:px-5"
          >
            Contact Us
          </Link>
        </div>

        <div className="flex items-center gap-1.5 xl:hidden">
          <a
            href={SITE.phoneHref}
            aria-label={`Call ${SITE.phone}`}
            className="inline-flex size-11 items-center justify-center rounded-full border border-navy/15 text-navy transition-colors hover:bg-cream"
          >
            <Phone className="size-5" />
          </a>
          <button
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
            className="relative inline-flex size-11 items-center justify-center rounded-md text-navy"
          >
            <Menu className={cn("absolute size-5 transition-all duration-300", open ? "rotate-90 opacity-0" : "rotate-0 opacity-100")} />
            <X className={cn("absolute size-5 transition-all duration-300", open ? "rotate-0 opacity-100" : "-rotate-90 opacity-0")} />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={cn(
          "xl:hidden overflow-hidden border-t border-border/70 bg-white transition-[max-height] duration-300",
          open ? "max-h-[80vh]" : "max-h-0",
        )}
      >
        <div key={open ? "open" : "closed"} className="container-x flex flex-col gap-1 py-4">
          {NAV.map((n, i) => (
            <Link
              key={n.to}
              to={n.to}
              onClick={() => setOpen(false)}
              style={open ? { animationDelay: `${i * 40}ms` } : undefined}
              className={cn(
                "rounded-md px-2 py-2.5 text-sm font-medium text-navy/85 transition-colors hover:bg-cream",
                open && "animate-in fade-in slide-in-from-left-2 fill-mode-backwards duration-300",
              )}
              activeProps={{ className: "text-navy bg-cream" }}
            >
              {n.label}
            </Link>
          ))}
          <div className="mt-3 flex flex-col gap-2">
            <a
              href={SITE.phoneHref}
              className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-navy text-sm font-medium text-navy"
            >
              <Phone className="size-4" /> {SITE.phone}
            </a>
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="inline-flex h-11 items-center justify-center rounded-full bg-gold text-sm font-medium text-navy"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
