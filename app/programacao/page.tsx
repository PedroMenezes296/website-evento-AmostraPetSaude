import { Calendar } from 'lucide-react'
import PageHeader from '@/components/ui/PageHeader'
import PlaceholderBanner from '@/components/ui/PlaceholderBanner'

interface ScheduleRow {
  horario: string
  atividade: string
  responsavel: string
  local: string
}

interface SchedulePeriodProps {
  period: 'Manhã' | 'Tarde'
  items: ScheduleRow[]
}

function SchedulePeriod({ period, items }: SchedulePeriodProps) {
  const colors = {
    Manhã: { bg: 'bg-brand-light/10', border: 'border-brand-light/30', text: 'text-brand-light' },
    Tarde: { bg: 'bg-brand-orange/10', border: 'border-brand-orange/30', text: 'text-brand-orange' },
  }
  const c = colors[period]
  return (
    <div className={`bg-white rounded-xl shadow-sm border ${c.border} overflow-hidden mb-6`}>
      <div className={`${c.bg} px-5 py-3 border-b ${c.border}`}>
        <h3 className={`font-bold ${c.text}`}>{period}</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-xs text-gray-400 uppercase tracking-wide border-b border-gray-100">
              <th className="text-left px-5 py-3 w-28">Horário</th>
              <th className="text-left px-5 py-3">Atividade</th>
              <th className="text-left px-5 py-3">Responsável</th>
              <th className="text-left px-5 py-3">Local</th>
            </tr>
          </thead>
          <tbody>
            {items.map((row, i) => (
              <tr key={i} className="border-b border-gray-50 hover:bg-brand-bg transition-colors">
                <td className="px-5 py-3 font-mono text-gray-500">{row.horario}</td>
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

// TODO: substituir pelos dados reais da programação
const manha: ScheduleRow[] = [
  { horario: '08:00', atividade: 'Credenciamento', responsavel: 'Comissão organizadora', local: 'Hall de entrada' },
  { horario: '08:30', atividade: 'Abertura oficial', responsavel: 'Coordenação PET-Saúde', local: 'Auditório' },
  { horario: '09:00', atividade: 'Palestra de abertura', responsavel: 'A definir', local: 'Auditório' },
  { horario: '10:30', atividade: 'Coffee break', responsavel: '—', local: 'Hall' },
  { horario: '11:00', atividade: 'Apresentação de trabalhos — Sessão 1', responsavel: 'A definir', local: 'Sala A' },
]

const tarde: ScheduleRow[] = [
  { horario: '13:30', atividade: 'Apresentação de trabalhos — Sessão 2', responsavel: 'A definir', local: 'Sala A' },
  { horario: '15:00', atividade: 'Mesa redonda', responsavel: 'A definir', local: 'Auditório' },
  { horario: '16:30', atividade: 'Coffee break', responsavel: '—', local: 'Hall' },
  { horario: '17:00', atividade: 'Encerramento e premiação', responsavel: 'Comissão organizadora', local: 'Auditório' },
]

export default function ProgramacaoPage() {
  return (
    <div>
      <PageHeader
        icon={<Calendar size={20} />}
        title="Programação"
        description="Grade de atividades da II Mostra PET-Saúde Digital."
      />

      <PlaceholderBanner
        icon={<Calendar size={36} />}
        message="A programação oficial será divulgada em breve. O esboço abaixo é ilustrativo."
      />

      <div className="mt-6">
        <SchedulePeriod period="Manhã" items={manha} />
        <SchedulePeriod period="Tarde" items={tarde} />
      </div>
    </div>
  )
}
