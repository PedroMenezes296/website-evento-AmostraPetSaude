'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  Home,
  FileText,
  Calendar,
  FileCheck,
  Download,
  UserPlus,
  Upload,
  Info,
  Mail,
  X,
  ChevronDown,
  ChevronRight,
} from 'lucide-react'
import Badge from '@/components/ui/Badge'

interface NavItem {
  label: string
  href: string
  icon: React.ReactNode
  badge?: string
}

interface NavSection {
  title: string
  items: NavItem[]
  collapsible?: boolean
}

const navSections: NavSection[] = [
  {
    title: 'INÍCIO',
    items: [
      { label: 'Página inicial', href: '/', icon: <Home size={18} /> },
    ],
  },
  {
    title: 'EVENTO',
    collapsible: true,
    items: [
      { label: 'Edital', href: '/edital', icon: <FileText size={18} /> },
      { label: 'Programação', href: '/programacao', icon: <Calendar size={18} /> },
      { label: 'Trabalhos aprovados', href: '/trabalhos-aprovados', icon: <FileCheck size={18} /> },
      { label: 'Template do trabalho', href: '/template', icon: <Download size={18} /> },
    ],
  },
  {
    title: 'PARTICIPAR',
    collapsible: true,
    items: [
      { label: 'Inscrição de ouvintes', href: '/inscricao', icon: <UserPlus size={18} />, badge: 'Forms' },
      { label: 'Submissão de trabalhos', href: '/submissao', icon: <Upload size={18} />, badge: 'Forms' },
    ],
  },
  {
    title: 'INSTITUCIONAL',
    items: [
      { label: 'Sobre o evento', href: '/sobre', icon: <Info size={18} /> },
      { label: 'Contato', href: '/contato', icon: <Mail size={18} /> },
    ],
  },
]

interface SidebarProps {
  currentPath: string
  mobileOpen?: boolean
  onClose?: () => void
}

export default function Sidebar({ currentPath, mobileOpen, onClose }: SidebarProps) {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    EVENTO: true,
    PARTICIPAR: true,
  })

  const toggleSection = (title: string) =>
    setOpenSections(prev => ({ ...prev, [title]: !prev[title] }))

  return (
    <>
      {/* Overlay mobile */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`
          fixed top-0 left-0 h-full w-80 bg-brand-dark z-50 flex flex-col overflow-y-auto scrollbar-hide
          transition-transform duration-300
          ${mobileOpen ? 'translate-x-0' : '-translate-x-full'}
          lg:translate-x-0 lg:static lg:z-auto
        `}
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {/* Botão fechar mobile */}
        <button
          onClick={onClose}
          className="lg:hidden absolute top-4 right-4 text-white/60 hover:text-white"
          aria-label="Fechar menu"
        >
          <X size={20} />
        </button>

        {/* Header da sidebar */}
        <div className="px-1 pt-1 pb-3 border-b border-white/10">
          <div className="flex flex-col items-center text-center">
            <Image
              src="/logo.png"
              alt="Logo II Mostra PET-Saúde Digital"
              width={400}
              height={400}
              className="rounded-md w-full"
            />
          </div>
        </div>

        {/* Navegação */}
        <nav className="flex-1 py-4 px-2">
          {navSections.map((section) => {
            const isOpen = !section.collapsible || openSections[section.title]
            return (
              <div key={section.title} className="mb-5">
                {section.collapsible ? (
                  <button
                    onClick={() => toggleSection(section.title)}
                    className="flex items-center justify-between w-full text-white/40 text-xs font-semibold tracking-widest px-2 mb-2 hover:text-white/60 transition-colors"
                  >
                    {section.title}
                    {isOpen ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
                  </button>
                ) : (
                  <p className="text-white/40 text-xs font-semibold tracking-widest px-2 mb-2">
                    {section.title}
                  </p>
                )}
                {isOpen && section.items.map((item) => {
                  const isActive = currentPath === item.href
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`
                        flex items-center gap-3 px-3 py-2.5 rounded-md text-[15px] font-medium mb-1
                        transition-colors duration-150 group
                        ${isActive
                          ? 'border-l-4 border-brand-orange bg-white/10 text-white pl-2'
                          : 'border-l-4 border-transparent text-white/70 hover:text-white hover:bg-white/5 pl-2'
                        }
                      `}
                    >
                      <span className={isActive ? 'text-brand-orange' : 'text-white/50 group-hover:text-white/80'}>
                        {item.icon}
                      </span>
                      <span className="flex-1">{item.label}</span>
                      {item.badge && <Badge>{item.badge}</Badge>}
                    </Link>
                  )
                })}
              </div>
            )
          })}
        </nav>

        {/* Rodapé */}
        <div className="px-4 py-4 border-t border-white/10">
          <p className="text-white/30 text-xs text-center">Unipampa · Bagé/RS · 2026</p>
        </div>
      </aside>
    </>
  )
}
