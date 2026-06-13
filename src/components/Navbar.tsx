"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Logo from "./Logo";

type NavLink = {
  label: string;
  href: string;
};

const navLinks: NavLink[] = [
  { label: "Free Animal Printables", href: "/animals" },
  { label: "For Teachers", href: "/schools" },
  { label: "Animal Facts", href: "/blog" },
  { label: "About", href: "/about" },
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

  // A link is active for its own route and any nested route beneath it
  // (e.g. /blog stays active on /blog/some-post).
  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);

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
          <nav
            className="hidden md:flex items-center gap-7"
            aria-label="Main navigation"
          >
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={`group relative text-sm font-semibold transition-colors ${
                    active
                      ? onDark
                        ? "text-white"
                        : "text-[#2D6A4F]"
                      : onDark
                        ? "text-white/90 hover:text-white"
                        : "text-gray-700 hover:text-[#2D6A4F]"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-1.5 left-0 h-0.5 rounded-full bg-[#F4A261] transition-all duration-300 ${
                      active ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </a>
              );
            })}
          </nav>

          <a
            href="/#archive"
            className="hidden md:inline-block text-sm font-bold bg-[#F4A261] text-white px-5 py-2 rounded-full hover:bg-[#E76F51] transition-colors shadow-md"
          >
            Free Printables
          </a>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span
              className={`block w-6 h-0.5 mb-1.5 transition-all ${
                onDark ? "bg-white" : "bg-gray-800"
              } ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              className={`block w-6 h-0.5 mb-1.5 transition-all ${
                onDark ? "bg-white" : "bg-gray-800"
              } ${menuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block w-6 h-0.5 transition-all ${
                onDark ? "bg-white" : "bg-gray-800"
              } ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`md:hidden overflow-hidden bg-white border-t border-gray-100 shadow-lg transition-all duration-300 ease-in-out ${
          menuOpen
            ? "max-h-112 opacity-100"
            : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <nav
          className="px-4 py-6 flex flex-col gap-1"
          aria-label="Mobile navigation"
        >
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <a
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`flex items-center rounded-xl border-l-4 px-4 py-3 text-base font-semibold transition-colors ${
                  active
                    ? "border-[#F4A261] bg-[#2D6A4F]/5 text-[#1B4332]"
                    : "border-transparent text-gray-700 hover:bg-gray-50 hover:text-[#2D6A4F]"
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            );
          })}
          <a
            href="/#archive"
            className="mt-4 text-center font-bold bg-[#F4A261] text-white px-4 py-3 rounded-full hover:bg-[#E76F51] transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Free Printables
          </a>
        </nav>
      </div>
    </header>
  );
}
