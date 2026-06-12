import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const SITE = "https://www.zooprintablesai.com";

export const metadata: Metadata = {
  title: "Meet Mike Beasley — Founder of Zoo Printables AI",
  description:
    "Mike Beasley is a full-stack web developer from Cincinnati, Ohio, and the founder of Zoo Printables AI — a completely free library of AI-crafted wildlife printables for kids ages 3–12.",
  alternates: { canonical: `${SITE}/about` },
  openGraph: {
    type: "profile",
    url: `${SITE}/about`,
    title: "Mike Beasley — Founder of Zoo Printables AI",
    description:
      "Full-stack web developer who built Zoo Printables AI to put free, high-quality wildlife education in every home and classroom.",
    images: [{ url: `${SITE}/images/mike-profile.png`, width: 600, height: 750, alt: "Mike Beasley" }],
  },
};

const aboutJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE },
        { "@type": "ListItem", position: 2, name: "About Mike", item: `${SITE}/about` },
      ],
    },
    {
      "@type": "Person",
      "@id": `${SITE}/#mike-beasley`,
      name: "Mike Beasley",
      givenName: "Mike",
      familyName: "Beasley",
      jobTitle: "Founder & Full-Stack Web Developer",
      description:
        "Mike Beasley is a full-stack web developer from Cincinnati, Ohio, and the founder of Zoo Printables AI. He builds high-performance web platforms and AI-integrated content systems, and created Zoo Printables AI to provide completely free wildlife education resources for kids.",
      image: `${SITE}/images/mike-profile.png`,
      url: `${SITE}/about`,
      worksFor: { "@id": `${SITE}/#organization` },
      alumniOf: [
        { "@type": "CollegeOrUniversity", name: "Northern Kentucky University", sameAs: "https://www.nku.edu" },
      ],
      knowsAbout: [
        "Full-Stack Web Development",
        "React",
        "Next.js",
        "AI Content Generation",
        "Educational Technology",
        "SEO",
        "AEO",
        "WordPress",
        "Drupal",
        "Shopify",
      ],
      sameAs: ["https://www.linkedin.com/in/michaelkbeasley/"],
    },
    {
      "@type": "WebPage",
      "@id": `${SITE}/about#webpage`,
      url: `${SITE}/about`,
      name: "Meet Mike Beasley — Founder of Zoo Printables AI",
      description:
        "Learn about Mike Beasley, full-stack web developer and founder of Zoo Printables AI — a free library of AI-crafted wildlife printables for kids ages 3–12.",
      isPartOf: { "@id": `${SITE}/#website` },
      about: { "@id": `${SITE}/#mike-beasley` },
      speakable: { "@type": "SpeakableSpecification", cssSelector: ["h1", ".bio-speakable"] },
    },
  ],
};

const credentials = [
  { icon: "💻", label: "Full-Stack Web Developer", sub: "React · Next.js · WordPress · Drupal · Shopify" },
  { icon: "🤖", label: "AI Platform Builder", sub: "AI-integrated content · AEO/SEO optimization" },
  { icon: "🎓", label: "Northern Kentucky University", sub: "Computer Science" },
  { icon: "🌐", label: "10+ Years Building for the Web", sub: "High-performance platforms at scale" },
  { icon: "🔗", label: "LinkedIn", sub: "linkedin.com/in/michaelkbeasley" },
  { icon: "🌿", label: "Founder, Zoo Printables AI", sub: "120+ free packs · 48,000+ downloads · always free" },
];

const process = [
  {
    step: "01",
    emoji: "📚",
    title: "Animal Research",
    desc: "Each animal is researched using the IUCN Red List, National Geographic, Smithsonian databases, and leading zoo resources to gather accurate facts on habitat, diet, behavior, and conservation status.",
  },
  {
    step: "02",
    emoji: "🤖",
    title: "AI Content Generation",
    desc: "AI tools generate age-appropriate fact sheets, coloring page descriptions, and activity worksheets — scaffolded across three age tiers (ages 3–5, 6–9, 10–12) for every animal.",
  },
  {
    step: "03",
    emoji: "✅",
    title: "Fact Verification",
    desc: "Every fact is cross-referenced against the IUCN Red List and published wildlife databases. Conservation status classifications are reviewed at each pack release to stay current.",
  },
  {
    step: "04",
    emoji: "📄",
    title: "Design & Publish Free",
    desc: "Packs are formatted as print-ready PDFs — optimized for standard home and classroom printers in both color and black-and-white — and published to the free archive, no paywall.",
  },
];

