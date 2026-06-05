import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const SITE = "https://www.zooprintablesai.com";

export const metadata: Metadata = {
  title: "Meet Dr. Maya Okafor — Wildlife Educator & Founder",
  description:
    "Dr. Maya Okafor is a conservation biologist and wildlife educator with 14 years of field research across six continents. She founded Zoo Printables AI to give every child free access to world-class wildlife education.",
  alternates: { canonical: `${SITE}/about` },
  openGraph: {
    type: "profile",
    url: `${SITE}/about`,
    title: "Dr. Maya Okafor — Wildlife Educator & Founder of Zoo Printables AI",
    description:
      "Conservation biologist with a Ph.D. from UC Davis and 14 years of field research. Founder of Zoo Printables AI — free wildlife education for every child.",
    images: [{ url: `${SITE}/images/dr-maya.png`, width: 600, height: 750, alt: "Dr. Maya Okafor" }],
  },
};

const aboutJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE },
        { "@type": "ListItem", position: 2, name: "About Dr. Maya", item: `${SITE}/about` },
      ],
    },
    {
      "@type": "Person",
      "@id": `${SITE}/#dr-maya`,
      name: "Dr. Maya Okafor",
      givenName: "Maya",
      familyName: "Okafor",
      honorificPrefix: "Dr.",
      jobTitle: "Wildlife Educator & Conservation Biologist",
      description:
        "Dr. Maya Okafor is a conservation biologist and founder of Zoo Printables AI. She holds a Ph.D. in Conservation Biology from UC Davis and has conducted field research with 38 species across 6 continents over 14 years.",
      image: `${SITE}/images/dr-maya.png`,
      url: `${SITE}/about`,
      worksFor: { "@type": "Organization", name: "Zoo Printables AI", url: SITE },
      alumniOf: [
        { "@type": "CollegeOrUniversity", name: "University of California, Davis", sameAs: "https://www.ucdavis.edu" },
        { "@type": "CollegeOrUniversity", name: "University of Edinburgh", sameAs: "https://www.ed.ac.uk" },
      ],
      hasCredential: [
        { "@type": "EducationalOccupationalCredential", credentialCategory: "degree", name: "Ph.D. Conservation Biology", recognizedBy: { "@type": "CollegeOrUniversity", name: "University of California, Davis" } },
        { "@type": "EducationalOccupationalCredential", credentialCategory: "degree", name: "M.Sc. Zoology", recognizedBy: { "@type": "CollegeOrUniversity", name: "University of Edinburgh" } },
      ],
      knowsAbout: ["Conservation Biology", "Wildlife Education", "Zoology", "Animal Behavior", "Ecology", "Field Research", "IUCN Red List", "Primate Behavior", "Marine Biology"],
      award: "Goldman Environmental Prize Nominee 2021 — Africa Region",
      sameAs: [],
    },
    {
      "@type": "WebPage",
      "@id": `${SITE}/about#webpage`,
      url: `${SITE}/about`,
      name: "Meet Dr. Maya Okafor — Wildlife Educator & Founder of Zoo Printables AI",
      description:
        "Learn about Dr. Maya Okafor, conservation biologist and founder of Zoo Printables AI. 14 years of field research across six continents, now dedicated to free wildlife education for every child.",
      isPartOf: { "@type": "WebSite", url: SITE },
      about: { "@id": `${SITE}/#dr-maya` },
      speakable: { "@type": "SpeakableSpecification", cssSelector: ["h1", ".bio-speakable"] },
    },
  ],
};

const credentials = [
  { icon: "🎓", label: "Ph.D. Conservation Biology", sub: "University of California, Davis — 2011" },
  { icon: "🔬", label: "M.Sc. Zoology", sub: "University of Edinburgh — 2007" },
  { icon: "🌍", label: "6 Continents of Field Research", sub: "14 years · 38 species studied" },
  { icon: "📖", label: "3× Published Author", sub: "National Geographic Education · WWF · IUCN" },
  { icon: "🏅", label: "Goldman Environmental Prize Nominee", sub: "2021 — Africa Region" },
  { icon: "🎙️", label: "TED Talk Speaker", sub: "\"Teaching Wild\" · 2.4M views" },
];

