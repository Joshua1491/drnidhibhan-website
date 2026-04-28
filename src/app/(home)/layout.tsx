import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Dr. Nidhi Bhan — Subconscious Mind Transformation Expert | Life Coaching Toronto",
  description:
    "Dr. Nidhi Bhan helps high-achievers break free from invisible mental patterns through subconscious mind transformation, hypnotherapy, past life regression, and birth-chart-guided life coaching. 25+ years of experience. Toronto & worldwide virtual sessions.",
  alternates: {
    canonical: "https://www.drnidhibhan.com",
  },
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
};

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
