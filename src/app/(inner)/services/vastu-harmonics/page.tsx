import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Vastu Harmonics Toronto | Sacred Space Alignment",
  description:
    "Transform your home and office with Vastu Shastra consultations in Toronto by Dr. Nidhi Bhan. Ancient Indian science of spatial alignment for health, wealth, relationships, and career growth.",
  keywords: [
    "vastu shastra Toronto",
    "vastu consultant",
    "sacred space design",
    "home energy healing",
    "vastu remedies",
    "office vastu consultation",
    "space energy alignment",
    "vastu expert Toronto",
  ],
  alternates: {
    canonical: "https://www.drnidhibhan.com/services/vastu-harmonics",
  },
  openGraph: {
    title: "Vastu Harmonics & Sacred Space Alignment — Dr. Nidhi Bhan",
    description:
      "Transform your living and working spaces with Vastu Shastra. Ancient Indian spatial science for health, wealth & harmony. Expert consultations in Toronto.",
    url: "https://www.drnidhibhan.com/services/vastu-harmonics",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vastu Harmonics Toronto — Dr. Nidhi Bhan",
    description:
      "Sacred space alignment through Vastu Shastra. Transform your home & office energy for health, wealth & harmony.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Vastu Harmonics — Sacred Space Alignment",
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
    "Vastu Shastra consultations for homes, offices, and commercial spaces. Dr. Nidhi Bhan analyzes directional energies and spatial flow to remove blockages and activate prosperity, health, and harmony.",
  url: "https://www.drnidhibhan.com/services/vastu-harmonics",
};

const areas = [
  {
    title: "Home & Residence",
    description:
      "Your home is a living energy field. Vastu analysis of your residence reveals how room placement, entrance direction, and element distribution affect the emotional well-being, sleep quality, and harmony of everyone living within it.",
  },
  {
    title: "Office & Workspace",
    description:
      "The spatial arrangement of your office directly impacts focus, decision-making, and professional growth. Dr. Nidhi aligns your workspace to support leadership energy, clear communication, and productive flow.",
  },
  {
    title: "Business & Commerce",
    description:
      "From retail shops to corporate headquarters, the Vastu of a business space influences customer attraction, revenue flow, and team cohesion. Strategic corrections can unlock stagnant growth and invite consistent prosperity.",
  },
  {
    title: "Relationships & Family",
    description:
      "Certain spatial imbalances create friction between family members or partners. Vastu corrections in bedrooms, living areas, and shared spaces restore warmth, understanding, and emotional connection in your relationships.",
  },
  {
    title: "Health & Vitality",
    description:
      "Chronic health issues often correlate with specific Vastu defects — a kitchen in the wrong zone, a bedroom over a negative energy point, or blocked ventilation pathways. Correcting these imbalances supports physical recovery and sustained vitality.",
  },
  {
    title: "Wealth & Abundance",
    description:
      "Financial stagnation frequently traces back to disrupted energy flow in the north and northeast zones of a property. Dr. Nidhi identifies and corrects wealth-blocking patterns to restore the natural current of abundance into your life.",
  },
];

const steps = [
  {
    step: "1",
    title: "Floor Plan & Direction Analysis",
    description:
      "Dr. Nidhi begins by studying the floor plan of your property along with precise compass directions. She maps the energy grid of your space, identifying which zones correspond to health, wealth, relationships, career, and spiritual growth.",
  },
  {
    step: "2",
    title: "Element & Energy Assessment",
    description:
      "Each direction is governed by one of the five elements — Earth, Water, Fire, Air, and Space. Dr. Nidhi evaluates whether these elements are balanced or conflicting in your property, revealing the root cause of any stagnation or disharmony.",
  },
  {
    step: "3",
    title: "Blockage Identification",
    description:
      "Through careful analysis, Dr. Nidhi pinpoints specific Vastu defects — misplaced kitchens, bathrooms in auspicious zones, blocked northeast corners, or heavy objects suppressing growth energy — that are creating obstacles in your life.",
  },
  {
    step: "4",
    title: "Practical Remedies & Corrections",
    description:
      "You receive a detailed set of remedies that do not require demolition or major renovation. These include furniture rearrangements, element corrections using colors and materials, energy activation techniques, and placement of specific remedial objects.",
  },
  {
    step: "5",
    title: "Follow-Up & Integration",
    description:
      "After implementing the corrections, Dr. Nidhi offers a follow-up review to assess the energy shift in your space and fine-tune any adjustments. Most clients begin noticing positive changes within weeks of applying the remedies.",
  },
];

