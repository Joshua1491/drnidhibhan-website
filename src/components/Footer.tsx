import Link from "next/link";

const zodiacSymbols = ["♈", "♉", "♊", "♋", "♌", "♍", "♎", "♏", "♐", "♑", "♒", "♓"];

export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden"
      style={{ background: "var(--charcoal)", color: "rgba(255,255,255,0.7)" }}
    >
      {/* Zodiac strip */}
      <div
        className="flex justify-center gap-6 py-4 text-[0.9rem] opacity-20"
        style={{ borderBottom: "1px solid rgba(197,166,107,0.15)" }}
      >
        {zodiacSymbols.map((s, i) => (
          <span key={i} className="gold-text">{s}</span>
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3
              className="text-[1.6rem] font-light text-white mb-3"
              style={{ fontFamily: "var(--font-heading), 'Cormorant Garamond', serif" }}
            >
              Dr. Nidhi Bhan
            </h3>
            <p className="text-[0.85rem] font-light leading-relaxed opacity-60">
              Subconscious Mind Transformation Expert. 25+ years guiding individuals toward
              profound personal change.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4
              className="text-[0.72rem] tracking-[0.25em] uppercase mb-6 opacity-40"
              style={{ fontFamily: "var(--font-body), 'Outfit', sans-serif" }}
            >
              Services
            </h4>
            <ul className="list-none space-y-3">
              {[
                { href: "/services/life-coaching", label: "Life Coaching" },
                { href: "/services/hypnotherapy", label: "Hypnotherapy" },
                { href: "/services/vedic-astrology", label: "Vedic Astrology" },
                { href: "/services/past-life-regression", label: "Past Life Regression" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[0.88rem] font-light no-underline opacity-60 hover:opacity-100 transition-opacity duration-300"
                    style={{ color: "rgba(255,255,255,0.7)" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="text-[0.72rem] tracking-[0.25em] uppercase mb-6 opacity-40"
              style={{ fontFamily: "var(--font-body), 'Outfit', sans-serif" }}
            >
              Explore
            </h4>
            <ul className="list-none space-y-3">
              {[
                { href: "/about", label: "About Dr. Nidhi" },
                { href: "/blog", label: "Blog & Insights" },
                { href: "/booking", label: "Book a Session" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[0.88rem] font-light no-underline opacity-60 hover:opacity-100 transition-opacity duration-300"
                    style={{ color: "rgba(255,255,255,0.7)" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="text-[0.72rem] tracking-[0.25em] uppercase mb-6 opacity-40"
              style={{ fontFamily: "var(--font-body), 'Outfit', sans-serif" }}
            >
              Connect
            </h4>
            <div className="space-y-3">
              <p className="text-[0.88rem] font-light opacity-60">
                4600 Hwy 7, Suite #208<br />
                Vaughan, Ontario L4L 4Y7
              </p>
              <p className="text-[0.88rem] font-light opacity-60">
                Toronto & Worldwide Virtual Sessions
              </p>
              <Link
                href="/booking"
                className="inline-block mt-4 py-2 px-5 rounded-full text-[0.75rem] tracking-[0.15em] uppercase no-underline transition-all duration-300"
                style={{
                  border: "1px solid rgba(197,166,107,0.4)",
                  color: "var(--soft-gold)",
                }}
              >
                Book a Free Consultation
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-16 pt-6 flex flex-col md:flex-row items-center justify-between gap-4"
          style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
        >
          <p className="text-[0.78rem] opacity-40">
            &copy; {new Date().getFullYear()} Dr. Nidhi Bhan. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-[0.78rem] opacity-30 no-underline hover:opacity-60 transition-opacity" style={{ color: "rgba(255,255,255,0.7)" }}>
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-[0.78rem] opacity-30 no-underline hover:opacity-60 transition-opacity" style={{ color: "rgba(255,255,255,0.7)" }}>
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
