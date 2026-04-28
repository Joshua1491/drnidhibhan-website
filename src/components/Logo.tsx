export default function Logo({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 320 80"
      className={className}
      style={{ height: "48px", width: "auto" }}
      role="img"
      aria-label="Dr. Nidhi Bhan — Subconscious Mind Transformation"
    >
      <g transform="translate(0, 2)">
        {/* Lotus Symbol */}
        <g transform="translate(5, 0) scale(0.72)">
          {/* Center petals */}
          <path
            d="M25 72 Q25 50 40 38 Q50 28 50 46 Q50 28 60 38 Q75 50 75 72"
            fill="none"
            stroke="#C5A66B"
            strokeWidth="1.3"
            strokeLinecap="round"
          />
          {/* Inner glow petals */}
          <path
            d="M30 70 Q30 52 42 42 Q50 34 50 48 Q50 34 58 42 Q70 52 70 70"
            fill="none"
            stroke="#D4A855"
            strokeWidth="0.8"
            strokeLinecap="round"
            opacity="0.6"
          />
          {/* Left outer petal */}
          <path
            d="M20 74 Q20 54 34 42 Q44 34 48 44"
            fill="none"
            stroke="#C5A66B"
            strokeWidth="1"
            strokeLinecap="round"
            opacity="0.55"
          />
          {/* Right outer petal */}
          <path
            d="M80 74 Q80 54 66 42 Q56 34 52 44"
            fill="none"
            stroke="#C5A66B"
            strokeWidth="1"
            strokeLinecap="round"
            opacity="0.55"
          />
          {/* Far left petal */}
          <path
            d="M14 76 Q16 58 30 46 Q40 38 44 46"
            fill="none"
            stroke="#B8935A"
            strokeWidth="0.8"
            strokeLinecap="round"
            opacity="0.35"
          />
          {/* Far right petal */}
          <path
            d="M86 76 Q84 58 70 46 Q60 38 56 46"
            fill="none"
            stroke="#B8935A"
            strokeWidth="0.8"
            strokeLinecap="round"
            opacity="0.35"
          />
          {/* Center dot */}
          <circle cx="50" cy="52" r="2.5" fill="#D4A855" opacity="0.45" />
          <circle cx="50" cy="52" r="1" fill="#C5A66B" />
          {/* Base curve */}
          <path
            d="M35 74 Q42 70 50 68 Q58 70 65 74"
            fill="none"
            stroke="#C5A66B"
            strokeWidth="0.6"
            opacity="0.4"
          />
        </g>

        {/* Text */}
        <text
          x="78"
          y="42"
          fontFamily="'Cormorant Garamond', serif"
          fontSize="32"
          fontWeight="600"
          fill="#2C2636"
          letterSpacing="0.5"
        >
          Dr. Nidhi Bhan
        </text>
        {/* Gold accent line */}
        <line
          x1="78"
          y1="52"
          x2="118"
          y2="52"
          stroke="#C5A66B"
          strokeWidth="0.8"
          opacity="0.5"
        />
        {/* Subtitle */}
        <text
          x="78"
          y="66"
          fontFamily="'Cormorant Garamond', serif"
          fontSize="9"
          fontWeight="400"
          fill="#B8935A"
          letterSpacing="3.5"
        >
          SUBCONSCIOUS MIND TRANSFORMATION
        </text>
      </g>
    </svg>
  );
}
