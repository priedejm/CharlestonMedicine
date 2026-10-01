import { createFileRoute } from "@tanstack/react-router";
import { Section, SectionHeading, VideoHero, PhotoPlaceholder, GoldRule, Reveal } from "@/components/site/Primitives";
import { HeartBullet } from "@/components/site/HeartBullet";
import practitionerPatient from "@/assets/PractionerWithPatient.png";
import drExamRoom from "@/assets/DRinExamRoom.jpg";
import clinicalTeam from "@/assets/ClinicalTeam.jpg";
import staffGroup from "@/assets/teamgroup3.jpg";
import heroVideo from "@/assets/MarinaAndWater-web.webm";
import heroVideoMp4 from "@/assets/MarinaAndWater-web.mp4";

export const Route = createFileRoute("/physical-health")({
  head: () => ({
    meta: [
      { title: "Physical Health | Charleston Medicine and Behavioral Health" },
      { name: "description", content: "Proactive, personalized internal medicine, chronic disease management, onsite labs, and wellness optimization in Charleston, SC." },
      { property: "og:title", content: "Physical Health - Charleston Medicine and Behavioral Health" },
      { property: "og:description", content: "Concierge-style primary care for the whole person." },
      { property: "og:url", content: "/physical-health" },
    ],
    links: [{ rel: "canonical", href: "/physical-health" }],
  }),
  component: PhysicalHealthPage,
});

const SERVICES = [
  "Internal Medicine",
  "Preventative Care",
  "Chronic Disease Management",
  "Wellness Optimization",
  "Onsite Lab and Diagnostics",
  "Tests and Screening",
];

function PhysicalHealthPage() {
  return (
    <>
      <VideoHero label="Charleston palmetto / waterway" height="min-h-[60vh]" src={heroVideo} mp4Src={heroVideoMp4}>
        <p className="eyebrow text-gold">Primary Care</p>
        <h1 className="mt-4 font-serif text-5xl text-white md:text-7xl">Physical Health</h1>
        <p className="mt-5 max-w-xl text-white/85">Proactive, personalized care that treats more than symptoms.</p>
      </VideoHero>

      <Section bg="white">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-start">
          <div>
            <p className="eyebrow text-blue">Internal Medicine</p>
            <h2 className="mt-3 text-4xl md:text-5xl">Care designed around <em className="font-serif italic text-blue">your whole picture</em>.</h2>
            <GoldRule className="mt-6" />
            <div className="mt-8 space-y-5 text-base leading-relaxed text-navy/80">
              <p>
                At Charleston Medicine and Behavioral Health, we believe healthcare should be proactive,
                personalized, and thoughtfully designed around each individual we serve. Our approach goes beyond
                simply treating symptoms. We focus on building long-term relationships and delivering comprehensive
                care that supports your overall health, wellness, and quality of life.
              </p>
              <p>
                Whether you are coming in for your annual physical and routine bloodwork, navigating an unexpected
                illness, managing chronic conditions, or addressing new concerns about your health, our team
                prioritizes timely access to care and meaningful conversations. We believe patients deserve to feel
                heard, understood, and genuinely cared for at every visit.
              </p>
              <p>
                Our internal medicine specialists take the time to understand your complete health picture, including
                your medical history, lifestyle, goals, and personal needs, allowing us to create customized
                treatment plans tailored specifically to you.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <figure className="group overflow-hidden rounded-2xl border border-navy/10 bg-white shadow-sm">
              <img src={practitionerPatient} alt="Charleston Medicine practitioner examining a patient" className="w-full h-auto block transition-transform duration-500 group-hover:scale-105" />
            </figure>
            <blockquote className="rounded-2xl border-l-4 border-gold bg-cream p-6 font-serif text-lg italic leading-relaxed text-navy">
              "During your consultations with our internal medicine specialists, we take the time to listen to your
              concerns, thoroughly assess your medical history, and understand your current health status."
            </blockquote>
          </div>
        </div>
      </Section>

      <Section bg="cream">
        <SectionHeading eyebrow="What we cover" title="Services" />
        <ul className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Reveal as="li" key={s} delay={i * 70} y={14} className="flex items-center gap-3 rounded-xl border border-border bg-white px-5 py-4 text-navy transition-all duration-300 hover:-translate-y-0.5 hover:border-gold hover:shadow-md">
              <HeartBullet className="size-6" />
              <span className="font-medium">{s}</span>
            </Reveal>
          ))}
        </ul>
      </Section>

      <Section bg="white">
        <div className="grid gap-10 md:grid-cols-2 md:items-start">
          <figure className="group overflow-hidden rounded-2xl border border-navy/10 bg-white shadow-sm">
            <img src={drExamRoom} alt="Dr. W. Rodney Andrews in the exam room" className="w-full h-auto block transition-transform duration-500 group-hover:scale-105" />
          </figure>
          <div className="space-y-6">
            <figure className="group overflow-hidden rounded-2xl border border-navy/10 bg-white shadow-sm">
              <img src={clinicalTeam} alt="Charleston Medicine and Behavioral Health clinical team" className="w-full h-auto block transition-transform duration-500 group-hover:scale-105" />
            </figure>
            <figure className="group overflow-hidden rounded-2xl border border-navy/10 bg-white shadow-sm">
              <img src={staffGroup} alt="Charleston Medicine and Behavioral Health staff" className="w-full h-auto block transition-transform duration-500 group-hover:scale-105" />
            </figure>
          </div>
        </div>
      </Section>
    </>
  );
}
