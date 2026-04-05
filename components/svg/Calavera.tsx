export default function Calavera({
  size = 80,
  className = '',
}: {
  size?: number
  className?: string
}) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 120" className={className} aria-hidden="true">
      {/* Head shape */}
      <path
        d="M50 10 C28 10 18 28 18 48 C18 64 24 72 30 76 L30 90 Q30 95 35 95 L65 95 Q70 95 70 90 L70 76 C76 72 82 64 82 48 C82 28 72 10 50 10Z"
        fill="white"
        stroke="#541A24"
        strokeWidth="2"
      />

      {/* Teeth */}
      {[35, 42, 49, 56, 63].map((x, i) => (
        <rect key={i} x={x} y="86" width="6" height="8" rx="1" fill="white" stroke="#541A24" strokeWidth="1.5" />
      ))}

      {/* Eye sockets - left */}
      <ellipse cx="36" cy="52" rx="13" ry="12" fill="#541A24" />
      {/* Left eye flower */}
      {[0, 60, 120, 180, 240, 300].map((angle, i) => (
        <ellipse
          key={i}
          cx={36 + 10 * Math.cos((angle * Math.PI) / 180)}
          cy={52 + 10 * Math.sin((angle * Math.PI) / 180)}
          rx="5"
          ry="4"
          fill={['#F07E2C', '#844999', '#19A95B', '#F23376', '#FFAB03', '#4280C7'][i]}
          opacity="0.9"
        />
      ))}
      <circle cx="36" cy="52" r="10" fill="#541A24" />
      <circle cx="36" cy="52" r="5" fill="#FFAB03" />
      <circle cx="36" cy="52" r="2" fill="#541A24" />

      {/* Eye sockets - right */}
      <ellipse cx="64" cy="52" rx="13" ry="12" fill="#541A24" />
      {[0, 60, 120, 180, 240, 300].map((angle, i) => (
        <ellipse
          key={i}
          cx={64 + 10 * Math.cos((angle * Math.PI) / 180)}
          cy={52 + 10 * Math.sin((angle * Math.PI) / 180)}
          rx="5"
          ry="4"
          fill={['#F07E2C', '#844999', '#19A95B', '#F23376', '#FFAB03', '#4280C7'][i]}
          opacity="0.9"
        />
      ))}
      <circle cx="64" cy="52" r="10" fill="#541A24" />
      <circle cx="64" cy="52" r="5" fill="#F07E2C" />
      <circle cx="64" cy="52" r="2" fill="#541A24" />

      {/* Nose */}
      <path
        d="M48 65 L50 70 L52 65 Q50 62 48 65Z"
        fill="#541A24"
        opacity="0.8"
      />

      {/* Forehead decorations */}
      {/* Center flower */}
      {[0, 72, 144, 216, 288].map((angle, i) => (
        <ellipse
          key={i}
          cx={50 + 8 * Math.cos((angle * Math.PI) / 180)}
          cy={28 + 8 * Math.sin((angle * Math.PI) / 180)}
          rx="5"
          ry="4"
          fill={['#F23376', '#FFAB03', '#19A95B', '#4280C7', '#844999'][i]}
        />
      ))}
      <circle cx="50" cy="28" r="4" fill="#F07E2C" />

      {/* Side flowers */}
      <circle cx="25" cy="35" r="5" fill="#F23376" />
      <circle cx="25" cy="35" r="2.5" fill="#FFAB03" />
      <circle cx="75" cy="35" r="5" fill="#844999" />
      <circle cx="75" cy="35" r="2.5" fill="#FCEA5B" />

      {/* Scroll decorations on cheeks */}
      <path
        d="M22 56 Q26 52 24 58 Q22 62 26 60"
        fill="none"
        stroke="#F07E2C"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M78 56 Q74 52 76 58 Q78 62 74 60"
        fill="none"
        stroke="#F07E2C"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}
