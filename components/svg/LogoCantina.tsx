'use client'

/**
 * Logo La Cantina — Brasserie Latina
 * Reproduit fidèlement le logo officiel avec cœur Milagro, flammes,
 * rayons lumineux, typographie inclinée et "BRASSERIE LATINA"
 */
export default function LogoCantina({
  variant = 'color',
  width = 280,
  className = '',
}: {
  variant?: 'color' | 'white' | 'dark'
  width?: number
  className?: string
}) {
  const height = Math.round(width * 0.62)

  const textColor = variant === 'color' ? '#541A24' : '#FFFFFF'
  const accentColor = variant === 'color' ? '#F07E2C' : 'rgba(255,255,255,0.7)'
  const heartFill = variant === 'color' ? '#541A24' : '#FFFFFF'
  const heartStroke = variant === 'color' ? '#541A24' : '#FFFFFF'
  const lineColor = variant === 'color' ? '#541A24' : 'rgba(255,255,255,0.8)'

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 280 174"
      className={className}
      role="img"
      aria-label="La Cantina — Brasserie Latina"
    >
      {/* ── CŒUR MILAGRO avec flammes et rayons ── */}
      <g transform="translate(140, 52)">
        {/* Rayons lumineux */}
        {Array.from({ length: 20 }).map((_, i) => {
          const angle = (i * 360) / 20
          const rad = (angle * Math.PI) / 180
          const isLong = i % 2 === 0
          const r1 = isLong ? 44 : 38
          const r2 = isLong ? 52 : 46
          return (
            <line
              key={i}
              x1={r1 * Math.cos(rad)}
              y1={r1 * Math.sin(rad)}
              x2={r2 * Math.cos(rad)}
              y2={r2 * Math.sin(rad)}
              stroke={heartStroke}
              strokeWidth={isLong ? 1.2 : 0.8}
              opacity="0.8"
            />
          )
        })}

        {/* Rayons verticaux longs en bas */}
        {[-3, -1.5, 0, 1.5, 3].map((x, i) => (
          <line
            key={`v${i}`}
            x1={x}
            y1={44}
            x2={x}
            y2={52 + (i === 2 ? 4 : 0)}
            stroke={heartStroke}
            strokeWidth="0.8"
            opacity="0.6"
          />
        ))}

        {/* Tige du cœur */}
        <line x1="-30" y1="-8" x2="-55" y2="-8" stroke={lineColor} strokeWidth="1" />
        <polygon points="-55,-11 -62,-8 -55,-5" fill={lineColor} opacity="0.8" />
        <line x1="30" y1="-8" x2="55" y2="-8" stroke={lineColor} strokeWidth="1" />
        <polygon points="55,-11 62,-8 55,-5" fill={lineColor} opacity="0.8" />

        {/* Corps du cœur */}
        <path
          d="M0 30 C0 30 -26 16 -26 2 C-26 -8 -18 -16 -9 -16 C-4 -16 0 -12 0 -10 C0 -12 4 -16 9 -16 C18 -16 26 -8 26 2 C26 16 0 30 0 30Z"
          fill={heartFill}
          stroke={heartStroke}
          strokeWidth="1.5"
          opacity="0.95"
        />

        {/* Fleurs sur le cœur */}
        {[-14, -6, 0, 6, 14].map((x, i) => (
          <g key={`f${i}`} transform={`translate(${x}, -2)`}>
            {[0, 60, 120, 180, 240, 300].map((a, j) => (
              <ellipse
                key={j}
                cx={5 * Math.cos((a * Math.PI) / 180)}
                cy={5 * Math.sin((a * Math.PI) / 180) - 3}
                rx="2.5"
                ry="1.8"
                fill={variant === 'color' ? 'none' : 'none'}
                stroke={heartStroke === '#FFFFFF' ? 'rgba(255,255,255,0.7)' : '#541A24'}
                strokeWidth="0.7"
                transform={`rotate(${a}, ${5 * Math.cos((a * Math.PI) / 180)}, ${5 * Math.sin((a * Math.PI) / 180) - 3})`}
              />
            ))}
            <circle cx={0} cy={-3} r="2" fill="none" stroke={heartStroke === '#FFFFFF' ? 'rgba(255,255,255,0.7)' : '#541A24'} strokeWidth="0.7" />
          </g>
        ))}

        {/* Flammes */}
        <g transform="translate(0, -18)">
          {/* Flamme centrale */}
          <path
            d="M0 0 C-4 -6 -2 -14 0 -18 C2 -14 4 -6 0 0Z"
            fill="none"
            stroke={heartStroke}
            strokeWidth="1.2"
            strokeLinecap="round"
          />
          {/* Flamme gauche */}
          <path
            d="M-6 -2 C-10 -8 -8 -14 -5 -17 C-3 -12 -4 -6 -6 -2Z"
            fill="none"
            stroke={heartStroke}
            strokeWidth="1"
            strokeLinecap="round"
          />
          {/* Flamme droite */}
          <path
            d="M6 -2 C10 -8 8 -14 5 -17 C3 -12 4 -6 6 -2Z"
            fill="none"
            stroke={heartStroke}
            strokeWidth="1"
            strokeLinecap="round"
          />
          {/* Volute de fumée */}
          <path
            d="M0 -18 C-3 -22 -1 -26 2 -24 C5 -22 3 -28 0 -30"
            fill="none"
            stroke={heartStroke}
            strokeWidth="0.8"
            strokeLinecap="round"
            opacity="0.7"
          />
          <path
            d="M4 -20 C6 -24 4 -28 7 -26"
            fill="none"
            stroke={heartStroke}
            strokeWidth="0.8"
            strokeLinecap="round"
            opacity="0.5"
          />
        </g>
      </g>

      {/* ── LIGNE DÉCORATIVE GAUCHE ── */}
      <g transform="translate(140, 96)">
        <line x1="-130" y1="0" x2="-35" y2="0" stroke={lineColor} strokeWidth="1" />
        <polygon points="-130,-3 -137,0 -130,3" fill={lineColor} />
      </g>

      {/* ── TEXTE "LA CANTINA" (style incliné, relief) ── */}
      {/* Shadow/relief effect */}
      <text
        x="140"
        y="118"
        textAnchor="middle"
        fontFamily="'Bungee', 'Arial Black', sans-serif"
        fontSize="52"
        fontWeight="900"
        fill={variant === 'color' ? 'rgba(84,26,36,0.3)' : 'rgba(0,0,0,0.2)'}
        transform="skewX(-4)"
        letterSpacing="-1"
      >
        LA CANTINA
      </text>
      <text
        x="140"
        y="115"
        textAnchor="middle"
        fontFamily="'Bungee', 'Arial Black', sans-serif"
        fontSize="52"
        fontWeight="900"
        fill={textColor}
        transform="skewX(-4)"
        letterSpacing="-1"
      >
        LA CANTINA
      </text>

      {/* ── LIGNE DÉCORATIVE DROITE ── */}
      <g transform="translate(140, 131)">
        <line x1="35" y1="0" x2="130" y2="0" stroke={lineColor} strokeWidth="1" />
        <polygon points="130,-3 137,0 130,3" fill={lineColor} />
      </g>

      {/* ── "BRASSERIE LATINA" ── */}
      <text
        x="140"
        y="147"
        textAnchor="middle"
        fontFamily="'Fjalla One', 'Arial Narrow', sans-serif"
        fontSize="15"
        fontWeight="400"
        fill={accentColor}
        letterSpacing="6"
      >
        BRASSERIE LATINA
      </text>

      {/* Tirets décoratifs autour de "BRASSERIE LATINA" */}
      <line x1="30" y1="137" x2="72" y2="137" stroke={lineColor} strokeWidth="0.8" opacity="0.6" />
      <line x1="208" y1="137" x2="250" y2="137" stroke={lineColor} strokeWidth="0.8" opacity="0.6" />
      <polygon points="30,-3 23,0 30,3" fill={lineColor} opacity="0.6" transform="translate(0,137)" />
      <polygon points="250,-3 257,0 250,3" fill={lineColor} opacity="0.6" transform="translate(0,137)" />
    </svg>
  )
}

