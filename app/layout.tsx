import type { Metadata } from 'next'
import { Lexend } from 'next/font/google'
import './globals.css'

const inter = Lexend({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'X-Web',
  description: 'Gaming Website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
