"""
Zoo Printables AI — Education Pack Generator v5
One PDF per animal.
Pages: Cover | Fact Sheet | Coloring Page | Activities
Usage: python generate_packs.py gorilla cheetah ...
"""

import sys, os, random, string, urllib.request
from reportlab.lib.pagesizes import A4
from reportlab.lib import colors
from reportlab.lib.units import cm
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle,
    HRFlowable, PageBreak
)
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.enums import TA_CENTER, TA_JUSTIFY
from reportlab.pdfgen import canvas as pdfcanvas

W, H = A4

# ── Palette ───────────────────────────────────────────────────────────────────
DARK_GREEN  = colors.HexColor("#1B4332")
MID_GREEN   = colors.HexColor("#2D6A4F")
LEAF_GREEN  = colors.HexColor("#52B788")
LIGHT_GREEN = colors.HexColor("#D8F3DC")
YELLOW      = colors.HexColor("#FFD166")
ORANGE      = colors.HexColor("#F4A261")
CREAM       = colors.HexColor("#FFFBF0")
DARK_GREY   = colors.HexColor("#2B2D42")
MID_GREY    = colors.HexColor("#5C6070")
RED_ACCENT  = colors.HexColor("#E63946")
BLUE_ACCENT = colors.HexColor("#4CC9F0")
NAVY        = colors.HexColor("#0A3D62")
OCEAN       = colors.HexColor("#AED9E0")
LAND        = colors.HexColor("#B7D7A8")

STATUS_COLORS = {
    "Critically Endangered": RED_ACCENT,
    "Endangered":            ORANGE,
    "Vulnerable":            YELLOW,
    "Near Threatened":       BLUE_ACCENT,
}

