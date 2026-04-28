import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Vedic Astrology Toronto | Birth Chart Analysis",
  description:
    "Expert Vedic astrology and birth chart analysis in Toronto with Dr. Nidhi Bhan. Gain clarity on career, relationships, health, and life purpose through Jyotish wisdom.",
  keywords: [
    "Vedic astrology Toronto",
    "birth chart analysis",
    "Jyotish",
    "Vedic birth chart reading",
    "astrology consultation Toronto",
  ],
  alternates: {
    canonical: "https://www.drnidhibhan.com/services/vedic-astrology",
  },
  openGraph: {
    title: "Vedic Astrology & Birth Chart Analysis — Dr. Nidhi Bhan",
    description:
      "Expert Vedic astrology and birth chart analysis in Toronto. Gain clarity on career, relationships, health & life purpose through Jyotish wisdom.",
    url: "https://www.drnidhibhan.com/services/vedic-astrology",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vedic Astrology Toronto — Dr. Nidhi Bhan",
    description:
      "Birth chart analysis for career, relationships & life purpose. Expert Vedic astrology in Toronto.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Vedic Astrology — Birth Chart Intelligence",
  provider: {
    "@type": "Person",
    name: "Dr. Nidhi Bhan",
    url: "https://www.drnidhibhan.com",
  },
  areaServed: {
    "@type": "City",
    name: "Toronto",
  },
  description:
    "Vedic astrology birth chart analysis sessions offering clarity on career, relationships, health, and life purpose through the ancient science of Jyotish.",
  url: "https://www.drnidhibhan.com/services/vedic-astrology",
};

const differences = [
  {
    aspect: "Zodiac System",
    vedic: "Sidereal — based on the actual positions of stars and constellations as they appear in the sky today.",
    western: "Tropical — based on the position of the Sun relative to the Earth's equinoxes, which has shifted over millennia.",
  },
  {
    aspect: "Emphasis",
    vedic: "Karmic patterns, life lessons, spiritual evolution, and precise timing of life events through Dasha systems.",
    western: "Psychological profiling, personality traits, and emotional tendencies.",
  },
  {
    aspect: "Predictive Power",
    vedic: "Highly predictive with planetary periods (Dashas) that map specific life phases and transitions.",
    western: "More focused on general themes and psychological insight rather than specific event timing.",
  },
  {
    aspect: "Remedial Measures",
    vedic: "Offers practical remedies — mantras, gemstones, rituals, and lifestyle adjustments to harmonize planetary influences.",
    western: "Typically offers awareness and insight without structured remedial practices.",
  },
];

const areas = [
  {
    title: "Career & Purpose",
    description:
      "Identify your dharma — the work you were born to do. Your birth chart reveals natural talents, optimal career paths, and the timing of professional breakthroughs.",
  },
  {
    title: "Relationships & Compatibility",
    description:
      "Understand the karmic dynamics in your relationships. Vedic astrology illuminates patterns in love, partnership compatibility, and the timing of significant unions.",
  },
  {
    title: "Health & Vitality",
    description:
      "Your chart indicates constitutional strengths and vulnerabilities. Gain insight into potential health concerns and the best preventive measures aligned with your astrological makeup.",
  },
  {
    title: "Wealth & Prosperity",
    description:
      "Discover the planetary combinations that govern financial flow in your life. Learn the optimal periods for investments, business ventures, and abundance manifestation.",
  },
  {
    title: "Spiritual Growth",
    description:
      "Uncover your soul's evolutionary path. Your chart reveals past-life karma, current spiritual lessons, and the practices that will accelerate your awakening.",
  },
  {
    title: "Life Transitions",
    description:
      "Navigate major life changes with clarity. The Dasha system provides a precise timeline of planetary influences, helping you prepare for and make the most of each phase.",
  },
];

const faqs = [
  {
    question: "What information do I need for a Vedic astrology reading?",
    answer:
      "For an accurate birth chart analysis, Dr. Nidhi requires your exact date of birth, time of birth (as precise as possible), and place of birth. The time of birth is especially critical in Vedic astrology, as even a few minutes can shift the Ascendant and alter the entire chart interpretation. If you are unsure of your exact birth time, Dr. Nidhi can use rectification techniques to approximate it.",
  },
  {
    question: "Is Vedic astrology fortune-telling?",
    answer:
      "Not at all. Dr. Nidhi approaches Vedic astrology as a diagnostic and navigational tool — not fortune-telling. Your birth chart is a map of potentials and tendencies, not a fixed destiny. The purpose of a reading is to illuminate your strengths, challenges, and the karmic themes at play so you can make empowered decisions. You always retain free will; the chart simply provides the landscape upon which your choices unfold.",
  },
  {
    question: "How often should I get a reading?",
    answer:
      "A comprehensive birth chart reading typically provides guidance for one to two years. Many clients return annually or during major life transitions — career changes, relationship shifts, relocation, or when entering a new planetary Dasha period. Dr. Nidhi also offers follow-up sessions that focus on specific areas or transit updates.",
  },
  {
    question: "Can Vedic astrology help with specific decisions?",
    answer:
      "Yes. Vedic astrology includes Muhurta, the science of electional timing, which identifies auspicious windows for important actions such as starting a business, getting married, purchasing property, or launching a creative project. Dr. Nidhi can advise on optimal timing alongside your chart analysis.",
  },
  {
    question: "Are online Vedic astrology sessions effective?",
    answer:
      "Absolutely. Since Vedic astrology is based on mathematical calculation of planetary positions at your birth, the reading is equally accurate whether conducted in person or via video call. Dr. Nidhi offers both options so you can receive the wisdom of Jyotish from anywhere in the world.",
  },
];

