"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Logo from "./Logo";

const navLinks = [
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Animals A–Z",  href: "/animals" },
  { label: "For Schools",  href: "/schools", highlight: true },
  { label: "Blog",         href: "/blog" },
  { label: "Charities",    href: "/charities" },
  { label: "FAQ",          href: "/faq" },
  { label: "About",        href: "/about" },
];

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const [scrolled, setScrolled] = useState(!isHome);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!isHome) return;
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  const onDark = isHome && !scrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          <a href="/" aria-label="Zoo Printables AI Home">
            <Logo size={72} onDark={onDark} className="drop-shadow-md" />
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-5" aria-label="Main navigation">
            {navLinks.map((link) =>
              link.highlight ? (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-bold text-[#2D6A4F] border border-[#2D6A4F] px-3 py-1 rounded-full hover:bg-[#2D6A4F] hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-semibold transition-colors hover:text-[#F4A261] ${
                    onDark ? "text-white" : "text-gray-700"
                  }`}
                >
                  {link.label}
                </a>
              )
            )}
          </nav>

          <a
            href="/#archive"
            className="hidden md:inline-block text-sm font-bold bg-[#F4A261] text-white px-5 py-2 rounded-full hover:bg-[#E76F51] transition-colors shadow-md"
          >
            Download Free
          </a>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className={`block w-6 h-0.5 mb-1.5 transition-all ${onDark ? "bg-white" : "bg-gray-800"} ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 mb-1.5 transition-all ${onDark ? "bg-white" : "bg-gray-800"} ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 transition-all ${onDark ? "bg-white" : "bg-gray-800"} ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <nav className="px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-700 font-semibold text-base hover:text-[#2D6A4F]"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="/#archive"
              className="text-center font-bold bg-[#F4A261] text-white px-4 py-3 rounded-full hover:bg-[#E76F51] transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Download Free
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
