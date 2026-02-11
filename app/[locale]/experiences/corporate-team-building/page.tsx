import { Hero } from '@/components/hero'
import { Features } from '@/components/features'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { t } from '@/lib/translations'

export default function CorporatePage({ params }: { params: { locale: string } }) {
    const locale = params.locale
    const translate = t(locale as any)

    return (
        <main>
            <Hero
                title={translate('corporate.title')}
                subtitle={translate('corporate.subtitle')}
                cta={{
                    label: translate('corporate.cta'),
                    href: `/${locale}/contact`,
                }}
                backgroundImage="/images/corporate-bg.jpg" // Placeholder
            />

            <section className="w-full py-16 md:py-24 px-4 bg-background">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-foreground mb-6">{translate('corporate.whyTitle')}</h2>
                    <p className="text-lg text-foreground/70 mb-12">
                        {translate('corporate.whyText')}
                    </p>
                </div>

                <Features
                    items={[
                        {
                            title: translate('corporate.features.stress.title'),
                            description: translate('corporate.features.stress.description'),
                            icon: '😌',
                        },
                        {
                            title: translate('corporate.features.communication.title'),
                            description: translate('corporate.features.communication.description'),
                            icon: '🗣️',
                        },
                        {
                            title: translate('corporate.features.creativity.title'),
                            description: translate('corporate.features.creativity.description'),
                            icon: '🧶',
                        },
                        {
                            title: translate('corporate.features.nature.title'),
                            description: translate('corporate.features.nature.description'),
                            icon: '🌿',
                        },
                    ]}
                />
            </section>

            <section className="w-full py-16 px-4 bg-secondary/20">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-foreground mb-8 text-center">{translate('corporate.itinerary.title')}</h2>
                    <div className="space-y-6">
                        <div className="bg-background p-6 rounded-lg shadow-sm border border-border">
                            <h3 className="text-xl font-semibold mb-2">{translate('corporate.itinerary.item1.time')} - {translate('corporate.itinerary.item1.title')}</h3>
                            <p className="text-foreground/70">{translate('corporate.itinerary.item1.desc')}</p>
                        </div>
                        <div className="bg-background p-6 rounded-lg shadow-sm border border-border">
                            <h3 className="text-xl font-semibold mb-2">{translate('corporate.itinerary.item2.time')} - {translate('corporate.itinerary.item2.title')}</h3>
                            <p className="text-foreground/70">{translate('corporate.itinerary.item2.desc')}</p>
                        </div>
                        <div className="bg-background p-6 rounded-lg shadow-sm border border-border">
                            <h3 className="text-xl font-semibold mb-2">{translate('corporate.itinerary.item3.time')} - {translate('corporate.itinerary.item3.title')}</h3>
                            <p className="text-foreground/70">{translate('corporate.itinerary.item3.desc')}</p>
                        </div>
                        <div className="bg-background p-6 rounded-lg shadow-sm border border-border">
                            <h3 className="text-xl font-semibold mb-2">{translate('corporate.itinerary.item4.time')} - {translate('corporate.itinerary.item4.title')}</h3>
                            <p className="text-foreground/70">{translate('corporate.itinerary.item4.desc')}</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="w-full py-16 px-4 bg-primary text-primary-foreground text-center">
                <h2 className="text-3xl font-bold mb-4">{translate('corporate.planTitle')}</h2>
                <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
                    {translate('corporate.planText')}
                </p>
                <Button asChild size="lg" className="bg-background text-primary hover:bg-background/90 text-lg">
                    <Link href={`/${locale}/contact`}>{translate('corporate.planCta')}</Link>
                </Button>
            </section>
        </main>
    )
}
