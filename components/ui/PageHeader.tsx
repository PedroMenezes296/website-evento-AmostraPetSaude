import { ReactNode } from 'react'

interface PageHeaderProps {
  icon: ReactNode
  title: string
  description?: string
}

export default function PageHeader({ icon, title, description }: PageHeaderProps) {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-10 h-10 rounded-lg bg-brand-dark flex items-center justify-center text-white flex-shrink-0">
          {icon}
        </div>
        <h1 className="text-2xl font-bold text-brand-dark">{title}</h1>
      </div>
      {description && (
        <p className="text-gray-500 text-sm mt-2 leading-relaxed">{description}</p>
      )}
      <div className="h-1 w-16 bg-brand-orange rounded mt-4" />
    </div>
  )
}
