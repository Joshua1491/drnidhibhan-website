import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Past Life Regression Toronto | Dr. Nidhi Bhan",
  description:
    "Experience past life regression therapy in Toronto with Dr. Nidhi Bhan. Heal karmic patterns, release deep-seated fears, and uncover the soul memories shaping your present life.",
  keywords: [
    "past life regression Toronto",
    "past life therapy",
    "karmic healing",
    "regression therapy Toronto",
    "past life regression near me",
  ],
  alternates: {
    canonical: "https://www.drnidhibhan.com/services/past-life-regression",
  },
  openGraph: {
    title: "Past Life Regression Therapy Toronto — Dr. Nidhi Bhan",
    description:
      "Heal karmic patterns, release deep-seated fears & uncover soul memories shaping your present life. Past life regression therapy in Toronto.",
    url: "https://www.drnidhibhan.com/services/past-life-regression",
  },
  twitter: {
    card: "summary_large_image",
    title: "Past Life Regression Toronto — Dr. Nidhi Bhan",
    description:
      "Heal karmic patterns & release deep-seated fears. Past life regression therapy in Toronto.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Past Life Regression Therapy",
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
    "Past life regression therapy sessions for karmic healing, phobia resolution, and soul-level transformation in Toronto and online.",
  url: "https://www.drnidhibhan.com/services/past-life-regression",
};

const expectations = [
  {
    step: "01",
    title: "Pre-Session Preparation",
    description:
      "Before your session, Dr. Nidhi will guide you through a brief intake conversation to understand the themes you wish to explore. You may be experiencing unexplained fears, recurring relationship dynamics, chronic physical sensations, or a deep curiosity about your soul's history. This conversation helps set a clear intention for the regression.",
  },
  {
    step: "02",
    title: "Guided Relaxation & Induction",
    description:
      "The session begins with a gentle, progressive relaxation that calms the conscious mind and opens the doorway to deeper memory. Dr. Nidhi uses a combination of breathwork, visualization, and hypnotic deepening techniques to guide you into a receptive state where past-life memories can surface naturally.",
  },
  {
    step: "03",
    title: "The Regression Journey",
    description:
      "Once in a deep yet fully aware state, you will be gently guided to access memories from one or more past lifetimes. You may experience vivid imagery, emotional sensations, physical feelings, or intuitive knowing. Dr. Nidhi facilitates the journey with careful questions that help you explore the significant events, relationships, and lessons from that lifetime.",
  },
  {
    step: "04",
    title: "Soul Lesson & Karmic Healing",
    description:
      "At the culmination of the regression, Dr. Nidhi guides you to the moment of transition between lifetimes — a profoundly healing space where you can access the higher perspective of your soul. Here, you gain clarity on the karmic lessons, soul contracts, and unresolved patterns that have carried forward into your current life.",
  },
  {
    step: "05",
    title: "Integration & Grounding",
    description:
      "You are gently returned to full waking consciousness with grounding techniques that anchor the insights and healing into your present awareness. Dr. Nidhi then discusses the experience with you, helping you connect the past-life themes to your current life circumstances and offering guidance on integrating the healing.",
  },
];

const whoItHelps = [
  {
    title: "Unexplained Fears & Phobias",
    description:
      "Intense fears that have no basis in your current life experience — fear of water, heights, fire, enclosed spaces, or specific locations — often trace back to traumatic events in past lifetimes. Regression allows you to witness the origin, release the stored trauma, and dissolve the fear at its root.",
  },
  {
    title: "Recurring Relationship Patterns",
    description:
      "If you find yourself repeating the same painful dynamics in relationships — attracting similar partners, experiencing the same conflicts, or feeling inexplicably bonded to certain people — past life regression can reveal the karmic contracts and soul agreements at play, freeing you to create healthier patterns.",
  },
  {
    title: "Chronic Physical Symptoms",
    description:
      "Some physical ailments that resist conventional treatment may have energetic roots in past-life trauma. Unexplained pain, tension in specific body areas, or chronic conditions can sometimes be traced to injuries, wounds, or experiences from previous incarnations.",
  },
  {
    title: "Feelings of Being &ldquo;Stuck&rdquo;",
    description:
      "A persistent sense of stagnation, purposelessness, or feeling blocked in specific life areas — despite your best conscious efforts — may indicate unresolved karmic themes. Past life regression helps identify and release these deep-seated blocks so energy can flow freely again.",
  },
  {
    title: "Spiritual Seekers & Curious Souls",
    description:
      "You do not need to have a specific problem to benefit from past life regression. Many people are drawn to this work out of a genuine desire to understand their soul's journey, deepen their spiritual practice, and gain a broader perspective on the meaning and purpose of their current incarnation.",
  },
];

