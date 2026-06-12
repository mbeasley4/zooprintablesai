import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SchoolsRegistrationForm from "@/components/SchoolsRegistrationForm";
import SchoolsFaqAccordion, { type SchoolFaq } from "./SchoolsFaqAccordion";

const SITE = "https://www.zooprintablesai.com";

export const metadata: Metadata = {
  title: "Schools & Teachers — Free Classroom Zoo Printables",
  description:
    "Register your classroom for free, curriculum-aligned wildlife printables from Zoo Printables AI. 120+ animal packs, instant PDF downloads, completely free for teachers.",
  alternates: { canonical: `${SITE}/schools` },
  openGraph: {
    url: `${SITE}/schools`,
    title: "Free Zoo Printables for Every Classroom | Zoo Printables AI",
    description:
      "Curriculum-aligned, completely free wildlife printables for teachers. Register your classroom in under a minute.",
    images: [{ url: `${SITE}/og-image.png`, width: 1200, height: 630 }],
  },
};

const benefits = [
  {
    title: "120+ Animal Packs",
    body: "Fact sheets, coloring pages, worksheets, and habitat maps for animals from A to Z.",
  },
  {
    title: "Curriculum-Aligned",
    body: "Built around science, reading, and writing standards for Pre-K through 9th grade.",
  },
  {
    title: "Completely Free",
    body: "No subscriptions, no per-seat pricing, no hidden fees. Print as much as you need.",
  },
  {
    title: "Instant Download",
    body: "Every pack is a print-ready PDF. Download, copy, and hand out in minutes.",
  },
];

const steps = [
  {
    title: "Register",
    body: "Tell us about your classroom. It takes less than a minute and is always free.",
  },
  {
    title: "Get Access",
    body: "We email your teacher resource guide with a link to every printable pack.",
  },
  {
    title: "Download & Print",
    body: "Grab any animal pack as a PDF and print it for your whole class.",
  },
];

const trustedBy = [
  "Title I Schools",
  "Homeschool Co-ops",
  "Public Libraries",
  "After-School Programs",
  "STEM Clubs",
];

const faqs: SchoolFaq[] = [
  {
    q: "Are these printables really free for my classroom?",
    a: "Yes — every pack is 100% free, forever. There are no subscriptions, no per-student fees, and no credit card required. You can print and copy them for as many students as you like.",
  },
  {
    q: "Is the program COPPA compliant and safe for students?",
    a: "We never collect any data from children. Registration is for teachers only, and we ask for nothing about your students. All printables are downloaded as PDFs, so kids never need accounts or logins.",
  },
  {
    q: "What grades and subjects do the packs cover?",
    a: "Packs span Pre-K through 9th grade and support science, reading, writing, and STEM. Each animal pack includes fact sheets, coloring pages, comprehension worksheets, habitat maps, and writing prompts.",
  },
  {
    q: "How should I print the packs for best results?",
    a: "Every pack is an 8.5x11 print-ready PDF. For coloring pages, standard black-and-white printing works great. Fact sheets and habitat maps look best in color but remain clear in grayscale to save ink.",
  },
  {
    q: "Can I share the packs with other teachers?",
    a: "Absolutely. Feel free to share packs with colleagues, your grade-level team, or your whole school. We just ask that you point them here to register so they get the latest resource guide too.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE },
        { "@type": "ListItem", position: 2, name: "Schools", item: `${SITE}/schools` },
      ],
    },
    {
      "@type": "WebPage",
      "@id": `${SITE}/schools#webpage`,
      url: `${SITE}/schools`,
      name: "Schools & Teachers — Zoo Printables AI",
      description:
        "Free, curriculum-aligned wildlife printables for classrooms. Register your classroom for instant access to 120+ animal packs.",
      isPartOf: { "@id": `${SITE}/#website` },
      author: { "@id": `${SITE}/#mike-beasley` },
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE}/schools#faqpage`,
      mainEntity: faqs.map(({ q, a }) => ({
        "@type": "Question",
        name: q,
        acceptedAnswer: { "@type": "Answer", text: a },
      })),
    },
  ],
};

