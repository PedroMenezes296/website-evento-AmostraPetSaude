import { FileText, ExternalLink } from 'lucide-react'
import PageHeader from '@/components/ui/PageHeader'
import Accordion from '@/components/ui/Accordion'

const editalSections = [
  {
    title: '1. Apresentação',
    content: (
      <p>
        A II Mostra PET Saúde Digital — Pampa Conectado é promovida pelo grupo PET Saúde Digital
        da Universidade Federal do Pampa (Unipampa), campus Bagé, e será realizada nos dias{' '}
        <strong>28 e 29 de agosto de 2026</strong>. O evento tem como propósito promover a
        socialização das experiências, produtos e soluções desenvolvidas no âmbito do PET Saúde,
        com foco na saúde digital e na inovação tecnológica no contexto do Sistema Único de Saúde (SUS).
      </p>
    ),
  },
  {
    title: '2. Objetivos',
    content: (
      <ul className="list-disc pl-5 space-y-1">
        <li>Promover a socialização de experiências, produtos e soluções em saúde digital;</li>
        <li>Fomentar o intercâmbio entre estudantes, docentes, profissionais de saúde, gestores e a comunidade;</li>
        <li>Fortalecer a interdisciplinaridade entre saúde e tecnologia;</li>
        <li>Estimular a produção e divulgação científica na área de saúde digital.</li>
      </ul>
    ),
  },
  {
    title: '3. Modalidades de submissão',
    content: (
      <div className="space-y-3">
        <p>
          Serão aceitos trabalhos na modalidade de <strong>resumo estruturado</strong>, obedecendo aos
          seguintes critérios:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Mínimo de 1.500 e máximo de 3.000 caracteres (com espaços), excluindo título, palavras-chave e referências;</li>
          <li>Título em letras maiúsculas, fonte Arial 12pt, máximo de 15 palavras;</li>
          <li>Seções obrigatórias: Introdução, Objetivo, Método, Resultados e Considerações finais;</li>
          <li>3 a 5 palavras-chave separadas por ponto e vírgula;</li>
          <li>3 a 5 referências no formato ABNT;</li>
          <li>Submissão exclusivamente em PDF, sem identificação dos autores (avaliação cega);</li>
          <li>Máximo de 2 trabalhos por autor como primeiro autor;</li>
          <li>Estudos com seres humanos devem apresentar número CAAE do Comitê de Ética.</li>
        </ul>
        <div>
          <p className="font-semibold text-brand-dark mt-3 mb-1">Eixos temáticos</p>
          <ol className="list-decimal pl-5 space-y-1">
            <li>Cultura de saúde digital, formação e educação permanente em saúde</li>
            <li>Soluções tecnológicas e serviços de saúde digital no âmbito do SUS</li>
            <li>Interoperabilidade, análise e disseminação de dados e informações de saúde</li>
          </ol>
        </div>
      </div>
    ),
  },
  {
    title: '4. Cronograma',
    content: (
      <ul className="list-disc pl-5 space-y-1">
        <li>Submissão de trabalhos: até <strong>30 de junho de 2026</strong></li>
        <li>Divulgação dos resultados de avaliação: até <strong>15 de julho de 2026</strong></li>
        <li>Realização do evento: <strong>28 e 29 de agosto de 2026</strong></li>
      </ul>
    ),
  },
  {
    title: '5. Avaliação e critérios',
    content: (
      <p>
        Os trabalhos serão avaliados por dois avaliadores externos em revisão por pares cega,
        utilizando escala de 0 a 10. Os critérios incluem originalidade, relevância, metodologia e
        clareza da escrita. Os trabalhos aprovados serão apresentados no evento em sessões de rodadas
        de discussão científica, com duração de 10 minutos cada.
      </p>
    ),
  },
  {
    title: '6. Premiações',
    content: (
      <ul className="list-disc pl-5 space-y-1">
        <li>Melhor trabalho — Eixo 1: Cultura de saúde digital, formação e educação permanente em saúde</li>
        <li>Melhor trabalho — Eixo 2: Soluções tecnológicas e serviços de saúde digital no âmbito do SUS</li>
        <li>Melhor trabalho — Eixo 3: Interoperabilidade, análise e disseminação de dados e informações de saúde</li>
        <li>Prêmio adicional: <strong>Destaque Inovação em Saúde Digital</strong></li>
      </ul>
    ),
  },
]

export default function EditalPage() {
  return (
    <div>
      <PageHeader
        icon={<FileText size={20} />}
        title="Edital"
        description="Normas, critérios e cronograma da II Mostra PET Saúde Digital."
      />

      <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 flex items-center justify-between mb-6">
        <div>
          <p className="font-semibold text-brand-dark text-sm">Edital oficial completo</p>
          <p className="text-gray-400 text-xs mt-0.5">Acesse o edital oficial completo</p>
        </div>
        <a
          href="https://docs.google.com/document/d/17rTqBW4qU7TQNcMHMlRrey5Zgu_aqTFzPA9Jr_rWZ7A/edit?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-brand-dark text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-brand-dark/90 transition-colors"
        >
          <ExternalLink size={16} />
          Ver edital completo
        </a>
      </div>

      <div className="mt-6">
        <h2 className="font-bold text-brand-dark mb-4">Seções do edital</h2>
        <Accordion items={editalSections} />
      </div>
    </div>
  )
}