const faqs = [
  {
    question: "Do I need to believe in past lives for this to work?",
    answer:
      "No. Whether you view the experience as literal past-life memories, metaphorical stories from the subconscious, or symbolic imagery created by your deeper mind, the therapeutic benefits remain the same. Many clients who begin as skeptics report profound emotional release and lasting shifts regardless of their belief framework. Dr. Nidhi welcomes all perspectives and encourages you to simply remain open to the experience.",
  },
  {
    question: "Will I remember the session?",
    answer:
      "Yes. Unlike stage hypnosis portrayals, you remain fully aware throughout the entire regression. Most clients remember the experience vividly, much like recalling a powerful dream. Some details may become clearer in the days following the session as your conscious mind continues to integrate the experience.",
  },
  {
    question: "Is past life regression safe?",
    answer:
      "Absolutely. Past life regression is a gentle, non-invasive process conducted in a safe, supportive environment. You are in control at all times and can choose to stop or change direction at any point. Dr. Nidhi is a trained and experienced regression therapist who creates a deeply held space for your healing journey.",
  },
  {
    question: "How long is a past life regression session?",
    answer:
      "A full past life regression session with Dr. Nidhi typically lasts 90 minutes to 2 hours. This allows adequate time for the initial consultation, the induction and deepening process, the regression itself, and the integration discussion afterward. First-time sessions may run slightly longer to ensure a complete and unhurried experience.",
  },
  {
    question: "How many sessions do I need?",
    answer:
      "Many people experience significant insight and healing from a single session. However, if you are working with complex karmic patterns or wish to explore multiple past lifetimes, a series of sessions may be beneficial. Dr. Nidhi will advise you on the best approach based on your individual needs and the themes that emerge during your first regression.",
  },
  {
    question: "Can past life regression be done online?",
    answer:
      "Yes. Dr. Nidhi offers past life regression sessions both in person in Toronto and via secure video call. Online sessions are highly effective because the work is guided through voice, and many clients find the comfort of their own home enhances their ability to relax and go deeper into the regression experience.",
  },
];

export default function PastLifeRegressionPage() {
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
          <span className="section-label">Past Life Regression</span>
          <h1 className="section-title">
            Heal the Past, <span className="gold-text">Free the Present</span>
          </h1>
          <p className="section-subtitle">
            Past life regression therapy with Dr. Nidhi Bhan in Toronto. Journey
            into the soul memories that shape your fears, relationships, and life
            patterns — and release the karmic imprints that no longer serve your
            evolution.
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

      {/* What is Past Life Regression */}
      <section
        className="section-padding"
        style={{ background: "var(--lavender-light)" }}
      >
        <div className="max-w-4xl mx-auto">
          <div className="section-header">
            <span className="section-label">The Modality</span>
            <h2 className="section-title">What is Past Life Regression?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div>
              <p
                className="text-base leading-relaxed mb-4"
                style={{ color: "var(--text-secondary)" }}
              >
                Past life regression is a therapeutic technique that uses guided
                hypnosis to access memories from previous incarnations stored
                within the subconscious mind. Rooted in the understanding that
                the soul carries experiences across lifetimes, this modality
                allows you to explore the deeper origins of patterns, fears, and
                relationships that shape your current existence.
              </p>
              <p
                className="text-base leading-relaxed mb-4"
                style={{ color: "var(--text-secondary)" }}
              >
                The concept of reincarnation and karmic healing has been
                recognized across cultures for thousands of years — from the Vedic
                traditions of India to the Buddhist teachings of Southeast Asia,
                from ancient Egyptian beliefs to indigenous wisdom worldwide. Past
                life regression therapy brings this timeless understanding into a
                modern therapeutic framework.
              </p>
              <p
                className="text-base leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                Dr. Nidhi Bhan approaches past life regression as both a healing
                art and a tool for profound self-understanding. By witnessing the
                significant moments, relationships, and transitions from previous
                lifetimes, you gain a soul-level perspective on the challenges and
                gifts of your present incarnation.
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
                The Science Behind It
              </h3>
              <p
                className="text-sm leading-relaxed mb-4"
                style={{ color: "var(--text-secondary)" }}
              >
                While past life regression exists at the intersection of
                spirituality and therapy, research by pioneers like Dr. Brian
                Weiss, Dr. Michael Newton, and Dr. Ian Stevenson has documented
                thousands of cases where regression subjects recalled verifiable
                details from past eras — names, locations, and historical events
                they had no prior knowledge of.
              </p>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                From a therapeutic standpoint, past life regression accesses the
                same deep subconscious states used in clinical hypnotherapy. Whether
                the memories are literal past lives or powerful metaphors created
                by the deeper mind, the emotional release and behavioral shifts
                clients experience are real and measurable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section
        className="section-padding"
        style={{ background: "var(--cream)" }}
      >
        <div className="max-w-4xl mx-auto">
          <div className="section-header">
            <span className="section-label">Your Journey</span>
            <h2 className="section-title">What to Expect</h2>
            <p className="section-subtitle">
              A past life regression session with Dr. Nidhi is a deeply personal
              and carefully guided experience, designed to feel safe, sacred, and
              profoundly revealing.
            </p>
          </div>
          <div className="space-y-6">
            {expectations.map((item) => (
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

      {/* Who It Helps */}
      <section
        className="section-padding"
        style={{ background: "var(--blush-light)" }}
      >
        <div className="max-w-5xl mx-auto">
          <div className="section-header">
            <span className="section-label">Is This for You?</span>
            <h2 className="section-title">Who Past Life Regression Helps</h2>
            <p className="section-subtitle">
              Past life regression therapy serves a wide spectrum of people —
              from those seeking resolution of specific issues to spiritual
              explorers deepening their self-knowledge.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {whoItHelps.map((item) => (
              <div key={item.title} className="card">
                <h3
                  className="text-lg font-light mb-3"
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
                  dangerouslySetInnerHTML={{ __html: item.description }}
                />
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
        style={{ background: "var(--sage-light)" }}
      >
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="section-title">
            Begin Your <span className="gold-text">Soul Journey</span>
          </h2>
          <p
            className="text-base leading-relaxed mb-8"
            style={{ color: "var(--text-secondary)" }}
          >
            The answers you seek may lie in the memories your soul already
            carries. Book your past life regression session with Dr. Nidhi Bhan
            in Toronto or online and discover the karmic patterns ready to be
            healed.
          </p>
          <Link href="/booking" className="btn-primary">
            Book Your Regression Session
          </Link>
        </div>
      </section>
    </>
  );
}