/** Version pictogramme (cœur Milagro seul) */
export function LogoPicto({
  size = 60,
  variant = 'color',
  className = '',
}: {
  size?: number
  variant?: 'color' | 'white'
  className?: string
}) {
  const strokeColor = variant === 'color' ? '#541A24' : '#FFFFFF'

  return (
    <svg width={size} height={size} viewBox="0 0 80 80" className={className} role="img" aria-label="La Cantina">
      <g transform="translate(40, 40)">
        {Array.from({ length: 16 }).map((_, i) => {
          const angle = (i * 360) / 16
          const rad = (angle * Math.PI) / 180
          return (
            <line
              key={i}
              x1={30 * Math.cos(rad)}
              y1={30 * Math.sin(rad)}
              x2={36 * Math.cos(rad)}
              y2={36 * Math.sin(rad)}
              stroke={strokeColor}
              strokeWidth={i % 2 === 0 ? 1.5 : 1}
            />
          )
        })}
        <path
          d="M0 20 C0 20 -18 10 -18 0 C-18 -8 -12 -14 -6 -14 C-3 -14 0 -10 0 -8 C0 -10 3 -14 6 -14 C12 -14 18 -8 18 0 C18 10 0 20 0 20Z"
          fill={strokeColor}
        />
        <g transform="translate(0, -16)">
          <path d="M0 0 C-3 -5 -1 -10 0 -13 C1 -10 3 -5 0 0Z" fill="none" stroke={strokeColor} strokeWidth="1.2" strokeLinecap="round" />
          <path d="M-5 -1 C-8 -6 -6 -10 -3 -12 C-2 -8 -3 -4 -5 -1Z" fill="none" stroke={strokeColor} strokeWidth="1" strokeLinecap="round" />
          <path d="M5 -1 C8 -6 6 -10 3 -12 C2 -8 3 -4 5 -1Z" fill="none" stroke={strokeColor} strokeWidth="1" strokeLinecap="round" />
        </g>
      </g>
    </svg>
  )
}