const stats = [
  { value: "120+", label: "Free Packs" },
  { value: "48K+", label: "Downloads" },
  { value: "$0", label: "Cost to Families" },
  { value: "10+", label: "Years Building" },
];

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd) }}
      />
      <Navbar />
      <main className="bg-[#FEFAE0] pt-24">

        {/* ── Hero banner ── */}
        <section className="relative overflow-hidden bg-[#1B4332]">
          <div className="absolute top-0 left-0 w-64 h-64 opacity-10">
            <svg viewBox="0 0 200 200" fill="none"><path d="M-20 100 Q60 0 200 40 Q120 120 -20 180Z" fill="#52b788"/></svg>
          </div>
          <div className="absolute bottom-0 right-0 w-80 h-80 opacity-10">
            <svg viewBox="0 0 200 200" fill="none"><path d="M220 100 Q140 200 0 160 Q80 80 220 20Z" fill="#52b788"/></svg>
          </div>

          <div className="max-w-6xl mx-auto px-4 py-20 flex flex-col lg:flex-row items-center gap-12 relative z-10">
            {/* Portrait */}
            <div className="shrink-0 relative">
              <div className="absolute inset-0 rounded-full border-4 border-[#52B788]/50 scale-110 pointer-events-none" />
              <div className="absolute inset-0 rounded-full border-2 border-[#F4A261]/30 scale-125 pointer-events-none" />
              <div className="w-64 h-64 sm:w-72 sm:h-72 rounded-full overflow-hidden border-4 border-[#52B788] shadow-2xl relative">
                <Image
                  src="/images/mike-profile.png"
                  alt="Mike Beasley — Founder of Zoo Printables AI"
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
                Founder &amp; Full-Stack Developer
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-3">
                Mike Beasley
              </h1>
              <p className="text-[#52B788] font-semibold text-lg mb-5">
                Full-Stack Developer · AI Platform Builder · Cincinnati, OH
              </p>
              <p className="bio-speakable text-white/75 text-lg leading-relaxed max-w-2xl">
                Mike is a full-stack web developer with over a decade of experience building
                high-performance web platforms. When he couldn&apos;t find quality free wildlife
                printable resources for kids, he built Zoo Printables AI — combining AI content
                generation with modern web development to create a completely free library of
                animal education for every family and classroom on earth.
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
              Background &amp; Skills
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
              Why He Built It
            </h2>
          </div>

          <div className="max-w-none text-gray-700 space-y-5 leading-relaxed text-lg">
            <p>
              Mike Beasley has spent over a decade building websites and web applications —
              everything from e-commerce stores to AI-integrated content platforms. In 2024,
              searching for wildlife printable packs to print for kids, he ran into the same
              wall every parent and teacher does: the good ones cost money, and the free ones
              are mediocre at best.
            </p>
            <p>
              The gap was obvious. Kids&apos; interest in animals is practically universal — but
              access to genuinely good, free, printable wildlife education resources was not.
              Subscription services charged monthly fees. TPT listings charged per pack.
              Free alternatives were clipart-level quality with no real educational content.
            </p>
            <p className="italic border-l-4 border-[#F4A261] pl-5 text-gray-600">
              &ldquo;I build web platforms for a living. I work with AI content tools every day.
              Making this free wasn&apos;t the hard part — it was the obvious thing to do.&rdquo;
            </p>
            <p>
              So he built Zoo Printables AI from the ground up: an AI-powered pipeline that
              researches each animal from authoritative sources, generates age-differentiated
              educational content, and publishes it as a free, print-ready PDF. No paywall.
              No sign-up. No catch. 120+ animals and counting.
            </p>
          </div>
        </section>

        {/* ── How the packs are made ── */}
        <section className="bg-white py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-[#2D6A4F] font-bold text-sm uppercase tracking-widest mb-2">Process</p>
              <div className="section-divider" />
              <h2 className="text-3xl sm:text-4xl font-black text-gray-900">
                How Every Pack Is Made
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {process.map((item) => (
                <div key={item.step} className="flex gap-5 items-start bg-[#FEFAE0] rounded-2xl border border-[#D4C89A] p-6 card-hover">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-[#2D6A4F] flex items-center justify-center text-white font-black text-sm">
                    {item.step}
                  </div>
                  <div>
                    <div className="text-2xl mb-1">{item.emoji}</div>
                    <h3 className="text-lg font-black text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
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
              Every child deserves access to high-quality wildlife education — not as a premium
              product, but as a free resource. Zoo Printables AI exists to remove every barrier
              between a curious kid and the most extraordinary creatures on earth.
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
                href="https://www.linkedin.com/in/michaelkbeasley/"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-[#2D6A4F] text-[#2D6A4F] hover:bg-[#2D6A4F] hover:text-white font-bold px-8 py-4 rounded-full transition-all"
              >
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