export default function SchoolsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <Navbar />
      <main className="bg-[#FEFAE0] pt-24">
        {/* Hero */}
        <section className="bg-[#1B4332] py-16 px-4 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-56 h-56 opacity-10">
            <svg viewBox="0 0 200 200" fill="none" aria-hidden="true">
              <path d="M-20 100 Q60 0 200 40 Q120 120-20 180Z" fill="#52b788" />
            </svg>
          </div>
          <div className="absolute bottom-0 right-0 w-72 h-72 opacity-10">
            <svg viewBox="0 0 200 200" fill="none" aria-hidden="true">
              <path d="M220 100 Q140 200 0 160 Q80 80 220 20Z" fill="#52b788" />
            </svg>
          </div>
          <div className="max-w-3xl mx-auto text-center relative z-10">
            <p className="text-[#F4A261] font-bold text-sm uppercase tracking-widest mb-4">
              For Teachers & Schools
            </p>
            <h1 className="text-4xl sm:text-5xl font-black text-white mb-5">
              Free Zoo Printables for Every Classroom
            </h1>
            <p className="text-white/70 text-lg mb-8 max-w-xl mx-auto leading-relaxed">
              Register your classroom for instant access to 120+ curriculum-aligned animal packs —
              fact sheets, worksheets, coloring pages, and more. Completely free, forever.
            </p>
            <a
              href="#register"
              className="inline-block bg-[#F4A261] hover:bg-[#E76F51] text-white font-bold px-8 py-3.5 rounded-full transition-colors shadow-md text-lg"
            >
              Register Your Classroom
            </a>
          </div>
        </section>

        {/* Benefits strip */}
        <section className="py-14 px-4">
          <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm"
              >
                <h2 className="font-black text-[#1B4332] text-lg mb-2">{benefit.title}</h2>
                <p className="text-gray-600 text-sm leading-relaxed">{benefit.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* How it works */}
        <section className="bg-white border-y border-gray-100 py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-[#2D6A4F] font-bold text-sm uppercase tracking-widest mb-3">
                How It Works
              </p>
              <h2 className="text-3xl font-black text-gray-900">Three steps to a stocked classroom</h2>
            </div>
            <ol className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {steps.map((step, index) => (
                <li key={step.title} className="text-center">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-[#1B4332] text-white font-black flex items-center justify-center text-lg">
                    {index + 1}
                  </div>
                  <h3 className="font-black text-gray-900 text-lg mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Testimonial + trust block */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <figure className="bg-[#2D6A4F] rounded-3xl p-8 sm:p-10 text-center shadow-lg">
              <blockquote className="text-white text-xl sm:text-2xl font-bold leading-relaxed max-w-2xl mx-auto">
                &ldquo;My second graders are obsessed with the animal packs. I print a new one every
                Friday — and I&apos;ve never paid a cent.&rdquo;
              </blockquote>
              <figcaption className="mt-6 text-white/70 text-sm">
                A 2nd grade teacher — Cincinnati, OH
              </figcaption>
            </figure>
            <div className="mt-10 text-center">
              <p className="text-gray-500 font-bold text-xs uppercase tracking-widest mb-5">
                Trusted by educators in
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {trustedBy.map((label) => (
                  <span
                    key={label}
                    className="bg-white border border-gray-200 text-gray-700 text-sm font-semibold rounded-full px-5 py-2 shadow-sm"
                  >
                    {label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Registration form */}
        <section id="register" className="bg-white border-t border-gray-100 py-16 px-4 scroll-mt-24">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <p className="text-[#2D6A4F] font-bold text-sm uppercase tracking-widest mb-3">
                Register
              </p>
              <h2 className="text-3xl font-black text-gray-900 mb-3">
                Get free classroom access
              </h2>
              <p className="text-gray-600 leading-relaxed max-w-md mx-auto">
                Tell us a little about your classroom and we&apos;ll email your teacher resource guide
                right away.
              </p>
            </div>
            <SchoolsRegistrationForm />
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <p className="text-[#2D6A4F] font-bold text-sm uppercase tracking-widest mb-3">
                Teacher FAQ
              </p>
              <h2 className="text-3xl font-black text-gray-900">Common questions from educators</h2>
            </div>
            <SchoolsFaqAccordion faqs={faqs} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
