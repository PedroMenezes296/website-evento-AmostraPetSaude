'use client'

import { useState } from 'react'
import { BookOpen, Download, CheckCircle2, Presentation, Users } from 'lucide-react'
import PageHeader from '@/components/ui/PageHeader'
import Accordion from '@/components/ui/Accordion'

const guiaApresentadorSections = [
  {
    title: '1. Antes da apresentação',
    defaultOpen: true,
    content: (
      <div className="space-y-2">
        <ul className="list-disc pl-5 space-y-1">
          <li>Chegue à sala com pelo menos 15 minutos de antecedência.</li>
          <li>Confirme sua presença com o monitor e confira a ordem das apresentações.</li>
          <li>
            O uso de slides é facultativo. Se usar, deixe seu arquivo pronto para abrir. Leve
            também uma cópia em PDF para ajudar a nortear a apresentação.
          </li>
          <li>
            Se outro autor for apresentar o trabalho, comunique a substituição previamente ao
            tutor/mediador responsável.
          </li>
          <li>
            Evite expor nomes, fotografias ou informações que permitam identificar usuários,
            pacientes ou participantes de pesquisa quando isso não estiver autorizado.
          </li>
        </ul>
      </div>
    ),
  },
  {
    title: '2. Como organizar os 10 minutos',
    defaultOpen: true,
    content: (
      <div className="space-y-3">
        <div className="border border-brand-dark/20 rounded-lg p-4 bg-brand-bg">
          <p className="font-semibold text-brand-dark text-sm">Uma forma simples de pensar sua fala:</p>
          <p className="mt-1">
            o que foi feito → por que isso importa → o que encontramos/aprendemos → o que
            queremos discutir.
          </p>
        </div>
        <ol className="list-decimal pl-5 space-y-1">
          <li>Contextualize o tema em uma ou duas frases.</li>
          <li>Diga claramente o objetivo do trabalho.</li>
          <li>Explique, de forma resumida, como a experiência, ação ou estudo foi realizado.</li>
          <li>Destaque os principais resultados, aprendizados ou produtos.</li>
          <li>Finalize com uma contribuição, desafio ou pergunta para a roda.</li>
        </ol>
      </div>
    ),
  },
  {
    title: '3. Sobre os slides',
    defaultOpen: true,
    content: (
      <ul className="list-disc pl-5 space-y-1">
        <li>Os slides devem ajudar sua fala, não substituir sua fala.</li>
        <li>Prefira poucos slides (no máximo 5), com pouco texto e letras grandes.</li>
        <li>Use gráficos, imagens ou esquemas apenas quando ajudarem a compreender a mensagem.</li>
        <li>Evite ler o resumo ou os slides palavra por palavra.</li>
        <li>Se houver problema técnico, esteja preparado para continuar a apresentação oralmente.</li>
      </ul>
    ),
  },
  {
    title: '4. Durante a fala',
    defaultOpen: true,
    content: (
      <ul className="list-disc pl-5 space-y-1">
        <li>
          Fale em ritmo tranquilo e use uma linguagem que possa ser compreendida por pessoas de
          diferentes áreas.
        </li>
        <li>
          Respeite o limite de até 10 minutos. O monitor irá sinalizar quando o tempo estiver
          terminando, faltando 1 minuto para completar o tempo máximo.
        </li>
        <li>Dê destaque ao que é mais importante. Não é necessário apresentar todos os detalhes do trabalho.</li>
      </ul>
    ),
  },
  {
    title: '5. Para favorecer o diálogo',
    defaultOpen: true,
    content: (
      <div className="space-y-3">
        <ul className="list-disc pl-5 space-y-1">
          <li>Ao final, proponha uma pergunta ou reflexão para o grupo.</li>
          <li>Escute os comentários e responda de forma breve e objetiva.</li>
          <li>Quando outra apresentação se relacionar ao seu trabalho, contribua com conexões e experiências.</li>
          <li>
            Permaneça na sala durante toda a roda, salvo necessidade justificada. A proposta é
            construir uma conversa entre os trabalhos, e não apenas assistir à própria
            apresentação.
          </li>
        </ul>
        <div className="border border-brand-dark/20 rounded-lg p-4 bg-brand-bg text-sm">
          <p className="font-semibold text-brand-dark">Exemplos de perguntas disparadoras:</p>
          <p className="mt-1">
            &quot;Que desafios ainda existem para aplicar esta experiência em outros
            contextos?&quot; · &quot;Que possibilidades de continuidade este trabalho abre?&quot;
            · &quot;Que aprendizagens podem ser úteis para outros serviços ou equipes?&quot;
          </p>
        </div>
      </div>
    ),
  },
  {
    title: '6. O que evitar',
    defaultOpen: true,
    content: (
      <ul className="list-disc pl-5 space-y-1">
        <li>Transformar os 10 minutos em uma aula longa ou revisão teórica extensa.</li>
        <li>Ler todo o resumo, tabelas ou referências bibliográficas.</li>
        <li>Ultrapassar o tempo e reduzir o espaço de fala dos demais participantes.</li>
        <li>Responder a comentários de forma defensiva. A roda é um espaço de troca e reflexão.</li>
      </ul>
    ),
  },
  {
    title: '7. Checklist antes de entrar na sala',
    defaultOpen: true,
    content: (
      <div className="space-y-4">
        <ul className="space-y-2">
          {[
            'Estou na sala com antecedência.',
            'Confirmei minha presença e a ordem da apresentação.',
            'Meu arquivo está pronto e legível.',
            'Consigo explicar meu trabalho em até 10 minutos.',
            'Sei qual mensagem principal quero deixar.',
            'Tenho uma pergunta ou reflexão para abrir o diálogo.',
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <CheckCircle2 size={18} className="text-brand-orange flex-shrink-0 mt-0.5" />
              {item}
            </li>
          ))}
        </ul>
        <div className="border border-brand-orange/30 rounded-lg p-4 bg-brand-orange/5">
          <p className="font-semibold text-brand-dark text-sm">Mensagem-chave:</p>
          <p className="mt-1">
            Apresente menos, dialogue mais. O objetivo da roda é fazer circular ideias,
            experiências e perguntas.
          </p>
        </div>
      </div>
    ),
  },
]

