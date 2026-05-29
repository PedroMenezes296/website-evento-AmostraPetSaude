import { ReactNode } from 'react'

interface BadgeProps {
  children: ReactNode
  variant?: 'orange' | 'blue' | 'gray'
}

export default function Badge({ children, variant = 'orange' }: BadgeProps) {
  const variants = {
    orange: 'bg-brand-orange/20 text-brand-orange border border-brand-orange/30',
    blue:   'bg-brand-light/20 text-brand-light border border-brand-light/30',
    gray:   'bg-white/10 text-white/70 border border-white/20',
  }
  return (
    <span className={`text-[10px] font-semibold px-1.5 py-0.5 rounded-full ${variants[variant]}`}>
      {children}
    </span>
  )
}
