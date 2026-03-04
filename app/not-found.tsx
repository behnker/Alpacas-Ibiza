import { redirect } from 'next/navigation'
import { headers } from 'next/headers'

/**
 * Root-level 404 handler.
 * Redirects to the locale-specific not-found page so users see
 * the full site shell (Header, Footer, structured data).
 *
 * For SEO: the [locale]/not-found.tsx returns a proper 404 status
 * while keeping all navigation and internal links intact, preserving
 * crawlability and link equity.
 */
export default async function RootNotFound() {
    const headersList = await headers()
    const acceptLanguage = headersList.get('accept-language') || ''
    const locales = ['en', 'de', 'it', 'es', 'nl', 'fr']

    // Detect preferred locale from Accept-Language header
    const preferred = acceptLanguage.split(',')[0]?.split('-')[0]?.toLowerCase()
    const locale = locales.includes(preferred ?? '') ? preferred : 'en'

    redirect(`/${locale}`)
}
