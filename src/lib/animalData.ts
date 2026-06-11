export type ConservationStatus =
  | "Least Concern"
  | "Near Threatened"
  | "Vulnerable"
  | "Endangered"
  | "Critically Endangered"
  | "Data Deficient";

export type IucnCode = "LC" | "NT" | "VU" | "EN" | "CR" | "DD";
export type DietType = "Herbivore" | "Carnivore" | "Omnivore" | "Insectivore";
export type AnimalCategory = "Mammal" | "Bird" | "Reptile" | "Amphibian" | "Fish" | "Invertebrate";

export interface AnimalFaq {
  q: string;
  a: string;
}

export interface AnimalData {
  slug: string;
  name: string;
  emoji: string;
  scientificName: string;
  conservationStatus: ConservationStatus;
  iucnCode: IucnCode;
  habitat: string;
  diet: string;
  dietType: DietType;
  lifespan: string;
  weight: string;
  continent: string;
  category: AnimalCategory;
  description: string;
  funFacts: string[];
  faqs: AnimalFaq[];
  activities: number;
  pdfFile?: string;
  drMayaNote?: string;
  relatedSlugs: string[];
}

export const animals: AnimalData[] = [
  {
    slug: "gorilla",
    name: "Gorilla",
    emoji: "🦍",
    scientificName: "Gorilla beringei beringei",
    conservationStatus: "Endangered",
    iucnCode: "EN",
    habitat: "Montane rainforest, 1,500–4,000 m elevation",
    diet: "Leaves, stems, bark, and flowers",
    dietType: "Herbivore",
    lifespan: "35–40 years",
    weight: "130–220 kg (males)",
    continent: "Africa",
    category: "Mammal",
    description:
      "Mountain gorillas are the largest living primates, found only in the high-altitude forests of Uganda, Rwanda, and the Democratic Republic of Congo. Despite being Endangered, their population has grown from 620 in 2008 to over 1,063 today — one of conservation's greatest comeback stories.",
    funFacts: [
      "Mountain gorillas share 98.3% of their DNA with humans — our closest relatives after chimpanzees.",
      "They live in family groups of 5–30 individuals led by a dominant silverback male.",
      "Gorillas build a brand-new sleeping nest from leaves and branches every single night.",
      "A silverback can consume up to 34 kg (75 lb) of vegetation in a single day.",
    ],
    faqs: [
      {
        q: "How many mountain gorillas are left in the wild?",
        a: "Approximately 1,063 mountain gorillas remain in the wild as of 2024. They live in two isolated populations: the Virunga Massif (shared by Uganda, Rwanda, and DRC) and Bwindi Impenetrable Forest in Uganda.",
      },
      {
        q: "What do mountain gorillas eat?",
        a: "Mountain gorillas are herbivores that feed on leaves, stems, bark, roots, and flowers from over 100 plant species. They spend roughly 30% of each day foraging, and fruit makes up only about 2% of their diet because it is scarce at high altitudes.",
      },
      {
        q: "How big do gorillas get?",
        a: "Adult male gorillas (silverbacks) weigh 130–220 kg (286–485 lb) and can stand up to 1.7 m (5.6 ft) tall on two legs. Females are much smaller, typically weighing 70–98 kg (154–216 lb).",
      },
      {
        q: "Are gorillas dangerous to humans?",
        a: "Mountain gorillas are generally gentle animals that avoid humans. However, silverbacks will charge aggressively if they feel their family group is threatened. The charge is usually a bluff — trekking guides train visitors to stay calm, crouch down, and avert their eyes.",
      },
      {
        q: "Why are gorillas endangered?",
        a: "Mountain gorillas are threatened by habitat loss from agriculture and logging, disease transmission from humans (they are susceptible to our respiratory viruses), and poaching. Conservation programmes in Uganda and Rwanda have successfully reversed the population decline.",
      },
    ],
    activities: 34,
    pdfFile: "/downloads/ZooExplorers_Gorilla.pdf",
    drMayaNote:
      "I spent 14 months studying mountain gorilla social behaviour in Bwindi Impenetrable Forest, Uganda. Watching a silverback play gently with his infants — and seeing just how close their emotions are to our own — is an experience that never leaves you.",
    relatedSlugs: ["cheetah", "bottlenose-dolphin", "polar-bear"],
  },
  {
    slug: "cheetah",
    name: "Cheetah",
    emoji: "🐆",
    scientificName: "Acinonyx jubatus",
    conservationStatus: "Vulnerable",
    iucnCode: "VU",
    habitat: "Open savanna, grassland, and dry forest",
    diet: "Gazelle, impala, rabbits, and small antelope",
    dietType: "Carnivore",
    lifespan: "10–12 years (wild)",
    weight: "21–72 kg",
    continent: "Africa & Asia",
    category: "Mammal",
    description:
      "Cheetahs are the fastest land animals on Earth, accelerating from 0 to 112 km/h (70 mph) in just three seconds. Unlike other big cats, cheetahs cannot roar — instead they purr, chirp, and produce a distinctive bird-like 'chirrup' to communicate.",
    funFacts: [
      "A cheetah reaches top speed in about 3 seconds — faster than most sports cars.",
      "Cheetahs are the only big cats with non-retractable claws, giving them grip like running spikes.",
      "Their distinctive black 'tear marks' reduce glare from the sun and improve long-distance focus.",
      "Cheetahs are semi-diurnal hunters — they hunt at dawn and dusk to avoid lions and leopards.",
    ],
    faqs: [
      {
        q: "How fast can a cheetah run?",
        a: "Cheetahs can reach speeds of 112 km/h (70 mph), making them the fastest land animal on Earth. However, they can only sustain top speed for 20–30 seconds before overheating, so chases rarely last more than 300 metres.",
      },
      {
        q: "Can cheetahs roar?",
        a: "No — cheetahs cannot roar. Unlike lions, tigers, leopards, and jaguars, cheetahs lack the specialised larynx structure needed to roar. Instead they purr, chirp, yelp, and make a unique high-pitched 'chirrup' call that sounds almost like a bird.",
      },
      {
        q: "What do cheetahs eat?",
        a: "Cheetahs are carnivores that hunt small to medium-sized prey, primarily gazelles (especially Thomson's gazelle), impalas, springbok, rabbits, and hares. They hunt by sight during the day, stalking to within 60–70 m before sprinting.",
      },
      {
        q: "How many cheetahs are left in the world?",
        a: "Approximately 7,100 cheetahs remain in the wild, concentrated mainly in sub-Saharan Africa with a critically small population of fewer than 50 Asiatic cheetahs in Iran. They have been lost from 91% of their historic range.",
      },
      {
        q: "Are cheetahs endangered?",
        a: "Cheetahs are classified as Vulnerable on the IUCN Red List. Their main threats are habitat loss, human-wildlife conflict (farmers killing cheetahs that prey on livestock), and the illegal exotic pet trade, which removes cubs from the wild.",
      },
    ],
    activities: 28,
    pdfFile: "/downloads/ZooExplorers_Cheetah.pdf",
    drMayaNote:
      "Studying cheetah coalitions on the Serengeti, Tanzania, showed me how complex their social lives are. Three brothers sharing a territory hunt together and coordinate with the kind of teamwork you'd expect from animals ten times their size.",
    relatedSlugs: ["gorilla", "polar-bear", "great-white-shark"],
  },
  {
    slug: "crocodile",
    name: "Crocodile",
    emoji: "🐊",
    scientificName: "Crocodylus niloticus",
    conservationStatus: "Least Concern",
    iucnCode: "LC",
    habitat: "Rivers, lakes, and wetlands across sub-Saharan Africa",
    diet: "Fish, mammals, birds, and carrion",
    dietType: "Carnivore",
    lifespan: "70–100 years",
    weight: "225–750 kg",
    continent: "Africa",
    category: "Reptile",
    description:
      "Nile crocodiles are Africa's largest reptiles and one of the world's most powerful apex predators, with a bite force of 22,000 Newtons — the strongest recorded for any living animal. Ancient survivors whose lineage dates back 200 million years, they have changed remarkably little since the age of dinosaurs.",
    funFacts: [
      "Crocodiles have the strongest bite force of any living animal — 22,000 Newtons, vs a human's 890 N.",
      "They carry their hatchlings gently in their mouths to the water — one of the most surprising displays of parental care in the reptile world.",
      "Crocodiles cannot chew — they swallow prey whole or use the 'death roll' to tear off chunks.",
      "Their eyes, ears, and nostrils are all on top of their heads so they can sense prey while almost completely submerged.",
    ],
    faqs: [
      {
        q: "How strong is a crocodile's bite?",
        a: "The Nile crocodile has a measured bite force of approximately 22,000 Newtons (about 5,000 lbs of force) — the strongest bite of any living animal. By comparison, a great white shark bites at around 18,000 N and a human at roughly 890 N.",
      },
      {
        q: "How long do Nile crocodiles live?",
        a: "Nile crocodiles live 70–100 years in the wild, making them one of the longest-lived reptiles. The oldest verified captive crocodile lived to approximately 115 years.",
      },
      {
        q: "What do crocodiles eat?",
        a: "Nile crocodiles are apex predators that eat fish, birds, turtles, and large mammals including wildebeest, zebra, and buffalo. They are opportunistic ambush hunters, lying motionless for hours before exploding forward to seize prey at the water's edge.",
      },
      {
        q: "Are crocodiles and alligators the same animal?",
        a: "No. Crocodiles and alligators are related but distinct animals. The easiest way to tell them apart: when a crocodile's mouth is closed, the large fourth tooth on the lower jaw is still visible; in alligators it is hidden. Crocodiles also tend to be lighter in colour and have a more V-shaped snout.",
      },
      {
        q: "How fast can crocodiles move?",
        a: "In short bursts on land, Nile crocodiles can reach 12–14 km/h (8 mph). In water they are much faster swimmers, reaching up to 32 km/h (20 mph) using powerful tail strokes. Their speed on land is often underestimated.",
      },
    ],
    activities: 31,
    pdfFile: "/downloads/ZooExplorers_Crocodile.pdf",
    relatedSlugs: ["great-white-shark", "gorilla", "monarch-butterfly"],
  },
  {
    slug: "great-white-shark",
    name: "Great White Shark",
    emoji: "🦈",
    scientificName: "Carcharodon carcharias",
    conservationStatus: "Vulnerable",
    iucnCode: "VU",
    habitat: "Coastal and open ocean — all temperate and subtropical seas",
    diet: "Seals, sea lions, fish, rays, and dolphins",
    dietType: "Carnivore",
    lifespan: "70+ years",
    weight: "680–2,268 kg",
    continent: "Worldwide",
    category: "Fish",
    description:
      "Great white sharks are the world's largest predatory fish and a critical component of healthy ocean ecosystems. As apex predators, they regulate prey populations and maintain the balance of marine food webs — removing them triggers cascading damage throughout the entire ecosystem.",
    funFacts: [
      "Great white sharks can have up to 300 serrated teeth arranged in rows — when one falls out, another moves forward to replace it.",
      "They are one of the few fish that are warm-blooded, allowing them to hunt in cold water where other predators cannot.",
      "A great white can detect one drop of blood diluted in 100 litres of water from up to 5 km away.",
      "Recent tracking studies show great whites can live over 70 years — far longer than scientists previously believed.",
    ],
    faqs: [
      {
        q: "How big do great white sharks get?",
        a: "Female great white sharks are larger than males, typically measuring 4.6–6 m (15–20 ft) and weighing up to 2,268 kg (5,000 lb). The largest reliably measured great white on record was approximately 6.1 m (20 ft) long.",
      },
      {
        q: "What do great white sharks eat?",
        a: "Great white sharks eat seals, sea lions, dolphins, rays, other sharks, and large bony fish. Young great whites (under 3 m) eat mainly fish and rays; larger adults shift to marine mammals with higher fat content to fuel their large bodies.",
      },
      {
        q: "How many teeth do great white sharks have?",
        a: "Great white sharks have approximately 300 teeth at any one time, arranged in 5–7 rows. They go through up to 20,000 teeth in a lifetime — when a tooth is lost, one from the row behind moves forward within 24 hours.",
      },
      {
        q: "Are great white sharks endangered?",
        a: "Great white sharks are classified as Vulnerable on the IUCN Red List. Their global population is estimated at fewer than 3,500 individuals. They are threatened by overfishing (caught as bycatch and targeted for their fins and jaws), and their slow reproduction makes recovery extremely difficult.",
      },
      {
        q: "Do great white sharks attack humans on purpose?",
        a: "No. Great white shark attacks on humans are almost always cases of mistaken identity — a surfer seen from below resembles a seal. Sharks typically release humans after the first bite and do not return, confirming they are not targeting people as food. Fatal attacks are extremely rare.",
      },
    ],
    activities: 29,
    pdfFile: "/downloads/ZooExplorers_Great_White_Shark.pdf",
    relatedSlugs: ["crocodile", "bottlenose-dolphin", "polar-bear"],
  },
  {
    slug: "monarch-butterfly",
    name: "Monarch Butterfly",
    emoji: "🦋",
    scientificName: "Danaus plexippus",
    conservationStatus: "Endangered",
    iucnCode: "EN",
    habitat: "Meadows, fields, and milkweed habitats across North America",
    diet: "Milkweed (larvae), flower nectar (adults)",
    dietType: "Herbivore",
    lifespan: "2–6 weeks (most generations); 6–9 months (migratory generation)",
    weight: "0.25–0.75 g",
    continent: "North America",
    category: "Invertebrate",
    description:
      "Monarch butterflies undertake one of the most extraordinary migrations on Earth — up to 4,800 km (3,000 miles) from Canada and the USA to the oyamel fir forests of Michoacán, Mexico. No single individual lives long enough to complete the round trip; the return journey takes four successive generations, yet each new generation finds the same overwintering sites their ancestors used.",
    funFacts: [
      "Monarch caterpillars eat only milkweed, absorbing toxins that make both the caterpillar and adult butterfly poisonous to most predators.",
      "They navigate using a time-compensated sun compass combined with sensitivity to Earth's magnetic field.",
      "The migratory 'Methuselah generation' lives 6–9 months — up to 8 times longer than summer generations.",
      "Monarch populations have declined by approximately 80% since the 1990s due to milkweed loss and habitat destruction.",
    ],
    faqs: [
      {
        q: "How far do monarch butterflies migrate?",
        a: "Monarch butterflies migrate up to 4,800 km (3,000 miles) one way — from breeding grounds across Canada and the United States to overwintering forests in central Mexico. This is one of the longest migrations of any insect species on Earth.",
      },
      {
        q: "How do monarch butterflies know where to go?",
        a: "Monarchs navigate using a time-compensated sun compass in their antennae combined with sensitivity to Earth's magnetic field. Remarkably, no individual butterfly makes the complete round trip — the ability to find the ancestral wintering sites in Mexico appears to be genetically encoded.",
      },
      {
        q: "Are monarch butterflies poisonous?",
        a: "Yes — monarch butterflies are toxic to most predators. As caterpillars, they feed exclusively on milkweed plants, which contain cardiac glycosides (heart toxins). These toxins accumulate in the caterpillar and carry over into the adult butterfly, making the whole animal distasteful or dangerous for birds and other predators.",
      },
      {
        q: "Why are monarch butterflies endangered?",
        a: "Monarch populations have collapsed by roughly 80% since the 1990s. The main causes are: widespread loss of milkweed plants (the only plant monarchs breed on) due to herbicide use in agriculture; deforestation of their Mexican overwintering forests; and climate change disrupting migration timing.",
      },
      {
        q: "What is the difference between a monarch butterfly and a viceroy butterfly?",
        a: "Viceroy butterflies are a separate species that mimic the monarch's orange-and-black pattern to benefit from the monarch's toxic reputation with predators — a phenomenon called Batesian mimicry. Viceroys are slightly smaller and have a black line crossing the hindwing that monarchs lack.",
      },
    ],
    activities: 26,
    pdfFile: "/downloads/ZooExplorers_Monarch_Butterfly.pdf",
    relatedSlugs: ["bald-eagle", "crocodile", "gorilla"],
  },
  {
    slug: "polar-bear",
    name: "Polar Bear",
    emoji: "🐻‍❄️",
    scientificName: "Ursus maritimus",
    conservationStatus: "Vulnerable",
    iucnCode: "VU",
    habitat: "Arctic sea ice, coastal areas, and open water",
    diet: "Ringed seals and bearded seals",
    dietType: "Carnivore",
    lifespan: "20–25 years",
    weight: "350–700 kg (males)",
    continent: "Arctic",
    category: "Mammal",
    description:
      "Polar bears are the world's largest land carnivores and the apex predators of the Arctic, supremely adapted to life on sea ice. Their black skin and hollow, translucent fur trap solar heat, while a 10 cm layer of blubber insulates them in water that hovers near freezing — allowing them to swim hundreds of kilometres between ice floes.",
    funFacts: [
      "Polar bears have black skin beneath their white fur — it absorbs heat from sunlight to keep them warm.",
      "They can smell a seal's breathing hole through 1 metre of compacted snow from up to 1.6 km away.",
      "Polar bears are classified as marine mammals because they spend most of their lives at sea.",
      "A polar bear's stomach can hold up to 68 kg (150 lb) of food in a single meal.",
    ],
    faqs: [
      {
        q: "How big do polar bears get?",
        a: "Male polar bears are the largest land carnivores on Earth, typically weighing 350–700 kg (770–1,540 lb) and measuring 2.4–3 m (8–10 ft) from nose to tail. Females are roughly half the size, weighing 150–250 kg.",
      },
      {
        q: "What do polar bears eat?",
        a: "Polar bears are specialised carnivores that eat almost exclusively ringed and bearded seals. They hunt by waiting motionlessly at seal breathing holes in the ice (a technique called still-hunting) or stalking seals hauled out on the ice surface. On land during ice-free seasons they may eat berries, kelp, and carrion.",
      },
      {
        q: "Do polar bears hibernate?",
        a: "Unlike most bears, only pregnant female polar bears den and enter a form of hibernation (from November to March). Males and non-pregnant females remain active year-round. Denning females can go 7–8 months without eating, drinking, urinating, or defecating while nursing their cubs.",
      },
      {
        q: "Are polar bears endangered?",
        a: "Polar bears are classified as Vulnerable, with a global population of approximately 26,000. Climate change is their most serious threat — as Arctic sea ice melts earlier and reforms later each year, polar bears have less time on the ice to hunt seals, leading to declining body condition and cub survival.",
      },
      {
        q: "How far can polar bears swim?",
        a: "Polar bears are powerful swimmers capable of covering enormous distances. GPS tracking studies have recorded individual polar bears swimming continuously for over 9 days and covering more than 687 km (427 miles) across open water — though such long swims carry significant health costs.",
      },
    ],
    activities: 33,
    pdfFile: "/downloads/ZooExplorers_Polar_Bear.pdf",
    relatedSlugs: ["great-white-shark", "gorilla", "cheetah"],
  },
  {
    slug: "bald-eagle",
    name: "Bald Eagle",
    emoji: "🦅",
    scientificName: "Haliaeetus leucocephalus",
    conservationStatus: "Least Concern",
    iucnCode: "LC",
    habitat: "Forests near rivers, lakes, and coastlines across North America",
    diet: "Fish, waterfowl, small mammals, and carrion",
    dietType: "Carnivore",
    lifespan: "20–30 years",
    weight: "3–6.3 kg",
    continent: "North America",
    category: "Bird",
    description:
      "Bald eagles are the national symbol of the United States and one of conservation's most celebrated success stories. Once reduced to just 417 nesting pairs in the contiguous US by 1963 due to DDT pesticide poisoning, their population has recovered to over 316,000 following the 1972 ban on DDT and decades of legal protection.",
    funFacts: [
      "Bald eagles can spot a fish from a distance of 1.6 km (1 mile) — their vision is 4–8 times sharper than a human's.",
      "Their enormous nests (called eyries) are added to each year and can eventually weigh over a tonne.",
      "The white head and tail feathers of a bald eagle don't appear until the bird is 4–5 years old.",
      "During courtship, two bald eagles lock talons in mid-air and cartwheel toward the ground, releasing just before impact.",
    ],
    faqs: [
      {
        q: "Why is the bald eagle the symbol of the United States?",
        a: "The bald eagle was chosen as the US national symbol in 1782 because it was seen as a bird of strength, long life, and majesty native to North America. It appears on the Great Seal of the United States and is featured on passports, currency, and official documents.",
      },
      {
        q: "What do bald eagles eat?",
        a: "Bald eagles are primarily fish eaters — they snatch fish from the water surface using their taloned feet. They also eat waterfowl, small mammals (rabbits, squirrels), and carrion, and will steal prey from ospreys and other birds. Fish typically makes up 60–90% of their diet where available.",
      },
      {
        q: "How fast do bald eagles fly?",
        a: "Bald eagles soar at 56–70 km/h (35–43 mph) in level flight. When diving (stooping) on prey, they can reach speeds of 120–160 km/h (75–100 mph). Their wingspans range from 1.8 to 2.3 m (6–7.5 ft).",
      },
      {
        q: "How did bald eagles recover from near-extinction?",
        a: "By 1963, only 417 nesting pairs remained in the lower 48 states due to DDT pesticide thinning their eggshells. Recovery came through the 1972 DDT ban, the 1973 Endangered Species Act, captive breeding, and nest protection programmes. By 2007 they were removed from the endangered species list.",
      },
      {
        q: "Do bald eagles mate for life?",
        a: "Yes — bald eagles are generally monogamous and mate for life. They return to the same nest each year, adding new material each breeding season. If one partner dies, the surviving eagle will typically find a new mate.",
      },
    ],
    activities: 27,
    relatedSlugs: ["monarch-butterfly", "polar-bear", "bottlenose-dolphin"],
  },
  {
    slug: "bottlenose-dolphin",
    name: "Bottlenose Dolphin",
    emoji: "🐬",
    scientificName: "Tursiops truncatus",
    conservationStatus: "Least Concern",
    iucnCode: "LC",
    habitat: "Tropical and temperate oceans and coastal waters worldwide",
    diet: "Fish, squid, and shrimp",
    dietType: "Carnivore",
    lifespan: "40–50 years",
    weight: "150–650 kg",
    continent: "Worldwide",
    category: "Mammal",
    description:
      "Bottlenose dolphins are among the most intelligent animals on Earth, capable of complex problem-solving, self-recognition in mirrors, and sophisticated communication through signature whistles unique to each individual — effectively a personal name used by other dolphins to call out to them specifically.",
    funFacts: [
      "Every bottlenose dolphin develops a unique signature whistle within its first year — other dolphins use it to call that individual by 'name'.",
      "Dolphins sleep with one half of their brain at a time, keeping the other half alert for predators and to control breathing.",
      "They use echolocation — clicking sounds that bounce off objects — to navigate and hunt in murky water with extraordinary precision.",
      "Dolphins have been observed teaching their young to use sponges as tools to protect their snouts while foraging on the seafloor.",
    ],
    faqs: [
      {
        q: "How smart are bottlenose dolphins?",
        a: "Bottlenose dolphins rank among the most intelligent non-human animals. They pass the mirror self-recognition test, use tools, solve multi-step problems, understand pointing gestures, learn artificial languages, and have distinct cultures and traditions within populations. Their brain-to-body ratio is second only to humans.",
      },
      {
        q: "Do dolphins sleep?",
        a: "Yes, but not like humans. Dolphins practise unihemispheric sleep — they rest one hemisphere of the brain at a time while the other stays awake to control breathing and watch for threats. During this state (called logging) they float slowly at the surface with one eye open.",
      },
      {
        q: "What do bottlenose dolphins eat?",
        a: "Bottlenose dolphins eat fish (mullet, mackerel, herring), squid, and crustaceans. An adult dolphin consumes 5–8% of its body weight in food each day — around 8–15 kg. They often hunt cooperatively, herding fish into tight balls near the surface before taking turns feeding through them.",
      },
      {
        q: "How fast can dolphins swim?",
        a: "Bottlenose dolphins typically cruise at 5–11 km/h (3–7 mph) but can sprint at up to 35 km/h (22 mph) for short bursts. They often bow-ride in front of boats and ships, using the vessel's pressure wave to travel faster for free.",
      },
      {
        q: "Are dolphins endangered?",
        a: "Common bottlenose dolphins (Tursiops truncatus) are classified as Least Concern globally, though some regional populations face threats from fishing bycatch, pollution, boat strikes, and noise pollution from shipping. The Māui dolphin — a related species in New Zealand — is Critically Endangered with fewer than 50 individuals.",
      },
    ],
    activities: 30,
    pdfFile: "/downloads/ZooExplorers_Bottlenose_Dolphin.pdf",
    relatedSlugs: ["great-white-shark", "polar-bear", "bald-eagle"],
  },
  {
    slug: "white-rhino",
    name: "White Rhino",
    emoji: "🦏",
    scientificName: "Ceratotherium simum",
    conservationStatus: "Near Threatened",
    iucnCode: "NT",
    habitat: "Open grassland and savanna, sub-Saharan Africa",
    diet: "Grasses",
    dietType: "Herbivore",
    lifespan: "40–50 years",
    weight: "1,800–2,700 kg",
    continent: "Africa",
    category: "Mammal",
    description:
      "White rhinoceroses are the largest of the five living rhino species and the second-largest land mammals after elephants. Their name comes not from their colour — they are grey — but likely from the Afrikaans word 'wyd' (wide), describing their broad, square lip perfectly adapted for grazing grass.",
    funFacts: [
      "A rhino's horn is made entirely of keratin — the same protein as human hair and fingernails — not bone.",
      "White rhinos are the largest land animals after elephants, with males weighing up to 2,700 kg (5,950 lb).",
      "They communicate through a complex vocabulary of squeals, snorts, and growls, and leave dung middens as territorial markers.",
      "The northern white rhino subspecies is functionally extinct — only two females remain alive, both in captivity in Kenya.",
    ],
    faqs: [
      {
        q: "Why is rhino horn so valuable — and is it really worth it?",
        a: "Rhino horn commands extremely high prices on illegal black markets (sometimes exceeding $60,000 per kg) due to demand in parts of Asia where it is falsely believed to have medicinal properties. Scientifically, rhino horn has no proven medicinal value — it is composed of keratin, identical to a human fingernail.",
      },
      {
        q: "What do white rhinos eat?",
        a: "White rhinos are grazers — they eat exclusively grasses, which they crop close to the ground using their wide, square upper lip. A large adult white rhino can consume up to 120 kg (265 lb) of grass per day and needs to drink water at least every 2–4 days.",
      },
      {
        q: "What is the difference between a white rhino and a black rhino?",
        a: "Despite their names, both species are grey. White rhinos have a wide, square upper lip for grazing grass; black rhinos have a hooked, pointed upper lip for browsing leaves and shrubs. White rhinos are also significantly larger and more sociable, while black rhinos are smaller and more solitary.",
      },
      {
        q: "Are white rhinos endangered?",
        a: "The southern white rhino subspecies is classified as Near Threatened, having recovered from near-extinction (fewer than 50 individuals in the early 1900s) to approximately 17,000 today — conservation's greatest large-mammal recovery. However, the northern white rhino subspecies is functionally extinct, with only two females surviving.",
      },
      {
        q: "How fast can a rhino run?",
        a: "Despite their massive size, white rhinos can run at up to 50 km/h (31 mph) for short distances. They have poor eyesight but excellent hearing and a powerful sense of smell — they can detect a human scent from over 800 metres away.",
      },
    ],
    activities: 32,
    pdfFile: "/downloads/ZooExplorers_White_Rhino.pdf",
    relatedSlugs: ["gorilla", "cheetah", "bottlenose-dolphin"],
  },
];

export function getAnimal(slug: string): AnimalData | undefined {
  return animals.find((a) => a.slug === slug);
}

export const STATUS_COLOURS: Record<IucnCode, { bg: string; text: string; label: string }> = {
  LC: { bg: "bg-green-100",  text: "text-green-800",  label: "Least Concern" },
  NT: { bg: "bg-lime-100",   text: "text-lime-800",   label: "Near Threatened" },
  VU: { bg: "bg-yellow-100", text: "text-yellow-800", label: "Vulnerable" },
  EN: { bg: "bg-orange-100", text: "text-orange-800", label: "Endangered" },
  CR: { bg: "bg-red-100",    text: "text-red-800",    label: "Critically Endangered" },
  DD: { bg: "bg-gray-100",   text: "text-gray-700",   label: "Data Deficient" },
};
