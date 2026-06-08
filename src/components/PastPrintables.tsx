import Image from "next/image";

const pastPacks = [
  { emoji: "🐆", animal: "Cheetah",           month: "May 2026", activities: 28, accent: "#F59E0B" },
  { emoji: "🐊", animal: "Crocodile",          month: "Apr 2026", activities: 31, accent: "#52B788" },
  { emoji: "🦈", animal: "Great White Shark",  month: "Mar 2026", activities: 29, accent: "#60A5FA" },
  { emoji: "🦋", animal: "Monarch Butterfly",  month: "Feb 2026", activities: 26, accent: "#F472B6" },
  { emoji: "🐻‍❄️", animal: "Polar Bear",       month: "Jan 2026", activities: 33, accent: "#A78BFA" },
  { emoji: "🦅", animal: "Bald Eagle",         month: "Dec 2025", activities: 27, accent: "#F87171" },
  { emoji: "🐬", animal: "Bottlenose Dolphin", month: "Nov 2025", activities: 30, accent: "#2DD4BF" },
  { emoji: "🦏", animal: "White Rhino",        month: "Oct 2025", activities: 32, accent: "#C084FC" },
];

export default function PastPrintables() {
  return (
    <section id="archive" className="py-24 px-4 bg-white relative overflow-hidden">
      {/* Soft bg blobs */}
      <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-emerald-50 opacity-70 pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-80 h-80 rounded-full bg-amber-50 opacity-70 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Header with lion photo */}
        <div className="relative rounded-3xl overflow-hidden mb-14 shadow-xl">
          <div className="relative h-56 sm:h-64">
            <Image
              src="/images/site/lion.png"
              alt="Lion standing in golden savanna grass"
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 1152px"
            />
            <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/40 to-black/10" />
          </div>
          <div className="absolute inset-0 flex flex-col justify-center px-10">
            <p className="section-label text-[#52B788] mb-2" style={{ color: "#52B788" }}>Pack Library</p>
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-2">
              Explore the{" "}
              <span className="text-[#F4A261]">Animal Archive</span>
            </h2>
            <p className="text-white/70 text-lg max-w-xl">
              Every past pack is free to download — over 120 animals and counting.
            </p>
          </div>
        </div>

        {/* Pack grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
          {pastPacks.map((pack) => (
            <a
              key={pack.animal}
              href="#packs"
              className="card-hover bg-white rounded-2xl border border-gray-100 shadow-sm p-5 flex flex-col items-center text-center group relative overflow-hidden"
            >
              {/* Glow on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none"
                style={{ background: `radial-gradient(ellipse at center, ${pack.accent}15 0%, transparent 70%)` }}
              />

              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl" style={{ background: pack.accent }} />

              <span className="text-5xl mb-3 mt-2">{pack.emoji}</span>
              <h3 className="font-bold text-gray-900 text-sm leading-tight mb-1">{pack.animal}</h3>
              <p className="text-xs text-gray-400 mb-3">{pack.month}</p>

              <span
                className="text-xs font-bold px-2.5 py-1 rounded-full"
                style={{ background: pack.accent + "18", color: pack.accent }}
              >
                {pack.activities} activities
              </span>
            </a>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <p className="text-gray-400 text-sm mb-6">
            120+ animals in the archive — all free, no sign-up required.
          </p>
          <a
            href="/#packs"
            className="inline-flex items-center gap-2 bg-[#2D6A4F] hover:bg-[#1B4332] text-white font-bold px-8 py-4 rounded-full transition-all shadow-md hover:shadow-lg"
          >
            Browse the Full Archive
          </a>
        </div>

      </div>
    </section>
  );
}
