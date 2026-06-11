import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const SITE = "https://www.zooprintablesai.com";

export const metadata: Metadata = {
  title: "Privacy Policy | Zoo Printables AI",
  description:
    "Zoo Printables AI does not collect, store, or share any personal information. Learn about our privacy practices and COPPA compliance.",
  alternates: { canonical: `${SITE}/privacy` },
};

const sections = [
  {
    number: "1",
    title: "Information We Do Not Collect",
    body: "Zoo Printables AI is committed to protecting the privacy of our users. We do not collect, store, or share any personal information from you or your children. Because our service requires no sign-up or user accounts, we do not have access to your name, email address, IP address, or location.",
  },
  {
    number: "2",
    title: "Children's Online Privacy Protection Act (COPPA)",
    body: "Because Zoo Printables AI does not collect any personal information, we are fully compliant with the Children's Online Privacy Protection Act (COPPA). We do not knowingly solicit, collect, or retain any personal information from children under the age of 13.",
  },
  {
    number: "3",
    title: "Use of Service",
    body: "Any prompts entered into our AI or images generated remain strictly for the temporary, internal operation of providing you with your requested printables. No data is stored on our servers after your browsing session ends.",
  },
  {
    number: "4",
    title: "Changes to This Privacy Policy",
    body: "We may occasionally update this policy. If we change our service in a way that involves collecting personal information, we will post those changes here and obtain verifiable parental consent where required by law.",
  },
  {
    number: "5",
    title: "Contact Us",
    body: (
      <>
        If you have any questions about this Privacy Policy or our privacy practices, please feel free to reach out at{" "}
        <a
          href="mailto:zooprintablesai@gmail.com"
          className="text-[#2D6A4F] font-semibold hover:underline"
        >
          zooprintablesai@gmail.com
        </a>
        .
      </>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="bg-[#FEFAE0] pt-16 min-h-screen">

        {/* Hero */}
        <div className="bg-[#1B4332] pt-16 pb-12 px-4">
          <div className="max-w-3xl mx-auto">
            <p className="text-[#52B788] text-xs font-bold uppercase tracking-widest mb-3">Legal</p>
            <h1 className="text-4xl font-black text-white mb-3">Privacy Policy</h1>
            <p className="text-white/60 text-sm">
              Effective Date: June 11, 2026
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-3xl mx-auto px-4 py-14">

          {/* Intro callout */}
          <div className="bg-[#2D6A4F] text-white rounded-2xl px-7 py-6 mb-10">
            <p className="font-black text-sm uppercase tracking-widest text-[#52B788] mb-2">Short version</p>
            <p className="text-white/90 leading-relaxed">
              Zoo Printables AI is 100% free and requires no sign-up. We do not collect your name,
              email, or any personal information — for you or your children.
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-10">
            {sections.map((s) => (
              <section key={s.number}>
                <h2 className="text-xl font-black text-gray-900 mb-3">
                  <span className="text-[#F4A261] mr-2">{s.number}.</span>
                  {s.title}
                </h2>
                <p className="text-gray-600 leading-relaxed">{s.body}</p>
              </section>
            ))}
          </div>

        </div>

        {/* Banner */}
        <div className="bg-[#2D6A4F] px-4 py-5">
          <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-center">
            <span className="flex items-center gap-2 text-white font-bold text-sm">
              <span className="text-[#52B788] text-lg">✓</span> Zero Data Collected
            </span>
            <span className="hidden sm:block w-px h-4 bg-white/20" />
            <span className="flex items-center gap-2 text-white font-bold text-sm">
              <span className="text-[#52B788] text-lg">✓</span> 100% COPPA Compliant
            </span>
            <span className="hidden sm:block w-px h-4 bg-white/20" />
            <span className="flex items-center gap-2 text-white font-bold text-sm">
              <span className="text-[#52B788] text-lg">✓</span> No Sign-Up. Always Free.
            </span>
          </div>
        </div>

      </main>
      <Footer />
    </>
  );
}
