import { Hero } from '@/components/hero'
import { FAQ } from '@/components/faq'

export default function FamilyPage({ params }: { params: { locale: string } }) {
    // const locale = params.locale

    return (
        <main>
            <Hero
                title="Family Farm Days"
                subtitle="Introduce your children to the joy of animals. Safe, educational, and fun for all ages."
                cta={{
                    label: 'Book Family Visit',
                    href: 'https://fareharbor.com/embeds/book/alpacasibiza/?full-items=yes',
                }}
                backgroundImage="/images/family-bg.jpg" // Placeholder
            />

            <section className="w-full py-16 md:py-24 px-4 bg-background">
                <div className="max-w-5xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-foreground mb-6">Education meets Adorable</h2>
                            <p className="text-lg text-foreground/70 mb-6">
                                Our farm isn't just a petting zoo—it's an educational experience. Kids learn:
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-3">
                                    <span className="text-green-600">✓</span>
                                    <span><strong>Respect:</strong> How to approach animals gently.</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="text-green-600">✓</span>
                                    <span><strong>Biology:</strong> Why alpacas have soft fleece and pads instead of hooves.</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="text-green-600">✓</span>
                                    <span><strong>Sustainability:</strong> How we use alpaca manure ("Oro Negro") for farming.</span>
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
                    <h2 className="text-2xl font-bold mb-8 text-center">Safety First</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="bg-background p-4 rounded text-center border border-border">
                            <div className="text-3xl mb-2">🛡️</div>
                            <h3 className="font-semibold">Gentle Animals</h3>
                            <p className="text-xs text-foreground/60">Our herd is socialized and used to children.</p>
                        </div>
                        <div className="bg-background p-4 rounded text-center border border-border">
                            <div className="text-3xl mb-2">👶</div>
                            <h3 className="font-semibold">Stroller Friendly</h3>
                            <p className="text-xs text-foreground/60">Paths are accessible for sturdy strollers.</p>
                        </div>
                        <div className="bg-background p-4 rounded text-center border border-border">
                            <div className="text-3xl mb-2">🧼</div>
                            <h3 className="font-semibold">Hygiene</h3>
                            <p className="text-xs text-foreground/60">Hand washing stations available.</p>
                        </div>
                        <div className="bg-background p-4 rounded text-center border border-border">
                            <div className="text-3xl mb-2">🥤</div>
                            <h3 className="font-semibold">Refreshments</h3>
                            <p className="text-xs text-foreground/60">Kid-friendly drinks and snacks.</p>
                        </div>
                    </div>
                </div>
            </section>

            <FAQ
                items={[
                    {
                        question: 'What is the minimum age?',
                        answer: 'We welcome all ages! Children under 3 are free. We recommend ages 4+ for the full walking experience.',
                    },
                    {
                        question: 'Are the alpacas safe?',
                        answer: 'Yes, alpacas do not bite (they only have bottom teeth!) and are generally very calm. We teach your children exactly how to interact safely.',
                    },
                    {
                        question: 'How long is the visit?',
                        answer: 'Family visits are typically 1.5 to 2 hours, which is perfect for shorter attention spans.',
                    },
                ]}
            />
        </main>
    )
}
