import { createFileRoute } from "@tanstack/react-router";
import { Section, SectionHeading, VideoHero, GoldRule, Reveal } from "@/components/site/Primitives";
import { Sparkles, ShieldCheck, Beaker } from "lucide-react";
import ivMenu1 from "@/assets/iv-menu-1.jpg";
import ivMenu2 from "@/assets/iv-menu-2.jpg";
import ivMenu3 from "@/assets/iv-menu-3.jpg";
import ivMenu4 from "@/assets/iv-menu-4.jpg";
import ivMenu5 from "@/assets/iv-menu-5.jpg";
import ivMenu6 from "@/assets/iv-menu-6.jpg";
import nad1 from "@/assets/nad-1.jpg";
import nad3 from "@/assets/nad-3.jpg";
import nad5 from "@/assets/nad-5.jpg";
import ivHeroVideo from "@/assets/iv.webm";

export const Route = createFileRoute("/iv-drip-services")({
  head: () => ({
    meta: [
      { title: "IV Drip Services & NAD+ | Charleston Medicine and Behavioral Health" },
      { name: "description", content: "Medically-administered IV vitamin, hydration, and NAD+ therapy in Charleston, SC." },
      { property: "og:title", content: "IV Drip Services - Charleston Medicine and Behavioral Health" },
      { property: "og:description", content: "Hydration, vitamins, antioxidants, and NAD+ delivered with clinical precision." },
      { property: "og:url", content: "/iv-drip-services" },
    ],
    links: [{ rel: "canonical", href: "/iv-drip-services" }],
  }),
  component: IVPage,
});

const WHY = [
  { icon: Sparkles, t: "Personalized Approach", body: "Every drip is matched to your goals, history, and current health." },
  { icon: ShieldCheck, t: "Safety and Expertise", body: "Medically supervised by licensed providers in a clinical setting." },
  { icon: Beaker, t: "Range of Services", body: "Hydration, vitamin therapy, antioxidant blends, and NAD+ packages." },
];

const MENU = [
  {
    name: "ENERGIZE",
    price: "$249",
    body: "A springboard to optimize your best performance. Vitamin C helps support all your ligaments, tendons, and muscles.",
    ingredients: ["Vitamin C", "Magnesium", "Arginine", "B12", "Taurine", "B-Complex", "Glutathione"],
    img: ivMenu2,
  },
  {
    name: "PROTECT",
    price: "$229",
    body: "Prime your immune system with vitamins and antioxidants to keep it working properly and limit the risk of infection.",
    ingredients: ["Vitamin C", "Magnesium", "Zinc", "B12"],
    img: ivMenu1,
  },
  {
    name: "PRIMED",
    price: "$229",
    body: "A gentle infusion inspired by the classic Myers cocktail - a blend of vitamins and hydration intended to support immune function, energy, mental clarity, and general well-being.",
    ingredients: ["Vitamin C", "Magnesium", "B12", "B-Complex"],
    img: ivMenu3,
  },
  {
    name: "REPAIR",
    price: "$229",
    body: "Flush toxins out of your body and accelerate your rehydration and recovery with micronutrients, antioxidants, and fluids.",
    ingredients: ["Vitamin C", "Magnesium", "B12", "B-Complex", "Glutathione"],
    img: ivMenu4,
  },
  {
    name: "HYDRATE",
    price: "$99 / $149",
    body: "The 100% hydration drip provides fluids and electrolytes to give your body the power level of hydration needed to feel rejuvenated and refreshed. 500mL or 1 Liter.",
    ingredients: ["Lactated Ringers"],
    img: ivMenu6,
  },
  {
    name: "THE ANTIDOTE",
    price: "$219 / $249 / $299",
    body: "Beat dehydration and restore electrolyte balance with a balanced vitamin blend to flush out alcohol toxins - perfect for a post-party pick-me-up. Offered at three levels.",
    ingredients: [
      "Level 1 (500mL): Vitamin C, B-Complex, Magnesium",
      "Level 2 (1L): Vitamin C, B-Complex, Magnesium",
      "Level 3 (1L): Vitamin C, B-Complex, Magnesium, B12, oral anti-nausea medicine",
    ],
    img: ivMenu5,
  },
];

const NAD_PHOTOS = [nad1, nad3, nad5];

const NAD = [
  { name: "One NAD+ IV", price: "$499" },
  { name: "Three NAD+ IV", price: "$749", featured: true },
  { name: "Four NAD+ IV", price: "$899" },
];

const QUOTES = [
  { q: "There's a benefit for your immune system, there's a benefit cognitively. You feel much better.", who: "Joe Rogan" },
  { q: "NAD+ is the future of health.", who: "Jennifer Aniston" },
  { q: "I'm going to NAD for the rest of my life and I am never going to age.", who: "Hailey Bieber" },
  { q: "I've been taking care of the vessel God has given me.", who: "Justin Bieber" },
];

