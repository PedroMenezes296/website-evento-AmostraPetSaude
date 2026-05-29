import { Download, CheckCircle2 } from 'lucide-react'
import PageHeader from '@/components/ui/PageHeader'
import Link from 'next/link'

const instrucoes = [
  'Formatação segundo as normas ABNT vigentes',
  'Limite de 8 páginas para resumo expandido (incluindo referências)',
  'Limite de 15 páginas para artigo completo',
  'Fonte Times New Roman 12pt, espaçamento 1,5',
  'Resumo em português e palavras-chave obrigatórios',
  'Submissão exclusivamente em formato .docx via formulário online',
  'Não é permitida a identificação dos autores no corpo do trabalho (avaliação cega)',
]

export default function TemplatePage() {
  return (
    <div>
      <PageHeader
        icon={<Download size={20} />}
        title="Template do trabalho"
        description="Baixe o modelo oficial e siga as normas para submissão do seu trabalho."
      />

      {/* Card de download */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
        <div>
          <p className="font-semibold text-brand-dark">Template oficial (.docx)</p>
          <p className="text-gray-400 text-sm mt-0.5">
            Modelo formatado conforme as normas do evento
          </p>
          {/* TODO: substituir href pelo link real do template .docx */}
        </div>
        <a
          href="#"
          /* TODO: href="URL_DO_TEMPLATE_DOCX" */
          className="flex items-center gap-2 bg-brand-orange text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-brand-orange/90 transition-colors text-sm whitespace-nowrap"
        >
          <Download size={16} />
          Baixar template
        </a>
      </div>

      {/* Instruções */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h2 className="font-bold text-brand-dark text-lg mb-4">Instruções de formatação</h2>
        <ul className="space-y-3">
          {instrucoes.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
              <CheckCircle2 size={18} className="text-brand-orange flex-shrink-0 mt-0.5" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Link para submissão */}
      <div className="mt-6 bg-brand-dark/5 rounded-xl p-5 border border-brand-dark/10">
        <p className="text-sm text-brand-dark font-medium">
          Pronto para submeter?{' '}
          <Link href="/submissao" className="text-brand-orange font-semibold hover:underline">
            Acesse a página de submissão de trabalhos →
          </Link>
        </p>
      </div>
    </div>
  )
}