export default function VedicAstrologyPage() {
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
          <span className="section-label">Vedic Astrology &middot; Jyotish</span>
          <h1 className="section-title">
            Decode Your <span className="gold-text">Celestial Blueprint</span>
          </h1>
          <p className="section-subtitle">
            Vedic astrology — Jyotish, the &ldquo;science of light&rdquo; — is
            one of the oldest and most precise systems of astrology in the world.
            Dr. Nidhi Bhan uses this ancient diagnostic tool to illuminate your
            life path, karmic patterns, and the timing of your greatest
            opportunities.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/booking" className="btn-primary">
              Book a Reading
            </Link>
            <Link href="/services" className="btn-secondary">
              All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Vedic vs Western */}
      <section
        className="section-padding"
        style={{ background: "var(--lavender-light)" }}
      >
        <div className="max-w-5xl mx-auto">
          <div className="section-header">
            <span className="section-label">Ancient Precision</span>
            <h2 className="section-title">Vedic vs. Western Astrology</h2>
            <p className="section-subtitle">
              While both systems have value, Vedic astrology offers a level of
              specificity and predictive accuracy that sets it apart as a true
              navigational science.
            </p>
          </div>
          <div className="space-y-4">
            {differences.map((item) => (
              <div key={item.aspect} className="card">
                <h3
                  className="text-base font-medium mb-3"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    color: "var(--warm-gold)",
                    fontSize: "1.1rem",
                  }}
                >
                  {item.aspect}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p
                      className="text-xs font-medium tracking-widest uppercase mb-1"
                      style={{ color: "var(--soft-gold)" }}
                    >
                      Vedic (Jyotish)
                    </p>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {item.vedic}
                    </p>
                  </div>
                  <div>
                    <p
                      className="text-xs font-medium tracking-widest uppercase mb-1"
                      style={{ color: "var(--text-muted)" }}
                    >
                      Western
                    </p>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: "var(--text-muted)" }}
                    >
                      {item.western}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What a Session Includes */}
      <section
        className="section-padding"
        style={{ background: "var(--cream)" }}
      >
        <div className="max-w-4xl mx-auto">
          <div className="section-header">
            <span className="section-label">Your Session</span>
            <h2 className="section-title">What a Birth Chart Reading Includes</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p
                className="text-base leading-relaxed mb-4"
                style={{ color: "var(--text-secondary)" }}
              >
                A birth chart reading with Dr. Nidhi Bhan is far more than a
                personality overview. It is a comprehensive analysis of the
                planetary positions at the exact moment and location of your birth,
                revealing the karmic blueprint of your soul&apos;s journey in this
                lifetime.
              </p>
              <p
                className="text-base leading-relaxed mb-4"
                style={{ color: "var(--text-secondary)" }}
              >
                During your session, Dr. Nidhi will analyze your Ascendant (Lagna),
                the positions and strengths of all nine Vedic planets, the twelve
                houses of your chart, and the intricate web of planetary aspects
                and yogas that define your unique potential.
              </p>
              <p
                className="text-base leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                You will also receive an analysis of your current Dasha period —
                the planetary timeline that governs the themes and energies active
                in your life right now — along with practical remedial measures
                to strengthen beneficial influences and mitigate challenges.
              </p>
            </div>
            <div className="space-y-4">
              {[
                "Complete birth chart (Rashi & Navamsa) analysis",
                "Planetary strengths, dignities, and aspects",
                "Current & upcoming Dasha period interpretation",
                "Key yogas and karmic indicators",
                "Remedial measures (mantras, gemstones, rituals)",
                "Personalized guidance on your specific questions",
                "Written summary emailed after your session",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3"
                >
                  <span
                    className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs mt-0.5"
                    style={{
                      background: "rgba(197, 166, 107, 0.12)",
                      color: "var(--warm-gold)",
                    }}
                  >
                    &#10003;
                  </span>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Areas of Insight */}
      <section
        className="section-padding"
        style={{ background: "var(--sage-light)" }}
      >
        <div className="max-w-5xl mx-auto">
          <div className="section-header">
            <span className="section-label">Areas of Clarity</span>
            <h2 className="section-title">Areas of Insight</h2>
            <p className="section-subtitle">
              Your birth chart holds answers to the most important questions of
              your life. Here are the key areas Dr. Nidhi illuminates through
              Vedic astrology.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {areas.map((area) => (
              <div key={area.title} className="card">
                <h3
                  className="text-lg font-light mb-3"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    color: "var(--charcoal)",
                  }}
                >
                  {area.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section
        className="section-padding"
        style={{ background: "var(--cream)" }}
      >
        <div className="max-w-3xl mx-auto">
          <div className="section-header">
            <span className="section-label">Common Questions</span>
            <h2 className="section-title">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.question} className="card">
                <h3
                  className="text-base font-medium mb-2"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    color: "var(--charcoal)",
                    fontSize: "1.15rem",
                  }}
                >
                  {faq.question}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="section-padding"
        style={{ background: "var(--peach-light)" }}
      >
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="section-title">
            Discover What the <span className="gold-text">Stars</span> Reveal
          </h2>
          <p
            className="text-base leading-relaxed mb-8"
            style={{ color: "var(--text-secondary)" }}
          >
            Your birth chart is the most personal map you will ever receive.
            Book your Vedic astrology session with Dr. Nidhi Bhan and gain the
            celestial clarity you have been seeking.
          </p>
          <Link href="/booking" className="btn-primary">
            Book Your Birth Chart Reading
          </Link>
        </div>
      </section>
    </>
  );
}
