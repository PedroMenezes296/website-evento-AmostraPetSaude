'use client'

import { useMemo, useState } from 'react'
import { FileCheck, Search, MapPin, X, ListFilter } from 'lucide-react'
import PageHeader from '@/components/ui/PageHeader'
import RoomChangeAlert from '@/components/ui/RoomChangeAlert'

interface Trabalho {
  titulo: string
  sala: string
}

type EixoNum = 1 | 2 | 3

interface EixoMeta {
  label: string
  descricao: string
  text: string
  bg: string
  badgeBg: string
  border: string
}

const eixoMeta: Record<EixoNum, EixoMeta> = {
  1: {
    label: 'Eixo 1',
    descricao: 'Cultura de saúde digital, formação e educação permanente em saúde',
    text: 'text-brand-light',
    bg: 'bg-brand-light/10',
    badgeBg: 'bg-brand-light/25',
    border: 'border-brand-light/30',
  },
  2: {
    label: 'Eixo 2',
    descricao: 'Soluções tecnológicas e serviços de saúde digital no âmbito do SUS',
    text: 'text-brand-orange',
    bg: 'bg-brand-orange/10',
    badgeBg: 'bg-brand-orange/25',
    border: 'border-brand-orange/30',
  },
  3: {
    label: 'Eixo 3',
    descricao: 'Interoperabilidade, análise e disseminação de dados e informações de saúde',
    text: 'text-brand-dark',
    bg: 'bg-brand-dark/5',
    badgeBg: 'bg-brand-dark/15',
    border: 'border-brand-dark/20',
  },
}

