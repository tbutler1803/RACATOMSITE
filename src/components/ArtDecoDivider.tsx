interface ArtDecoDividerProps {
  width?: string;
  height?: string;
  className?: string;
}

function ArtDecoDivider({ width = "w-full", height = "h-6 md:h-20", className = "" }: ArtDecoDividerProps) {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <svg
        viewBox="0 0 520 28"
        className={`${width} ${height}`}
        preserveAspectRatio="xMidYMid meet"
        xmlns="http://www.w3.org/2000/svg"
        style={{ color: 'var(--color-gold-accent)' }}
      >
        {/* Left half */}
        <g>
          {/* End cap diamond */}
          <polygon points="8,14 16,6 24,14 16,22" fill="currentColor" />

          {/* Outer long line */}
          <path d="M24 14H196" stroke="currentColor" strokeWidth="2" />

          {/* Inner parallel lines */}
          <path d="M72 8H192" stroke="currentColor" strokeWidth="2" />
          <path d="M72 20H192" stroke="currentColor" strokeWidth="2" />

          {/* Deco bracket */}
          <path d="M206 14L216 4" stroke="currentColor" strokeWidth="2" />
          <path d="M206 14L216 24" stroke="currentColor" strokeWidth="2" />
          <path d="M216 14H224" stroke="currentColor" strokeWidth="2" />

          {/* Side diamond (outline) */}
          <polygon points="232,6 240,14 232,22 224,14" fill="none" stroke="currentColor" strokeWidth="2" />

          {/* Little accent strokes around diamond */}
          <path d="M242 14H246" stroke="currentColor" strokeWidth="2" />
          <path d="M238 10H246" stroke="currentColor" strokeWidth="2" />
          <path d="M238 18H246" stroke="currentColor" strokeWidth="2" />
        </g>

        {/* Right half mirrored */}
        <g transform="translate(520 0) scale(-1 1)">
          <polygon points="8,14 16,6 24,14 16,22" fill="currentColor" />
          <path d="M24 14H196" stroke="currentColor" strokeWidth="2" />
          <path d="M72 8H192" stroke="currentColor" strokeWidth="2" />
          <path d="M72 20H192" stroke="currentColor" strokeWidth="2" />
          <path d="M206 14L216 4" stroke="currentColor" strokeWidth="2" />
          <path d="M206 14L216 24" stroke="currentColor" strokeWidth="2" />
          <path d="M216 14H224" stroke="currentColor" strokeWidth="2" />
          <polygon points="232,6 240,14 232,22 224,14" fill="none" stroke="currentColor" strokeWidth="2" />
          <path d="M242 14H246" stroke="currentColor" strokeWidth="2" />
          <path d="M238 10H246" stroke="currentColor" strokeWidth="2" />
          <path d="M238 18H246" stroke="currentColor" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

export default ArtDecoDivider;
