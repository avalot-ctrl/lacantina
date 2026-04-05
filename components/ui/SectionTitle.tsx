import AnimatedSection from './AnimatedSection'

interface SectionTitleProps {
  eyebrow?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center' | 'right'
  light?: boolean
  className?: string
}

export default function SectionTitle({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  light = false,
  className = '',
}: SectionTitleProps) {
  const alignClass = {
    left: 'text-left items-start',
    center: 'text-center items-center',
    right: 'text-right items-end',
  }[align]

  return (
    <AnimatedSection className={`flex flex-col gap-2 ${alignClass} ${className}`}>
      {eyebrow && (
        <span
          className={`font-fjalla tracking-[0.3em] uppercase text-sm ${
            light ? 'text-flor' : 'text-flor'
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`font-bernier leading-tight text-section ${
          light ? 'text-white' : 'text-cuir'
        }`}
        style={{ textShadow: light ? '2px 2px 0 rgba(0,0,0,0.2)' : 'none' }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`font-futura text-base md:text-lg max-w-2xl leading-relaxed ${
            light ? 'text-white/80' : 'text-cuir/70'
          }`}
        >
          {subtitle}
        </p>
      )}
      {/* Decorative underline */}
      <div
        className={`flex items-center gap-2 mt-1 ${
          align === 'center' ? 'justify-center' : align === 'right' ? 'justify-end' : ''
        }`}
      >
        <div className="h-0.5 w-8 bg-flor rounded-full" />
        <div className="w-2 h-2 rounded-full bg-flor" />
        <div className="h-0.5 w-16 bg-flor rounded-full" />
        <div className="w-2 h-2 rounded-full bg-flor" />
        <div className="h-0.5 w-8 bg-flor rounded-full" />
      </div>
    </AnimatedSection>
  )
}
