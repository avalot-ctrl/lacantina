export default function Chili({
  size = 40,
  color = '#FF461C',
  className = '',
}: {
  size?: number
  color?: string
  className?: string
}) {
  return (
    <svg width={size} height={size} viewBox="0 0 50 70" className={className} aria-hidden="true">
      {/* Stem */}
      <path
        d="M25 5 Q30 2 35 8"
        fill="none"
        stroke="#19A95B"
        strokeWidth="3"
        strokeLinecap="round"
      />
      {/* Leaf */}
      <path
        d="M25 5 Q22 0 28 2 Q28 6 25 5"
        fill="#19A95B"
      />
      {/* Body */}
      <path
        d="M25 8 Q34 8 36 20 Q38 36 30 52 Q27 58 25 60 Q23 58 20 52 Q12 36 14 20 Q16 8 25 8Z"
        fill={color}
      />
      {/* Highlight */}
      <path
        d="M22 12 Q20 14 21 22 Q22 18 24 16 Q23 14 22 12Z"
        fill="rgba(255,255,255,0.3)"
      />
      {/* Tip */}
      <path
        d="M25 60 Q24 64 25 68 Q26 64 25 60Z"
        fill={color}
      />
    </svg>
  )
}

export function ChiliRow({ count = 5, className = '' }: { count?: number; className?: string }) {
  const colors = ['#FF461C', '#F23376', '#FFAB03', '#FF461C', '#F07E2C']
  return (
    <div className={`flex items-center gap-1 ${className}`} aria-hidden="true">
      {Array.from({ length: count }).map((_, i) => (
        <Chili
          key={i}
          size={20 + (i % 2) * 5}
          color={colors[i % colors.length]}
          className={i % 2 === 0 ? 'rotate-12' : '-rotate-6'}
        />
      ))}
    </div>
  )
}