const trabalhosPorEixo: Record<EixoNum, Trabalho[]> = {
  1: [
    { titulo: 'Planejamento de ações de educação permanente em saúde digital a partir de diagnóstico situacional: relato de experiência de um PET-Saúde', sala: 'Sala 2103' },
    { titulo: 'Desenvolvimento de glossário de termos de informação e saúde digital: estudo metodológico', sala: 'Sala 2103' },
    { titulo: 'Acesso à informação em saúde digital entre usuários na atenção primária: resultados parciais', sala: 'Sala 2103' },
    { titulo: 'Chatbot sobre diabetes como tecnologia educacional no PET-Saúde Informação & Saúde Digital', sala: 'Sala 2103' },
    { titulo: 'Oficina sobre utilização dos relatórios do CELK na atenção primária à saúde', sala: 'Sala 2103' },
    { titulo: 'Autoconfiança na compreensão e aplicação de informações de saúde online entre usuários de Estratégias Saúde da Família do município de Uruguaiana', sala: 'Sala 2103' },
    { titulo: 'Educação permanente na atenção primária à saúde: experiência de uma preceptora do PET-Saúde Digital', sala: 'Sala 2103' },
    { titulo: 'Competências ético-digitais: desafios na formação e da atenção primária sob a égide da LGPD', sala: 'Sala 2103' },
    { titulo: 'LGPD e saúde pública: transparência no tratamento de dados e direitos dos pacientes', sala: 'Sala 2103' },
    { titulo: 'Rodas de conversa como estratégia de divulgação do App SAU para usuários do SUS', sala: 'Sala 2103' },
    { titulo: 'Atividades de educação em saúde com adolescentes em ambiente escolar', sala: 'Sala 2205' },
    { titulo: 'Contribuições do PET-Saúde Tecnologia III para a formação médica', sala: 'Sala 2205' },
    { titulo: 'Vídeos educativos como estratégia de letramento em saúde digital no App SAU: relato de experiência', sala: 'Sala 2205' },
    { titulo: 'A influência do letramento em saúde digital nos comportamentos relacionados à saúde', sala: 'Sala 2205' },
    { titulo: 'Educação em saúde com crianças e adolescentes por meio de um aplicativo', sala: 'Sala 2205' },
    { titulo: 'Vivências interdisciplinares no PET Saúde Digital: reflexões de um estudante de engenharia civil', sala: 'Sala 2205' },
    { titulo: 'Orientador de serviço como multiplicador de conhecimentos sobre saúde digital na APS: relato de experiência', sala: 'Sala 2205' },
    { titulo: 'O poder dos prompts: relato de minicurso sobre IA em saúde digital', sala: 'Sala 2205' },
    { titulo: 'O prontuário eletrônico para o registro do cuidado em saúde: relato de experiência', sala: 'Sala 2205' },
    { titulo: 'Saúde digital e participação social: relato de experiência da Conferência Municipal de Saúde de Alegrete', sala: 'Sala 2302' },
    { titulo: 'SUS Digital: um olhar para a fronteira oeste do Rio Grande do Sul', sala: 'Sala 2302' },
    { titulo: 'Relato de experiência sobre a Trilha Formativa do Grupo Tecnologia I', sala: 'Sala 2302' },
    { titulo: 'Experiências interdisciplinares de um estudante de engenharia de produção no PET-Saúde Digital', sala: 'Sala 2302' },
    { titulo: 'Território, cuidado e tecnologia: relato de experiência no VER-SUS', sala: 'Sala 2302' },
    { titulo: 'Inserção em serviço de saúde no desenvolvimento de atividades do PET Saúde Digital', sala: 'Sala 2302' },
    { titulo: 'Revisão preliminar sobre aplicativos móveis desenvolvidos à pacientes e familiares no manejo de dispositivos médicos', sala: 'Sala 2302' },
    { titulo: 'Desafios do letramento digital em saúde entre usuários da atenção primária à saúde', sala: 'Sala 2302' },
    { titulo: 'Manual de sistemas de informação como estratégias de educação permanente na atenção primária a saúde', sala: 'Sala 2302' },
    { titulo: 'Conhecimento de adolescentes sobre zoonoses e posse responsável de animais em escolas públicas de Uruguaiana, RS', sala: 'Sala 2302' },
  ],
  2: [
    { titulo: 'Medicamento correto no horário correto, mantendo uma saúde correta.', sala: 'Sala 2104' },
    { titulo: 'SICOM-Jaguari: identificação de demandas do serviço de saúde para o desenvolvimento de tecnologia digital', sala: 'Sala 2104' },
    { titulo: 'Construção colaborativa de solução digital para organização do fluxo de atendimento na atenção primária Itaqui-RS', sala: 'Sala 2104' },
    { titulo: 'Elicitação de requisitos para um sistema de chamada de pacientes na atenção primária à saúde', sala: 'Sala 2104' },
    { titulo: 'ChamaSUS: sistema web para gerenciamento de filas e chamada de pacientes integrado ao e-SUS', sala: 'Sala 2104' },
    { titulo: 'Ferramenta de triagem em saúde com inteligência artificial no App SAU', sala: 'Sala 2104' },
    { titulo: 'Relato de experiência na validação de plataforma digital para imunização no SUS', sala: 'Sala 2104' },
    { titulo: 'Engenharia de software integrada à saúde digital no SUS: relato de experiência no PET-Saúde e-Cidadania', sala: 'Sala 2104' },
    { titulo: 'Modelagem computacional preditiva aplicada à triagem de diabetes mellitus em saúde digital', sala: 'Sala 2104' },
    { titulo: 'Desenvolvimento de inteligência artificial para análise de ultrassonografia mamária no SUS: relato de experiência', sala: 'Sala 2104' },
    { titulo: 'RegulaAE: sistema web para regulação da atenção especializada', sala: 'Sala 2104' },
    { titulo: 'Atualização e expansão do App SAU: ampliando o acesso à informação em saúde', sala: 'Sala 2303' },
    { titulo: 'Validação funcional de um sistema de gestão de filas integrado ao e-SUS APS', sala: 'Sala 2303' },
    { titulo: 'SmartCEO: solução digital para gestão da lista de espera odontológica no SUS', sala: 'Sala 2303' },
    { titulo: 'Estratégias de comunicação para divulgação do aplicativo App SAU', sala: 'Sala 2303' },
    { titulo: 'RegulaAE: desenvolvimento de um protótipo para apoio à regulação do acesso à atenção especializada na APS', sala: 'Sala 2303' },
    { titulo: 'Construção de recursos educacionais sobre testagem rápida de ISTs na atenção primária à saúde', sala: 'Sala 2303' },
    { titulo: 'Chatbot educacional sobre dengue como tecnologia educacional de apoio à saúde digital', sala: 'Sala 2303' },
    { titulo: 'Desenvolvimento de recurso educacional para prevenção do pé diabético no âmbito do PET-Saúde: um relato de experiência', sala: 'Sala 2303' },
    { titulo: 'Pampa Saúde: aplicação web progressiva para apoio à atenção primária à saúde', sala: 'Sala 2303' },
    { titulo: 'Experiências de ingressantes em computação no PET-Saúde no desenvolvimento de soluções tecnológicas para o SUS', sala: 'Sala 2303' },
    { titulo: 'Kanban digital para gestão de leitos no contexto hospitalar', sala: 'Sala 2303' },
    { titulo: 'Desenvolvimento de uma plataforma digital para gestão e comunicação da vacinação na atenção primária à saúde', sala: 'Sala 2305' },
    { titulo: 'Experiências de monitores da saúde sobre a participação no PET Informação e Saúde Digital', sala: 'Sala 2305' },
    { titulo: 'Prototipação de uma plataforma digital para gestão e comunicação da vacinação na atenção primária à saúde com a plataforma Figma', sala: 'Sala 2305' },
    { titulo: 'Implantação de fluxo de contrarreferência entre hospital e atenção primária à saúde: desafios e potencialidades', sala: 'Sala 2305' },
    { titulo: 'Saúde bucal no SUS Digital: gestão da informação, transparência e regulação do acesso à atenção especializado na ESF', sala: 'Sala 2305' },
    { titulo: 'Arquitetura de implantação e notificação ativa de uma plataforma de gestão da vacinação: relato de experiência em saúde digital no município de Jaguari/RS', sala: 'Sala 2305' },
    { titulo: 'Mapeamento das demandas da fase 2: sistema de agendamento de transportes', sala: 'Sala 2305' },
    { titulo: 'Mapeamento das demandas da fase 2: sistema de gerenciamento de exames', sala: 'Sala 2305' },
    { titulo: 'Avaliação de estratégias de saúde digital no planejamento municipal em saúde', sala: 'Sala 2305' },
    { titulo: 'Disponibilidade digital de planos municipais de saúde dos municípios parceiros do PET Saúde', sala: 'Sala 2305' },
  ],
  3: [
    { titulo: 'Sífilis gestacional e congênita em Uruguaiana, Rio Grande do Sul: estudo ecológico', sala: 'Sala 2206' },
    { titulo: 'Tendência temporal das internações por câncer de traqueia, brônquios e pulmões no RS (2008–2025)', sala: 'Sala 2206' },
    { titulo: 'Tendência temporal da idade gestacional nas notificações de sífilis gestacional (2013–2023)', sala: 'Sala 2206' },
    { titulo: 'Mortalidade evitável e prioridades territoriais em saúde: análise de dados do SIM/DATASUS no Rio Grande do Sul', sala: 'Sala 2206' },
    { titulo: 'Análise de nascimentos e pré-natal no OlharSUS Pampa', sala: 'Sala 2206' },
    { titulo: 'Estratégias para implementação da LGPD no Sistema Único de Saúde: uma revisão de literatura', sala: 'Sala 2206' },
    { titulo: 'Monitoramento da cobertura de exames preventivos femininos com dados públicos do SUS', sala: 'Sala 2206' },
    { titulo: 'OlharSUS Pampa Lakehouse: arquitetura open source para integração e governança de dados no SUS regional', sala: 'Sala 2206' },
    { titulo: 'Disponibilidade de leitos hospitalares no Rio Grande do Sul: um panorama da infraestrutura de saúde', sala: 'Sala 2304' },
    { titulo: 'Notificações compulsórias relacionadas à saúde mental: desafios para a transparência da informação e o fortalecimento da saúde digital no SUS', sala: 'Sala 2304' },
    { titulo: 'Desenvolvimento de tecnologia digital para comunicação entre Estratégia Saúde da Família e comunidade', sala: 'Sala 2304' },
    { titulo: 'Uma proposta de plataforma de indicadores para gestão municipal em saúde', sala: 'Sala 2304' },
    { titulo: 'Heterogeneidade espacial e tendência temporal das internações por doenças endócrinas, nutricionais e metabólicas no Brasil', sala: 'Sala 2304' },
    { titulo: 'Softwares de saúde e educação: um panorama dos sistemas de informação do SUS', sala: 'Sala 2304' },
    { titulo: 'Migração de dados de saúde em Jaguari/RS: transição do sistema SIMUS para o e-SUS APS', sala: 'Sala 2304' },
    { titulo: 'Construção do plano municipal de saúde de Itaqui: um relato de experiência em gestão digital', sala: 'Sala 2304' },
    { titulo: 'Abordagem de crianças como ferramenta de conscientização sobre bem estar de animais de estimação', sala: 'Sala 2304' },
  ],
}

