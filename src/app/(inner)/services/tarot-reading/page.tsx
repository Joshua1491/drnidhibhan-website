import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tarot Reading Toronto | Intuitive Guidance",
  description:
    "Experience tarot and intuitive readings with Dr. Nidhi Bhan in Toronto. Gain actionable clarity on relationships, career, life transitions, and spiritual growth through the sacred language of Tarot.",
  keywords: [
    "tarot reading Toronto",
    "intuitive reading",
    "tarot consultation",
    "spiritual guidance Toronto",
    "tarot card reading near me",
    "intuitive tarot reader Toronto",
    "online tarot reading Canada",
  ],
  alternates: {
    canonical: "https://www.drnidhibhan.com/services/tarot-reading",
  },
  openGraph: {
    title: "Tarot + Intuitive Reading Toronto — Dr. Nidhi Bhan",
    description:
      "Gain actionable clarity on life decisions through tarot and intuitive readings with Dr. Nidhi Bhan. In-person in Toronto and virtually worldwide.",
    url: "https://www.drnidhibhan.com/services/tarot-reading",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tarot + Intuitive Reading Toronto — Dr. Nidhi Bhan",
    description:
      "Gain actionable clarity on life decisions through tarot and intuitive readings. In-person in Toronto & online.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Tarot + Intuitive Reading",
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
    "Tarot and intuitive reading sessions for clarity, guidance, and empowered decision-making in Toronto and online.",
  url: "https://www.drnidhibhan.com/services/tarot-reading",
};

const expectations = [
  {
    step: "01",
    title: "Setting Your Intention",
    description:
      "Your session begins with a brief conversation where Dr. Nidhi invites you to share the areas of life you would like to explore. You do not need to have a specific question prepared — sometimes the most revealing readings emerge from an open inquiry. This initial dialogue helps attune the reading to your energy and ensures the guidance you receive is directly relevant to where you are right now.",
  },
  {
    step: "02",
    title: "Opening the Cards",
    description:
      "Dr. Nidhi works with carefully selected tarot spreads that match the depth and nature of your inquiry. As the cards are drawn and laid out, she reads the symbolic language of each card in relation to the others, weaving together the narrative that the deck is reflecting back to you. This is not a scripted interpretation — it is a living dialogue between the cards, her intuitive perception, and your energy.",
  },
  {
    step: "03",
    title: "Intuitive Layering",
    description:
      "Beyond the cards themselves, Dr. Nidhi layers in her intuitive impressions and astrological knowledge to deepen the reading. She may receive additional insights about timing, past influences, or hidden dynamics that the cards alone do not fully articulate. This combination of symbolic and intuitive guidance creates a reading that is far richer than a standard card-by-card interpretation.",
  },
  {
    step: "04",
    title: "Actionable Guidance & Empowerment",
    description:
      "Each reading concludes with a clear synthesis of the themes, patterns, and choices that have emerged. Dr. Nidhi translates the symbolic language into practical, grounded guidance you can act on. You leave the session not with vague predictions, but with a deeper understanding of your current situation and the empowered awareness to move forward with clarity and confidence.",
  },
];

const whenToSeek = [
  {
    title: "Decision Crossroads",
    description:
      "When you are facing a significant choice — career move, relocation, ending or beginning a relationship — and the logical mind alone cannot resolve the uncertainty. A tarot reading illuminates the energies surrounding each option and the likely trajectories, helping you choose from a place of insight rather than anxiety.",
  },
  {
    title: "Relationship Clarity",
    description:
      "When a relationship feels confusing, stagnant, or charged with unspoken dynamics. The cards can reveal hidden influences, unacknowledged needs, and the deeper energetic exchange between you and another person, whether romantic, familial, or professional.",
  },
  {
    title: "Career Direction",
    description:
      "When you feel misaligned with your work, are considering a new path, or want to understand the timing around a professional opportunity. Tarot readings can uncover what is energetically supporting or blocking your professional growth and where your authentic strengths are calling you.",
  },
  {
    title: "Spiritual Growth",
    description:
      "When you are on a conscious path of self-development and want a mirror for where you are in your spiritual evolution. Tarot serves as a powerful tool for reflection, revealing the lessons currently active in your life and the areas where deeper awareness is emerging.",
  },
  {
    title: "Life Transitions",
    description:
      "When you are moving through a major life change — grief, divorce, a health challenge, retirement, or a new chapter — and need to understand the deeper purpose within the upheaval. The cards offer perspective that transcends the immediate emotional turbulence and connects you to the larger arc of your journey.",
  },
  {
    title: "Self-Understanding",
    description:
      "When you want to know yourself more deeply — your patterns, blind spots, untapped potential, and the subconscious forces shaping your choices. A tarot reading with Dr. Nidhi acts as a conversation with your own inner landscape, making the invisible visible.",
  },
];

