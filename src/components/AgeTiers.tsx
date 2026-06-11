const animals: { emoji: string; name: string; letter: string; href: string | null }[] = [
  { emoji: "🐘", name: "African Elephant",   letter: "A", href: null },
  { emoji: "🐊", name: "Alligator",          letter: "A", href: null },
  { emoji: "🐦", name: "Albatross",          letter: "A", href: null },
  { emoji: "🦅", name: "Amur Leopard",       letter: "A", href: null },
  { emoji: "🦎", name: "Aye-aye",            letter: "A", href: null },
  { emoji: "🦅", name: "Bald Eagle",         letter: "B", href: null },
  { emoji: "🐯", name: "Bengal Tiger",       letter: "B", href: null },
  { emoji: "🦬", name: "Bison",              letter: "B", href: null },
  { emoji: "🐳", name: "Blue Whale",         letter: "B", href: null },
  { emoji: "🐬", name: "Bottlenose Dolphin", letter: "B", href: "/downloads/ZooExplorers_Bottlenose_Dolphin.pdf" },
  { emoji: "🐻", name: "Brown Bear",         letter: "B", href: null },
  { emoji: "🐆", name: "Cheetah",            letter: "C", href: "/downloads/ZooExplorers_Cheetah.pdf" },
  { emoji: "🐒", name: "Chimpanzee",         letter: "C", href: null },
  { emoji: "🐊", name: "Crocodile",          letter: "C", href: "/downloads/ZooExplorers_Crocodile.pdf" },
  { emoji: "🐕", name: "Dhole",              letter: "D", href: null },
  { emoji: "🦜", name: "Dromedary Camel",    letter: "D", href: null },
  { emoji: "🐧", name: "Emperor Penguin",    letter: "E", href: null },
  { emoji: "🦩", name: "Flamingo",           letter: "F", href: null },
  { emoji: "🐈", name: "Fishing Cat",        letter: "F", href: null },
  { emoji: "🦊", name: "Fox (Arctic)",       letter: "F", href: null },
  { emoji: "🐼", name: "Giant Panda",        letter: "G", href: null },
  { emoji: "🦒", name: "Giraffe",            letter: "G", href: null },
  { emoji: "🦍", name: "Gorilla",            letter: "G", href: "/downloads/ZooExplorers_Gorilla.pdf" },
  { emoji: "🦈", name: "Great White Shark",  letter: "G", href: "/downloads/ZooExplorers_Great_White_Shark.pdf" },
  { emoji: "🦛", name: "Hippopotamus",       letter: "H", href: null },
  { emoji: "🐒", name: "Howler Monkey",      letter: "H", href: null },
  { emoji: "🦎", name: "Iguana",             letter: "I", href: null },
  { emoji: "🐆", name: "Jaguar",             letter: "J", href: null },
  { emoji: "🪼", name: "Jellyfish",          letter: "J", href: null },
  { emoji: "🦘", name: "Kangaroo",           letter: "K", href: null },
  { emoji: "🦎", name: "Komodo Dragon",      letter: "K", href: null },
  { emoji: "🐆", name: "Leopard",            letter: "L", href: null },
  { emoji: "🦁", name: "Lion",               letter: "L", href: null },
  { emoji: "🐱", name: "Lynx",               letter: "L", href: null },
  { emoji: "🦭", name: "Manatee",            letter: "M", href: null },
  { emoji: "🦡", name: "Meerkat",            letter: "M", href: null },
  { emoji: "🦋", name: "Monarch Butterfly",  letter: "M", href: "/downloads/ZooExplorers_Monarch_Butterfly.pdf" },
  { emoji: "🐳", name: "Narwhal",            letter: "N", href: null },
  { emoji: "🦧", name: "Orangutan",          letter: "O", href: null },
  { emoji: "🐋", name: "Orca",               letter: "O", href: null },
  { emoji: "🦤", name: "Ostrich",            letter: "O", href: null },
  { emoji: "🐻‍❄️", name: "Polar Bear",      letter: "P", href: "/downloads/ZooExplorers_Polar_Bear.pdf" },
  { emoji: "🦁", name: "Puma",               letter: "P", href: null },
  { emoji: "🦘", name: "Quokka",             letter: "Q", href: null },
  { emoji: "🦊", name: "Red Panda",          letter: "R", href: null },
  { emoji: "🐺", name: "Red Wolf",           letter: "R", href: null },
  { emoji: "🐢", name: "Sea Turtle",         letter: "S", href: null },
  { emoji: "🐆", name: "Snow Leopard",       letter: "S", href: null },
  { emoji: "🦈", name: "Stingray",           letter: "S", href: null },
  { emoji: "🦝", name: "Tasmanian Devil",    letter: "T", href: null },
  { emoji: "🐯", name: "Tiger",              letter: "T", href: null },
  { emoji: "🦭", name: "Walrus",             letter: "W", href: null },
  { emoji: "🦏", name: "White Rhino",        letter: "W", href: "/downloads/ZooExplorers_White_Rhino.pdf" },
  { emoji: "🐺", name: "Wolf",               letter: "W", href: null },
  { emoji: "🦬", name: "Yak",                letter: "Y", href: null },
  { emoji: "🦓", name: "Zebra",              letter: "Z", href: null },
];

