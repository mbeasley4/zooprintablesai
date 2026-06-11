import Image from "next/image";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Homeschool Mom · 2 kids",
    initials: "SM",
    color: "#52B788",
    rating: 5,
    text: "We've tried so many printable subscriptions and this one is on a completely different level. The elephant pack kept my 7-year-old engaged for an entire Saturday. The activity pack is genuinely clever!",
    pack: "Elephant Pack",
  },
  {
    name: "Marcus Davis",
    role: "2nd Grade Teacher",
    initials: "MD",
    color: "#60A5FA",
    rating: 5,
    text: "I use Zoo Printables AI every week in my classroom. The fact sheets are accurate, the worksheets are scaffolded perfectly, and my students beg for the next animal.",
    pack: "Lion Pack",
  },
  {
    name: "Priya Kapoor",
    role: "Parent · Ages 4 & 9",
    initials: "PK",
    color: "#F4A261",
    rating: 5,
    text: "Both my kids love it even though they're totally different ages. The coloring pages are perfect for my 4-year-old and my 9-year-old is obsessed with the activity packs.",
    pack: "Multiple Animals",
  },
  {
    name: "Jake Thompson",
    role: "After-School Program Director",
    initials: "JT",
    color: "#A78BFA",
    rating: 5,
    text: "Kids are talking about conservation and using real scientific vocabulary after just a few sessions. Absolutely incredible free resource.",
    pack: "Gorilla Pack",
  },
  {
    name: "Lisa Rodriguez",
    role: "Mom of 3",
    initials: "LR",
    color: "#F472B6",
    rating: 5,
    text: "The coloring pages are stunning — way better quality than anything I found on Pinterest. My 5-year-old has filled an entire binder with her animal coloring book. She's so proud of it!",
    pack: "Polar Bear Pack",
  },
  {
    name: "Dr. Linh Nguyen",
    role: "Children's Librarian",
    initials: "LN",
    color: "#FBBF24",
    rating: 5,
    text: "We offer these printables at our library's reading program and the response has been incredible. Parents keep asking where we got them.",
    pack: "Lion Pack",
  },
];


export default function Testimonials() {
  return (
    <section id="reviews" className="py-24 px-4 bg-[#FEFAE0] bg-dots">
      <div className="max-w-6xl mx-auto">

        {/* Photo + header split */}
        <div className="flex flex-col lg:flex-row items-center gap-10 mb-12">
          {/* Photo */}
          <div className="relative w-full lg:w-80 h-64 lg:h-72 rounded-3xl overflow-hidden shadow-xl shrink-0">
            <Image
              src="/images/site/chimp.png"
              alt="Young girl smiling alongside a baby chimpanzee"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 320px"
            />
          </div>

          {/* Header */}
          <div className="text-center lg:text-left">
            <p className="section-label lg:justify-start justify-center">Reviews</p>
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4">
              Families & Teachers{" "}
              <span className="text-[#2D6A4F]">Love It</span>
            </h2>
            <p className="text-gray-500 text-base max-w-md">
              From living rooms to classrooms — real people, real results.
            </p>
          </div>
        </div>

        {/* Review cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="card-hover bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col relative overflow-hidden group"
            >
              {/* Big quote mark watermark */}
              <span className="absolute -top-2 -right-1 text-8xl font-black text-gray-100 select-none pointer-events-none leading-none group-hover:text-gray-200 transition-colors">
                &ldquo;
              </span>

              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <span key={i} className="text-amber-400 text-base">★</span>
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-700 text-sm leading-relaxed flex-1 mb-5 relative z-10">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Footer */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {/* Avatar with colored ring */}
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-black shrink-0"
                    style={{ background: t.color, outline: `2px solid ${t.color}`, outlineOffset: "2px" }}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-sm leading-tight">{t.name}</p>
                    <p className="text-gray-400 text-xs">{t.role}</p>
                  </div>
                </div>
                <span
                  className="text-xs font-semibold px-2.5 py-1 rounded-full"
                  style={{ background: t.color + "18", color: t.color }}
                >
                  {t.pack}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
