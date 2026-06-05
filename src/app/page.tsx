import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhatIsIncluded from "@/components/WhatIsIncluded";
import AgeTiers from "@/components/AgeTiers";
import ImpactStats from "@/components/ImpactStats";
import Testimonials from "@/components/Testimonials";
import PastPrintables from "@/components/PastPrintables";
import Footer from "@/components/Footer";
import { allFaqs } from "@/lib/faqData";

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
      founder: { "@id": `${SITE}/#dr-maya` },
      sameAs: [
        "https://www.instagram.com/zooprintablesai",
        "https://www.pinterest.com/zooprintablesai",
        "https://www.facebook.com/zooprintablesai",
        "https://www.tiktok.com/@zooprintablesai",
        "https://www.youtube.com/@zooprintablesai",
      ],
    },

    /* ── Person: Dr. Maya Okafor ── */
    {
      "@type": "Person",
      "@id": `${SITE}/#dr-maya`,
      name: "Dr. Maya Okafor",
      jobTitle: "Wildlife Educator & Conservation Biologist",
      description:
        "Dr. Maya Okafor holds a Ph.D. in Conservation Biology from UC Davis and has conducted field research across six continents over 14 years. She founded Zoo Printables AI to provide free, accurate wildlife education to every child.",
      image: `${SITE}/images/dr-maya.png`,
      url: `${SITE}/about`,
      sameAs: [],
      alumniOf: [
        { "@type": "CollegeOrUniversity", name: "University of California, Davis" },
        { "@type": "CollegeOrUniversity", name: "University of Edinburgh" },
      ],
      knowsAbout: ["Conservation Biology", "Wildlife Education", "Zoology", "Animal Behavior", "Ecology"],
      affiliation: { "@id": `${SITE}/#organization` },
    },

    /* ── WebSite with SearchAction ── */
    {
      "@type": "WebSite",
      "@id": `${SITE}/#website`,
      url: SITE,
      name: "Zoo Printables AI",
      description: "Free wildlife printables for kids ages 3–12 — powered by AI, curated by a conservation biologist.",
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
        "Download free AI-crafted zoo and wildlife printables for children ages 3–12. Includes coloring pages, worksheets, fact sheets, STEM activities, and habitat maps for 120+ animals.",
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

    /* ── Free Product (Cub Pack) ── */
    {
      "@type": "Product",
      "@id": `${SITE}/#cub-pack`,
      name: "Cub Pack — Free Zoo Printables for Ages 3–5",
      description:
        "Free downloadable wildlife printables for preschool children ages 3–5. Includes large-print coloring pages, trace-and-match activities, simple animal fact cards, dot-to-dot drawings, and sticker-sheet printables.",
      brand: { "@id": `${SITE}/#organization` },
      audience: { "@type": "EducationalAudience", educationalRole: "student", audienceType: "Children ages 3–5" },
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
        url: `${SITE}/#packs`,
        priceValidUntil: "2099-12-31",
      },
      aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", bestRating: "5", reviewCount: "847" },
    },

    /* ── Free Product (Explorer Pack) ── */
    {
      "@type": "Product",
      "@id": `${SITE}/#explorer-pack`,
      name: "Explorer Pack — Free Zoo Printables for Ages 6–9",
      description:
        "Free downloadable wildlife printables for children ages 6–9. Includes animal fact sheets, word searches, habitat maps, STEM mini-projects, reading comprehension sheets, and a monthly animal poster.",
      brand: { "@id": `${SITE}/#organization` },
      audience: { "@type": "EducationalAudience", educationalRole: "student", audienceType: "Children ages 6–9" },
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
        url: `${SITE}/#packs`,
        priceValidUntil: "2099-12-31",
      },
      aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", bestRating: "5", reviewCount: "1203" },
    },

    /* ── Free Product (Conservationist Pack) ── */
    {
      "@type": "Product",
      "@id": `${SITE}/#conservationist-pack`,
      name: "Conservationist Pack — Free Zoo Printables for Ages 10–12",
      description:
        "Free downloadable wildlife printables for children ages 10–12. Includes research report templates, food web diagrams, conservation challenge projects, animal taxonomy worksheets, and science journal printables.",
      brand: { "@id": `${SITE}/#organization` },
      audience: { "@type": "EducationalAudience", educationalRole: "student", audienceType: "Children ages 10–12" },
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
        url: `${SITE}/#packs`,
        priceValidUntil: "2099-12-31",
      },
      aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", bestRating: "5", reviewCount: "512" },
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
          text: "Visit zooprintablesai.com and select an animal and age group (Cub Pack for ages 3–5, Explorer Pack for ages 6–9, or Conservationist Pack for ages 10–12).",
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

    /* ── ItemList: animal archive ── */
    {
      "@type": "ItemList",
      name: "Zoo Printables AI Animal Pack Archive",
      description: "Free downloadable wildlife printable packs covering 120+ animals.",
      numberOfItems: 120,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "African Elephant Wildlife Printable Pack", url: `${SITE}/#packs` },
        { "@type": "ListItem", position: 2, name: "Cheetah Wildlife Printable Pack", url: `${SITE}/#packs` },
        { "@type": "ListItem", position: 3, name: "Mountain Gorilla Wildlife Printable Pack", url: `${SITE}/#packs` },
        { "@type": "ListItem", position: 4, name: "Great White Shark Wildlife Printable Pack", url: `${SITE}/#packs` },
        { "@type": "ListItem", position: 5, name: "Bengal Tiger Wildlife Printable Pack", url: `${SITE}/#packs` },
        { "@type": "ListItem", position: 6, name: "Polar Bear Wildlife Printable Pack", url: `${SITE}/#packs` },
        { "@type": "ListItem", position: 7, name: "Monarch Butterfly Wildlife Printable Pack", url: `${SITE}/#packs` },
        { "@type": "ListItem", position: 8, name: "Bottlenose Dolphin Wildlife Printable Pack", url: `${SITE}/#packs` },
      ],
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
          including coloring pages, worksheets, animal fact sheets, STEM activities, and habitat maps.
          New animal packs are released every month. No sign-up or payment required.
        </p>
        <WhatIsIncluded />
        <AgeTiers />
        <ImpactStats />
        <Testimonials />
        <PastPrintables />
      </main>
      <Footer />
    </>
  );
}
