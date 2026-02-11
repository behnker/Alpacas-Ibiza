import { i18nConfig } from '@/i18n.config'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { StickyBookingBar } from '@/components/sticky-booking-bar'

export async function generateStaticParams() {
    return i18nConfig.locales.map((locale) => ({
        locale,
    }))
}

import Script from 'next/script'

export default function LocaleLayout({
    children,
    params,
}: {
    children: React.ReactNode
    params: { locale: string }
}) {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: 'Alpacas Ibiza',
        image: 'https://alpacasibiza.com/images/hero.jpg', // Placeholder
        '@id': 'https://alpacasibiza.com',
        url: 'https://alpacasibiza.com',
        telephone: '+34123456789', // Placeholder
        address: {
            '@type': 'PostalAddress',
            streetAddress: 'Polígono 13, Parcela 42', // Placeholder
            addressLocality: 'Santa Eulària des Riu',
            postalCode: '07840',
            addressCountry: 'ES',
        },
        geo: {
            '@type': 'GeoCoordinates',
            latitude: 38.9845, // Placeholder
            longitude: 1.5342, // Placeholder
        },
        aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '5.0',
            reviewCount: '127',
        },
        priceRange: '€€',
    }

    return (
        <div className="flex min-h-screen flex-col">
            <Script
                id="json-ld"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Header />
            <main className="flex-1">
                {children}
            </main>
            <Footer />
            <StickyBookingBar />
        </div>
    )
}
