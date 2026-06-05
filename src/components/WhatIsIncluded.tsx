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
    title: "Activity Worksheets",
    desc: "Word searches, crosswords, matching games, fill-in-the-blank, and handwriting practice built into every pack.",
    accent: "#60A5FA",
    bg: "bg-sky-50",
  },
  {
    emoji: "🗺️",
    title: "Habitat Maps & Posters",
    desc: "Wall-ready world maps marking where each animal lives, with biome breakdowns kids can annotate.",
    accent: "#A78BFA",
    bg: "bg-violet-50",
  },
  {
    emoji: "🧪",
    title: "STEM Mini-Projects",
    desc: "Science experiments and engineering challenges inspired by real animal adaptations — no special supplies needed.",
    accent: "#FBBF24",
    bg: "bg-yellow-50",
  },
  {
    emoji: "📖",
    title: "Writing Prompts",
    desc: "Story starters and research frames that drop kids into the animal's world and onto the blank page fast.",
    accent: "#F87171",
    bg: "bg-rose-50",
  },
];

const steps = [
  { n: "01", title: "Pick Your Pack", desc: "Choose an animal and age group from the free library." },
  { n: "02", title: "Instant Download", desc: "Your print-ready PDF downloads immediately — no account needed." },
  { n: "03", title: "Print & Learn", desc: "Print at home or school and dive into hours of wildlife fun." },
];

export default function WhatIsIncluded() {
  return (
    <section id="how-it-works" className="py-24 px-4 bg-[#FEFAE0] bg-dots">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="section-label justify-center">What&apos;s in Every Pack</p>
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4">
            Six Activities.{" "}
            <span className="text-[#2D6A4F]">One Amazing Animal.</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Every pack is ready to print — no planning, no prep, no cost.
          </p>
        </div>

        {/* Activity cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-20">
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

        {/* How it works */}
        <div className="bg-[#1B4332] rounded-3xl px-8 py-12 relative overflow-hidden">
          {/* Subtle leaf bg */}
          <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
            <svg width="100%" height="100%" viewBox="0 0 400 200" preserveAspectRatio="xMidYMid slice">
              <path d="M-40 100 Q80 0 200 80 Q320 160 440 60" stroke="white" strokeWidth="60" fill="none"/>
              <path d="M-40 160 Q80 60 200 140 Q320 220 440 120" stroke="white" strokeWidth="40" fill="none"/>
            </svg>
          </div>

          <p className="section-label justify-center text-[#52B788] mb-2" style={{ color: "#52B788" }}>
            Three Steps
          </p>
          <h3 className="text-center text-white font-black text-3xl mb-12">
            How It Works
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            {/* Connecting line on desktop */}
            <div className="hidden md:block absolute top-10 left-[calc(16.66%+1rem)] right-[calc(16.66%+1rem)] h-px border-t-2 border-dashed border-white/20 pointer-events-none" />

            {steps.map(({ n, title, desc }) => (
              <div key={n} className="flex flex-col items-center text-center relative z-10">
                <div className="w-20 h-20 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center mb-4 shadow-lg">
                  <span className="text-[#F4A261] text-2xl font-black tracking-widest">{n}</span>
                </div>
                <h4 className="text-white font-bold text-lg mb-2">{title}</h4>
                <p className="text-white/60 text-sm leading-relaxed max-w-xs">{desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
