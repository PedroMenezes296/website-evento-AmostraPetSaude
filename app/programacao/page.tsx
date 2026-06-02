import { Calendar } from 'lucide-react'
import PageHeader from '@/components/ui/PageHeader'

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
  { horario: '19:00', atividade: 'PET-Saúde Digital Pampa Conectado: trajetórias, produtos e impactos no SUS', responsavel: 'Profª Carla', local: 'Auditório' },
  { horario: '19:30', atividade: 'Palestra de abertura: Saúde Digital no SUS — desafios e oportunidades', responsavel: 'A confirmar', local: 'Auditório' },
]

const dia2manha: ScheduleRow[] = [
  { horario: '9:00–12:00', atividade: 'Oficina 1: IA para engenharia', responsavel: 'Jeferson', local: 'Laboratório 2408' },
  { horario: '9:00–12:00', atividade: 'Oficina 2: Lei Geral de Proteção de Dados Pessoais (LGPD)', responsavel: 'Rodrigo', local: 'Sala 2402' },
  { horario: '9:00–12:00', atividade: 'Oficina 3: e-SUS', responsavel: 'Alice', local: 'Lab de computação' },
  { horario: '9:00–12:00', atividade: 'Oficina 4: Análise de dados do DATASUS', responsavel: 'Sandro', local: 'Lab de computação' },
  { horario: '9:00–12:00', atividade: 'Oficina 5: Indicadores de financiamento da saúde', responsavel: 'A confirmar', local: 'Sala 2404' },
  { horario: '10:30', atividade: 'Coffee break', responsavel: '—', local: 'Hall' },
]

const dia2tarde: ScheduleRow[] = [
  { horario: '14:00', atividade: 'Eixo 1: Cultura de saúde digital, formação e educação permanente em saúde', responsavel: 'Avaliadores', local: 'Sala 2402' },
  { horario: '14:00', atividade: 'Eixo 2: Soluções tecnológicas e serviços de saúde digital no âmbito do SUS', responsavel: 'Avaliadores', local: 'Sala 2404' },
  { horario: '14:00', atividade: 'Eixo 3: Interoperabilidade, análise e disseminação de dados e informações de saúde', responsavel: 'Avaliadores', local: 'Sala 2406' },
  { horario: 'Após apresentações', atividade: 'Premiação e encerramento', responsavel: 'Comissão organizadora', local: 'Auditório' },
]

export default function ProgramacaoPage() {
  return (
    <div>
      <PageHeader
        icon={<Calendar size={20} />}
        title="Programação"
        description="Grade de atividades da II Mostra PET-Saúde Digital — 28 e 29 de agosto de 2026."
      />

      <DayHeader date="28 de agosto de 2026" weekday="Sexta-feira" />
      <SchedulePeriod label="Noite — Auditório" colorKey="purple" items={dia1noite} />

      <DayHeader date="29 de agosto de 2026" weekday="Sábado" />
      <SchedulePeriod label="Manhã — Oficinas simultâneas (9:00–12:00)" colorKey="blue" items={dia2manha} />
      <SchedulePeriod label="Tarde — Apresentações científicas (14:00)" colorKey="orange" items={dia2tarde} />
    </div>
  )
}
