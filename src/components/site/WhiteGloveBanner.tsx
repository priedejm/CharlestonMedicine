import { Reveal, GoldRule, CtaButton } from "@/components/site/Primitives";
import wordmark from "@/assets/thumbnail_Logo 1 from Lea.svg";
import whiteGlove from "@/assets/whiteGloves.png";

export function WhiteGloveBanner() {
  return (
    <section className="relative isolate overflow-hidden bg-gold/25">
      <div className="absolute bottom-6 right-6 z-10 hidden rounded-full bg-white p-3 shadow-lg ring-1 ring-navy/10 md:block">
        <img src={wordmark} alt="Charleston Medicine and Behavioral Health" className="h-9 w-auto md:h-11" />
      </div>
      <Reveal y={28} className="flex flex-col md:flex-row md:items-center">
        <div className="relative aspect-[16/11] w-full overflow-hidden md:aspect-[58/31] md:w-[58%]">
          <img
            src={whiteGlove}
            alt="A server presenting a covered silver tray with a heart-shaped stethoscope, symbolizing white glove concierge care"
            className="absolute inset-0 size-full object-cover object-[80%_center] md:object-center"
          />
        </div>
        <div className="flex flex-1 flex-col items-center justify-center px-6 py-14 text-center md:items-start md:px-14 md:py-24 md:text-left">
          <h2 className="font-serif text-5xl italic text-blue md:text-7xl">White Glove Service</h2>
          <p className="mt-3 text-[11px] uppercase tracking-[0.2em] text-navy/60 md:text-xs">
            Brought to you by Charleston Medicine and Behavioral Health
          </p>
          <GoldRule className="mx-auto mt-6 md:mx-0" />
          <p className="mx-auto mt-6 max-w-sm text-sm text-navy/70 md:mx-0 md:text-base">
            Healthcare delivered with the discretion, attention, and polish of the finest hospitality.
          </p>
          <div className="mt-8 flex justify-center md:justify-start">
            <CtaButton variant="gold" to="/new-patients">Become a Patient</CtaButton>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
