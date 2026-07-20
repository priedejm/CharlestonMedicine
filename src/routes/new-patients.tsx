import { createFileRoute } from "@tanstack/react-router";
import { Phone } from "lucide-react";
import { Section, SectionHeading, GoldRule, CtaButton, Reveal } from "@/components/site/Primitives";
import { LeadForm } from "@/components/site/LeadForm";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/new-patients")({
  head: () => ({
    meta: [
      { title: "New Patients | Charleston Medicine and Behavioral Health" },
      { name: "description", content: "Now accepting new patients for primary care, concierge membership, and behavioral health on James Island, Charleston." },
      { property: "og:title", content: "New Patients - Charleston Medicine and Behavioral Health" },
      { property: "og:description", content: "Schedule your complimentary welcome visit." },
      { property: "og:url", content: "/new-patients" },
    ],
    links: [{ rel: "canonical", href: "/new-patients" }],
  }),
  component: NewPatientsPage,
});

const STEPS = [
  {
    n: "01",
    t: "Reach Out",
    body: "Give us a call, text, or email to let us know which services you are interested in, and our team will gladly work with your schedule to arrange a consultation. During your visit, you will have the opportunity to meet with our providers, discuss your goals and concerns, and determine the best personalized approach for your care.",
  },
  {
    n: "02",
    t: "See the Difference",
    body: "At your consultation, you will immediately experience the CMBH difference, starting with a warm welcome and complimentary beverage. Our providers take the time to understand you, your health concerns, and your goals to ensure a thoughtful and personalized approach to your care.",
  },
  {
    n: "03",
    t: "Decide Your Services",
    body: "Whether it is behavioral health, primary care, or our exclusive extended access program, each service is tailored to your individual needs. At CMBH, we aim to be your one-stop destination for whole-person wellness, supporting both mind and body.",
  },
];

function NewPatientsPage() {
  return (
    <>
      <Section bg="cream" className="pt-28 md:pt-36">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow text-blue">Welcome</p>
          <h1 className="mt-3 text-5xl md:text-6xl">We Are Now Accepting <em className="font-serif italic text-blue">New Patients</em></h1>
          <GoldRule className="mx-auto mt-6" />
          <p className="mt-6 text-base leading-relaxed text-navy/80 md:text-lg">
            Primary care, our extended access concierge program, and behavioral health services.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <CtaButton variant="gold" href="#welcome-visit">Schedule Your Welcome Visit</CtaButton>
            <CtaButton variant="navy-outline" href={SITE.phoneHref}>
              <Phone className="size-4" /> Call {SITE.phone}
            </CtaButton>
          </div>
        </div>
      </Section>

      <Section bg="white">
        <SectionHeading eyebrow="Getting started" title="What to expect, in three steps." align="center" />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {STEPS.map((s, i) => {
            const shades = ["bg-blue-light/50", "bg-blue-light/70", "bg-blue/70 text-white"];
            const dark = i === 2;
            return (
              <Reveal key={s.n} delay={i * 110} y={20}>
                <div className={`rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${shades[i]}`}>
                  <p className={`font-serif text-5xl ${dark ? "text-white/70" : "text-navy/30"}`}>{s.n}</p>
                  <h3 className={`mt-3 text-2xl ${dark ? "text-white" : "text-navy"}`}>{s.t}</h3>
                  <GoldRule className="mt-4" />
                  <p className={`mt-5 text-sm leading-relaxed ${dark ? "text-white/85" : "text-navy/75"}`}>{s.body}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>

      <Section bg="cream" id="welcome-visit">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <p className="eyebrow text-blue">On us</p>
            <h2 className="mt-3 text-4xl md:text-5xl">Schedule Your Complimentary <em className="font-serif italic text-blue">Welcome Visit</em>.</h2>
            <GoldRule className="mt-6" />
            <p className="mt-6 text-base leading-relaxed text-navy/80">
              Tell us a little about what you're looking for and our team will reach out to arrange a time that
              works for you. Prefer the phone? Call <a className="text-blue underline-offset-4 hover:underline" href={SITE.phoneHref}>{SITE.phone}</a>.
            </p>
          </div>
          <div className="rounded-3xl border border-navy/15 bg-white p-7 shadow-sm md:p-10">
            <LeadForm />
          </div>
        </div>
      </Section>
    </>
  );
}
