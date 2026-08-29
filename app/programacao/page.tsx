import Link from 'next/link'
import { Calendar, MapPin, ArrowRight } from 'lucide-react'
import PageHeader from '@/components/ui/PageHeader'
import RoomChangeAlert from '@/components/ui/RoomChangeAlert'

interface ScheduleRow {
  horario: string
  atividade: string
  responsavel: string
  local: string
}

type ColorKey = 'purple' | 'blue' | 'orange'

interface SchedulePeriodProps {
  label: string
  colorKey: ColorKey
  items: ScheduleRow[]
}

function DayHeader({ date, weekday }: { date: string; weekday: string }) {
  return (
    <div className="flex items-center gap-3 mb-4 mt-8 first:mt-0">
      <div className="w-1 h-10 bg-brand-dark rounded-full" />
      <div>
        <p className="text-xs text-gray-400 uppercase tracking-wide font-semibold">{weekday}</p>
        <p className="font-bold text-brand-dark text-lg">{date}</p>
      </div>
    </div>
  )
}

function SchedulePeriod({ label, colorKey, items }: SchedulePeriodProps) {
  const colors: Record<ColorKey, { bg: string; border: string; text: string }> = {
    purple: { bg: 'bg-purple-50', border: 'border-purple-200', text: 'text-purple-700' },
    blue: { bg: 'bg-brand-light/10', border: 'border-brand-light/30', text: 'text-brand-light' },
    orange: { bg: 'bg-brand-orange/10', border: 'border-brand-orange/30', text: 'text-brand-orange' },
  }
  const c = colors[colorKey]
  return (
    <div className={`bg-white rounded-xl shadow-sm border ${c.border} overflow-hidden mb-6`}>
      <div className={`${c.bg} px-5 py-3 border-b ${c.border}`}>
        <h3 className={`font-bold ${c.text}`}>{label}</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-xs text-gray-400 uppercase tracking-wide border-b border-gray-100">
              <th className="text-left px-5 py-3 w-32">Horário</th>
              <th className="text-left px-5 py-3">Atividade</th>
              <th className="text-left px-5 py-3">Responsável</th>
              <th className="text-left px-5 py-3">Local</th>
            </tr>
          </thead>
          <tbody>
            {items.map((row, i) => (
              <tr key={i} className="border-b border-gray-50 hover:bg-brand-bg transition-colors">
                <td className="px-5 py-3 font-mono text-gray-500 whitespace-nowrap">{row.horario}</td>
                <td className="px-5 py-3 font-medium text-brand-dark">{row.atividade}</td>
                <td className="px-5 py-3 text-gray-600">{row.responsavel}</td>
                <td className="px-5 py-3 text-gray-500">{row.local}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

const dia1noite: ScheduleRow[] = [
  { horario: '18:00', atividade: 'Credenciamento e Acolhimento', responsavel: 'Comissão organizadora', local: 'Auditório' },
  { horario: '18:30', atividade: 'Mesa de abertura', responsavel: 'Coord. PET / Gestão Municipal / Unipampa', local: 'Auditório' },
  { horario: '19:00', atividade: 'PET Saúde Digital Pampa Conectado: trajetórias, produtos e impactos no SUS', responsavel: 'Profª Carla', local: 'Auditório' },
  { horario: '19:30', atividade: 'Palestra de abertura: Saúde Digital sob uma Perspectiva de um Cientista da Computação: Desafios, Oportunidades e Futuro', responsavel: 'Muriel Figueredo Franco', local: 'Auditório' },
]

const dia2manha: ScheduleRow[] = [
  { horario: '9:00–12:00', atividade: 'Oficina 1: Inteligência Artificial na Prática: Classificação com KNN utilizando MATLAB', responsavel: 'Jeferson Rafael Bueno', local: 'Lab 2306' },
  { horario: '9:00–12:00', atividade: 'Oficina 2: Lei Geral de Proteção de Dados Pessoais (LGPD)', responsavel: 'Rodrigo Brandao Mansilha', local: 'Lab 2311' },
  { horario: '9:00–12:00', atividade: 'Oficina 3: e-SUS', responsavel: 'Alice Fonseca Finger', local: 'Lab 2308' },
  { horario: '9:00–12:00', atividade: 'Oficina 4: Análise de dados do DATASUS', responsavel: 'Sandro Da Silva Camargo', local: 'Lab 2309' },
  { horario: '9:00–12:00', atividade: 'Oficina 5: Indicadores de financiamento da saúde', responsavel: 'Gabriel Carpes Irala', local: 'Sala 2104' },
  { horario: '10:30', atividade: 'Coffee break', responsavel: '—', local: 'Hall 3º andar Bloco 2, em frente aos labs' },
]

const dia2tarde: ScheduleRow[] = [
  { horario: '14:00', atividade: 'Eixo 1: Cultura de saúde digital, formação e educação permanente em saúde', responsavel: 'Avaliadores', local: 'Salas 2103, 2205, 2302' },
  { horario: '14:00', atividade: 'Eixo 2: Soluções tecnológicas e serviços de saúde digital no âmbito do SUS', responsavel: 'Avaliadores', local: 'Salas 2104, 2303, 2305' },
  { horario: '14:00', atividade: 'Eixo 3: Interoperabilidade, análise e disseminação de dados e informações de saúde', responsavel: 'Avaliadores', local: 'Salas 2206, 2304' },
  { horario: 'Após apresentações', atividade: 'Premiação e encerramento', responsavel: 'Comissão organizadora', local: 'Auditório' },
]

export default function ProgramacaoPage() {
  return (
    <div>
      <PageHeader
        icon={<Calendar size={20} />}
        title="Programação"
        description="Grade de atividades da II Mostra PET Saúde Digital Pampa Conectado — 28 e 29 de agosto de 2026."
      />

      <RoomChangeAlert />

      <DayHeader date="28 de agosto de 2026" weekday="Sexta-feira" />
      <SchedulePeriod label="Noite" colorKey="purple" items={dia1noite} />

      <DayHeader date="29 de agosto de 2026" weekday="Sábado" />
      <SchedulePeriod label="Manhã" colorKey="blue" items={dia2manha} />
      <SchedulePeriod label="Tarde" colorKey="orange" items={dia2tarde} />

      <div className="bg-brand-dark rounded-xl shadow-sm p-6 mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
            <MapPin size={20} className="text-brand-orange" />
          </div>
          <div>
            <p className="font-bold text-white">Confira o local e horário do seu trabalho</p>
            <p className="text-sm text-white/70">Consulte a lista de trabalhos aprovados com sala e horário de apresentação.</p>
          </div>
        </div>
        <Link
          href="/trabalhos-aprovados"
          className="inline-flex items-center gap-2 bg-brand-orange text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-brand-orange/90 transition-colors whitespace-nowrap"
        >
          Ver trabalhos aprovados
          <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  )
}
