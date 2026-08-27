import Image from 'next/image'
import { Wifi, ExternalLink } from 'lucide-react'
import PageHeader from '@/components/ui/PageHeader'
import Accordion from '@/components/ui/Accordion'

const UNIPAMPA_WIFI_URL =
  'https://sites.unipampa.edu.br/atendimento/redes-acesso-de-usuarios-externos-a-rede-unipampa/'

const wifiSections = [
  {
    title: '1. Usuários externos (sem vínculo com a Unipampa)',
    defaultOpen: true,
    content: (
      <div className="space-y-3">
        <p>
          Participantes que não possuem vínculo institucional com a Unipampa (ouvintes,
          convidados, público em geral) têm duas opções para acessar a internet durante o evento:
        </p>
        <div>
          <p className="font-semibold text-brand-dark">Opção 1 — Cadastro de usuário externo</p>
          <p className="mt-1">
            É a forma mais segura e estável de conexão. O cadastro é feito previamente por um
            servidor da Unipampa, que registra o CPF do visitante no sistema. Depois disso, o
            dispositivo precisa ser configurado conforme o manual disponibilizado pela
            universidade (botão <em>&quot;Acessar manuais&quot;</em> na tela de acesso).
          </p>
        </div>
        <div>
          <p className="font-semibold text-brand-dark">Opção 2 — Login único via GovBR (temporário)</p>
          <p className="mt-1">
            Forma mais simples e rápida, mas com algumas limitações de segurança e tempo de
            conexão. Basta se conectar à rede <strong>unipampa-visitantes</strong> e entrar com
            uma conta gov.br válida, seguindo os passos indicados na tela (veja o passo a passo na
            imagem abaixo).
          </p>
        </div>
      </div>
    ),
  },
  {
    title: '2. Servidores, alunos e usuários com vínculo institucional',
    defaultOpen: true,
    content: (
      <div className="space-y-2">
        <p>
          Servidores, alunos e demais usuários com vínculo institucional devem utilizar
          <strong> somente</strong> a configuração de rede segura, feita diretamente no
          dispositivo com o usuário institucional próprio.
        </p>
        <p>
          A configuração é feita através do botão <em>&quot;Acessar manuais&quot;</em> disponível
          no portal de atendimento da Unipampa.
        </p>
      </div>
    ),
  },
  {
    title: '3. Problemas comuns e soluções',
    defaultOpen: true,
    content: (
      <div className="space-y-2">
        <p>Caso a conexão seja redirecionada para uma página de erro, isso pode acontecer por:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Erro de senha;</li>
          <li>Falha na autorização do primeiro acesso;</li>
          <li>Falha de comunicação com o servidor GovBR.</li>
        </ul>
        <p>
          Nesses casos, a solução recomendada é <strong>&quot;esquecer a rede&quot;</strong> nas
          configurações de Wi-Fi do dispositivo, limpar os dados recentes do navegador e tentar
          novamente.
        </p>
      </div>
    ),
  },
]

export default function WifiPage() {
  return (
    <div>
      <PageHeader
        icon={<Wifi size={20} />}
        title="Wi-Fi no evento"
        description="Como se conectar à rede Wi-Fi da Unipampa durante a II Mostra PET Saúde Digital."
      />

      <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
        <div>
          <p className="font-semibold text-brand-dark text-sm">Instruções oficiais da Unipampa</p>
          <p className="text-gray-400 text-xs mt-0.5">
            Acesse o portal de atendimento para ver o passo a passo completo e os manuais de
            configuração
          </p>
        </div>
        <a
          href={UNIPAMPA_WIFI_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-brand-orange text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-brand-orange/90 transition-colors whitespace-nowrap"
        >
          <ExternalLink size={16} />
          Ver instruções completas
        </a>
      </div>

      <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 lg:p-6 mb-6">
        <p className="font-semibold text-brand-dark text-sm mb-4">
          Passo a passo — acesso via GovBR (usuários externos)
        </p>
        <div className="max-w-sm mx-auto">
          <Image
            src="/internetGuiaBasico.jpeg"
            alt="Passo a passo de acesso à rede Wi-Fi de visitantes da Unipampa via login com conta gov.br"
            width={729}
            height={911}
            className="w-full h-auto rounded-lg border border-gray-100"
          />
        </div>
        <p className="text-gray-400 text-xs text-center mt-3">
          Fonte: Portal de Atendimento da Unipampa
        </p>
      </div>

      <div>
        <h2 className="font-bold text-brand-dark mb-4">Detalhes do acesso</h2>
        <Accordion items={wifiSections} />
      </div>
    </div>
  )
}