const faqs = [
  {
    question: "Is tarot reading fortune-telling?",
    answer:
      "No. Dr. Nidhi's approach to tarot is not about predicting a fixed future. The cards reflect your current energy, the influences at play, and the most likely outcomes based on the trajectory you are on right now. Because you have free will, the future is not set in stone — it shifts with every choice you make. A tarot reading empowers you to make those choices from a place of greater awareness, not passive waiting for a predicted outcome.",
  },
  {
    question: "Do I need to believe in tarot for a reading to be helpful?",
    answer:
      "Not at all. You do not need any spiritual belief system for a tarot reading to be valuable. Many clients approach their first session with healthy skepticism and are surprised by the specificity and relevance of what emerges. At its core, tarot is a symbolic language that accesses the same patterns and archetypes found in psychology, mythology, and human experience. Dr. Nidhi welcomes all perspectives and simply asks that you come with an open mind.",
  },
  {
    question: "How long is a tarot reading session?",
    answer:
      "A standard tarot and intuitive reading session with Dr. Nidhi lasts approximately 60 minutes. This provides enough time for the initial intention-setting, a thorough reading with multiple spreads if needed, intuitive layering, and a concluding discussion with actionable guidance. Shorter focused readings and longer in-depth sessions are also available depending on your needs.",
  },
  {
    question: "Are online tarot readings as effective as in-person sessions?",
    answer:
      "Yes. Tarot and intuitive readings work with energy, which is not limited by physical distance. Dr. Nidhi conducts online sessions via secure video call with the same depth and accuracy as in-person readings. Many clients worldwide connect with her virtually and report that the experience feels just as intimate and insightful. The cards are drawn and shown to you in real time throughout the session.",
  },
  {
    question: "How often should I get a tarot reading?",
    answer:
      "There is no fixed rule. Some clients come for a single reading when facing a specific decision or transition, and the clarity they receive is sufficient. Others find value in periodic readings — quarterly or at significant turning points — as a form of ongoing self-reflection and spiritual check-in. Dr. Nidhi recommends allowing adequate time between readings to integrate the guidance and observe how it unfolds in your life before seeking another session.",
  },
  {
    question: "What if I receive cards that seem negative or frightening?",
    answer:
      "There are no inherently bad cards in the tarot. Cards that carry a more challenging energy — such as the Tower, Death, or the Ten of Swords — are symbols of transformation, necessary endings, and breakthrough. Dr. Nidhi interprets every card within the full context of the reading and your life circumstances, focusing on the growth, opportunity, and empowerment within each message. You will never leave a session feeling fearful or helpless.",
  },
];