const faqs = [
  {
    question: "Do I need to renovate or demolish anything for Vastu corrections?",
    answer:
      "No. Dr. Nidhi specializes in non-invasive Vastu remedies that work without structural changes. Her approach uses strategic rearrangement of furniture and objects, element balancing through colors, materials, and textures, and specific energy activation techniques. The goal is to harmonize the existing space rather than rebuild it. In rare cases where a structural defect is severe, she will discuss options transparently, but the vast majority of corrections require no construction whatsoever.",
  },
  {
    question: "Can Vastu Shastra help if I am renting and cannot make permanent changes?",
    answer:
      "Absolutely. Many of Dr. Nidhi's clients are renters. Vastu corrections often involve movable elements — repositioning furniture, adding specific colors through decor, placing remedial objects in key zones, and adjusting how you use different areas of your space. These changes are entirely reversible and can be taken with you when you move to a new home.",
  },
  {
    question: "What information do I need to provide for a Vastu consultation?",
    answer:
      "For an accurate assessment, Dr. Nidhi requires a floor plan of your property (a hand-drawn sketch is acceptable), the compass direction your main entrance faces, photographs of key rooms, and a description of the challenges you are currently experiencing — whether in health, finances, relationships, or career. For remote consultations, she will guide you through taking accurate compass readings with your smartphone.",
  },
  {
    question: "Is Vastu Shastra the same as Feng Shui?",
    answer:
      "While both systems address the relationship between space and well-being, they are distinct traditions with different origins and methodologies. Vastu Shastra originates from the ancient Indian Vedic tradition and is based on directional energies, the five elements, and the influence of celestial bodies on spatial geometry. Feng Shui is rooted in Chinese Taoist philosophy and uses a different framework. Dr. Nidhi practices authentic Vastu Shastra as described in the classical Indian texts.",
  },
  {
    question: "How soon can I expect results after implementing Vastu corrections?",
    answer:
      "The timeline varies depending on the severity of the defects and the nature of the corrections. Many clients report subtle but noticeable shifts in energy, mood, and circumstances within two to four weeks of implementing changes. Deeper financial or relationship patterns may take two to three months to fully shift. Dr. Nidhi recommends implementing all suggested corrections together for the most coherent and rapid transformation.",
  },
];

