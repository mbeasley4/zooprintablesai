import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Wildlife Charities We Recommend | Zoo Printables AI",
  description:
    "Zoo Printables AI is free — no markups, no donations skimmed from a sale. Instead we point you directly to the wildlife conservation organizations doing the most important work.",
  openGraph: {
    title: "Wildlife Charities We Recommend | Zoo Printables AI",
    description:
      "Hand-picked, highly rated wildlife conservation charities across big cats, elephants, oceans, birds, and global habitat protection.",
  },
};

const charities = [
  {
    name: "World Wildlife Fund (WWF)",
    url: "https://www.worldwildlife.org",
    focus: "Global Species & Habitat",
    description:
      "The world's largest conservation organization. WWF works in more than 100 countries protecting endangered species, restoring habitats, and addressing the threats driving biodiversity loss.",
    rating: "4-Star · Charity Navigator",
    accent: "#52B788",
    emoji: "🐼",
    tags: ["Big Cats", "Elephants", "Oceans", "Climate"],
  },
  {
    name: "African Wildlife Foundation",
    url: "https://www.awf.org",
    focus: "African Wildlife & Communities",
    description:
      "AWF connects conservation with local communities across Africa — protecting lions, elephants, rhinos, and great apes while creating economic alternatives to poaching.",
    rating: "Platinum · Candid/GuideStar",
    accent: "#F4A261",
    emoji: "🦁",
    tags: ["Africa", "Elephants", "Rhinos", "Lions"],
  },
  {
    name: "Wildlife Conservation Society (WCS)",
    url: "https://www.wcs.org",
    focus: "Science-Driven Global Conservation",
    description:
      "Based at the Bronx Zoo, WCS manages 200+ conservation projects across 60 countries and conducts field research that directly informs policy protecting wild places and wild animals.",
    rating: "4-Star · Charity Navigator",
    accent: "#60A5FA",
    emoji: "🦏",
    tags: ["Science", "Field Research", "Zoos", "Policy"],
  },
  {
    name: "Panthera",
    url: "https://www.panthera.org",
    focus: "Wild Cat Conservation",
    description:
      "The only organization in the world devoted exclusively to wild cats. Panthera's scientists study and protect tigers, lions, jaguars, leopards, snow leopards, and cheetahs.",
    rating: "4-Star · Charity Navigator",
    accent: "#FBBF24",
    emoji: "🐆",
    tags: ["Big Cats", "Tigers", "Lions", "Jaguars"],
  },
  {
    name: "Save the Elephants",
    url: "https://www.savetheelephants.org",
    focus: "Elephant Research & Protection",
    description:
      "Pioneering elephant research in Kenya and beyond. Save the Elephants studies elephant behavior, combats ivory poaching, and advocates for human-elephant coexistence.",
    rating: "Highly Rated · Great Nonprofits",
    accent: "#A78BFA",
    emoji: "🐘",
    tags: ["Elephants", "Kenya", "Anti-Poaching", "Research"],
  },
  {
    name: "Cheetah Conservation Fund",
    url: "https://cheetah.org",
    focus: "Cheetah Survival",
    description:
      "The global leader in cheetah research and conservation. CCF works in Namibia and across the cheetah's range to tackle habitat loss, human-wildlife conflict, and illegal wildlife trade.",
    rating: "4-Star · Charity Navigator",
    accent: "#F87171",
    emoji: "🐈",
    tags: ["Cheetahs", "Namibia", "Research", "Community"],
  },
  {
    name: "Ocean Conservancy",
    url: "https://oceanconservancy.org",
    focus: "Ocean & Marine Wildlife",
    description:
      "A science-based advocacy organization protecting the ocean from trash, climate change, and overfishing — defending habitats for whales, sea turtles, sharks, and coral reefs.",
    rating: "4-Star · Charity Navigator",
    accent: "#2DD4BF",
    emoji: "🐳",
    tags: ["Oceans", "Marine Life", "Climate", "Plastic Pollution"],
  },
  {
    name: "American Bird Conservancy",
    url: "https://abcbirds.org",
    focus: "Bird Species & Habitats",
    description:
      "The only organization dedicated exclusively to conserving native birds across the Americas. ABC protects birds and their habitats, from tropical rainforests to the US backyard.",
    rating: "4-Star · Charity Navigator",
    accent: "#C084FC",
    emoji: "🦜",
    tags: ["Birds", "Americas", "Habitat", "Migration"],
  },
  {
    name: "Born Free Foundation",
    url: "https://www.bornfree.org.uk",
    focus: "Keeping Wildlife Wild",
    description:
      "Born Free campaigns to end keeping wild animals in captivity, rescue individual wild animals in crisis, and protect wildlife in its natural habitat across Africa and beyond.",
    rating: "Platinum · Candid/GuideStar",
    accent: "#F472B6",
    emoji: "🦒",
    tags: ["Africa", "Anti-Captivity", "Rescue", "Big Cats"],
  },
  {
    name: "International Fund for Animal Welfare (IFAW)",
    url: "https://www.ifaw.org",
    focus: "Animal Rescue & Policy",
    description:
      "IFAW rescues and rehabilitates animals, strengthens wildlife protection laws, and works to end the illegal wildlife trade globally — from elephants to polar bears to whales.",
    rating: "4-Star · Charity Navigator",
    accent: "#34D399",
    emoji: "🐋",
    tags: ["Rescue", "Policy", "Whales", "Elephants"],
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://zooprintablesai.com" },
        { "@type": "ListItem", position: 2, name: "Wildlife Charities", item: "https://zooprintablesai.com/charities" },
      ],
    },
    {
      "@type": "WebPage",
      "@id": "https://zooprintablesai.com/charities",
      name: "Wildlife Charities We Recommend",
      description: "Zoo Printables AI recommends these top-rated wildlife conservation organizations.",
      url: "https://zooprintablesai.com/charities",
      isPartOf: { "@id": "https://zooprintablesai.com/#website" },
    },
    {
      "@type": "ItemList",
      name: "Recommended Wildlife Charities",
      numberOfItems: charities.length,
      itemListElement: charities.map((c, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: c.name,
        url: c.url,
        description: c.description,
      })),
    },
  ],
};

