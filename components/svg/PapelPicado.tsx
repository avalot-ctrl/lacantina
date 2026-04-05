export default function PapelPicado({ className = '' }: { className?: string }) {
  const colors = ['#F07E2C', '#844999', '#19A95B', '#F23376', '#FFAB03', '#4280C7', '#FF461C', '#FCEA5B', '#7BCCC0']
  const triangleCount = 16

  return (
    <div className={`w-full overflow-hidden ${className}`} aria-hidden="true">
      <svg
        viewBox={`0 0 ${triangleCount * 60} 80`}
        preserveAspectRatio="xMidYMid slice"
        className="w-full"
        style={{ height: '80px' }}
      >
        {Array.from({ length: triangleCount }).map((_, i) => {
          const color = colors[i % colors.length]
          const x = i * 60
          return (
            <g key={i}>
              {/* String */}
              <line
                x1={x}
                y1="0"
                x2={x + 60}
                y2="0"
                stroke="#541A24"
                strokeWidth="2"
              />
              {/* Triangle flag */}
              <polygon
                points={`${x + 5},2 ${x + 55},2 ${x + 30},65`}
                fill={color}
                stroke="white"
                strokeWidth="1.5"
                className="papel-picado-banner"
                style={{ animationDelay: `${i * 0.15}s` }}
              />
              {/* Decorative cutouts */}
              <circle cx={x + 20} cy={20} r={4} fill="white" opacity="0.7" />
              <circle cx={x + 40} cy={20} r={4} fill="white" opacity="0.7" />
              <circle cx={x + 30} cy={35} r={3} fill="white" opacity="0.6" />
              {/* Small diamond */}
              <polygon
                points={`${x + 30},10 ${x + 35},18 ${x + 30},26 ${x + 25},18`}
                fill="white"
                opacity="0.5"
              />
            </g>
          )
        })}
        {/* End string */}
        <line x1={triangleCount * 60} y1="0" x2={triangleCount * 60 + 60} y2="0" stroke="#541A24" strokeWidth="2" />
      </svg>
    </div>
  )
}

export function PapelPicadoInverted({ className = '' }: { className?: string }) {
  const colors = ['#FCEA5B', '#F07E2C', '#F23376', '#7BCCC0', '#844999', '#FFAB03', '#FF461C', '#19A95B', '#4280C7']
  const triangleCount = 16

  return (
    <div className={`w-full overflow-hidden ${className}`} aria-hidden="true">
      <svg
        viewBox={`0 0 ${triangleCount * 60} 80`}
        preserveAspectRatio="xMidYMid slice"
        className="w-full"
        style={{ height: '80px', transform: 'rotate(180deg)' }}
      >
        {Array.from({ length: triangleCount }).map((_, i) => {
          const color = colors[i % colors.length]
          const x = i * 60
          return (
            <g key={i}>
              <line x1={x} y1="0" x2={x + 60} y2="0" stroke="#EFDFC6" strokeWidth="2" />
              <polygon
                points={`${x + 5},2 ${x + 55},2 ${x + 30},65`}
                fill={color}
                stroke="rgba(255,255,255,0.3)"
                strokeWidth="1.5"
                className="papel-picado-banner"
                style={{ animationDelay: `${i * 0.15}s` }}
              />
              <circle cx={x + 20} cy={20} r={4} fill="rgba(255,255,255,0.5)" />
              <circle cx={x + 40} cy={20} r={4} fill="rgba(255,255,255,0.5)" />
              <circle cx={x + 30} cy={35} r={3} fill="rgba(255,255,255,0.4)" />
              <polygon
                points={`${x + 30},10 ${x + 35},18 ${x + 30},26 ${x + 25},18`}
                fill="rgba(255,255,255,0.4)"
              />
            </g>
          )
        })}
      </svg>
    </div>
  )
}
