import { notFound } from 'next/navigation'

/**
 * Catch-all route for any unknown path under a locale.
 * This triggers the [locale]/not-found.tsx page with a proper 404 status,
 * keeping the full site shell (Header, Footer, JSON-LD) intact for SEO.
 */
export default function CatchAllPage() {
    notFound()
}