# ── Animal Data ───────────────────────────────────────────────────────────────
ANIMALS = {

    "bottlenose_dolphin": {
        "name": "Bottlenose Dolphin",
        "emoji": "🐬",
        "scientific": "Tursiops truncatus",
        "status": "Least Concern",
        "habitat": "Coastal bays, estuaries, and open oceans in tropical and temperate waters worldwide",
        "diet": "Carnivore — fish, squid, shrimp, and crabs",
        "weight": "150–650 kg",
        "height": "2–4 m length",
        "lifespan": "40–60 years in the wild",
        "population": "Hundreds of thousands; common worldwide",
        "region": "All oceans — from tropical to sub-polar waters",
        "threats": [
            "Bycatch — accidental entanglement in fishing nets",
            "Ocean pollution including plastic and chemical runoff",
            "Boat strikes and underwater noise disturbance",
            "Habitat degradation from coastal development",
        ],
        "fun_facts": [
            "Bottlenose dolphins use echolocation — they send out clicks and listen to echoes to find fish in murky water.",
            "They are one of the few animals to use tools: some dolphins wear sea sponges on their snouts to protect them while foraging on the seafloor.",
            "Dolphins sleep with one eye open — they rest half their brain at a time so they can keep breathing.",
            "A group of dolphins is called a pod, and can include up to 1,000 members!",
            "Dolphins can swim at up to 35 km/h and leap 6 metres into the air.",
            "They have been observed grieving their dead and passing cultural behaviours from mother to calf across generations.",
        ],
        "ecosystem_role": (
            "Bottlenose dolphins help maintain healthy fish populations and are important indicators of ocean health. "
            "As top predators, their presence signals a thriving marine ecosystem."
        ),
        "conservation_orgs": [
            ("Whale and Dolphin Conservation", "us.whales.org"),
            ("Ocean Alliance", "oceanalliance.org"),
            ("WWF Marine Programme", "wwf.org"),
            ("NOAA Fisheries", "fisheries.noaa.gov"),
        ],
        "word_search_words": ["DOLPHIN", "OCEAN", "ECHOLOCATION", "POD",
                               "MAMMAL", "FINS", "SONAR", "BLOWHOLE"],
        "matching_pairs": [
            ("Bottlenose Dolphin", "uses echolocation"),
            ("Pod",                "group of dolphins"),
            ("Echolocation",       "finding food by sound"),
            ("Bycatch",            "accidental net capture"),
            ("Marine mammal",      "breathes air in the ocean"),
        ],
        "fill_in_blanks": [
            ("Dolphins find food using ________, a kind of natural sonar.",  "echolocation"),
            ("A group of dolphins is called a ________.",                    "pod"),
            ("Dolphins breathe through a ________ on top of their head.",    "blowhole"),
            ("The biggest fishing threat to dolphins is ________.",          "bycatch"),
        ],
        "coloring_tip": "Bottlenose dolphins are grey on top and paler on the belly — leave the tummy nearly white!",
    },

    "cheetah": {
        "name": "Cheetah",
        "emoji": "🐆",
        "scientific": "Acinonyx jubatus",
        "status": "Vulnerable",
        "habitat": "Open grasslands and bushy areas in parts of Africa and the Middle East",
        "diet": "Carnivore — gazelles, impalas, wildebeest calves, hares",
        "weight": "21–65 kg",
        "height": "67–94 cm at shoulder",
        "lifespan": "10–12 years in the wild",
        "population": "Around 7,000 remaining in the wild",
        "region": "Sub-Saharan Africa; small population in Iran",
        "threats": [
            "Habitat loss — cheetahs need large territories and suffer from land conversion",
            "Human–wildlife conflict — farmers kill cheetahs to protect livestock",
            "Illegal wildlife trade — cubs are taken to sell as exotic pets",
            "Low genetic diversity making the species fragile",
        ],
        "fun_facts": [
            "The cheetah is the fastest land animal on Earth, reaching 112 km/h in just 3 seconds.",
            "Unlike other big cats, cheetahs cannot roar — instead they chirp, purr, and bark.",
            "They have solid black spots (not rosettes) and distinctive black 'tear stripes' under each eye.",
            "A cheetah's claws are semi-retractable — like running spikes — giving extra grip at top speed.",
            "After a high-speed chase, a cheetah must rest for 30 minutes before it can eat.",
            "Cheetahs are the only big cat that can turn mid-air at full speed using its tail as a rudder.",
        ],
        "ecosystem_role": (
            "As mid-level predators on the African savanna, cheetahs control populations of gazelles and impalas, "
            "preventing overgrazing and maintaining diverse plant and animal communities."
        ),
        "conservation_orgs": [
            ("Cheetah Conservation Fund", "cheetah.org"),
            ("Wildlife Conservation Society", "wcs.org"),
            ("WWF Cheetah Programme", "wwf.org"),
            ("African Wildlife Foundation", "awf.org"),
        ],
        "word_search_words": ["CHEETAH", "SPRINT", "SAVANNA", "VULNERABLE",
                               "SPOTS", "AFRICA", "PREDATOR", "SPEED"],
        "matching_pairs": [
            ("Cheetah",       "world's fastest land animal"),
            ("Tear stripes",  "black lines under the eyes"),
            ("Savanna",       "open grassy African landscape"),
            ("Conservation",  "work to protect wildlife"),
            ("Poaching",      "illegal capture for the pet trade"),
        ],
        "fill_in_blanks": [
            ("The cheetah can reach ________ km/h over short distances.",    "112"),
            ("Cheetahs have solid black ________ on their fur.",             "spots"),
            ("Unlike other big cats, cheetahs cannot ________.",             "roar"),
            ("Cheetahs are found mainly in ________ Africa.",                "Sub-Saharan"),
        ],
        "coloring_tip": "Cheetahs are tawny yellow with solid black spots. Their underside is white; two solid black 'tear stripes' run from eye to mouth.",
    },

    "crocodile": {
        "name": "Crocodile",
        "emoji": "🐊",
        "scientific": "Crocodylus niloticus",
        "status": "Least Concern",
        "habitat": "Freshwater rivers, lakes, marshes, and estuaries across Sub-Saharan Africa",
        "diet": "Carnivore — fish, mammals (wildebeest, zebra), birds, and reptiles; an ambush predator",
        "weight": "220–750 kg",
        "height": "3.5–5 m length",
        "lifespan": "70–100 years in the wild",
        "population": "Around 250,000–500,000 Nile crocodiles worldwide",
        "region": "Sub-Saharan Africa and Madagascar",
        "threats": [
            "Hunting for skin, meat, and traditional medicine",
            "Habitat loss from agriculture and dam construction",
            "Pollution of rivers and wetlands",
            "Human–crocodile conflict near rivers and settlements",
        ],
        "fun_facts": [
            "Crocodiles have been on Earth for over 200 million years — they outlived the dinosaurs!",
            "They have the most powerful bite of any living animal (force of 16,000 N), yet cannot chew — they swallow prey whole or spin to tear chunks off.",
            "Crocodiles bask with their mouths open to cool down — not because they are yawning!",
            "Female crocodiles are attentive mothers — they carry hatchlings gently in their mouths to the water.",
            "They can slow their metabolism so much that they can survive months without eating after a big meal.",
            "Crocodile teeth are hollow and replaced continuously — they can go through 50 sets in a lifetime!",
        ],
        "ecosystem_role": (
            "Nile crocodiles are apex predators that control prey populations and cycle nutrients through ecosystems. "
            "Their basking holes provide vital water for other wildlife during dry seasons."
        ),
        "conservation_orgs": [
            ("IUCN Crocodile Specialist Group", "iucncsg.org"),
            ("WWF Africa", "wwf.org"),
            ("African Wildlife Foundation", "awf.org"),
            ("Wildlife Conservation Society", "wcs.org"),
        ],
        "word_search_words": ["CROCODILE", "REPTILE", "AMBUSH", "NILE",
                               "TEETH", "AFRICA", "SCALES", "WETLAND"],
        "matching_pairs": [
            ("Crocodile",  "has survived 200 million years"),
            ("Nile",       "Africa's longest river"),
            ("Ambush",     "waiting quietly to catch prey"),
            ("Basking",    "warming up in the sun"),
            ("Hatchling",  "a baby crocodile"),
        ],
        "fill_in_blanks": [
            ("Crocodiles have been on Earth for over ________ million years.", "200"),
            ("Female crocodiles carry their babies in their ________.",        "mouths"),
            ("The Nile crocodile is found in ________ Africa.",               "Sub-Saharan"),
            ("Crocodiles are ________ predators — they wait then strike.",    "ambush"),
        ],
        "coloring_tip": "Crocodiles are dark olive-green to brown on top with a lighter yellow-cream underside. Their armoured skin forms raised bumpy scutes.",
    },

    "gorilla": {
        "name": "Gorilla",
        "emoji": "🦍",
        "scientific": "Gorilla beringei / Gorilla gorilla",
        "status": "Critically Endangered",
        "habitat": "Tropical rainforests and mountain forests of Central Africa",
        "diet": "Herbivore — leaves, stems, fruit, bark, and roots",
        "weight": "135–220 kg (male), 70–90 kg (female)",
        "height": "Up to 1.8 m standing",
        "lifespan": "35–40 years in the wild",
        "population": "Fewer than 1,100 mountain gorillas; around 100,000 western lowland gorillas",
        "region": "DR Congo, Uganda, Rwanda, Cameroon, Gabon, Equatorial Guinea",
        "threats": [
            "Habitat loss and deforestation",
            "Poaching for bushmeat and illegal pet trade",
            "Disease — gorillas catch human respiratory illnesses",
            "Civil conflict in their range countries limiting conservation",
        ],
        "fun_facts": [
            "Gorillas share 98.3% of their DNA with humans — our closest relatives after chimpanzees!",
            "A silverback's back hair turns silver-grey between ages 11 and 13.",
            "Gorillas build a brand new sleeping nest from branches every single night.",
            "Mountain gorillas wander a home range of up to 39 km² — roughly the size of 5,000 football pitches.",
            "Baby gorillas ride on their mother's back — just like a piggyback ride!",
            "Mountain gorilla numbers have increased from 620 in 1989 to over 1,100 today — a real conservation success!",
        ],
        "ecosystem_role": (
            "Gorillas are critical seed dispersers. As they move through the forest eating fruit, "
            "they deposit seeds far from the parent tree, enabling forest regeneration across wide areas. "
            "Without gorillas, certain tree species fail to reproduce, reducing biodiversity."
        ),
        "conservation_orgs": [
            ("Dian Fossey Gorilla Fund", "fossey.org"),
            ("WWF Mountain Gorilla Programme", "wwf.org"),
            ("African Wildlife Foundation", "awf.org"),
            ("Gorilla Doctors", "gorilladoctors.org"),
        ],
        "word_search_words": ["GORILLA", "SILVERBACK", "RAINFOREST", "ENDANGERED",
                               "AFRICA", "PRIMATE", "HABITAT", "CONSERVATION"],
        "matching_pairs": [
            ("Gorilla",     "eats leaves and fruit"),
            ("Silverback",  "leader of the gorilla troop"),
            ("Baby gorilla","rides on mum's back"),
            ("Rainforest",  "where gorillas live"),
            ("Poaching",    "a danger to gorillas"),
        ],
        "fill_in_blanks": [
            ("Gorillas live in ________ in Central Africa.",              "rainforests"),
            ("A male gorilla leader is called a ________.",               "Silverback"),
            ("Gorillas share ____% of their DNA with humans.",            "98.3"),
            ("Mountain gorillas are ________ Endangered.",                "Critically"),
        ],
        "coloring_tip": "Gorillas have black fur. Adult male silverbacks have a grey or silver patch on their back. Their faces are bare with dark skin.",
    },

    "great_white_shark": {
        "name": "Great White Shark",
        "emoji": "🦈",
        "scientific": "Carcharodon carcharias",
        "status": "Vulnerable",
        "habitat": "Coastal and offshore temperate and subtropical oceans worldwide",
        "diet": "Carnivore — seals, sea lions, fish, rays, dolphins, and sea turtles",
        "weight": "520–2,268 kg",
        "height": "4–6 m length (females are larger than males)",
        "lifespan": "70+ years in the wild",
        "population": "Estimated 3,500 worldwide",
        "region": "All oceans — concentrated near South Africa, Australia, and California",
        "threats": [
            "Overfishing and accidental bycatch in longline fisheries",
            "Shark finning — fins removed illegally for soup",
            "Boat strikes and gear entanglement",
            "Prey depletion reducing available food",
        ],
        "fun_facts": [
            "Great white sharks can detect a single drop of blood in 100 litres of water using their extraordinary sense of smell.",
            "They have up to 300 serrated teeth in 5 rows — and can replace a lost tooth within 24 hours!",
            "Great whites can 'spy-hop' — lifting their head above water to look for prey on the surface.",
            "They are partially warm-blooded — they can raise their body temperature to swim faster in cold water.",
            "A great white can go up to 3 months without eating after a very large meal.",
            "Despite their reputation, sharks kill fewer than 10 people worldwide per year — humans kill around 100 million sharks.",
        ],
        "ecosystem_role": (
            "Great white sharks are apex predators that regulate marine food webs. By controlling seal and fish populations, "
            "they keep ocean ecosystems balanced, healthy, and diverse."
        ),
        "conservation_orgs": [
            ("Shark Trust", "sharktrust.org"),
            ("OCEARCH", "ocearch.org"),
            ("WWF Oceans", "wwf.org"),
            ("Save Our Seas Foundation", "saveourseas.com"),
        ],
        "word_search_words": ["SHARK", "OCEAN", "PREDATOR", "TEETH",
                               "FINS", "VULNERABLE", "SWIM", "JAWS"],
        "matching_pairs": [
            ("Great White Shark", "apex ocean predator"),
            ("Serrated teeth",    "replaced throughout life"),
            ("Finning",           "illegal removal of shark fins"),
            ("Spy-hop",           "lifting head above water"),
            ("Bycatch",           "accidentally caught in nets"),
        ],
        "fill_in_blanks": [
            ("Great white sharks can have up to ________ teeth at once.",     "300"),
            ("They are partially warm-blooded, called ________.",             "endothermic"),
            ("There are only an estimated ________ great white sharks left.", "3,500"),
            ("Great whites are listed as ________ on the IUCN Red List.",    "Vulnerable"),
        ],
        "coloring_tip": "Great white sharks are grey-blue on top and white on the bottom. This counter-shading makes them nearly invisible from above or below.",
    },

    "monarch_butterfly": {
        "name": "Monarch Butterfly",
        "emoji": "🦋",
        "scientific": "Danaus plexippus",
        "status": "Endangered",
        "habitat": "Meadows, fields, and milkweed patches across North America; overwinters in oyamel fir forests of Mexico",
        "diet": "Nectar from wildflowers (adults); milkweed leaves only (caterpillars)",
        "weight": "0.5 grams",
        "height": "8.9–10.2 cm wingspan",
        "lifespan": "2–6 weeks (summer adults); 6–9 months (migratory generation)",
        "population": "Declined from ~1 billion to under 300 million since the 1980s",
        "region": "North America — breeds from Canada to Mexico; overwinters in Michoacan, Mexico",
        "threats": [
            "Loss of milkweed habitat from herbicide use and land conversion",
            "Deforestation of overwintering forests in Mexico",
            "Climate change disrupting migration timing and weather patterns",
            "Pesticide use killing butterflies and their food plants",
        ],
        "fun_facts": [
            "Monarch butterflies migrate up to 4,800 km from Canada to Mexico — one of the longest insect migrations on Earth!",
            "No single butterfly completes the full round trip — it takes 3 to 4 generations to complete the journey.",
            "Monarchs are toxic to predators — they absorb poison from milkweed plants that their caterpillars eat.",
            "Their striking orange-and-black colours warn predators: 'I taste terrible — do not eat me!'",
            "Scientists still don't fully understand how monarchs navigate using the sun, magnetic fields, and polarised light.",
            "A cluster of monarchs roosting together in trees is called a 'roost' — some contain millions of butterflies!",
        ],
        "ecosystem_role": (
            "Monarch butterflies are important pollinators, helping wildflowers reproduce as they travel. "
            "Their presence indicates healthy meadow ecosystems and abundant milkweed."
        ),
        "conservation_orgs": [
            ("Monarch Watch", "monarchwatch.org"),
            ("Xerces Society", "xerces.org"),
            ("WWF Monarch Programme", "wwf.org"),
            ("Journey North", "journeynorth.org"),
        ],
        "word_search_words": ["MONARCH", "BUTTERFLY", "MIGRATE", "MILKWEED",
                               "MEXICO", "ORANGE", "POLLINATE", "CATERPILLAR"],
        "matching_pairs": [
            ("Monarch Butterfly",  "makes an epic migration"),
            ("Milkweed",           "the only plant caterpillars eat"),
            ("Migration",          "a long seasonal journey"),
            ("Pollinator",         "carries pollen between flowers"),
            ("Chrysalis",          "the butterfly's transformation stage"),
        ],
        "fill_in_blanks": [
            ("Monarchs migrate up to ________ km from Canada to Mexico.", "4,800"),
            ("Caterpillars only eat ________ leaves to survive.",         "milkweed"),
            ("Their orange colour warns predators that they are ________.", "toxic"),
            ("It takes ________ generations to complete the full migration.", "3 to 4"),
        ],
        "coloring_tip": "Monarch butterflies are bright orange with bold black borders and veins, and rows of white spots around the wing edges.",
    },

    "polar_bear": {
        "name": "Polar Bear",
        "emoji": "🐻",
        "scientific": "Ursus maritimus",
        "status": "Vulnerable",
        "habitat": "Arctic sea ice, coastlines, and open water of the Arctic Ocean",
        "diet": "Carnivore — primarily ringed and bearded seals; occasionally fish, birds, and vegetation",
        "weight": "350–700 kg (male), 150–250 kg (female)",
        "height": "Up to 3 m standing; 1.3 m at shoulder",
        "lifespan": "25–30 years in the wild",
        "population": "Around 26,000 worldwide across 19 subpopulations",
        "region": "Arctic — Canada, Russia, Norway (Svalbard), Greenland, and USA (Alaska)",
        "threats": [
            "Climate change — melting sea ice reduces their hunting grounds",
            "Pollution — industrial chemicals accumulate in their fat",
            "Oil and gas development in fragile Arctic habitats",
            "Increased human encounters as ice retreats toward shore",
        ],
        "fun_facts": [
            "Polar bear fur is actually transparent — each hair is a hollow tube that scatters light to appear white!",
            "Their skin underneath is black to absorb as much heat from the sun as possible.",
            "Polar bears can swim continuously for days — one was tracked swimming 687 km over 9 days.",
            "They hunt almost entirely on sea ice, waiting motionless at seal breathing holes for hours.",
            "A polar bear's paws are enormous — up to 30 cm across — acting like snowshoes on thin ice.",
            "Females den under the snow for months in winter, giving birth to tiny cubs weighing just 600 g.",
        ],
        "ecosystem_role": (
            "Polar bears are the apex predators of Arctic marine ecosystems. They control seal populations and "
            "cycle nutrients between ocean and land when they drag prey ashore, feeding foxes, ravens, and other scavengers."
        ),
        "conservation_orgs": [
            ("Polar Bears International", "polarbearsinternational.org"),
            ("WWF Arctic Programme", "wwf.org"),
            ("IUCN Polar Bear Specialist Group", "iucn.org"),
            ("World Animal Protection", "worldanimalprotection.org"),
        ],
        "word_search_words": ["POLAR", "ARCTIC", "ICEBERG", "SEAL",
                               "CLIMATE", "SWIMMING", "TUNDRA", "BEAR"],
        "matching_pairs": [
            ("Polar Bear",    "Arctic's top predator"),
            ("Sea ice",       "polar bear's hunting platform"),
            ("Climate change","melting the polar bears' home"),
            ("Seal",          "the polar bear's main prey"),
            ("Den",           "where female bears give birth"),
        ],
        "fill_in_blanks": [
            ("Polar bear fur is actually ________, not white.",            "transparent"),
            ("Their skin is ________ to absorb heat from the sun.",        "black"),
            ("The biggest threat to polar bears is ________ change.",      "climate"),
            ("There are around ________ polar bears left in the wild.",    "26,000"),
        ],
        "coloring_tip": "Polar bears appear white or creamy yellow. Their large black nose and dark eyes stand out against the bright Arctic fur.",
    },

    "white_rhino": {
        "name": "White Rhino",
        "emoji": "🦏",
        "scientific": "Ceratotherium simum",
        "status": "Near Threatened",
        "habitat": "Grasslands, savannas, and bushveld of southern and east Africa",
        "diet": "Herbivore (grazer) — grass almost exclusively; up to 50 kg of grass per day",
        "weight": "1,500–2,300 kg",
        "height": "1.5–1.85 m at shoulder",
        "lifespan": "40–50 years in the wild",
        "population": "Around 17,000–20,000 (Southern subspecies); only 2 females remain of Northern subspecies",
        "region": "South Africa, Namibia, Zimbabwe, Kenya, Uganda",
        "threats": [
            "Poaching for horn — worth more by weight than gold on illegal black markets",
            "Habitat loss from agriculture and human settlement expansion",
            "Northern White Rhino effectively extinct — only 2 females remain on Earth",
            "Political instability in range countries limiting anti-poaching efforts",
        ],
        "fun_facts": [
            "Despite the name, white rhinos are not white — 'white' comes from the Afrikaans word 'wyd' (wide), describing their wide square lip for grazing.",
            "Rhino horn is made of keratin — the exact same protein as your fingernails — not bone or ivory.",
            "A group of rhinos is called a 'crash'!",
            "Rhinos have poor eyesight but an extraordinary sense of smell — they can detect water from kilometres away.",
            "The Southern White Rhino is one of conservation's greatest success stories — saved from just 50 animals in 1895 to 20,000 today!",
            "Oxpecker birds hitch rides on rhinos, eating ticks and parasites — a perfect partnership for both animals.",
        ],
        "ecosystem_role": (
            "White rhinos are 'ecosystem engineers' — their close grazing creates short-grass lawns that dozens of other species rely on. "
            "Their dung piles fertilise grasslands and serve as communication posts for other wildlife."
        ),
        "conservation_orgs": [
            ("Save the Rhino International", "savetherhino.org"),
            ("WWF Rhino Programme", "wwf.org"),
            ("African Wildlife Foundation", "awf.org"),
            ("Rhino Conservation Botswana", "rhinoconservationbotswana.org"),
        ],
        "word_search_words": ["RHINO", "HORN", "SAVANNA", "POACHING",
                               "AFRICA", "GRAZER", "KERATIN", "CRASH"],
        "matching_pairs": [
            ("White Rhino",  "grazer with a wide square lip"),
            ("Horn",         "made of keratin, like fingernails"),
            ("Crash",        "a group of rhinos"),
            ("Poaching",     "illegal hunting for the horn"),
            ("Oxpecker",     "a bird that eats ticks off rhinos"),
        ],
        "fill_in_blanks": [
            ("Rhino horn is made of ________, the same as fingernails.", "keratin"),
            ("A group of rhinos is called a ________.",                  "crash"),
            ("White rhinos are ________ — they eat mostly grass.",       "grazers"),
            ("There are only ________ Northern White Rhinos left.",      "2"),
        ],
        "coloring_tip": "White rhinos are actually grey with very thick, deeply wrinkled skin. Their wide square lip and two horns (front horn larger) are distinctive.",
    },
}