export default function TarotReadingPage() {
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
          <span className="section-label">Tarot + Intuitive Reading</span>
          <h1 className="section-title">
            Clarity Through the{" "}
            <span className="gold-text">Sacred Language of Tarot</span>
          </h1>
          <p className="section-subtitle">
            Dr. Nidhi Bhan uses tarot as a mirror to your inner landscape —
            reflecting your current energy, hidden influences, and the choices
            available to you. Combined with intuitive gifts and astrological
            knowledge, each reading provides actionable clarity for the
            decisions that matter most.
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

      {/* What is Tarot + Intuitive Reading */}
      <section
        className="section-padding"
        style={{ background: "var(--lavender-light)" }}
      >
        <div className="max-w-4xl mx-auto">
          <div className="section-header">
            <span className="section-label">The Modality</span>
            <h2 className="section-title">
              What is Tarot + Intuitive Reading?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div>
              <p
                className="text-base leading-relaxed mb-4"
                style={{ color: "var(--text-secondary)" }}
              >
                Tarot is a centuries-old symbolic system that uses 78 archetypal
                cards to illuminate the patterns, energies, and dynamics
                operating in your life. Far from the fortune-telling stereotype,
                a professional tarot reading is a structured conversation with
                the deeper layers of consciousness — your own and the collective
                field of wisdom that the cards access.
              </p>
              <p
                className="text-base leading-relaxed mb-4"
                style={{ color: "var(--text-secondary)" }}
              >
                An intuitive reading goes beyond the symbolic framework of the
                cards. Dr. Nidhi brings her natural intuitive perception —
                honed through years of spiritual practice, astrological study,
                and thousands of client sessions — to sense the energies,
                emotions, and unseen influences that surround your situation.
                When tarot and intuition are combined, the reading becomes
                remarkably specific and deeply personal.
              </p>
              <p
                className="text-base leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                Dr. Nidhi approaches every reading as a sacred act of service.
                Her role is not to tell you what to do, but to reflect back what
                your own energy is already communicating — the truths you may
                sense but cannot yet articulate, the patterns you are ready to
                see, and the possibilities that are genuinely available to you.
                Sessions are offered in-person in Toronto and virtually
                worldwide.
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
                Not Fortune-Telling — A Mirror
              </h3>
              <p
                className="text-sm leading-relaxed mb-4"
                style={{ color: "var(--text-secondary)" }}
              >
                Many people come to tarot expecting predictions about what will
                happen to them. Dr. Nidhi's readings work differently. The cards
                do not show a fixed destiny — they reveal where your energy is
                right now, what unconscious patterns are influencing your
                choices, and what each possible path looks like if you follow it.
              </p>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                This distinction is important: you are not a passive recipient
                of fate. You are an active creator of your life. The tarot
                simply makes visible what is already happening beneath the
                surface, so that your decisions come from awareness rather than
                autopilot. That is the real power of a reading — not knowing the
                future, but understanding the present so clearly that the right
                next step becomes obvious.
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
            <span className="section-label">Your Session</span>
            <h2 className="section-title">What to Expect</h2>
            <p className="section-subtitle">
              A tarot and intuitive reading with Dr. Nidhi is a grounded,
              insightful experience designed to leave you with genuine clarity
              and a clear sense of direction.
            </p>
          </div>
          <div className="space-y-6">
            {expectations.map((item) => (
              <div key={item.step} className="card flex gap-4 md:gap-6 items-start">
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

      {/* When to Seek a Reading */}
      <section
        className="section-padding"
        style={{ background: "var(--blush-light)" }}
      >
        <div className="max-w-5xl mx-auto">
          <div className="section-header">
            <span className="section-label">Is This for You?</span>
            <h2 className="section-title">When to Seek a Reading</h2>
            <p className="section-subtitle">
              A tarot and intuitive reading can bring clarity at any point in
              life — but these are the moments when clients find it most
              transformative.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {whenToSeek.map((item) => (
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
                >
                  {item.description}
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
        style={{ background: "var(--sage-light)" }}
      >
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="section-title">
            See Clearly, <span className="gold-text">Choose Wisely</span>
          </h2>
          <p
            className="text-base leading-relaxed mb-8"
            style={{ color: "var(--text-secondary)" }}
          >
            The clarity you are seeking is already within you — sometimes it
            just needs a mirror. Book your tarot and intuitive reading with
            Dr. Nidhi Bhan in Toronto or online and discover the insight
            waiting beneath the surface.
          </p>
          <Link href="/booking" className="btn-primary">
            Book Your Tarot Reading
          </Link>
        </div>
      </section>
    </>
  );
}
