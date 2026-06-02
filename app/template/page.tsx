import { ExternalLink, CheckCircle2 } from 'lucide-react'
import PageHeader from '@/components/ui/PageHeader'
import Link from 'next/link'

const instrucoes = [
  'Resumo estruturado com: Introdução, Objetivo, Método, Resultados e Considerações finais',
  'Mínimo de 1.500 e máximo de 3.000 caracteres (com espaços)',
  'Título em letras maiúsculas, fonte Arial 12pt, máximo de 15 palavras',
  '3 a 5 palavras-chave separadas por ponto e vírgula',
  '3 a 5 referências no formato ABNT',
  'Submissão exclusivamente em formato PDF via formulário online',
  'Não é permitida a identificação dos autores no corpo do trabalho (avaliação cega)',
  'Estudos com seres humanos devem apresentar aprovação de Comitê de Ética em Pesquisa (CAAE)',
]

export default function TemplatePage() {
  return (
    <div>
      <PageHeader
        icon={<ExternalLink size={20} />}
        title="Template do trabalho"
        description="Acesse o modelo oficial e siga as normas para submissão do seu trabalho."
      />

      {/* Card de acesso */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
        <div>
          <p className="font-semibold text-brand-dark">Template oficial (Google Docs)</p>
          <p className="text-gray-400 text-sm mt-0.5">
            Modelo formatado conforme as normas do evento — visualize e faça sua cópia
          </p>
        </div>
        <a
          href="https://docs.google.com/document/d/13CFS_i9m6UZnZNcBqOccb6oqtWsD4_y_BaLagZsTTWA/edit?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-brand-orange text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-brand-orange/90 transition-colors text-sm whitespace-nowrap"
        >
          <ExternalLink size={16} />
          Acessar template
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
