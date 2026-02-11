import React from 'react'
import Script from 'next/script'
import type { Metadata, Viewport } from 'next'
import { Geist, Playfair_Display } from 'next/font/google'

import './globals.css'

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
  alternates: {
    languages: {
      en: 'https://alpacasibiza.com/en',
      de: 'https://alpacasibiza.com/de',
      it: 'https://alpacasibiza.com/it',
      es: 'https://alpacasibiza.com/es',
      nl: 'https://alpacasibiza.com/nl',
      fr: 'https://alpacasibiza.com/fr',
    },
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: '#6da855',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
        <Script
          src="https://fareharbor.com/embeds/api/v1/?autolightframe=yes&shortname=alpacasibiza"
          strategy="lazyOnload"
        />
      </body>
    </html>
  )
}

