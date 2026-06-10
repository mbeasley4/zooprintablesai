"use client";
import Logo from "./Logo";

const footerLinks = {
  "Free Packs": [
    { label: "Cub Pack (Ages 3–5)", href: "#packs" },
    { label: "Explorer Pack (Ages 6–9)", href: "#packs" },
    { label: "Conservationist Pack (Ages 10–12)", href: "#packs" },
    { label: "Animal Archive", href: "#" },
    { label: "All Packs", href: "#packs" },
  ],
  Resources: [
    { label: "Animal Archive", href: "#" },
    { label: "Free Sample Pack", href: "#packs" },
    { label: "Teaching Guides", href: "#" },
    { label: "Blog", href: "#" },
    { label: "FAQ", href: "#" },
  ],
  Company: [
    { label: "About Us", href: "#" },
    { label: "Our Mission", href: "#" },
    { label: "Affiliates", href: "#" },
    { label: "Press", href: "#" },
    { label: "Contact", href: "#" },
  ],
};

const socialLinks = [
  { label: "Instagram", href: "https://www.instagram.com/zooprintablesai" },
  { label: "Pinterest", href: "https://www.pinterest.com/zooprintablesai" },
  { label: "Facebook", href: "https://www.facebook.com/zooprintablesai" },
  { label: "TikTok", href: "https://www.tiktok.com/@zooprintablesai" },
  { label: "YouTube", href: "https://www.youtube.com/@zooprintablesai" },
];

export default function Footer() {
  return (
    <footer className="bg-[#1B4332] text-white">
      {/* CTA bar */}
      <div className="bg-[#F4A261] py-10 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="text-2xl font-black text-white mb-2">
            120+ Free Animal Packs — No Sign-Up Needed
          </h3>
          <p className="text-white/90 text-sm mb-6">
            Pick any animal. Download instantly. Print at home. Completely free for every family and classroom.
          </p>
          <a
            href="#packs"
            className="inline-block bg-[#1B4332] hover:bg-[#2D6A4F] text-white font-bold px-8 py-3 rounded-full transition-colors shadow-md text-lg"
          >
            Browse All Free Packs
          </a>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-6xl mx-auto px-4 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Logo size={32} variant="full" className="mb-4" />
            <p className="text-white/70 text-sm leading-relaxed mb-5 max-w-xs">
              Free AI-powered zoo printables for curious kids ages 3–12. New animal every month,
              instant download, completely free.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="bg-white/10 hover:bg-white/20 text-white/70 hover:text-white text-xs font-semibold px-3 py-1.5 rounded-full transition-colors"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-bold text-sm uppercase tracking-widest text-white/50 mb-4">
                {title}
              </h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-white/70 hover:text-white text-sm transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 py-5 px-4">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-white/50 text-xs">
          <p>© 2026 Zoo Printables AI. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Refund Policy</a>
          </div>
          <p>Instant PDF Download · Always Free</p>
        </div>
      </div>
    </footer>
  );
}
