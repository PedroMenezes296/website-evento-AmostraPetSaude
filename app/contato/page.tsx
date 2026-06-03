import { Mail, Instagram } from 'lucide-react'
import PageHeader from '@/components/ui/PageHeader'

export default function ContatoPage() {
  return (
    <div>
      <PageHeader
        icon={<Mail size={20} />}
        title="Contato"
        description="Entre em contato com a comissão organizadora da II Mostra PET Saúde Digital Pampa Conectado."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* E-mail: não clicável */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-brand-orange/10 flex items-center justify-center text-brand-orange flex-shrink-0">
            <Mail size={22} />
          </div>
          <div>
            <p className="text-xs text-gray-400 font-medium uppercase tracking-wide">E-mail</p>
            <p className="font-semibold text-brand-dark text-sm mt-0.5">mostrapampaconectado@gmail.com</p>
          </div>
        </div>

        {/* Instagram: clicável */}
        <a
          href="https://www.instagram.com/petsaude.pampaconectado?igsh=MW14cGZoenpvcXd1OQ%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 flex items-center gap-4 hover:border-brand-orange/40 hover:shadow-md transition-all duration-150 group"
        >
          <div className="w-12 h-12 rounded-xl bg-brand-orange/10 flex items-center justify-center text-brand-orange flex-shrink-0 group-hover:bg-brand-orange group-hover:text-white transition-colors duration-150">
            <Instagram size={22} />
          </div>
          <div>
            <p className="text-xs text-gray-400 font-medium uppercase tracking-wide">Instagram</p>
            <p className="font-semibold text-brand-dark text-sm mt-0.5">@petsaude.pampaconectado</p>
          </div>
        </a>
      </div>
    </div>
  )
}