const totalTrabalhos = Object.values(trabalhosPorEixo).reduce((acc, arr) => acc + arr.length, 0)

function groupBySala(items: Trabalho[]) {
  const groups: { sala: string; itens: Trabalho[] }[] = []
  for (const item of items) {
    const last = groups[groups.length - 1]
    if (last && last.sala === item.sala) {
      last.itens.push(item)
    } else {
      groups.push({ sala: item.sala, itens: [item] })
    }
  }
  return groups
}

export default function TrabalhosAprovadosPage() {
  const [busca, setBusca] = useState('')
  const [eixoAtivo, setEixoAtivo] = useState<EixoNum | 'todos'>('todos')

  const termo = busca.trim().toLowerCase()

  const eixosFiltrados = useMemo(() => {
    const eixosNums: EixoNum[] = [1, 2, 3]
    return eixosNums
      .filter((n) => eixoAtivo === 'todos' || eixoAtivo === n)
      .map((n) => {
        const itens = trabalhosPorEixo[n].filter(
          (t) =>
            termo === '' ||
            t.titulo.toLowerCase().includes(termo) ||
            t.sala.toLowerCase().includes(termo)
        )
        return { eixo: n, itens }
      })
      .filter((grupo) => grupo.itens.length > 0)
  }, [termo, eixoAtivo])

  const totalFiltrado = eixosFiltrados.reduce((acc, g) => acc + g.itens.length, 0)

  return (
    <div>
      <PageHeader
        icon={<FileCheck size={20} />}
        title="Trabalhos aprovados"
        description="Confira os trabalhos aprovados para apresentação na II Mostra PET Saúde Digital Pampa Conectado, organizados por eixo temático e sala."
      />

      <RoomChangeAlert />

      {/* Estatísticas */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm px-4 py-3">
          <p className="text-2xl font-bold text-brand-dark">{totalTrabalhos}</p>
          <p className="text-xs text-gray-400 uppercase tracking-wide font-medium">Trabalhos aprovados</p>
        </div>
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm px-4 py-3">
          <p className="text-2xl font-bold text-brand-dark">3</p>
          <p className="text-xs text-gray-400 uppercase tracking-wide font-medium">Eixos temáticos</p>
        </div>
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm px-4 py-3 col-span-2 sm:col-span-1">
          <p className="text-2xl font-bold text-brand-dark">Sáb · 29/08</p>
          <p className="text-xs text-gray-400 uppercase tracking-wide font-medium">Dia da apresentação</p>
        </div>
      </div>

      {/* Busca e filtros */}
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-4 mb-6 flex flex-col sm:flex-row gap-3 sm:items-center">
        <div className="relative flex-1">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
            placeholder="Buscar por título ou sala..."
            className="w-full pl-9 pr-9 py-2 rounded-lg border border-gray-200 text-sm text-brand-dark placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-light/40 focus:border-brand-light"
          />
          {busca && (
            <button
              onClick={() => setBusca('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              aria-label="Limpar busca"
            >
              <X size={15} />
            </button>
          )}
        </div>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setEixoAtivo('todos')}
            className={`text-xs font-semibold px-3 py-1.5 rounded-full border transition-colors ${
              eixoAtivo === 'todos'
                ? 'bg-brand-dark text-white border-brand-dark'
                : 'bg-white text-gray-500 border-gray-200 hover:border-gray-300'
            }`}
          >
            Todos
          </button>
          {([1, 2, 3] as EixoNum[]).map((n) => (
            <button
              key={n}
              onClick={() => setEixoAtivo(n)}
              className={`text-xs font-semibold px-3 py-1.5 rounded-full border transition-colors ${
                eixoAtivo === n
                  ? `${eixoMeta[n].bg} ${eixoMeta[n].text} ${eixoMeta[n].border}`
                  : 'bg-white text-gray-500 border-gray-200 hover:border-gray-300'
              }`}
            >
              {eixoMeta[n].label}
            </button>
          ))}
        </div>
      </div>

      {/* Resultados */}
      {totalFiltrado === 0 ? (
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-10 text-center">
          <ListFilter size={28} className="mx-auto text-gray-300 mb-3" />
          <p className="text-brand-dark font-semibold">Nenhum trabalho encontrado</p>
          <p className="text-gray-400 text-sm mt-1">Tente buscar por outro termo ou limpar os filtros.</p>
        </div>
      ) : (
        <div className="space-y-6">
          {eixosFiltrados.map(({ eixo, itens }) => {
            const meta = eixoMeta[eixo]
            const grupos = groupBySala(itens)
            return (
              <div
                key={eixo}
                className={`bg-white rounded-xl shadow-sm border ${meta.border} overflow-hidden`}
              >
                <div className={`${meta.bg} px-5 py-4 border-b ${meta.border} flex items-center justify-between gap-3 flex-wrap`}>
                  <div>
                    <h3 className={`font-bold ${meta.text}`}>{meta.label}</h3>
                    <p className="text-xs text-gray-500 mt-0.5">{meta.descricao}</p>
                  </div>
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full bg-white/70 ${meta.text} border ${meta.border} whitespace-nowrap`}>
                    {itens.length} trabalho{itens.length !== 1 ? 's' : ''}
                  </span>
                </div>
                <div className="p-5 space-y-6">
                  {grupos.map((grupo) => (
                    <div key={grupo.sala}>
                      <div className="flex items-center gap-2 mb-3">
                        <MapPin size={14} className={meta.text} />
                        <span className="text-sm font-bold text-black uppercase tracking-wide">{grupo.sala}</span>
                        <span className="text-xs text-gray-300">·</span>
                        <span className="text-xs text-gray-400">
                          {grupo.itens.length} apresentaç{grupo.itens.length !== 1 ? 'ões' : 'ão'}
                        </span>
                      </div>
                      <div className="flex flex-col gap-3">
                        {grupo.itens.map((item, i) => (
                          <div
                            key={i}
                            className={`bg-white rounded-lg border ${meta.border} border-l-4 shadow-sm px-3.5 py-3 flex flex-col gap-2`}
                          >
                            <span
                              className={`self-start text-[10px] font-bold tracking-wide px-2 py-0.5 rounded-full ${meta.badgeBg} ${meta.text}`}
                            >
                              {meta.label}
                            </span>
                            <p className="text-sm text-gray-700 leading-snug">{item.titulo}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
