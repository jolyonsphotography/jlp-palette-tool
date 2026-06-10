import type { Metadata } from 'next'
import { Nunito_Sans } from 'next/font/google'
import { config } from '@/photographer.config'
import './globals.css'

const nunitoSansHeading = Nunito_Sans({
  weight: '800', // Extra Bold
  subsets: ['latin'],
  variable: '--font-heading',
})

const nunitoSansBody = Nunito_Sans({
  weight: '400', // Regular
  subsets: ['latin'],
  variable: '--font-body',
})

export const metadata: Metadata = {
  title: `${config.copy.pageTitle} | ${config.photographer.name}`,
  description: config.copy.pageSubtitle,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${nunitoSansHeading.variable} ${nunitoSansBody.variable} font-body bg-brand-ivory-light min-h-screen antialiased`}>
        {children}
      </body>
    </html>
  )
}
