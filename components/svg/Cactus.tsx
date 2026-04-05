export default function Cactus({ size = 80, className = '' }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 60 80" className={className} aria-hidden="true">
      {/* Main trunk */}
      <rect x="22" y="20" width="16" height="50" rx="8" fill="#19A95B" stroke="#47471E" strokeWidth="1.5" />

      {/* Left arm */}
      <path
        d="M22 40 Q10 38 10 28 Q10 20 18 20"
        fill="none"
        stroke="#19A95B"
        strokeWidth="10"
        strokeLinecap="round"
      />
      <path
        d="M22 40 Q10 38 10 28 Q10 20 18 20"
        fill="none"
        stroke="#47471E"
        strokeWidth="1.5"
        strokeLinecap="round"
      />

      {/* Right arm */}
      <path
        d="M38 45 Q50 43 50 33 Q50 25 42 25"
        fill="none"
        stroke="#19A95B"
        strokeWidth="10"
        strokeLinecap="round"
      />
      <path
        d="M38 45 Q50 43 50 33 Q50 25 42 25"
        fill="none"
        stroke="#47471E"
        strokeWidth="1.5"
        strokeLinecap="round"
      />

      {/* Spines */}
      {[25, 35, 45, 55].map((y, i) => (
        <g key={i}>
          <line x1="20" y1={y} x2="16" y2={y - 3} stroke="#47471E" strokeWidth="1" />
          <line x1="40" y1={y} x2="44" y2={y - 3} stroke="#47471E" strokeWidth="1" />
        </g>
      ))}

      {/* Flower on top */}
      {[-1, 0, 1, 2, 3, 4].map((j) => (
        <ellipse
          key={j}
          cx={30 + 7 * Math.cos((j * 60 * Math.PI) / 180)}
          cy={18 + 7 * Math.sin((j * 60 * Math.PI) / 180)}
          rx="4"
          ry="3"
          fill="#F23376"
          transform={`rotate(${j * 60}, ${30 + 7 * Math.cos((j * 60 * Math.PI) / 180)}, ${18 + 7 * Math.sin((j * 60 * Math.PI) / 180)})`}
        />
      ))}
      <circle cx="30" cy="18" r="4" fill="#FFAB03" />

      {/* Ground */}
      <ellipse cx="30" cy="72" rx="14" ry="4" fill="#47471E" opacity="0.3" />
    </svg>
  )
}
