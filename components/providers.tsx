'use client'

import { SessionProvider } from 'next-auth/react'
import { GoogleAnalytics } from './google-analytics'

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <GoogleAnalytics />
      {children}
    </SessionProvider>
  )
}