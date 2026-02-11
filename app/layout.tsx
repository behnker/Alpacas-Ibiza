import React from 'react'
import Script from 'next/script'
import type { Metadata, Viewport } from 'next'
import { Geist, Playfair_Display } from 'next/font/google'

import './globals.css'

const _geistSans = Geist({ subsets: ['latin'] })
const _playfairDisplay = Playfair_Display({ subsets: ['latin'], variable: '--font-display' })

export const metadata: Metadata = {
  title: 'Es Currals Alpacas Ibiza | First Alpaca Farm & Wishfulfilling Weaving Studio',
  description: 'Es Currals Alpacas Ibiza is the very first alpaca farm in Ibiza and is located in the rural north of the island, on an authentic finca in a beautiful natural setting. Here is also the beating heart of Wishfulfilling Weaving, the artisanal weaving studio where, using mainly alpaca wool exclusive scarves are woven by hand on a traditional wooden loom.',
  generator: 'v0.app',
  openGraph: {
    title: 'Es Currals Alpacas Ibiza | First Alpaca Farm & Weaving Studio',
    description: 'The very first alpaca farm in Ibiza. Home to Wishfulfilling Weaving - hand-woven scarves on traditional wooden looms using alpaca wool.',
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

