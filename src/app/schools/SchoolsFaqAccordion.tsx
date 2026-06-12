"use client";
import { useState } from "react";

export type SchoolFaq = { q: string; a: string };

function AccordionItem({ q, a, defaultOpen = false }: SchoolFaq & { defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div
      className={`border rounded-xl overflow-hidden transition-all ${
        open ? "border-[#2D6A4F] bg-white shadow-sm" : "border-gray-200 bg-white"
      }`}
    >
      <button
        type="button"
        className="w-full flex items-start justify-between gap-4 px-6 py-5 text-left"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span
          className={`font-bold text-base leading-snug transition-colors ${
            open ? "text-[#2D6A4F]" : "text-gray-900"
          }`}
        >
          {q}
        </span>
        <span
          className={`text-xl shrink-0 mt-0.5 transition-transform duration-200 ${
            open ? "rotate-45 text-[#2D6A4F]" : "text-gray-400"
          }`}
          aria-hidden="true"
        >
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

export default function SchoolsFaqAccordion({ faqs }: { faqs: SchoolFaq[] }) {
  return (
    <div className="space-y-3">
      {faqs.map((faq, index) => (
        <AccordionItem key={faq.q} q={faq.q} a={faq.a} defaultOpen={index === 0} />
      ))}
    </div>
  );
}