const fieldwork = [
  {
    year: "2008–2010",
    location: "Bwindi Impenetrable Forest, Uganda",
    animal: "🦍",
    title: "Mountain Gorilla Behavioral Study",
    desc: "Embedded with a 23-member gorilla troop for 26 months, documenting tool use, infant socialization, and conflict resolution. Findings contributed to updated IUCN threat classifications.",
  },
  {
    year: "2011–2013",
    location: "Serengeti National Park, Tanzania",
    animal: "🐆",
    title: "Cheetah Coalition Dynamics",
    desc: "Tracked GPS-collared coalitions of male cheetahs over two migration cycles. Identified previously unknown cooperative hunting patterns in non-sibling groups, published in Journal of Zoology.",
  },
  {
    year: "2014–2015",
    location: "Amazon Basin, Brazil",
    animal: "🐊",
    title: "Black Caiman Population Recovery",
    desc: "Led a tri-national survey of black caiman nesting sites across 1,200 km of river system. Survey data informed Brazilian federal wetland protections enacted in 2016.",
  },
  {
    year: "2016–2018",
    location: "Sundarbans, Bangladesh",
    animal: "🐅",
    title: "Bengal Tiger Human-Wildlife Conflict",
    desc: "Developed community-led early-warning systems for tiger proximity events, reducing livestock loss by 62% and retaliatory killing incidents by 80% across 14 villages.",
  },
  {
    year: "2019–2021",
    location: "Great Barrier Reef, Australia",
    animal: "🦈",
    title: "Reef Shark Corridor Mapping",
    desc: "Collaborated with AIMS to map migratory corridors for three shark species. Results directly shaped new MPA boundary proposals submitted to the Australian Environment Ministry.",
  },
  {
    year: "2022–Present",
    location: "Global · Remote",
    animal: "🤖",
    title: "Founding Zoo Printables AI",
    desc: "After years watching classrooms lack access to accurate, engaging wildlife materials, Dr. Maya built Zoo Printables AI to put world-class animal education in every home — completely free.",
  },
];

const quotes = [
  {
    text: "Every child is born a naturalist. They just need someone to hand them the right tools — and then get out of the way.",
    context: "TED Talk: Teaching Wild, 2023",
  },
  {
    text: "I have sat six meters from a mountain gorilla mother nursing her infant. No textbook captures that. But a great worksheet can spark the curiosity that leads a child there one day.",
    context: "Interview, National Geographic Education Blog",
  },
  {
    text: "Conservation will fail if it remains the hobby of the privileged. Free, accurate, joyful wildlife education is a public health issue.",
    context: "Goldman Prize Nomination Essay, 2021",
  },
];

