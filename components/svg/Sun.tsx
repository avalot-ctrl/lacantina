export default function Sun({
  size = 60,
  color = '#FFAB03',
  className = '',
}: {
  size?: number
  color?: string
  className?: string
}) {
  const rays = 12

  return (
    <svg width={size} height={size} viewBox="0 0 100 100" className={className} aria-hidden="true">
      {/* Outer rays */}
      {Array.from({ length: rays }).map((_, i) => {
        const angle = (i * 360) / rays
        const rad = (angle * Math.PI) / 180
        const long = i % 2 === 0 ? 48 : 44
        const short = i % 2 === 0 ? 38 : 36
        return (
          <line
            key={i}
            x1={50 + short * Math.cos(rad)}
            y1={50 + short * Math.sin(rad)}
            x2={50 + long * Math.cos(rad)}
            y2={50 + long * Math.sin(rad)}
            stroke={color}
            strokeWidth={i % 2 === 0 ? 3 : 2}
            strokeLinecap="round"
          />
        )
      })}

      {/* Decorative ring */}
      <circle cx="50" cy="50" r="30" fill="none" stroke={color} strokeWidth="1.5" opacity="0.4" />
      <circle cx="50" cy="50" r="26" fill="none" stroke={color} strokeWidth="0.5" opacity="0.3" />

      {/* Main circle */}
      <circle cx="50" cy="50" r="22" fill={color} />

      {/* Face / inner decoration */}
      <circle cx="50" cy="50" r="16" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" />

      {/* Smile eyes */}
      <circle cx="44" cy="47" r="2.5" fill="rgba(84,26,36,0.5)" />
      <circle cx="56" cy="47" r="2.5" fill="rgba(84,26,36,0.5)" />
      <path
        d="M44 55 Q50 60 56 55"
        fill="none"
        stroke="rgba(84,26,36,0.5)"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function SunDivider({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-4 py-6 ${className}`} aria-hidden="true">
      <div className="flex-1 h-0.5 bg-gradient-to-r from-transparent via-flor to-transparent opacity-50" />
      <Sun size={40} color="#F07E2C" />
      <div className="flex-1 h-0.5 bg-gradient-to-r from-transparent via-flor to-transparent opacity-50" />
    </div>
  )
}
