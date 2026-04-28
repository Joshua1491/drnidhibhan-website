import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Life Coaching Toronto | Subconscious Mind Transformation",
  description:
    "Transform your life with Dr. Nidhi Bhan's unique life coaching approach combining subconscious mind transformation, hypnotherapy, and birth chart guidance. 25+ years experience. Toronto & worldwide virtual sessions.",
  keywords: [
    "life coaching Toronto",
    "life coach Toronto",
    "subconscious mind transformation",
    "mindset coaching Toronto",
    "transformation coaching",
    "holistic life coach",
    "online life coaching",
    "life coaching New York",
    "best life coach Toronto",
  ],
  alternates: { canonical: "https://www.drnidhibhan.com/services/life-coaching" },
  openGraph: {
    title: "Life Coaching Toronto — Dr. Nidhi Bhan",
    description:
      "Break free from limiting patterns with subconscious mind transformation coaching. 25+ years experience.",
    url: "https://www.drnidhibhan.com/services/life-coaching",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Life Coaching — Subconscious Mind Transformation",
  provider: {
    "@type": "ProfessionalService",
    name: "Dr. Nidhi Bhan",
    url: "https://www.drnidhibhan.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "4600 Hwy 7, Suite #208",
      addressLocality: "Vaughan",
      addressRegion: "Ontario",
      postalCode: "L4L 4Y7",
      addressCountry: "CA",
    },
  },
  description:
    "Transform your life through subconscious mind reprogramming. Dr. Nidhi Bhan combines birth chart analysis, hypnotherapy, and subliminal reconditioning for lasting change.",
  areaServed: ["Toronto", "GTA", "New York", "Los Angeles", "Worldwide via Virtual Sessions"],
  serviceType: "Life Coaching",
  offers: [
    {
      "@type": "Offer",
      name: "5-Session Transformation Package",
      description:
        "Five focused sessions of subconscious mind transformation including birth chart analysis, pattern identification, hypnotherapy, and subliminal reconditioning.",
    },
    {
      "@type": "Offer",
      name: "7-Session Deep Transformation Package",
      description:
        "Seven in-depth sessions for deeper subconscious reprogramming, including extended birth chart work, past life regression, advanced hypnotherapy, and ongoing subliminal integration.",
    },
  ],
};

const steps = [
  {
    number: "01",
    title: "Birth Chart Analysis",
    description:
      "Your journey begins with a detailed Vedic birth chart reading that reveals the karmic patterns, hidden strengths, and subconscious tendencies shaping your life. This blueprint becomes the foundation for targeted transformation work.",
    bg: "bg-lavender-light",
  },
  {
    number: "02",
    title: "Pattern Identification",
    description:
      "Together, we uncover the invisible mental loops, limiting beliefs, and emotional blocks that have been silently running your decisions. Many of these patterns were formed in childhood or inherited across generations.",
    bg: "bg-blush-light",
  },
  {
    number: "03",
    title: "Hypnotherapy Sessions",
    description:
      "Using clinical hypnotherapy, we access the subconscious mind directly to rewrite the outdated scripts that keep you stuck. This is where deep, lasting change happens \u2014 at the root level, not just the surface.",
    bg: "bg-sage-light",
  },
  {
    number: "04",
    title: "Subliminal Reconditioning",
    description:
      "You receive custom subliminal audio programs designed specifically for your unique patterns. These recordings work while you sleep or relax, reinforcing new neural pathways and accelerating your transformation.",
    bg: "bg-peach-light",
  },
  {
    number: "05",
    title: "Lasting Transformation",
    description:
      "With the old patterns dissolved and new empowering beliefs anchored in your subconscious, you experience genuine, lasting change. Clients report shifts in confidence, clarity, relationships, career momentum, and inner peace.",
    bg: "bg-lavender-light",
  },
];

