"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Logo() {
  return (
    <svg
      viewBox="0 0 320 80"
      style={{ height: "48px", width: "auto" }}
      role="img"
      aria-label="Dr. Nidhi Bhan — Subconscious Mind Transformation"
    >
      <g transform="translate(0, 2)">
        <g transform="translate(5, 0) scale(0.72)">
          <path d="M25 72 Q25 50 40 38 Q50 28 50 46 Q50 28 60 38 Q75 50 75 72" fill="none" stroke="#C5A66B" strokeWidth="1.3" strokeLinecap="round"/>
          <path d="M30 70 Q30 52 42 42 Q50 34 50 48 Q50 34 58 42 Q70 52 70 70" fill="none" stroke="#D4A855" strokeWidth="0.8" strokeLinecap="round" opacity="0.6"/>
          <path d="M20 74 Q20 54 34 42 Q44 34 48 44" fill="none" stroke="#C5A66B" strokeWidth="1" strokeLinecap="round" opacity="0.55"/>
          <path d="M80 74 Q80 54 66 42 Q56 34 52 44" fill="none" stroke="#C5A66B" strokeWidth="1" strokeLinecap="round" opacity="0.55"/>
          <path d="M14 76 Q16 58 30 46 Q40 38 44 46" fill="none" stroke="#B8935A" strokeWidth="0.8" strokeLinecap="round" opacity="0.35"/>
          <path d="M86 76 Q84 58 70 46 Q60 38 56 46" fill="none" stroke="#B8935A" strokeWidth="0.8" strokeLinecap="round" opacity="0.35"/>
          <circle cx="50" cy="52" r="2.5" fill="#D4A855" opacity="0.45"/>
          <circle cx="50" cy="52" r="1" fill="#C5A66B"/>
          <path d="M35 74 Q42 70 50 68 Q58 70 65 74" fill="none" stroke="#C5A66B" strokeWidth="0.6" opacity="0.4"/>
        </g>
        <text x="78" y="42" fontFamily="'Cormorant Garamond', serif" fontSize="32" fontWeight="600" fill="#2C2636" letterSpacing="0.5">Dr. Nidhi Bhan</text>
        <line x1="78" y1="52" x2="118" y2="52" stroke="#C5A66B" strokeWidth="0.8" opacity="0.5"/>
        <text x="78" y="66" fontFamily="'Cormorant Garamond', serif" fontSize="9" fontWeight="400" fill="#B8935A" letterSpacing="3.5">SUBCONSCIOUS MIND TRANSFORMATION</text>
      </g>
    </svg>
  );
}

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/services/life-coaching", label: "Coaching" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] flex items-center justify-between transition-all duration-400 ease-out ${
        scrolled
          ? "py-3 px-8 bg-[rgba(251,248,244,0.95)] shadow-[0_2px_30px_rgba(60,43,61,0.04)]"
          : "py-[1.1rem] px-8 bg-[rgba(251,248,244,0.75)]"
      }`}
      style={{ backdropFilter: "blur(25px)", borderBottom: "1px solid rgba(195,166,107,0.08)" }}
    >
      {/* Brand */}
      <Link href="/" className="no-underline block">
        <Logo />
      </Link>

      {/* Desktop Links */}
      <ul className="hidden lg:flex items-center gap-10 list-none">
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={`relative text-[0.8rem] font-normal tracking-[0.14em] uppercase no-underline transition-colors duration-300 after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:h-[1.5px] after:bg-[var(--soft-gold)] after:rounded-sm after:transition-[width] after:duration-300 ${
                pathname === link.href
                  ? "text-[var(--charcoal)] after:w-full"
                  : "text-[var(--text-secondary)] after:w-0 hover:text-[var(--charcoal)] hover:after:w-full"
              }`}
            >
              {link.label}
            </Link>
          </li>
        ))}
        <li>
          <Link
            href="/booking"
            className="inline-block py-[0.55rem] px-6 bg-[var(--charcoal)] text-white rounded-full text-[0.78rem] tracking-[0.14em] uppercase no-underline transition-all duration-300 hover:bg-[var(--deep-plum)] hover:-translate-y-[1px] hover:shadow-[0_6px_20px_rgba(44,38,54,0.15)]"
          >
            Book Now
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <button
        className="lg:hidden flex flex-col gap-[5px] cursor-pointer z-[101] bg-transparent border-none"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Toggle menu"
      >
        <span
          className={`block w-[22px] h-[1.5px] bg-[var(--charcoal)] transition-all duration-300 ${
            mobileOpen ? "rotate-45 translate-y-[6.5px]" : ""
          }`}
        />
        <span
          className={`block w-[22px] h-[1.5px] bg-[var(--charcoal)] transition-all duration-300 ${
            mobileOpen ? "opacity-0" : ""
          }`}
        />
        <span
          className={`block w-[22px] h-[1.5px] bg-[var(--charcoal)] transition-all duration-300 ${
            mobileOpen ? "-rotate-45 -translate-y-[6.5px]" : ""
          }`}
        />
      </button>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          className="fixed inset-0 top-0 bg-[var(--cream)] z-[99] flex flex-col items-center justify-center gap-8 animate-fade-in"
          style={{ paddingTop: "5rem" }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[1.2rem] tracking-[0.2em] uppercase no-underline text-[var(--text-secondary)] hover:text-[var(--charcoal)] transition-colors"
              style={{ fontFamily: "var(--font-body), 'Outfit', sans-serif" }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/booking"
            className="mt-4 inline-block py-3 px-8 bg-[var(--charcoal)] text-white rounded-full text-[0.82rem] tracking-[0.14em] uppercase no-underline"
          >
            Book Now
          </Link>
        </div>
      )}
    </nav>
  );
}
