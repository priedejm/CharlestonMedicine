import { createFileRoute } from "@tanstack/react-router";
import { ShieldCheck, Stethoscope, FlaskConical, Heart, Pill, Droplets, PillBottle, MessageSquare, Check, X } from "lucide-react";
import { Section, SectionHeading, GoldRule, CtaButton, Reveal } from "@/components/site/Primitives";
import { HeartBullet } from "@/components/site/HeartBullet";
import { SITE } from "@/lib/site";

const SIGN_UP_HREF = "https://form.jotform.com/260496060194155";

export const Route = createFileRoute("/access-plan")({
  head: () => ({
    meta: [
      { title: "Access Plan | Charleston Medicine and Behavioral Health" },
      { name: "description", content: "The Charleston Medicine Access Plan (CMAP) - a direct-pay membership access plan for patients without insurance. CMAP is not insurance." },
      { property: "og:title", content: "Access Plan (CMAP) - Charleston Medicine and Behavioral Health" },
      { property: "og:description", content: "A direct-pay membership access plan for patients without insurance." },
      { property: "og:url", content: "/access-plan" },
    ],
    links: [{ rel: "canonical", href: "/access-plan" }],
  }),
  component: AccessPlanPage,
});

const INCLUDED = [
  { t: "Annual Physical", body: "A yearly physical to keep your preventative care on track.", icon: Stethoscope },
  { t: "Women's Health Care", body: "Access to our women's health services and providers.", icon: Heart },
  { t: "Medication Management", body: "Ongoing oversight of your prescriptions and treatment plan.", icon: Pill },
  { t: "Lab Testing on Premise", body: "Bloodwork and basic labs drawn and run on location.", icon: FlaskConical },
  { t: "IV Therapies", body: "IV drip services available at preferred member rates.", icon: Droplets },
  { t: "In-House Medications", body: "Eligible medications dispensed right here on location.", icon: PillBottle },
];

const PREFERRED_PRICING = ["Lab testing", "IV therapies", "In-house medications", "Other eligible services offered"];

const NOT_INCLUDED = [
  "Therapy session fees",
  "Psychiatric evaluations",
  "Psychological testing",
  "Hospital, ER, ambulance, or inpatient coverage",
  "Pharmacy medication discounts",
];

const TIERS = [
  {
    name: "Level One",
    tag: "Women's Health",
    price: "$99",
    perks: ["$25 per visit, in-person or telehealth", "Women's health visits"],
  },
  {
    name: "Level Two",
    tag: "Primary Care",
    price: "$149",
    perks: [
      "$25 per visit, in-person or telehealth",
      "Women's health visits",
      "Annual physicals",
      "Basic labs and testing",
      "Sick visits",
      "Medication management",
    ],
  },
  {
    name: "Level Three",
    tag: "Most Comprehensive",
    price: "$199",
    perks: [
      "$25 per visit, in-person or telehealth",
      "Everything included in Primary Care",
      "Controlled psychiatric medication management",
    ],
  },
];

const FAQS = [
  {
    q: "What does the monthly access fee include?",
    a: "The monthly access fee provides access benefits (including preferred scheduling) and Access Plan rates (preferred self-pay pricing). No services are included for free in the Charleston Medicine Access Plan - each visit is billed separately at $25.",
  },
  {
    q: "Is this health insurance?",
    a: "No. The Charleston Medicine Access Plan is not health insurance and is not intended to replace health insurance.",
  },
  {
    q: "Does the plan include hospital coverage or emergency services?",
    a: "No. This plan does not include hospital coverage, ambulance services, inpatient services, specialty care, or imaging services not covered by CMBH.",
  },
  {
    q: "Is there a cancellation fee?",
    a: "No, you may cancel with 30-day notice. Cancellation is effective at the end of the current paid month.",
  },
  {
    q: "How can I pay the monthly membership fee?",
    a: "We offer several convenient payment options for your monthly membership fee. You may keep a credit card on file for automatic monthly payments, pay by check, or, if the program is offered through your employer, have the fee conveniently deducted from your paycheck.",
  },
  {
    q: "How do I sign up?",
    a: "Reach out to our team - call, text, or send us a message - and we'll get your membership started.",
  },
  {
    q: "Can I enroll my family members if I am offered this plan through my employer?",
    a: "Yes. Employees who are eligible for the program may also enroll eligible family members, including a legal spouse, domestic partner, and dependent children. The primary membership holder is responsible for paying the membership fees and any applicable service charges for enrolled family members.",
  },
  {
    q: "What happens if I leave the employer through which this program was offered?",
    a: "If you leave the employer through which the program was offered, you can still continue your membership and enjoy all of its benefits. If your membership fees were being deducted through payroll, you can simply transition to direct payment to maintain uninterrupted coverage and services.",
  },
];

