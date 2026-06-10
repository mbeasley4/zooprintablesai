import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { allFaqs } from "@/lib/faqData";
import FaqClient from "./FaqClient";

const SITE = "https://www.zooprintablesai.com";

export const metadata: Metadata = {
  title: "FAQ — Free Wildlife Printables for Kids",
  description: "Answers to the most common questions about Zoo Printables AI — free wildlife printables for kids ages 3–12. No sign-up, no cost, instant PDF download.",
  alternates: { canonical: `${SITE}/faq` },
  openGraph: {
    url: `${SITE}/faq`,
    title: "FAQ | Zoo Printables AI",
    description: "Everything families and teachers want to know about free wildlife printables for kids.",
    images: [{ url: `${SITE}/og-image.png`, width: 1200, height: 630 }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE },
        { "@type": "ListItem", position: 2, name: "FAQ",  item: `${SITE}/faq` },
      ],
    },
    {
      "@type": "WebPage",
      "@id": `${SITE}/faq#webpage`,
      url: `${SITE}/faq`,
      name: "FAQ — Zoo Printables AI",
      description: "Frequently asked questions about Zoo Printables AI free wildlife printables for kids ages 3–12.",
      isPartOf: { "@id": `${SITE}/#website` },
      author: { "@id": `${SITE}/#dr-maya` },
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE}/faq`,
      url: `${SITE}/faq`,
      name: "Zoo Printables AI — Frequently Asked Questions",
      mainEntity: allFaqs.map(({ q, a }) => ({
        "@type": "Question",
        name: q,
        acceptedAnswer: { "@type": "Answer", text: a },
      })),
    },
  ],
};

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <Navbar />
      <FaqClient />
      <Footer />
    </>
  );
}
