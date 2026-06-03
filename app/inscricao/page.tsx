import { UserPlus, Clock, Users, Award } from 'lucide-react'
import PageHeader from '@/components/ui/PageHeader'
import { LINKS } from '@/config/links'

const info = [
  {
    icon: <Clock size={18} />,
    label: 'Prazo',
    value: '28 de agosto',
  },
  {
    icon: <Users size={18} />,
    label: 'Público-alvo',
    value: 'Estudantes, profissionais e pesquisadores da área da saúde e afins',
  },
  {
    icon: <Award size={18} />,
    label: 'Certificação',
    value: 'Certificado digital de participação ao final do evento',
  },
]

export default function InscricaoPage() {
  return (
    <div>
      <PageHeader
        icon={<UserPlus size={20} />}
        title="Inscrição de ouvintes"
        description="Participe da II Mostra PET Saúde Digital Pampa Conectado como ouvinte e garanta seu certificado."
      />

      {/* Card principal de inscrição */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-10 flex flex-col items-center text-center mb-8">
        <div className="w-16 h-16 rounded-2xl bg-brand-orange/10 flex items-center justify-center text-brand-orange mb-5">
          <UserPlus size={30} />
        </div>
        <h2 className="text-xl font-bold text-brand-dark mb-2">Quero participar como ouvinte</h2>
        <p className="text-gray-500 text-sm max-w-md mb-6 leading-relaxed">
          Preencha o formulário de inscrição para garantir sua participação.
          A inscrição é gratuita e aberta ao público em geral.
        </p>
        <a
          href={LINKS.formsInscricao}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-brand-orange text-white font-bold px-8 py-3 rounded-xl text-base hover:bg-brand-orange/90 transition-colors"
        >
          Realizar inscrição →
        </a>
      </div>

      {/* Informações complementares */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {info.map((item, i) => (
          <div key={i} className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
            <div className="flex items-center gap-2 mb-2 text-brand-light">
              {item.icon}
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">{item.label}</p>
            </div>
            <p className="text-brand-dark text-sm font-medium leading-relaxed">{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
