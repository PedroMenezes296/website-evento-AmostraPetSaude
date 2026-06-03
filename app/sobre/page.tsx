import { Info } from 'lucide-react'
import PageHeader from '@/components/ui/PageHeader'

export default function SobrePage() {
  return (
    <div>
      <PageHeader
        icon={<Info size={20} />}
        title="Sobre o evento"
        description="Conheça a história, os objetivos e quem organiza a II Mostra PET Saúde Digital."
      />

      {/* Descrição do evento */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-6">
        <h2 className="font-bold text-brand-dark text-lg mb-3">O evento</h2>
        <p className="text-gray-600 text-sm leading-relaxed mb-3">
          A II Mostra PET Saúde Digital — Pampa Conectado é um evento científico anual organizado
          pelo grupo PET Saúde Digital da Universidade Federal do Pampa (Unipampa), campus Bagé/RS.
          O evento tem como propósito promover o compartilhamento de conhecimento científico e
          tecnológico produzido na interface entre saúde e tecnologia digital.
        </p>
        <p className="text-gray-600 text-sm leading-relaxed">
          Em sua segunda edição, o evento amplia seu alcance com o tema <strong>Pampa Conectado</strong>,
          reforçando o compromisso de integrar estudantes, profissionais e pesquisadores da região
          sul do Brasil no debate sobre saúde digital e inovação tecnológica aplicada ao cuidado em saúde.
        </p>
      </div>

      {/* Sobre o grupo PET */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-6">
        <h2 className="font-bold text-brand-dark text-lg mb-3">Grupo PET-Saúde Digital</h2>
        <p className="text-gray-600 text-sm leading-relaxed">
          O PET-Saúde Digital (GRUPESM) é um grupo de educação tutorial vinculado à Unipampa,
          campus Bagé. Reúne estudantes de graduação sob tutoria docente para desenvolver atividades
          de ensino, pesquisa e extensão com foco na saúde digital, dados em saúde e sistemas de
          informação aplicados ao SUS e às redes de atenção à saúde.
          {/* TODO: expandir descrição do grupo com informações reais */}
        </p>
      </div>

    </div>
  )
}
