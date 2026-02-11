'use client'

import { ArrowRight } from 'lucide-react'

export function BookingSection() {
    // Mock upcoming dates - in production, these would come from FareHarbor API
    const upcomingDates = [
        { date: '15', month: 'FEB', available: 3 },
        { date: '17', month: 'FEB', available: 5 },
        { date: '20', month: 'FEB', available: 2 },
        { date: '22', month: 'FEB', available: 4 },
    ]

    return (
        <div className="w-full">
            {/* Upcoming Available Dates */}
            <div className="mb-8">
                <h3 className="text-xl font-semibold text-center mb-6 text-foreground">
                    Next Available Dates
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto mb-8">
                    {upcomingDates.map((slot, idx) => (
                        <div
                            key={idx}
                            className="bg-background border-2 border-primary/20 rounded-xl p-4 text-center hover:border-primary/40 transition-colors"
                        >
                            <div className="text-3xl font-bold text-primary">{slot.date}</div>
                            <div className="text-sm text-foreground/60 uppercase tracking-wide">
                                {slot.month}
                            </div>
                            <div className="mt-2 text-xs text-foreground/50">
                                {slot.available} spots left
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Main Booking CTA */}
            <div className="text-center">
                <a
                    href="https://fareharbor.com/embeds/book/alpacasibiza/?full-items=yes"
                    className="inline-flex items-center justify-center px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
                >
                    View All Dates & Book Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                </a>
                <p className="mt-4 text-sm text-foreground/60">
                    Secure booking powered by FareHarbor
                </p>
            </div>
        </div>
    )
}
