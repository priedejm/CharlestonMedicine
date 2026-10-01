import { cn } from "@/lib/utils";
import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode, type CSSProperties, type ElementType } from "react";

export function Reveal({
  children,
  delay = 0,
  as: Tag = "div" as ElementType,
  className,
  y = 24,
  once = true,
}: {
  children: ReactNode;
  delay?: number;
  as?: ElementType;
  className?: string;
  y?: number;
  once?: boolean;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) io.disconnect();
        } else if (!once) {
          setVisible(false);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [once]);

  const style: CSSProperties = visible
    ? { transitionDelay: `${delay}ms`, transitionProperty: "opacity, transform", transitionDuration: "800ms", transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)" }
    : {
        transitionDelay: `${delay}ms`,
        transform: `translate3d(0, ${y}px, 0)`,
        opacity: 0,
        transitionProperty: "opacity, transform",
        transitionDuration: "800ms",
        transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
        willChange: "opacity, transform",
      };

  return (
    <Tag ref={ref as never} style={style} className={className}>
      {children}
    </Tag>
  );
}

export function Section({
  children,
  className,
  bg,
  id,
}: {
  children: ReactNode;
  className?: string;
  bg?: "white" | "cream" | "cream-warm" | "navy" | "blue-light";
  id?: string;
}) {
  const bgMap: Record<string, string> = {
    white: "bg-white",
    cream: "bg-cream",
    "cream-warm": "bg-cream-warm",
    navy: "bg-navy text-white",
    "blue-light": "bg-blue-light/40",
  };
  return (
    <section id={id} className={cn("py-20 md:py-28", bg && bgMap[bg], className)}>
      <Reveal className="container-x">{children}</Reveal>
    </section>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="eyebrow text-blue">{children}</p>;
}

export function GoldRule({ className }: { className?: string }) {
  return <span className={cn("gold-rule", className)} />;
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  invert = false,
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  invert?: boolean;
}) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
      {eyebrow && (
        <p className={cn("eyebrow", invert ? "text-gold" : "text-blue")}>{eyebrow}</p>
      )}
      <h2
        className={cn(
          "mt-3 text-4xl leading-[1.05] tracking-tight md:text-5xl",
          invert && "text-white",
        )}
      >
        {title}
      </h2>
      {intro && (
        <p
          className={cn(
            "mt-5 text-base leading-relaxed md:text-lg",
            invert ? "text-white/80" : "text-navy/75",
          )}
        >
          {intro}
        </p>
      )}
      <GoldRule className={cn("mt-6", align === "center" && "mx-auto")} />
    </div>
  );
}

export function PhotoPlaceholder({
  label,
  className,
  aspect = "aspect-[4/3]",
  tone = "blue",
}: {
  label: string;
  className?: string;
  aspect?: string;
  tone?: "blue" | "cream" | "navy";
}) {
  const toneMap: Record<string, string> = {
    blue: "bg-gradient-to-br from-blue-light/60 via-blue-light/40 to-blue/30 text-navy",
    cream: "bg-gradient-to-br from-cream to-cream-warm text-navy/60",
    navy: "bg-gradient-to-br from-navy via-[#243278] to-blue text-white",
  };
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border border-border",
        aspect,
        toneMap[tone],
        className,
      )}
    >
      <div className="absolute inset-0 grid place-items-center p-6 text-center">
        <div className="space-y-1">
          <p className="text-[10px] uppercase tracking-[0.25em] opacity-70">Photo placeholder</p>
          <p className="text-sm font-medium">{label}</p>
        </div>
      </div>
    </div>
  );
}

export function VideoHero({
  label,
  children,
  height = "min-h-[88vh]",
  src,
  mp4Src,
  img,
}: {
  label: string;
  children: ReactNode;
  height?: string;
  src?: string;
  mp4Src?: string;
  img?: string;
}) {
  const hasMedia = Boolean(src || img);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = true;
    v.setAttribute("muted", "");
    v.play().catch(() => {});
  }, [src, mp4Src]);

  return (
    <section className={cn("relative isolate overflow-hidden bg-navy text-white", height)}>
      {src ? (
        <video
          ref={videoRef}
          className="absolute inset-0 size-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          {mp4Src && <source src={mp4Src} type="video/mp4" />}
          <source src={src} type="video/webm" />
        </video>
      ) : img ? (
        <img className="absolute inset-0 size-full object-cover" src={img} alt="" />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-[#1a2660] to-blue" />
      )}
      {!hasMedia && (
        <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_30%_20%,_white,_transparent_50%),radial-gradient(circle_at_70%_70%,_#A8CBE8,_transparent_45%)]" />
      )}
      <div
        className={cn(
          "absolute inset-0",
          hasMedia ? "bg-gradient-to-r from-navy/80 via-navy/40 to-navy/0" : "bg-black/35",
        )}
      />
      {!hasMedia && (
        <div className="absolute right-4 top-4 z-10 rounded-full border border-white/25 bg-black/30 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-white/85">
          Replace with {label} video
        </div>
      )}
      <div className="relative z-10 container-x flex min-h-[inherit] items-center py-28 md:py-40">
        <Reveal y={32} className="max-w-3xl">{children}</Reveal>
      </div>
    </section>
  );
}

export function CtaButton({
  children,
  variant = "gold",
  href,
  to,
  className,
  ...rest
}: {
  children: ReactNode;
  variant?: "gold" | "navy-outline" | "white-outline";
  href?: string;
  to?: string;
  className?: string;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  const base =
    "inline-flex h-12 items-center justify-center rounded-full px-7 text-sm font-medium tracking-wide transition-all duration-200 active:scale-[0.97]";
  const styles: Record<string, string> = {
    gold: "bg-gold text-navy hover:bg-gold/90 hover:-translate-y-0.5 shadow-sm hover:shadow-md",
    "navy-outline": "border border-navy text-navy hover:bg-navy hover:text-white hover:-translate-y-0.5",
    "white-outline": "border border-white/70 text-white hover:bg-white hover:text-navy hover:-translate-y-0.5",
  };
  if (to) {
    return (
      <Link to={to} className={cn(base, styles[variant], className)} {...rest}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href} className={cn(base, styles[variant], className)} {...rest}>
      {children}
    </a>
  );
}
