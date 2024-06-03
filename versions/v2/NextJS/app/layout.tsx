import '@/styles/globals.css'
import type { Metadata } from 'next'
import { HeaderEl, FooterEl } from '@/components/elements'

export const metadata: Metadata = {
  title: 'My little portifolio',
  description: 'A portofilo generated with NextJS',
}

export default function RootLayout({
  children,
  }: {
    children: React.ReactNode
  }) {
  return (
    <html lang="en">
      <body>
        <HeaderEl />
        <main>
          {children}
        </main>             
        <FooterEl />
      </body>
    </html>
  )
}
