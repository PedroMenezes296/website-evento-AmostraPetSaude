import { Upload, FileText, Clock, CheckCircle2 } from 'lucide-react'
import PageHeader from '@/components/ui/PageHeader'
import Link from 'next/link'
import { LINKS } from '@/config/links'

const normas = [
  'Resumo expandido ou artigo completo em formato .docx',
  'Formatação conforme o template oficial (veja a seção Template)',
  'Avaliação cega por pares — sem identificação dos autores no arquivo',
  'Máximo de 3 autores por trabalho',
  // TODO: inserir prazo real de submissão
  'Prazo de submissão: a definir',
]

const tipos = [
  { label: 'Resumo expandido', desc: 'Até 8 páginas', icon: <FileText size={18} /> },
  { label: 'Relato de experiência', desc: 'Até 10 páginas', icon: <FileText size={18} /> },
  { label: 'Artigo completo', desc: 'Até 15 páginas', icon: <FileText size={18} /> },
]

export default function SubmissaoPage() {
  return (
    <div>
      <PageHeader
        icon={<Upload size={20} />}
        title="Submissão de trabalhos"
        description="Submeta sua produção científica para avaliação e apresentação no evento."
      />

      {/* Card principal */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-10 flex flex-col items-center text-center mb-8">
        <div className="w-16 h-16 rounded-2xl bg-brand-orange/10 flex items-center justify-center text-brand-orange mb-5">
          <Upload size={30} />
        </div>
        <h2 className="text-xl font-bold text-brand-dark mb-2">Submeter trabalho</h2>
        <p className="text-gray-500 text-sm max-w-md mb-6 leading-relaxed">
          Utilize o formulário abaixo para enviar seu trabalho.
          Certifique-se de seguir o template e as normas antes de submeter.
        </p>
        <a
          href={LINKS.formsSubmissao}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-brand-orange text-white font-bold px-8 py-3 rounded-xl text-base hover:bg-brand-orange/90 transition-colors"
        >
          Submeter trabalho →
        </a>
      </div>

      {/* Tipos aceitos */}
      <h2 className="font-bold text-brand-dark text-base mb-3">Modalidades aceitas</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        {tipos.map((t, i) => (
          <div key={i} className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 flex items-start gap-3">
            <div className="text-brand-light mt-0.5">{t.icon}</div>
            <div>
              <p className="font-semibold text-brand-dark text-sm">{t.label}</p>
              <p className="text-gray-400 text-xs">{t.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Normas resumidas */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-6">
        <h2 className="font-bold text-brand-dark text-base mb-4 flex items-center gap-2">
          <Clock size={18} className="text-brand-orange" />
          Normas e prazos
        </h2>
        <ul className="space-y-2">
          {normas.map((n, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
              <CheckCircle2 size={16} className="text-brand-orange flex-shrink-0 mt-0.5" />
              {n}
            </li>
          ))}
        </ul>
      </div>

      {/* Link para template */}
      <div className="bg-brand-dark/5 rounded-xl p-5 border border-brand-dark/10">
        <p className="text-sm text-brand-dark font-medium">
          Precisa do template?{' '}
          <Link href="/template" className="text-brand-orange font-semibold hover:underline">
            Acesse a página de template do trabalho →
          </Link>
        </p>
      </div>
    </div>
  )
}
