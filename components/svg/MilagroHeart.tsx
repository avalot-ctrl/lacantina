export default function MilagroHeart({
  size = 80,
  className = '',
  animated = false,
}: {
  size?: number
  className?: string
  animated?: boolean
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={`${className} ${animated ? 'animate-pulse' : ''}`}
      aria-hidden="true"
    >
      {/* Outer rays / sun burst */}
      {Array.from({ length: 16 }).map((_, i) => {
        const angle = (i * 360) / 16
        const rad = (angle * Math.PI) / 180
        const x1 = 50 + 42 * Math.cos(rad)
        const y1 = 50 + 42 * Math.sin(rad)
        const x2 = 50 + 35 * Math.cos(rad)
        const y2 = 50 + 35 * Math.sin(rad)
        return (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="#FFAB03"
            strokeWidth={i % 2 === 0 ? 2.5 : 1.5}
            strokeLinecap="round"
          />
        )
      })}

      {/* Decorative outer circle */}
      <circle cx="50" cy="50" r="30" fill="none" stroke="#F07E2C" strokeWidth="1.5" strokeDasharray="3 2" />

      {/* Heart shape */}
      <path
        d="M50 72 C50 72 28 58 28 44 C28 36 34 30 41 30 C45 30 49 33 50 35 C51 33 55 30 59 30 C66 30 72 36 72 44 C72 58 50 72 50 72Z"
        fill="#FF461C"
        stroke="#541A24"
        strokeWidth="2"
      />

      {/* Heart highlight */}
      <path
        d="M40 38 C38 38 36 40 36 43"
        fill="none"
        stroke="rgba(255,255,255,0.5)"
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* Inner heart decoration */}
      <path
        d="M50 65 C50 65 36 55 36 46 C36 42 39 39 42 39 C45 39 48 41 50 43 C52 41 55 39 58 39 C61 39 64 42 64 46 C64 55 50 65 50 65Z"
        fill="none"
        stroke="#FFAB03"
        strokeWidth="1.5"
      />

      {/* Flowers around heart */}
      {[
        { x: 50, y: 25 },
        { x: 75, y: 50 },
        { x: 50, y: 78 },
        { x: 25, y: 50 },
      ].map((pos, i) => (
        <g key={i}>
          <circle cx={pos.x} cy={pos.y} r="4" fill="#F23376" />
          <circle cx={pos.x} cy={pos.y} r="2" fill="#FFAB03" />
          {[-1, 0, 1, 2].map((j) => {
            const a = (j * 90 * Math.PI) / 180
            return (
              <ellipse
                key={j}
                cx={pos.x + 5 * Math.cos(a)}
                cy={pos.y + 5 * Math.sin(a)}
                rx="2.5"
                ry="1.5"
                fill="#F23376"
                transform={`rotate(${j * 90}, ${pos.x + 5 * Math.cos(a)}, ${pos.y + 5 * Math.sin(a)})`}
              />
            )
          })}
        </g>
      ))}

      {/* Flames at bottom */}
      <path
        d="M44 70 Q46 65 50 68 Q54 65 56 70"
        fill="none"
        stroke="#FFAB03"
        strokeWidth="2"
        strokeLinecap="round"
        className="flame-anim"
      />
    </svg>
  )
}
