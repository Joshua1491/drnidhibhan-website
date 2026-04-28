import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Subliminal Reconditioning Toronto",
  description:
    "Subliminal reconditioning with Dr. Nidhi Bhan in Toronto. Rewire deeply embedded subconscious thought patterns, dissolve self-sabotage, and install empowering beliefs for lasting transformation.",
  keywords: [
    "subliminal reconditioning",
    "subconscious rewiring",
    "subliminal therapy Toronto",
    "subconscious reprogramming Toronto",
    "subliminal mind therapy",
    "rewire subconscious beliefs",
    "subliminal reconditioning near me",
  ],
  alternates: {
    canonical: "https://www.drnidhibhan.com/services/subliminal-reconditioning",
  },
  openGraph: {
    title: "Subliminal Reconditioning Toronto — Dr. Nidhi Bhan",
    description:
      "Rewire deeply embedded subconscious thought patterns and install empowering beliefs. Subliminal reconditioning in Toronto & virtual worldwide.",
    url: "https://www.drnidhibhan.com/services/subliminal-reconditioning",
  },
  twitter: {
    card: "summary_large_image",
    title: "Subliminal Reconditioning Toronto — Dr. Nidhi Bhan",
    description:
      "Rewire subconscious thought patterns and dissolve self-sabotage with subliminal reconditioning in Toronto.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Subliminal Reconditioning",
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
    "Subliminal reconditioning sessions for rewiring subconscious thought patterns, dissolving self-sabotage, building confidence, and installing empowering beliefs in Toronto.",
  url: "https://www.drnidhibhan.com/services/subliminal-reconditioning",
};

const conditions = [
  "Self-Sabotage",
  "Low Confidence",
  "Scarcity Mindset",
  "Negative Self-Talk",
  "Procrastination",
  "Relationship Patterns",
  "Limiting Money Beliefs",
  "Fear of Success",
  "Imposter Syndrome",
  "People-Pleasing",
  "Perfectionism",
  "Emotional Reactivity",
];

const processSteps = [
  {
    step: "01",
    title: "Subconscious Assessment",
    description:
      "Dr. Nidhi begins with an in-depth exploration of your internal belief landscape. Through careful dialogue, she identifies the hidden narratives, emotional imprints, and deeply held assumptions that silently shape your decisions, reactions, and self-perception.",
  },
  {
    step: "02",
    title: "Pattern Mapping",
    description:
      "Together, you trace the origins of your limiting patterns — the moments, environments, and experiences that encoded them into your subconscious. This mapping process illuminates the invisible architecture that has been running your life beneath the surface of conscious awareness.",
  },
  {
    step: "03",
    title: "Subliminal Installation",
    description:
      "Using precision-crafted subliminal techniques, Dr. Nidhi bypasses the critical mind and delivers new, empowering beliefs directly to the subconscious. These carefully designed suggestions replace outdated programming with thought patterns aligned to your highest potential.",
  },
  {
    step: "04",
    title: "Reinforcement & Integration",
    description:
      "The session concludes with reinforcement protocols that deepen the new neural pathways. You receive personalized subliminal tools and practices to continue the reconditioning process between sessions, ensuring the shifts become permanent and self-sustaining.",
  },
];

const faqs = [
  {
    question: "What is the difference between subliminal reconditioning and hypnotherapy?",
    answer:
      "While both modalities work with the subconscious mind, subliminal reconditioning specifically targets the installation and replacement of deeply embedded belief patterns. Hypnotherapy uses trance states for a broad range of therapeutic goals, whereas subliminal reconditioning focuses on precision rewiring — identifying exact limiting beliefs and replacing them with empowering alternatives using techniques designed to bypass the critical mind entirely.",
  },
  {
    question: "How long does it take to see results?",
    answer:
      "Many clients notice subtle but meaningful shifts after the very first session — changes in self-talk, emotional responses, or decision-making patterns. Deeper, more entrenched patterns typically require 4 to 8 sessions for lasting transformation. Dr. Nidhi will discuss a personalized timeline based on your specific goals during your initial consultation.",
  },
  {
    question: "Is subliminal reconditioning safe?",
    answer:
      "Absolutely. Subliminal reconditioning is a gentle, non-invasive process. You are never made to accept beliefs that conflict with your values or wellbeing. Dr. Nidhi works collaboratively with you to determine the exact new beliefs to install, and your subconscious will naturally reject anything that does not serve your highest good. The process is deeply relaxing and most clients find it profoundly calming.",
  },
  {
    question: "Will I be aware of what is happening during a session?",
    answer:
      "Yes. Unlike the misconceptions around subliminal techniques, you remain aware and present throughout the session. Some of the reconditioning work takes place at the edge of conscious perception, which is precisely what allows it to bypass the critical mind and reach the subconscious directly. You may feel deeply relaxed, but you are never unconscious or out of control.",
  },
  {
    question: "Can subliminal reconditioning be done online?",
    answer:
      "Yes. Dr. Nidhi offers subliminal reconditioning sessions both in person in Toronto and virtually via secure video call. Virtual sessions are equally effective because the techniques work through auditory and cognitive channels that translate seamlessly to an online format. Many clients around the world work with Dr. Nidhi remotely.",
  },
];

