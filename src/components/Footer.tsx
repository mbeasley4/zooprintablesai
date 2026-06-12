"use client";
import Logo from "./Logo";
import NewsletterSignup from "./NewsletterSignup";

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
  {
    label: "Instagram",
    href: "https://www.instagram.com/zooprintablesai",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    ),
  },
  {
    label: "Pinterest",
    href: "https://www.pinterest.com/zooprintablesai",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
        <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/zooprintablesai",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ),
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@zooprintablesai",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@zooprintablesai",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
        <path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/>
      </svg>
    ),
  },
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Logo size={48} variant="full" className="mb-4 drop-shadow-md" />
            <p className="text-white/70 text-sm leading-relaxed mb-5 max-w-xs">
              Free AI-powered zoo printables for curious kids ages 3–12. New animal every month,
              instant download, completely free.
            </p>
            <div className="flex flex-wrap gap-2">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 hover:bg-white/20 text-white/70 hover:text-white w-9 h-9 rounded-full flex items-center justify-center transition-colors"
                >
                  {s.icon}
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

          {/* Newsletter column */}
          <div className="lg:col-span-2">
            <NewsletterSignup />
          </div>
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