const guiaMediadorSections = [
  {
    title: '1. Antes da roda',
    defaultOpen: true,
    content: (
      <div className="space-y-3">
        <div className="border border-brand-orange/30 rounded-lg p-4 bg-brand-orange/5 text-sm">
          <p className="font-semibold text-brand-dark">Importante:</p>
          <p className="mt-1">
            a roda de conversa científica não é uma banca de defesa. O mediador não precisa
            emitir um parecer sobre cada trabalho; sua principal função é facilitar a conversa.
          </p>
        </div>
        <ul className="list-disc pl-5 space-y-1">
          <li>Leia previamente os resumos da sua sala, se possível.</li>
          <li>Identifique temas que aproximam os trabalhos e possíveis questões comuns.</li>
          <li>Confira a programação e o tempo disponível para a sessão.</li>
          <li>
            Alinhe com o monitor como será feito o controle do tempo e como serão tratados
            atrasos ou problemas técnicos.
          </li>
        </ul>
      </div>
    ),
  },
  {
    title: '2. Abertura da sessão',
    defaultOpen: true,
    content: (
      <div className="space-y-3">
        <div className="border border-brand-dark/20 rounded-lg p-4 bg-brand-bg text-sm">
          <p className="font-semibold text-brand-dark">Exemplo de fala de abertura:</p>
          <p className="mt-1">
            &quot;Bem-vindos! Teremos apresentações de até 10 minutos, seguidas de momentos de
            diálogo. Nosso objetivo é compartilhar experiências e construir reflexões em
            conjunto. Peço que todos permaneçam na roda para que possamos relacionar os trabalhos
            ao longo da sessão.&quot;
          </p>
        </div>
        <ul className="list-disc pl-5 space-y-1">
          <li>Apresente-se e apresente brevemente o eixo temático da sala.</li>
          <li>Explique o tempo de fala e como serão feitos os avisos de tempo.</li>
          <li>Informe como o público poderá fazer perguntas ou comentários.</li>
          <li>Reforce o caráter dialogado e respeitoso da atividade.</li>
        </ul>
      </div>
    ),
  },
  {
    title: '3. Durante as apresentações',
    defaultOpen: true,
    content: (
      <ul className="list-disc pl-5 space-y-1">
        <li>Apresente o próximo trabalho de forma breve e correta.</li>
        <li>Garanta tratamento equânime aos apresentadores.</li>
        <li>Evite interromper a fala, exceto quando o tempo se esgotar ou houver necessidade de organização.</li>
        <li>Faça transições curtas e, quando útil, destaque uma conexão com o trabalho anterior.</li>
        <li>Se a apresentação ultrapassar 10 minutos, faça um aviso claro e respeitoso para conclusão.</li>
      </ul>
    ),
  },
  {
    title: '4. Como estimular o diálogo',
    defaultOpen: true,
    content: (
      <div className="space-y-3">
        <ul className="list-disc pl-5 space-y-1">
          <li>Comece por perguntas abertas, que convidem à reflexão e não apenas a respostas de &quot;sim&quot; ou &quot;não&quot;.</li>
          <li>Relacione trabalhos diferentes quando houver pontos em comum.</li>
          <li>Convide autores a comentarem experiências apresentadas por outros colegas.</li>
          <li>Distribua a palavra e evite que uma única pessoa monopolize a conversa.</li>
          <li>Faça intervenções curtas. O tempo da roda pertence principalmente aos autores e ao público.</li>
        </ul>
        <div className="border border-brand-dark/20 rounded-lg p-4 bg-brand-bg text-sm">
          <p className="font-semibold text-brand-dark">Perguntas disparadoras:</p>
          <p className="mt-1">
            &quot;O que aproxima estes trabalhos?&quot; · &quot;Que desafios aparecem em
            comum?&quot; · &quot;O que desta experiência poderia ser levado para outro
            contexto?&quot; · &quot;Que contribuições podemos levar para a prática?&quot; ·
            &quot;Que questões permanecem em aberto?&quot;
          </p>
        </div>
      </div>
    ),
  },
  {
    title: '5. Situações que podem ocorrer',
    defaultOpen: true,
    content: (
      <ul className="list-disc pl-5 space-y-1">
        <li><strong>Poucas perguntas do público:</strong> use uma pergunta disparadora já preparada.</li>
        <li><strong>Comentário muito longo:</strong> agradeça e convide a pessoa a formular a pergunta ou ideia principal.</li>
        <li><strong>Debate muito concentrado em um trabalho:</strong> faça uma ponte com os demais trabalhos da sessão.</li>
        <li>
          <strong>Discordância entre participantes:</strong> reconheça as diferentes perspectivas
          e retome o foco do debate, mantendo um ambiente respeitoso.
        </li>
        <li>
          <strong>Problema técnico:</strong> convide o apresentador a continuar oralmente
          enquanto o monitor busca uma solução.
        </li>
      </ul>
    ),
  },
  {
    title: '6. Encerramento',
    defaultOpen: true,
    content: (
      <div className="space-y-3">
        <ul className="list-disc pl-5 space-y-1">
          <li>Faça uma síntese breve dos principais temas, aproximações e desafios discutidos.</li>
          <li>Valorize a contribuição dos autores e do público.</li>
          <li>Evite transformar a síntese em uma nova palestra.</li>
          <li>Agradeça a participação e informe orientações finais da organização, quando houver.</li>
        </ul>
        <div className="border border-brand-orange/30 rounded-lg p-4 bg-brand-orange/5 text-sm">
          <p className="font-semibold text-brand-dark">Exemplo de encerramento:</p>
          <p className="mt-1">
            &quot;Hoje apareceram pontos importantes sobre formação, uso das tecnologias e
            desafios para incorporar soluções digitais no SUS. Obrigado aos autores e ao público
            pelas contribuições. Esperamos que as conexões feitas aqui continuem após a
            Mostra.&quot;
          </p>
        </div>
      </div>
    ),
  },
]

