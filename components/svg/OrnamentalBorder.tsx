export function OrnamentalBorderTop({ color = '#F07E2C', className = '' }: { color?: string; className?: string }) {
  return (
    <svg
      viewBox="0 0 400 30"
      className={`w-full ${className}`}
      style={{ height: '30px' }}
      aria-hidden="true"
    >
      {/* Main line */}
      <line x1="0" y1="15" x2="400" y2="15" stroke={color} strokeWidth="2" />

      {/* Repeating diamond pattern */}
      {Array.from({ length: 10 }).map((_, i) => {
        const x = 20 + i * 40
        return (
          <g key={i}>
            <polygon
              points={`${x},8 ${x + 6},15 ${x},22 ${x - 6},15`}
              fill={color}
              opacity={i % 2 === 0 ? '1' : '0.5'}
            />
            {i % 2 === 0 && (
              <circle cx={x} cy={15} r="2" fill="white" />
            )}
          </g>
        )
      })}

      {/* Corner ornaments */}
      <path d="M0 5 Q5 5 8 10 Q5 10 8 15 Q5 15 8 20 Q5 20 0 25" fill="none" stroke={color} strokeWidth="1.5" />
      <path d="M400 5 Q395 5 392 10 Q395 10 392 15 Q395 15 392 20 Q395 20 400 25" fill="none" stroke={color} strokeWidth="1.5" />
    </svg>
  )
}

export function OrnamentalCorners({ color = '#F07E2C', className = '' }: { color?: string; className?: string }) {
  return (
    <div className={`absolute inset-0 pointer-events-none ${className}`} aria-hidden="true">
      {/* Top-left */}
      <svg className="absolute top-0 left-0" width="60" height="60" viewBox="0 0 60 60">
        <path d="M5 5 L5 25 M5 5 L25 5" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="5" cy="5" r="3" fill={color} />
        <path d="M12 12 L12 20 M12 12 L20 12" fill="none" stroke={color} strokeWidth="1" strokeLinecap="round" opacity="0.5" />
      </svg>
      {/* Top-right */}
      <svg className="absolute top-0 right-0" width="60" height="60" viewBox="0 0 60 60">
        <path d="M55 5 L55 25 M55 5 L35 5" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="55" cy="5" r="3" fill={color} />
        <path d="M48 12 L48 20 M48 12 L40 12" fill="none" stroke={color} strokeWidth="1" strokeLinecap="round" opacity="0.5" />
      </svg>
      {/* Bottom-left */}
      <svg className="absolute bottom-0 left-0" width="60" height="60" viewBox="0 0 60 60">
        <path d="M5 55 L5 35 M5 55 L25 55" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="5" cy="55" r="3" fill={color} />
        <path d="M12 48 L12 40 M12 48 L20 48" fill="none" stroke={color} strokeWidth="1" strokeLinecap="round" opacity="0.5" />
      </svg>
      {/* Bottom-right */}
      <svg className="absolute bottom-0 right-0" width="60" height="60" viewBox="0 0 60 60">
        <path d="M55 55 L55 35 M55 55 L35 55" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="55" cy="55" r="3" fill={color} />
        <path d="M48 48 L48 40 M48 48 L40 48" fill="none" stroke={color} strokeWidth="1" strokeLinecap="round" opacity="0.5" />
      </svg>
    </div>
  )
}

export default OrnamentalBorderTop