function IVPage() {
  return (
    <>
      <VideoHero label="IV wellness / clinical lifestyle" height="min-h-[60vh]" src={ivHeroVideo}>
        <p className="eyebrow text-gold">IV Drip Services</p>
        <h1 className="mt-4 font-serif text-5xl text-white md:text-7xl">Hydration. <em className="italic text-blue-light">Vitality.</em> Recovery.</h1>
        <p className="mt-5 max-w-xl text-white/85">Medically-administered IV therapy designed around your goals.</p>
      </VideoHero>

      <Section bg="white">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow text-blue">A holistic approach</p>
          <h2 className="mt-3 text-4xl md:text-5xl">IV Drip Therapy</h2>
          <GoldRule className="mx-auto mt-6" />
          <p className="mt-8 text-base leading-relaxed text-navy/80 md:text-lg">
            At Charleston Medicine and Behavioral Health, we understand the importance of holistic well-being. That
            is why we offer intravenous drip therapy - a medical treatment that delivers essential fluids, vitamins,
            minerals, and antioxidants directly into your bloodstream for fast and effective absorption.
          </p>
        </div>
      </Section>

      <Section bg="cream">
        <SectionHeading eyebrow="Why Charleston Medicine" title="A drip program built on clinical rigor." align="center" />
        <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-3">
          {WHY.map(({ icon: Icon, t, body }, i) => (
            <Reveal key={t} delay={i * 100} y={20}>
              <div className="group rounded-2xl border border-border bg-white p-7 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="mx-auto grid size-14 place-items-center rounded-full bg-navy text-white transition-transform duration-300 group-hover:scale-110">
                  <Icon className="size-5" strokeWidth={1.5} />
                </div>
                <h3 className="mt-5 text-xl">{t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-navy/70">{body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Menu */}
      <Section bg="white">
        <SectionHeading eyebrow="The menu" title="IV Drip Menu" />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {MENU.map((m, i) => (
            <Reveal key={m.name} delay={(i % 3) * 100} y={24}>
              <article className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <figure className="aspect-[4/3] overflow-hidden">
                  <img src={m.img} alt={`${m.name} IV drip`} className="size-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </figure>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="font-serif text-2xl uppercase tracking-wide text-navy">{m.name}</h3>
                    <span className="rounded-full bg-gold/15 px-3 py-1 text-sm font-semibold text-navy">{m.price}</span>
                  </div>
                  <GoldRule className="mt-3" />
                  <p className="mt-4 text-sm leading-relaxed text-navy/75">{m.body}</p>
                  <div className="mt-5 border-t border-border pt-4">
                    <p className="text-[10px] uppercase tracking-[0.22em] text-blue">Featured ingredients</p>
                    <ul className="mt-2 flex flex-wrap gap-1.5">
                      {m.ingredients.map((ing) => (
                        <li key={ing} className="rounded-full bg-cream px-3 py-1 text-xs text-navy/80">{ing}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* NAD+ */}
      <Section bg="cream">
        <SectionHeading
          eyebrow="NAD+ Packages"
          title="Cellular vitality at the source."
          intro="NAD+ (nicotinamide adenine dinucleotide) is a critical coenzyme involved in cellular respiration, ATP synthesis, and metabolic regulation. As NAD+ levels naturally decline with age, mitochondrial efficiency and cellular repair mechanisms may become impaired. NAD+ IV therapy is designed to support intracellular NAD+ availability, promoting mitochondrial integrity, cellular resilience, and enzymatic processes involved in DNA repair and neuroprotection. NAD+ therapy may support healthy aging, cognitive performance, metabolic function, and overall cellular vitality."
        />
        <div className="mx-auto mt-10 grid max-w-5xl gap-4 sm:grid-cols-3">
          {NAD_PHOTOS.map((src, i) => (
            <Reveal key={src} delay={i * 100} y={20}>
              <figure className="group aspect-[3/2] overflow-hidden rounded-2xl border border-border">
                <img src={src} alt="NAD+ cellular biology" className="size-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </figure>
            </Reveal>
          ))}
        </div>
        <div className="mx-auto mt-8 grid max-w-5xl gap-6 md:grid-cols-3">
          {NAD.map((n, i) => (
            <Reveal key={n.name} delay={i * 120} y={20}>
              <div
                className={`rounded-2xl border bg-white p-7 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${n.featured ? "border-gold shadow-md md:scale-[1.03]" : "border-border"}`}
              >
                {n.featured && <p className="eyebrow text-gold">Most Popular</p>}
                <h3 className="mt-2 text-2xl">{n.name}</h3>
                <p className="mt-4 font-serif text-5xl text-navy">{n.price}</p>
                <GoldRule className="mx-auto mt-5" />
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Quotes */}
      <Section bg="navy">
        <SectionHeading
          eyebrow="In the conversation"
          title="Trusted by Those Who Demand the Best"
          align="center"
          invert
        />
        <div className="mx-auto mt-14 grid max-w-5xl gap-8 md:grid-cols-2">
          {QUOTES.map((q, i) => (
            <Reveal key={q.who} delay={i * 90} y={20}>
              <figure className="border-l-2 border-gold pl-6">
                <blockquote className="font-serif text-2xl italic leading-snug text-white md:text-3xl">
                  "{q.q}"
                </blockquote>
                <figcaption className="mt-4 text-xs uppercase tracking-[0.22em] text-gold">- {q.who}</figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
