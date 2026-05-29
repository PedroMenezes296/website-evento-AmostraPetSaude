import { ReactNode } from 'react'

interface InfoCardProps {
  icon: ReactNode
  label: string
  value: string
}

export default function InfoCard({ icon, label, value }: InfoCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 lg:p-7 flex items-start gap-4">
      <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-lg bg-brand-light/10 flex items-center justify-center text-brand-light flex-shrink-0">
        {icon}
      </div>
      <div>
        <p className="text-xs lg:text-sm text-gray-400 font-medium uppercase tracking-wider">{label}</p>
        <p className="text-brand-dark font-semibold mt-0.5 text-base lg:text-lg">{value}</p>
      </div>
    </div>
  )
}
