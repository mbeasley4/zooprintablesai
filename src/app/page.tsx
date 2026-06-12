import Image from "next/image";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhatIsIncluded from "@/components/WhatIsIncluded";
import ImpactStats from "@/components/ImpactStats";
import Testimonials from "@/components/Testimonials";
import PastPrintables from "@/components/PastPrintables";
import Footer from "@/components/Footer";
import { allFaqs } from "@/lib/faqData";
import { animals } from "@/lib/animalData";

const SITE = "https://www.zooprintablesai.com";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    /* ── Organization ── */
    {
      "@type": "Organization",
      "@id": `${SITE}/#organization`,
      name: "Zoo Printables AI",
      url: SITE,
      logo: { "@type": "ImageObject", url: `${SITE}/images/logo.png`, width: 280, height: 40 },
      description:
        "Free AI-powered zoo and wildlife printables for kids ages 3–12. Educational worksheets, coloring pages, activity packs, and animal fact sheets — new animal every month.",
      foundingDate: "2025",
      founder: { "@id": `${SITE}/#mike-beasley` },
      sameAs: [
        "https://www.instagram.com/zooprintablesai",
        "https://www.pinterest.com/zooprintablesai",
        "https://www.facebook.com/zooprintablesai",
        "https://www.tiktok.com/@zooprintablesai",
        "https://www.youtube.com/@zooprintablesai",
      ],
    },

    /* ── Person: Mike Beasley ── */
    {
      "@type": "Person",
      "@id": `${SITE}/#mike-beasley`,
      name: "Mike Beasley",
      jobTitle: "Founder & Full-Stack Web Developer",
      description:
        "Mike Beasley is a full-stack web developer from Cincinnati, Ohio. He built Zoo Printables AI to fill a gap in free, high-quality wildlife educational resources for kids — combining AI content generation with modern web development to make it completely free.",
      image: `${SITE}/images/mike-profile.png`,
      url: `${SITE}/about`,
      sameAs: ["https://www.linkedin.com/in/michaelkbeasley/"],
      alumniOf: [
        { "@type": "CollegeOrUniversity", name: "Northern Kentucky University" },
      ],
      knowsAbout: ["Full-Stack Web Development", "React", "Next.js", "AI Content Generation", "Educational Technology", "SEO", "AEO"],
      affiliation: { "@id": `${SITE}/#organization` },
    },

    /* ── WebSite with SearchAction ── */
    {
      "@type": "WebSite",
      "@id": `${SITE}/#website`,
      url: SITE,
      name: "Zoo Printables AI",
      description: "Free wildlife printables for kids ages 3–12 — powered by AI, built by full-stack developer Mike Beasley.",
      publisher: { "@id": `${SITE}/#organization` },
      inLanguage: "en-US",
      potentialAction: {
        "@type": "SearchAction",
        target: { "@type": "EntryPoint", urlTemplate: `${SITE}/search?q={search_term_string}` },
        "query-input": "required name=search_term_string",
      },
    },

    /* ── WebPage (homepage) with Speakable ── */
    {
      "@type": "WebPage",
      "@id": `${SITE}/#webpage`,
      url: SITE,
      name: "Zoo Printables AI — Free Wildlife Printables for Kids",
      description:
        "Download free AI-crafted zoo and wildlife printables for children ages 3–12. Includes animal fact sheets, coloring pages, and activity packs for 120+ animals.",
      isPartOf: { "@id": `${SITE}/#website` },
      about: { "@id": `${SITE}/#organization` },
      speakable: {
        "@type": "SpeakableSpecification",
        cssSelector: ["h1", ".speakable-summary"],
      },
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE },
        ],
      },
    },

    /* ── Free Product (Animal Pack Library) ── */
    {
      "@type": "Product",
      "@id": `${SITE}/#animal-pack-library`,
      name: "Zoo Printables AI — Free Wildlife Printable Packs A–Z",
      description:
        "Free downloadable wildlife printable packs for kids, organized alphabetically. Browse 50+ animals including Gorilla, Cheetah, Polar Bear, and more. Each pack includes animal fact sheets, coloring pages, and activity packs.",
      brand: { "@id": `${SITE}/#organization` },
      audience: { "@type": "EducationalAudience", educationalRole: "student", audienceType: "Children ages 3–12" },
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
        url: `${SITE}/#packs`,
        priceValidUntil: "2099-12-31",
      },
      aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", bestRating: "5", reviewCount: "2562" },
      dateModified: "2026-06-11",
    },

    /* ── HowTo: How to download a free printable pack ── */
    {
      "@type": "HowTo",
      name: "How to Download a Free Zoo Printables AI Pack",
      description: "Download and print a free wildlife activity pack for your child in three simple steps.",
      totalTime: "PT2M",
      estimatedCost: { "@type": "MonetaryAmount", currency: "USD", value: "0" },
      step: [
        {
          "@type": "HowToStep",
          position: 1,
          name: "Choose your pack",
          text: "Visit zooprintablesai.com and browse animals A–Z. Pick any animal from the free library.",
          url: `${SITE}/#packs`,
        },
        {
          "@type": "HowToStep",
          position: 2,
          name: "Download the PDF instantly",
          text: "Click the download button. Your print-ready PDF will download immediately — no account creation or payment required.",
          url: `${SITE}/#packs`,
        },
        {
          "@type": "HowToStep",
          position: 3,
          name: "Print and learn",
          text: "Open the PDF and print on standard 8.5×11 or A4 paper. Works in color or black-and-white on any home or school printer.",
          url: `${SITE}/#packs`,
        },
      ],
    },

    /* ── FAQPage (all questions from shared data) ── */
    {
      "@type": "FAQPage",
      mainEntity: allFaqs.map(({ q, a }) => ({
        "@type": "Question",
        name: q,
        acceptedAnswer: { "@type": "Answer", text: a },
      })),
    },

    /* ── LearningResource: the free printable library ── */
    {
      "@type": "LearningResource",
      "@id": `${SITE}/#learning-resource`,
      name: "Zoo Printables AI — Free Wildlife Printable Library",
      description:
        "A free library of 120+ wildlife printable packs for children ages 3–12. Each pack includes an animal fact sheet, coloring pages, and age-differentiated activity worksheets covering real conservation science.",
      url: SITE,
      author: { "@id": `${SITE}/#mike-beasley` },
      publisher: { "@id": `${SITE}/#organization` },
      educationalLevel: ["Preschool", "Elementary School"],
      learningResourceType: ["Activity", "Worksheet", "Coloring Page", "Fact Sheet"],
      audience: { "@type": "EducationalAudience", educationalRole: "student", audienceType: "Children ages 3–12" },
      teaches: ["Animal Biology", "Conservation", "Ecology", "Wildlife Science"],
      inLanguage: "en-US",
      isAccessibleForFree: true,
      license: "https://creativecommons.org/licenses/by-nc/4.0/",
    },

    /* ── ItemList: animal archive ── */
    {
      "@type": "ItemList",
      name: "Zoo Printables AI Animal Pack Archive",
      description: "Free downloadable wildlife printable packs for kids.",
      numberOfItems: animals.length,
      itemListElement: animals.map((a, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: `${a.name} Wildlife Printable Pack`,
        url: `${SITE}/animals/${a.slug}`,
      })),
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main>
        <Hero />
        {/* speakable-summary is targeted by the Speakable schema cssSelector */}
        <p className="speakable-summary sr-only">
          Zoo Printables AI offers free AI-crafted wildlife printables for kids ages 3 to 12,
          including animal fact sheets, coloring pages, and activity packs.
          New animal packs are released every month. No sign-up or payment required.
        </p>
        <WhatIsIncluded />
        <ImpactStats />

        {/* Elephant photo banner */}
        <section className="relative h-100 sm:h-120 overflow-hidden">
          <Image
            src="/images/site/elephant.png"
            alt="Elephant family silhouette at sunset on the African savanna"
            fill
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <p className="text-[#F4A261] font-bold text-xs uppercase tracking-widest mb-3">Wildlife Education</p>
            <h2 className="text-white font-black text-4xl sm:text-5xl mb-6 leading-tight">
              Free for Every Family.<br />Always.
            </h2>
            <a
              href="#packs"
              className="bg-[#F4A261] hover:bg-[#E76F51] text-white font-bold px-8 py-3.5 rounded-full transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1"
            >
              Browse Animals A–Z
            </a>
          </div>
        </section>

        {/* Conservation partners strip */}
        <section className="py-12 px-4 bg-white border-b border-gray-100">
          <div className="max-w-5xl mx-auto text-center">
            <p className="text-[#2D6A4F] font-bold text-xs uppercase tracking-widest mb-6">
              Conservation organizations we recommend
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-6">
              {[
                "World Wildlife Fund",
                "African Wildlife Foundation",
                "Wildlife Conservation Society",
                "Panthera",
                "Save the Elephants",
                "Ocean Conservancy",
              ].map((org) => (
                <span
                  key={org}
                  className="bg-[#FEFAE0] border border-[#D4C89A] text-gray-700 text-xs font-semibold px-4 py-2 rounded-full"
                >
                  {org}
                </span>
              ))}
            </div>
            <a
              href="/charities"
              className="text-[#2D6A4F] hover:text-[#1B4332] text-sm font-bold underline underline-offset-4 transition-colors"
            >
              See all recommended charities →
            </a>
          </div>
        </section>

        <Testimonials />
        <PastPrintables />
      </main>
      <Footer />
    </>
  );
}
