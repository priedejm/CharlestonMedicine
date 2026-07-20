import { createFileRoute } from "@tanstack/react-router";
import { HeartBullet } from "@/components/site/HeartBullet";
import { Section, SectionHeading, GoldRule, Reveal } from "@/components/site/Primitives";
import bhHero from "@/assets/BehavioralHealthHero.jpg";
import bhBoardroom from "@/assets/boardroom.jpg";
import bhBullets from "@/assets/BehavioralHealthBulletPoints.jpg";

export const Route = createFileRoute("/behavioral-health")({
  head: () => ({
    meta: [
      { title: "Behavioral Health | Charleston Medicine and Behavioral Health" },
      { name: "description", content: "Psychiatric evaluations, therapy, and medication management for anxiety, depression, ADHD, trauma, and more in Charleston, SC." },
      { property: "og:title", content: "Behavioral Health - Charleston Medicine and Behavioral Health" },
      { property: "og:description", content: "Integrated, evidence-based mental health care." },
      { property: "og:url", content: "/behavioral-health" },
    ],
    links: [{ rel: "canonical", href: "/behavioral-health" }],
  }),
  component: BehavioralHealthPage,
});

const CONDITIONS = [
  ["Anxiety", "Management and coping skills"],
  ["Depression", "Overcoming and managing"],
  ["ADHD", "Diagnosis and management"],
  ["Low Motivation and Drive", "How to get you living right again"],
  ["Grief", "Addressing and moving forward"],
  ["Panic", "Coping and management"],
  ["Trauma", "Addressing and moving past"],
  ["Psychiatric Behavioral Health Services", "As-needed talk therapy"],
  ["Medication Management", "Prescribing and maintaining regimen"],
  ["Psychiatric Evaluation & Diagnostics", "Identify and address what is going on"],
];

const PROCESS = [
  { n: "01", t: "Listen", body: "Listen and talk about their feelings and concerns." },
  { n: "02", t: "Assess", body: "Conduct and understand mental health needs." },
  { n: "03", t: "Plan", body: "Develop personalized treatment plans, which may include therapy and/or medication prescriptions and management." },
  { n: "04", t: "Collaborate", body: "Collaborate with other professionals to ensure comprehensive care." },
];

const FEES = [
  ["Psychotherapy", "30-Minute Consultation", "$0 ($100 No-Show Fee)"],
  ["Psychotherapy", "Psychotherapy with Plan Development, 45–60 minutes", "$500"],
  ["Psychotherapy", "Plan Management Session, 25–30 minutes", "$300"],
  ["Diagnostics", "Initial Psychiatric Evaluation, 45–60 minutes", "$500"],
  ["Diagnostics", "ADHD Testing - Two providers, 20–30 minutes with each", "$500"],
  ["Medication Management", "Patients on controlled substances seen once a month for refills, 15 minutes in person or by phone", "$150"],
];

