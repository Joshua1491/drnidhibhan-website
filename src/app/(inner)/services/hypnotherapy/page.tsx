import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hypnotherapy Toronto | Clinical Hypnotherapy",
  description:
    "Experience clinical hypnotherapy in Toronto with Dr. Nidhi Bhan. Subconscious reprogramming for anxiety, trauma, habits, and emotional healing. Book your session today.",
  keywords: [
    "hypnotherapy Toronto",
    "clinical hypnotherapy",
    "subconscious reprogramming",
    "hypnotherapy near me",
    "hypnosis therapy Toronto",
  ],
  alternates: {
    canonical: "https://www.drnidhibhan.com/services/hypnotherapy",
  },
  openGraph: {
    title: "Clinical Hypnotherapy Toronto — Dr. Nidhi Bhan",
    description:
      "Subconscious reprogramming for anxiety, trauma, habits, and emotional healing. Clinical hypnotherapy in Toronto & virtual worldwide.",
    url: "https://www.drnidhibhan.com/services/hypnotherapy",
  },
  twitter: {
    card: "summary_large_image",
    title: "Clinical Hypnotherapy Toronto — Dr. Nidhi Bhan",
    description:
      "Subconscious reprogramming for anxiety, trauma, habits & emotional healing in Toronto.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Clinical Hypnotherapy",
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
    "Clinical hypnotherapy sessions for subconscious reprogramming, anxiety relief, trauma healing, habit transformation, and emotional wellness in Toronto.",
  url: "https://www.drnidhibhan.com/services/hypnotherapy",
};

const conditions = [
  "Anxiety & Stress",
  "Phobias & Fears",
  "Smoking Cessation",
  "Weight Management",
  "Sleep Disorders",
  "Chronic Pain",
  "Low Self-Esteem",
  "Grief & Loss",
  "Trauma & PTSD",
  "Relationship Patterns",
  "Performance Anxiety",
  "Emotional Eating",
];

const processSteps = [
  {
    step: "01",
    title: "Discovery Consultation",
    description:
      "We begin with a compassionate conversation to understand your history, current challenges, and therapeutic goals. This helps Dr. Nidhi design a session tailored to your unique subconscious landscape.",
  },
  {
    step: "02",
    title: "Induction & Deepening",
    description:
      "Using gentle, guided relaxation techniques, you are eased into a deeply receptive trance state. You remain fully aware and in control throughout the entire process — hypnotherapy is not about losing control, but about gaining access.",
  },
  {
    step: "03",
    title: "Subconscious Reprogramming",
    description:
      "While in trance, Dr. Nidhi uses carefully crafted suggestions, imagery, and therapeutic techniques to address the root cause of your issue at the subconscious level, where lasting change truly begins.",
  },
  {
    step: "04",
    title: "Integration & Anchoring",
    description:
      "The session concludes with anchoring techniques that help you carry the therapeutic shifts into your daily life. You receive personalized guidance for reinforcing the changes between sessions.",
  },
];

const faqs = [
  {
    question: "Is hypnotherapy safe?",
    answer:
      "Absolutely. Clinical hypnotherapy is a well-established therapeutic modality recognized by medical and psychological associations worldwide. You remain fully conscious and in control throughout the session. No one can make you do anything against your will while in a hypnotic state.",
  },
  {
    question: "How many sessions will I need?",
    answer:
      "The number of sessions varies depending on the nature and depth of the issue. Many clients experience significant shifts within 3 to 6 sessions. Some concerns, such as simple phobias or habit cessation, may resolve in fewer sessions, while deeper trauma work may require a longer therapeutic arc.",
  },
  {
    question: "Can everyone be hypnotized?",
    answer:
      "Most people can enter a therapeutic trance state. Hypnosis is a natural phenomenon — you experience similar states when you are deeply absorbed in a book, a film, or while driving on autopilot. Dr. Nidhi uses multiple induction techniques to find the approach that works best for you.",
  },
  {
    question: "What does hypnotherapy feel like?",
    answer:
      "Most clients describe the experience as deeply relaxing and peaceful. You may feel a pleasant heaviness or lightness in your body, and your mind becomes calm and focused. Many people say it feels like that blissful state between waking and sleep.",
  },
  {
    question: "Is hypnotherapy available online?",
    answer:
      "Yes. Dr. Nidhi offers both in-person sessions in Toronto and virtual hypnotherapy sessions via secure video call. Online sessions are equally effective and offer the comfort of healing from your own space.",
  },
];

