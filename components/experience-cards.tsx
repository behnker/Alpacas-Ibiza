'use client'

import Link from 'next/link'
import { Card } from '@/components/ui/card'
import { ArrowRight } from 'lucide-react'

interface ExperienceCard {
    icon: string
    title: string
    description: string
    cta: string
    href: string
    accent?: string
}

interface ExperienceCardsProps {
    cards: ExperienceCard[]
    title: string
    subtitle: string
}

export function ExperienceCards({ cards, title, subtitle }: ExperienceCardsProps) {
    const accentColors = [
        'from-primary/15 to-primary/5 hover:border-primary/40',
        'from-accent/15 to-accent/5 hover:border-accent/40',
        'from-secondary to-secondary/50 hover:border-primary/40',
    ]

    return (
        <section className="w-full py-16 md:py-24 px-4 bg-secondary/10">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        {title}
                    </h2>
                    <p className="text-foreground/70 max-w-2xl mx-auto">
                        {subtitle}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {cards.map((card, i) => (
                        <Link key={i} href={card.href}>
                            <Card
                                className={`h-full p-8 bg-gradient-to-br ${accentColors[i % accentColors.length]} border-border/50 transition-all cursor-pointer group hover:shadow-lg hover:-translate-y-1 duration-300`}
                            >
                                <div className="text-5xl mb-6">{card.icon}</div>
                                <h3 className="text-xl font-bold text-foreground mb-3">
                                    {card.title}
                                </h3>
                                <p className="text-foreground/70 mb-6 leading-relaxed">
                                    {card.description}
                                </p>
                                <div className="flex items-center text-accent font-medium group-hover:translate-x-1 transition-transform">
                                    <span>{card.cta}</span>
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </div>
                            </Card>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}
