import { createFileRoute } from "@tanstack/react-router";
import {
  Check,
  Stethoscope,
  Pill,
  Heart,
  ShieldAlert,
  Activity,
  Flower2,
  Droplets,
  CalendarClock,
  Sparkles,
} from "lucide-react";
import { Section, SectionHeading, GoldRule, CtaButton, Reveal } from "@/components/site/Primitives";
import carolineAsset from "@/assets/WomensHealth.jpg";

export const Route = createFileRoute("/womens-health")({
  head: () => ({
    meta: [
      { title: "Women's Health | Charleston Medicine and Behavioral Health" },
      { name: "description", content: "Concierge women's health and gynecology with certified nurse midwife Caroline Scruggs in Charleston, SC." },
      { property: "og:title", content: "Women's Health - Charleston Medicine and Behavioral Health" },
      { property: "og:description", content: "Specialized concierge gynecology membership." },
      { property: "og:url", content: "/womens-health" },
    ],
    links: [{ rel: "canonical", href: "/womens-health" }],
  }),
  component: WomensHealthPage,
});

const BENEFITS = [
  "Quick access to appointments in person or by video/phone",
  "Access to provider with questions by text",
  "More time with your provider versus non-concierge care",
];

type Service = [string, string, React.ComponentType<{ className?: string }>];

const PREVENTATIVE: Service[] = [
  ["Annual Exams", "Preventive gynecological and breast exams", Stethoscope],
  ["Contraception", "Pills, patch, ring, injection; IUD insertion and removal; implantable contraception", Pill],
  ["Pre-Conception Counseling", "Planning and preparing for a healthy pregnancy", Heart],
];

const SCREENING: Service[] = [
  ["GYN Infections", "Diagnosis and treatment", ShieldAlert],
  ["STIs", "Screening, treatment, and counseling", Activity],
  ["Menopause", "Symptom management and hormone guidance", Flower2],
  ["Abnormal Uterine Bleeding", "Evaluation and management", Droplets],
  ["Irregular Menstrual Cycle", "Workup and treatment", CalendarClock],
  ["Polycystic Ovarian Syndrome", "Diagnosis and long-term care", Sparkles],
];

function ServiceCard({ name, desc, Icon, tone, delay = 0 }: { name: string; desc: string; Icon: React.ComponentType<{ className?: string }>; tone: "light" | "white"; delay?: number }) {
  return (
    <Reveal delay={delay} y={18}>
      <div className={`group rounded-2xl p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${tone === "light" ? "bg-blue-light/40" : "bg-cream"}`}>
        <div className="mx-auto grid size-14 place-items-center rounded-full bg-white text-navy ring-1 ring-navy/10 transition-transform duration-300 group-hover:scale-110">
          <Icon className="size-7" />
        </div>
        <h3 className="mt-5 text-xl text-navy">{name}</h3>
        <GoldRule className="mx-auto mt-3" />
        <p className="mt-4 text-sm leading-relaxed text-navy/75">{desc}</p>
      </div>
    </Reveal>
  );
}

function WomensHealthPage() {
  return (
    <>
      <Section bg="cream" className="pt-28 md:pt-36">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative mx-auto w-full max-w-md">
            <div className="rounded-t-[999px] border-2 border-navy/30 p-3">
              <div className="overflow-hidden rounded-t-[999px] bg-cream">
                <img
                  src={carolineAsset}
                  alt="Caroline Scruggs, CNM"
                  className="w-full h-auto block"
                />
              </div>
            </div>
          </div>
          <div>
            <p className="eyebrow text-blue">Concierge Membership</p>
            <h1 className="mt-3 text-5xl md:text-6xl">Women's Health</h1>
            <GoldRule className="mt-6" />
            <p className="mt-8 text-base leading-relaxed text-navy/80 md:text-lg">
              We offer a specialized women's health concierge care membership at our practice for patients who would
              like to have gynecology concierge care without internal medicine services. Caroline Scruggs, our
              certified nurse midwife, provides personalized and convenient appointments along with access to reach
              her with any questions or concerns.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <CtaButton variant="gold" to="/new-patients">Become a Patient</CtaButton>
              <CtaButton variant="navy-outline" to="/contact">Contact our team</CtaButton>
            </div>
          </div>
        </div>
      </Section>

      {/* Benefits */}
      <Section bg="white">
        <SectionHeading eyebrow="Benefits" title="What concierge gynecology looks like." />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {BENEFITS.map((b, i) => (
            <Reveal key={b} delay={i * 90} y={20}>
              <div className="group rounded-2xl border border-navy/15 bg-cream p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="grid size-10 place-items-center rounded-full bg-navy text-white transition-transform duration-300 group-hover:scale-110">
                  <Check className="size-4" />
                </div>
                <p className="mt-5 text-lg leading-snug text-navy">{b}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Preventative */}
      <Section bg="cream">
        <SectionHeading eyebrow="Preventative care and other services" title="We have you covered!" />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PREVENTATIVE.map(([name, desc, Icon], i) => (
            <ServiceCard
              key={name}
              name={name}
              desc={desc}
              Icon={Icon}
              tone={name === "Contraception" ? "light" : i % 2 === 0 ? "light" : "white"}
              delay={i * 90}
            />
          ))}
        </div>
      </Section>

      {/* Screening / Treatment */}
      <Section bg="white">
        <SectionHeading eyebrow="GYN screening and/or treatment offered" title="Specialized care, when you need it." />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SCREENING.map(([name, desc, Icon], i) => (
            <ServiceCard key={name} name={name} desc={desc} Icon={Icon} tone={i % 2 === 0 ? "light" : "white"} delay={i * 90} />
          ))}
        </div>
      </Section>

      {/* Elevated section */}
      <Section bg="navy">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="eyebrow text-gold">A higher level of care</p>
            <h2 className="mt-3 text-4xl text-white md:text-5xl">Elevated Women's Healthcare, <em className="font-serif italic text-blue-light">Designed Around You</em>.</h2>
            <GoldRule className="mt-6" />
          </div>
          <p className="text-base leading-relaxed text-white/80 md:text-lg">
            Our Concierge Women's Health Program offers a higher level of personalized care, ensuring that your
            gynecological health is prioritized with thorough, comprehensive services. Unlike traditional healthcare
            models, this program provides unhurried appointments, extended time for discussions, and direct access to
            your provider for any concerns that arise.
          </p>
        </div>
      </Section>
    </>
  );
}
