import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/common/navbar'
import Footer from '@/components/common/footer'
import { twMerge } from 'tailwind-merge'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Next Model App',
  description: 'a next generation model',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={twMerge('min-h-screen bg-primary text-textPrimary', inter.className)}>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
