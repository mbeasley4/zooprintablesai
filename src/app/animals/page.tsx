import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { animals, STATUS_COLOURS } from "@/lib/animalData";

const SITE = "https://www.zooprintablesai.com";

export const metadata: Metadata = {
  title: "Free Animal Printable Packs A–Z — Wildlife Activities for Kids",
  description:
    "Browse 120+ free wildlife printable packs for kids ages 3–12. Every animal includes fact sheets, coloring pages, and activity worksheets — facts verified against IUCN Red List data.",
  alternates: { canonical: `${SITE}/animals` },
  openGraph: {
    url: `${SITE}/animals`,
    title: "Free Animal Printable Packs A–Z | Zoo Printables AI",
    description: "Free wildlife printables for kids — gorilla, cheetah, polar bear, and 120+ more animals.",
    images: [{ url: `${SITE}/og-image.png`, width: 1200, height: 630 }],
  },
};

const sorted = [...animals].sort((a, b) => a.name.localeCompare(b.name));

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home",    item: SITE },
        { "@type": "ListItem", position: 2, name: "Animals", item: `${SITE}/animals` },
      ],
    },
    {
      "@type": "CollectionPage",
      "@id": `${SITE}/animals`,
      name: "Free Animal Printable Packs A–Z",
      description: "Browse all free wildlife printable packs for kids ages 3–12 from Zoo Printables AI.",
      url: `${SITE}/animals`,
      author: { "@id": `${SITE}/#mike-beasley` },
    },
    {
      "@type": "ItemList",
      name: "Free Animal Printable Packs A–Z",
      description: "Complete list of free wildlife printable packs for kids ages 3–12.",
      numberOfItems: sorted.length,
      itemListElement: sorted.map((a, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: `${a.name} Wildlife Printable Pack`,
        url: `${SITE}/animals/${a.slug}`,
      })),
    },
  ],
};

export default function AnimalsIndexPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main>

        {/* Hero */}
        <section
          className="pt-32 pb-20 px-4 text-center relative overflow-hidden"
          style={{ background: "linear-gradient(135deg, #051a0a 0%, #1B4332 55%, #0d2a12 100%)" }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse at 50% 0%, #52B78820 0%, transparent 65%)" }}
          />
          <div className="relative z-10 max-w-3xl mx-auto">
            <p className="text-[#52B788] text-xs font-bold uppercase tracking-widest mb-4">Free Printable Library</p>
            <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">
              Animal Packs A–Z
            </h1>
            <p className="text-white/60 text-lg max-w-xl mx-auto">
              Every pack is free — fact sheets, coloring pages, and activities for kids ages 3–12.
            </p>
          </div>
          <div className="absolute bottom-0 left-0 right-0 translate-y-px">
            <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="block w-full">
              <path d="M0 60L60 50C120 40 240 20 360 15C480 10 600 20 720 30C840 40 960 50 1080 45C1200 40 1320 20 1380 10L1440 0V60H0Z" fill="#FEFAE0" />
            </svg>
          </div>
        </section>

        {/* Grid */}
        <section className="bg-[#FEFAE0] py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {sorted.map((animal) => {
                const s = STATUS_COLOURS[animal.iucnCode];
                return (
                  <a
                    key={animal.slug}
                    href={`/animals/${animal.slug}`}
                    className="group bg-white hover:bg-[#1B4332] border border-gray-100 rounded-2xl p-4 text-center transition-all shadow-sm hover:shadow-lg hover:-translate-y-1"
                  >
                    <div className="text-4xl mb-2">{animal.emoji}</div>
                    <p className="font-bold text-gray-900 group-hover:text-white text-sm leading-tight mb-1 transition-colors">
                      {animal.name}
                    </p>
                    <span className={`inline-block text-[9px] font-bold px-2 py-0.5 rounded-full ${s.bg} ${s.text}`}>
                      {animal.iucnCode}
                    </span>
                    <p className="text-gray-400 group-hover:text-white/50 text-[10px] mt-1.5 transition-colors">
                      {animal.activities} activities
                    </p>
                  </a>
                );
              })}

              {/* Coming soon placeholders */}
              {Array.from({ length: 3 }).map((_, i) => (
                <div
                  key={`soon-${i}`}
                  className="bg-white/50 border border-dashed border-gray-200 rounded-2xl p-4 text-center opacity-50"
                >
                  <div className="text-4xl mb-2">🐾</div>
                  <p className="font-bold text-gray-400 text-sm mb-1">Coming Soon</p>
                  <p className="text-gray-300 text-[10px]">New pack monthly</p>
                </div>
              ))}
            </div>

            <p className="text-center text-gray-400 text-sm mt-10">
              120+ animals in the archive — new pack every month.{" "}
              <a href="/#packs" className="text-[#2D6A4F] font-bold hover:underline">
                Browse the full library
              </a>
            </p>
          </div>
        </section>

        {/* Attribution */}
        <section className="bg-white border-t border-gray-100 py-10 px-4">
          <div className="max-w-3xl mx-auto">
            <p className="text-[#2D6A4F] text-[10px] font-bold uppercase tracking-widest mb-4 text-center">
              Illustration Credits
            </p>
            <p className="text-gray-500 text-sm leading-relaxed mb-3">
              Coloring page illustrations in these packs are sourced from free public resources:
            </p>
            <ul className="space-y-2 text-sm text-gray-500 mb-4">
              <li>
                <span className="font-semibold text-gray-700">African Elephant, Blue Whale, Gorilla</span>
                {" — "}
                <a
                  href="https://pixabay.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#2D6A4F] hover:underline"
                >
                  Pixabay
                </a>
                , free under the{" "}
                <a
                  href="https://pixabay.com/service/license-summary/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#2D6A4F] hover:underline"
                >
                  Pixabay Content License
                </a>
              </li>
              <li>
                <span className="font-semibold text-gray-700">Amur Leopard, Cheetah, Dhole, Fishing Cat</span>
                {" — "}
                <a
                  href="https://www.supercoloring.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#2D6A4F] hover:underline"
                >
                  SuperColoring.com
                </a>
                , free printable coloring pages
              </li>
            </ul>
            <ul className="space-y-2 text-sm text-gray-500 mb-4">
              <li>
                <span className="font-semibold text-gray-700">Site imagery</span>
                {" — enhanced and upscaled using "}
                <a
                  href="https://www.magnific.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#2D6A4F] hover:underline"
                >
                  Magnific AI
                </a>
              </li>
            </ul>
            <p className="text-gray-400 text-sm">
              Educational facts verified using{" "}
              <a
                href="https://kids.nationalgeographic.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#2D6A4F] hover:underline"
              >
                National Geographic Kids
              </a>
              .
            </p>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
