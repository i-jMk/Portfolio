import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Jijo Kokkad | Mechanical Engineer',
  description:
    'Portfolio of Jijo Kokkad — Process & Manufacturing Engineer specializing in Medical Devices, Lean Six Sigma, and Process Validation.',
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans bg-[#0a0a0a] text-zinc-100 antialiased`}>
        {children}
      </body>
    </html>
  )
}
