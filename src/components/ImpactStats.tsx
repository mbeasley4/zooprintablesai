"use client";
import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 48200, label: "Packs Downloaded", suffix: "+", color: "#52B788" },
  { value: 3900,  label: "Happy Families",   suffix: "+", color: "#F4A261" },
  { value: 120,   label: "Animals Covered",  suffix: "+", color: "#60A5FA" },
  { value: 4.9,   label: "Average Rating",   suffix: "★", color: "#FBBF24", decimal: true },
];

const orgs = [
  "Home Schools",
  "K–12 Classrooms",
  "Public Libraries",
  "Nature Centers",
  "Parent Groups",
];

function useCountUp(target: number, active: boolean, decimal = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    const steps = 60;
    const inc = target / steps;
    let cur = 0;
    const t = setInterval(() => {
      cur = Math.min(cur + inc, target);
      setCount(decimal ? Math.round(cur * 10) / 10 : Math.floor(cur));
      if (cur >= target) clearInterval(t);
    }, 2000 / steps);
    return () => clearInterval(t);
  }, [active, target, decimal]);
  return count;
}

function StatCard({ value, label, suffix, color, decimal }: typeof stats[0]) {
  const ref = useRef<HTMLDivElement>(null);
  const [vis, setVis] = useState(false);
  const count = useCountUp(value, vis, decimal);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVis(true); },
      { threshold: 0.4 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className="card-hover flex flex-col items-center text-center bg-white/8 border border-white/12 rounded-2xl p-7 relative overflow-hidden group">
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"
        style={{ background: `radial-gradient(ellipse at center, ${color}18 0%, transparent 70%)` }}
      />
      <div className="text-5xl font-black text-white mb-1 tabular-nums">
        {decimal ? count.toFixed(1) : count.toLocaleString("en-US")}
        <span style={{ color }}>{suffix}</span>
      </div>
      <p className="text-white/60 text-sm font-medium">{label}</p>
    </div>
  );
}

export default function ImpactStats() {
  return (
    <section id="impact" className="py-24 px-4 bg-[#1B4332] relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
      <div className="absolute top-0 right-0 w-150 h-150 rounded-full opacity-5 pointer-events-none"
        style={{ background: "radial-gradient(circle, #52B788 0%, transparent 70%)", transform: "translate(30%, -30%)" }} />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Header */}
        <div className="text-center mb-14">
          <p className="section-label justify-center" style={{ color: "#52B788" }}>Our Impact</p>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Growing Minds,{" "}
            <span className="text-[#F4A261]">One Animal at a Time</span>
          </h2>
          <p className="text-white/60 text-lg max-w-xl mx-auto">
            Thousands of families and educators trust Zoo Printables AI every month.
          </p>
        </div>

        {/* Stat grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {stats.map((s) => <StatCard key={s.label} {...s} />)}
        </div>

        {/* Trusted by */}
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
