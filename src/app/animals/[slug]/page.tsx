import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { animals, getAnimal, STATUS_COLOURS } from "@/lib/animalData";
import { notFound } from "next/navigation";

export const dynamicParams = false;

const SITE = "https://www.zooprintablesai.com";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return animals.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const animal = getAnimal(slug);
  if (!animal) return {};
  return {
    title: `${animal.name} Facts for Kids — Free Printable Pack`,
    description: `Download a free ${animal.name.toLowerCase()} printable pack for kids ages 3–12. Includes ${animal.name.toLowerCase()} fact sheets, coloring pages, and ${animal.activities} activities — facts verified against IUCN Red List data.`,
    alternates: { canonical: `${SITE}/animals/${animal.slug}` },
    openGraph: {
      url: `${SITE}/animals/${animal.slug}`,
      title: `${animal.name} Facts for Kids — Free Printable Pack | Zoo Printables AI`,
      description: `${animal.description.split(".")[0]}. Download the free ${animal.name.toLowerCase()} activity pack for kids.`,
      images: [{ url: `${SITE}/og-image.png`, width: 1200, height: 630 }],
    },
  };
}

export default async function AnimalPage({ params }: Props) {
  const { slug } = await params;
  const animal = getAnimal(slug);
  if (!animal) notFound();

  const status = STATUS_COLOURS[animal.iucnCode];
  const related = animals.filter((a) => animal.relatedSlugs.includes(a.slug));

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home",    item: SITE },
          { "@type": "ListItem", position: 2, name: "Animals", item: `${SITE}/animals` },
          { "@type": "ListItem", position: 3, name: animal.name, item: `${SITE}/animals/${animal.slug}` },
        ],
      },
      {
        "@type": "LearningResource",
        "@id": `${SITE}/animals/${animal.slug}#learning-resource`,
        name: `${animal.name} Wildlife Printable Pack`,
        description: `Free downloadable ${animal.name.toLowerCase()} educational pack for children ages 3–12. Includes animal fact sheets, coloring pages, and ${animal.activities} activities. Facts verified against IUCN Red List data.`,
        url: `${SITE}/animals/${animal.slug}`,
        publisher: { "@id": `${SITE}/#organization` },
        author: { "@id": `${SITE}/#mike-beasley` },
        educationalLevel: ["Preschool", "Elementary School", "Middle School"],
        learningResourceType: ["Activity", "Worksheet", "Coloring Page", "Fact Sheet"],
        teaches: `${animal.name} biology, conservation status, habitat, diet, and wildlife ecology`,
        audience: { "@type": "EducationalAudience", educationalRole: "student", audienceType: "Children ages 3–12" },
        about: { "@type": "Thing", name: animal.name, description: animal.description },
        inLanguage: "en-US",
        isAccessibleForFree: true,
        license: "https://creativecommons.org/licenses/by-nc/4.0/",
      },
      {
        "@type": "Product",
        name: `${animal.name} Wildlife Printable Pack — Free for Kids`,
        description: `Free downloadable ${animal.name.toLowerCase()} printable pack for children ages 3–12. Includes fact sheets, coloring pages, and ${animal.activities} activity worksheets. Facts verified against IUCN Red List data.`,
        brand:    { "@type": "Brand", name: "Zoo Printables AI" },
        author:   { "@id": `${SITE}/#mike-beasley` },
        audience: { "@type": "EducationalAudience", educationalRole: "student", audienceType: "Children ages 3–12" },
        educationalLevel: ["Preschool", "Elementary School", "Middle School"],
        learningResourceType: "Worksheet",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
          url: `${SITE}/animals/${animal.slug}`,
          priceValidUntil: "2099-12-31",
        },
      },
      {
        "@type": "DigitalDocument",
        name: `${animal.name} Printable Pack PDF`,
        description: `Print-ready PDF: ${animal.name.toLowerCase()} fact sheets, coloring pages, and activity worksheets for kids.`,
        fileFormat: "application/pdf",
        url: `${SITE}/animals/${animal.slug}`,
        author: { "@id": `${SITE}/#mike-beasley` },
        inLanguage: "en-US",
        license: "https://creativecommons.org/licenses/by-nc/4.0/",
        educationalLevel: ["Preschool", "Elementary School", "Middle School"],
      },
      {
        "@type": "FAQPage",
        mainEntity: animal.faqs.map(({ q, a }) => ({
          "@type": "Question",
          name: q,
          acceptedAnswer: { "@type": "Answer", text: a },
        })),
      },
      {
        "@type": "WebPage",
        "@id": `${SITE}/animals/${animal.slug}#webpage`,
        url: `${SITE}/animals/${animal.slug}`,
        name: `${animal.name} Facts for Kids — Free Printable Pack`,
        description: `${animal.description}`,
        author: { "@id": `${SITE}/#mike-beasley` },
        isPartOf: { "@id": `${SITE}/#website` },
        speakable: {
          "@type": "SpeakableSpecification",
          cssSelector: ["h1", ".speakable-description"],
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <Navbar />
      <main>

        {/* ── Hero ─────────────────────────────────────────── */}
        <section
          className="relative pt-32 pb-20 px-4 overflow-hidden"
          style={{ background: "linear-gradient(135deg, #051a0a 0%, #1B4332 55%, #0d2a12 100%)" }}
        >
          {/* Subtle radial glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse at 50% 0%, #52B78820 0%, transparent 65%)" }}
          />
          <div className="max-w-4xl mx-auto relative z-10 text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/70 text-xs font-semibold px-4 py-1.5 rounded-full mb-6 uppercase tracking-widest">
              Free Printable Pack
            </div>
            <div className="text-8xl mb-4" role="img" aria-label={animal.name}>{animal.emoji}</div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-4 leading-tight">
              {animal.name} Facts<br />
              <span className="text-[#F4A261]">for Kids</span>
            </h1>
            <p className="text-white/60 text-sm font-mono mb-6 italic">{animal.scientificName}</p>

            <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
              <span className={`inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full ${status.bg} ${status.text}`}>
                <span className="w-1.5 h-1.5 rounded-full bg-current" />
                IUCN: {animal.conservationStatus}
              </span>
              <span className="bg-white/10 text-white/70 text-xs font-semibold px-3 py-1.5 rounded-full">
                {animal.category}
              </span>
              <span className="bg-white/10 text-white/70 text-xs font-semibold px-3 py-1.5 rounded-full">
                {animal.continent}
              </span>
            </div>

            <a
              href={animal.pdfFile ?? "/#packs"}
              {...(animal.pdfFile ? { download: true } : {})}
              className="inline-flex items-center gap-2 bg-[#F4A261] hover:bg-[#E76F51] text-white font-bold text-base px-8 py-4 rounded-full transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1"
            >
              Download Free Pack — {animal.activities} Activities
            </a>
          </div>

          {/* Wave into next section */}
          <div className="absolute bottom-0 left-0 right-0 translate-y-px">
            <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="block w-full">
              <path d="M0 60L60 50C120 40 240 20 360 15C480 10 600 20 720 30C840 40 960 50 1080 45C1200 40 1320 20 1380 10L1440 0V60H0Z" fill="#FEFAE0" />
            </svg>
          </div>
        </section>

        {/* ── Quick stats ──────────────────────────────────── */}
        <section className="bg-[#FEFAE0] pt-16 pb-12 px-4">
          <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { label: "Lifespan",  value: animal.lifespan,  icon: "⏳" },
              { label: "Weight",    value: animal.weight,    icon: "⚖️" },
              { label: "Diet",      value: animal.dietType,  icon: "🌿" },
              { label: "Habitat",   value: animal.habitat,   icon: "🌍" },
            ].map(({ label, value, icon }) => (
              <div key={label} className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 text-center">
                <div className="text-2xl mb-2">{icon}</div>
                <p className="text-[#2D6A4F] text-[10px] font-bold uppercase tracking-widest mb-1">{label}</p>
                <p className="text-gray-800 font-bold text-sm leading-snug">{value}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── About ────────────────────────────────────────── */}
        <section className="bg-[#FEFAE0] pb-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-10">

              {/* Main content */}
              <div className="lg:col-span-2">
                <h2 className="text-3xl font-black text-gray-900 mb-4">
                  About the {animal.name}
                </h2>
                <p className="speakable-description text-gray-600 text-lg leading-relaxed mb-8">
                  {animal.description}
                </p>

                <h3 className="text-xl font-black text-gray-900 mb-4">
                  {animal.name} Fun Facts for Kids
                </h3>
                <ul className="space-y-3 mb-10">
                  {animal.funFacts.map((fact, i) => (
                    <li key={i} className="flex items-start gap-3 bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                      <span className="text-[#F4A261] font-black text-lg shrink-0 leading-none mt-0.5">{i + 1}</span>
                      <span className="text-gray-700 text-sm leading-relaxed">{fact}</span>
                    </li>
                  ))}
                </ul>

                {/* Founder's Note */}
                {animal.drMayaNote && (
                  <div className="bg-[#1B4332] rounded-2xl p-6 text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 opacity-5 pointer-events-none">
                      <svg viewBox="0 0 200 200" fill="none"><path d="M220 100 Q140 200 0 160 Q80 80 220 20Z" fill="white"/></svg>
                    </div>
                    <p className="text-[#52B788] text-xs font-bold uppercase tracking-widest mb-3">
                      Founder&apos;s Note — Mike Beasley
                    </p>
                    <p className="text-white/85 text-sm leading-relaxed italic">
                      &ldquo;{animal.drMayaNote}&rdquo;
                    </p>
                    <p className="text-white/40 text-xs mt-3">
                      Founder, Zoo Printables AI · Full-Stack Developer & AI Platform Builder
                    </p>
                  </div>
                )}
              </div>

              {/* Sidebar */}
              <div className="space-y-5">
                {/* Download CTA */}
                <div className="bg-[#1B4332] rounded-2xl p-6 text-center sticky top-24">
                  <div className="text-5xl mb-3">{animal.emoji}</div>
                  <p className="text-[#52B788] text-xs font-bold uppercase tracking-widest mb-2">Free Download</p>
                  <h3 className="text-white font-black text-lg mb-1">{animal.name} Pack</h3>
                  <p className="text-white/50 text-xs mb-4">{animal.activities} activities · Fact sheets · Coloring pages</p>
                  <a
                    href={animal.pdfFile ?? "/#packs"}
                    {...(animal.pdfFile ? { download: true } : {})}
                    className="block w-full bg-[#F4A261] hover:bg-[#E76F51] text-white font-bold text-sm py-3 rounded-full transition-all shadow-lg hover:-translate-y-0.5"
                  >
                    Download Free
                  </a>
                  <p className="text-white/30 text-xs mt-3">No sign-up · No credit card</p>
                </div>

                {/* Classification */}
                <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                  <p className="text-[#2D6A4F] text-[10px] font-bold uppercase tracking-widest mb-3">Classification</p>
                  <dl className="space-y-2 text-sm">
                    {[
                      ["Scientific name", animal.scientificName],
                      ["Class",           animal.category],
                      ["Diet",            animal.dietType],
                      ["Continent",       animal.continent],
                      ["Status",          animal.conservationStatus],
                    ].map(([k, v]) => (
                      <div key={k} className="flex justify-between gap-2">
                        <dt className="text-gray-400 shrink-0">{k}</dt>
                        <dd className="text-gray-800 font-semibold text-right">{v}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ ──────────────────────────────────────────── */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-[#2D6A4F] text-xs font-bold uppercase tracking-widest mb-3">Common Questions</p>
              <h2 className="text-3xl sm:text-4xl font-black text-gray-900">
                {animal.name} Questions & Answers
              </h2>
            </div>
            <div className="space-y-3">
              {animal.faqs.map(({ q, a }, i) => (
                <details
                  key={i}
                  className="group border border-gray-200 rounded-xl overflow-hidden bg-white"
                  {...(i === 0 ? { open: true } : {})}
                >
                  <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none select-none hover:bg-gray-50 transition-colors">
                    <span className="font-bold text-gray-900 text-base leading-snug">{q}</span>
                    <span className="text-gray-400 text-xl shrink-0 transition-transform duration-200 group-open:rotate-45">+</span>
                  </summary>
                  <div className="px-6 pb-6 pt-0">
                    <div className="w-10 h-0.5 bg-[#F4A261] rounded mb-3" />
                    <p className="text-gray-600 leading-relaxed text-sm">{a}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ── What's in the pack ───────────────────────────── */}
        <section className="py-16 px-4 bg-[#FEFAE0]">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-[#2D6A4F] text-xs font-bold uppercase tracking-widest mb-3">What You Get</p>
            <h2 className="text-3xl font-black text-gray-900 mb-10">
              Inside the {animal.name} Pack
            </h2>
            <div className="grid sm:grid-cols-3 gap-5 mb-10">
              {[
                { emoji: "📚", title: "Fact Sheet", desc: `Scientifically accurate ${animal.name.toLowerCase()} facts covering habitat, diet, behaviour, and conservation status.` },
                { emoji: "🎨", title: "Coloring Pages", desc: `Detailed ${animal.name.toLowerCase()} line art scaled for ages 3–12 — simple shapes for young kids, detailed scenes for older ones.` },
                { emoji: "✏️", title: "Activity Pages", desc: `${animal.name} word search, crossword, matching games, and fill-in-the-blank — ${animal.activities} activities total.` },
              ].map(({ emoji, title, desc }) => (
                <div key={title} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-left">
                  <div className="text-3xl mb-3">{emoji}</div>
                  <h3 className="font-black text-gray-900 text-base mb-2">{title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
            <a
              href={animal.pdfFile ?? "/#packs"}
              {...(animal.pdfFile ? { download: true } : {})}
              className="inline-flex items-center gap-2 bg-[#2D6A4F] hover:bg-[#1B4332] text-white font-bold px-8 py-4 rounded-full transition-all shadow-md hover:shadow-lg"
            >
              Download the {animal.name} Pack Free
            </a>
            <p className="text-gray-400 text-xs mt-3">No sign-up · No credit card · Print at home</p>
          </div>
        </section>

        {/* ── Related animals ──────────────────────────────── */}
        {related.length > 0 && (
          <section className="py-16 px-4 bg-white">
            <div className="max-w-4xl mx-auto">
              <p className="text-[#2D6A4F] text-xs font-bold uppercase tracking-widest mb-3 text-center">Explore More</p>
              <h2 className="text-2xl font-black text-gray-900 mb-8 text-center">More Free Animal Packs</h2>
              <div className="grid grid-cols-3 gap-4">
                {related.map((r) => {
                  const s = STATUS_COLOURS[r.iucnCode];
                  return (
                    <a
                      key={r.slug}
                      href={`/animals/${r.slug}`}
                      className="group bg-[#FEFAE0] hover:bg-white border border-gray-100 hover:border-[#52B788] rounded-2xl p-5 text-center transition-all shadow-sm hover:shadow-md"
                    >
                      <div className="text-4xl mb-2">{r.emoji}</div>
                      <p className="font-bold text-gray-900 text-sm group-hover:text-[#2D6A4F] transition-colors">{r.name}</p>
                      <span className={`inline-block mt-2 text-[10px] font-bold px-2 py-0.5 rounded-full ${s.bg} ${s.text}`}>
                        {r.conservationStatus}
                      </span>
                    </a>
                  );
                })}
              </div>
              <p className="text-center mt-8">
                <a href="/animals" className="text-[#2D6A4F] font-bold text-sm hover:underline">
                  View all animal packs →
                </a>
              </p>
            </div>
          </section>
        )}

      </main>
      <Footer />
    </>
  );
}