function GuiaDownloadCard({ title, description, href }: { title: string; description: string; href: string }) {
  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
      <div>
        <p className="font-semibold text-brand-dark text-sm">{title}</p>
        <p className="text-gray-400 text-xs mt-0.5">{description}</p>
      </div>
      <a
        href={href}
        download
        className="flex items-center gap-2 bg-brand-dark text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-brand-dark/90 transition-colors whitespace-nowrap"
      >
        <Download size={16} />
        Baixar PDF
      </a>
    </div>
  )
}

type Guia = 'apresentador' | 'mediador'

export default function GuiasPage() {
  const [guia, setGuia] = useState<Guia>('apresentador')

  return (
    <div>
      <PageHeader
        icon={<BookOpen size={20} />}
        title="Guias do evento"
        description="Orientações para apresentadores e mediadores durante a roda de conversa científica."
      />

      <div className="flex flex-col sm:flex-row gap-3 mb-8">
        <button
          onClick={() => setGuia('apresentador')}
          className={`flex items-center gap-3 px-5 py-3 rounded-xl border text-left transition-colors ${
            guia === 'apresentador'
              ? 'bg-brand-orange/10 border-brand-orange text-brand-dark'
              : 'bg-white border-gray-100 text-gray-500 hover:bg-brand-bg'
          }`}
        >
          <Presentation size={18} className={guia === 'apresentador' ? 'text-brand-orange' : 'text-gray-400'} />
          <span className="font-semibold text-sm">Guia do apresentador</span>
        </button>
        <button
          onClick={() => setGuia('mediador')}
          className={`flex items-center gap-3 px-5 py-3 rounded-xl border text-left transition-colors ${
            guia === 'mediador'
              ? 'bg-brand-orange/10 border-brand-orange text-brand-dark'
              : 'bg-white border-gray-100 text-gray-500 hover:bg-brand-bg'
          }`}
        >
          <Users size={18} className={guia === 'mediador' ? 'text-brand-orange' : 'text-gray-400'} />
          <span className="font-semibold text-sm">Guia do mediador</span>
        </button>
      </div>

      {guia === 'apresentador' ? (
        <section>
          <GuiaDownloadCard
            title="Guia do apresentador"
            description="Orientações para quem vai apresentar um trabalho na roda de conversa"
            href="/guias/guia-apresentador.pdf"
          />
          <h2 className="font-bold text-brand-dark mt-6 mb-4">Seções do guia do apresentador</h2>
          <Accordion items={guiaApresentadorSections} />
        </section>
      ) : (
        <section>
          <GuiaDownloadCard
            title="Guia do mediador"
            description="Orientações para quem vai mediar uma sala na roda de conversa"
            href="/guias/guia-mediador.pdf"
          />
          <h2 className="font-bold text-brand-dark mt-6 mb-4">Seções do guia do mediador</h2>
          <Accordion items={guiaMediadorSections} />
        </section>
      )}
    </div>
  )
}
