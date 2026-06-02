import { Calendar, MapPin, Monitor, UserPlus, Upload } from 'lucide-react'
import InfoCard from '@/components/ui/InfoCard'
import ActionCard from '@/components/ui/ActionCard'
import { LINKS } from '@/config/links'

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-brand-dark rounded-2xl p-8 lg:p-12 mb-8 text-white">
        <span className="inline-block bg-brand-orange/20 text-brand-orange text-xs lg:text-sm font-semibold px-3 py-1 rounded-full mb-4 border border-brand-orange/30">
          II edição · 2026
        </span>
        <h1 className="text-4xl lg:text-5xl font-bold mb-1">II Mostra PET-Saúde Digital</h1>
        <h2 className="text-brand-light text-2xl lg:text-3xl font-semibold mb-4">Pampa Conectado</h2>
        <div className="w-16 h-1 bg-brand-orange rounded mb-5" />
        <p className="text-white/70 text-base lg:text-lg max-w-lg leading-relaxed">
          Conhecimento que transforma dados em cuidado
        </p>
      </section>

      {/* Cards informativos */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        <InfoCard icon={<Calendar size={24} />} label="Data" value="28 e 29 de agosto" />
        <InfoCard icon={<MapPin size={24} />} label="Local" value="Unipampa — Bagé/RS" />
        <InfoCard icon={<Monitor size={24} />} label="Modalidade" value="Presencial" />
      </div>

      {/* Bloco de descrição */}
      <div className="bg-white rounded-xl border-l-4 border-brand-dark p-6 lg:p-8 mb-8 shadow-sm">
        <h3 className="font-bold text-brand-dark text-xl lg:text-2xl mb-2">Sobre o evento</h3>
        <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
          A II Mostra PET-Saúde Digital — Pampa Conectado é um evento científico promovido pelo grupo
          PET-Saúde Digital da Universidade Federal do Pampa (Unipampa), campus Bagé. O evento reúne
          estudantes, profissionais e pesquisadores para compartilhar experiências e produção científica
          na interseção entre saúde e tecnologia digital, fortalecendo a rede de conhecimento no Pampa gaúcho.
        </p>
      </div>

      {/* Cards de acesso rápido */}
      <h3 className="font-bold text-brand-dark text-xl lg:text-2xl mb-4">Acesso rápido</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <ActionCard
          icon={<UserPlus size={26} />}
          title="Inscrição de ouvintes"
          description="Participe do evento como ouvinte e garanta seu certificado de participação."
          buttonLabel="Acessar formulário →"
          href={LINKS.formsInscricao}
        />
        <ActionCard
          icon={<Upload size={26} />}
          title="Submissão de trabalhos"
          description="Submeta seu trabalho científico e apresente suas pesquisas no evento."
          buttonLabel="Acessar formulário →"
          href={LINKS.formsSubmissao}
        />
      </div>
    </div>
  )
}