function BehavioralHealthPage() {
  return (
    <div className="bg-cream-warm">
      <Section bg="cream-warm" className="pt-28 md:pt-36">
        <div className="grid items-start gap-12 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <p className="eyebrow text-blue">Behavioral Health</p>
            <h1 className="mt-3 text-5xl md:text-6xl">Personalized Mental <em className="font-serif italic text-blue">Health Care</em>.</h1>
            <GoldRule className="mt-6" />
            <div className="mt-8 space-y-5 text-base leading-relaxed text-navy/80">
              <p>
                At Charleston Medicine and Behavioral Health, we offer comprehensive psychiatric evaluations
                designed to gain a thorough understanding of each patient's emotional, behavioral, and psychological
                health. Our screening process addresses a wide range of concerns including anxiety, depression,
                trauma, mood disorders, and other complex conditions.
              </p>
              <p>
                Working collaboratively with each individual, we establish personalized treatment goals and
                continuously monitor progress to ensure care remains effective, adaptive, and aligned with each
                patient's evolving needs.
              </p>
            </div>
          </div>
          <div className="space-y-5">
            <figure className="overflow-hidden rounded-2xl border border-navy/10 bg-white shadow-sm">
              <img src={bhHero} alt="Dr. Andrews with a behavioral health provider" className="w-full h-auto block" />
            </figure>
            <div className="rounded-2xl border border-navy/20 bg-white/70 p-6 italic leading-relaxed text-navy/85">
              At Charleston Medicine and Behavioral Health, we are committed to delivering integrated, evidence-based
              care that supports both mental and physical wellness. Our treatment approach may include behavioral
              therapy, lifestyle modifications, and expert medication management when clinically appropriate.
            </div>
          </div>
        </div>
      </Section>

      {/* Conditions */}
      <Section bg="cream-warm">
        <SectionHeading eyebrow="Conditions we treat" title="Care for the full spectrum of mental wellness." />
        <div className="mt-12 space-y-10 lg:space-y-16">
          {/* Row 1: image left, first 5 conditions right */}
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
            <figure className="overflow-hidden rounded-2xl border border-navy/10 bg-white shadow-sm">
              <img src={bhBoardroom} alt="Charleston Medicine and Behavioral Health providers meeting around the boardroom table" className="w-full h-auto block" />
            </figure>
            <ul className="grid gap-4">
              {CONDITIONS.slice(0, 5).map(([cond, sub], i) => (
                <Reveal as="li" key={cond} delay={i * 70} y={14} className="flex gap-4 rounded-2xl border border-navy/10 bg-white p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
                  <HeartBullet className="mt-0.5 size-7" />
                  <div>
                    <h3 className="text-lg leading-tight">{cond}</h3>
                    <p className="mt-1 text-sm text-navy/70">{sub}</p>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
          {/* Row 2: conditions left, image right */}
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
            <ul className="order-2 grid gap-4 lg:order-1">
              {CONDITIONS.slice(5).map(([cond, sub], i) => (
                <Reveal as="li" key={cond} delay={i * 70} y={14} className="flex gap-4 rounded-2xl border border-navy/10 bg-white p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
                  <HeartBullet className="mt-0.5 size-7" />
                  <div>
                    <h3 className="text-lg leading-tight">{cond}</h3>
                    <p className="mt-1 text-sm text-navy/70">{sub}</p>
                  </div>
                </Reveal>
              ))}
            </ul>
            <figure className="order-1 overflow-hidden rounded-2xl border border-navy/10 bg-white shadow-sm lg:order-2">
              <img src={bhBullets} alt="Behavioral health team members" className="w-full h-auto block" />
            </figure>
          </div>
        </div>
      </Section>

      {/* PMHNP */}
      <Section bg="cream-warm">
        <SectionHeading
          eyebrow="The PMHNP role"
          title="Psychiatric Mental Health Nurse Practitioner, PMHNP"
          intro="A Psychiatric Mental Health Nurse Practitioner is a caring and highly trained healthcare professional. These advanced practitioners specialize in understanding both mental health and physical health, working closely with individuals to provide support, guidance, and personalized care. They play a vital role in helping individuals achieve mental wellness and lead fulfilling lives."
        />
        <div className="mt-12 grid gap-4 md:grid-cols-4">
          {PROCESS.map((p, i) => {
            const shades = ["bg-blue-light/50", "bg-blue-light/70", "bg-blue/70 text-white", "bg-navy text-white"];
            return (
              <Reveal key={p.n} delay={i * 100} y={20}>
                <div className={`rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${shades[i]}`}>
                  <p className={`text-xs uppercase tracking-[0.2em] ${i >= 2 ? "text-white/70" : "text-navy/60"}`}>Step {p.n}</p>
                  <h3 className={`mt-3 text-2xl ${i >= 2 ? "text-white" : "text-navy"}`}>{p.t}</h3>
                  <p className={`mt-3 text-sm leading-relaxed ${i >= 2 ? "text-white/85" : "text-navy/75"}`}>{p.body}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>

      {/* Fees table */}
      <Section bg="cream-warm">
        <SectionHeading eyebrow="Pricing" title="Behavioral Health Services and Fees" />
        <div className="mt-10 overflow-hidden rounded-2xl border border-navy/15 bg-white shadow-sm">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-navy text-white">
                <th className="px-5 py-4 text-xs uppercase tracking-[0.18em]">Category</th>
                <th className="px-5 py-4 text-xs uppercase tracking-[0.18em]">Service</th>
                <th className="px-5 py-4 text-right text-xs uppercase tracking-[0.18em]">Price</th>
              </tr>
            </thead>
            <tbody>
              {FEES.map(([cat, desc, price], i) => (
                <tr key={`${cat}-${desc}`} className={`transition-colors duration-200 hover:bg-gold/10 ${i % 2 === 0 ? "bg-white" : "bg-blue-light/20"}`}>
                  <td className="px-5 py-4 align-top text-sm font-semibold uppercase tracking-[0.12em] text-gold">{cat}</td>
                  <td className="px-5 py-4 text-sm text-navy/85">{desc}</td>
                  <td className="px-5 py-4 text-right text-sm font-medium text-navy">{price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-6 max-w-3xl text-sm leading-relaxed text-navy/70">
          We do not accept insurance for Behavioral Health services and do not offer a sliding scale. We do ask that
          you provide a credit or debit card to keep on file, as a no-show will result in a fee. In order to become a
          patient, you must complete an Initial Psychiatric Evaluation.
        </p>
      </Section>
    </div>
  );
}
