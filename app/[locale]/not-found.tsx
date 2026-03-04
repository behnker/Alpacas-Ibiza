'use client'

import Link from 'next/link'
import { useParams } from 'next/navigation'
import type { Locale } from '@/i18n.config'
import { t } from '@/lib/translations'
import { MapPin, Calendar, ShoppingBag, HelpCircle, Home, ArrowRight } from 'lucide-react'

export default function LocaleNotFound() {
    const params = useParams()
    const locale = (params.locale as Locale) || 'en'
    const tr = t(locale)

    const suggestedPages = [
        {
            icon: Home,
            title: tr('notFound.suggestions.home'),
            description: tr('notFound.suggestions.homeDesc'),
            href: `/${locale}`,
        },
        {
            icon: Calendar,
            title: tr('notFound.suggestions.tours'),
            description: tr('notFound.suggestions.toursDesc'),
            href: `/${locale}/tours`,
        },
        {
            icon: ShoppingBag,
            title: tr('notFound.suggestions.shop'),
            description: tr('notFound.suggestions.shopDesc'),
            href: `/${locale}/shop`,
        },
        {
            icon: MapPin,
            title: tr('notFound.suggestions.about'),
            description: tr('notFound.suggestions.aboutDesc'),
            href: `/${locale}/about`,
        },
        {
            icon: HelpCircle,
            title: tr('notFound.suggestions.contact'),
            description: tr('notFound.suggestions.contactDesc'),
            href: `/${locale}/contact`,
        },
    ]

    return (
        <div className="flex flex-col items-center px-4 py-16 md:py-24">
            {/* Hero section */}
            <div className="text-center max-w-2xl mb-12">
                <span className="text-7xl mb-6 block" aria-hidden="true">🦙</span>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-display">
                    {tr('notFound.title')}
                </h1>
                <p className="text-lg text-foreground/70 max-w-md mx-auto">
                    {tr('notFound.subtitle')}
                </p>
            </div>

            {/* Suggested pages grid */}
            <div className="w-full max-w-4xl">
                <h2 className="text-sm font-semibold text-foreground/50 uppercase tracking-wider mb-6 text-center">
                    {tr('notFound.suggestionsTitle')}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {suggestedPages.map((page) => (
                        <Link
                            key={page.href}
                            href={page.href}
                            className="group flex items-start gap-4 p-5 rounded-2xl border border-border bg-background hover:bg-accent/5 hover:border-accent/30 transition-all duration-200"
                        >
                            <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                <page.icon className="w-5 h-5 text-primary" />
                            </div>
                            <div className="flex-1 min-w-0">
                                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors flex items-center gap-1">
                                    {page.title}
                                    <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                                </h3>
                                <p className="text-sm text-foreground/60 mt-1">{page.description}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            {/* CTA */}
            <div className="mt-12 text-center">
                <p className="text-sm text-foreground/50 mb-4">{tr('notFound.ctaText')}</p>
                <a
                    href="https://fareharbor.com/embeds/book/alpacasibiza/?full-items=yes"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-accent hover:bg-accent/90 text-accent-foreground rounded-xl font-medium transition-colors"
                >
                    {tr('nav.bookTour')}
                </a>
            </div>
        </div>
    )
}
