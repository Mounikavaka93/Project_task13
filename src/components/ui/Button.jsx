import { Link } from 'react-router-dom'

const variants = {
  primary:
    'bg-accent text-white hover:bg-accent-hover shadow-sm shadow-accent/20',
  secondary:
    'bg-brand text-white hover:bg-brand-soft shadow-sm shadow-brand/20',
  outline:
    'border border-line bg-white text-ink hover:border-accent hover:text-accent',
  ghost: 'bg-transparent text-ink hover:bg-mist',
  soft: 'bg-mist text-brand hover:bg-line/60',
  light: 'bg-white text-brand hover:bg-mist shadow-sm',
  sand: 'bg-sand text-brand hover:bg-white shadow-sm',
}

const sizes = {
  sm: 'px-3.5 py-2 text-sm',
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-6 py-3.5 text-base',
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  to,
  type = 'button',
  disabled = false,
  ...props
}) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 disabled:cursor-not-allowed disabled:opacity-60 ${variants[variant]} ${sizes[size]} ${className}`

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} className={classes} disabled={disabled} {...props}>
      {children}
    </button>
  )
}
