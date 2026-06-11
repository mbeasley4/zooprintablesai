"use client";
import Logo from "./Logo";

type FooterLink = { label: string; href: string; external?: boolean };

const footerLinks: Record<string, FooterLink[]> = {
  "Free Packs": [
    { label: "Cub Pack (Ages 3–5)", href: "/#packs" },
    { label: "Explorer Pack (Ages 6–9)", href: "/#packs" },
    { label: "Conservationist Pack (Ages 10–12)", href: "/#packs" },
    { label: "Animal Archive", href: "/animals" },
    { label: "All Packs", href: "/#packs" },
  ],
  Resources: [
    { label: "Animal Archive", href: "/animals" },
    { label: "Free Sample Pack", href: "/#packs" },
    { label: "Conservation Partners", href: "/charities" },
    { label: "FAQ", href: "/faq" },
  ],
  Company: [
    { label: "About the Founder", href: "/about" },
    { label: "Contact", href: "https://www.linkedin.com/in/michaelkbeasley/", external: true },
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
                      {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
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
      {/* COPPA / trust strip */}
      <div className="border-t border-white/10 py-3 px-4 bg-white/5">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-x-6 gap-y-1 text-white/50 text-xs text-center">
          <span className="flex items-center gap-1.5"><span className="text-[#52B788]">✓</span> Zero Data Collected</span>
          <span className="flex items-center gap-1.5"><span className="text-[#52B788]">✓</span> 100% COPPA Compliant</span>
          <span className="flex items-center gap-1.5"><span className="text-[#52B788]">✓</span> No Sign-Up Required</span>
          <span className="flex items-center gap-1.5"><span className="text-[#52B788]">✓</span> Always Free</span>
        </div>
      </div>

      <div className="border-t border-white/10 py-5 px-4">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-white/50 text-xs">
          <p>© 2026 Zoo Printables AI. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
          </div>
          <p>
            Imagery enhanced by{" "}
            <a
              href="https://www.magnific.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Magnific AI
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