const benefits = [
  {
    title: "Break Free from Self-Sabotage",
    description:
      "Stop the cycle of starting strong and falling back into old habits. When the subconscious is aligned with your goals, follow-through becomes natural.",
  },
  {
    title: "Release Anxiety & Overthinking",
    description:
      "Quiet the mental chatter that keeps you paralyzed. Reprogram the nervous system responses that trigger spiralling worry and constant second-guessing.",
  },
  {
    title: "Build Unshakable Confidence",
    description:
      "Move from people-pleasing and self-doubt to authentic self-trust. When limiting beliefs are removed at the root, confidence becomes your default state.",
  },
  {
    title: "Heal Relationship Patterns",
    description:
      "Understand why you attract the same dynamics and transform the subconscious templates driving your connections with others.",
  },
  {
    title: "Unlock Career & Financial Growth",
    description:
      "Remove the invisible money blocks and imposter syndrome holding you back from the success you are fully capable of achieving.",
  },
  {
    title: "Find Clarity & Purpose",
    description:
      "Stop feeling lost or unfulfilled. Your birth chart reveals your soul's purpose, and subconscious alignment makes pursuing it effortless.",
  },
];

const faqs = [
  {
    question: "What makes this different from traditional life coaching?",
    answer:
      "Traditional life coaching works primarily at the conscious level \u2014 setting goals, creating action plans, and building accountability. While valuable, this approach often fails when deep subconscious patterns are running the show. Dr. Nidhi Bhan's method goes directly to the root by combining birth chart intelligence with clinical hypnotherapy and subliminal reconditioning, creating change at the subconscious level where 95% of your behaviour originates.",
  },
  {
    question: "Do I need to be in Toronto for life coaching sessions?",
    answer:
      "No. While Dr. Nidhi Bhan is based in the Greater Toronto Area (Vaughan, Ontario), the majority of clients work with her virtually. Sessions are conducted over Zoom and are equally effective online. She works with clients across Canada, the United States (New York, Los Angeles, and beyond), and internationally.",
  },
  {
    question: "How many sessions will I need?",
    answer:
      "Most clients see significant shifts within the 5-session package. For deeper, more complex patterns \u2014 particularly those rooted in childhood trauma, generational conditioning, or long-standing relationship dynamics \u2014 the 7-session package provides the extended depth needed for thorough transformation.",
  },
  {
    question: "What is subconscious mind transformation?",
    answer:
      "Subconscious mind transformation is the process of identifying and reprogramming the deeply held beliefs, emotional patterns, and automatic responses stored in your subconscious mind. Using hypnotherapy, subliminal audio, and birth chart analysis, Dr. Nidhi Bhan helps you replace limiting programs with empowering ones, creating lasting behavioural and emotional change.",
  },
  {
    question: "Is hypnotherapy safe?",
    answer:
      "Absolutely. Clinical hypnotherapy is a well-researched, evidence-based modality used worldwide. You remain fully aware and in control throughout the session. It is simply a state of deep relaxation where the subconscious mind becomes more receptive to positive suggestions and pattern restructuring.",
  },
  {
    question: "What results can I expect from life coaching?",
    answer:
      "Clients commonly report reduced anxiety, greater confidence, improved relationships, career breakthroughs, clarity of purpose, and a deep sense of inner peace. Because the work targets the subconscious, changes tend to feel natural and lasting rather than forced.",
  },
];

