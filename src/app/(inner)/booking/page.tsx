import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Book a Session",
  description:
    "Book a consultation with Dr. Nidhi Bhan. Choose from Vedic astrology, hypnotherapy, past life regression, life coaching, and subliminal reconditioning sessions. In-person in Vaughan, Ontario or virtual worldwide.",
  alternates: {
    canonical: "https://www.drnidhibhan.com/booking",
  },
  openGraph: {
    title: "Book a Session | Dr. Nidhi Bhan",
    description:
      "Begin your transformation journey. Book an in-person or virtual session with Dr. Nidhi Bhan.",
    url: "https://www.drnidhibhan.com/booking",
  },
  twitter: {
    card: "summary_large_image",
    title: "Book a Session | Dr. Nidhi Bhan",
    description:
      "Book a life coaching, hypnotherapy, or Vedic astrology session. In-person in Vaughan, Ontario or virtual worldwide.",
  },
};

const services = [
  {
    title: "Vedic Astrology Consultation",
    description:
      "A detailed analysis of your birth chart to uncover subconscious patterns, karmic influences, and hidden strengths. Your chart becomes a diagnostic tool for targeted transformation.",
    duration: "60-90 min",
    bg: "bg-lavender-light",
    href: "/services/vedic-astrology",
  },
  {
    title: "Hypnotherapy",
    description:
      "Access the subconscious mind directly to dissolve limiting beliefs, release emotional blocks, and install empowering new programming aligned with your goals.",
    duration: "60-90 min",
    bg: "bg-peach-light",
    href: "/services/hypnotherapy",
  },
  {
    title: "Past Life Regression",
    description:
      "Journey into past life memories to release karmic entanglements, heal ancestral patterns, and free yourself from emotional charges carried across lifetimes.",
    duration: "90-120 min",
    bg: "bg-sage-light",
    href: "/services/past-life-regression",
  },
  {
    title: "Life Coaching",
    description:
      "Strategic, personalized guidance to help you overcome obstacles, clarify your vision, and create an actionable roadmap for achieving your personal and professional goals.",
    duration: "60 min",
    bg: "bg-blush-light",
    href: "/services/life-coaching",
  },
  {
    title: "Subliminal Reconditioning",
    description:
      "Rewire deeply embedded thought patterns beneath conscious awareness. Carefully designed techniques bypass the critical mind to install positive, growth-oriented beliefs.",
    duration: "60-90 min",
    bg: "bg-lavender-light",
    href: "/services/hypnotherapy",
  },
  {
    title: "Comprehensive Transformation Package",
    description:
      "A multi-session journey combining birth chart analysis, hypnotherapy, and subconscious reconditioning for holistic, lasting change. Ideal for those ready for deep work.",
    duration: "Multi-session",
    bg: "bg-peach-light",
    href: "/services/life-coaching",
  },
];

const faqs = [
  {
    question: "How do virtual sessions work?",
    answer:
      "Virtual sessions are conducted via Zoom and are just as effective as in-person sessions. You will receive a link before your appointment. Ensure you are in a quiet, comfortable space with a stable internet connection. Dr. Nidhi has worked with clients across multiple continents virtually with the same transformative results.",
  },
  {
    question: "What is the cancellation policy?",
    answer:
      "We request at least 24 hours notice for cancellations or rescheduling. Late cancellations or no-shows may be subject to a cancellation fee. We understand that emergencies happen and will always do our best to accommodate genuine situations.",
  },
  {
    question: "How should I prepare for my first session?",
    answer:
      "For astrology consultations, have your exact birth date, time, and place ready. For all sessions, come with an open mind and, if possible, a quiet private space. Write down any specific questions or areas of concern you would like to address. Wear comfortable clothing and stay hydrated.",
  },
  {
    question: "Do you offer in-person sessions?",
    answer:
      "Yes. In-person sessions are available at our Vaughan, Ontario clinic located at 4600 Hwy 7, Suite #208. The clinic is easily accessible from Toronto, Brampton, Mississauga, and the greater GTA with free parking on site.",
  },
  {
    question: "How many sessions will I need?",
    answer:
      "This varies by individual and the depth of work required. Some clients experience significant shifts in a single session, while others benefit from a series of sessions over several weeks. Dr. Nidhi will discuss a recommended plan during your initial consultation.",
  },
];