# ── Word Search Generator ────────────────────────────────────────────────────
def generate_word_search(words, size=12):
    grid = [["." for _ in range(size)] for _ in range(size)]
    placed = []
    directions = [(0,1),(1,0),(1,1),(-1,1)]
    for word in words:
        w = word.upper().replace(" ","")
        done = False
        for _ in range(200):
            dr, dc = random.choice(directions)
            if dr==0:
                sr=random.randint(0,size-1); sc_=random.randint(0,size-len(w)) if dc>0 else random.randint(len(w)-1,size-1)
            elif dc==0:
                sr=random.randint(0,size-len(w)); sc_=random.randint(0,size-1)
            else:
                sr=random.randint(0,size-len(w)) if dr>0 else random.randint(len(w)-1,size-1)
                sc_=random.randint(0,size-len(w)) if dc>0 else random.randint(len(w)-1,size-1)
            ok=True
            for i,ch in enumerate(w):
                r,c=sr+i*dr,sc_+i*dc
                if not(0<=r<size and 0<=c<size): ok=False; break
                if grid[r][c] not in(".",ch): ok=False; break
            if ok:
                for i,ch in enumerate(w): grid[sr+i*dr][sc_+i*dc]=ch
                placed.append(word); done=True; break
        if not done: placed.append(word)
    for r in range(size):
        for c in range(size):
            if grid[r][c]==".": grid[r][c]=random.choice(string.ascii_uppercase)
    return grid, placed


