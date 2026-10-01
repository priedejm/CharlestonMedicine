import { createFileRoute } from "@tanstack/react-router";
import { Handshake, Clock4, UserCog, Activity } from "lucide-react";
import { HeartBullet } from "@/components/site/HeartBullet";
import { Section, SectionHeading, VideoHero, GoldRule, CtaButton, Reveal } from "@/components/site/Primitives";
import { WhiteGloveBanner } from "@/components/site/WhiteGloveBanner";
import heroVideo from "@/assets/citySkyline-web.webm";
import heroVideoMp4 from "@/assets/citySkyline-web.mp4";

export const Route = createFileRoute("/concierge-medicine")({
  head: () => ({
    meta: [
      { title: "Concierge Medicine | Charleston Medicine and Behavioral Health" },
      { name: "description", content: "A refined concierge-style healthcare experience with a limited patient panel, unhurried appointments, and direct access to your provider." },
      { property: "og:title", content: "Concierge Medicine - Charleston Medicine and Behavioral Health" },
      { property: "og:description", content: "Boutique concierge medicine on James Island, Charleston." },
      { property: "og:url", content: "/concierge-medicine" },
    ],
    links: [{ rel: "canonical", href: "/concierge-medicine" }],
  }),
  component: ConciergePage,
});

const PILLARS = [
  { icon: Handshake, title: "Relationship-Based Care", body: "We get to know you - your history, your goals, your family, your life." },
  { icon: Clock4, title: "Accessibility", body: "Same-day access, direct communication, and unhurried appointments." },
  { icon: UserCog, title: "Personalized Care", body: "Every plan is built around your unique health picture, not a template." },
  { icon: Activity, title: "Preventative and Proactive Medicine", body: "We focus on staying ahead of illness, not just treating it." },
];

function ConciergePage() {
  return (
    <>
      <VideoHero label="Charleston downtown / waterway" height="min-h-[62vh]" src={heroVideo} mp4Src={heroVideoMp4}>
        <p className="eyebrow text-gold">Concierge Medicine</p>
        <h1 className="mt-4 font-serif text-5xl text-white md:text-7xl">A boutique approach to your health.</h1>
        <p className="mt-5 max-w-xl text-white/85">Personalized attention, elevated care, and meaningful patient relationships.</p>
      </VideoHero>

      {/* Intro */}
      <Section bg="cream">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow text-blue">An elevated standard</p>
          <h2 className="mt-3 text-4xl md:text-5xl">Concierge Medicine</h2>
          <GoldRule className="mx-auto mt-6" />
          <div className="mt-8 space-y-6 text-base leading-relaxed text-navy/80 md:text-lg">
            <p>
              At Charleston Medicine and Behavioral Health, we offer a refined concierge-style healthcare experience
              centered around personalized attention, elevated care, and meaningful patient relationships. By
              intentionally maintaining a limited patient panel, our providers are able to dedicate more time,
              accessibility, and thoughtful attention to every individual we serve.
            </p>
            <p>
              Our boutique approach allows for unhurried appointments designed around you, giving your provider the
              opportunity to truly listen, understand your concerns, and develop a tailored plan that supports your
              overall wellness. From preventive care and behavioral health to ongoing wellness management, every aspect
              of your experience is designed to feel seamless, attentive, and highly individualized.
            </p>
            <p>
              At Charleston Medicine and Behavioral Health, healthcare is never rushed or one size fits all. We believe
              exceptional medicine begins with connection, trust, and care tailored to your unique lifestyle and needs.
            </p>
          </div>
        </div>
      </Section>

      {/* Four Pillars */}
      <Section bg="white">
        <SectionHeading eyebrow="What sets us apart" title="The Four Pillars of Concierge Medicine" align="center" />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map(({ icon: Icon, title, body }, i) => {
            const shades = ["bg-blue-light/50", "bg-blue-light/70", "bg-blue/70 text-white", "bg-navy text-white"];
            const dark = i >= 2;
            return (
              <Reveal key={title} delay={i * 90} y={20}>
                <div className={`group rounded-2xl p-7 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${shades[i]}`}>
                  <div className={`mx-auto grid size-14 place-items-center rounded-full transition-transform duration-300 group-hover:scale-110 ${dark ? "bg-white/15 text-white" : "border border-navy/15 text-navy"}`}>
                    <Icon className="size-5" strokeWidth={1.5} />
                  </div>
                  <h3 className={`mt-5 text-xl ${dark ? "text-white" : "text-navy"}`}>{title}</h3>
                  <p className={`mt-3 text-sm leading-relaxed ${dark ? "text-white/85" : "text-navy/75"}`}>{body}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>

      <WhiteGloveBanner />

      {/* Pricing tiers */}
      <Section bg="cream">
        <SectionHeading eyebrow="Membership" title="Extended Access Tiers for Concierge Primary Care" align="center" />

        <div className="mx-auto mt-14 grid max-w-4xl gap-6 md:grid-cols-2">
          {[
            {
              name: "Premier Access",
              price: "$300",
              cadence: "/month/person",
              tag: "Most Comprehensive",
              perks: [
                "Top priority scheduling",
                "24/7 after-hours provider access for acute illnesses",
                "365 days/year including weekends and holidays",
                "Elective service discounts",
              ],
            },
            {
              name: "Elite Access",
              price: "$200",
              cadence: "/month/person",
              tag: "Enhanced",
              perks: [
                "Enhanced priority scheduling",
                "After-hours provider access for acute illnesses",
                "Monday–Friday, 8:00am – 8:00pm",
                "Excluding office closures",
              ],
            },
          ].map((t, i) => (
            <Reveal key={t.name} delay={i * 120} y={20}>
              <div className="relative overflow-hidden rounded-2xl border border-navy/15 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="border-b border-navy bg-navy px-7 py-5 text-white">
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl text-white">{t.name}</h3>
                    <span className="rounded-full bg-gold/90 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-navy">{t.tag}</span>
                  </div>
                </div>
                <div className="px-7 py-8">
                  <p className="flex items-baseline gap-1">
                    <span className="font-serif text-5xl text-navy">{t.price}</span>
                    <span className="text-sm text-navy/60">{t.cadence}</span>
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
                  <div className="mt-8">
                    <CtaButton variant="navy-outline" to="/new-patients" className="w-full">Get started</CtaButton>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
