import type { Metadata } from 'next'
import { i18nConfig } from '@/i18n.config'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { StickyBookingBar } from '@/components/sticky-booking-bar'
import { localBusinessSchema, organizationSchema, toJsonLd } from '@/lib/structured-data'

const BASE_URL = 'https://alpacasibiza.com'

export async function generateStaticParams() {
    return i18nConfig.locales.map((locale) => ({ locale }))
}

export async function generateMetadata({
    params,
}: {
    params: { locale: string }
}): Promise<Metadata> {
    const locale = params.locale
    return {
        metadataBase: new URL(BASE_URL),
        alternates: {
            canonical: `/${locale}`,
            languages: Object.fromEntries(
                i18nConfig.locales.map((l) => [l, `/${l}`])
            ),
        },
        openGraph: {
            siteName: 'Alpacas Ibiza',
            locale,
            type: 'website',
            images: [
                {
                    url: '/images/og-default.webp',
                    width: 1200,
                    height: 630,
                    alt: 'Alpaca Trekking Santa Eulària – Ibiza Eco-Tourism',
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            images: ['/images/og-default.webp'],
        },
    }
}

export default function LocaleLayout({
    children,
    params,
}: {
    children: React.ReactNode
    params: { locale: string }
}) {
    const schemas = [localBusinessSchema(), organizationSchema()]

    return (
        <div className="flex min-h-screen flex-col">
            {schemas.map((schema, i) => (
                <script
                    key={i}
                    id={`json-ld-${i}`}
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: toJsonLd(schema) }}
                />
            ))}
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
            <StickyBookingBar />
        </div>
    )
}
