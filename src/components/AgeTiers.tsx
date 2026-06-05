const tiers = [
  {
    name: "Cub Pack",
    emoji: "🐻",
    ages: "Ages 3–5",
    tagline: "First steps into the wild",
    accentColor: "#F59E0B",
    accentLight: "#FEF3C7",
    accentBorder: "border-yellow-300",
    features: [
      "Large-print coloring pages",
      "Trace & match activities",
      "Simple animal fact cards",
      "Dot-to-dot drawings",
      "Sticker-sheet printables",
    ],
    ctaLabel: "Download Cub Pack",
    ctaClass: "bg-amber-400 hover:bg-amber-500 text-amber-950",
    downloadHref: "/downloads/ages-3-5/ZooExplorers_Gorilla_Ages3-5.pdf",
    popular: false,
  },
  {
    name: "Explorer Pack",
    emoji: "🦁",
    ages: "Ages 6–9",
    tagline: "Dig deeper into the animal kingdom",
    accentColor: "#2D6A4F",
    accentLight: "#D1FAE5",
    accentBorder: "border-emerald-600",
    features: [
      "Everything in Cub Pack",
      "Word searches & crosswords",
      "Habitat maps & posters",
      "STEM mini-projects",
      "Reading comprehension sheets",
      "Bonus animal poster",
    ],
    ctaLabel: "Download Explorer Pack",
    ctaClass: "bg-[#2D6A4F] hover:bg-[#1B4332] text-white",
    downloadHref: "/downloads/ages-6-9/ZooExplorers_Gorilla_Ages6-9.pdf",
    popular: true,
  },
  {
    name: "Conservationist Pack",
    emoji: "🌍",
    ages: "Ages 10–12",
    tagline: "Think like a wildlife scientist",
    accentColor: "#F4A261",
    accentLight: "#FFF7ED",
    accentBorder: "border-orange-300",
    features: [
      "Everything in Explorer Pack",
      "Research report templates",
      "Food web & ecosystem diagrams",
      "Conservation challenge projects",
      "Animal taxonomy worksheets",
      "Science journal printables",
    ],
    ctaLabel: "Download Conservationist Pack",
    ctaClass: "bg-[#F4A261] hover:bg-[#E76F51] text-white",
    downloadHref: "/downloads/ages-10-12/ZooExplorers_Gorilla_Ages10-12.pdf",
    popular: false,
  },
];

export default function AgeTiers() {
  return (
    <section id="packs" className="py-24 px-4 bg-white relative overflow-hidden">
      {/* Background accent circles */}
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-emerald-50 opacity-60 pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-amber-50 opacity-60 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Header */}
        <div className="text-center mb-4">
          <p className="section-label justify-center">Free for Every Grade</p>
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4">
            Pick Your Age Group.{" "}
            <span className="text-[#2D6A4F]">Download Free.</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto mb-6">
            No credit card. No sign-up. Just pick your age group and hit download.
          </p>
          <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 text-[#2D6A4F] font-bold text-sm px-5 py-2 rounded-full">
            Featured this month: <span className="text-[#F4A261]">Gorilla Pack</span>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start mt-12">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative card-hover rounded-3xl border-2 ${tier.accentBorder} bg-white flex flex-col overflow-hidden ${
                tier.popular ? "shadow-2xl md:scale-[1.04]" : "shadow-md"
              }`}
            >
              {/* Coloured top band */}
              <div
                className="h-2 w-full"
                style={{ background: tier.accentColor }}
              />

              {/* Popular badge */}
              {tier.popular && (
                <div className="absolute top-2 right-4">
                  <span
                    className="text-white text-[11px] font-black px-3 py-1 rounded-full shadow-md"
                    style={{ background: tier.accentColor }}
                  >
                    Most Popular
                  </span>
                </div>
              )}

              <div className="p-7 flex flex-col flex-1">
                {/* Icon + age badge */}
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl shadow-sm"
                    style={{ background: tier.accentLight }}
                  >
                    {tier.emoji}
                  </span>
                  <div>
                    <span
                      className="text-xs font-black px-2.5 py-0.5 rounded-full"
                      style={{ background: tier.accentLight, color: tier.accentColor }}
                    >
                      {tier.ages}
                    </span>
                    <p className="text-gray-400 text-xs mt-1">{tier.tagline}</p>
                  </div>
                </div>

                <h3 className="text-xl font-black text-gray-900 mb-1">{tier.name}</h3>

                {/* FREE callout */}
                <div className="flex items-baseline gap-2 mb-5 mt-1">
                  <span className="text-4xl font-black shimmer-text">FREE</span>
                  <span className="text-gray-400 text-sm">always</span>
                </div>

                {/* Feature list */}
                <ul className="space-y-2.5 mb-7 flex-1">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="mt-0.5 shrink-0 text-xs font-black" style={{ color: tier.accentColor }}>✓</span>
                      {f}
                    </li>
                  ))}
                </ul>

                {/* Download button — linked to real PDF */}
                <a
                  href={tier.downloadHref}
                  download
                  className={`text-center font-bold py-3.5 rounded-xl transition-all shadow-sm text-sm ${tier.ctaClass}`}
                >
                  {tier.ctaLabel}
                </a>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-400 text-xs mt-8 tracking-wide">
          No sign-up · Instant PDF · Print at home or school · New animal every month
        </p>
      </div>
    </section>
  );
}