export default function VastuHarmonicsPage() {
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
          <span className="section-label">Vastu Shastra &middot; Sacred Space Science</span>
          <h1 className="section-title">
            Align Your Space, <span className="gold-text">Transform Your Life</span>
          </h1>
          <p className="section-subtitle">
            Vastu Shastra — the ancient Indian science of architecture and spatial
            harmony — reveals how the energy of your living and working spaces
            shapes every dimension of your life. Dr. Nidhi Bhan analyzes the
            directional energies, element placement, and spatial flow of your
            environment to remove blockages and activate prosperity, health, and
            well-being.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/booking" className="btn-primary">
              Book a Consultation
            </Link>
            <Link href="/services" className="btn-secondary">
              All Services
            </Link>
          </div>
        </div>
      </section>

      {/* What is Vastu Shastra */}
      <section
        className="section-padding"
        style={{ background: "var(--lavender-light)" }}
      >
        <div className="max-w-4xl mx-auto">
          <div className="section-header">
            <span className="section-label">Ancient Wisdom</span>
            <h2 className="section-title">What is Vastu Shastra?</h2>
            <p className="section-subtitle">
              A five-thousand-year-old Vedic science that governs the relationship
              between space, direction, and human well-being.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p
                className="text-base leading-relaxed mb-4"
                style={{ color: "var(--text-secondary)" }}
              >
                Vastu Shastra literally translates to &ldquo;the science of
                dwelling.&rdquo; Rooted in the same Vedic tradition as Ayurveda
                and Jyotish, it is the original system of architecture and spatial
                design — a science that understands every structure as a living
                energy body influenced by the cardinal directions, the five
                elements, and the gravitational and magnetic forces of the Earth.
              </p>
              <p
                className="text-base leading-relaxed mb-4"
                style={{ color: "var(--text-secondary)" }}
              >
                When a space is aligned with these natural forces, the people within
                it experience greater clarity, vitality, and opportunity. When the
                alignment is disrupted — through incorrect room placement, blocked
                directional energy, or elemental imbalance — the effects manifest
                as persistent challenges in health, finances, relationships, or
                career.
              </p>
              <p
                className="text-base leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                Dr. Nidhi Bhan brings this ancient science into the modern context,
                offering practical, non-invasive remedies that harmonize your
                existing space without requiring demolition or costly renovation.
                Her approach bridges classical Vastu principles with contemporary
                living, making this wisdom accessible and actionable for homes,
                offices, and commercial properties alike.
              </p>
            </div>
            <div className="space-y-4">
              {[
                "Based on the interplay of five elements: Earth, Water, Fire, Air, and Space",
                "Each cardinal and intercardinal direction governs a specific life domain",
                "The northeast (Ishanya) is the most sacred zone — the gateway of cosmic energy",
                "Spatial imbalances create measurable effects on health, mood, and fortune",
                "Corrections work by restoring the natural energy flow of a structure",
                "No demolition required — remedies use rearrangement, color, and element balancing",
                "Equally effective for homes, offices, shops, and industrial spaces",
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

      {/* Areas of Application */}
      <section
        className="section-padding"
        style={{ background: "var(--sage-light)" }}
      >
        <div className="max-w-5xl mx-auto">
          <div className="section-header">
            <span className="section-label">Areas of Application</span>
            <h2 className="section-title">Where Vastu Makes a Difference</h2>
            <p className="section-subtitle">
              The energy of your space influences every area of your life. Here
              are the key domains where Vastu corrections create the most
              profound transformation.
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

      {/* Consultation Process */}
      <section
        className="section-padding"
        style={{ background: "var(--cream)" }}
      >
        <div className="max-w-4xl mx-auto">
          <div className="section-header">
            <span className="section-label">Your Consultation</span>
            <h2 className="section-title">What to Expect</h2>
            <p className="section-subtitle">
              Dr. Nidhi&apos;s Vastu consultation is a structured, thorough process
              designed to identify the root spatial causes behind your challenges
              and deliver actionable remedies.
            </p>
          </div>
          <div className="space-y-4">
            {steps.map((item) => (
              <div key={item.step} className="card">
                <div className="flex items-start gap-4">
                  <span
                    className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium"
                    style={{
                      background: "rgba(197, 166, 107, 0.12)",
                      color: "var(--warm-gold)",
                      fontFamily: "'Cormorant Garamond', serif",
                    }}
                  >
                    {item.step}
                  </span>
                  <div>
                    <h3
                      className="text-base font-medium mb-2"
                      style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        color: "var(--charcoal)",
                        fontSize: "1.15rem",
                      }}
                    >
                      {item.title}
                    </h3>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section
        className="section-padding"
        style={{ background: "var(--lavender-light)" }}
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
            Harmonize Your <span className="gold-text">Space</span>
          </h2>
          <p
            className="text-base leading-relaxed mb-8"
            style={{ color: "var(--text-secondary)" }}
          >
            Your space is not neutral — it is either supporting your growth or
            silently working against it. Book your Vastu consultation with
            Dr. Nidhi Bhan and discover what your environment has been trying to
            tell you.
          </p>
          <Link href="/booking" className="btn-primary">
            Book Your Vastu Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
