import { Hero } from '@/components/hero'
import { Button } from '@/components/ui/button'

export default function RomanticPage({ params }: { params: { locale: string } }) {
    // const locale = params.locale

    return (
        <main>
            <Hero
                title="Sunset Romantic Walks"
                subtitle="Golden hour with the alpacas. A private, intimate experience for couples in the heart of Ibiza."
                cta={{
                    label: 'Book Private Sunset Tour',
                    href: 'https://fareharbor.com/embeds/book/alpacasibiza/?full-items=yes',
                }}
                backgroundImage="/images/sunset-bg.jpg" // Placeholder
            />

            <section className="w-full py-16 md:py-24 px-4 bg-background">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl font-serif text-foreground mb-6 italic">
                        "The most magical date we've ever had."
                    </h2>
                    <p className="text-lg text-foreground/70 leading-relaxed mb-8">
                        Escape the crowds. Just you, your partner, and our gentle alpacas wandering through the orange groves as the sun dips below the hills.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                        <div className="text-center">
                            <span className="text-4xl mb-3 block">🥂</span>
                            <h3 className="text-lg font-semibold mb-2">Champagne</h3>
                            <p className="text-sm text-foreground/60">Optional Cava add-on to toast the sunset.</p>
                        </div>
                        <div className="text-center">
                            <span className="text-4xl mb-3 block">📸</span>
                            <h3 className="text-lg font-semibold mb-2">Photos</h3>
                            <p className="text-sm text-foreground/60">Your guide captures candid moments so you can stay present.</p>
                        </div>
                        <div className="text-center">
                            <span className="text-4xl mb-3 block">🤫</span>
                            <h3 className="text-lg font-semibold mb-2">Privacy</h3>
                            <p className="text-sm text-foreground/60">Strictly private tours available upon request.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="w-full py-16 px-4 bg-accent/5">
                <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8">
                    <div className="flex-1">
                        <h2 className="text-3xl font-bold text-foreground mb-4">Perfect for Proposals</h2>
                        <p className="text-foreground/70 mb-6">
                            Thinking of popping the question? We can help orchestrate the perfect moment with the alpacas as your witnesses.
                        </p>
                        <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
                            Contact to Arrange
                        </Button>
                    </div>
                    <div className="flex-1 h-64 bg-muted animate-pulse rounded-lg flex items-center justify-center text-muted-foreground">
                        {/* Placeholder for Proposal Image */}
                        Proposal Image
                    </div>
                </div>
            </section>
        </main>
    )
}
