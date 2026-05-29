# II Mostra PET-Saúde Digital — Pampa Conectado

Site oficial do evento, desenvolvido com **Next.js 14** + **Tailwind CSS**, pronto para deploy gratuito na Vercel.

---

## Rodando localmente

### 1. Clone o repositório

```bash
git clone <URL_DO_REPOSITORIO>
cd SiteDivulgacaoAmostra-web
```

### 2. Configure as variáveis de ambiente

Crie o arquivo `.env.local` na raiz do projeto:

```env
NEXT_PUBLIC_FORMS_INSCRICAO=https://forms.google.com/SEU_FORMULARIO_DE_INSCRICAO
NEXT_PUBLIC_FORMS_SUBMISSAO=https://forms.google.com/SEU_FORMULARIO_DE_SUBMISSAO
```

### 3. Instale as dependências

```bash
npm install
```

### 4. Inicie o servidor de desenvolvimento

```bash
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000) no navegador.

---

## Deploy gratuito na Vercel

### Passo 1 — Crie uma conta

Acesse [vercel.com](https://vercel.com) e crie uma conta gratuita (pode usar GitHub).

### Passo 2 — Importe o repositório

1. No painel da Vercel, clique em **"Add New… > Project"**
2. Conecte seu GitHub e selecione este repositório
3. Clique em **"Import"**

### Passo 3 — Configure as variáveis de ambiente

Antes de fazer o deploy, adicione as variáveis de ambiente:

| Nome | Valor |
|---|---|
| `NEXT_PUBLIC_FORMS_INSCRICAO` | URL do Google Forms de inscrição |
| `NEXT_PUBLIC_FORMS_SUBMISSAO` | URL do Google Forms de submissão |

Você encontra essa opção em **Environment Variables** na tela de configuração do projeto.

### Passo 4 — Deploy

Clique em **"Deploy"**. A Vercel vai construir e publicar o site automaticamente.

A cada `git push` para a branch principal, o site é atualizado automaticamente.

---

## Personalizações pendentes (TODO)

- [ ] Atualizar data do evento (`app/page.tsx` e `app/programacao/page.tsx`)
- [ ] Adicionar URL real do PDF do edital (`app/edital/page.tsx`)
- [ ] Adicionar URL real do template .docx (`app/template/page.tsx`)
- [ ] Configurar URLs dos Google Forms no `.env.local` / Vercel
- [ ] Atualizar programação real (`app/programacao/page.tsx`)
- [ ] Atualizar lista de organizadores (`app/sobre/page.tsx`)
- [ ] Substituir logos institucionais placeholder (`app/sobre/page.tsx`)
- [ ] Confirmar @ do Instagram do grupo (`app/contato/page.tsx`)

---

## Tecnologias

- [Next.js 14](https://nextjs.org/) — App Router
- [Tailwind CSS](https://tailwindcss.com/) — estilização
- [lucide-react](https://lucide.dev/) — ícones
- [Vercel](https://vercel.com/) — deploy

## Proximos passos 

  Próximos passos (conteúdo real a inserir)

  - Substituir URLs # nos TODOs pelo link do PDF do edital, template .docx e URLs reais dos Google Forms no .env.local
  - Atualizar data do evento, programação, lista de organizadores e logos institucionais
  - Para deploy: importar repositório na Vercel e adicionar as variáveis de ambiente no painel