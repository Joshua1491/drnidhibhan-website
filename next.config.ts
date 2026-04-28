import type { NextConfig } from "next";

const securityHeaders = [
  {
    key: "X-DNS-Prefetch-Control",
    value: "on",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  {
    key: "X-Frame-Options",
    value: "SAMEORIGIN",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "Referrer-Policy",
    value: "origin-when-cross-origin",
  },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
];

const nextConfig: NextConfig = {
  // Performance: compress responses
  compress: true,

  // Security headers on all routes
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },

  // 301 redirects for legacy Wix pages still in Google's index
  async redirects() {
    return [
      // Training / Courses
      { source: "/training", destination: "/services", permanent: true },
      { source: "/course", destination: "/services", permanent: true },
      { source: "/courses", destination: "/services", permanent: true },

      // Legacy general pages (Wix auto-generated)
      { source: "/general-1", destination: "/about", permanent: true },
      { source: "/general-2", destination: "/about", permanent: true },
      { source: "/general-3", destination: "/services", permanent: true },
      { source: "/general-4", destination: "/services", permanent: true },
      { source: "/general-5", destination: "/contact", permanent: true },
      { source: "/general-6", destination: "/contact", permanent: true },

      // Gallery / Media
      { source: "/gallery", destination: "/about", permanent: true },
      { source: "/photos", destination: "/about", permanent: true },

      // Shop / Products / Gifts
      { source: "/holisticgifts", destination: "/services", permanent: true },
      { source: "/shop", destination: "/services", permanent: true },
      { source: "/product-page/:slug*", destination: "/services", permanent: true },
      { source: "/cart", destination: "/booking", permanent: true },

      // Legacy booking / forms
      { source: "/book-online", destination: "/booking", permanent: true },
      { source: "/schedule", destination: "/booking", permanent: true },

      // Old blog paths
      { source: "/blog-1", destination: "/blog", permanent: true },
      { source: "/post/:slug*", destination: "/blog", permanent: true },

      // Old branding pages
      { source: "/vedic-life-school", destination: "/about", permanent: true },
      { source: "/home", destination: "/", permanent: true },

      // Catch common Wix paths
      { source: "/blank", destination: "/", permanent: true },
      { source: "/blank-1", destination: "/", permanent: true },
      { source: "/members", destination: "/", permanent: true },
      { source: "/forum", destination: "/blog", permanent: true },
    ];
  },

  // Image optimization
  images: {
    formats: ["image/avif", "image/webp"],
  },

  // Trailing slash consistency for SEO
  trailingSlash: false,

  // Powered-by header removal (minor security improvement)
  poweredByHeader: false,
};

export default nextConfig;