export default function BookingPage() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="section-padding bg-cream text-center">
        <div className="max-w-4xl mx-auto animate-fade-up">
          <span className="section-label">Book a Session</span>
          <h1 className="section-title mt-4">
            Begin Your <span className="gold-text">Transformation</span>
          </h1>
          <p className="section-subtitle mt-4">
            Choose the service that resonates with you and take the first step toward breaking free
            from the invisible patterns holding you back.
          </p>
        </div>
      </section>

      {/* ===== SERVICE OPTIONS ===== */}
      <section className="section-padding bg-blush-light">
        <div className="max-w-6xl mx-auto">
          <div className="section-header animate-fade-up">
            <span className="section-label">Our Services</span>
            <h2 className="section-title">
              Choose Your <span className="gold-text">Path</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <div
                key={service.title}
                className={`card ${service.bg} flex flex-col animate-fade-up`}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-text-muted font-body text-xs tracking-widest uppercase">
                    {service.duration}
                  </span>
                </div>
                <h3 className="font-heading text-xl text-charcoal mb-3">{service.title}</h3>
                <p className="text-text-secondary font-body text-sm leading-relaxed flex-1">
                  {service.description}
                </p>
                <Link
                  href={service.href}
                  className="inline-flex items-center gap-2 text-warm-gold font-body text-sm font-medium mt-5 hover:gap-3 transition-all"
                >
                  Learn More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== BOOK NOW CTA ===== */}
      <section className="section-padding bg-cream text-center">
        <div className="max-w-3xl mx-auto animate-fade-up">
          <span className="section-label">Schedule Now</span>
          <h2 className="section-title mt-4">
            Ready to <span className="gold-text">Book</span>?
          </h2>
          <p className="section-subtitle mt-4 mb-8">
            Select your preferred date, time, and service through our online scheduling system. Both
            in-person and virtual appointments are available.
          </p>
          <a
            href="https://www.drnidhibhan.com/book-online"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-3"
          >
            Book Online Now
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
          <p className="text-text-muted text-xs font-body mt-4">
            You will be redirected to our secure booking portal.
          </p>
        </div>
      </section>

      {/* ===== WHAT TO EXPECT ===== */}
      <section className="section-padding bg-lavender-light">
        <div className="max-w-4xl mx-auto">
          <div className="section-header animate-fade-up">
            <span className="section-label">Your First Session</span>
            <h2 className="section-title">
              What to <span className="gold-text">Expect</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 animate-fade-up delay-200">
            {[
              {
                step: "01",
                title: "Discovery",
                description:
                  "Dr. Nidhi begins by understanding your current challenges, goals, and background. If applicable, your birth chart is analyzed to identify the subconscious patterns at play.",
              },
              {
                step: "02",
                title: "Diagnosis",
                description:
                  "Using her integrative approach, she identifies the root causes beneath surface-level symptoms. This is where the birth chart becomes a diagnostic tool, not a fortune-telling device.",
              },
              {
                step: "03",
                title: "Transformation",
                description:
                  "Through the appropriate modality or combination of modalities, the real work begins. You will leave with clarity, actionable insights, and a foundation for lasting change.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="gold-text font-heading text-5xl font-light mb-4">{item.step}</div>
                <h3 className="font-heading text-2xl text-charcoal mb-3">{item.title}</h3>
                <p className="text-text-secondary font-body text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="section-padding bg-cream">
        <div className="max-w-3xl mx-auto">
          <div className="section-header animate-fade-up">
            <span className="section-label">FAQ</span>
            <h2 className="section-title">
              Common <span className="gold-text">Questions</span>
            </h2>
          </div>

          <div className="space-y-4 animate-fade-up delay-200">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="card bg-white/60"
              >
                <h3 className="font-heading text-lg text-charcoal mb-2">{faq.question}</h3>
                <p className="text-text-secondary font-body text-sm leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== BOTTOM CTA ===== */}
      <section className="section-padding bg-sage-light text-center">
        <div className="max-w-3xl mx-auto animate-fade-up">
          <h2 className="section-title">
            Still Have <span className="gold-text">Questions</span>?
          </h2>
          <p className="section-subtitle mt-4 mb-8">
            Reach out directly and we will help you determine the best path for your unique
            situation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.drnidhibhan.com/book-online"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Book Online
            </a>
            <Link href="/contact" className="btn-secondary">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
