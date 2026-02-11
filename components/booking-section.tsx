'use client'

import { ArrowRight } from 'lucide-react'

export function BookingSection() {
    return (
        <div className="w-full text-center py-8">
            <a
                href="https://fareharbor.com/embeds/book/alpacasibiza/?full-items=yes"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
                View Available Dates & Book Now
                <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <p className="mt-4 text-sm text-foreground/60">
                Secure booking powered by FareHarbor
            </p>
        </div>
    )
}