export default function SubliminalReconditioningPage() {
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
          <span className="section-label">Subliminal Reconditioning</span>
          <h1 className="section-title">
            Rewire Your <span className="gold-text">Deepest Beliefs</span>
          </h1>
          <p className="section-subtitle">
            Subliminal reconditioning in Toronto with Dr. Nidhi Bhan. Go beyond
            the conscious mind to dissolve self-sabotage, replace limiting
            beliefs, and install thought patterns that align with the life you
            are meant to live.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/booking" className="btn-primary">
              Book a Session
            </Link>
            <Link href="/services" className="btn-secondary">
              All Services
            </Link>
          </div>
        </div>
      </section>

      {/* What is Subliminal Reconditioning */}
      <section
        className="section-padding"
        style={{ background: "var(--blush-light)" }}
      >
        <div className="max-w-4xl mx-auto">
          <div className="section-header">
            <span className="section-label">Understanding the Modality</span>
            <h2 className="section-title">What is Subliminal Reconditioning?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div>
              <p
                className="text-base leading-relaxed mb-4"
                style={{ color: "var(--text-secondary)" }}
              >
                Subliminal reconditioning is an advanced therapeutic modality
                that works beneath conscious awareness to rewire deeply embedded
                thought patterns. Every belief you hold about yourself, your
                worth, your capabilities, and your place in the world was
                installed at the subconscious level — often during childhood or
                through repeated emotional experiences. These beliefs run
                silently in the background, shaping every decision, reaction,
                and outcome in your life.
              </p>
              <p
                className="text-base leading-relaxed mb-4"
                style={{ color: "var(--text-secondary)" }}
              >
                The critical mind acts as a gatekeeper, filtering out
                information that contradicts existing beliefs — which is why
                positive affirmations and willpower alone often fail to create
                lasting change. Subliminal reconditioning uses carefully designed
                techniques to bypass this gatekeeper, delivering empowering new
                beliefs directly to the subconscious where they can take root
                and flourish.
              </p>
              <p
                className="text-base leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                The result is transformation that feels natural and effortless.
                Rather than battling against yourself, you find that new ways of
                thinking, feeling, and behaving emerge organically — because the
                underlying programming has been fundamentally changed.
              </p>
            </div>
            <div className="card">
              <h3
                className="text-lg font-light mb-4"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  color: "var(--charcoal)",
                }}
              >
                Dr. Nidhi&apos;s Approach
              </h3>
              <p
                className="text-sm leading-relaxed mb-4"
                style={{ color: "var(--text-secondary)" }}
              >
                Dr. Nidhi Bhan brings a rare depth to subliminal reconditioning
                by integrating her knowledge of the subconscious mind with
                Vedic wisdom and energy-based healing practices. This allows
                her to work not just with thought patterns, but with the
                emotional and energetic imprints that anchor those patterns in
                place.
              </p>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                Each session is meticulously tailored to your unique belief
                landscape. Dr. Nidhi identifies the precise limiting beliefs
                that are holding you back and crafts targeted subliminal
                interventions to replace them with beliefs that support your
                growth, abundance, and authentic self-expression.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Conditions Treated */}
      <section
        className="section-padding"
        style={{ background: "var(--cream)" }}
      >
        <div className="max-w-4xl mx-auto">
          <div className="section-header">
            <span className="section-label">Areas of Transformation</span>
            <h2 className="section-title">What Subliminal Reconditioning Helps With</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {conditions.map((condition) => (
              <div
                key={condition}
                className="card text-center py-5 px-4"
              >
                <p
                  className="text-sm font-medium"
                  style={{ color: "var(--text-primary)" }}
                >
                  {condition}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Process */}
      <section
        className="section-padding"
        style={{ background: "var(--lavender-light)" }}
      >
        <div className="max-w-4xl mx-auto">
          <div className="section-header">
            <span className="section-label">Your Journey</span>
            <h2 className="section-title">The Reconditioning Process</h2>
            <p className="section-subtitle">
              Every session follows a precise, structured process designed to
              identify and replace the subconscious patterns that no longer
              serve you.
            </p>
          </div>
          <div className="space-y-6">
            {processSteps.map((item) => (
              <div key={item.step} className="card flex gap-6 items-start">
                <div
                  className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-sm font-medium"
                  style={{
                    background: "rgba(197, 166, 107, 0.1)",
                    color: "var(--warm-gold)",
                  }}
                >
                  {item.step}
                </div>
                <div>
                  <h3
                    className="text-lg font-light mb-2"
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      color: "var(--charcoal)",
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
            Ready to <span className="gold-text">Rewire</span> from Within?
          </h2>
          <p
            className="text-base leading-relaxed mb-8"
            style={{ color: "var(--text-secondary)" }}
          >
            Take the first step toward freeing yourself from limiting beliefs.
            Book your subliminal reconditioning session with Dr. Nidhi Bhan in
            Toronto or online, and begin the journey of deep subconscious
            transformation.
          </p>
          <Link href="/booking" className="btn-primary">
            Book Your Reconditioning Session
          </Link>
        </div>
      </section>
    </>
  );
}
