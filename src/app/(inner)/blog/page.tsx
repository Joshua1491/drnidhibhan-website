import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog & Insights | Dr. Nidhi Bhan",
  description:
    "Explore articles on subconscious mind transformation, Vedic astrology, hypnotherapy, life coaching, and personal growth by Dr. Nidhi Bhan.",
  alternates: {
    canonical: "https://www.drnidhibhan.com/blog",
  },
  openGraph: {
    title: "Blog & Insights | Dr. Nidhi Bhan",
    description:
      "Insights and wisdom on subconscious transformation, astrology, hypnotherapy, and holistic personal development.",
    url: "https://www.drnidhibhan.com/blog",
  },
};

const posts = [
  {
    title: "Why Your Birth Chart Is Not a Fortune-Telling Tool",
    excerpt:
      "Most people approach Vedic astrology expecting predictions. But the real power of your birth chart lies in what it reveals about your subconscious programming — the invisible code that shapes every decision, relationship, and outcome in your life.",
    date: "April 10, 2026",
    category: "Vedic Astrology",
    bg: "bg-lavender-light",
    link: "/services/vedic-astrology",
  },
  {
    title: "5 Signs Your Subconscious Mind Is Running the Show",
    excerpt:
      "You set goals, make plans, and take action — yet the same unwanted patterns keep repeating. Self-sabotage, procrastination, toxic relationship cycles. Here are five telltale signs that your subconscious programming is overriding your conscious intentions.",
    date: "March 28, 2026",
    category: "Subconscious Mind",
    bg: "bg-peach-light",
    link: "/services/hypnotherapy",
  },
  {
    title: "What Actually Happens During a Hypnotherapy Session",
    excerpt:
      "Forget everything you have seen on stage shows. Clinical hypnotherapy is a precise, evidence-backed process for accessing the subconscious mind. Here is what a real session looks like, what you will feel, and why it works.",
    date: "March 15, 2026",
    category: "Hypnotherapy",
    bg: "bg-sage-light",
    link: "/services/hypnotherapy",
  },
  {
    title: "Past Lives and Present Patterns: How Karmic Imprints Affect You Today",
    excerpt:
      "Some emotional reactions, fears, and relationship dynamics cannot be explained by childhood experiences alone. Past life regression reveals how patterns from previous incarnations continue to shape your present reality — and how to release them.",
    date: "February 27, 2026",
    category: "Past Life Regression",
    bg: "bg-blush-light",
    link: "/services/past-life-regression",
  },
  {
    title: "The Difference Between Coaching and Transformation",
    excerpt:
      "Traditional life coaching focuses on strategy and accountability. Subconscious transformation goes deeper — rewiring the mental programming that created the problem in the first place. Understanding this distinction can save you years of effort.",
    date: "February 12, 2026",
    category: "Life Coaching",
    bg: "bg-lavender-light",
    link: "/services/life-coaching",
  },
  {
    title: "How to Prepare for Your First Consultation with Dr. Nidhi",
    excerpt:
      "Getting the most from your session starts before you walk through the door. From gathering your birth details to setting clear intentions, here is a practical guide to arriving fully prepared for deep, meaningful work.",
    date: "January 30, 2026",
    category: "Getting Started",
    bg: "bg-peach-light",
    link: "/booking",
  },
];

const categoryColors: Record<string, string> = {
  "Vedic Astrology": "bg-lavender/60 text-deep-plum",
  "Subconscious Mind": "bg-peach/60 text-deep-plum",
  Hypnotherapy: "bg-sage/60 text-deep-plum",
  "Past Life Regression": "bg-blush/60 text-deep-plum",
  "Life Coaching": "bg-lavender/60 text-deep-plum",
  "Getting Started": "bg-sage/60 text-deep-plum",
};

export default function BlogPage() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="section-padding bg-cream text-center">
        <div className="max-w-4xl mx-auto animate-fade-up">
          <span className="section-label">Blog</span>
          <h1 className="section-title mt-4">
            Insights &amp; <span className="gold-text">Wisdom</span>
          </h1>
          <p className="section-subtitle mt-4">
            Explore articles on subconscious transformation, Vedic astrology, hypnotherapy, and the
            invisible patterns that shape your life.
          </p>
        </div>
      </section>

      {/* ===== BLOG GRID ===== */}
      <section className="section-padding bg-blush-light">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post, i) => (
              <a
                key={post.title}
                href={post.link}
                className={`card ${post.bg} flex flex-col group animate-fade-up`}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {/* Category & Date */}
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-xs font-body font-medium tracking-wide ${categoryColors[post.category] || "bg-lavender/60 text-deep-plum"}`}
                  >
                    {post.category}
                  </span>
                  <span className="text-text-muted font-body text-xs">{post.date}</span>
                </div>

                {/* Title */}
                <h3 className="font-heading text-xl text-charcoal mb-3 leading-snug group-hover:text-warm-gold transition-colors">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-text-secondary font-body text-sm leading-relaxed flex-1">
                  {post.excerpt}
                </p>

                {/* Read more */}
                <span className="inline-flex items-center gap-2 text-warm-gold font-body text-sm font-medium mt-5 group-hover:gap-3 transition-all">
                  Read Article
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ===== NEWSLETTER ===== */}
      <section className="section-padding bg-cream">
        <div className="max-w-2xl mx-auto text-center animate-fade-up">
          <span className="section-label">Stay Connected</span>
          <h2 className="section-title mt-4">
            Subscribe to <span className="gold-text">Our Newsletter</span>
          </h2>
          <p className="section-subtitle mt-4 mb-8">
            Receive insights on subconscious transformation, astrology wisdom, and practical
            guidance for personal growth delivered directly to your inbox.
          </p>

          <form
            action="https://formspree.io/f/xpwdkqyj"
            method="POST"
            className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
          >
            <input
              type="email"
              name="email"
              required
              placeholder="Enter your email address"
              className="flex-1 px-5 py-3.5 rounded-full bg-white/80 border border-transparent font-body text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-soft-gold/40 transition-colors"
              style={{ border: "1px solid rgba(197,166,107,0.12)" }}
            />
            <input type="hidden" name="_subject" value="New newsletter subscriber" />
            <button type="submit" className="btn-primary whitespace-nowrap">
              Subscribe
            </button>
          </form>
          <p className="text-text-muted text-xs font-body mt-4">
            No spam, ever. Unsubscribe anytime.
          </p>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="section-padding bg-sage-light text-center">
        <div className="max-w-3xl mx-auto animate-fade-up">
          <h2 className="section-title">
            Ready to Go <span className="gold-text">Deeper</span>?
          </h2>
          <p className="section-subtitle mt-4 mb-8">
            Reading is a great start. But real transformation happens when you work directly with
            Dr. Nidhi on the patterns unique to your life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/booking" className="btn-primary">
              Book a Session
            </Link>
            <Link href="/about" className="btn-secondary">
              About Dr. Nidhi
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
