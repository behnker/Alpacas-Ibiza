import type { MetadataRoute } from 'next'
import { i18nConfig } from '@/i18n.config'

const BASE_URL = 'https://alpacasibiza.com'

const routes = [
    '',           // homepage
    '/tours',
    '/about',
    '/contact',
    '/shop',
    '/shop/woven',
    '/shop/commission',
    '/shop/alcaca',
    '/experiences/corporate-team-building',
    '/experiences/romantic-sunset',
    '/experiences/family-farm-days',
    '/privacy',
    '/terms',
    '/cookies',
]

export default function sitemap(): MetadataRoute.Sitemap {
    const entries: MetadataRoute.Sitemap = []

    for (const locale of i18nConfig.locales) {
        for (const route of routes) {
            entries.push({
                url: `${BASE_URL}/${locale}${route}`,
                lastModified: new Date(),
                changeFrequency: route === '' ? 'weekly' : 'monthly',
                priority: route === '' ? 1.0 : route === '/tours' ? 0.9 : 0.7,
                alternates: {
                    languages: Object.fromEntries(
                        i18nConfig.locales.map((l) => [l, `${BASE_URL}/${l}${route}`])
                    ),
                },
            })
        }
    }

    return entries
}
