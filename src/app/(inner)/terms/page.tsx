import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of Service for Dr. Nidhi Bhan's holistic wellness and healing practice. Please review these terms before booking a consultation or using our services.",
  alternates: {
    canonical: "https://www.drnidhibhan.com/terms",
  },
};

export default function TermsOfServicePage() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="section-padding bg-cream text-center">
        <div className="max-w-4xl mx-auto animate-fade-up">
          <span className="section-label">Legal</span>
          <h1 className="section-title mt-4">
            Terms of <span className="gold-text">Service</span>
          </h1>
          <p className="text-text-secondary font-body text-lg font-light leading-relaxed max-w-2xl mx-auto mt-4">
            Please read these terms carefully before using our website or engaging our services.
          </p>
          <p className="text-text-muted font-body text-sm mt-4">
            Last updated: April 2026
          </p>
        </div>
      </section>

      {/* ===== ACCEPTANCE OF TERMS ===== */}
      <section className="section-padding bg-blush-light">
        <div className="max-w-3xl mx-auto animate-fade-up">
          <h2 className="font-heading text-2xl md:text-3xl font-light text-charcoal mb-6">
            Acceptance of Terms
          </h2>
          <div className="space-y-4 text-text-secondary font-body text-base leading-relaxed">
            <p>
              By accessing this website or booking any services offered by Dr. Nidhi Bhan, you
              acknowledge that you have read, understood, and agree to be bound by these Terms
              of Service. If you do not agree with any part of these terms, please refrain from
              using the website or engaging our services.
            </p>
            <p>
              We reserve the right to update or modify these terms at any time without prior
              notice. Your continued use of the website or our services following any changes
              constitutes your acceptance of the revised terms.
            </p>
          </div>
        </div>
      </section>

      {/* ===== SERVICES DESCRIPTION ===== */}
      <section className="section-padding bg-cream">
        <div className="max-w-3xl mx-auto animate-fade-up">
          <h2 className="font-heading text-2xl md:text-3xl font-light text-charcoal mb-6">
            Services Description
          </h2>
          <div className="space-y-4 text-text-secondary font-body text-base leading-relaxed">
            <p>
              Dr. Nidhi Bhan offers wellness and healing services including Vedic astrology
              consultations, hypnotherapy, past life regression therapy, subliminal
              reconditioning, life coaching, Vastu harmonics, and tarot reading. These services
              are holistic and complementary in nature and are designed to support your personal
              growth, self-awareness, and overall well-being.
            </p>
            <p>
              The services provided are not medical, psychological, or psychiatric treatment.
              They are not intended to diagnose, treat, cure, or prevent any disease or mental
              health condition. Results vary from person to person, and no specific outcomes are
              guaranteed.
            </p>
          </div>
        </div>
      </section>

      {/* ===== IMPORTANT DISCLAIMER ===== */}
      <section className="section-padding bg-blush-light">
        <div className="max-w-3xl mx-auto animate-fade-up">
          <h2 className="font-heading text-2xl md:text-3xl font-light text-charcoal mb-6">
            Disclaimers
          </h2>
          <div className="space-y-4 text-text-secondary font-body text-base leading-relaxed">
            <div className="card bg-white/60 border-l-4 border-soft-gold">
              <p className="font-body text-base leading-relaxed text-charcoal">
                The services offered by Dr. Nidhi Bhan are holistic and complementary in nature.
                They are not a substitute for professional medical, psychological, or psychiatric
                treatment. If you are experiencing a medical or mental health emergency, please
                contact your healthcare provider or emergency services immediately.
              </p>
            </div>
            <p>
              All information provided during sessions is for general wellness and personal
              development purposes only. You are encouraged to consult with qualified healthcare
              professionals for any medical or mental health concerns. By engaging our services,
              you acknowledge that you do so voluntarily and assume full responsibility for your
              own health and well-being decisions.
            </p>
            <p>
              The content on this website, including descriptions of services and their
              potential benefits, is provided for informational purposes only and should not be
              construed as medical advice, diagnosis, or treatment recommendations.
            </p>
          </div>
        </div>
      </section>

      {/* ===== BOOKING & CANCELLATION ===== */}
      <section className="section-padding bg-cream">
        <div className="max-w-3xl mx-auto animate-fade-up">
          <h2 className="font-heading text-2xl md:text-3xl font-light text-charcoal mb-6">
            Booking and Cancellation
          </h2>
          <div className="space-y-4 text-text-secondary font-body text-base leading-relaxed">
            <p>
              All appointments are scheduled on a first-come, first-served basis and are
              confirmed upon receipt of any required payment or deposit. By booking a session,
              you agree to attend at the scheduled date and time or to provide adequate notice
              if you need to reschedule or cancel.
            </p>
            <p>
              We require a minimum of 24 hours&rsquo; notice for any cancellation or
              rescheduling request. Cancellations made with less than 24 hours&rsquo; notice may
              be subject to a cancellation fee or forfeiture of the session deposit. We
              understand that emergencies occur and will handle such situations with compassion
              on a case-by-case basis.
            </p>
            <p>
              Dr. Nidhi Bhan reserves the right to cancel or reschedule an appointment due to
              unforeseen circumstances. In such cases, you will be offered an alternative
              appointment time or a full refund of any deposit paid.
            </p>
          </div>
        </div>
      </section>

      {/* ===== PAYMENT ===== */}
      <section className="section-padding bg-blush-light">
        <div className="max-w-3xl mx-auto animate-fade-up">
          <h2 className="font-heading text-2xl md:text-3xl font-light text-charcoal mb-6">
            Payment
          </h2>
          <div className="space-y-4 text-text-secondary font-body text-base leading-relaxed">
            <p>
              Payment for services is due at the time of booking or at the time of service, as
              specified during the scheduling process. We accept the payment methods indicated
              on our booking platform. All fees are quoted in Canadian dollars unless otherwise
              stated.
            </p>
            <p>
              Service fees are subject to change. Any fee changes will not affect sessions that
              have already been booked and paid for. Refund requests are handled on a
              case-by-case basis and are generally issued only when a session has been cancelled
              by us or when the cancellation policy has been satisfied.
            </p>
          </div>
        </div>
      </section>

      {/* ===== LIMITATION OF LIABILITY ===== */}
      <section className="section-padding bg-cream">
        <div className="max-w-3xl mx-auto animate-fade-up">
          <h2 className="font-heading text-2xl md:text-3xl font-light text-charcoal mb-6">
            Limitation of Liability
          </h2>
          <div className="space-y-4 text-text-secondary font-body text-base leading-relaxed">
            <p>
              To the fullest extent permitted by applicable law, Dr. Nidhi Bhan and her
              practice shall not be liable for any indirect, incidental, special, consequential,
              or punitive damages arising out of or related to your use of our website or
              services. This includes, without limitation, damages for loss of profits, data, or
              other intangible losses.
            </p>
            <p>
              Our total liability for any claim arising from or related to our services shall
              not exceed the amount you paid for the specific service giving rise to the claim.
              This limitation applies regardless of the legal theory upon which the claim is
              based.
            </p>
          </div>
        </div>
      </section>

      {/* ===== GOVERNING LAW ===== */}
      <section className="section-padding bg-blush-light">
        <div className="max-w-3xl mx-auto animate-fade-up">
          <h2 className="font-heading text-2xl md:text-3xl font-light text-charcoal mb-6">
            Governing Law
          </h2>
          <div className="space-y-4 text-text-secondary font-body text-base leading-relaxed">
            <p>
              These Terms of Service shall be governed by and construed in accordance with the
              laws of the Province of Ontario and the federal laws of Canada applicable therein,
              without regard to conflict of law principles. Any disputes arising from or
              relating to these terms or your use of our services shall be subject to the
              exclusive jurisdiction of the courts located in the Province of Ontario, Canada.
            </p>
          </div>
        </div>
      </section>

      {/* ===== CONTACT ===== */}
      <section className="section-padding bg-cream">
        <div className="max-w-3xl mx-auto animate-fade-up">
          <h2 className="font-heading text-2xl md:text-3xl font-light text-charcoal mb-6">
            Contact
          </h2>
          <div className="space-y-4 text-text-secondary font-body text-base leading-relaxed">
            <p>
              If you have any questions or concerns about these Terms of Service, please do not
              hesitate to reach out to us.
            </p>
            <div className="card bg-white/60 mt-6">
              <p className="font-heading text-lg text-charcoal mb-2">Dr. Nidhi Bhan</p>
              <p className="text-text-secondary font-body text-sm leading-relaxed">
                4600 Hwy 7, Suite #208
                <br />
                Vaughan, Ontario L4L 4Y7
                <br />
                Canada
              </p>
              <p className="mt-4">
                <Link href="/contact" className="text-soft-gold hover:underline font-body text-sm">
                  Contact Us
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== BACK LINK ===== */}
      <section className="section-padding bg-blush-light text-center">
        <div className="max-w-3xl mx-auto animate-fade-up">
          <Link href="/" className="btn-secondary">
            Return to Home
          </Link>
        </div>
      </section>
    </>
  );
}
