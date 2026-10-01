import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Stethoscope,
  Brain,
  Sparkles,
  Droplet,
  Star,
  Clock,
  FlaskConical,
  PhoneCall,
  UserCheck,
} from "lucide-react";
import { Section, SectionHeading, VideoHero, CtaButton, GoldRule, PhotoPlaceholder, Reveal } from "@/components/site/Primitives";
import { HeartBullet } from "@/components/site/HeartBullet";
import { WhiteGloveBanner } from "@/components/site/WhiteGloveBanner";
import { SITE } from "@/lib/site";
import teamPhoto from "@/assets/hero-team.jpg";
import heroVideo from "@/assets/waterAndCityAerial-web.webm";
import heroVideoMp4 from "@/assets/waterAndCityAerial-web.mp4";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Brand heart that satisfies the lucide-style icon signature used across SERVICES/WHY.
const BrandHeart = ({ className }: { className?: string; strokeWidth?: number }) => (
  <HeartBullet className={className} />
);


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Charleston Medicine and Behavioral Health | Whole-Person Care in Charleston" },
      {
        name: "description",
        content:
          "Integrated primary care, behavioral health, women's health, and wellness — welcoming patients across the Charleston area.",
      },
      { property: "og:title", content: "Charleston Medicine and Behavioral Health | Whole-Person Care in Charleston" },
      {
        property: "og:description",
        content:
          "Integrated primary care, behavioral health, women's health, and wellness — welcoming patients across the Charleston area.",
      },
      { property: "og:url", content: "https://charlestonmedicine.com/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const SERVICES = [
  {
    icon: BrandHeart,
    title: "Concierge Medicine",
    to: "/concierge-medicine",
    blurb: "A boutique panel and unhurried appointments built around your life.",
  },
  {
    icon: Stethoscope,
    title: "Physical Health",
    to: "/physical-health",
    blurb: "Proactive primary care, chronic disease management, and onsite diagnostics.",
  },
  {
    icon: Brain,
    title: "Behavioral Health",
    to: "/behavioral-health",
    blurb: "Psychiatric evaluation, therapy, and thoughtful medication management.",
  },
  {
    icon: Sparkles,
    title: "Women's Health",
    to: "/womens-health",
    blurb: "Concierge gynecology with our certified nurse midwife, Caroline Scruggs.",
  },
  {
    icon: Droplet,
    title: "IV Drip Services",
    to: "/iv-drip-services",
    blurb: "Hydration, vitamin, and NAD+ infusions delivered in a calm clinical setting.",
  },
];

const WHY = [
  { icon: UserCheck, title: "Individualized, high-quality care" },
  { icon: Clock, title: "Same-day access when you need us" },
  { icon: FlaskConical, title: "Onsite lab and diagnostics" },
  { icon: PhoneCall, title: "24-hour provider access for Premier Access members" },
];

const REVIEWS = [
  {
    name: "J.B.",
    body: "After a recent move to Charleston and looking for a new doctor and therapist, I finally found a place that fit my wants and needs and more. This has truly been the best experience and I look forward to each visit. I could not recommend this place enough - from the front desk to each doctor, everyone has been amazing.",
  },
  {
    name: "J.T.",
    body: "The number one investment you can make in life is one in yourself. The team at CMBH not only help you to maximize your investment, but they invest in you as well. My life is better having been brought into this warm, loving environment of medical professionals. Don't step over dollars to pick up pennies - book your appointment today.",
  },
  {
    name: "H.T.",
    body: "Dr. Andrews has helped me tremendously in such a short amount of time. He has a unique ability to make you feel as though you are speaking with an old friend, and I find it incredibly easy to open up to him during our sessions. His compassion, professionalism, and genuine investment in his clients sets him apart from others in the field.",
  },
  {
    name: "M.R.",
    body: "Dr. Andrews and his team make you feel so welcome and comfortable. They respond to calls and texts within the same day. After being to countless therapists over the years, I was so grateful to be referred to Dr. Andrews for my daughter. He was able to build a connection with her and get her to open up. I highly recommend Charleston Medicine and Behavioral Health!",
  },
  {
    name: "B.E.",
    body: "My son is in school in Charleston and we were referred to Dr. Andrews from a friend. Everything they do is first class from the time you call until the time you check out. Dr. Andrews and the entire staff are very attentive, caring and kind. Highly recommend to anyone looking for a medical practice that you can trust and one that genuinely cares.",
  },
  {
    name: "J.M.",
    body: "This is a must for anyone in need or just curious about whether life could offer more. A truly game-changing, life-saving experience. I'd give it 10 stars if I could.",
  },
];