# ═══════════════════════════════════════════════════════════════════════════════
#  Animal Outline Drawings (fallback if no coloring image found)
# ═══════════════════════════════════════════════════════════════════════════════

def draw_gorilla_outline(c, cx, cy, sc=1.0):
    c.setLineWidth(2.8); c.setStrokeColor(colors.black); c.setFillColor(colors.white)
    c.ellipse(cx-3.2*cm*sc,cy-3.8*cm*sc,cx+3.2*cm*sc,cy+0.3*cm*sc,fill=1,stroke=1)
    c.circle(cx,cy+2.4*cm*sc,2.1*cm*sc,fill=1,stroke=1)
    c.setLineWidth(2)
    c.line(cx-3.2*cm*sc,cy-1.5*cm*sc,cx-5.5*cm*sc,cy+0.5*cm*sc)
    c.line(cx+3.2*cm*sc,cy-1.5*cm*sc,cx+5.5*cm*sc,cy+0.5*cm*sc)
    c.line(cx-1.5*cm*sc,cy-3.8*cm*sc,cx-2*cm*sc,cy-6.5*cm*sc)
    c.line(cx+1.5*cm*sc,cy-3.8*cm*sc,cx+2*cm*sc,cy-6.5*cm*sc)
    c.circle(cx,cy+2.4*cm*sc,1.0*cm*sc,fill=0,stroke=1)
    c.circle(cx-0.6*cm*sc,cy+2.7*cm*sc,0.25*cm*sc,fill=1,stroke=0)
    c.circle(cx+0.6*cm*sc,cy+2.7*cm*sc,0.25*cm*sc,fill=1,stroke=0)