const FEATURED = "Gorilla";

const letters = [...new Set(animals.map((a) => a.letter))].sort();

export default function AgeTiers() {
  return (
    <section id="packs" className="py-24 px-4 bg-white relative overflow-hidden">
      {/* Background accent circles */}
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-emerald-50 opacity-60 pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-amber-50 opacity-60 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Header */}
        <div className="text-center mb-10">
          <p className="section-label justify-center">Free for Every Animal</p>
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4">
            Browse Animals{" "}
            <span className="text-[#2D6A4F]">A – Z</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto mb-6">
            No credit card. No sign-up. Just pick an animal and hit download.
          </p>
          <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 text-[#2D6A4F] font-bold text-sm px-5 py-2 rounded-full">
            Featured this month: <span className="text-[#F4A261]">{FEATURED} Pack</span>
          </div>
        </div>

        {/* Alphabet quick-nav */}
        <div className="flex flex-wrap justify-center gap-1.5 mb-10">
          {letters.map((letter) => (
            <a
              key={letter}
              href={`#az-${letter}`}
              className="w-8 h-8 flex items-center justify-center rounded-lg text-sm font-black text-[#2D6A4F] bg-emerald-50 hover:bg-[#2D6A4F] hover:text-white transition-colors"
            >
              {letter}
            </a>
          ))}
        </div>

        {/* A-Z sections */}
        <div className="space-y-10">
          {letters.map((letter) => {
            const group = animals.filter((a) => a.letter === letter);
            return (
              <div key={letter} id={`az-${letter}`}>
                {/* Letter divider */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-10 h-10 flex items-center justify-center rounded-xl bg-[#2D6A4F] text-white font-black text-lg shrink-0">
                    {letter}
                  </span>
                  <div className="flex-1 h-px bg-gray-100" />
                </div>

                {/* Animal cards */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                  {group.map((animal) => {
                    const isFeatured = animal.name === FEATURED;
                    const available = animal.href !== null;

                    const cardClass = `group relative rounded-2xl border-2 bg-white flex flex-col items-center text-center p-4 transition-all overflow-hidden ${
                      isFeatured
                        ? "border-[#2D6A4F] shadow-lg card-hover"
                        : available
                          ? "border-gray-100 shadow-sm hover:border-emerald-200 card-hover"
                          : "border-gray-100 shadow-sm opacity-60 cursor-default"
                    }`;

                    const inner = (
                      <>
                        {isFeatured && (
                          <span className="absolute top-2 right-2 text-[9px] font-black bg-[#2D6A4F] text-white px-2 py-0.5 rounded-full">
                            This Month
                          </span>
                        )}
                        <span className="text-4xl mb-2 mt-1">{animal.emoji}</span>
                        <p className={`font-bold text-xs leading-tight mb-3 ${available ? "text-gray-900" : "text-gray-400"}`}>
                          {animal.name}
                        </p>
                        {available ? (
                          <span className="text-[10px] font-black text-[#2D6A4F] bg-emerald-50 px-2.5 py-1 rounded-full group-hover:bg-[#2D6A4F] group-hover:text-white transition-colors">
                            Download PDF
                          </span>
                        ) : (
                          <span className="text-[10px] font-semibold text-gray-400 bg-gray-50 px-2.5 py-1 rounded-full">
                            Coming Soon
                          </span>
                        )}
                      </>
                    );

                    return available ? (
                      <a key={animal.name} href={animal.href!} download className={cardClass}>
                        {inner}
                      </a>
                    ) : (
                      <div key={animal.name} className={cardClass}>
                        {inner}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        <p className="text-center text-gray-400 text-xs mt-10 tracking-wide">
          No sign-up · Instant PDF · Print at home or school · New animal every month
        </p>
      </div>
    </section>
  );
}
