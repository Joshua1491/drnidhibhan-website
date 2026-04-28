import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Healing Services",
  description:
    "Explore Dr. Nidhi Bhan's holistic healing services in Toronto — Vedic Astrology, Hypnotherapy, Past Life Regression, Subliminal Reconditioning, Vastu Harmonics, and Tarot Readings.",
  keywords: [
    "healing services Toronto",
    "holistic healing Toronto",
    "Vedic astrology services",
    "hypnotherapy services",
    "past life regression services",
    "subliminal reconditioning",
    "spiritual healing Toronto",
  ],
  alternates: {
    canonical: "https://www.drnidhibhan.com/services",
  },
  openGraph: {
    title: "Healing Services — Dr. Nidhi Bhan",
    description:
      "Explore a curated suite of ancient wisdom and modern therapeutic techniques — Vedic Astrology, Hypnotherapy, Past Life Regression, and more.",
    url: "https://www.drnidhibhan.com/services",
  },
  twitter: {
    card: "summary_large_image",
    title: "Healing Services — Dr. Nidhi Bhan",
    description:
      "Vedic Astrology, Hypnotherapy, Past Life Regression & more. Holistic healing services in Toronto.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Dr. Nidhi Bhan's Healing Services",
  description:
    "A curated suite of ancient wisdom and modern therapeutic techniques for holistic healing and transformation.",
  url: "https://www.drnidhibhan.com/services",
  numberOfItems: 7,
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Birth Chart Intelligence — Vedic Astrology", url: "https://www.drnidhibhan.com/services/vedic-astrology" },
    { "@type": "ListItem", position: 2, name: "Clinical Hypnotherapy", url: "https://www.drnidhibhan.com/services/hypnotherapy" },
    { "@type": "ListItem", position: 3, name: "Past Life Regression Therapy", url: "https://www.drnidhibhan.com/services/past-life-regression" },
    { "@type": "ListItem", position: 4, name: "Subliminal Reconditioning", url: "https://www.drnidhibhan.com/services/subliminal-reconditioning" },
    { "@type": "ListItem", position: 5, name: "Vastu Harmonics", url: "https://www.drnidhibhan.com/services/vastu-harmonics" },
    { "@type": "ListItem", position: 6, name: "Tarot + Intuitive Reading", url: "https://www.drnidhibhan.com/services/tarot-reading" },
    { "@type": "ListItem", position: 7, name: "Life Coaching — Subconscious Mind Transformation", url: "https://www.drnidhibhan.com/services/life-coaching" },
  ],
};

const services = [
  {
    title: "Birth Chart Intelligence",
    subtitle: "Vedic Astrology",
    href: "/services/vedic-astrology",
    description:
      "Decode the celestial blueprint of your life through ancient Jyotish wisdom. Gain clarity on career, relationships, health, and life purpose using your precise birth chart analysis.",
    icon: "\u2728",
    bg: "bg-lavender-light",
  },
  {
    title: "Hypnotherapy",
    subtitle: "Clinical Hypnotherapy",
    href: "/services/hypnotherapy",
    description:
      "Access the subconscious mind to dissolve limiting beliefs, heal emotional wounds, and reprogram patterns that no longer serve your highest good.",
    icon: "\uD83C\uDF00",
    bg: "bg-blush-light",
  },
  {
    title: "Past Life Regression",
    subtitle: "Karmic Healing",
    href: "/services/past-life-regression",
    description:
      "Journey into past lifetimes to uncover the root causes of present-day blocks, phobias, and recurring relationship patterns through guided regression therapy.",
    icon: "\uD83D\uDD2E",
    bg: "bg-peach-light",
  },
  {
    title: "Subliminal Reconditioning",
    subtitle: "Subconscious Rewiring",
    href: "/services/subliminal-reconditioning",
    description:
      "Rewire deep-seated neural pathways through targeted subliminal audio programs designed to shift beliefs around abundance, confidence, and self-worth.",
    icon: "\uD83C\uDFB6",
    bg: "bg-sage-light",
  },
  {
    title: "Vastu Harmonics",
    subtitle: "Sacred Space Design",
    href: "/services/vastu-harmonics",
    description:
      "Align your living and working spaces with the ancient science of Vastu Shastra to invite prosperity, harmony, and positive energy flow into your environment.",
    icon: "\uD83C\uDFE1",
    bg: "bg-lavender-light",
  },
  {
    title: "Tarot + Intuitive Reading",
    subtitle: "Divination & Guidance",
    href: "/services/tarot-reading",
    description:
      "Receive intuitive guidance through the sacred language of Tarot. Each reading offers a mirror to your inner landscape and illuminates the path ahead.",
    icon: "\uD83C\uDCCF",
    bg: "bg-blush-light",
  },
];

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section
        className="section-padding text-center"
        style={{ background: "var(--cream)" }}
      >
        <div className="max-w-3xl mx-auto">
          <span className="section-label">Sacred Modalities</span>
          <h1 className="section-title">
            Healing Services by{" "}
            <span className="gold-text">Dr. Nidhi Bhan</span>
          </h1>
          <p className="section-subtitle">
            A curated suite of ancient wisdom and modern therapeutic techniques
            designed to help you heal, align, and thrive. Each modality is
            tailored to meet you exactly where you are on your journey.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section
        className="section-padding"
        style={{ background: "var(--cream)" }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="card group block no-underline"
                style={{ textDecoration: "none" }}
              >
                <div
                  className={`w-14 h-14 ${service.bg} rounded-2xl flex items-center justify-center text-2xl mb-5 group-hover:scale-110 transition-transform duration-300`}
                >
                  {service.icon}
                </div>
                <p
                  className="text-xs font-medium tracking-widest uppercase mb-2"
                  style={{ color: "var(--warm-gold)" }}
                >
                  {service.subtitle}
                </p>
                <h2
                  className="text-xl font-light mb-3"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    color: "var(--charcoal)",
                  }}
                >
                  {service.title}
                </h2>
                <p
                  className="text-sm leading-relaxed mb-4"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {service.description}
                </p>
                <span
                  className="text-xs font-medium tracking-widest uppercase inline-flex items-center gap-2 group-hover:gap-3 transition-all duration-300"
                  style={{ color: "var(--soft-gold)" }}
                >
                  Learn More
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    &rarr;
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding" style={{ background: "var(--blush-light)" }}>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="section-title">
            Not Sure Where to <span className="gold-text">Begin</span>?
          </h2>
          <p
            className="text-base leading-relaxed mb-8"
            style={{ color: "var(--text-secondary)" }}
          >
            Every healing journey is unique. Book a complimentary discovery call
            and Dr. Nidhi will guide you toward the modality that best serves
            your current needs and intentions.
          </p>
          <Link href="/booking" className="btn-primary">
            Book a Discovery Call
          </Link>
        </div>
      </section>
    </>
  );
}
