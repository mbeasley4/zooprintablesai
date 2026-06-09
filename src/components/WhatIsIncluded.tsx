import Image from "next/image";

const items = [
  {
    emoji: "📚",
    title: "Animal Fact Sheets",
    desc: "AI-researched fact sheets covering habitat, diet, behavior, and conservation status — accurate enough for classrooms.",
    accent: "#52B788",
    bg: "bg-emerald-50",
  },
  {
    emoji: "🎨",
    title: "Coloring Pages",
    desc: "Detailed line art scaled to skill level — simple shapes for toddlers, intricate scenes for tweens.",
    accent: "#F4A261",
    bg: "bg-orange-50",
  },
  {
    emoji: "✏️",
    title: "Activity Packs",
    desc: "Word searches, crosswords, matching games, fill-in-the-blank, and handwriting practice built into every pack.",
    accent: "#60A5FA",
    bg: "bg-sky-50",
  },
];

const steps = [
  { n: "01", icon: "🦁", title: "Pick Your Pack", desc: "Browse animals A–Z and choose one from the free library." },
  { n: "02", icon: "⬇️", title: "Instant Download", desc: "Your print-ready PDF downloads immediately — no account needed." },
  { n: "03", icon: "🖨️", title: "Print & Learn", desc: "Print at home or school and dive into hours of wildlife fun." },
];

export default function WhatIsIncluded() {
  return (
    <section id="how-it-works" className="py-24 px-4 bg-[#FEFAE0] bg-dots">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="section-label justify-center">What&apos;s in Every Pack</p>
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4">
            Three Activities.{" "}
            <span className="text-[#2D6A4F]">One Amazing Animal.</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Every pack is ready to print — no planning, no prep, no cost.
          </p>
        </div>

        {/* Activity cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {items.map((item) => (
            <div
              key={item.title}
              className={`card-hover ${item.bg} rounded-2xl p-6 relative overflow-hidden group`}
              style={{ borderLeft: `4px solid ${item.accent}` }}
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center text-xl mb-4 shadow-sm"
                style={{ background: item.accent + "22" }}
              >
                {item.emoji}
              </div>
              <h3 className="font-black text-gray-900 text-base mb-2">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Photo break */}
        <div className="relative h-64 sm:h-80 rounded-3xl overflow-hidden mb-14 shadow-xl">
          <Image
            src="/images/site/gorilla-1.png"
            alt="Gorilla in the wild"
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 1152px"
          />
          <div className="absolute inset-0 bg-linear-to-r from-black/65 via-black/30 to-transparent" />
          <div className="absolute inset-0 flex flex-col justify-end p-8 sm:p-10">
            <p className="text-[#52B788] text-xs font-bold uppercase tracking-widest mb-2">Why It Matters</p>
            <h3 className="text-white font-black text-2xl sm:text-3xl max-w-sm leading-snug">
              Every kid deserves to know the wild.
            </h3>
          </div>
        </div>

        {/* How it works */}
        <div
          className="rounded-3xl px-8 py-14 relative overflow-hidden shadow-2xl"
          style={{ background: "linear-gradient(135deg, #0d2a12 0%, #1B4332 50%, #0d2a12 100%)" }}
        >
          {/* Radial glow behind the steps */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full opacity-20"
              style={{ background: "radial-gradient(ellipse, #52B788 0%, transparent 70%)" }} />
          </div>

          {/* Decorative corner leaves */}
          <div className="absolute top-0 left-0 w-48 h-48 opacity-10 pointer-events-none">
            <svg viewBox="0 0 200 200" fill="none"><path d="M-20 100 Q60 0 200 40 Q120 120 -20 180Z" fill="#52b788"/></svg>
          </div>
          <div className="absolute bottom-0 right-0 w-48 h-48 opacity-10 pointer-events-none">
            <svg viewBox="0 0 200 200" fill="none"><path d="M220 100 Q140 200 0 160 Q80 80 220 20Z" fill="#52b788"/></svg>
          </div>

          {/* Header */}
          <div className="text-center mb-12 relative z-10">
            <span className="inline-flex items-center gap-2 bg-[#52B788]/20 border border-[#52B788]/40 text-[#52B788] text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-4">
              Three Steps
            </span>
            <h3 className="text-white font-black text-4xl sm:text-5xl">
              How It Works
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 relative z-10">
            {steps.map(({ n, icon, title, desc }) => (
              <div key={n} className="relative flex flex-col items-center text-center group">

                {/* Step card */}
                <div className="w-full bg-white/8 hover:bg-white/12 transition-colors border border-white/15 rounded-2xl p-7 flex flex-col items-center">
                  {/* Number badge */}
                  <div className="relative mb-5">
                    <div className="w-20 h-20 rounded-full flex items-center justify-center shadow-lg"
                      style={{ background: "linear-gradient(135deg, #F4A261, #E76F51)" }}>
                      <span className="text-white text-3xl font-black">{n}</span>
                    </div>
                    {/* Glow ring */}
                    <div className="absolute inset-0 rounded-full opacity-40 blur-md"
                      style={{ background: "linear-gradient(135deg, #F4A261, #E76F51)" }} />
                  </div>

                  <div className="text-3xl mb-3">{icon}</div>
                  <h4 className="text-white font-black text-xl mb-2">{title}</h4>
                  <p className="text-white/60 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom trust line */}
          <p className="text-center text-white/30 text-xs mt-10 tracking-widest uppercase relative z-10">
            No account &nbsp;·&nbsp; No credit card &nbsp;·&nbsp; Always free
          </p>
        </div>

      </div>
    </section>
  );
}
