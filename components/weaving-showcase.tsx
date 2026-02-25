'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface WeavingShowcaseProps {
    title: string
    subtitle: string
    description: string
    cta: string
    href: string
}

export function WeavingShowcase({
    title,
    subtitle,
    description,
    cta,
    href,
}: WeavingShowcaseProps) {
    return (
        <section className="w-full py-16 md:py-24 px-4 bg-background">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
                    {/* Image / Visual Side */}
                    <div className="relative rounded-2xl overflow-hidden aspect-[4/3] group">
                        <div
                            className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary to-accent/15"
                        />
                        {/* Decorative loom pattern */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="relative w-full h-full flex flex-col items-center justify-center gap-3 p-12">
                                {/* Warp threads */}
                                <div className="absolute inset-x-12 inset-y-8 flex gap-2 opacity-20">
                                    {Array.from({ length: 12 }).map((_, i) => (
                                        <div
                                            key={i}
                                            className="flex-1 bg-primary/40 rounded-full"
                                        />
                                    ))}
                                </div>
                                {/* Weft threads */}
                                <div className="absolute inset-x-8 inset-y-12 flex flex-col gap-2 opacity-15">
                                    {Array.from({ length: 8 }).map((_, i) => (
                                        <div
                                            key={i}
                                            className="w-full flex-1 bg-accent/40 rounded-full"
                                        />
                                    ))}
                                </div>
                                {/* Center icon */}
                                <div className="relative z-10 text-7xl md:text-8xl transform group-hover:scale-110 transition-transform duration-500">
                                    🧶
                                </div>
                                <p className="relative z-10 text-sm font-medium text-foreground/50 tracking-widest uppercase">
                                    Handcrafted in Ibiza
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Text Side */}
                    <div className="space-y-6">
                        <div>
                            <p className="text-sm font-medium text-accent tracking-widest uppercase mb-2">
                                {subtitle}
                            </p>
                            <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
                                {title}
                            </h2>
                        </div>
                        <p className="text-foreground/70 text-lg leading-relaxed">
                            {description}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button
                                asChild
                                size="lg"
                                className="bg-accent hover:bg-accent/90 text-accent-foreground"
                            >
                                <Link href={href}>
                                    {cta}
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
