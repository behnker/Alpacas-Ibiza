'use client'

import { useEffect } from 'react'

export function FareHarborCalendar() {
    useEffect(() => {
        // Load FareHarbor script
        const script = document.createElement('script')
        script.src = 'https://fareharbor.com/embeds/api/v1/'
        script.async = true
        document.body.appendChild(script)

        script.onload = () => {
            // Initialize FareHarbor calendar
            if (window.FareHarbor) {
                window.FareHarbor.init()
            }
        }

        return () => {
            // Cleanup
            if (document.body.contains(script)) {
                document.body.removeChild(script)
            }
        }
    }, [])

    return (
        <div className="fareharbor-calendar-wrapper">
            {/* FareHarbor Calendar Embed */}
            <div
                className="fareharbor-calendar"
                data-app="alpacasibiza"
                data-flow="671157"
            >
                <a
                    href="https://fareharbor.com/embeds/book/alpacasibiza/?full-items=yes"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                    View Available Dates &amp; Book Now
                </a>
            </div>

            <style jsx>{`
        .fareharbor-calendar-wrapper {
          min-height: 500px;
        }
        
        .fareharbor-calendar {
          width: 100%;
        }
      `}</style>
        </div>
    )
}

declare global {
    interface Window {
        FareHarbor: any
    }
}
