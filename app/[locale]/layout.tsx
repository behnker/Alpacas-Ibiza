import { i18nConfig } from '@/i18n.config'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

export async function generateStaticParams() {
    return i18nConfig.locales.map((locale) => ({
        locale,
    }))
}

export default function LocaleLayout({
    children,
    params,
}: {
    children: React.ReactNode
    params: { locale: string }
}) {
    return (
        <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">
                {children}
            </main>
            <Footer />
        </div>
    )
}