function AccessPlanPage() {
  return (
    <>
      <Section bg="cream" className="pt-28 md:pt-36">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow text-blue">Membership</p>
          <h1 className="mt-3 text-5xl md:text-6xl">
            Charleston Medicine Access Plan <span className="text-blue">(CMAP)</span>
          </h1>
          <GoldRule className="mx-auto mt-6" />
          <p className="mt-6 text-base leading-relaxed text-navy/80 md:text-lg">
            A direct-pay, membership-based access plan offering improved access to primary care and women's health
            services for patients who are uninsured or whose insurance plans we don't currently accept. Transparent
            pricing and preferred self-pay rates make quality care more predictable and affordable.
          </p>
          <div className="mx-auto mt-8 flex max-w-xl items-start gap-3 rounded-2xl border border-gold/40 bg-gold/10 p-4 text-left">
            <ShieldCheck className="mt-0.5 size-5 shrink-0 text-gold" />
            <p className="text-sm leading-relaxed text-navy/85">
              <span className="font-medium">CMAP is a membership access plan - it is not insurance.</span> It does not
              replace health insurance and does not include hospital, ER, ambulance, or inpatient coverage.
            </p>
          </div>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <CtaButton variant="gold" href={SIGN_UP_HREF} target="_blank" rel="noopener noreferrer">Sign Up Today</CtaButton>
            <CtaButton variant="navy-outline" href={SITE.textHref}>
              <MessageSquare className="size-4" /> Text {SITE.text}
            </CtaButton>
          </div>
        </div>
      </Section>

      {/* What is CMAP */}
      <Section bg="white">
        <SectionHeading eyebrow="What is CMAP?" title="Better access. Better care." />
        <div className="mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-navy/80">
          <p>
            Charleston Medicine and Behavioral Health, located on James Island, is proud to offer the Charleston
            Medicine Access Plan for individuals without insurance or with plans we do not currently accept. For a
            monthly membership fee, members receive access to comprehensive care - including in-office visits,
            telehealth appointments, and more - with a simple $25 fee per visit.
          </p>
        </div>
      </Section>

      {/* What's included */}
      <Section bg="cream">
        <SectionHeading eyebrow="What's offered" title="Membership benefits." />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {INCLUDED.map((item, i) => {
            const shades = ["bg-blue-light/50", "bg-blue-light/70", "bg-blue/70 text-white", "bg-navy text-white"];
            const shade = shades[i % shades.length];
            const dark = i % shades.length >= 2;
            const Icon = item.icon;
            return (
              <Reveal key={item.t} delay={i * 90} y={20}>
                <div className={`group rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${shade}`}>
                  <div className={`grid size-12 place-items-center rounded-full transition-transform duration-300 group-hover:scale-110 ${dark ? "bg-white/15 text-white" : "border border-navy/15 text-navy"}`}>
                    <Icon className="size-5" strokeWidth={1.5} />
                  </div>
                  <h3 className={`mt-5 text-xl ${dark ? "text-white" : "text-navy"}`}>{item.t}</h3>
                  <p className={`mt-3 text-sm leading-relaxed ${dark ? "text-white/85" : "text-navy/75"}`}>{item.body}</p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl bg-white p-7">
            <h3 className="text-lg text-navy">Preferred pricing for</h3>
            <GoldRule className="mt-3" />
            <ul className="mt-5 space-y-3">
              {PREFERRED_PRICING.map((p) => (
                <li key={p} className="flex gap-3 text-sm text-navy/80">
                  <HeartBullet className="mt-0.5 size-5" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-xs uppercase tracking-[0.18em] text-navy/50">All done on location</p>
          </div>
          <div className="rounded-2xl bg-navy/5 p-7">
            <h3 className="text-lg text-navy">Not included</h3>
            <GoldRule className="mt-3" />
            <ul className="mt-5 space-y-3">
              {NOT_INCLUDED.map((p) => (
                <li key={p} className="flex gap-3 text-sm text-navy/70">
                  <X className="mt-0.5 size-4 shrink-0 text-navy/40" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Membership tiers */}
      <Section bg="white">
        <SectionHeading eyebrow="Membership" title="Monthly Access Plan Options" align="center" />
        <p className="mx-auto mt-6 max-w-2xl text-center text-sm leading-relaxed text-navy/70">
          Your monthly fee provides access benefits and preferred self-pay rates - it does not include free visits.
          Each visit is billed separately at $25, in-person or via telehealth.
        </p>

        <div className="mx-auto mt-14 grid max-w-5xl gap-6 md:grid-cols-3">
          {TIERS.map((t, i) => (
            <Reveal key={t.name} delay={i * 120} y={20}>
              <div className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-navy/15 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="border-b border-navy bg-navy px-7 py-5 text-white">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-xl text-white">{t.name}</h3>
                    <span className="rounded-full bg-gold/90 px-3 py-1 text-[10px] uppercase tracking-[0.14em] text-navy">{t.tag}</span>
                  </div>
                </div>
                <div className="flex flex-1 flex-col px-7 py-8">
                  <p className="flex items-baseline gap-1">
                    <span className="font-serif text-5xl text-navy">{t.price}</span>
                    <span className="text-sm text-navy/60">/month</span>
                  </p>
                  <GoldRule className="mt-5" />
                  <ul className="mt-6 space-y-3">
                    {t.perks.map((p) => (
                      <li key={p} className="flex gap-3 text-sm text-navy/85">
                        <HeartBullet className="mt-0.5 size-5" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto pt-8">
                    <CtaButton variant="navy-outline" href={SIGN_UP_HREF} target="_blank" rel="noopener noreferrer" className="w-full">Get started</CtaButton>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section bg="cream">
        <SectionHeading eyebrow="Questions" title="Frequently asked questions." />
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {FAQS.map((f, i) => (
            <Reveal key={f.q} delay={(i % 4) * 80} y={18}>
              <div className={`rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${i % 2 === 0 ? "bg-blue-light/40" : "bg-white"}`}>
                <div className="flex items-start gap-3">
                  <Check className="mt-0.5 size-4 shrink-0 text-gold" />
                  <h3 className="text-base font-medium text-navy">{f.q}</h3>
                </div>
                <p className="mt-3 pl-7 text-sm leading-relaxed text-navy/75">{f.a}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Closing CTA */}
      <section className="bg-navy py-20 text-white">
        <Reveal y={28} className="container-x text-center">
          <h2 className="mx-auto max-w-2xl font-serif text-3xl text-white md:text-4xl">
            Ready to sign up for the Charleston Medicine Access Plan?
          </h2>
          <GoldRule className="mx-auto mt-8" />
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <CtaButton variant="gold" href={SIGN_UP_HREF} target="_blank" rel="noopener noreferrer">Sign Up Today</CtaButton>
            <CtaButton variant="white-outline" href={SITE.textHref}>
              <MessageSquare className="size-4" /> Text {SITE.text} to schedule
            </CtaButton>
          </div>
          <p className="mx-auto mt-8 max-w-xl text-xs text-white/60">
            CMAP is a membership access plan for patients without insurance. It is not insurance, and it does not
            replace health insurance coverage.
          </p>
        </Reveal>
      </section>
    </>
  );
}