def draw_cheetah_outline(c, cx, cy, sc=1.0):
    c.setLineWidth(2.5); c.setStrokeColor(colors.black); c.setFillColor(colors.white)
    c.ellipse(cx-4.5*cm*sc,cy-1.5*cm*sc,cx+2.5*cm*sc,cy+1.5*cm*sc,fill=1,stroke=1)
    c.circle(cx+3.5*cm*sc,cy+1.0*cm*sc,1.6*cm*sc,fill=1,stroke=1)
    for lx,ly in [(-4.5,0),(-3.5,-1.5),(-2.5,-1.5),(-1.5,-1.5)]:
        c.line(cx+lx*cm*sc,cy+ly*cm*sc,cx+lx*cm*sc,cy-3.5*cm*sc)
    c.bezier(cx-4.5*cm*sc,cy,cx-6*cm*sc,cy+0.5*cm*sc,cx-7*cm*sc,cy-1*cm*sc,cx-7.5*cm*sc,cy-1.5*cm*sc)
    c.setFillColor(colors.black)
    c.circle(cx+3.5*cm*sc,cy+1.3*cm*sc,0.18*cm*sc,fill=1,stroke=0)
    c.circle(cx+4.1*cm*sc,cy+1.3*cm*sc,0.18*cm*sc,fill=1,stroke=0)
    c.circle(cx+3.8*cm*sc,cy+0.8*cm*sc,0.22*cm*sc,fill=1,stroke=0)

