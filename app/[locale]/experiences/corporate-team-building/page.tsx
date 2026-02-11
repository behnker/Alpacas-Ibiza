import { Hero } from '@/components/hero'
import { Features } from '@/components/features'
import { FAQ } from '@/components/faq'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function CorporatePage({ params }: { params: { locale: string } }) {
    const locale = params.locale

    return (
        <main>
            <Hero
                title="Corporate Retreats & Team Building"
                subtitle="Disconnect to reconnect. Bring your team to the peaceful Ibiza countryside for a unique bonding experience with our alpaca herd."
                cta={{
                    label: 'Inquire for Teams',
                    href: `/${locale}/contact`,
                }}
                backgroundImage="/images/corporate-bg.jpg" // Placeholder
            />

            <section className="w-full py-16 md:py-24 px-4 bg-background">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-foreground mb-6">Why Alpacas for Team Building?</h2>
                    <p className="text-lg text-foreground/70 mb-12">
                        Alpacas are sensitive, calming animals that mirror human energy. interacting with them requires patience, observation, and non-verbal communication—perfect skills for effective teamwork.
                    </p>
                </div>

                <Features
                    items={[
                        {
                            title: 'Stress Reduction',
                            description: 'The calming presence of alpacas lowers cortisol and encourages mindfulness.',
                            icon: '😌',
                        },
                        {
                            title: 'Communication',
                            description: 'Learn to lead without force. Alpacas respond to calm assertiveness.',
                            icon: '🗣️',
                        },
                        {
                            title: 'Creativity',
                            description: 'Weaving workshops stimulate creative problem-solving and focus.',
                            icon: '🧶',
                        },
                        {
                            title: 'Nature Connection',
                            description: 'Get your team out of the office and into the fresh Mediterranean air.',
                            icon: '🌿',
                        },
                    ]}
                />
            </section>

            <section className="w-full py-16 px-4 bg-secondary/20">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Sample Itinerary</h2>
                    <div className="space-y-6">
                        <div className="bg-background p-6 rounded-lg shadow-sm border border-border">
                            <h3 className="text-xl font-semibold mb-2">10:00 AM - Welcome & Refreshments</h3>
                            <p className="text-foreground/70">Coffee, tea, and local pastries on the terrace.</p>
                        </div>
                        <div className="bg-background p-6 rounded-lg shadow-sm border border-border">
                            <h3 className="text-xl font-semibold mb-2">10:30 AM - Meet the Herd</h3>
                            <p className="text-foreground/70">Guided introduction to the alpacas. Learn their names and personalities.</p>
                        </div>
                        <div className="bg-background p-6 rounded-lg shadow-sm border border-border">
                            <h3 className="text-xl font-semibold mb-2">11:30 AM - Team Challenge</h3>
                            <p className="text-foreground/70">Interactive activity: Leading an alpaca through a simple agility course requiring teamwork.</p>
                        </div>
                        <div className="bg-background p-6 rounded-lg shadow-sm border border-border">
                            <h3 className="text-xl font-semibold mb-2">1:00 PM - Farm Lunch</h3>
                            <p className="text-foreground/70">Organic, locally sourced picnic lunch under the carob trees.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="w-full py-16 px-4 bg-primary text-primary-foreground text-center">
                <h2 className="text-3xl font-bold mb-4">Ready to Plan Your Event?</h2>
                <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
                    We customize every corporate package to your team's size and goals. Contact us for a quote.
                </p>
                <Button asChild size="lg" className="bg-background text-primary hover:bg-background/90 text-lg">
                    <Link href={`/${locale}/contact`}>Request Proposal</Link>
                </Button>
            </section>
        </main>
    )
}