const TEAM_PREVIEW = [
  { name: "Dr. W. Rodney Andrews", title: "Owner & Founder, DNP, AGNP-BC, PMHNP" },
  { name: "Sarah Zourzoukis", title: "Advanced Practitioner, FNP-BC" },
  { name: "Caroline Scruggs", title: "Advanced Practitioner, MSN, CNM" },
];

function HomePage() {
  return (
    <>
      <VideoHero label="Charleston aerial / waterway" src={heroVideo} mp4Src={heroVideoMp4}>
        <p className="eyebrow text-gold">Charleston, SC</p>
        <h1 className="mt-4 font-serif text-5xl leading-[1.02] text-white md:text-7xl">
          Whole-Person Care.
          <span className="block italic text-blue-light">Elevated.</span>
        </h1>
        <p className="mt-6 max-w-xl text-base text-white/85 md:text-lg">
          Integrated primary care, behavioral health, women's health, and wellness — welcoming patients across the
          Charleston area.
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <CtaButton variant="gold" to="/new-patients">Become a Patient</CtaButton>
          <CtaButton variant="white-outline" href={SITE.phoneHref}>
            Call {SITE.phone}
          </CtaButton>
        </div>
      </VideoHero>

      {/* Team photo */}
      <Section bg="cream">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow text-blue">Meet the Team</p>
          <h2 className="mt-3 font-serif text-3xl md:text-4xl">The people behind your care.</h2>
        </div>
        <figure className="mx-auto mt-10 max-w-5xl overflow-hidden rounded-2xl border border-navy/10 bg-white shadow-sm">
          <img
            src={teamPhoto}
            alt="The Charleston Medicine and Behavioral Health team"
            className="w-full h-auto block"
          />
        </figure>
      </Section>


      {/* Services */}
      <Section bg="white">
        <div className="grid items-end gap-8 md:grid-cols-[1.4fr_1fr]">
          <SectionHeading
            eyebrow="Our Services"
            title={<>Integrated care, <em className="font-serif italic text-blue">designed around you</em>.</>}
          />
          <p className="text-navy/70 md:text-right">
            Five connected specialties under one roof - so your mind and body are treated as the single
            system they are.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {SERVICES.map(({ icon: Icon, title, to, blurb }, i) => (
            <Reveal key={title} delay={i * 90} y={20}>
              <Link
                to={to}
                className="group flex h-full flex-col rounded-2xl border border-border bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:shadow-lg"
              >
                <div className="grid size-12 place-items-center rounded-full border border-navy/15 text-navy transition group-hover:border-gold group-hover:text-gold">
                  <Icon className="size-5" strokeWidth={1.5} />
                </div>
                <h3 className="mt-6 text-xl">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy/70">{blurb}</p>
                <span className="mt-6 inline-flex items-center gap-1 text-xs font-medium uppercase tracking-[0.18em] text-blue transition-all group-hover:gap-2 group-hover:text-gold">
                  Learn more <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Why us */}
      <Section bg="cream">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="A different standard of care."
          align="center"
        />
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {WHY.map(({ icon: Icon, title }, i) => (
            <Reveal key={title} delay={i * 120} y={18} className="text-center">
              <div className="mx-auto grid size-14 place-items-center rounded-full bg-white text-navy ring-1 ring-navy/10 transition-transform duration-500 hover:scale-105">
                <Icon className="size-5" strokeWidth={1.5} />
              </div>
              <p className="mx-auto mt-5 max-w-[18ch] text-base leading-snug text-navy">{title}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 5-star trust banner */}
      <section className="bg-navy py-20 text-white">
        <Reveal className="container-x text-center">
          <div className="flex justify-center gap-1.5 text-gold">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="size-6 fill-gold" strokeWidth={1} />
            ))}
          </div>
          <h2 className="mx-auto mt-6 max-w-3xl font-serif text-3xl text-white md:text-4xl">
            The only concierge medical practice in the Lowcountry with a perfect 5-star rating.
          </h2>
          <GoldRule className="mx-auto mt-8" />
        </Reveal>
      </section>

      {/* Reviews */}
      <Section bg="white">
        <SectionHeading
          eyebrow="Patient Reviews"
          title={<>Real patients, <em className="font-serif italic text-blue">real feedback</em>.</>}
          align="center"
        />
        <ReviewsCarousel />

      </Section>

      {/* Team preview */}
      <Section bg="cream">
        <div className="grid items-end gap-6 md:grid-cols-[1fr_auto]">
          <SectionHeading eyebrow="The Team" title="Care delivered by people you'll know by name." />
          <Link to="/team" className="text-sm font-medium uppercase tracking-[0.18em] text-blue hover:text-gold">
            Meet the Full Team →
          </Link>
        </div>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {TEAM_PREVIEW.map((m, i) => (
            <Reveal key={m.name} delay={i * 120} y={20}>
              <h3 className="text-2xl">{m.name}</h3>
              <p className="mt-1 text-xs uppercase tracking-[0.18em] text-navy/70">{m.title}</p>
            </Reveal>
          ))}
        </div>
      </Section>



      <WhiteGloveBanner />
    </>
  );
}

function ReviewsCarousel() {
  const autoplay = useRef(Autoplay({ delay: 5500, stopOnInteraction: false, stopOnMouseEnter: true }));
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" }, [autoplay.current]);
  const [selected, setSelected] = useState(0);
  const [snaps, setSnaps] = useState<number[]>([]);

  const scrollTo = useCallback((i: number) => emblaApi?.scrollTo(i), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap());
    setSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", () => {
      setSnaps(emblaApi.scrollSnapList());
      onSelect();
    });
    onSelect();
  }, [emblaApi]);

  return (
    <div className="mt-14">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {REVIEWS.map((r) => (
            <div
              key={r.name}
              className="min-w-0 shrink-0 grow-0 basis-full pl-4 first:pl-0 md:basis-1/2 lg:basis-1/3"
            >
              <figure className="flex h-full flex-col rounded-2xl border border-navy/15 bg-white p-7 shadow-sm">
                <blockquote className="flex-1 text-sm leading-relaxed text-navy/85">
                  "{r.body}"
                </blockquote>
                <figcaption className="mt-6 border-t border-border pt-4 text-sm font-medium uppercase tracking-[0.18em] text-blue">
                  - {r.name}
                </figcaption>
              </figure>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 flex items-center justify-center gap-6">
        <button
          type="button"
          onClick={() => emblaApi?.scrollPrev()}
          aria-label="Previous reviews"
          className="grid size-10 place-items-center rounded-full border border-navy/20 text-navy transition hover:border-gold hover:text-gold"
        >
          <ChevronLeft className="size-5" strokeWidth={1.5} />
        </button>
        <div className="flex gap-2">
          {snaps.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => scrollTo(i)}
              aria-label={`Go to review ${i + 1}`}
              className={`h-1.5 rounded-full transition-all ${
                i === selected ? "w-8 bg-blue" : "w-3 bg-navy/20 hover:bg-navy/40"
              }`}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={() => emblaApi?.scrollNext()}
          aria-label="Next reviews"
          className="grid size-10 place-items-center rounded-full border border-navy/20 text-navy transition hover:border-gold hover:text-gold"
        >
          <ChevronRight className="size-5" strokeWidth={1.5} />
        </button>
      </div>
    </div>
  );
}
