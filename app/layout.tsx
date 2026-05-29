import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import AppShell from '@/components/layout/AppShell'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'II Mostra PET-Saúde Digital — Pampa Conectado',
  description: 'Conhecimento que transforma dados em cuidado. Unipampa · Bagé/RS · 2026.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body className={`${inter.className} bg-brand-bg antialiased`}>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  )
}