export default function HypnotherapyPage() {
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
          <span className="section-label">Clinical Hypnotherapy</span>
          <h1 className="section-title">
            Reprogram Your <span className="gold-text">Subconscious Mind</span>
          </h1>
          <p className="section-subtitle">
            Clinical hypnotherapy in Toronto with Dr. Nidhi Bhan. Access the
            deepest layers of your mind to dissolve limiting beliefs, heal
            emotional wounds, and create lasting transformation from within.
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

      {/* What is Hypnotherapy */}
      <section
        className="section-padding"
        style={{ background: "var(--blush-light)" }}
      >
        <div className="max-w-4xl mx-auto">
          <div className="section-header">
            <span className="section-label">Understanding the Modality</span>
            <h2 className="section-title">What is Clinical Hypnotherapy?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div>
              <p
                className="text-base leading-relaxed mb-4"
                style={{ color: "var(--text-secondary)" }}
              >
                Clinical hypnotherapy is a powerful, evidence-based therapeutic
                technique that works directly with the subconscious mind — the
                part of you that stores beliefs, memories, habits, and emotional
                responses. Unlike the dramatized portrayals in popular media,
                clinical hypnotherapy is a gentle, collaborative process where
                you remain fully aware and in complete control.
              </p>
              <p
                className="text-base leading-relaxed mb-4"
                style={{ color: "var(--text-secondary)" }}
              >
                Your subconscious mind operates approximately 95% of your daily
                behavior. When we experience trauma, emotional wounding, or
                repeated negative experiences, the subconscious forms protective
                patterns that can later manifest as anxiety, phobias, self-sabotage,
                or chronic emotional pain.
              </p>
              <p
                className="text-base leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                Subconscious reprogramming through hypnotherapy allows us to
                gently access these deep-seated patterns and transform them at
                their source. Rather than simply managing symptoms, hypnotherapy
                addresses the root cause — creating profound and lasting change.
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
                Dr. Nidhi Bhan combines classical hypnotherapy techniques with
                her deep understanding of Vedic wisdom and energy healing. This
                integrative approach allows her to work with the whole person —
                mind, body, and spirit — rather than treating symptoms in
                isolation.
              </p>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                Each session is uniquely crafted to your needs. Whether you are
                working through anxiety, healing from past trauma, or seeking to
                break free from self-limiting patterns, Dr. Nidhi creates a
                sacred, supportive space for your transformation.
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
            <span className="section-label">Areas of Healing</span>
            <h2 className="section-title">Conditions Treated with Hypnotherapy</h2>
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
            <h2 className="section-title">The Hypnotherapy Process</h2>
            <p className="section-subtitle">
              Every session follows a thoughtful, structured process designed to
              guide you safely into deep healing.
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
            Ready to <span className="gold-text">Transform</span> from Within?
          </h2>
          <p
            className="text-base leading-relaxed mb-8"
            style={{ color: "var(--text-secondary)" }}
          >
            Take the first step toward lasting change. Book your clinical
            hypnotherapy session with Dr. Nidhi Bhan in Toronto or online, and
            begin the journey of subconscious reprogramming.
          </p>
          <Link href="/booking" className="btn-primary">
            Book Your Hypnotherapy Session
          </Link>
        </div>
      </section>
    </>
  );
}
