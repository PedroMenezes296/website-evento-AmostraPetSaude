import { Clock } from 'lucide-react'
import { ReactNode } from 'react'

interface PlaceholderBannerProps {
  message?: string
  icon?: ReactNode
}

export default function PlaceholderBanner({
  message = 'Este conteúdo será divulgado em breve.',
  icon,
}: PlaceholderBannerProps) {
  return (
    <div className="bg-brand-light/10 border border-brand-light/30 rounded-xl p-8 text-center">
      <div className="flex justify-center mb-3 text-brand-light">
        {icon ?? <Clock size={36} />}
      </div>
      <p className="text-brand-dark font-semibold text-lg">Em breve</p>
      <p className="text-gray-500 text-sm mt-1">{message}</p>
    </div>
  )
}