export default function LifeCoachingPage() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ===== HERO ===== */}
      <section
        className="relative overflow-hidden text-center section-padding"
        style={{
          background: "linear-gradient(160deg, var(--cream) 0%, var(--blush-light) 40%, var(--lavender-light) 100%)",
        }}
      >
        {/* Decorative circle */}
        <div
          className="absolute -top-32 -right-32 w-96 h-96 rounded-full opacity-20 pointer-events-none"
          style={{ background: "radial-gradient(circle, var(--peach) 0%, transparent 70%)" }}
        />
        <div className="max-w-3xl mx-auto relative z-10">
          <span className="section-label animate-fade-up">Life Coaching</span>
          <h1
            className="animate-fade-up delay-200"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(2.4rem, 5vw, 3.8rem)",
              fontWeight: 300,
              lineHeight: 1.15,
              color: "var(--charcoal)",
              marginBottom: "1.5rem",
            }}
          >
            Life Coaching in Toronto Through{" "}
            <span className="gold-text">Subconscious Mind Transformation</span>
          </h1>
          <p
            className="animate-fade-up delay-400"
            style={{
              fontSize: "1.1rem",
              fontWeight: 300,
              color: "var(--text-secondary)",
              lineHeight: 1.85,
              maxWidth: "620px",
              margin: "0 auto 2.5rem",
            }}
          >
            Most coaching works on the surface. Dr. Nidhi Bhan goes deeper \u2014 to the subconscious
            patterns that silently control your habits, emotions, and decisions. With 25+ years of
            experience combining hypnotherapy, Vedic birth chart analysis, and subliminal
            reconditioning, she helps you create transformation that actually lasts.
          </p>
          <div className="flex flex-wrap gap-4 justify-center animate-fade-up delay-600">
            <Link href="/booking" className="btn-primary">
              Book a Discovery Call
            </Link>
            <Link href="/contact" className="btn-secondary">
              Ask a Question
            </Link>
          </div>
        </div>
      </section>

      {/* ===== WHAT MAKES THIS DIFFERENT ===== */}
      <section className="section-padding" style={{ background: "var(--cream)" }}>
        <div className="max-w-4xl mx-auto">
          <div className="section-header">
            <span className="section-label animate-fade-up">A Deeper Approach</span>
            <h2 className="section-title animate-fade-up delay-100">
              What Makes This Life Coaching Different
            </h2>
            <p className="section-subtitle animate-fade-up delay-200">
              Going beyond goals and accountability to the root of lasting change
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="card animate-fade-up delay-300">
              <h3
                className="text-lg mb-3"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "1.4rem",
                  fontWeight: 500,
                  color: "var(--charcoal)",
                }}
              >
                Traditional Life Coaching
              </h3>
              <ul className="space-y-3 text-[0.95rem] leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                <li className="flex gap-2 items-start">
                  <span className="text-[var(--dusty-rose)] mt-1 shrink-0">&times;</span>
                  Works at the conscious mind level (only 5% of behaviour)
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-[var(--dusty-rose)] mt-1 shrink-0">&times;</span>
                  Relies on willpower and motivation that fades
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-[var(--dusty-rose)] mt-1 shrink-0">&times;</span>
                  Creates surface-level plans without addressing root causes
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-[var(--dusty-rose)] mt-1 shrink-0">&times;</span>
                  Often leads to short-term bursts followed by old habits returning
                </li>
              </ul>
            </div>

            <div
              className="card animate-fade-up delay-500"
              style={{ border: "1.5px solid rgba(197,166,107,0.25)", background: "rgba(255,255,255,0.8)" }}
            >
              <h3
                className="text-lg mb-3"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "1.4rem",
                  fontWeight: 500,
                  color: "var(--charcoal)",
                }}
              >
                Dr. Nidhi Bhan&apos;s Approach
              </h3>
              <ul className="space-y-3 text-[0.95rem] leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                <li className="flex gap-2 items-start">
                  <span className="text-[var(--soft-gold)] mt-1 shrink-0">&#10003;</span>
                  Targets the subconscious mind where 95% of behaviour originates
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-[var(--soft-gold)] mt-1 shrink-0">&#10003;</span>
                  Uses clinical hypnotherapy to rewrite limiting scripts
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-[var(--soft-gold)] mt-1 shrink-0">&#10003;</span>
                  Birth chart analysis reveals your unique karmic blueprint
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-[var(--soft-gold)] mt-1 shrink-0">&#10003;</span>
                  Custom subliminal audio reinforces new neural pathways 24/7
                </li>
              </ul>
            </div>
          </div>

          <p
            className="text-center mt-10 max-w-2xl mx-auto animate-fade-up delay-600"
            style={{ fontSize: "1rem", color: "var(--text-secondary)", lineHeight: 1.8 }}
          >
            When you understand <em>why</em> you keep repeating the same patterns \u2014 and address
            them at the subconscious level \u2014 change stops being a struggle and becomes a natural
            unfolding. This is the difference between forcing new habits and genuinely becoming a
            different person from the inside out.
          </p>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section
        className="section-padding"
        style={{ background: "linear-gradient(180deg, var(--blush-light) 0%, var(--cream) 100%)" }}
      >
        <div className="max-w-4xl mx-auto">
          <div className="section-header">
            <span className="section-label animate-fade-up">The Process</span>
            <h2 className="section-title animate-fade-up delay-100">
              How Life Coaching with Dr. Nidhi Bhan Works
            </h2>
            <p className="section-subtitle animate-fade-up delay-200">
              A proven five-step framework for subconscious transformation
            </p>
          </div>

          <div className="space-y-6">
            {steps.map((step, i) => (
              <div
                key={step.number}
                className={`card flex flex-col md:flex-row gap-4 md:gap-6 items-start animate-fade-up delay-${(i + 1) * 200}`}
              >
                <div
                  className={`${step.bg} shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center`}
                >
                  <span
                    className="gold-text text-2xl font-semibold"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    {step.number}
                  </span>
                </div>
                <div>
                  <h3
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: "1.35rem",
                      fontWeight: 500,
                      color: "var(--charcoal)",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {step.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.95rem",
                      color: "var(--text-secondary)",
                      lineHeight: 1.8,
                    }}
                  >
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHAT YOU'LL EXPERIENCE ===== */}
      <section className="section-padding" style={{ background: "var(--cream)" }}>
        <div className="max-w-5xl mx-auto">
          <div className="section-header">
            <span className="section-label animate-fade-up">Results</span>
            <h2 className="section-title animate-fade-up delay-100">
              What You&apos;ll Experience
            </h2>
            <p className="section-subtitle animate-fade-up delay-200">
              Real shifts that clients notice within weeks of beginning the work
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, i) => (
              <div
                key={benefit.title}
                className={`card animate-fade-up delay-${((i % 3) + 1) * 200}`}
              >
                <div
                  className="w-10 h-10 rounded-xl mb-4 flex items-center justify-center"
                  style={{ background: "rgba(197,166,107,0.1)" }}
                >
                  <span className="gold-text text-lg">&#10043;</span>
                </div>
                <h3
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "1.25rem",
                    fontWeight: 500,
                    color: "var(--charcoal)",
                    marginBottom: "0.6rem",
                  }}
                >
                  {benefit.title}
                </h3>
                <p
                  style={{
                    fontSize: "0.92rem",
                    color: "var(--text-secondary)",
                    lineHeight: 1.75,
                  }}
                >
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PACKAGES ===== */}
      <section
        className="section-padding"
        style={{ background: "linear-gradient(180deg, var(--lavender-light) 0%, var(--cream) 100%)" }}
      >
        <div className="max-w-4xl mx-auto">
          <div className="section-header">
            <span className="section-label animate-fade-up">Packages</span>
            <h2 className="section-title animate-fade-up delay-100">
              Transformation Packages
            </h2>
            <p className="section-subtitle animate-fade-up delay-200">
              Structured programs designed for meaningful, lasting change
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* 5-Session */}
            <div className="card animate-fade-up delay-300 flex flex-col">
              <span
                className="inline-block text-[0.68rem] tracking-[0.25em] uppercase font-medium mb-4"
                style={{ color: "var(--warm-gold)" }}
              >
                Foundation
              </span>
              <h3
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "1.6rem",
                  fontWeight: 400,
                  color: "var(--charcoal)",
                  marginBottom: "0.6rem",
                }}
              >
                5-Session Transformation
              </h3>
              <p
                className="mb-6"
                style={{
                  fontSize: "0.92rem",
                  color: "var(--text-secondary)",
                  lineHeight: 1.75,
                }}
              >
                Ideal for clients with a clear area of focus \u2014 a specific pattern, block, or
                life transition they want to move through with precision and depth.
              </p>
              <ul
                className="space-y-3 mb-8 flex-1"
                style={{ fontSize: "0.9rem", color: "var(--text-secondary)" }}
              >
                <li className="flex gap-2 items-start">
                  <span className="text-[var(--soft-gold)] shrink-0">&#10003;</span>
                  Vedic birth chart analysis session
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-[var(--soft-gold)] shrink-0">&#10003;</span>
                  Subconscious pattern mapping
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-[var(--soft-gold)] shrink-0">&#10003;</span>
                  2 clinical hypnotherapy sessions
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-[var(--soft-gold)] shrink-0">&#10003;</span>
                  Custom subliminal audio program
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-[var(--soft-gold)] shrink-0">&#10003;</span>
                  Integration &amp; progress review session
                </li>
              </ul>
              <Link href="/booking" className="btn-primary text-center justify-center">
                Book 5-Session Package
              </Link>
            </div>

            {/* 7-Session */}
            <div
              className="card animate-fade-up delay-500 flex flex-col relative"
              style={{ border: "1.5px solid rgba(197,166,107,0.3)", background: "rgba(255,255,255,0.85)" }}
            >
              <span
                className="absolute -top-3 right-6 text-[0.62rem] tracking-[0.2em] uppercase font-medium py-1 px-4 rounded-full"
                style={{
                  background: "var(--charcoal)",
                  color: "#fff",
                }}
              >
                Most Popular
              </span>
              <span
                className="inline-block text-[0.68rem] tracking-[0.25em] uppercase font-medium mb-4"
                style={{ color: "var(--warm-gold)" }}
              >
                Deep Dive
              </span>
              <h3
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "1.6rem",
                  fontWeight: 400,
                  color: "var(--charcoal)",
                  marginBottom: "0.6rem",
                }}
              >
                7-Session Deep Transformation
              </h3>
              <p
                className="mb-6"
                style={{
                  fontSize: "0.92rem",
                  color: "var(--text-secondary)",
                  lineHeight: 1.75,
                }}
              >
                For those ready to do comprehensive inner work \u2014 addressing multiple layers of
                subconscious programming, including generational patterns and past life influences.
              </p>
              <ul
                className="space-y-3 mb-8 flex-1"
                style={{ fontSize: "0.9rem", color: "var(--text-secondary)" }}
              >
                <li className="flex gap-2 items-start">
                  <span className="text-[var(--soft-gold)] shrink-0">&#10003;</span>
                  Extended Vedic birth chart deep-dive
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-[var(--soft-gold)] shrink-0">&#10003;</span>
                  Comprehensive subconscious pattern mapping
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-[var(--soft-gold)] shrink-0">&#10003;</span>
                  3 clinical hypnotherapy sessions
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-[var(--soft-gold)] shrink-0">&#10003;</span>
                  Past life regression session
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-[var(--soft-gold)] shrink-0">&#10003;</span>
                  Custom subliminal audio suite (multiple tracks)
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-[var(--soft-gold)] shrink-0">&#10003;</span>
                  Integration session with ongoing support plan
                </li>
              </ul>
              <Link href="/booking" className="btn-primary text-center justify-center">
                Book 7-Session Package
              </Link>
            </div>
          </div>

          <p
            className="text-center mt-8 animate-fade-up delay-600"
            style={{ fontSize: "0.88rem", color: "var(--text-muted)" }}
          >
            Not sure which package is right for you?{" "}
            <Link
              href="/contact"
              className="underline underline-offset-4"
              style={{ color: "var(--warm-gold)" }}
            >
              Reach out for a free consultation
            </Link>{" "}
            to discuss your needs.
          </p>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="section-padding" style={{ background: "var(--cream)" }}>
        <div className="max-w-3xl mx-auto">
          <div className="section-header">
            <span className="section-label animate-fade-up">FAQ</span>
            <h2 className="section-title animate-fade-up delay-100">
              Frequently Asked Questions About Life Coaching
            </h2>
          </div>

          <div className="space-y-5">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className={`card animate-fade-up delay-${((i % 3) + 1) * 200}`}
              >
                <h3
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "1.2rem",
                    fontWeight: 500,
                    color: "var(--charcoal)",
                    marginBottom: "0.75rem",
                  }}
                >
                  {faq.question}
                </h3>
                <p
                  style={{
                    fontSize: "0.92rem",
                    color: "var(--text-secondary)",
                    lineHeight: 1.8,
                  }}
                >
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section
        className="section-padding text-center"
        style={{
          background: "linear-gradient(160deg, var(--blush-light) 0%, var(--lavender-light) 50%, var(--sage-light) 100%)",
        }}
      >
        <div className="max-w-2xl mx-auto">
          <span className="section-label animate-fade-up">Begin Your Transformation</span>
          <h2
            className="animate-fade-up delay-200"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 300,
              color: "var(--charcoal)",
              lineHeight: 1.2,
              marginBottom: "1.2rem",
            }}
          >
            Ready to Break Free from the Patterns Holding You Back?
          </h2>
          <p
            className="animate-fade-up delay-400"
            style={{
              fontSize: "1rem",
              color: "var(--text-secondary)",
              lineHeight: 1.8,
              marginBottom: "2.5rem",
              maxWidth: "520px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            Book a discovery call with Dr. Nidhi Bhan to explore how subconscious mind
            transformation can help you create the life you have been working toward. Available in
            Toronto and worldwide via virtual sessions.
          </p>
          <div className="flex flex-wrap gap-4 justify-center animate-fade-up delay-600">
            <Link href="/booking" className="btn-primary">
              Book Your Discovery Call
            </Link>
            <Link href="/services" className="btn-secondary">
              Explore All Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
