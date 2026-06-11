const stats = [
  { value: "48,200", suffix: "+", label: "Packs Downloaded", color: "#52B788" },
  { value: "3,900",  suffix: "+", label: "Happy Families",   color: "#F4A261" },
  { value: "120",    suffix: "+", label: "Animals Covered",  color: "#60A5FA" },
  { value: "4.9",    suffix: "★", label: "Average Rating",   color: "#FBBF24" },
];

const orgs = [
  "Home Schools",
  "K–12 Classrooms",
  "Public Libraries",
  "Nature Centers",
  "Parent Groups",
];

export default function ImpactStats() {
  return (
    <section id="impact" className="py-24 px-4 bg-[#1B4332] relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
      <div className="absolute top-0 right-0 w-150 h-150 rounded-full opacity-5 pointer-events-none"
        style={{ background: "radial-gradient(circle, #52B788 0%, transparent 70%)", transform: "translate(30%, -30%)" }} />

      <div className="max-w-6xl mx-auto relative z-10">

        <div className="text-center mb-14">
          <p className="section-label justify-center" style={{ color: "#52B788" }}>Our Impact</p>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Growing Minds,{" "}
            <span className="text-[#F4A261]">One Animal at a Time</span>
          </h2>
          <p className="text-white/60 text-lg max-w-xl mx-auto">
            Thousands of families and educators trust Zoo Printables AI every month.
          </p>
          <p className="text-white/30 text-xs mt-3 font-mono">
            Stats last reported · June 2026
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {stats.map((s) => (
            <div key={s.label} className="card-hover flex flex-col items-center text-center bg-white/8 border border-white/12 rounded-2xl p-7 relative overflow-hidden group">
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"
                style={{ background: `radial-gradient(ellipse at center, ${s.color}18 0%, transparent 70%)` }}
              />
              <div className="text-5xl font-black text-white mb-1 tabular-nums">
                {s.value}<span style={{ color: s.color }}>{s.suffix}</span>
              </div>
              <p className="text-white/60 text-sm font-medium">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-12">
          <p className="text-center text-white/40 text-xs font-bold uppercase tracking-widest mb-6">
            Trusted by educators at
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {orgs.map((o) => (
              <span
                key={o}
                className="bg-white/8 border border-white/12 text-white/70 text-sm font-semibold px-4 py-2 rounded-full"
              >
                {o}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
