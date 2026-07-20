import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, MessageSquare, Mail, Clock, Facebook, Instagram } from "lucide-react";
import { Section, GoldRule, Reveal } from "@/components/site/Primitives";
import { LeadForm } from "@/components/site/LeadForm";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | Charleston Medicine and Behavioral Health" },
      { name: "description", content: "Get in touch with Charleston Medicine and Behavioral Health on James Island. Call, text, email, or stop by." },
      { property: "og:title", content: "Contact - Charleston Medicine and Behavioral Health" },
      { property: "og:description", content: "Call, text, email, or visit us on James Island." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <Section bg="cream" className="pt-28 md:pt-32">
        <div className="text-center">
          <p className="eyebrow text-blue">Contact</p>
          <h1 className="mt-3 text-5xl md:text-6xl">We're here when you <em className="font-serif italic text-blue">need us</em>.</h1>
          <GoldRule className="mx-auto mt-6" />
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          <div className="space-y-8">
            <Reveal delay={0} y={16}>
              <Detail icon={MapPin} label="Visit">
                {SITE.address.line1}<br />
                {SITE.address.city}, {SITE.address.state} {SITE.address.zip}
              </Detail>
            </Reveal>
            <Reveal delay={70} y={16}>
              <Detail icon={Phone} label="Call">
                <a href={SITE.phoneHref} className="text-navy hover:text-blue">{SITE.phone}</a>
              </Detail>
            </Reveal>
            <Reveal delay={140} y={16}>
              <Detail icon={MessageSquare} label="Text">
                <a href={SITE.textHref} className="text-navy hover:text-blue">{SITE.text}</a>
              </Detail>
            </Reveal>
            <Reveal delay={210} y={16}>
              <Detail icon={Mail} label="Email">
                <a href={SITE.emailHref} className="text-navy hover:text-blue">{SITE.email}</a>
              </Detail>
            </Reveal>
            <Reveal delay={280} y={16}>
              <Detail icon={Clock} label="Hours">
                <ul className="space-y-1">
                  {SITE.hours.map((h) => (
                    <li key={h.d}><span className="font-medium">{h.d}:</span> {h.h}</li>
                  ))}
                </ul>
              </Detail>
            </Reveal>
            <Reveal delay={350} y={16}>
              <div className="flex gap-3 pt-2">
                <a href={SITE.social.facebook} aria-label="Facebook" className="grid size-10 place-items-center rounded-full border border-navy/20 text-navy transition-all duration-200 hover:-translate-y-0.5 hover:border-gold hover:text-gold">
                  <Facebook className="size-4" />
                </a>
                <a href={SITE.social.instagram} aria-label="Instagram" className="grid size-10 place-items-center rounded-full border border-navy/20 text-navy transition-all duration-200 hover:-translate-y-0.5 hover:border-gold hover:text-gold">
                  <Instagram className="size-4" />
                </a>
              </div>
            </Reveal>
          </div>

          <div className="rounded-3xl border border-navy/15 bg-white p-7 shadow-sm md:p-10">
            <h2 className="text-2xl">Send us a message</h2>
            <p className="mt-2 text-sm text-navy/70">We typically respond within one business day.</p>
            <GoldRule className="mt-4" />
            <div className="mt-6">
              <LeadForm />
            </div>
          </div>
        </div>
      </Section>

      <section>
        <div className="container-x pb-20">
          <Reveal y={28}>
            <div className="overflow-hidden rounded-3xl border border-border">
              <iframe
                title="Charleston Medicine and Behavioral Health location"
                src="https://www.google.com/maps?q=125-A%20Wappoo%20Creek%20Dr%2C%20Charleston%2C%20SC%2029412&output=embed"
                className="h-[420px] w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function Detail({
  icon: Icon,
  label,
  children,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-4">
      <div className="grid size-11 shrink-0 place-items-center rounded-full bg-white text-navy ring-1 ring-navy/15">
        <Icon className="size-4" />
      </div>
      <div>
        <p className="eyebrow text-blue">{label}</p>
        <div className="mt-1.5 text-base leading-relaxed text-navy/85">{children}</div>
      </div>
    </div>
  );
}
