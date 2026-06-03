import { Info } from 'lucide-react'
import PageHeader from '@/components/ui/PageHeader'

export default function SobrePage() {
  return (
    <div>
      <PageHeader
        icon={<Info size={30} />}
        title="Sobre o evento"
        description="Conheça a história, os objetivos e quem organiza a II Mostra PET Saúde Digital Pampa Conectado."
      />

      {/* Descrição do evento */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-6">
        <h2 className="font-bold text-brand-dark text-lg mb-3">O evento</h2>
        <p className="text-gray-600 text-sm leading-relaxed">
          O evento objetiva a socialização das experiências, produtos e soluções desenvolvidas no
          âmbito do PET Saúde/I&amp;SD Pampa Conectado, contribuindo para o fortalecimento da cultura
          de saúde digital, da inovação tecnológica e da qualificação dos serviços do Sistema Único
          de Saúde (SUS).
        </p>
        <p className="text-gray-600 text-sm leading-relaxed mt-3 italic">
          Conhecimento que transforma dados em cuidado.
        </p>
      </div>

    </div>
  )
}
