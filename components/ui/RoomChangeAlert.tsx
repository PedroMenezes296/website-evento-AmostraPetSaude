import { AlertTriangle, ArrowRight } from 'lucide-react'

const mudancas = [
  { antiga: '2402', nova: '2103' },
  { antiga: '2404', nova: '2104' },
  { antiga: '2406', nova: '2206' },
]

export default function RoomChangeAlert() {
  return (
    <div className="bg-brand-orange/10 border-2 border-brand-orange/50 rounded-xl p-5 mb-6">
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 rounded-full bg-brand-orange/20 flex items-center justify-center shrink-0">
          <AlertTriangle size={20} className="text-brand-orange" />
        </div>
        <div className="flex-1">
          <span className="inline-flex items-center gap-1.5 bg-brand-orange text-white text-xs font-bold uppercase tracking-widest px-2.5 py-1 rounded-full">
            <AlertTriangle size={13} />
            Atenção
          </span>
          <p className="font-bold text-brand-dark mt-2">Salas remanejadas</p>
          <p className="text-sm text-gray-600 mt-1">
            Algumas salas foram alteradas em relação à divulgação anterior. Confira as
            mudanças abaixo e considere sempre as salas novas.
          </p>
          <div className="flex flex-wrap gap-2 mt-3">
            {mudancas.map(({ antiga, nova }) => (
              <span
                key={antiga}
                className="inline-flex items-center gap-2 bg-white border border-brand-orange/40 rounded-lg px-3 py-1.5 text-sm"
              >
                <span className="line-through text-gray-400">Sala {antiga}</span>
                <ArrowRight size={14} className="text-brand-orange" />
                <span className="font-bold text-brand-orange">Sala {nova}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