def draw_generic_outline(c, cx, cy, sc=1.0):
    c.setLineWidth(2); c.setStrokeColor(MID_GREY); c.setFillColor(colors.white)
    c.circle(cx, cy, 4.5*cm*sc, fill=1, stroke=1)
    c.setFillColor(MID_GREY); c.setFont("Helvetica", 9)
    c.drawCentredString(cx, cy-0.3*cm, "Colour this animal!")

ANIMAL_DRAWINGS = {
    "gorilla":            draw_gorilla_outline,
    "cheetah":            draw_cheetah_outline,
    "bottlenose_dolphin": draw_generic_outline,
    "crocodile":          draw_generic_outline,
    "great_white_shark":  draw_generic_outline,
    "monarch_butterfly":  draw_generic_outline,
    "polar_bear":         draw_generic_outline,
    "white_rhino":        draw_generic_outline,
}


# ── Coloring image lookup ──────────────────────────────────────────────────────
def get_coloring_image(animal_key):
    """
    Find a manually placed coloring image in the coloring_images/ folder.
    Tries (in order):
      1. {animal_key}_coloring.{ext}       — classic Zoo Printables format
      2. {animal_key.replace('_','-')}.{ext} — hyphenated download format (e.g. great-white-shark.jpg)
      3. {animal_key}.{ext}                — underscored no-suffix format
    Returns path if found and >= 5 KB, otherwise None.
    """
    # Look for coloring_images/ in the downloads mount or next to the script
    _possible_roots = [
        "/sessions/laughing-beautiful-galileo/mnt/downloads",
        "/Users/michaelbeasley/workspace/zooprintablesai/public/downloads",
        os.path.dirname(os.path.abspath(__file__)),
    ]
    _root = next((p for p in _possible_roots if os.path.isdir(p)), _possible_roots[-1])
    cache_dir = os.path.join(_root, "coloring_images")
    os.makedirs(cache_dir, exist_ok=True)

    hyphen_key = animal_key.replace("_", "-")

    for stem in (f"{animal_key}_coloring", hyphen_key, animal_key):
        for ext in ("jpg", "jpeg", "png", "webp"):
            candidate = os.path.join(cache_dir, f"{stem}.{ext}")
            if os.path.exists(candidate) and os.path.getsize(candidate) > 5_000:
                print(f"    Using coloring image: {os.path.basename(candidate)}")
                return candidate

    print(f"    No coloring image found for {animal_key} — using drawn outline")
    return None


def draw_animal_coloring(c, animal_key, cx, cy, sc=1.0):
    fn = ANIMAL_DRAWINGS.get(animal_key, draw_generic_outline)
    fn(c, cx, cy, sc)


# ── Styles & Page Callback ────────────────────────────────────────────────────
BLACK      = colors.HexColor("#111111")
GREY       = colors.HexColor("#555555")
RULE_COLOR = colors.HexColor("#CCCCCC")
ACCENT     = colors.HexColor("#1B4332")   # one brand color for rules/headings

def make_styles():
    return {
        "h1":    ParagraphStyle("h1",  fontSize=16, fontName="Helvetica-Bold",
                                textColor=BLACK, leading=20, spaceAfter=2),
        "h2":    ParagraphStyle("h2",  fontSize=11, fontName="Helvetica-Bold",
                                textColor=BLACK, leading=15, spaceAfter=2, spaceBefore=8),
        "body":  ParagraphStyle("bd",  fontSize=10, leading=14, textColor=BLACK,
                                fontName="Helvetica"),
        "bullet":ParagraphStyle("bl",  fontSize=10, leading=14, textColor=BLACK,
                                fontName="Helvetica", leftIndent=12, spaceAfter=2),
        "small": ParagraphStyle("sm",  fontSize=8, leading=11, textColor=GREY,
                                fontName="Helvetica"),
        "ws_letter": ParagraphStyle("wl", fontSize=11, fontName="Helvetica-Bold",
                                    textColor=BLACK, alignment=TA_CENTER, leading=14),
        "ws_word":   ParagraphStyle("ww", fontSize=9, fontName="Helvetica",
                                    textColor=GREY, alignment=TA_CENTER, leading=12),
        "cover_name": ParagraphStyle("cn", fontSize=34, fontName="Helvetica-Bold",
                                     textColor=BLACK, alignment=TA_CENTER, leading=40),
        "cover_sub":  ParagraphStyle("cs", fontSize=12, fontName="Helvetica",
                                     textColor=GREY, alignment=TA_CENTER, leading=16),
        "cover_sci":  ParagraphStyle("csc", fontSize=11, fontName="Helvetica-Oblique",
                                     textColor=GREY, alignment=TA_CENTER, leading=15),
    }


def make_page_fn(animal_name):
    def fn(c, doc):
        c.saveState()
        # Top rule
        c.setStrokeColor(RULE_COLOR); c.setLineWidth(0.5)
        c.line(1.4*cm, H-1.1*cm, W-1.4*cm, H-1.1*cm)
        c.setFillColor(GREY); c.setFont("Helvetica", 7.5)
        c.drawString(1.4*cm, H-0.85*cm, f"Zoo Printables AI  —  {animal_name}")
        c.drawRightString(W-1.4*cm, H-0.85*cm, "zooprintablesai.com")
        # Bottom rule
        c.line(1.4*cm, 0.9*cm, W-1.4*cm, 0.9*cm)
        c.drawCentredString(W/2, 0.45*cm, f"{doc.page}")
        c.restoreState()
    return fn


