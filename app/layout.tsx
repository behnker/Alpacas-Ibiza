import React from 'react'
import type { Metadata, Viewport } from 'next'
import { Geist, Playfair_Display } from 'next/font/google'

import './globals.css'
import { i18nConfig } from '@/i18n.config'

const _geistSans = Geist({ subsets: ['latin'] })
const _playfairDisplay = Playfair_Display({ subsets: ['latin'], variable: '--font-display' })

export const metadata: Metadata = {
  title: 'Alpacas Ibiza | Farm Tours, Weaving Studio & Alpaca Products',
  description: 'Experience Ibiza\'s first alpaca farm. Book tours, buy artisanal woven products, commission custom pieces, and shop pure alpaca wool.',
  generator: 'v0.app',
  openGraph: {
    title: 'Alpacas Ibiza | Farm Tours & Artisanal Weaving',
    description: 'Discover our alpaca farm and weaving studio in Ibiza. Tour bookings, alpaca products, and custom commissions.',
    type: 'website',
  },
  alternateLanguages: {
    en: 'https://alpacasibiza.com/en',
    de: 'https://alpacasibiza.com/de',
    it: 'https://alpacasibiza.com/it',
    es: 'https://alpacasibiza.com/es',
    nl: 'https://alpacasibiza.com/nl',
    fr: 'https://alpacasibiza.com/fr',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: '#6da855',
}

export async function generateStaticParams() {
  return i18nConfig.locales.map((locale) => ({
    locale,
  }))
}

export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode
  params: { locale: string }
}>) {
  const locale = params.locale || i18nConfig.defaultLocale
  
  return (
    <html lang={locale}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}

