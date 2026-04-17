import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.drnidhibhan.com"),
  title: {
    default: "Dr. Nidhi Bhan — Subconscious Mind Transformation Expert | Life Coaching Toronto",
    template: "%s | Dr. Nidhi Bhan",
  },
  description:
    "Dr. Nidhi Bhan helps high-achievers break free from invisible mental patterns through subconscious mind transformation, hypnotherapy, past life regression, and birth-chart-guided life coaching. 25+ years of experience. Toronto & worldwide virtual sessions.",
  keywords: [
    "life coach Toronto",
    "life coaching Toronto",
    "subconscious mind transformation",
    "hypnotherapy Toronto",
    "past life regression Toronto",
    "Vedic astrology Toronto",
    "mindset coaching",
    "subconscious reprogramming",
    "Dr Nidhi Bhan",
    "life coach New York",
    "holistic life coach",
    "transformation coach",
    "online life coaching",
  ],
  authors: [{ name: "Dr. Nidhi Bhan" }],
  openGraph: {
    title: "Dr. Nidhi Bhan — Subconscious Mind Transformation Expert",
    description:
      "Break free from the patterns keeping you stuck. Dr. Nidhi Bhan combines birth chart intelligence with hypnotherapy, past life regression & subconscious reconditioning to create lasting change.",
    url: "https://www.drnidhibhan.com",
    siteName: "Dr. Nidhi Bhan",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Nidhi Bhan — Subconscious Mind Transformation Expert",
    description:
      "Break free from the patterns keeping you stuck. Hypnotherapy, life coaching & Vedic astrology in Toronto.",
  },
  alternates: {
    canonical: "https://www.drnidhibhan.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500&family=Outfit:wght@200;300;400;500;600&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "Dr. Nidhi Bhan",
              description:
                "Subconscious Mind Transformation Expert offering life coaching, hypnotherapy, past life regression, and Vedic astrology consultations.",
              url: "https://www.drnidhibhan.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "4600 Hwy 7, Suite #208",
                addressLocality: "Vaughan",
                addressRegion: "Ontario",
                postalCode: "L4L 4Y7",
                addressCountry: "CA",
              },
              priceRange: "$$",
              openingHours: "Mo-Sa 08:00-20:00",
              areaServed: [
                "Toronto",
                "GTA",
                "New York",
                "Los Angeles",
                "Worldwide via Virtual Sessions",
              ],
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
