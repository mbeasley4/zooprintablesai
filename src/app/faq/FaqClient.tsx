"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { faqCategories } from "@/lib/faqData";

function AccordionItem({ q, a, defaultOpen = false }: { q: string; a: string; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className={`border rounded-xl overflow-hidden transition-all ${open ? "border-[#2D6A4F] bg-white shadow-sm" : "border-gray-200 bg-white"}`}>
      <button
        className="w-full flex items-start justify-between gap-4 px-6 py-5 text-left"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className={`font-bold text-base leading-snug transition-colors ${open ? "text-[#2D6A4F]" : "text-gray-900"}`}>
          {q}
        </span>
        <span className={`text-xl shrink-0 mt-0.5 transition-transform duration-200 ${open ? "rotate-45 text-[#2D6A4F]" : "text-gray-400"}`}>
          +
        </span>
      </button>
      {open && (
        <div className="px-6 pb-6">
          <div className="w-12 h-0.5 bg-[#F4A261] rounded mb-4" />
          <p className="text-gray-600 leading-relaxed text-sm">{a}</p>
        </div>
      )}
    </div>
  );
}

export default function FaqClient() {
  const [search, setSearch] = useState("");

  const filtered = search.trim().length > 1
    ? faqCategories.map((cat) => ({
        ...cat,
        items: cat.items.filter(
          (item) =>
            item.q.toLowerCase().includes(search.toLowerCase()) ||
            item.a.toLowerCase().includes(search.toLowerCase())
        ),
      })).filter((cat) => cat.items.length > 0)
    : faqCategories;

  return (
    <main className="bg-[#FEFAE0] pt-24">

      {/* ── Hero ── */}
      <section className="bg-[#1B4332] py-16 px-4 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-56 h-56 opacity-10">
          <svg viewBox="0 0 200 200" fill="none"><path d="M-20 100 Q60 0 200 40 Q120 120-20 180Z" fill="#52b788"/></svg>
        </div>
        <div className="absolute bottom-0 right-0 w-72 h-72 opacity-10">
          <svg viewBox="0 0 200 200" fill="none"><path d="M220 100 Q140 200 0 160 Q80 80 220 20Z" fill="#52b788"/></svg>
        </div>
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <div className="text-4xl mb-4">🦁</div>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-white/70 text-lg mb-8 max-w-xl mx-auto">
            Everything families, teachers, and curious minds want to know about
            Zoo Printables AI — free wildlife education for every kid.
          </p>
          <div className="relative max-w-lg mx-auto">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg">🔍</span>
            <input
              type="search"
              placeholder="Search questions… e.g. &quot;free&quot;, &quot;preschool&quot;, &quot;print&quot;"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-11 pr-5 py-4 rounded-full bg-white text-gray-900 text-sm font-medium shadow-lg outline-none focus:ring-2 focus:ring-[#F4A261]"
              aria-label="Search FAQ"
            />
            {search && (
              <button
                onClick={() => setSearch("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 font-bold"
                aria-label="Clear search"
              >
                ✕
              </button>
            )}
          </div>
        </div>
      </section>

      {/* ── Quick answer cards ── */}
      {!search && (
        <section className="bg-white border-b border-gray-100 py-10 px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-center text-[#2D6A4F] font-bold text-sm uppercase tracking-widest mb-6">
              Quick Answers
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { emoji: "💸", q: "Is it free?", a: "Yes — 100% free, forever. No sign-up, no credit card, no catch." },
                { emoji: "⬇️", q: "How do I get packs?", a: "Click any pack, download the PDF instantly, and print at home or school." },
                { emoji: "📚", q: "What's included?", a: "Fact sheets, coloring pages, worksheets, habitat maps, STEM projects & writing prompts." },
              ].map((card) => (
                <div key={card.q} className="bg-[#FEFAE0] border border-[#D4C89A] rounded-2xl p-5 text-center">
                  <div className="text-3xl mb-2">{card.emoji}</div>
                  <p className="font-black text-gray-900 text-sm mb-2">{card.q}</p>
                  <p className="text-gray-600 text-xs leading-relaxed">{card.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── FAQ accordion by category ── */}
      <section className="max-w-3xl mx-auto px-4 py-14">
        {filtered.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-5xl mb-4">🔭</div>
            <p className="text-gray-500 text-lg">No questions match <strong>&ldquo;{search}&rdquo;</strong>.</p>
            <button onClick={() => setSearch("")} className="mt-4 text-[#2D6A4F] font-bold underline text-sm">
              Clear search
            </button>
          </div>
        ) : (
          filtered.map((cat) => (
            <div key={cat.category} className="mb-12">
              <div className="flex items-center gap-3 mb-5">
                <span className="text-2xl">{cat.icon}</span>
                <h2 className="text-xl font-black text-gray-900">{cat.category}</h2>
                <div className="flex-1 h-px bg-gray-200" />
              </div>
              <div className="space-y-3">
                {cat.items.map((item, i) => (
                  <AccordionItem key={item.q} q={item.q} a={item.a} defaultOpen={i === 0 && cat === filtered[0]} />
                ))}
              </div>
            </div>
          ))
        )}
      </section>

      {/* ── Still have questions ── */}
      <section className="bg-[#2D6A4F] py-14 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="text-4xl mb-4">🐾</div>
          <h2 className="text-3xl font-black text-white mb-4">
            Still Have a Question?
          </h2>
          <p className="text-white/70 mb-7 leading-relaxed">
            Can&apos;t find what you&apos;re looking for? Reach out — Mike and the team
            read every message and usually reply within one business day.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/#archive"
              className="bg-[#F4A261] hover:bg-[#E76F51] text-white font-bold px-7 py-3 rounded-full transition-all shadow-md"
            >
              Browse Free Packs ⬇️
            </a>
            <a
              href="/about"
              className="bg-white/15 hover:bg-white/25 border border-white/30 text-white font-bold px-7 py-3 rounded-full transition-all"
            >
              Meet the Founder
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
