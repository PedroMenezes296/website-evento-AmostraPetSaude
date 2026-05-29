import { FileText, Download } from 'lucide-react'
import PageHeader from '@/components/ui/PageHeader'
import Accordion from '@/components/ui/Accordion'
import PlaceholderBanner from '@/components/ui/PlaceholderBanner'

const editalSections = [
  {
    title: '1. Apresentação',
    content: (
      <p>
        A II Mostra PET-Saúde Digital — Pampa Conectado é promovida pelo grupo PET-Saúde Digital
        da Unipampa, campus Bagé, com o objetivo de socializar produções científicas, tecnológicas e
        de extensão desenvolvidas na interface entre saúde e tecnologia.
        {/* TODO: inserir texto completo da seção */}
      </p>
    ),
  },
  {
    title: '2. Objetivos',
    content: (
      <p>
        Fomentar a produção e divulgação científica; promover o intercâmbio entre estudantes,
        docentes e profissionais; fortalecer a interdisciplinaridade entre saúde e computação.
        {/* TODO: inserir texto completo da seção */}
      </p>
    ),
  },
  {
    title: '3. Modalidades de submissão',
    content: (
      <p>
        Serão aceitos trabalhos nas modalidades: resumo expandido, relato de experiência e artigo completo.
        Confira o template disponível na seção &quot;Template do trabalho&quot;.
        {/* TODO: inserir texto completo da seção */}
      </p>
    ),
  },
  {
    title: '4. Cronograma',
    content: (
      <ul className="list-disc pl-5 space-y-1">
        {/* TODO: inserir datas reais */}
        <li>Submissão de trabalhos: a definir</li>
        <li>Inscrições de ouvintes: a definir</li>
        <li>Divulgação dos aceites: a definir</li>
        <li>Realização do evento: a definir</li>
      </ul>
    ),
  },
  {
    title: '5. Avaliação e critérios',
    content: (
      <p>
        Os trabalhos serão avaliados por comissão científica quanto a originalidade, relevância,
        metodologia e clareza da escrita. Mais detalhes serão publicados junto ao edital completo.
        {/* TODO: inserir texto completo da seção */}
      </p>
    ),
  },
]

export default function EditalPage() {
  return (
    <div>
      <PageHeader
        icon={<FileText size={20} />}
        title="Edital"
        description="Normas, critérios e cronograma da II Mostra PET-Saúde Digital."
      />

      {/* TODO: substituir pelo link real do PDF quando disponível */}
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 flex items-center justify-between mb-6">
        <div>
          <p className="font-semibold text-brand-dark text-sm">Edital completo em PDF</p>
          <p className="text-gray-400 text-xs mt-0.5">Faça o download do documento oficial</p>
        </div>
        <a
          href="#"
          /* TODO: href="URL_DO_PDF_DO_EDITAL" */
          className="flex items-center gap-2 bg-brand-dark text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-brand-dark/90 transition-colors"
        >
          <Download size={16} />
          Download PDF
        </a>
      </div>

      <PlaceholderBanner
        icon={<FileText size={36} />}
        message="O edital será publicado em breve. As seções abaixo contêm uma prévia do conteúdo."
      />

      <div className="mt-6">
        <h2 className="font-bold text-brand-dark mb-4">Seções do edital</h2>
        <Accordion items={editalSections} />
      </div>
    </div>
  )
}