# ═══════════════════════════════════════════════════════════════════════════════
#  Pack Builder — Cover + Fact Sheet + Coloring Page + Activities
# ═══════════════════════════════════════════════════════════════════════════════
def build_pack(data, out_path):
    from reportlab.platypus.flowables import Flowable

    ST  = make_styles()
    PFN = make_page_fn(data["name"])
    animal_key = data["name"].lower().replace(" ", "_")

    doc = SimpleDocTemplate(
        out_path, pagesize=A4,
        leftMargin=1.8*cm, rightMargin=1.8*cm,
        topMargin=1.8*cm, bottomMargin=1.5*cm,
    )
    story = []

    # ── PAGE 1: Cover ──────────────────────────────────────────────────────────
    def cover_fn(c, doc):
        pass  # no decorations on cover

    # Cover content: centred, plain — no emoji (ReportLab cannot render them)
    story += [
        Spacer(1, 7.0*cm),
        Paragraph(data["name"], ST["cover_name"]),
        Spacer(1, 0.35*cm),
        Paragraph(f"<i>{data['scientific']}</i>", ST["cover_sci"]),
        Spacer(1, 0.25*cm),
        Paragraph(data["status"], ST["cover_sub"]),
        Spacer(1, 2.2*cm),
        Paragraph("Fact Sheet  ·  Colouring Page  ·  Activities",
                  ParagraphStyle("tag", fontSize=10, fontName="Helvetica",
                                 textColor=GREY, alignment=TA_CENTER, leading=14)),
        Spacer(1, 0.5*cm),
        Paragraph("Zoo Printables AI",
                  ParagraphStyle("brand", fontSize=9, fontName="Helvetica",
                                 textColor=GREY, alignment=TA_CENTER, leading=12)),
    ]

    # ── PAGE 2: Fact Sheet ─────────────────────────────────────────────────────
    story.append(PageBreak())
    story.append(Spacer(1, 0.2*cm))
    story.append(Paragraph(f"{data['name']} — Fact Sheet", ST["h1"]))
    # (emoji stripped — ReportLab renders them as black squares)
    story.append(HRFlowable(width="100%", thickness=1, color=ACCENT, spaceAfter=8))

    fact_rows = [
        ["Scientific name", data["scientific"]],
        ["Conservation status", data["status"]],
        ["Region", data["region"]],
        ["Habitat", data["habitat"]],
        ["Diet", data["diet"]],
        ["Weight", data["weight"]],
        ["Size", data["height"]],
        ["Lifespan", data["lifespan"]],
        ["Wild population", data["population"]],
    ]
    label_style = ParagraphStyle("fl", fontSize=9.5, fontName="Helvetica-Bold",
                                 textColor=BLACK, leading=13)
    value_style = ParagraphStyle("fv", fontSize=9.5, fontName="Helvetica",
                                 textColor=BLACK, leading=13)
    ft = Table(
        [[Paragraph(k, label_style), Paragraph(v, value_style)] for k, v in fact_rows],
        colWidths=[4.2*cm, 12.4*cm]
    )
    ft.setStyle(TableStyle([
        ("GRID",          (0,0),(-1,-1), 0.5, RULE_COLOR),
        ("TOPPADDING",    (0,0),(-1,-1), 5),
        ("BOTTOMPADDING", (0,0),(-1,-1), 5),
        ("LEFTPADDING",   (0,0),(-1,-1), 8),
        ("VALIGN",        (0,0),(-1,-1), "TOP"),
        ("ROWBACKGROUNDS",(0,0),(-1,-1), [colors.white, colors.HexColor("#F7F7F7")]),
    ]))
    story.append(ft)
    story.append(Spacer(1, 0.4*cm))

    story.append(Paragraph("Did You Know?", ST["h2"]))
    story.append(HRFlowable(width="100%", thickness=0.5, color=RULE_COLOR, spaceAfter=6))
    for f in data["fun_facts"]:
        story.append(Paragraph(f"–  {f}", ST["bullet"]))

    story.append(Spacer(1, 0.3*cm))
    story.append(Paragraph("Threats to Survival", ST["h2"]))
    story.append(HRFlowable(width="100%", thickness=0.5, color=RULE_COLOR, spaceAfter=6))
    for i, threat in enumerate(data["threats"], 1):
        story.append(Paragraph(f"{i}.  {threat}", ST["bullet"]))

    # ── PAGE 3: Coloring Page ─────────────────────────────────────────────────
    story.append(PageBreak())

    class AnimalColoringFlowable(Flowable):
        def __init__(self, key, name, tip, w, h):
            super().__init__()
            self.key=key; self.name=name; self.tip=tip
            self.width=w; self.height=h

        def draw(self):
            from reportlab.lib.utils import ImageReader
            c = self.canv; w, h = self.width, self.height

            # Plain white box with thin border
            c.setFillColor(colors.white)
            c.rect(0, 0, w, h, fill=1, stroke=0)
            c.setStrokeColor(RULE_COLOR); c.setLineWidth(0.5)
            c.rect(0, 0, w, h, fill=0, stroke=1)

            # Title
            c.setFillColor(BLACK); c.setFont("Helvetica-Bold", 13)
            c.drawCentredString(w/2, h-1.0*cm, f"Colour Me: {self.name}")
            c.setFillColor(GREY); c.setFont("Helvetica-Oblique", 8.5)
            c.drawCentredString(w/2, h-1.7*cm, self.tip)

            img_path = get_coloring_image(self.key)
            if img_path and os.path.exists(img_path):
                try:
                    ir = ImageReader(img_path)
                    iw, ih = ir.getSize()
                    avail_w = w - 0.8*cm
                    avail_h = h - 2.6*cm
                    scale = min(avail_w / iw, avail_h / ih)
                    dw, dh = iw * scale, ih * scale
                    x = (w - dw) / 2
                    y = (avail_h - dh) / 2 + 0.1*cm
                    c.setFillColor(colors.white)
                    c.rect(x, y, dw, dh, fill=1, stroke=0)
                    c.drawImage(img_path, x, y, width=dw, height=dh, mask="auto")
                    print(f"    Embedded: {os.path.basename(img_path)} ({iw}x{ih}px)")
                except Exception as e:
                    print(f"    Image draw failed ({e}), using outline")
                    draw_animal_coloring(c, self.key, w/2, h/2-0.8*cm, sc=0.95)
            else:
                draw_animal_coloring(c, self.key, w/2, h/2-0.8*cm, sc=0.95)

    tip = data.get("coloring_tip", f"Try to use realistic colours for the {data['name']}!")
    story.append(Spacer(1, 0.1*cm))
    story.append(AnimalColoringFlowable(animal_key, data["name"], tip, W-3.6*cm, 25*cm))

    # ── PAGE 4: Activities ─────────────────────────────────────────────────────
    story.append(PageBreak())
    story.append(Spacer(1, 0.2*cm))
    story.append(Paragraph(f"{data['name']} — Activities", ST["h1"]))
    story.append(HRFlowable(width="100%", thickness=1, color=ACCENT, spaceAfter=8))

    # Word Search
    story.append(Paragraph("Word Search", ST["h2"]))
    story.append(Paragraph("Find all 8 words hidden in the grid.", ST["small"]))
    story.append(Spacer(1, 0.2*cm))
    grid, _ = generate_word_search(data["word_search_words"], 12)
    cell_w = 0.85*cm
    ws_data = [[Paragraph(grid[r][c], ST["ws_letter"]) for c in range(12)] for r in range(12)]
    ws_tbl = Table(ws_data, colWidths=[cell_w]*12, rowHeights=[cell_w]*12)
    ws_tbl.setStyle(TableStyle([
        ("GRID",  (0,0),(-1,-1), 0.4, RULE_COLOR),
        ("ALIGN", (0,0),(-1,-1), "CENTER"),
        ("VALIGN",(0,0),(-1,-1), "MIDDLE"),
    ]))
    story.append(ws_tbl)
    story.append(Spacer(1, 0.2*cm))
    word_cells = [Paragraph(w, ST["ws_word"]) for w in data["word_search_words"]]
    while len(word_cells) % 4: word_cells.append(Paragraph("", ST["ws_word"]))
    word_rows = [word_cells[i:i+4] for i in range(0, len(word_cells), 4)]
    wlist = Table(word_rows, colWidths=[(W-3.6*cm)/4]*4)
    wlist.setStyle(TableStyle([
        ("GRID",          (0,0),(-1,-1), 0.4, RULE_COLOR),
        ("TOPPADDING",    (0,0),(-1,-1), 3),
        ("BOTTOMPADDING", (0,0),(-1,-1), 3),
        ("ALIGN",         (0,0),(-1,-1), "CENTER"),
    ]))
    story.append(wlist)
    story.append(Spacer(1, 0.35*cm))

    # Match It Up
    story.append(Paragraph("Match It Up", ST["h2"]))
    story.append(Paragraph("Draw a line from each word on the left to its meaning on the right.", ST["small"]))
    story.append(Spacer(1, 0.15*cm))
    left_col  = [p for p,_ in data["matching_pairs"]]
    right_col = [d for _,d in data["matching_pairs"]]
    random.shuffle(right_col)
    plain = ParagraphStyle("pm", fontSize=10, fontName="Helvetica", textColor=BLACK, leading=14)
    bold  = ParagraphStyle("pb", fontSize=10, fontName="Helvetica-Bold", textColor=BLACK, leading=14)
    match_rows = [[Paragraph(l, bold), Paragraph("", plain), Paragraph(r, plain)]
                  for l, r in zip(left_col, right_col)]
    m_tbl = Table(match_rows, colWidths=[5.5*cm, 4.8*cm, 5.5*cm], rowHeights=1.0*cm)
    m_tbl.setStyle(TableStyle([
        ("GRID",    (0,0),(-1,-1), 0.4, RULE_COLOR),
        ("VALIGN",  (0,0),(-1,-1), "MIDDLE"),
        ("LEFTPADDING", (0,0),(-1,-1), 8),
    ]))
    story.append(m_tbl)
    story.append(Spacer(1, 0.35*cm))

    # Fill in the Blanks
    story.append(Paragraph("Fill in the Blanks", ST["h2"]))
    story.append(HRFlowable(width="100%", thickness=0.5, color=RULE_COLOR, spaceAfter=6))
    for i, (sentence, _) in enumerate(data["fill_in_blanks"], 1):
        story.append(Paragraph(f"{i}.  {sentence}", ST["bullet"]))
    story.append(Spacer(1, 0.2*cm))
    ans_str = "  /  ".join(a for _, a in data["fill_in_blanks"])
    story.append(Paragraph(f"Answers: {ans_str}", ST["small"]))
    story.append(Spacer(1, 0.6*cm))
    story.append(HRFlowable(width="100%", thickness=0.5, color=RULE_COLOR, spaceAfter=4))
    story.append(Paragraph(
        "Zoo Printables AI — free to print and share — zooprintablesai.com",
        ST["small"]
    ))

    doc.build(story, onFirstPage=cover_fn, onLaterPages=PFN)
    print(f"  ✓ {data['name']}: {os.path.basename(out_path)}")


# ═══════════════════════════════════════════════════════════════════════════════
#  MAIN
# ═══════════════════════════════════════════════════════════════════════════════
if __name__ == "__main__":
    keys = [k.lower() for k in sys.argv[1:]] if len(sys.argv) > 1 else list(ANIMALS.keys())
    # Support both native Mac path and sandbox mount path
    _candidates = [
        "/sessions/laughing-beautiful-galileo/mnt/downloads",
        "/Users/michaelbeasley/workspace/zooprintablesai/public/downloads",
        os.path.dirname(os.path.abspath(__file__)),
    ]
    out_dir = next((p for p in _candidates if os.path.isdir(p)), _candidates[-1])
    os.makedirs(out_dir, exist_ok=True)
    print(f"Saving PDFs to: {out_dir}\n")
    for key in keys:
        data = ANIMALS.get(key)
        if not data:
            print(f"  ✗ '{key}' not found. Available: {list(ANIMALS.keys())}")
            continue
        safe_name = data["name"].replace(" ", "_")
        filename = f"ZooExplorers_{safe_name}.pdf"
        build_pack(data, os.path.join(out_dir, filename))
