import { Hero } from '@/components/hero'
import { FAQ } from '@/components/faq'
import { t } from '@/lib/translations'

export default function FamilyPage({ params }: { params: { locale: string } }) {
    const locale = params.locale
    const translate = t(locale as any)

    return (
        <main>
            <Hero
                title={translate('family.title')}
                subtitle={translate('family.subtitle')}
                cta={{
                    label: translate('family.cta'),
                    href: 'https://fareharbor.com/embeds/book/alpacasibiza/?full-items=yes',
                }}
                backgroundImage="/images/family-bg.jpg" // Placeholder
            />

            <section className="w-full py-16 md:py-24 px-4 bg-background">
                <div className="max-w-5xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-foreground mb-6">{translate('family.educationTitle')}</h2>
                            <p className="text-lg text-foreground/70 mb-6">
                                {translate('family.educationText')}
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-3">
                                    <span className="text-green-600">✓</span>
                                    <span><strong>{translate('family.points.respect')}</strong></span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="text-green-600">✓</span>
                                    <span><strong>{translate('family.points.biology')}</strong></span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="text-green-600">✓</span>
                                    <span><strong>{translate('family.points.sustainability')}</strong></span>
                                </li>
                            </ul>
                        </div>
                        <div className="bg-muted h-80 rounded-lg flex items-center justify-center text-muted-foreground">
                            {/* Image Placeholder */}
                            Kids feeding alpacas
                        </div>
                    </div>
                </div>
            </section>

            <section className="w-full py-16 px-4 bg-secondary/30">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl font-bold mb-8 text-center">{translate('family.safetyTitle')}</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="bg-background p-4 rounded text-center border border-border">
                            <div className="text-3xl mb-2">🛡️</div>
                            <h3 className="font-semibold">{translate('family.safety.gentle.title')}</h3>
                            <p className="text-xs text-foreground/60">{translate('family.safety.gentle.desc')}</p>
                        </div>
                        <div className="bg-background p-4 rounded text-center border border-border">
                            <div className="text-3xl mb-2">👶</div>
                            <h3 className="font-semibold">{translate('family.safety.stroller.title')}</h3>
                            <p className="text-xs text-foreground/60">{translate('family.safety.stroller.desc')}</p>
                        </div>
                        <div className="bg-background p-4 rounded text-center border border-border">
                            <div className="text-3xl mb-2">🧼</div>
                            <h3 className="font-semibold">{translate('family.safety.hygiene.title')}</h3>
                            <p className="text-xs text-foreground/60">{translate('family.safety.hygiene.desc')}</p>
                        </div>
                        <div className="bg-background p-4 rounded text-center border border-border">
                            <div className="text-3xl mb-2">🥤</div>
                            <h3 className="font-semibold">{translate('family.safety.refreshments.title')}</h3>
                            <p className="text-xs text-foreground/60">{translate('family.safety.refreshments.desc')}</p>
                        </div>
                    </div>
                </div>
            </section>

            <FAQ
                items={[
                    {
                        question: translate('family.faq.age.q'),
                        answer: translate('family.faq.age.a'),
                    },
                    {
                        question: translate('family.faq.safe.q'),
                        answer: translate('family.faq.safe.a'),
                    },
                    {
                        question: translate('family.faq.duration.q'),
                        answer: translate('family.faq.duration.a'),
                    },
                ]}
            />
        </main>
    )
}
