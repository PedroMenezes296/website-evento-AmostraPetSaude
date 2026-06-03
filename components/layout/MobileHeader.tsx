'use client'

import { Menu } from 'lucide-react'

interface MobileHeaderProps {
  onOpen: () => void
}

export default function MobileHeader({ onOpen }: MobileHeaderProps) {
  return (
    <header className="lg:hidden sticky top-0 z-30 bg-brand-dark text-white px-4 py-3 flex items-center gap-3 shadow-md">
      <button
        onClick={onOpen}
        aria-label="Abrir menu"
        className="text-white/80 hover:text-white"
      >
        <Menu size={24} />
      </button>
      <div>
        <p className="text-brand-orange font-bold text-sm leading-tight">II Mostra PET Saúde Digital</p>
        <p className="text-brand-light text-xs leading-tight">Pampa Conectado</p>
      </div>
    </header>
  )
}
