import { ReactNode } from 'react'

interface ActionCardProps {
  icon: ReactNode
  title: string
  description: string
  buttonLabel: string
  href: string
  large?: boolean
}

export default function ActionCard({ icon, title, description, buttonLabel, href, large }: ActionCardProps) {
  return (
    <div className={`bg-white rounded-xl shadow-sm border border-gray-100 p-6 lg:p-8 flex flex-col ${large ? 'items-center text-center' : ''}`}>
      <div className={`w-12 h-12 lg:w-14 lg:h-14 rounded-xl bg-brand-orange/10 flex items-center justify-center text-brand-orange flex-shrink-0 ${large ? 'mb-4' : 'mb-3'}`}>
        {icon}
      </div>
      <h3 className={`font-semibold text-brand-dark ${large ? 'text-xl lg:text-2xl mb-2' : 'text-base lg:text-xl mb-1'}`}>{title}</h3>
      <p className="text-gray-500 text-sm lg:text-base flex-1 leading-relaxed mb-4 whitespace-pre-line">{description}</p>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center gap-2 bg-brand-orange text-white font-semibold rounded-lg hover:bg-brand-orange/90 transition-colors duration-150 ${large ? 'px-8 py-3 text-base lg:text-lg' : 'px-4 py-2 lg:px-6 lg:py-3 text-sm lg:text-base'}`}
      >
        {buttonLabel}
      </a>
    </div>
  )
}
