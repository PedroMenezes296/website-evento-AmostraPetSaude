import { FileText, ExternalLink } from 'lucide-react'
import PageHeader from '@/components/ui/PageHeader'
import Accordion from '@/components/ui/Accordion'

const editalSections = [
  {
    title: '1. Disposições Gerais',
    defaultOpen: true,
    content: (
      <div className="space-y-3">
        <p>
          A Comissão Organizadora da II Mostra PET Saúde Digital Pampa Conectado, vinculada ao
          Programa PET Saúde/Informação e Saúde Digital Pampa Conectado, da Universidade Federal do
          Pampa (UNIPAMPA), torna públicas as normas para inscrição, submissão, avaliação e
          apresentação de trabalhos científicos, bem como para participação nas atividades do evento.
        </p>
        <p>
          A II Mostra PET Saúde Digital Pampa Conectado será realizada na cidade de Bagé, no Campus
          da UNIPAMPA, nos dias <strong>28 e 29 de agosto de 2026</strong>, contemplando:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Palestra de abertura;</li>
          <li>Oficinas temáticas;</li>
          <li>Apresentação de trabalhos científicos;</li>
          <li>Premiação e encerramento.</li>
        </ul>
      </div>
    ),
  },
  {
    title: '2. Comissão Organizadora e Científica',
    defaultOpen: true,
    content: (
      <div className="space-y-3">
        <p>
          A II Mostra PET Saúde Digital Pampa Conectado contará com Comissão Organizadora e Comissão
          Científica compostas por docentes Tutores do campus sede do evento e um representante de
          cada campus dos grupos PET Saúde/I&SD Pampa Conectado, Preceptores, Orientadores de
          serviço, Profissionais convidados e discentes vinculados ao PET Saúde/Informação e Saúde
          Digital – Pampa Conectado.
        </p>
        <p className="font-semibold text-brand-dark">Compete à Comissão Organizadora:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Coordenar o planejamento e execução do evento;</li>
          <li>Divulgar informações oficiais do evento;</li>
          <li>Acompanhar inscrições, submissões e certificações.</li>
        </ul>
        <p className="font-semibold text-brand-dark">Compete à Comissão Científica:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Coordenar o processo de avaliação dos trabalhos;</li>
          <li>Indicar pareceristas <em>ad hoc</em>;</li>
          <li>Deliberar sobre questões científicas relacionadas ao evento.</li>
        </ul>
        <p>A composição das comissões será divulgada nos canais oficiais do evento e da UNIPAMPA.</p>
      </div>
    ),
  },
  {
    title: '3. Objetivos do Evento',
    defaultOpen: true,
    content: (
      <div className="space-y-3">
        <p className="font-semibold text-brand-dark">Objetivo geral:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>
            Promover a socialização das experiências, produtos e soluções desenvolvidas no âmbito do
            PET Saúde/I&SD Pampa Conectado, contribuindo para o fortalecimento da cultura de saúde
            digital, da inovação tecnológica e da qualificação dos serviços do Sistema Único de
            Saúde (SUS).
          </li>
        </ul>
        <p className="font-semibold text-brand-dark">Objetivos específicos:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Compartilhar experiências de ensino, pesquisa, extensão e inovação em saúde digital.</li>
          <li>Estimular o desenvolvimento e divulgação de soluções tecnológicas aplicadas ao SUS.</li>
          <li>Promover a integração entre ensino, serviço e comunidade.</li>
          <li>Incentivar o uso ético, crítico e estratégico das tecnologias digitais em saúde.</li>
          <li>Fortalecer a formação interprofissional e interdisciplinar.</li>
        </ul>
      </div>
    ),
  },
  {
    title: '4. Público-Alvo',
    defaultOpen: true,
    content: (
      <div className="space-y-2">
        <p>Poderão participar da II Mostra PET Saúde Digital Pampa Conectado:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Discentes de graduação e pós-graduação;</li>
          <li>Docentes;</li>
          <li>Profissionais/trabalhadores da saúde e da área de tecnologia;</li>
          <li>Gestores do SUS;</li>
          <li>Integrantes de projetos PET-Saúde;</li>
          <li>Comunidade interessada em saúde digital.</li>
        </ul>
      </div>
    ),
  },
  {
    title: '5. Inscrições de Ouvintes',
    defaultOpen: true,
    content: (
      <div className="space-y-2">
        <p>
          As inscrições para ouvintes serão realizadas exclusivamente de forma online, por meio de
          formulário eletrônico, no período definido no cronograma do evento.
        </p>
        <p>
          A inscrição como ouvinte dará direito à participação nas atividades científicas e culturais
          do evento.
        </p>
        <a
          href="https://forms.gle/R51MdhAYqgJrzj4T9"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-2 bg-brand-orange text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-brand-orange/90 transition-colors"
        >
          <ExternalLink size={14} />
          Acessar formulário de inscrição
        </a>
      </div>
    ),
  },
  {
    title: '6. Submissão de Trabalhos',
    defaultOpen: true,
    content: (
      <div className="space-y-3">
        <p>
          A submissão dos trabalhos será realizada exclusivamente em formato online, por meio de
          formulário eletrônico, no período definido no cronograma do evento.
        </p>
        <p>
          Para a submissão de trabalhos, é obrigatória a inscrição prévia do autor principal
          (apresentador) no evento. Trabalhos cujo autor principal não esteja inscrito não serão
          avaliados.
        </p>
        <p>
          Os trabalhos serão submetidos à avaliação às cegas — não é permitida a identificação dos
          autores no arquivo do resumo. A identificação deverá ser informada exclusivamente no
          formulário online de submissão.
        </p>
        <p className="font-semibold text-brand-dark mt-2">Normas do resumo:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Cada autor(a) poderá submeter até dois trabalhos como autor(a) principal;</li>
          <li>Cada trabalho deverá ter um orientador(a) e até sete coautores;</li>
          <li>Título em fonte Arial 12pt, negrito, caixa alta, até 15 palavras;</li>
          <li>
            Texto em Arial 12pt, espaçamento simples, mínimo de 1.500 e máximo de 3.000 caracteres
            (com espaços), excluindo título, palavras-chave, eixo temático e referências;
          </li>
          <li>
            Seções obrigatórias: Introdução, Objetivo, Método, Resultados e Considerações
            finais/Conclusão e Referências;
          </li>
          <li>3 a 5 palavras-chave separadas por ponto e vírgula;</li>
          <li>3 a 5 referências no formato ABNT;</li>
          <li>Não são permitidos elementos gráficos (tabelas, gráficos, figuras ou imagens);</li>
          <li>Submissão exclusivamente em PDF, conforme template oficial do evento;</li>
          <li>
            Estudos com seres humanos devem apresentar número CAAE do Comitê de Ética em Pesquisa.
          </li>
        </ul>
        <a
          href="https://forms.gle/yMW2i3YGMJdVvWNVA"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-2 bg-brand-orange text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-brand-orange/90 transition-colors"
        >
          <ExternalLink size={14} />
          Acessar formulário de submissão
        </a>
      </div>
    ),
  },
  {
    title: '7. Eixos Temáticos',
    defaultOpen: true,
    content: (
      <div className="space-y-4">
        <p>Os trabalhos submetidos deverão estar vinculados a um dos seguintes eixos:</p>
        <div>
          <p className="font-semibold text-brand-dark">
            Eixo 1 — Cultura de saúde digital, formação e educação permanente em saúde
          </p>
          <p className="mt-1">
            Abrange trabalhos relacionados com letramento digital em saúde, educação permanente em
            saúde digital, formação interprofissional em saúde digital, capacitação de profissionais
            para uso de tecnologias digitais, desenvolvimento de recursos educacionais digitais,
            estratégias educativas mediadas por tecnologias e segurança da informação e proteção de
            dados em saúde.
          </p>
        </div>
        <div>
          <p className="font-semibold text-brand-dark">
            Eixo 2 — Soluções tecnológicas e serviços de saúde digital no âmbito do SUS
          </p>
          <p className="mt-1">
            Abrange trabalhos relacionados com o desenvolvimento de aplicativos e sistemas em saúde,
            telemedicina e telessaúde, protocolos digitais em serviços de saúde, automação de
            processos em saúde, comunicação digital entre profissionais, inovação tecnológica
            aplicada ao SUS e experiências com ferramentas digitais em serviços de saúde.
          </p>
        </div>
        <div>
          <p className="font-semibold text-brand-dark">
            Eixo 3 — Interoperabilidade, análise e disseminação de dados e informações de saúde
          </p>
          <p className="mt-1">
            Abrange trabalhos relacionados com a integração de sistemas em saúde, dashboards e
            visualização de dados, análise de indicadores de saúde, governança e compartilhamento de
            dados, qualidade da informação em saúde, uso estratégico de dados para tomada de decisão,
            e transparência e disseminação de dados em saúde.
          </p>
        </div>
      </div>
    ),
  },
  {
    title: '8. Avaliação dos Trabalhos',
    defaultOpen: true,
    content: (
      <div className="space-y-3">
        <p>
          Os trabalhos submetidos serão avaliados por dois pareceristas externos, com experiência
          nos eixos temáticos do evento, com base em instrumento específico elaborado pela Comissão
          Científica, contemplando os seguintes critérios:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Relevância científica e/ou tecnológica do trabalho;</li>
          <li>Adequação ao eixo temático selecionado;</li>
          <li>Clareza e coerência do objetivo;</li>
          <li>Adequação metodológica;</li>
          <li>Apresentação e consistência dos resultados;</li>
          <li>Coerência das conclusões ou considerações finais;</li>
          <li>Qualidade da redação científica.</li>
        </ul>
        <p>
          Cada critério será avaliado com pontuação de 0 a 10. A nota final será a média das notas
          atribuídas pelos dois pareceristas.
        </p>
      </div>
    ),
  },
  {
    title: '9. Apresentação dos Trabalhos',
    defaultOpen: true,
    content: (
      <div className="space-y-3">
        <p>
          Os trabalhos aprovados serão apresentados durante a programação científica do evento em
          formato de <strong>roda de conversa científica</strong>. A apresentação oral terá duração
          de até dez minutos por trabalho, seguida de breve momento para comentários ou
          esclarecimentos.
        </p>
        <p>
          A roda de conversa científica será realizada em formato dialogado, mediada por tutor(es)
          do PET Saúde/I&SD Pampa Conectado, com a participação dos autores e do público, promovendo
          a troca de experiências e a discussão dos trabalhos apresentados.
        </p>
        <p>
          Os trabalhos serão organizados em salas distintas, conforme os eixos temáticos do evento.
        </p>
        <p>
          O autor principal (apresentador) deverá estar presente no momento da apresentação. Na
          impossibilidade de apresentação pelo autor principal, outro autor do trabalho poderá
          realizar a apresentação, desde que essa substituição seja previamente comunicada ao tutor
          responsável pela mediação. A ausência do apresentador no horário programado poderá implicar
          na não apresentação do trabalho e na não emissão do certificado de apresentação.
        </p>
      </div>
    ),
  },
  {
    title: '10. Premiação',
    defaultOpen: true,
    content: (
      <div className="space-y-3">
        <p>
          Serão concedidas premiações aos trabalhos que se destacarem entre os resumos submetidos e
          aprovados para apresentação no evento.
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Melhor trabalho — Eixo 1: Cultura de saúde digital, formação e educação permanente em saúde</li>
          <li>Melhor trabalho — Eixo 2: Soluções tecnológicas e serviços de saúde digital no âmbito do SUS</li>
          <li>Melhor trabalho — Eixo 3: Interoperabilidade, análise e disseminação de dados e informações de saúde</li>
          <li>
            Prêmio adicional: <strong>Destaque em Inovação em Saúde Digital</strong> — destinado ao
            trabalho com maior pontuação entre todos os resumos avaliados, independentemente do eixo
            temático.
          </li>
        </ul>
        <p>
          Em caso de empate nas notas finais, o critério de desempate será, respectivamente: (1)
          relevância científica e/ou tecnológica do trabalho; (2) adequação ao eixo temático
          selecionado.
        </p>
      </div>
    ),
  },
  {
    title: '11. Publicação dos Trabalhos',
    defaultOpen: true,
    content: (
      <div className="space-y-2">
        <p>
          Os trabalhos aprovados e apresentados durante a II Mostra PET Saúde Digital Pampa
          Conectado serão publicados nos Anais do evento.
        </p>
        <p>
          A publicação nos Anais estará condicionada à aprovação no processo de avaliação e à
          efetiva apresentação do trabalho durante o evento.
        </p>
        <p>
          Os Anais serão publicados em formato eletrônico no repositório institucional da UNIPAMPA,
          com registro ISBN.
        </p>
        <p>
          Os autores são responsáveis pelo conteúdo científico, pela correção gramatical do trabalho
          submetido e pela observância das normas estabelecidas neste edital.
        </p>
      </div>
    ),
  },
  {
    title: '12. Certificação',
    defaultOpen: true,
    content: (
      <div className="space-y-2">
        <p>Serão emitidos certificados aos participantes, conforme a categoria de participação:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Ouvintes: certificado com carga horária total de até 10 horas;</li>
          <li>Apresentadores de trabalhos científicos: certificado específico de apresentação;</li>
          <li>Palestrantes: certificado correspondente à atividade desenvolvida;</li>
          <li>Oficineiros: certificado correspondente à condução de oficinas;</li>
          <li>Comissão organizadora: certificado de participação na organização do evento;</li>
          <li>Avaliadores: certificado referente à participação no processo de avaliação.</li>
        </ul>
      </div>
    ),
  },
  {
    title: '13. Cronograma',
    defaultOpen: true,
    content: (
      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-brand-bg">
              <th className="text-left px-4 py-2 font-semibold text-brand-dark border border-gray-200">
                Atividade
              </th>
              <th className="text-left px-4 py-2 font-semibold text-brand-dark border border-gray-200">
                Data
              </th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Divulgação do evento', '2 de junho de 2026'],
              ['Inscrições de ouvintes', '2 de junho de 2026 até o dia do evento'],
              ['Submissão de trabalhos', '2 de junho até 30 de junho de 2026'],
              ['Avaliações dos trabalhos por avaliadores externos', 'Até 15 de julho de 2026'],
              ['Divulgação das salas de apresentação dos trabalhos', 'Até 14 de agosto de 2026'],
              ['Evento', '28 e 29 de agosto de 2026'],
              ['Envio dos certificados e publicação dos anais', 'Setembro de 2026'],
            ].map(([atividade, data], i) => (
              <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                <td className="px-4 py-2 border border-gray-200">{atividade}</td>
                <td className="px-4 py-2 border border-gray-200 whitespace-nowrap">{data}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    ),
  },
  {
    title: '14. Disposições Finais',
    defaultOpen: true,
    content: (
      <div className="space-y-2">
        <p>
          14.1. É responsabilidade exclusiva do(a) participante a observância dos procedimentos e
          dos prazos estabelecidos neste edital, bem como de eventuais alterações que vierem a ser
          publicadas no site do evento.
        </p>
        <p>
          14.2. Dúvidas e esclarecimentos adicionais deverão ser solicitados através do e-mail{' '}
          <a
            href="mailto:petsaude.pampaconectado@gmail.com"
            className="text-brand-orange underline hover:text-brand-orange/80"
          >
            petsaude.pampaconectado@gmail.com
          </a>.
        </p>
        <p>
          14.3. Casos omissos serão decididos pela Comissão Organizadora do evento, tendo como base
          as normativas da Universidade Federal do Pampa.
        </p>
      </div>
    ),
  },
]

export default function EditalPage() {
  return (
    <div>
      <PageHeader
        icon={<FileText size={20} />}
        title="Edital"
        description="Normas, critérios e cronograma da II Mostra PET Saúde Digital Pampa Conectado."
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