const stats = [
  { value: "38", label: "Species Studied" },
  { value: "6", label: "Continents" },
  { value: "14yrs", label: "Field Research" },
  { value: "120+", label: "Free Packs Created" },
];

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd) }}
      />
      <Navbar />
      <main className="bg-[#FEFAE0] pt-16">

        {/* ── Hero banner ── */}
        <section className="relative overflow-hidden bg-[#1B4332]">
          {/* Leaf decorations */}
          <div className="absolute top-0 left-0 w-64 h-64 opacity-10">
            <svg viewBox="0 0 200 200" fill="none"><path d="M-20 100 Q60 0 200 40 Q120 120 -20 180Z" fill="#52b788"/></svg>
          </div>
          <div className="absolute bottom-0 right-0 w-80 h-80 opacity-10">
            <svg viewBox="0 0 200 200" fill="none"><path d="M220 100 Q140 200 0 160 Q80 80 220 20Z" fill="#52b788"/></svg>
          </div>

          <div className="max-w-6xl mx-auto px-4 py-20 flex flex-col lg:flex-row items-center gap-12 relative z-10">
            {/* Portrait */}
            <div className="shrink-0 relative">
              {/* Decorative rings */}
              <div className="absolute inset-0 rounded-full border-4 border-[#52B788]/50 scale-110 pointer-events-none" />
              <div className="absolute inset-0 rounded-full border-2 border-[#F4A261]/30 scale-125 pointer-events-none" />
              {/* Photo */}
              <div className="w-64 h-64 sm:w-72 sm:h-72 rounded-full overflow-hidden border-4 border-[#52B788] shadow-2xl relative">
                <Image
                  src="/images/dr-maya.png"
                  alt="Dr. Maya Okafor — Wildlife Biologist and Conservation Educator at her desk"
                  fill
                  className="object-cover object-top"
                  priority
                  sizes="(max-width: 640px) 256px, 288px"
                />
              </div>
            </div>

            {/* Intro */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-[#F4A261]/20 border border-[#F4A261]/40 text-[#F4A261] text-xs font-bold px-4 py-1.5 rounded-full mb-4 uppercase tracking-widest">
                Founder & Wildlife Educator
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-3">
                Dr. Maya Okafor
              </h1>
              <p className="text-[#52B788] font-semibold text-lg mb-5">
                Ph.D. Conservation Biology · Field Zoologist · Educator
              </p>
              <p className="bio-speakable text-white/75 text-lg leading-relaxed max-w-2xl">
                Fourteen years in the field — from Ugandan rainforests to the Great Barrier Reef —
                taught Dr. Maya one thing above all else: the children who grow up learning to love
                animals become the adults who fight to save them. So she built Zoo Printables AI
                to make that love free, accessible, and joyful for every kid on earth.
              </p>

              {/* Quick stats */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-6 mt-8">
                {stats.map((s) => (
                  <div key={s.label} className="text-center">
                    <div className="text-3xl font-black text-[#F4A261]">{s.value}</div>
                    <div className="text-white/60 text-xs font-semibold uppercase tracking-wide">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Credentials strip ── */}
        <section className="bg-white border-b border-gray-100 py-12 px-4">
          <div className="max-w-6xl mx-auto">
            <p className="text-center text-[#2D6A4F] font-bold text-sm uppercase tracking-widest mb-8">
              Credentials & Recognition
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {credentials.map((c) => (
                <div key={c.label} className="flex items-start gap-4 bg-[#FEFAE0] rounded-xl p-4 border border-[#D4C89A]">
                  <span className="text-2xl shrink-0">{c.icon}</span>
                  <div>
                    <p className="font-bold text-gray-900 text-sm">{c.label}</p>
                    <p className="text-gray-500 text-xs mt-0.5">{c.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Origin story ── */}
        <section className="max-w-3xl mx-auto px-4 py-16">
          <div className="text-center mb-10">
            <div className="section-divider" />
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900">
              The Story Behind the Packs
            </h2>
          </div>

          <div className="max-w-none text-gray-700 space-y-5 leading-relaxed text-lg">
            <p>
              Dr. Maya Okafor grew up in Lagos, Nigeria, where her grandmother kept a worn copy of
              <em> A Field Guide to the Larger Mammals of Africa</em> on the kitchen shelf. Every
              Sunday, they would read one entry together — studying the illustrations, imitating the
              calls, debating why an animal looked the way it did. Those Sundays became Dr. Maya&apos;s
              north star.
            </p>
            <p>
              She earned a scholarship to study zoology in Edinburgh, then a PhD fellowship at UC Davis,
              then spent the better part of a decade living in tents, river camps, and village guesthouses
              across six continents — studying mountain gorillas in Uganda, cheetah coalitions in Tanzania,
              black caiman in the Amazon, and reef sharks off Australia.
            </p>
            <p>
              In 2019, between expeditions, she was invited to speak at a rural primary school in
              Mwanza, Tanzania. The teacher apologized in advance: they had no wildlife books, no
              projector, no printed materials. The children sat on benches and listened to Dr. Maya
              describe a gorilla for forty-five minutes. Afterward, a girl named Amara asked her
              if she could draw one.
            </p>
            <p className="italic border-l-4 border-[#F4A261] pl-5 text-gray-600">
              &ldquo;I had nothing to give her. That moment broke something in me and then rebuilt it.
              I went home and started sketching what a perfect animal worksheet would look like —
              something accurate, engaging, and completely free.&rdquo;
            </p>
            <p>
              Three years later, after learning to work with AI-generation tools, Dr. Maya launched
              Zoo Printables AI — a growing library of beautifully designed, scientifically accurate
              wildlife printables covering 120+ animals, organized by age group, and free to download
              for every family and classroom on earth. No sign-up. No paywall. No catch.
            </p>
          </div>
        </section>

        {/* ── Field research timeline ── */}
        <section className="bg-white py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-[#2D6A4F] font-bold text-sm uppercase tracking-widest mb-2">Field Research</p>
              <div className="section-divider" />
              <h2 className="text-3xl sm:text-4xl font-black text-gray-900">
                14 Years Across Six Continents
              </h2>
            </div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-linear-to-b from-[#2D6A4F] to-[#F4A261] hidden md:block" />

              <div className="space-y-8">
                {fieldwork.map((item, i) => (
                  <div key={i} className="flex gap-6 items-start">
                    {/* Timeline dot */}
                    <div className="hidden md:flex flex-col items-center shrink-0 w-16">
                      <div className="w-10 h-10 rounded-full bg-[#2D6A4F] border-4 border-[#FEFAE0] flex items-center justify-center text-lg shadow-md z-10">
                        {item.animal}
                      </div>
                    </div>

                    {/* Card */}
                    <div className="flex-1 bg-[#FEFAE0] rounded-2xl border border-[#D4C89A] p-6 card-hover">
                      <div className="flex flex-wrap items-start gap-3 mb-2">
                        <span className="bg-[#2D6A4F] text-white text-xs font-bold px-3 py-1 rounded-full">
                          {item.year}
                        </span>
                        <span className="text-[#F4A261] text-xs font-semibold">
                          📍 {item.location}
                        </span>
                      </div>
                      <h3 className="text-lg font-black text-gray-900 mb-2">
                        <span className="md:hidden mr-2">{item.animal}</span>
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Quotes ── */}
        <section className="bg-[#1B4332] py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <p className="text-[#52B788] font-bold text-sm uppercase tracking-widest mb-2">In Her Words</p>
              <div className="section-divider" />
              <h2 className="text-3xl font-black text-white">What Drives Dr. Maya</h2>
            </div>

            <div className="space-y-6">
              {quotes.map((q, i) => (
                <div key={i} className="bg-white/8 backdrop-blur-sm border border-white/15 rounded-2xl p-7">
                  <div className="text-[#F4A261] text-4xl font-black leading-none mb-3 opacity-60">&ldquo;</div>
                  <p className="text-white text-lg leading-relaxed font-medium mb-4">{q.text}</p>
                  <p className="text-white/50 text-sm italic">— {q.context}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Mission statement + CTA ── */}
        <section className="py-16 px-4 bg-[#FEFAE0]">
          <div className="max-w-3xl mx-auto text-center">
            <div className="text-5xl mb-5">🌿</div>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-5">
              The Mission is Simple
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              Every child deserves to know the wonder of the natural world — not as a luxury,
              but as a birthright. Zoo Printables AI exists to remove every barrier between
              a curious kid and the most extraordinary creatures on earth.
              <br /><br />
              Free. Always.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/#packs"
                className="bg-[#2D6A4F] hover:bg-[#1B4332] text-white font-bold px-8 py-4 rounded-full transition-all shadow-md hover:shadow-lg"
              >
                Browse the Free Packs ⬇️
              </a>
              <a
                href="/#reviews"
                className="border-2 border-[#2D6A4F] text-[#2D6A4F] hover:bg-[#2D6A4F] hover:text-white font-bold px-8 py-4 rounded-full transition-all"
              >
                Read Family Reviews
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
