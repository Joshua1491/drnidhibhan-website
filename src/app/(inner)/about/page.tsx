import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Dr. Nidhi Bhan | Subconscious Mind Transformation Expert",
  description:
    "Learn about Dr. Nidhi Bhan's 25+ year journey from Vedic astrology to subconscious mind transformation. Canada-based expert in hypnotherapy, past life regression, and birth-chart-guided life coaching.",
  alternates: {
    canonical: "https://www.drnidhibhan.com/about",
  },
  openGraph: {
    title: "About Dr. Nidhi Bhan | Subconscious Mind Transformation Expert",
    description:
      "25+ years helping thousands break free from invisible mental patterns through subconscious mind transformation, hypnotherapy, and birth-chart-guided coaching.",
    url: "https://www.drnidhibhan.com/about",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Dr. Nidhi Bhan | Transformation Expert",
    description:
      "25+ years helping thousands break free from invisible mental patterns through subconscious mind transformation.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Dr. Nidhi Bhan",
  jobTitle: "Subconscious Mind Transformation Expert",
  description:
    "Dr. Nidhi Bhan is a Canada-based subconscious mind transformation expert with over 25 years of experience in Vedic astrology, hypnotherapy, past life regression, subliminal reconditioning, and holistic life coaching.",
  url: "https://www.drnidhibhan.com/about",
  sameAs: [],
  address: {
    "@type": "PostalAddress",
    streetAddress: "4600 Hwy 7, Suite #208",
    addressLocality: "Vaughan",
    addressRegion: "Ontario",
    postalCode: "L4L 4Y7",
    addressCountry: "CA",
  },
  knowsAbout: [
    "Subconscious Mind Transformation",
    "Hypnotherapy",
    "Past Life Regression",
    "Vedic Astrology",
    "Subliminal Reconditioning",
    "Life Coaching",
    "Birth Chart Analysis",
  ],
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ===== HERO ===== */}
      <section className="section-padding bg-cream text-center">
        <div className="max-w-4xl mx-auto animate-fade-up">
          <span className="section-label">About</span>
          <h1 className="section-title mt-4">
            Dr. Nidhi Bhan
          </h1>
          <p className="text-text-secondary font-body text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto mt-4">
            Subconscious mind transformation expert, Vedic astrologer, hypnotherapist, and guide
            to thousands on the path from invisible pain to lasting freedom.
          </p>
        </div>
      </section>

      {/* ===== HER STORY ===== */}
      <section className="section-padding bg-blush-light">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Professional portrait placeholder */}
          <div className="animate-fade-up">
            <div
              className="w-full aspect-[3/4] rounded-3xl flex flex-col items-center justify-center relative overflow-hidden"
              style={{
                background: "linear-gradient(160deg, rgba(243,239,248,0.6) 0%, rgba(237,228,220,0.4) 50%, rgba(237,243,238,0.5) 100%)",
                border: "1px solid rgba(197,166,107,0.15)",
              }}
            >
              <svg viewBox="0 0 100 100" className="w-20 h-20 mb-4 opacity-25">
                <path d="M25 80 Q25 55 40 40 Q50 30 50 50 Q50 30 60 40 Q75 55 75 80" fill="none" stroke="#C5A66B" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M20 82 Q20 60 35 45 Q45 35 50 48" fill="none" stroke="#C5A66B" strokeWidth="1.2" strokeLinecap="round" opacity="0.6"/>
                <path d="M80 82 Q80 60 65 45 Q55 35 50 48" fill="none" stroke="#C5A66B" strokeWidth="1.2" strokeLinecap="round" opacity="0.6"/>
                <circle cx="50" cy="55" r="3" fill="#D4A855" opacity="0.4"/>
              </svg>
              <span
                className="text-lg font-light text-charcoal tracking-wide"
                style={{ fontFamily: "var(--font-heading), 'Cormorant Garamond', serif" }}
              >
                Dr. Nidhi Bhan
              </span>
              <span className="text-text-muted text-xs tracking-[0.25em] uppercase font-body mt-1">
                25+ Years of Transformation
              </span>
            </div>
          </div>

          <div className="animate-fade-up delay-200">
            <span className="section-label">Her Story</span>
            <h2 className="font-heading text-3xl md:text-4xl font-light text-charcoal mt-4 mb-6 leading-tight">
              A Journey of Over <span className="gold-text">25 Years</span>
            </h2>
            <div className="space-y-4 text-text-secondary font-body text-base leading-relaxed">
              <p>
                Dr. Nidhi Bhan&rsquo;s path began more than two and a half decades ago with a deep
                immersion into Vedic astrology &mdash; the ancient Indian science of reading the
                cosmic blueprint encoded in a birth chart. What started as a fascination with
                planetary patterns quickly became a calling when she realized that the chart did
                far more than predict events: it revealed the subconscious programming that shapes
                every choice, relationship, and outcome in a person&rsquo;s life.
              </p>
              <p>
                Over the years, she studied and mastered multiple healing modalities, weaving them
                into a unified system of transformation. She trained in clinical hypnotherapy,
                learning how to access the subconscious mind directly to dissolve limiting beliefs
                at their root. She explored past life regression therapy, helping clients release
                emotional and energetic patterns carried across lifetimes. She developed expertise
                in subliminal reconditioning &mdash; the art of rewiring deeply embedded thought
                patterns beneath conscious awareness.
              </p>
              <p>
                What sets Dr. Nidhi apart is her refusal to treat any single modality as a
                standalone solution. She recognized early on that real, lasting change requires a
                multi-dimensional approach. A birth chart can illuminate <em>why</em> someone is
                stuck, but hypnotherapy and subconscious work are what actually set them free.
                This integrative philosophy has been the cornerstone of her practice ever since.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== HER APPROACH ===== */}
      <section className="section-padding bg-cream">
        <div className="max-w-5xl mx-auto">
          <div className="section-header animate-fade-up">
            <span className="section-label">Her Approach</span>
            <h2 className="section-title">
              The Birth Chart as a <span className="gold-text">Diagnostic Tool</span>
            </h2>
            <p className="section-subtitle">
              Not fortune-telling. Not entertainment. A precise map of your subconscious
              programming &mdash; and the key to rewriting it.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Birth Chart Intelligence",
                description:
                  "Dr. Nidhi uses the Vedic birth chart as a diagnostic instrument, not a prediction device. It reveals the hidden mental patterns, karmic imprints, and subconscious conditioning that drive your life outcomes. This understanding becomes the foundation for targeted, effective transformation.",
                bg: "bg-lavender-light",
              },
              {
                title: "Clinical Hypnotherapy",
                description:
                  "Through clinical hypnotherapy, Dr. Nidhi guides clients into a deeply relaxed state where the subconscious mind becomes accessible. In this state, limiting beliefs, emotional blocks, and self-sabotaging patterns can be identified and replaced with empowering new programming that aligns with your goals.",
                bg: "bg-peach-light",
              },
              {
                title: "Subliminal Reconditioning",
                description:
                  "Subliminal reconditioning works beneath conscious awareness to rewire thought patterns at the deepest level. Dr. Nidhi employs carefully designed techniques that bypass the critical mind and install positive, growth-oriented beliefs directly into the subconscious architecture.",
                bg: "bg-sage-light",
              },
              {
                title: "Past Life Regression",
                description:
                  "Some patterns don't originate in this lifetime. Through past life regression therapy, Dr. Nidhi helps clients access memories and experiences from previous incarnations, releasing the emotional charge and karmic entanglements that continue to influence present-day behavior and relationships.",
                bg: "bg-blush-light",
              },
            ].map((item, i) => (
              <div
                key={item.title}
                className={`card ${item.bg} animate-fade-up`}
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                <h3 className="font-heading text-2xl font-normal text-charcoal mb-3">
                  {item.title}
                </h3>
                <p className="text-text-secondary font-body text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CREDENTIALS ===== */}
      <section className="section-padding bg-lavender-light">
        <div className="max-w-4xl mx-auto">
          <div className="section-header animate-fade-up">
            <span className="section-label">Credentials &amp; Experience</span>
            <h2 className="section-title">
              Trusted by <span className="gold-text">Thousands</span>
            </h2>
          </div>

          <div className="space-y-5 text-text-secondary font-body text-base leading-relaxed animate-fade-up delay-200 max-w-3xl mx-auto">
            <p>
              Over the course of her career, Dr. Nidhi Bhan has conducted thousands of one-on-one
              consultations, helping individuals from all walks of life &mdash; entrepreneurs,
              executives, artists, homemakers, students, and spiritual seekers &mdash; break free
              from the invisible patterns holding them back. Her clients span multiple continents,
              working with her both in person at her Vaughan, Ontario clinic and through virtual
              sessions worldwide.
            </p>
            <p>
              Dr. Nidhi has been featured on television and radio programs, where she has shared her
              expertise in Vedic astrology and subconscious transformation with broad audiences. Her
              ability to translate complex metaphysical concepts into practical, actionable guidance
              has made her a sought-after voice in the field of holistic personal development.
            </p>
            <p>
              Based in Canada, she brings a unique cross-cultural perspective to her work, drawing on
              the ancient wisdom traditions of India and integrating them with modern therapeutic
              techniques. Her practice is built on the conviction that every individual has the power
              to rewrite their story &mdash; once they understand the subconscious code that has been
              writing it for them.
            </p>
          </div>
        </div>
      </section>

      {/* ===== STATS ===== */}
      <section className="section-padding bg-cream">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { number: "25+", label: "Years of Experience" },
              { number: "7", label: "Healing Modalities" },
              { number: "1000s", label: "Clients Helped" },
              { number: "Global", label: "Virtual Reach" },
            ].map((stat, i) => (
              <div
                key={stat.label}
                className="animate-fade-up"
                style={{ animationDelay: `${i * 0.12}s` }}
              >
                <div className="gold-text font-heading text-4xl md:text-5xl font-light mb-2">
                  {stat.number}
                </div>
                <div className="text-text-muted font-body text-sm tracking-wide uppercase">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="section-padding bg-blush-light text-center">
        <div className="max-w-3xl mx-auto animate-fade-up">
          <span className="section-label">Begin Your Journey</span>
          <h2 className="section-title mt-4">
            Ready to Rewrite <span className="gold-text">Your Story</span>?
          </h2>
          <p className="section-subtitle mt-4 mb-8">
            Your birth chart holds the map. Dr. Nidhi holds the keys. Book a consultation and take
            the first step toward lasting transformation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/booking" className="btn-primary">
              Book a Session
            </Link>
            <Link href="/contact" className="btn-secondary">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
