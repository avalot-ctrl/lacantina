import Link from 'next/link'

interface ButtonProps {
  href?: string
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'outline' | 'white'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  className?: string
  external?: boolean
}

const variantClasses = {
  primary: 'bg-flor hover:bg-flor-dark text-white shadow-orange-glow hover:shadow-none',
  secondary: 'bg-cuir hover:bg-cuir-light text-white shadow-festive',
  outline: 'border-2 border-flor text-flor hover:bg-flor hover:text-white',
  white: 'bg-white hover:bg-tortilla text-cuir',
}

const sizeClasses = {
  sm: 'px-5 py-2 text-xs',
  md: 'px-7 py-3 text-sm',
  lg: 'px-8 py-4 text-base',
}

export default function Button({
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  external = false,
}: ButtonProps) {
  const classes = `
    inline-flex items-center justify-center gap-2
    font-fjalla tracking-widest uppercase
    rounded-full transition-all duration-200
    hover:scale-105 active:scale-100
    ${variantClasses[variant]}
    ${sizeClasses[size]}
    ${className}
  `

  if (href) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
          {children}
        </a>
      )
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  )
}
