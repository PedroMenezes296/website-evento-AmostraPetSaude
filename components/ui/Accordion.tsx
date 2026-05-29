'use client'

import { useState, ReactNode } from 'react'
import { ChevronDown } from 'lucide-react'

interface AccordionItemProps {
  title: string
  children: ReactNode
}

export function AccordionItem({ title, children }: AccordionItemProps) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border border-gray-200 rounded-xl mb-3 overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 text-left bg-white hover:bg-brand-bg transition-colors duration-150"
      >
        <span className="font-semibold text-brand-dark text-sm">{title}</span>
        <ChevronDown
          size={18}
          className={`text-brand-orange flex-shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open && (
        <div className="px-5 py-4 bg-white border-t border-gray-100 text-sm text-gray-600 leading-relaxed">
          {children}
        </div>
      )}
    </div>
  )
}

interface AccordionProps {
  items: { title: string; content: ReactNode }[]
}

export default function Accordion({ items }: AccordionProps) {
  return (
    <div>
      {items.map((item, i) => (
        <AccordionItem key={i} title={item.title}>
          {item.content}
        </AccordionItem>
      ))}
    </div>
  )
}