export default function CharitiesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Navbar />
      <main className="min-h-screen bg-[#FEFAE0]">

        {/* Hero banner */}
        <div className="bg-[#1B4332] pt-28 pb-16 px-4 relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
          <div className="max-w-3xl mx-auto text-center relative z-10">
            <p className="section-label justify-center text-[#52B788] mb-4">Wildlife Giving</p>
            <h1 className="text-4xl sm:text-5xl font-black text-white mb-5 leading-tight">
              Real Giving Starts{" "}
              <span className="text-[#F4A261]">with Transparency.</span>
            </h1>
            <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed">
              Zoo Printables AI is 100% free — no product, no markup, no &ldquo;we donate 5%&rdquo;
              fine print. We give you everything at zero cost, then point you straight
              to the wildlife organizations making the biggest difference on the ground.
            </p>
          </div>
        </div>

        {/* Wave */}
        <div className="-mt-1">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full block">
            <path d="M0 60L80 48C160 36 320 12 480 6C640 0 800 12 960 24C1120 36 1280 48 1360 54L1440 60V0H0Z" fill="#1B4332" />
            <path d="M0 60L1440 60V60H0Z" fill="#FEFAE0" />
          </svg>
        </div>

        <div className="max-w-6xl mx-auto px-4 py-16">

          {/* Callout box */}
          <div className="bg-white rounded-2xl shadow-sm mb-14 max-w-3xl mx-auto overflow-hidden">
            <div className="bg-[#2D6A4F] px-7 py-4">
              <p className="text-white font-black text-sm uppercase tracking-widest">A word on &ldquo;charitable&rdquo; pricing</p>
            </div>
            <div className="px-7 py-6 space-y-3">
              <p className="text-gray-700 text-base leading-relaxed">
                You&apos;ve seen it everywhere: <span className="font-semibold text-gray-900">&ldquo;10% of every purchase goes to wildlife conservation.&rdquo;</span> Sounds great. But do the math — if a $20 product has a $4 markup baked in and $2 of that reaches a charity, you just paid extra for someone else to feel good about their brand.
              </p>
              <p className="text-gray-700 text-base leading-relaxed">
                We don&apos;t do that. <span className="font-semibold text-[#2D6A4F]">Zoo Printables AI doesn&apos;t charge you anything</span>, so there&apos;s no markup to skim, no middleman taking a cut, and no conservation theater. We&apos;re not in the business of telling you we give when it&apos;s really you giving through a higher price tag.
              </p>
              <p className="text-gray-700 text-base leading-relaxed">
                If wildlife matters to you, give directly to the organizations below. <span className="font-semibold text-gray-900">100% of your dollar reaches them</span> — not 5% after margins, platform fees, and marketing budgets.
              </p>
            </div>
          </div>

          {/* Charity grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-16">
            {charities.map((c) => (
              <a
                key={c.name}
                href={c.url}
                target="_blank"
                rel="noopener noreferrer"
                className="card-hover bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden group flex flex-col"
              >
                {/* Top accent stripe */}
                <div className="h-1 w-full" style={{ background: c.accent }} />

                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-start gap-4 mb-4">
                    {/* Emoji icon */}
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl shrink-0 shadow-sm"
                      style={{ background: c.accent + "18" }}
                    >
                      {c.emoji}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h2 className="font-black text-gray-900 text-base leading-tight mb-0.5 group-hover:text-[#2D6A4F] transition-colors">
                        {c.name}
                      </h2>
                      <p className="text-xs font-semibold" style={{ color: c.accent }}>{c.focus}</p>
                      <p className="text-xs text-gray-400 mt-0.5">{c.rating}</p>
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-4">{c.description}</p>

                  <div className="flex flex-wrap gap-1.5 mt-auto">
                    {c.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-semibold px-2.5 py-0.5 rounded-full"
                        style={{ background: c.accent + "14", color: c.accent }}
                      >
                        {tag}
                      </span>
                    ))}
                    <span className="ml-auto text-xs text-gray-400 group-hover:text-[#2D6A4F] transition-colors font-semibold self-center">
                      Visit site →
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Bottom CTA back to packs */}
          <div className="bg-[#1B4332] rounded-3xl px-8 py-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
              style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
            <div className="relative z-10">
              <p className="text-[#52B788] font-black text-xs uppercase tracking-widest mb-3">Meanwhile, back at the jungle</p>
              <h3 className="text-white font-black text-3xl mb-4">
                Start with Free Wildlife Education
              </h3>
              <p className="text-white/60 text-base max-w-lg mx-auto mb-8">
                Download a free printable pack for your kids or classroom today —
                then consider making a gift to one of the charities above.
              </p>
              <a
                href="/#packs"
                className="inline-flex items-center gap-2 bg-[#F4A261] hover:bg-[#E76F51] text-white font-bold px-8 py-4 rounded-full transition-all shadow-lg hover:shadow-xl"
              >
                Get Free Printables
              </a>
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
