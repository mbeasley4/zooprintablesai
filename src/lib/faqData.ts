export interface FaqItem {
  q: string;
  a: string;
}

export interface FaqCategory {
  category: string;
  icon: string;
  items: FaqItem[];
}

export const faqCategories: FaqCategory[] = [
  {
    category: "About Zoo Printables AI",
    icon: "🦁",
    items: [
      {
        q: "What is Zoo Printables AI?",
        a: "Zoo Printables AI is a free educational platform that provides AI-crafted wildlife printables for children ages 3–12. Each month we release a new animal-themed pack containing animal fact sheets, coloring pages, and activity packs — all completely free to download and print at home or in the classroom.",
      },
      {
        q: "Who created Zoo Printables AI?",
        a: "Zoo Printables AI was founded by Dr. Maya Okafor, a conservation biologist and wildlife educator with a Ph.D. from UC Davis and 14 years of field research across six continents. After seeing firsthand how few classrooms had access to accurate, engaging wildlife materials, she built this platform to democratize wildlife education for every child.",
      },
      {
        q: "Is Zoo Printables AI really free?",
        a: "Yes — 100% free, with no hidden fees, subscriptions, or paywalls. You do not need to create an account or provide a credit card. Every printable pack on the site can be downloaded instantly at no cost. This is the core mission of Zoo Printables AI: wildlife education should be free for every family and classroom on earth.",
      },
      {
        q: "How does AI help create the printables?",
        a: "Zoo Printables AI uses artificial intelligence to research, design, and generate age-appropriate educational content for each animal pack. The AI draws on up-to-date zoological data and conservation status information to produce accurate fact sheets, coloring pages, and activity packs — which are then reviewed by Dr. Maya Okafor for scientific accuracy before publishing.",
      },
      {
        q: "How many animal packs are available?",
        a: "Zoo Printables AI currently offers 120+ animal packs in its free archive, covering mammals, reptiles, birds, fish, amphibians, and invertebrates from every continent and ocean. A brand-new animal-themed pack is released every month.",
      },
    ],
  },
  {
    category: "Downloading & Printing",
    icon: "⬇️",
    items: [
      {
        q: "How do I download a free printable pack?",
        a: "Simply visit the Free Packs section on zooprintablesai.com, browse animals A–Z, and click the download button next to any animal. Your PDF will begin downloading immediately — no sign-up, no email required. Open the PDF in any viewer and print it on standard 8.5×11 or A4 paper.",
      },
      {
        q: "What file format are the printables in?",
        a: "All Zoo Printables AI packs are delivered as print-ready PDF files. PDFs open on any device — phone, tablet, laptop, or desktop — and can be printed on any home or school printer. No special software is required beyond a standard PDF viewer.",
      },
      {
        q: "Can I print the worksheets at school?",
        a: "Yes. Zoo Printables AI printables are licensed for free personal and classroom use. Teachers may print and distribute them to students at no cost. The packs are formatted for standard 8.5×11 (US Letter) and A4 paper sizes and print well in both color and black-and-white.",
      },
      {
        q: "Do the printables work in black and white?",
        a: "Yes. All Zoo Printables AI activities are designed to work beautifully in black-and-white as well as color. Coloring pages are intentionally line-art based, and fact sheets use high-contrast typography that remains clear when printed in grayscale.",
      },
      {
        q: "Can I download packs on my phone or tablet?",
        a: "Yes. The Zoo Printables AI website is fully mobile-friendly. You can browse, select, and download any animal pack directly to your phone or tablet. PDF files can then be sent to a wireless printer or saved to a cloud service like Google Drive for later printing.",
      },
    ],
  },
  {
    category: "Age Groups & Content",
    icon: "🎒",
    items: [
      {
        q: "What age groups are the printables designed for?",
        a: "Zoo Printables AI printables are designed for children ages 3–12. Each pack is calibrated to be accessible across that range — coloring pages scale in complexity from simple line art for younger children to more detailed scenes for older kids, and fact sheets are written at a clear, engaging reading level.",
      },
      {
        q: "What is included in each animal pack?",
        a: "Every Zoo Printables AI pack includes three types of activities: (1) Animal fact sheets with scientifically accurate information on habitat, diet, behavior, and conservation status, (2) Coloring pages with line art calibrated to skill level, and (3) Activity packs with word searches, crosswords, matching games, and fill-in-the-blank exercises.",
      },
      {
        q: "Are the animal facts scientifically accurate?",
        a: "Yes. Scientific accuracy is a core commitment of Zoo Printables AI. All animal information is generated using current zoological data and reviewed by Dr. Maya Okafor, a conservation biologist with 14 years of field research. Conservation status classifications follow the IUCN Red List, updated at each pack release.",
      },
      {
        q: "Are there printables for preschoolers?",
        a: "Yes. Every animal pack includes coloring pages with simple, large-format line art suitable for preschool and kindergarten children. Fact sheets use basic vocabulary and clear illustrations, and activity packs include trace-and-match and dot-to-dot exercises appropriate for early childhood fine motor development.",
      },
      {
        q: "Do you have printables about endangered animals?",
        a: "Yes. Zoo Printables AI covers many endangered and threatened species, including mountain gorillas, snow leopards, black rhinos, vaquita porpoises, and Amur leopards. The Conservationist Pack tier includes dedicated conservation challenge projects that teach children about habitat loss, climate change, and how they can help protect wildlife.",
      },
      {
        q: "Can I use Zoo Printables AI for homeschool curriculum?",
        a: "Absolutely. Many homeschool families use Zoo Printables AI as a core component of their science and nature study curriculum. The fact sheets, coloring pages, and activity packs cover biology, ecology, and reading comprehension in a format that works across multiple grade levels simultaneously.",
      },
    ],
  },
  {
    category: "For Teachers & Classrooms",
    icon: "🏫",
    items: [
      {
        q: "Are Zoo Printables AI worksheets aligned to educational standards?",
        a: "Zoo Printables AI activities are designed to support Next Generation Science Standards (NGSS) life science strands and Common Core ELA standards for informational text. The fact sheets, coloring pages, and activity packs map to K–8 science and literacy objectives used in classrooms across the United States.",
      },
      {
        q: "Is there a limit to how many copies I can print for my class?",
        a: "No. Zoo Printables AI printables are licensed for unlimited classroom printing. A single download can be printed for every student in your class, your entire school, or your after-school program at no cost and with no license restrictions.",
      },
      {
        q: "Do you offer teacher guides with the packs?",
        a: "Yes. Each animal pack includes a teacher guide PDF with lesson objectives, discussion questions, and vocabulary lists. The guide is included in the same free download as the student pages.",
      },
      {
        q: "Can I share Zoo Printables AI packs with other teachers?",
        a: "Yes. You are welcome to share individual pack download links with colleagues, in staff newsletters, or on teacher resource platforms. The entire Zoo Printables AI library is free and publicly accessible — no login or license is required.",
      },
    ],
  },
  {
    category: "Wildlife Giving",
    icon: "🌿",
    items: [
      {
        q: "Does Zoo Printables AI donate a portion of sales to charity?",
        a: "Zoo Printables AI is 100% free — we don't charge for anything, which means there's no markup to skim and no 'we donate 5% of your purchase' fine print. We think that model — charging you more and calling it generosity — is conservation theater. Our approach is different: we give you everything at zero cost, then point you directly to the wildlife organizations where your dollar actually lands. No middleman. No brand halo. Just a free resource and a direct path to the charities doing the real work. See our Wildlife Charities page for our recommended giving list.",
      },
      {
        q: "Which wildlife charities do you recommend?",
        a: "We hand-picked a short list of highly rated, transparent wildlife conservation organizations across different focus areas — big cats, elephants, oceans, birds, and global habitat protection. You can find the full list with direct links on our Wildlife Charities page. Every organization listed has a 4-star or Platinum rating on Charity Navigator or GuideStar.",
      },
    ],
  },
  {
    category: "New Packs & Updates",
    icon: "🗓️",
    items: [
      {
        q: "How often are new animal packs released?",
        a: "Zoo Printables AI releases one brand-new animal pack every month. The featured animal is announced on the homepage. Past packs remain in the free archive indefinitely.",
      },
      {
        q: "How do I find out when the next pack drops?",
        a: "The Zoo Printables AI homepage shows the featured animal for the current month. You can also follow @zooprintablesai on Instagram, Pinterest, Facebook, and TikTok, where new pack announcements are posted the day of release.",
      },
      {
        q: "Can I request a specific animal for a future pack?",
        a: "Yes! Zoo Printables AI welcomes animal suggestions from the community. Share your request through the Contact page or tag @zooprintablesai on social media with your suggestion. Popular requests are prioritized in the monthly release schedule.",
      },
    ],
  },
];

export const allFaqs: FaqItem[] = faqCategories.flatMap((c) => c.items);
