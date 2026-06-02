'use client'

import { Mail, Instagram, Send } from 'lucide-react'
import PageHeader from '@/components/ui/PageHeader'

const redes = [
  {
    icon: <Mail size={22} />,
    label: 'E-mail',
    value: 'mostrapampaconectado@gmail.com',
    href: 'mailto:mostrapampaconectado@gmail.com',
  },
  {
    icon: <Instagram size={22} />,
    label: 'Instagram',
    value: '@petsaude.pampaconectado',
    href: 'https://www.instagram.com/petsaude.pampaconectado?igsh=MW14cGZoenpvcXd1OQ%3D%3D',
  },
]

export default function ContatoPage() {
  return (
    <div>
      <PageHeader
        icon={<Mail size={20} />}
        title="Contato"
        description="Entre em contato com a comissão organizadora da II Mostra PET-Saúde Digital."
      />

      {/* Cards de contato */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
        {redes.map((r, i) => (
          <a
            key={i}
            href={r.href}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 flex items-center gap-4 hover:border-brand-orange/40 hover:shadow-md transition-all duration-150 group"
          >
            <div className="w-12 h-12 rounded-xl bg-brand-orange/10 flex items-center justify-center text-brand-orange flex-shrink-0 group-hover:bg-brand-orange group-hover:text-white transition-colors duration-150">
              {r.icon}
            </div>
            <div>
              <p className="text-xs text-gray-400 font-medium uppercase tracking-wide">{r.label}</p>
              <p className="font-semibold text-brand-dark text-sm mt-0.5">{r.value}</p>
            </div>
          </a>
        ))}
      </div>

      {/* Formulário de contato (apenas visual) */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h2 className="font-bold text-brand-dark text-lg mb-5">Enviar mensagem</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
              Nome
            </label>
            <input
              type="text"
              placeholder="Seu nome completo"
              className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-700 focus:outline-none focus:border-brand-light focus:ring-2 focus:ring-brand-light/20 transition-colors"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
              E-mail
            </label>
            <input
              type="email"
              placeholder="seu@email.com"
              className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-700 focus:outline-none focus:border-brand-light focus:ring-2 focus:ring-brand-light/20 transition-colors"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
              Mensagem
            </label>
            <textarea
              rows={4}
              placeholder="Escreva sua mensagem..."
              className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-700 focus:outline-none focus:border-brand-light focus:ring-2 focus:ring-brand-light/20 transition-colors resize-none"
            />
          </div>
          <button
            type="button"
            className="flex items-center gap-2 bg-brand-orange text-white font-semibold px-6 py-2.5 rounded-lg hover:bg-brand-orange/90 transition-colors text-sm"
          >
            <Send size={16} />
            Enviar mensagem
          </button>
        </div>
      </div>
    </div>
  )
}
