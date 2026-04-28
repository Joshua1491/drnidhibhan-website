import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for Dr. Nidhi Bhan's wellness and healing practice. Learn how we collect, use, and protect your personal information in accordance with Canadian privacy law (PIPEDA).",
  alternates: {
    canonical: "https://www.drnidhibhan.com/privacy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="section-padding bg-cream text-center">
        <div className="max-w-4xl mx-auto animate-fade-up">
          <span className="section-label">Legal</span>
          <h1 className="section-title mt-4">
            Privacy <span className="gold-text">Policy</span>
          </h1>
          <p className="text-text-secondary font-body text-lg font-light leading-relaxed max-w-2xl mx-auto mt-4">
            Your privacy is important to us. This policy explains how we collect, use, and
            safeguard your personal information.
          </p>
          <p className="text-text-muted font-body text-sm mt-4">
            Last updated: April 2026
          </p>
        </div>
      </section>

      {/* ===== INFORMATION COLLECTION ===== */}
      <section className="section-padding bg-blush-light">
        <div className="max-w-3xl mx-auto animate-fade-up">
          <h2 className="font-heading text-2xl md:text-3xl font-light text-charcoal mb-6">
            Information Collection
          </h2>
          <div className="space-y-4 text-text-secondary font-body text-base leading-relaxed">
            <p>
              We collect personal information that you voluntarily provide when you interact with
              our website, book a consultation, or contact us through our inquiry form. This may
              include your name, email address, phone number, and any details you share about
              the services you are interested in or the concerns you would like to address during
              a session.
            </p>
            <p>
              When you visit our website, certain technical information may be collected
              automatically, including your IP address, browser type, device information, and
              pages visited. This information helps us understand how visitors use our site and
              allows us to improve your browsing experience.
            </p>
          </div>
        </div>
      </section>

      {/* ===== USE OF INFORMATION ===== */}
      <section className="section-padding bg-cream">
        <div className="max-w-3xl mx-auto animate-fade-up">
          <h2 className="font-heading text-2xl md:text-3xl font-light text-charcoal mb-6">
            Use of Information
          </h2>
          <div className="space-y-4 text-text-secondary font-body text-base leading-relaxed">
            <p>
              The personal information we collect is used to respond to your inquiries, schedule
              and manage appointments, provide the services you have requested, and communicate
              with you about your sessions or follow-up care. We may also use your contact
              information to send you relevant updates about our practice, though you may opt out
              of such communications at any time.
            </p>
            <p>
              We do not sell, rent, or trade your personal information to third parties for
              marketing purposes. Your information is shared only to the extent necessary to
              operate our practice and provide the services you have engaged us for.
            </p>
          </div>
        </div>
      </section>

      {/* ===== COOKIES ===== */}
      <section className="section-padding bg-blush-light">
        <div className="max-w-3xl mx-auto animate-fade-up">
          <h2 className="font-heading text-2xl md:text-3xl font-light text-charcoal mb-6">
            Cookies
          </h2>
          <div className="space-y-4 text-text-secondary font-body text-base leading-relaxed">
            <p>
              Our website may use cookies and similar tracking technologies to enhance your
              browsing experience. Cookies are small data files stored on your device that help
              us remember your preferences and understand how you interact with our site.
            </p>
            <p>
              You can control or disable cookies through your browser settings. Please note that
              disabling cookies may affect certain features of the website. We use cookies solely
              to improve site functionality and user experience, not for targeted advertising.
            </p>
          </div>
        </div>
      </section>

      {/* ===== THIRD-PARTY SERVICES ===== */}
      <section className="section-padding bg-cream">
        <div className="max-w-3xl mx-auto animate-fade-up">
          <h2 className="font-heading text-2xl md:text-3xl font-light text-charcoal mb-6">
            Third-Party Services
          </h2>
          <div className="space-y-4 text-text-secondary font-body text-base leading-relaxed">
            <p>
              Our website relies on a small number of trusted third-party services to function
              effectively. Our contact and inquiry forms are processed through Formspree, a
              secure form handling service. When you submit a form on our website, your
              information is transmitted through Formspree&rsquo;s servers and forwarded to us.
              Formspree processes this data in accordance with their own privacy policy.
            </p>
            <p>
              We embed Google Maps on our contact page to help visitors locate our clinic. When
              this map loads, Google may collect certain usage data in accordance with
              Google&rsquo;s privacy policy. Our website is hosted on Vercel, a modern web
              hosting platform. Vercel may collect standard server logs and performance data as
              part of its hosting services.
            </p>
            <p>
              We encourage you to review the privacy policies of these third-party services for
              a complete understanding of how they handle your data. We select our service
              providers carefully and only work with companies that maintain reasonable standards
              of data protection.
            </p>
          </div>
        </div>
      </section>

      {/* ===== DATA RETENTION ===== */}
      <section className="section-padding bg-blush-light">
        <div className="max-w-3xl mx-auto animate-fade-up">
          <h2 className="font-heading text-2xl md:text-3xl font-light text-charcoal mb-6">
            Data Retention
          </h2>
          <div className="space-y-4 text-text-secondary font-body text-base leading-relaxed">
            <p>
              We retain your personal information only for as long as necessary to fulfill the
              purposes for which it was collected, provide our services, and comply with
              applicable legal obligations. Contact form submissions and appointment records are
              kept for a reasonable period to support ongoing client relationships and
              administrative needs.
            </p>
            <p>
              If you request that your personal information be deleted, we will take reasonable
              steps to remove it from our active systems, subject to any legal requirements that
              may require us to retain certain records.
            </p>
          </div>
        </div>
      </section>

      {/* ===== YOUR RIGHTS ===== */}
      <section className="section-padding bg-cream">
        <div className="max-w-3xl mx-auto animate-fade-up">
          <h2 className="font-heading text-2xl md:text-3xl font-light text-charcoal mb-6">
            Your Rights
          </h2>
          <div className="space-y-4 text-text-secondary font-body text-base leading-relaxed">
            <p>
              Under the Personal Information Protection and Electronic Documents Act (PIPEDA),
              Canada&rsquo;s federal privacy law, you have the right to access the personal
              information we hold about you, request corrections to any inaccurate or incomplete
              information, and withdraw your consent to the collection, use, or disclosure of
              your personal information at any time, subject to legal or contractual
              restrictions.
            </p>
            <p>
              You also have the right to file a complaint with the Office of the Privacy
              Commissioner of Canada if you believe your privacy rights have been violated. We
              are committed to addressing any concerns you may have about how your personal
              information is handled and will respond to all access and correction requests in a
              timely manner.
            </p>
          </div>
        </div>
      </section>

      {/* ===== CONTACT FOR PRIVACY CONCERNS ===== */}
      <section className="section-padding bg-blush-light">
        <div className="max-w-3xl mx-auto animate-fade-up">
          <h2 className="font-heading text-2xl md:text-3xl font-light text-charcoal mb-6">
            Contact for Privacy Concerns
          </h2>
          <div className="space-y-4 text-text-secondary font-body text-base leading-relaxed">
            <p>
              If you have any questions, concerns, or requests regarding this Privacy Policy or
              the handling of your personal information, please contact us at:
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
            <p>
              We will make every effort to respond to your inquiry promptly and to resolve any
              concerns to your satisfaction.
            </p>
          </div>
        </div>
      </section>

      {/* ===== BACK LINK ===== */}
      <section className="section-padding bg-cream text-center">
        <div className="max-w-3xl mx-auto animate-fade-up">
          <Link href="/" className="btn-secondary">
            Return to Home
          </Link>
        </div>
      </section>
    </>
  );
}
