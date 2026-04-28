import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact Dr. Nidhi Bhan | Book a Consultation",
  description:
    "Get in touch with Dr. Nidhi Bhan for life coaching, hypnotherapy, Vedic astrology, and subconscious mind transformation consultations. Located in Vaughan, Ontario with virtual sessions worldwide.",
  alternates: {
    canonical: "https://www.drnidhibhan.com/contact",
  },
  openGraph: {
    title: "Contact Dr. Nidhi Bhan | Book a Consultation",
    description:
      "Reach out to Dr. Nidhi Bhan for in-person or virtual sessions. Vaughan, Ontario clinic open Mon-Sat 8am-8pm EST.",
    url: "https://www.drnidhibhan.com/contact",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Dr. Nidhi Bhan",
    description:
      "Get in touch for life coaching, hypnotherapy & Vedic astrology consultations. Vaughan, Ontario & virtual worldwide.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Dr. Nidhi Bhan",
  description:
    "Subconscious Mind Transformation Expert offering life coaching, hypnotherapy, past life regression, and Vedic astrology consultations.",
  url: "https://www.drnidhibhan.com/contact",
  address: {
    "@type": "PostalAddress",
    streetAddress: "4600 Hwy 7, Suite #208",
    addressLocality: "Vaughan",
    addressRegion: "Ontario",
    postalCode: "L4L 4Y7",
    addressCountry: "CA",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "08:00",
    closes: "20:00",
  },
  hasMap: "https://www.google.com/maps?q=4600+Hwy+7,+Vaughan,+ON+L4L+4Y7",
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ===== HERO ===== */}
      <section className="section-padding bg-cream text-center">
        <div className="max-w-4xl mx-auto animate-fade-up">
          <span className="section-label">Contact</span>
          <h1 className="section-title mt-4">
            Get in <span className="gold-text">Touch</span>
          </h1>
          <p className="section-subtitle mt-4">
            Whether you have questions about our services or are ready to begin your transformation
            journey, we would love to hear from you.
          </p>
        </div>
      </section>

      {/* ===== CONTACT INFO CARDS ===== */}
      <section className="section-padding bg-blush-light">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {/* Location */}
            <div className="card bg-white/60 text-center animate-fade-up">
              <div
                className="w-14 h-14 rounded-full bg-lavender-light flex items-center justify-center mx-auto mb-5"
                style={{ border: "1px solid rgba(197,166,107,0.15)" }}
              >
                <svg
                  className="w-6 h-6 text-soft-gold"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3 className="font-heading text-xl text-charcoal mb-2">Location</h3>
              <p className="text-text-secondary font-body text-sm leading-relaxed">
                4600 Hwy 7, Suite #208
                <br />
                Vaughan, Ontario L4L 4Y7
                <br />
                Canada
              </p>
            </div>

            {/* Hours */}
            <div className="card bg-white/60 text-center animate-fade-up delay-200">
              <div
                className="w-14 h-14 rounded-full bg-peach-light flex items-center justify-center mx-auto mb-5"
                style={{ border: "1px solid rgba(197,166,107,0.15)" }}
              >
                <svg
                  className="w-6 h-6 text-soft-gold"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="font-heading text-xl text-charcoal mb-2">Hours</h3>
              <p className="text-text-secondary font-body text-sm leading-relaxed">
                Monday &ndash; Saturday
                <br />
                8:00 AM &ndash; 8:00 PM EST
                <br />
                By appointment only
              </p>
            </div>

            {/* Virtual */}
            <div className="card bg-white/60 text-center animate-fade-up delay-400">
              <div
                className="w-14 h-14 rounded-full bg-sage-light flex items-center justify-center mx-auto mb-5"
                style={{ border: "1px solid rgba(197,166,107,0.15)" }}
              >
                <svg
                  className="w-6 h-6 text-soft-gold"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="font-heading text-xl text-charcoal mb-2">Virtual Sessions</h3>
              <p className="text-text-secondary font-body text-sm leading-relaxed">
                Available via Zoom
                <br />
                Worldwide access
                <br />
                Same transformative experience
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CONTACT FORM ===== */}
      <section className="section-padding bg-cream">
        <div className="max-w-3xl mx-auto">
          <div className="section-header animate-fade-up">
            <span className="section-label">Send a Message</span>
            <h2 className="section-title">
              We&rsquo;d Love to <span className="gold-text">Hear From You</span>
            </h2>
          </div>

          <form
            action="https://formspree.io/f/xpwdkqyj"
            method="POST"
            className="card bg-white/60 animate-fade-up delay-200"
          >
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-text-secondary font-body text-sm mb-2 tracking-wide"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Your full name"
                  className="w-full px-4 py-3 rounded-xl bg-cream border border-transparent font-body text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-soft-gold/40 transition-colors"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-text-secondary font-body text-sm mb-2 tracking-wide"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 rounded-xl bg-cream border border-transparent font-body text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-soft-gold/40 transition-colors"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-text-secondary font-body text-sm mb-2 tracking-wide"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="+1 (555) 000-0000"
                  className="w-full px-4 py-3 rounded-xl bg-cream border border-transparent font-body text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-soft-gold/40 transition-colors"
                />
              </div>

              {/* Service Interest */}
              <div>
                <label
                  htmlFor="service"
                  className="block text-text-secondary font-body text-sm mb-2 tracking-wide"
                >
                  Service Interest
                </label>
                <select
                  id="service"
                  name="service"
                  className="w-full px-4 py-3 rounded-xl bg-cream border border-transparent font-body text-sm text-text-primary focus:outline-none focus:border-soft-gold/40 transition-colors appearance-none"
                >
                  <option value="">Select a service...</option>
                  <option value="vedic-astrology">Vedic Astrology Consultation</option>
                  <option value="hypnotherapy">Hypnotherapy</option>
                  <option value="past-life-regression">Past Life Regression</option>
                  <option value="life-coaching">Life Coaching</option>
                  <option value="subliminal-reconditioning">Subliminal Reconditioning</option>
                  <option value="other">Other / Not Sure</option>
                </select>
              </div>
            </div>

            {/* Message */}
            <div className="mb-8">
              <label
                htmlFor="message"
                className="block text-text-secondary font-body text-sm mb-2 tracking-wide"
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Tell us a bit about what you're looking for..."
                className="w-full px-4 py-3 rounded-xl bg-cream border border-transparent font-body text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-soft-gold/40 transition-colors resize-none"
              />
            </div>

            <input type="hidden" name="_subject" value="New contact form message" />
            <button type="submit" className="btn-primary w-full justify-center">
              Send Message
            </button>
            <p className="text-text-muted text-xs font-body text-center mt-4">
              We typically respond within 24 hours during business days.
            </p>
          </form>
        </div>
      </section>

      {/* ===== MAP / DIRECTIONS ===== */}
      <section className="section-padding bg-lavender-light">
        <div className="max-w-4xl mx-auto text-center animate-fade-up">
          <span className="section-label">Find Us</span>
          <h2 className="section-title mt-4 mb-4">
            Visiting <span className="gold-text">In Person</span>?
          </h2>
          <p className="section-subtitle mb-8">
            Our clinic is conveniently located on Highway 7 in Vaughan, Ontario, easily accessible
            from Toronto, Brampton, Mississauga, and the greater GTA. Free parking is available on
            site.
          </p>
          {/* Embedded Google Map */}
          <div
            className="w-full h-64 md:h-80 rounded-2xl overflow-hidden"
            style={{ border: "1px solid rgba(197,166,107,0.12)" }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2878.5!2d-79.5355!3d43.7915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b2ef0a1b8b1e7%3A0x1234567890abcdef!2s4600%20Hwy%207%2C%20Vaughan%2C%20ON%20L4L%204Y7!5e0!3m2!1sen!2sca!4v1700000000000!5m2!1sen!2sca"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Dr. Nidhi Bhan clinic location"
            />
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="section-padding bg-cream text-center">
        <div className="max-w-3xl mx-auto animate-fade-up">
          <span className="section-label">Ready Now?</span>
          <h2 className="section-title mt-4">
            Skip the Wait &mdash; <span className="gold-text">Book Directly</span>
          </h2>
          <p className="section-subtitle mt-4 mb-8">
            If you already know which service you need, you can book your session directly through
            our online scheduling system.
          </p>
          <Link href="/booking" className="btn-primary">
            Book a Session
          </Link>
        </div>
      </section>
    </>
  );
}
