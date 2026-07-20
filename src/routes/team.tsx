import { createFileRoute } from "@tanstack/react-router";
import { Section, GoldRule, Reveal } from "@/components/site/Primitives";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import rodney from "@/assets/Rodney.png";
import sarah from "@/assets/Sarah.jpg";
import caroline from "@/assets/Caroline.jpg";
import katie from "@/assets/Katie.jpg";
import emmie from "@/assets/Emmie.png";
import marion from "@/assets/Marion.jpg";
import emma from "@/assets/Emma.jpg";
import ownerBg from "@/assets/ownerBackground.jpg";
import groupMain from "@/assets/TeamGroup (2).jpg";
import group1 from "@/assets/teamGroup.jpg";
import group3 from "@/assets/teamgroup3.jpg";
import group4 from "@/assets/teamgroup4.jpg";
import group5 from "@/assets/teramgroup5.jpg";

const GROUP_PHOTOS = [groupMain, group3, group5, group1, group4];

function GroupPhotoSlideshow() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % GROUP_PHOTOS.length), 5000);
    return () => clearInterval(t);
  }, []);
  return (
    <div className="w-full overflow-hidden rounded-2xl border border-border bg-cream">
      {GROUP_PHOTOS.map((src, i) => (
        <img
          key={src}
          src={src}
          alt="Charleston Medicine and Behavioral Health team"
          className={cn(
            "w-full h-auto block transition-opacity duration-[1500ms] ease-in-out",
            i === idx ? "opacity-100" : "hidden",
          )}
          loading={i === 0 ? "eager" : "lazy"}
        />
      ))}
      <div className="flex justify-center gap-2 py-3">
        {GROUP_PHOTOS.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Show photo ${i + 1}`}
            onClick={() => setIdx(i)}
            className={cn(
              "size-2 rounded-full shadow transition-colors duration-300",
              i === idx ? "bg-navy" : "bg-navy/30 hover:bg-navy/50",
            )}
          />
        ))}
      </div>
    </div>
  );
}



export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "The Team | Charleston Medicine and Behavioral Health" },
      { name: "description", content: "Meet the providers and staff of Charleston Medicine and Behavioral Health on James Island." },
      { property: "og:title", content: "The Team - Charleston Medicine and Behavioral Health" },
      { property: "og:description", content: "Concierge medicine providers and team." },
      { property: "og:url", content: "/team" },
    ],
    links: [{ rel: "canonical", href: "/team" }],
  }),
  component: TeamPage,
});

const TEAM = [
  {
    name: "Dr. W. Rodney Andrews",
    title: "Owner & Founder · DNP, AGNP-BC, PMHNP",
    photo: rodney,
    bio: "Dr. Rodney Andrews is an Internal Medicine and Behavioral Health provider dedicated to helping patients navigate anxiety, depression, performance psychology, and overall wellness with a thoughtful, compassionate, and results-driven approach. With advanced training from both Duke University and the Medical University of South Carolina (MUSC), Dr. Andrews combines academic excellence with an approachable bedside manner that allows patients to feel genuinely heard, understood, and supported. His practice emphasizes not only mental and physical health, but also longevity, resilience, and sustainable well-being. Outside of the office, Dr. Andrews enjoys quiet mornings with a strong cup of coffee overlooking the river, spending time on the porch with his wife Lea, their beloved dog Gus, and an ever-growing family of well-loved stray cats. Together, they are known among friends for their enthusiasm for trivia nights - and their tendency to leave as reigning champions. One of their greatest joys is visiting their son Rhett in Vermont, where he is thriving during his college years.",
  },
  {
    name: "Sarah Zourzoukis",
    title: "Advanced Practitioner · FNP-BC",
    photo: sarah,
    bio: "Sarah is a board-certified Family Nurse Practitioner known for her compassionate approach, attentive care, and genuine passion for helping others. Originally from Florence, South Carolina, she moved to Charleston in 2013 to pursue her nursing education at the Medical University of South Carolina (MUSC), where she also met her husband George. She later earned her Master of Science in Nursing from the University of South Carolina and has since dedicated her career to providing thoughtful, patient-centered care that is both approachable and highly individualized. Outside of her professional life, Sarah enjoys embracing all that the Lowcountry has to offer alongside her husband George, their energetic daughter Mary Mason, and their beloved chocolate lab Ellie. Whether spending time at the beach, exploring local parks, or gathering with friends over great food, Sarah values family, connection, and creating meaningful moments both inside and outside of the office.",
  },
  {
    name: "Caroline Scruggs",
    title: "Advanced Practitioner · MSN, CNM",
    photo: caroline,
    bio: "Caroline is a Certified Nurse Midwife with more than 25 years of experience in women's health and a longstanding commitment to providing compassionate, patient-centered care. At Charleston Medicine and Behavioral Health, she is known for creating an environment where patients feel informed, supported, and empowered to make confident decisions about their health and wellness. Her collaborative approach, paired with extensive clinical expertise, allows her to build meaningful relationships with patients throughout every stage of care. A proud graduate of Clemson University and former officer in the Army Nurse Corps, Caroline's career has been shaped by a wide range of experiences in nursing and women's health. She discovered her passion for midwifery while working as a travel nurse in labor and delivery, and later earned her Master's degree in Nurse Midwifery from the Medical University of South Carolina (MUSC). Since 2007, she has also served as a clinical instructor at MUSC, mentoring and educating future generations of nurses. Outside of work, Caroline enjoys swing dancing, yoga, running, and fostering dogs through local rescue organizations.",
  },
  {
    name: "Katie Hughes",
    title: "Business Manager",
    photo: katie,
    bio: "Since joining Charleston Medicine and Behavioral Health, Katie has become an integral part of the practice's growth and daily operations. She oversees business development, manages operational strategy, and cultivates lasting relationships with patients and community partners, all while helping ensure the practice runs seamlessly behind the scenes. Known for her loyalty, energy, and unwavering commitment to the team, Katie brings both professionalism and personality to everything she does. Katie grew up in Northern New Jersey, where her competitive spirit and strong work ethic were shaped through years as a varsity athlete. She earned her bachelor's degree from the University of Rhode Island. Outside of work, Katie fully embraces the Lowcountry lifestyle and can often be found enjoying beach days, spending time outdoors, and soaking up the Charleston sunshine. She has a deep love for animals, a passion for creativity and design, and enjoys expressing herself through fashion, jewelry, and thoughtfully curated spaces.",
  },
  {
    name: "Emma Londino",
    title: "Registered Nurse",
    photo: emma,
    bio: "Emma is a dedicated Registered Nurse with a strong passion for emergency medicine and a compassionate, patient-centered approach to care. Originally from New Jersey, she earned her Bachelor of Science in Nursing from Miami University and has since continued building her nursing career in Charleston. In addition to her work in the Emergency Department at the Medical University of South Carolina (MUSC), Emma also supports the team at Charleston Medicine and Behavioral Health, where her energy, professionalism, and warmth make a lasting impact on both patients and colleagues alike. Outside of the clinical setting, Emma embraces a balanced and active lifestyle centered around wellness, connection, and creativity. She enjoys spending time outdoors, practicing yoga, and making meaningful memories with friends and family. An avid home cook and talented baker, she loves creating thoughtful meals and desserts to share with those around her.",
  },
  {
    name: "Marion Jamrog",
    title: "Billing Specialist",
    photo: marion,
    bio: "Marion brings decades of professional experience in sales and healthcare administration, including more than twenty years managing a chiropractic practice. Alongside her late husband Mark, she raised their daughter Haley while building a life rooted in compassion, resilience, and family. In 2023, Marion made the move from Connecticut to Charleston, trading snowy New England winters for the warmth and beauty of the Lowcountry. At Charleston Medicine and Behavioral Health, Marion serves as a trusted resource for all things billing, coding, and insurance-related. Known for her reliability, attention to detail, and collaborative spirit, she is always eager to lend a helping hand. Outside of work, she enjoys relaxing by the pool, spending time with her kitten Louie, and supporting children with autism and their families through community involvement and advocacy.",
  },
  {
    name: "Emmie Gray",
    title: "Patient Services Coordinator",
    photo: emmie,
    bio: "Emmie grew up just outside of Boston, Massachusetts, where she developed a love for wellness, staying active, and connecting with others. She earned her Bachelor of Science in Exercise Science with a minor in Psychology from the College of Charleston, combining her passion for health, fitness, and mental well-being into a career focused on helping people feel their best. Since joining Charleston Medicine and Behavioral Health, Emmie has become a friendly face patients can count on from the moment they walk through the door. Whether she is helping coordinate care, supporting patients, or creating a welcoming environment, she is passionate about making healthcare feel more personal, comfortable, and compassionate. Outside of the office, Emmie loves beach days, wellness routines, trying new coffee spots, and spending time with family and friends.",
  },
];

function TeamPage() {
  return (
    <>
      <Section bg="cream" className="pt-28 md:pt-32">
        <div className="text-center">
          <p className="eyebrow text-blue">The Team</p>
          <h1 className="mt-3 text-5xl md:text-6xl">Care delivered by people you'll <em className="font-serif italic text-blue">know by name</em>.</h1>
          <GoldRule className="mx-auto mt-6" />
        </div>
        <div className="mt-14">
          <GroupPhotoSlideshow />
        </div>
      </Section>

      <Section bg="white">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {TEAM.map((m, i) => (
            <Reveal key={m.name} delay={(i % 3) * 100} y={24}>
              <TeamMemberCard member={m} ownerBg={m.name.includes("Rodney") ? ownerBg : undefined} />
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}

function TeamMemberCard({
  member,
  ownerBg,
}: {
  member: (typeof TEAM)[number];
  ownerBg?: string;
}) {
  const [expanded, setExpanded] = useState(false);
  return (
    <button
      type="button"
      onClick={() => setExpanded((v) => !v)}
      aria-pressed={expanded}
      className="group relative aspect-[3/4] w-full overflow-hidden rounded-2xl border border-border bg-cover bg-center text-left"
      style={ownerBg ? { backgroundImage: `url(${ownerBg})` } : undefined}
    >
      <img
        src={member.photo}
        alt={`${member.name} - portrait`}
        className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        loading="lazy"
      />
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/90 via-navy/45 to-transparent p-5 pt-16">
        <h3 className="text-lg text-white">{member.name}</h3>
        <p className="mt-1 text-[11px] uppercase tracking-[0.18em] text-blue-light">{member.title}</p>
      </div>

      <div
        className={cn(
          "absolute inset-0 z-10 flex flex-col overflow-y-auto bg-navy/95 p-7 opacity-0 transition-opacity duration-300",
          "md:group-hover:opacity-100",
          expanded && "opacity-100",
        )}
      >
        <h3 className="text-2xl text-white">{member.name}</h3>
        <p className="mt-1 text-xs uppercase tracking-[0.18em] text-blue-light">{member.title}</p>
        <GoldRule className="mt-3" />
        <p className="mt-4 text-base leading-relaxed text-white/85">{member.bio}</p>
      </div>
    </button>
  );
}
