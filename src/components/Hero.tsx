import Image from "next/image";

const ANIMAL_OF_MONTH = {
  slug: "gorilla",
  name: "Gorilla",
  emoji: "🦍",
  activities: 34,
};

/* ─── Jungle Background ────────────────────────────────────── */
function JungleBackground() {
  return (
    <div className="absolute inset-0" aria-hidden="true">
      <Image
        src="/images/site/jungle.png"
        alt=""
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
    </div>
  );
}

/* ─── Hero ────────────────────────────────────────────────── */
export default function Hero() {
  return (
    <section className="relative min-h-[78vh] overflow-hidden flex flex-col bg-black">
      <JungleBackground />

      {/* Darkens edges, keeps centre open so the jungle depth shows through */}
      <div className="absolute inset-0 bg-black/35 pointer-events-none" />
      <div className="absolute inset-0 bg-linear-to-b from-black/60 via-transparent to-black/65 pointer-events-none" />

      {/* Left floating animal cards — lg+ only */}
      <div className="absolute left-6 xl:left-14 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-5 z-10 pointer-events-none">
        <div className="bg-white/95 p-2 pb-7 shadow-2xl -rotate-6 w-36 xl:w-44">
          <Image src="/images/site/giraffe.png" alt="Giraffe" width={176} height={130} className="object-cover w-full" />
          <p className="text-center text-gray-500 text-[10px] mt-2 font-semibold uppercase tracking-widest">Giraffe</p>
        </div>
        <div className="bg-white/95 p-2 pb-7 shadow-2xl rotate-4 w-36 xl:w-44">
          <Image src="/images/site/lion.png" alt="Lion" width={176} height={130} className="object-cover w-full" />
          <p className="text-center text-gray-500 text-[10px] mt-2 font-semibold uppercase tracking-widest">Lion</p>
        </div>
      </div>

      {/* Right floating animal cards — lg+ only */}
      <div className="absolute right-6 xl:right-14 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-5 z-10 pointer-events-none">
        <div className="bg-white/95 p-2 pb-7 shadow-2xl rotate-6 w-36 xl:w-44">
          <Image src="/images/site/zebra.png" alt="Zebra" width={176} height={130} className="object-cover w-full" />
          <p className="text-center text-gray-500 text-[10px] mt-2 font-semibold uppercase tracking-widest">Zebra</p>
        </div>
        <div className="bg-white/95 p-2 pb-7 shadow-2xl -rotate-4 w-36 xl:w-44">
          <Image src="/images/site/chimp.png" alt="Chimpanzee" width={176} height={130} className="object-cover w-full" />
          <p className="text-center text-gray-500 text-[10px] mt-2 font-semibold uppercase tracking-widest">Chimpanzee</p>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-4 pt-24 pb-20 max-w-5xl mx-auto w-full">

        {/* Badge floats above the card */}
        <div className="inline-flex items-center gap-2 bg-[#F4A261] text-white text-sm font-bold px-5 py-2 rounded-full mb-5 shadow-lg">
          100% Free — No Sign-Up Required
        </div>

        {/* Frosted glass card behind heading + copy + CTAs */}
        <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-3xl px-8 sm:px-12 py-10 mb-8 max-w-3xl w-full shadow-2xl">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-4">
            Everything Great Zoo
            <br />
            Education Sites Offer —
            <br />
            <span className="text-[#F4A261]">Minus the Stuffed Animal.</span>
          </h1>

          <p className="text-base sm:text-lg text-white/85 max-w-2xl mx-auto mb-3 leading-relaxed">
            Animal fact sheets, coloring pages, and activity packs —
            all the good stuff, for every kid, completely free.
          </p>
          <p className="text-xs text-white/50 max-w-xl mx-auto mb-7">
            Download instantly · Print at home · No account · No credit card
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="/animals"
              className="bg-[#F4A261] hover:bg-[#E76F51] text-white font-bold text-base px-8 py-3.5 rounded-full transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1"
            >
              Browse Animals A–Z
            </a>
            <a
              href="#how-it-works"
              className="bg-white/15 hover:bg-white/25 text-white font-bold text-base px-8 py-3.5 rounded-full border border-white/30 transition-all"
            >
              See What&apos;s Inside
            </a>
          </div>
        </div>

        {/* Featured animal — links to its own page */}
        <a
          href={`/animals/${ANIMAL_OF_MONTH.slug}`}
          className="bg-black/40 hover:bg-black/55 backdrop-blur-md border border-white/15 hover:border-white/30 rounded-2xl px-8 py-5 max-w-xs w-full mb-6 transition-all group"
        >
          <p className="text-white/50 text-xs font-bold uppercase tracking-widest mb-3">
            Featured This Month
          </p>
          <div className="text-4xl mb-2">{ANIMAL_OF_MONTH.emoji}</div>
          <p className="text-white font-bold text-base mb-1 group-hover:text-[#F4A261] transition-colors">{ANIMAL_OF_MONTH.name} Pack</p>
          <p className="text-white/50 text-xs">{ANIMAL_OF_MONTH.activities} activities · always free</p>
        </a>

        {/* Animal photo strip — visible on all screens, hidden on lg+ where side cards take over */}
        <div className="flex gap-2 lg:hidden">
          {[
            { src: "/images/site/giraffe.png", label: "Giraffe" },
            { src: "/images/site/lion.png",    label: "Lion" },
            { src: "/images/site/zebra.png",   label: "Zebra" },
            { src: "/images/site/chimp.png",   label: "Chimp" },
          ].map(({ src, label }) => (
            <div key={label} className="bg-white/90 p-1.5 pb-5 shadow-xl rounded-sm flex-1">
              <Image src={src} alt={label} width={100} height={75} className="object-cover w-full" />
              <p className="text-center text-gray-500 text-[9px] mt-1.5 font-semibold uppercase tracking-wider">{label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Wave into next section */}
      <div className="absolute bottom-0 left-0 right-0 z-10 translate-y-px">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="block w-full">
          <path d="M0 80L60 66C120 53 240 26 360 20C480 13 600 26 720 40C840 53 960 66 1080 60C1200 53 1320 26 1380 13L1440 0V80H0Z" fill="#FEFAE0" />
        </svg>
      </div>
    </section>
  );
}
